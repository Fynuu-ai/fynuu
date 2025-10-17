import { useState } from "react";
import { MessageSquare, X, Minimize2, Keyboard } from "lucide-react";
const FloatingQuickAccess = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };
  const minimize = () => {
    setIsMinimized(true);
    setIsOpen(false);
  };
  return <div className="fixed bottom-6 right-6 z-50">
      {/* Main floating button */}
      {!isOpen && !isMinimized}

      {/* Minimized state */}
      {isMinimized && <button onClick={toggleOpen} className="bg-primary/80 hover:bg-primary text-primary-foreground rounded-xl p-2 shadow-md hover:shadow-lg transition-all duration-300">
          <MessageSquare className="w-4 h-4" />
        </button>}

      {/* Expanded quick access panel */}
      {isOpen && <div className="bg-card border border-border rounded-xl shadow-xl p-4 w-80 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <picture>
                <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.webp" type="image/webp" />
                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.gif" alt="😀" width="24" height="24" className="w-6 h-6" />
              </picture>
              <h3 className="font-semibold text-foreground">Quick Access</h3>
            </div>
            <div className="flex gap-2">
              <button onClick={minimize} className="text-muted-foreground hover:text-foreground transition-colors">
                <Minimize2 className="w-4 h-4" />
              </button>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground mb-3">
              Your personalized Fynuu companion is ready to help!
            </p>
            <button className="w-full text-left p-2 hover:bg-muted rounded-md transition-colors text-sm">
              💬 Start Conversation
            </button>
            <button className="w-full text-left p-2 hover:bg-muted rounded-md transition-colors text-sm">
              📝 Quick Task
            </button>
            <button className="w-full text-left p-2 hover:bg-muted rounded-md transition-colors text-sm">
              ⚙️ Settings
            </button>
          </div>
        </div>}
    </div>;
};
export default FloatingQuickAccess;