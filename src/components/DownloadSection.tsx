
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Download } from "lucide-react";

const DownloadSection = () => {
  const handleDownload = (store: 'ios' | 'android') => {
    // Replace these with your actual app store links
    const links = {
      ios: 'https://apps.apple.com/app/your-app',
      android: 'https://play.google.com/store/apps/details?id=your.app'
    };
    
    window.open(links[store], '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="container mx-auto">
        <Card className="max-w-4xl mx-auto bg-card/80 backdrop-blur-lg border-border/50">
          <CardContent className="p-12 text-center">
            <div className="text-6xl mb-6 animate-float">📲</div>
            
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Get Your AI Assistant Today
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download now and experience the power of offline AI assistance. 
              Your personal productivity companion is just one tap away.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
                onClick={() => handleDownload('ios')}
              >
                <span className="text-2xl">🍎</span>
                Download for iOS
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="flex items-center gap-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
                onClick={() => handleDownload('android')}
              >
                <span className="text-2xl">🤖</span>
                Download for Android
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Free Download</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <span>Works Offline</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span>Privacy First</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DownloadSection;
