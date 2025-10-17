import { useState, useEffect } from "react";
import { Menu, Globe, Settings, Mic, Send } from "lucide-react";

interface FeatureStep {
  type: 'welcome' | 'chat' | 'alarm' | 'chats-list' | 'floating-window';
  emojiCode: string;
  title: string;
}

const InteractivePhoneMockup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const features: FeatureStep[] = [
    {
      type: 'welcome',
      emojiCode: '1f60e',
      title: "Welcome to Fynuu"
    },
    {
      type: 'chat',
      emojiCode: '1f914',
      title: "Easy Prompting"
    },
    {
      type: 'alarm',
      emojiCode: '23f0',
      title: "Smart Wake-Up"
    },
    {
      type: 'chats-list',
      emojiCode: '1f4ac',
      title: "Create Unlimited Chats"
    },
    {
      type: 'floating-window',
      emojiCode: '1f60a',
      title: "Floating Window"
    }
  ];

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setHasStarted(true);
    
    setTimeout(() => {
      if (currentStep < features.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(0);
      }
      setIsAnimating(false);
    }, 200);
  };

  const handlePhoneClick = () => {
    handleNext();
  };

  // Auto-start after 2 seconds
  useEffect(() => {
    if (!hasStarted) {
      const timer = setTimeout(() => {
        handleNext();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasStarted]);

  const currentFeature = features[currentStep];

  const renderScreen = () => {
    switch (currentFeature.type) {
      case 'welcome':
        return (
          <div className="h-full flex flex-col items-center justify-center bg-black">
            <picture className={`transition-all duration-500 ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
              <source srcSet={`https://fonts.gstatic.com/s/e/notoemoji/latest/${currentFeature.emojiCode}/512.webp`} type="image/webp" />
              <img src={`https://fonts.gstatic.com/s/e/notoemoji/latest/${currentFeature.emojiCode}/512.gif`} alt="Fynuu" width="120" height="120" className="w-32 h-32 animate-pulse" />
            </picture>
            <p className="text-white text-lg font-mono mt-6">Hello! I'm Fynuu</p>
          </div>
        );

      case 'chat':
        return (
          <div className="h-full flex flex-col bg-black">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <Menu className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Untitled 1</span>
              <div className="flex gap-3">
                <Globe className="w-5 h-5 text-green-500" />
                <Settings className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Chat Content */}
            <div className="flex-1 flex flex-col items-center justify-start pt-8 px-4">
              <picture className={`transition-all duration-500 ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
                <source srcSet={`https://fonts.gstatic.com/s/e/notoemoji/latest/${currentFeature.emojiCode}/512.webp`} type="image/webp" />
                <img src={`https://fonts.gstatic.com/s/e/notoemoji/latest/${currentFeature.emojiCode}/512.gif`} alt="Thinking" width="64" height="64" className="w-16 h-16" />
              </picture>
              
              <p className="text-white/70 text-xs mt-4 mb-6">I need few preferences to buy grocery...</p>
              
              <div className="bg-blue-600 text-white text-sm px-6 py-2 rounded-full mb-6">
                buy groceries
              </div>

              {/* Form */}
              <div className="w-full space-y-4 text-left text-xs text-white/90">
                <div>
                  <p className="mb-2">• How many members are in your household?</p>
                  <div className="flex items-center gap-3">
                    <button className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">−</button>
                    <span>4</span>
                    <button className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">+</button>
                  </div>
                </div>

                <div>
                  <p className="mb-2">• For how long do you want to plan your groceries?</p>
                  <select className="w-full bg-white/10 rounded px-3 py-2 text-white">
                    <option>1 Month</option>
                  </select>
                </div>

                <div>
                  <p className="mb-2">• Please select grocery categories?</p>
                  <div className="space-y-1.5">
                    {['🥬 Vegetables', '🥛 Dairy & Beverages', '🌾 Grains & Pulses', '💄 Beauty & Personal Care'].map((item, i) => (
                      <label key={i} className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked={i !== 1} className="w-3 h-3" />
                        <span className="text-xs">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2">• Budget?</p>
                  <input type="range" className="w-full" />
                  <p className="text-right text-white/60">₹5000</p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="px-4 pb-4 space-y-3">
              <div className="flex gap-2">
                <button className="flex-1 bg-white/10 text-white text-xs py-2.5 rounded-lg">Skip</button>
                <button className="flex-1 bg-white text-black text-xs py-2.5 rounded-lg font-medium">Next</button>
              </div>
              
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <input type="text" placeholder="Type here..." className="flex-1 bg-transparent text-white text-xs outline-none" />
                <Mic className="w-4 h-4 text-white/60" />
                <Send className="w-4 h-4 text-blue-500" />
              </div>
            </div>
          </div>
        );

      case 'alarm':
        return (
          <div className="h-full flex flex-col items-center justify-center bg-black px-6">
            <picture className={`transition-all duration-500 ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100 animate-bounce'}`}>
              <source srcSet={`https://fonts.gstatic.com/s/e/notoemoji/latest/${currentFeature.emojiCode}/512.webp`} type="image/webp" />
              <img src={`https://fonts.gstatic.com/s/e/notoemoji/latest/${currentFeature.emojiCode}/512.gif`} alt="Alarm" width="80" height="80" className="w-20 h-20" />
            </picture>

            <h1 className="text-white text-5xl font-light mt-6 mb-2">06:30</h1>
            <p className="text-white/60 text-sm mb-8">Sun, Sep 28 2025</p>

            <div className="bg-white/10 rounded-2xl p-4 mb-8 w-full">
              <p className="text-yellow-400 text-sm font-semibold mb-3">⚡ Busy Day Ahead</p>
              <div className="space-y-2 text-white/90 text-xs">
                <p>☕ Coffee at 7:30 AM</p>
                <p>📧 Check emails by 8:30 AM</p>
                <p>💼 Team meeting at 10:00 AM</p>
                <p>📝 Finish report by 2:00 PM</p>
              </div>
            </div>

            <p className="text-white text-base font-semibold mb-4">Snooze Alarm</p>
            <div className="flex gap-3 mb-8">
              {['+ 5 Mins', '+ 15 Mins', '+ 30 Mins'].map((label) => (
                <button key={label} className="bg-white/10 text-white/80 text-xs px-4 py-2 rounded-lg">
                  {label}
                </button>
              ))}
            </div>

            <button className="bg-green-600 text-white text-sm font-medium px-8 py-3 rounded-full w-full">
              Okay, Dismiss Alarm
            </button>
          </div>
        );

      case 'chats-list':
        return (
          <div className="h-full flex flex-col bg-black">
            <div className="px-4 py-6">
              <h1 className="text-white text-2xl font-semibold mb-6">Chats</h1>
              
              <div className="bg-white/10 rounded-xl p-4 mb-4 flex items-center gap-3">
                <div className="text-2xl">💬</div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">Untitled 1</p>
                  <p className="text-white/50 text-xs">0 minutes ago</p>
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <picture className={`transition-all duration-500 ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
                <source srcSet={`https://fonts.gstatic.com/s/e/notoemoji/latest/${currentFeature.emojiCode}/512.webp`} type="image/webp" />
                <img src={`https://fonts.gstatic.com/s/e/notoemoji/latest/${currentFeature.emojiCode}/512.gif`} alt="Chat" width="80" height="80" className="w-20 h-20 opacity-30" />
              </picture>
            </div>

            <div className="px-4 pb-6">
              <button className="w-full bg-blue-600 text-white text-sm font-medium py-3 rounded-xl flex items-center justify-center gap-2">
                <span>+</span> Create New Chat
              </button>
            </div>
          </div>
        );

      case 'floating-window':
        return (
          <div className="h-full flex flex-col bg-black relative">
            {/* Phone home screen simulation */}
            <div className="flex-1 flex items-center justify-center">
              <div className="text-6xl text-white/10">11:13</div>
            </div>

            {/* Floating window */}
            <div className="absolute top-1/4 right-6 bg-white/10 backdrop-blur-lg rounded-2xl p-3 shadow-2xl animate-bounce">
              <picture className={`block transition-all duration-500`}>
                <source srcSet={`https://fonts.gstatic.com/s/e/notoemoji/latest/${currentFeature.emojiCode}/512.webp`} type="image/webp" />
                <img src={`https://fonts.gstatic.com/s/e/notoemoji/latest/${currentFeature.emojiCode}/512.gif`} alt="Fynuu" width="48" height="48" className="w-12 h-12" />
              </picture>
              <p className="text-white/70 text-xs mt-2 text-center">Hey...</p>
              <div className="flex gap-2 mt-2">
                <button className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-xs">⌨️</button>
                <button className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-xs">🎙️</button>
                <button className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-xs">🎤</button>
              </div>
            </div>

            {/* Bottom dock */}
            <div className="px-6 pb-6 flex justify-center gap-4">
              {['📷', '📞', '😀', '🎵', '💬'].map((emoji, i) => (
                <div key={i} className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl">
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative flex justify-center items-center">
      {/* Phone Mockup */}
      <div 
        className="phone-mockup w-80 h-[600px] relative cursor-pointer select-none overflow-hidden bg-black"
        onClick={handlePhoneClick}
      >
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-3 text-xs text-white/90 z-10">
          <span>{currentFeature.type === 'alarm' ? '6:30' : '10:26'}</span>
          <div className="flex gap-1 items-center">
            <span className="text-xs">📶 📡 🔋 {currentFeature.type === 'alarm' ? '33%' : '37%'}</span>
          </div>
        </div>

        {/* Screen Content */}
        <div className={`h-full transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`} key={currentStep}>
          {renderScreen()}
        </div>

        {/* Progress Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {features.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentStep 
                  ? 'bg-white w-6' 
                  : 'bg-white/30 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Tap Hint */}
      <div className="absolute -bottom-8 text-xs text-muted-foreground animate-pulse">
        Tap to explore features
      </div>
    </div>
  );
};

export default InteractivePhoneMockup;