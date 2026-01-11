import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Lock, Cloud, Calendar, TrendingUp, MessageCircle, Signal, Wifi, Battery, Volume2, VolumeX, Mic, MicOff } from "lucide-react";
interface DemoStep {
  id: number;
  title: string;
  type: 'welcome' | 'hybrid-system' | 'floating' | 'smart-prompting' | 'privacy-modes' | 'planning' | 'unlimited-chats';
  emojiCode: string;
}
const InteractiveFynuuDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const steps: DemoStep[] = [{
    id: 0,
    title: "Welcome",
    type: 'welcome',
    emojiCode: '1f44b'
  }, {
    id: 1,
    title: "Morning Alarm",
    type: 'welcome',
    emojiCode: '23f0'
  }, {
    id: 2,
    title: "Hybrid System",
    type: 'hybrid-system',
    emojiCode: '1f512'
  }, {
    id: 3,
    title: "Floating Window",
    type: 'floating',
    emojiCode: '1f4ac'
  }, {
    id: 4,
    title: "Smart Prompting",
    type: 'smart-prompting',
    emojiCode: '1f9e0'
  }, {
    id: 5,
    title: "Privacy Modes",
    type: 'privacy-modes',
    emojiCode: '1f3a7'
  }, {
    id: 6,
    title: "Planning Features",
    type: 'planning',
    emojiCode: '1f4ca'
  }];
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(prev => prev < steps.length - 1 ? prev + 1 : prev);
      setIsAnimating(false);
    }, 300);
  };
  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(prev => prev > 0 ? prev - 1 : prev);
      setIsAnimating(false);
    }, 300);
  };
  const handleSkip = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(steps.length - 1);
      setIsAnimating(false);
    }, 300);
  };
  const goToStep = (index: number) => {
    if (isAnimating || index === currentStep) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(index);
      setIsAnimating(false);
    }, 300);
  };
  const currentStepData = steps[currentStep];
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        // Welcome Screen
        return <div className="h-full flex flex-col items-center justify-center bg-gradient-to-b from-black via-black to-primary/10 px-6">
          <div className="animate-wave">
            <picture>
              <source srcSet={`https://fonts.gstatic.com/s/e/notoemoji/latest/${currentStepData.emojiCode}/512.webp`} type="image/webp" />
              <img src={`https://fonts.gstatic.com/s/e/notoemoji/latest/${currentStepData.emojiCode}/512.gif`} alt="Waving" width="120" height="120" className="w-32 h-32 animate-pulse-gentle" />
            </picture>
          </div>
          <h2 className="text-white text-2xl font-bold mt-6 text-center">
            Hello! I'm Fynuu
          </h2>
          <p className="text-white/70 text-center mt-3 text-sm max-w-xs">
            Your friendly companion, here to make your life easier
          </p>
          <div className="mt-8 w-full max-w-xs">
            <Button onClick={handleNext} className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12 animate-pulse-gentle">
              Tap to explore
            </Button>
          </div>
        </div>;
      case 1:
        // Morning Alarm with Day Summary
        return <div className="h-full flex flex-col items-center justify-center bg-black px-6 pt-16">
          <div className="animate-bounce mb-4">
            <picture>
              <source srcSet={`https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.webp`} type="image/webp" />
              <img src={`https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.gif`} alt="Alarm" width="80" height="80" className="w-20 h-20" />
            </picture>
          </div>

          <h1 className="text-white text-6xl font-light mt-2 mb-2">06:30</h1>
          <p className="text-white/60 text-sm mb-8">Mon, Oct 6 2025</p>

          <div className="bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 rounded-2xl p-5 mb-6 w-full max-w-xs backdrop-blur-sm">
            <p className="text-yellow-400 text-base font-semibold mb-4 flex items-center gap-2">
              <span>⚡</span> Busy Day Ahead
            </p>
            <div className="space-y-3 text-white/90 text-sm">
              <p className="flex items-center gap-2">☕ Coffee at 7:30 AM</p>
              <p className="flex items-center gap-2">📧 Check emails by 8:30 AM</p>
              <p className="flex items-center gap-2">💼 Team meeting at 10:00 AM</p>
              <p className="flex items-center gap-2">📝 Finish report by 2:00 PM</p>
            </div>
          </div>

          <p className="text-white text-sm font-semibold mb-3">Snooze Alarm</p>
          <div className="flex gap-2 mb-6">
            {['+ 5m', '+ 15m', '+ 30m'].map(label => <button key={label} className="bg-white/10 hover:bg-white/20 text-white/80 text-xs px-4 py-2 rounded-lg transition-colors">
              {label}
            </button>)}
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-3 rounded-xl w-full max-w-xs transition-colors">
            Dismiss Alarm
          </button>
        </div>;
      case 2:
        // Hybrid Processing System
        return <div className="h-full flex flex-col items-center justify-center bg-gradient-to-b from-black to-primary/5 px-6 py-8">
          <div className="text-center mb-8">
            <picture>
              <source srcSet={`https://fonts.gstatic.com/s/e/notoemoji/latest/1f512/512.webp`} type="image/webp" />
              <img src={`https://fonts.gstatic.com/s/e/notoemoji/latest/1f512/512.gif`} alt="Lock" width="64" height="64" className="w-16 h-16 mx-auto animate-pulse-gentle" />
            </picture>
            <h3 className="text-white text-xl font-bold mt-4">Hybrid Processing</h3>
            <p className="text-white/60 text-xs mt-2">Your privacy, our priority</p>
          </div>

          <div className="space-y-4 w-full max-w-xs">
            {/* On-Device Processing */}
            <div className="bg-gradient-to-br from-green-600/20 to-green-600/5 border border-green-600/30 rounded-xl p-4 backdrop-blur-sm animate-slide-fade">
              <div className="flex items-center gap-3 mb-3">
                <Lock className="w-5 h-5 text-green-400" />
                <h4 className="text-white font-semibold text-sm">On-Device Processing</h4>
              </div>
              <p className="text-white/70 text-xs leading-relaxed">
                Your personal data stays on your device. Fast, secure, and private.
              </p>
            </div>

            {/* Animated Flow */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{
                  animationDelay: '0.2s'
                }}></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{
                  animationDelay: '0.4s'
                }}></div>
              </div>
            </div>

            {/* Cloud Processing */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-4 backdrop-blur-sm animate-slide-fade" style={{
              animationDelay: '0.2s'
            }}>
              <div className="flex items-center gap-3 mb-3">
                <Cloud className="w-5 h-5 text-primary" />
                <h4 className="text-white font-semibold text-sm">Cloud Processing</h4>
              </div>
              <p className="text-white/70 text-xs leading-relaxed">
                Heavy tasks processed securely in the cloud when needed for better results.
              </p>
            </div>
          </div>

          <p className="text-white/60 text-xs text-center mt-6 max-w-xs leading-relaxed">
            Secure hybrid system - process locally first, use cloud only when beneficial
          </p>
        </div>;
      case 3:
        // Floating Window Feature
        return <div className="h-full flex flex-col bg-gradient-to-b from-primary/5 to-black relative overflow-hidden">
          {/* Simulated Home Screen */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-7xl text-white/10 font-light">11:13</div>
          </div>

          {/* App Icons Grid */}
          <div className="absolute top-20 left-0 right-0 grid grid-cols-4 gap-3 px-5">
            {['📷', '📞', '✉️', '🎵', '📱', '🌐', '⚙️', '🎮'].map((emoji, i) => <div key={i} className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center text-xl">
              {emoji}
            </div>)}
          </div>

          {/* Floating Fynuu Window */}
          <div className="absolute top-1/3 right-6 bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-xl border border-primary/40 rounded-3xl p-4 shadow-2xl animate-bounce-in z-10">
            <picture>
              <source srcSet={`https://fonts.gstatic.com/s/e/notoemoji/latest/1f4ac/512.webp`} type="image/webp" />
              <img src={`https://fonts.gstatic.com/s/e/notoemoji/latest/1f4ac/512.gif`} alt="Fynuu" width="48" height="48" className="w-12 h-12 mx-auto animate-pulse-gentle" />
            </picture>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 mt-3">
              <p className="text-white text-xs font-medium">💧 Time to drink water!</p>
            </div>
            <div className="flex gap-2 mt-3">
              <button className="flex-1 bg-white/20 hover:bg-white/30 rounded-lg py-2 text-xs text-white transition-colors">
                Later
              </button>
              <button className="flex-1 bg-primary hover:bg-primary/90 rounded-lg py-2 text-xs text-white font-medium transition-colors">
                Done
              </button>
            </div>
          </div>

          {/* Bottom Dock */}
          <div className="absolute bottom-6 left-0 right-0 px-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-3 flex justify-around">
              {['📱', '💬', '📧', '🎵'].map((emoji, i) => <div key={i} className="w-12 h-12 flex items-center justify-center text-2xl">
                {emoji}
              </div>)}
            </div>
          </div>

          <div className="absolute bottom-24 left-6 right-6 text-center">
            <p className="text-white/80 text-xs font-medium bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
              Always accessible, never intrusive
            </p>
          </div>
        </div>;
      case 4:
        // Smart Prompting with UI Input
        return <div className="h-full flex flex-col bg-gradient-to-b from-purple-900/20 via-black to-black">
          {/* Instagram-style Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                <picture>
                  <source srcSet={`https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e0/512.webp`} type="image/webp" />
                  <img src={`https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e0/512.gif`} alt="Fynuu" width="24" height="24" className="w-6 h-6" />
                </picture>
              </div>
              <span className="text-white text-sm font-semibold">Fynuu Assistant</span>
            </div>
            <button className="text-white/60">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="5" r="1.5" />
                <circle cx="10" cy="10" r="1.5" />
                <circle cx="10" cy="15" r="1.5" />
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
            {/* User Message */}
            <div className="flex justify-end">
              <div className="bg-primary text-white text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%]">
                buy groceries
              </div>
            </div>

            {/* Fynuu Response with Form */}
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center flex-shrink-0">
                <picture>
                  <source srcSet={`https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e0/512.webp`} type="image/webp" />
                  <img src={`https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e0/512.gif`} alt="Fynuu" width="20" height="20" className="w-5 h-5" />
                </picture>
              </div>
              <div className="flex-1 space-y-2">
                <div className="bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2.5 rounded-2xl rounded-tl-sm">
                  I'll help you plan your groceries! Let me get a few details...
                </div>

                {/* Interactive Form Card */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-white text-xs font-semibold">Grocery Preferences</span>
                    <span className="text-primary text-xs">✨ Smart Form</span>
                  </div>

                  <div className="space-y-2.5">
                    <div>
                      <label className="text-white/70 text-xs block mb-1">Household members</label>
                      <div className="flex items-center gap-3 bg-black/30 rounded-lg px-3 py-2">
                        <button className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-sm">−</button>
                        <span className="text-white font-medium flex-1 text-center">4</span>
                        <button className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-sm">+</button>
                      </div>
                    </div>

                    <div>
                      <label className="text-white/70 text-xs block mb-1">Duration</label>
                      <select className="w-full bg-black/30 rounded-lg px-3 py-2 text-white text-xs border border-white/10">
                        <option>1 Month</option>
                        <option>2 Weeks</option>
                        <option>1 Week</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-white/70 text-xs block mb-1">Budget (optional)</label>
                      <input type="text" placeholder="₹5000" className="w-full bg-black/30 rounded-lg px-3 py-2 text-white text-xs border border-white/10 placeholder:text-white/40" />
                    </div>
                  </div>

                  <button className="w-full bg-primary hover:bg-primary/90 text-white text-xs py-2.5 rounded-lg font-medium transition-colors">
                    Generate List
                  </button>
                </div>
              </div>
            </div>

            <p className="text-white/50 text-center text-xs italic">
              Smart UI makes complex tasks simple
            </p>
          </div>

          {/* WhatsApp-style Input */}
          <div className="px-4 pb-4 pt-2 border-t border-white/10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <input type="text" placeholder="Message Fynuu..." className="flex-1 bg-transparent text-white text-sm placeholder:text-white/40 outline-none" disabled />
              <Mic className="w-5 h-5 text-white/60" />
            </div>
          </div>
        </div>;
      case 5:
        // Privacy Modes
        return <div className="h-full flex flex-col bg-gradient-to-b from-black via-primary/5 to-black px-4 py-8">
          {/* Chat Header */}
          <div className="flex items-center justify-between px-2 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                <picture>
                  <source srcSet={`https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a7/512.webp`} type="image/webp" />
                  <img src={`https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a7/512.gif`} alt="Fynuu" width="24" height="24" className="w-6 h-6" />
                </picture>
              </div>
              <div>
                <h3 className="text-white text-sm font-semibold">Fynuu Assistant</h3>
                <p className="text-green-400 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Active
                </p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 px-2">
            {/* Fynuu Message - Private Mode */}
            <div className="flex gap-2 items-start">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center flex-shrink-0">
                <Volume2 className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="bg-gradient-to-br from-green-600/30 to-green-600/10 backdrop-blur-sm border border-green-600/30 text-white text-sm px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-xs text-green-300">Private Mode</span>
                    <span className="px-2 py-0.5 bg-green-600/40 rounded-full text-[10px]">Active</span>
                  </div>
                  <p className="text-xs leading-relaxed text-white/90">
                    I can speak freely and respond with voice when you're in a private space
                  </p>
                  <div className="flex items-center gap-2 mt-2 pt-2 border-t border-green-500/20">
                    <Volume2 className="w-3.5 h-3.5 text-green-300" />
                    <span className="text-[10px] text-green-200">Voice responses enabled</span>
                  </div>
                </div>
                <span className="text-[10px] text-white/40 px-2">Just now</span>
              </div>
            </div>

            {/* Info Message */}
            <div className="flex justify-center my-3">
              <div className="bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5 text-[10px] text-white/60">
                Environment changed
              </div>
            </div>

            {/* Fynuu Message - Public Mode */}
            <div className="flex gap-2 items-start">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center flex-shrink-0">
                <VolumeX className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-xs text-white/90">Public Mode</span>
                    <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px]">Auto-activated</span>
                  </div>
                  <p className="text-xs leading-relaxed text-white/80">
                    Switched to silent mode for privacy. Connect audio device to hear responses
                  </p>
                  <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/10">
                    <MicOff className="w-3.5 h-3.5 text-white/60" />
                    <span className="text-[10px] text-white/60">Text-only until headphones connected</span>
                  </div>
                </div>
                <span className="text-[10px] text-white/40 px-2">Just now</span>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-4 px-2">
            <div className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-5 bg-green-600 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-lg"></div>
                </div>
                <span className="text-white/80 text-xs">Auto-switch</span>
              </div>
              <span className="text-primary text-xs font-medium">Enabled</span>
            </div>
          </div>
        </div>;
      case 6:
        // Planning Features
        return <div className="h-full flex flex-col bg-gradient-to-b from-black to-primary/10 py-8 px-6">
          <div className="text-center mb-6">
            <picture>
              <source srcSet={`https://fonts.gstatic.com/s/e/notoemoji/latest/1f4ca/512.webp`} type="image/webp" />
              <img src={`https://fonts.gstatic.com/s/e/notoemoji/latest/1f4ca/512.gif`} alt="Chart" width="64" height="64" className="w-16 h-16 mx-auto animate-pulse-gentle" />
            </picture>
            <h3 className="text-white text-xl font-bold mt-4">All Your Planning Needs</h3>
            <p className="text-white/60 text-xs mt-2">One assistant, unlimited possibilities</p>
          </div>

          <div className="space-y-3 flex-1 overflow-y-auto">
            {/* Day Planning */}
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/5 border border-blue-600/30 rounded-xl p-4 backdrop-blur-sm animate-slide-fade">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                <h4 className="text-white font-semibold text-sm">Day Planning</h4>
              </div>
              <p className="text-white/70 text-xs">AI-suggested schedules that adapt to your routine</p>
            </div>

            {/* Budgeting */}
            <div className="bg-gradient-to-br from-green-600/20 to-green-600/5 border border-green-600/30 rounded-xl p-4 backdrop-blur-sm animate-slide-fade" style={{
              animationDelay: '0.1s'
            }}>
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <h4 className="text-white font-semibold text-sm">Smart Budgeting</h4>
              </div>
              <p className="text-white/70 text-xs">Track spending and get insights on your finances</p>
            </div>

            {/* Grocery Planning */}
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-600/5 border border-purple-600/30 rounded-xl p-4 backdrop-blur-sm animate-slide-fade" style={{
              animationDelay: '0.2s'
            }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-lg">🛒</span>
                <h4 className="text-white font-semibold text-sm">Grocery Planning</h4>
              </div>
              <p className="text-white/70 text-xs">Smart lists based on your household needs</p>
            </div>

            {/* Unlimited Chats */}
            <div className="bg-gradient-to-br from-pink-600/20 to-pink-600/5 border border-pink-600/30 rounded-xl p-4 backdrop-blur-sm animate-slide-fade" style={{
              animationDelay: '0.3s'
            }}>
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-5 h-5 text-pink-400" />
                <h4 className="text-white font-semibold text-sm">Unlimited Chats</h4>
              </div>
              <p className="text-white/70 text-xs">Create separate conversations for different topics</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-white/80 text-center text-sm font-medium mb-4">Fynuu is ready for you 🌟</p>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12 font-medium" onClick={() => window.open('https://play.google.com/store/apps/details?id=io.smart.assistant', '_blank')}>
              Get Your Fynuu
            </Button>
          </div>
        </div>;
      default:
        return null;
    }
  };
  return <div className="relative flex flex-col items-center">
    {/* Phone Mockup */}
    <div className="phone-mockup w-72 h-[580px] relative overflow-hidden bg-black">
      {/* iPhone-style Status Bar */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-2.5 text-xs text-white z-20 bg-black/50 backdrop-blur-md">
        <span className="font-semibold">9:41</span>
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-28 h-6 bg-black rounded-b-3xl"></div>
        <div className="flex gap-1.5 items-center">
          <Signal className="w-3.5 h-3.5" />
          <Wifi className="w-3.5 h-3.5" />
          <Battery className="w-5 h-3.5" />
        </div>
      </div>

      {/* Screen Content with Transition */}
      <div className={`h-full transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`} key={currentStep}>
        {renderStepContent()}
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20 px-4">
        {steps.map((_, index) => <button key={index} onClick={() => goToStep(index)} className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${index === currentStep ? 'bg-primary w-8' : 'bg-white/30 w-1.5'}`} aria-label={`Go to step ${index + 1}`} />)}
      </div>
    </div>

    {/* Navigation Controls */}
    <div className="mt-6 flex items-center gap-3">
      <Button onClick={handlePrevious} disabled={currentStep === 0} variant="outline" size="sm" className="rounded-full" aria-label="Previous step">
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <span className="text-xs text-muted-foreground px-3">
        {currentStep + 1} / {steps.length}
      </span>

      {currentStep < steps.length - 1 ? <>
        <Button onClick={handleNext} variant="default" size="sm" className="rounded-full bg-primary hover:bg-primary/90" aria-label="Next step">
          <ChevronRight className="w-4 h-4" />
        </Button>

        <Button onClick={handleSkip} variant="ghost" size="sm" className="text-xs" aria-label="Skip tour">
          Skip Tour <X className="w-3 h-3 ml-1" />
        </Button>
      </> : <Button onClick={() => setCurrentStep(0)} variant="outline" size="sm" className="rounded-full" aria-label="Replay demo">
        🔄 Replay
      </Button>}
    </div>

    {/* Helper Text */}
    <p className="mt-4 text-xs text-muted-foreground text-center max-w-xs">
      {currentStep === 0 && "Meet your new friend Fynuu"}
      {currentStep === 1 && "Fynuu wakes you up with a smart day summary"}
      {currentStep === 2 && "Your Fynuu keeps your privacy first"}
      {currentStep === 3 && "Your Fynuu is always there when you need"}
      {currentStep === 4 && "Fynuu makes complex tasks feel simple"}
      {currentStep === 5 && "Your Fynuu adapts to your privacy needs"}
      {currentStep === 6 && "Your Fynuu has everything you need"}
    </p>
  </div>;
};
export default InteractiveFynuuDemo;