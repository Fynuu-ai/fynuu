
import { useState, useEffect } from "react";

const EmojiIntro = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hi there! I'm your intelligent local LLM assistant. I can help you with tasks, answer questions, and provide smart suggestions using personalized fine-tuned language models. Let me show you what makes me special...";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 50); // Typing speed

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center py-8">
      <div className="relative mb-8">
        <div className="text-8xl mb-6 animate-float flex justify-center">
          <picture>
            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.webp" type="image/webp" />
            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.gif" alt="😀" width="128" height="128" className="w-32 h-32" />
          </picture>
        </div>
      </div>
      
      <div className="text-xl text-muted-foreground max-w-2xl mx-auto min-h-[6rem] flex items-center justify-center">
        <p className="text-left">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>
      </div>
    </div>
  );
};

export default EmojiIntro;
