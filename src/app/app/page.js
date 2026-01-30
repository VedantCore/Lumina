'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar as CalendarIcon, 
  Plus, 
  Search, 
  Settings, 
  User, 
  LogOut,
  Sparkles,
  CheckCircle2,
  Circle,
  Clock,
  Menu,
  X
} from 'lucide-react';

export default function AppPage() {
  const [rawInput, setRawInput] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Review project proposal', date: '2026-01-30', completed: false, time: '10:00 AM' },
    { id: 2, title: 'Team meeting', date: '2026-01-30', completed: false, time: '2:00 PM' },
    { id: 3, title: 'Finish documentation', date: '2026-01-31', completed: false, time: '4:00 PM' },
  ]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userTier, setUserTier] = useState('pro'); // 'free' or 'pro'
  const [isProcessing, setIsProcessing] = useState(false);

  // AI-powered task structuring (Pro feature)
  const structureTask = (input) => {
    const lowerInput = input.toLowerCase();
    let taskDate = new Date();
    let taskTime = null;
    let taskTitle = input;

    // Extract time (2pm, 14:00, at 3pm, etc.)
    const timePatterns = [
      /at (\d{1,2})(:(\d{2}))?\s*(am|pm)/i,
      /(\d{1,2})(:(\d{2}))?\s*(am|pm)/i,
      /(\d{1,2}):(\d{2})/,
    ];

    for (const pattern of timePatterns) {
      const timeMatch = input.match(pattern);
      if (timeMatch) {
        let hour = parseInt(timeMatch[1]);
        const minute = timeMatch[3] ? parseInt(timeMatch[3]) : 0;
        const meridiem = timeMatch[4]?.toLowerCase();

        if (meridiem === 'pm' && hour !== 12) hour += 12;
        if (meridiem === 'am' && hour === 12) hour = 0;

        taskTime = `${hour % 12 || 12}:${minute.toString().padStart(2, '0')} ${hour >= 12 ? 'PM' : 'AM'}`;
        taskTitle = input.replace(timeMatch[0], '').trim();
        break;
      }
    }

    // Extract date
    const today = new Date();
    
    if (lowerInput.includes('tomorrow')) {
      taskDate = new Date(today);
      taskDate.setDate(taskDate.getDate() + 1);
      taskTitle = taskTitle.replace(/tomorrow/gi, '').trim();
    } else if (lowerInput.includes('next week')) {
      taskDate = new Date(today);
      taskDate.setDate(taskDate.getDate() + 7);
      taskTitle = taskTitle.replace(/next week/gi, '').trim();
    } else if (lowerInput.includes('monday')) {
      taskDate = new Date(today);
      const daysUntilMonday = (1 + 7 - taskDate.getDay()) % 7 || 7;
      taskDate.setDate(taskDate.getDate() + daysUntilMonday);
      taskTitle = taskTitle.replace(/next monday|monday/gi, '').trim();
    } else if (lowerInput.includes('tuesday')) {
      taskDate = new Date(today);
      const daysUntilTuesday = (2 + 7 - taskDate.getDay()) % 7 || 7;
      taskDate.setDate(taskDate.getDate() + daysUntilTuesday);
      taskTitle = taskTitle.replace(/next tuesday|tuesday/gi, '').trim();
    } else if (lowerInput.includes('wednesday')) {
      taskDate = new Date(today);
      const daysUntilWednesday = (3 + 7 - taskDate.getDay()) % 7 || 7;
      taskDate.setDate(taskDate.getDate() + daysUntilWednesday);
      taskTitle = taskTitle.replace(/next wednesday|wednesday/gi, '').trim();
    } else if (lowerInput.includes('thursday')) {
      taskDate = new Date(today);
      const daysUntilThursday = (4 + 7 - taskDate.getDay()) % 7 || 7;
      taskDate.setDate(taskDate.getDate() + daysUntilThursday);
      taskTitle = taskTitle.replace(/next thursday|thursday/gi, '').trim();
    } else if (lowerInput.includes('friday')) {
      taskDate = new Date(today);
      const daysUntilFriday = (5 + 7 - taskDate.getDay()) % 7 || 7;
      taskDate.setDate(taskDate.getDate() + daysUntilFriday);
      taskTitle = taskTitle.replace(/next friday|friday/gi, '').trim();
    } else if (lowerInput.includes('saturday')) {
      taskDate = new Date(today);
      const daysUntilSaturday = (6 + 7 - taskDate.getDay()) % 7 || 7;
      taskDate.setDate(taskDate.getDate() + daysUntilSaturday);
      taskTitle = taskTitle.replace(/next saturday|saturday/gi, '').trim();
    } else if (lowerInput.includes('sunday')) {
      taskDate = new Date(today);
      const daysUntilSunday = (7 - taskDate.getDay()) % 7 || 7;
      taskDate.setDate(taskDate.getDate() + daysUntilSunday);
      taskTitle = taskTitle.replace(/next sunday|sunday/gi, '').trim();
    } else if (lowerInput.includes('today')) {
      taskTitle = taskTitle.replace(/today/gi, '').trim();
    }

    // Clean up common words
    taskTitle = taskTitle.replace(/\s+on\s+|\s+at\s+/gi, ' ').trim();
    taskTitle = taskTitle.charAt(0).toUpperCase() + taskTitle.slice(1);

    return {
      title: taskTitle,
      date: taskDate.toISOString().split('T')[0],
      time: taskTime || new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rawInput.trim()) return;

    setIsProcessing(true);

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 800));

    let newTask;

    if (userTier === 'pro') {
      // AI-powered structuring for Pro users
      const structured = structureTask(rawInput);
      newTask = {
        id: Date.now(),
        title: structured.title,
        date: structured.date,
        completed: false,
        time: structured.time
      };
    } else {
      // Basic task creation for Free users
      newTask = {
        id: Date.now(),
        title: rawInput,
        date: selectedDate.toISOString().split('T')[0],
        completed: false,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
    }

    setTasks([...tasks, newTask]);
    setRawInput('');
    setIsProcessing(false);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const days = [];
    const startPadding = firstDay.getDay();
    
    // Add padding for days before month starts
    for (let i = 0; i < startPadding; i++) {
      days.push(null);
    }
    
    // Add all days in month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const getTasksForDate = (date) => {
    if (!date) return [];
    const dateStr = date.toISOString().split('T')[0];
    return tasks.filter(task => task.date === dateStr);
  };

  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelectedDate = (date) => {
    if (!date) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className="fixed lg:relative z-20 w-80 h-screen bg-slate-900 border-r border-slate-800 flex flex-col"
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-400" />
              <span className="text-xl font-bold">Lumina</span>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">John Doe</p>
              <div className="flex items-center gap-2">
                <p className="text-xs text-slate-400">{userTier === 'pro' ? 'Pro Plan' : 'Free Plan'}</p>
                <button
                  onClick={() => setUserTier(userTier === 'pro' ? 'free' : 'pro')}
                  className="text-xs text-indigo-400 hover:text-indigo-300"
                >
                  {userTier === 'pro' ? '(Switch to Free)' : '(Upgrade)'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-sm text-slate-400 uppercase tracking-wider">
              {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h3>
            <div className="flex gap-1">
              <button 
                onClick={() => {
                  const newDate = new Date(selectedDate);
                  newDate.setMonth(newDate.getMonth() - 1);
                  setSelectedDate(newDate);
                }}
                className="text-slate-400 hover:text-white text-xs px-2 py-1 hover:bg-slate-800 rounded"
              >
                ←
              </button>
              <button 
                onClick={() => {
                  const newDate = new Date(selectedDate);
                  newDate.setMonth(newDate.getMonth() + 1);
                  setSelectedDate(newDate);
                }}
                className="text-slate-400 hover:text-white text-xs px-2 py-1 hover:bg-slate-800 rounded"
              >
                →
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="text-center text-xs text-slate-500 font-medium py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {getDaysInMonth(selectedDate).map((date, index) => {
              const tasksOnDate = date ? getTasksForDate(date) : [];
              return (
                <button
                  key={index}
                  onClick={() => date && setSelectedDate(new Date(date))}
                  disabled={!date}
                  className={`
                    aspect-square flex flex-col items-center justify-center text-sm rounded-lg transition-all relative
                    ${!date ? 'invisible' : ''}
                    ${isToday(date) ? 'bg-indigo-500/20 border border-indigo-500/50' : ''}
                    ${isSelectedDate(date) ? 'bg-indigo-500 text-white' : 'text-slate-300 hover:bg-slate-800'}
                    ${tasksOnDate.length > 0 && !isSelectedDate(date) ? 'font-semibold' : ''}
                  `}
                >
                  {date && date.getDate()}
                  {tasksOnDate.length > 0 && (
                    <div className="absolute bottom-1 flex gap-0.5">
                      {tasksOnDate.slice(0, 3).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-indigo-400 rounded-full" />
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Stats */}
          <div className="mt-6 space-y-2">
            <div className="p-3 bg-slate-800/50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Today's Tasks</span>
                <span className="text-sm font-semibold text-indigo-400">
                  {getTasksForDate(new Date()).length}
                </span>
              </div>
            </div>
            <div className="p-3 bg-slate-800/50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Completed</span>
                <span className="text-sm font-semibold text-emerald-400">
                  {tasks.filter(t => t.completed).length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800">
          <button className="w-full flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all">
            <Settings className="w-4 h-4" />
            <span className="text-sm">Settings</span>
          </button>
          <button className="w-full flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-all">
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        
        {/* Top Bar */}
        <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-slate-400 hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-semibold">My Tasks</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search tasks..."
                className="pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm focus:outline-none focus:border-indigo-500 transition-colors w-64"
              />
            </div>
            <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all">
              <CalendarIcon className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Main Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* AI Input Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-gradient-to-br ${userTier === 'pro' ? 'from-indigo-950/50' : 'from-slate-900'} to-slate-900 border border-slate-800 rounded-2xl p-6 relative`}
            >
              {userTier === 'free' && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-xs font-semibold rounded-full border border-indigo-500/30">
                    PRO FEATURE
                  </span>
                </div>
              )}
              
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className={`w-5 h-5 ${userTier === 'pro' ? 'text-indigo-400' : 'text-slate-600'}`} />
                <h2 className="text-lg font-semibold">
                  {userTier === 'pro' ? 'AI-Powered Task Creation' : 'Create Task'}
                </h2>
              </div>
              
              <form onSubmit={handleSubmit}>
                <textarea
                  value={rawInput}
                  onChange={(e) => setRawInput(e.target.value)}
                  placeholder={userTier === 'pro' 
                    ? "Just type naturally... e.g., 'Call John tomorrow at 2pm about the project' or 'Buy groceries on Friday'"
                    : "Enter task title... (Upgrade to Pro for AI-powered natural language processing)"
                  }
                  disabled={isProcessing}
                  className="w-full h-24 bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none disabled:opacity-50"
                />
                
                <div className="flex items-center justify-between mt-4">
                  {userTier === 'pro' ? (
                    <p className="text-xs text-slate-400">
                      ✨ Lumina will automatically extract dates, times, and structure your task
                    </p>
                  ) : (
                    <p className="text-xs text-slate-500">
                      📅 Task will be added to currently selected date
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 disabled:bg-slate-700 disabled:cursor-not-allowed rounded-lg font-medium transition-all flex items-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="w-4 h-4" />
                        </motion.div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        Add Task
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Tasks for Selected Date */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">
                  Tasks for {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </h2>
                <span className="text-sm text-slate-400">
                  {getTasksForDate(selectedDate).length} tasks
                </span>
              </div>

              <div className="space-y-2">
                {getTasksForDate(selectedDate).length === 0 ? (
                  <div className="text-center py-12 text-slate-400">
                    <Clock className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No tasks for this date</p>
                    <p className="text-sm mt-1">Add one above to get started</p>
                  </div>
                ) : (
                  getTasksForDate(selectedDate).map(task => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`
                        p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition-all cursor-pointer
                        ${task.completed ? 'opacity-60' : ''}
                      `}
                      onClick={() => toggleTask(task.id)}
                    >
                      <div className="flex items-center gap-4">
                        <button 
                          className="flex-shrink-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTask(task.id);
                          }}
                        >
                          {task.completed ? (
                            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                          ) : (
                            <Circle className="w-6 h-6 text-slate-600 hover:text-slate-400 transition-colors" />
                          )}
                        </button>
                        
                        <div className="flex-1">
                          <p className={`font-medium ${task.completed ? 'line-through text-slate-500' : ''}`}>
                            {task.title}
                          </p>
                          <p className="text-sm text-slate-400 mt-1">
                            <Clock className="w-3 h-3 inline mr-1" />
                            {task.time}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>

            {/* All Upcoming Tasks */}
            <div>
              <h2 className="text-lg font-semibold mb-4">All Upcoming Tasks</h2>
              <div className="space-y-2">
                {tasks.filter(t => !t.completed).map(task => (
                  <div
                    key={task.id}
                    className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <button onClick={() => toggleTask(task.id)}>
                        <Circle className="w-5 h-5 text-slate-600 hover:text-slate-400 transition-colors" />
                      </button>
                      <div className="flex-1">
                        <p className="font-medium">{task.title}</p>
                        <p className="text-sm text-slate-400 mt-1">
                          {new Date(task.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {task.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
