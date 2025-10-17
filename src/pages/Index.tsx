import Header from "@/components/Header";
import InteractiveFynuuDemo from "@/components/InteractiveFynuuDemo";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import Lottie from "lottie-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram, Twitter, Play } from "lucide-react";
const Index = () => {
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "nikgames.lab@gmail.com",
    href: "mailto:nikgames.lab@gmail.com"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/fynuu",
    href: "https://linkedin.com/company/fynuu"
  }, {
    icon: Instagram,
    label: "Instagram",
    value: "@askfynuu",
    href: "https://instagram.com/askfynuu"
  }, {
    icon: Twitter,
    label: "X (Twitter)",
    value: "@askfynuu",
    href: "https://x.com/askfynuu"
  }];
  return <div className="min-h-screen gradient-bg relative overflow-hidden">
      <FloatingElements />
      <Header />
      
      {/* Hero Section - Two Column Layout */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-text">Meet Fynuu</span>
                  <span className="block text-foreground mt-2">
                    your friendly companion who's always here for you
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground mt-6 max-w-xl">
                  Talk to your Fynuu like you would a friend. Together, you'll plan your day, manage your budget, shop smarter, and stay healthy — 
                  all with a touch of emoji charm and genuine care.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Android Button */}
                <Button
                  size="lg"
                  className="flex items-center justify-center bg-primary text-white hover:bg-primary/90 rounded-xl px-10 h-16 text-lg font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
                  onClick={() =>
                    window.open(
                      'https://play.google.com/store/apps/details?id=io.smart.assistant',
                      '_blank'
                    )
                  }
                >
                  <svg
                    style={{ width: '22px', height: '22px', marginRight: '12px' }}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
                  </svg>
                  Download for Android (Beta)
                </Button>

                {/* iOS Button */}
                <Button
                  size="lg"
                  variant="outline"
                  className="flex items-center justify-center bg-background border border-gray-300 text-foreground hover:bg-primary/5 hover:border-gray-400 rounded-xl px-10 h-16 text-lg font-semibold transition-all duration-200 cursor-not-allowed opacity-70"
                  disabled
                >
                  <svg
                    style={{ width: '24px', height: '24px', marginRight: '12px' }}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  Join Waitlist for iOS
                </Button>
              </div>


              {/* Small signup hint */}
              
            </div>

            {/* Right Column - Interactive Phone Mockup */}
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <InteractiveFynuuDemo />
            </div>
            
          </div>
        </div>
      </section>

      

      {/* Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          
          
          <div className="relative rounded-2xl overflow-hidden shadow-warm animate-fade-in">
            <video className="w-full aspect-video" controls poster="/fynuu-logo.png">
              <source src="https://res.cloudinary.com/dgsi3q46q/video/upload/v1760289613/site_mrgdh1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Upcoming Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text-accent mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exciting new features to make your Fynuu even more helpful
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-warm hover:-translate-y-2 hover:scale-105 animate-fade-in backdrop-blur-sm bg-card/80">
              <CardHeader>
                <div className="text-4xl mb-4 animate-bounce hover:animate-pulse">🛒</div>
                <CardTitle className="text-2xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Auto Grocery Carting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your Fynuu will learn your shopping habits and automatically add items to your cart — like a friend who knows exactly what you need
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-warm hover:-translate-y-2 hover:scale-105 animate-fade-in backdrop-blur-sm bg-card/80" style={{
            animationDelay: '0.1s'
          }}>
              <CardHeader>
                <div className="text-4xl mb-4 animate-pulse hover:animate-spin">🔌</div>
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Open Source API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bring your Fynuu into your own apps with our developer-friendly API
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-warm hover:-translate-y-2 hover:scale-105 animate-fade-in backdrop-blur-sm bg-card/80" style={{
            animationDelay: '0.2s'
          }}>
              <CardHeader>
                <div className="text-4xl mb-4 animate-bounce hover:animate-pulse">🧠</div>
                <CardTitle className="text-2xl bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Personalized AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your Fynuu will learn your preferences and adapt to your unique personality — truly personal AI
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;