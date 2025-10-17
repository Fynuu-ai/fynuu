import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Instagram } from "lucide-react";
const About = () => {
  const team = [{
    name: "Nikhil Keetha",
    role: "App Developer and AI Engineer",
    emoji: "📱",
    description: "Android, iOS App Dev • On-device AI • Finetuning & Quantizing LLMs",
    linkedin: "https://www.linkedin.com/in/nikhil-keetha-057b381bb/",
    twitter: "https://x.com/NikhilKeetha",
    email: "nikgames.lab@gmail.com"
  }, {
    name: "Navaneeth Reddy Gantla",
    role: "Website Developer",
    emoji: "💻",
    description: "Expert in web development and frontend technologies",
    linkedin: "https://www.linkedin.com/in/navaneeth-reddy-gantla-7a0baa32a/",
    twitter: "https://x.com/navaneethgantla",
    email: "nikgames.lab@gmail.com"
  }, {
    name: "Errabelli Sathvik Rao",
    role: "Marketing Strategist and Social Media Head",
    emoji: "📈",
    description: "Focused on growth strategies and market expansion",
    linkedin: "https://www.linkedin.com/in/sathvik-errabelli-04a696284/",
    twitter: "https://x.com/ESathvik_16",
    email: "nikgames.lab@gmail.com"
  }];
  return <div className="min-h-screen gradient-bg">
      <Header />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          

          {/* Mission Section */}
          <Card className="mb-12 bg-card/80 backdrop-blur-lg border-border/50">
            <CardHeader>
              <CardTitle className="text-3xl text-center gradient-text">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">We believe that local LLM assistance should be private, reliable, and truly personal. That's why we've built a personalized fine-tuned language model assistant that combines secure local and cloud processing to deliver the best of both worlds. Your sensitive data remains protected through advanced encryption and privacy protocols, while our hybrid approach ensures optimal performance and capability. Our assistant provides intelligent help with your daily tasks, scheduling, and productivity needs, and brings conversations to life with expressive animated emojis that add personality and warmth to every interaction.</p>
            </CardContent>
          </Card>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center bg-card/80 backdrop-blur-lg border-border/50">
              <CardHeader>
                <div className="text-4xl mb-4">🔒</div>
                <CardTitle>Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your data stays secure with masked cloud processing with user-defined limitations, 
                  no data mining, no surveillance. True privacy with controlled processing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/80 backdrop-blur-lg border-border/50">
              <CardHeader>
                <div className="text-4xl mb-4">⚡</div>
                <CardTitle>Edge Computing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Local processing means instant responses. No waiting for network requests 
                  or server processing delays with our fine-tuned models.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/80 backdrop-blur-lg border-border/50">
              <CardHeader>
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle>Personalized Models</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fine-tuned learning happens on your device, creating truly personalized LLM experience 
                  that adapts to your unique needs and preferences.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <Card className="mb-16 bg-card/80 backdrop-blur-lg border-border/50">
            <CardHeader>
              <CardTitle className="text-3xl text-center gradient-text mb-8">Meet Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member, index) => <Card key={member.name} className="text-center bg-card/50 border-border/30 hover:bg-card/70 transition-all duration-300 animate-slide-up" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <CardHeader className="pb-4">
                      {/* Profile Picture Placeholder */}
                      <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                        <div className="text-3xl">{member.emoji}</div>
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground mb-2">{member.name}</CardTitle>
                      <p className="text-primary font-medium">{member.role}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                      
                      {/* Social Links */}
                      <div className="flex justify-center space-x-3">
                        {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                            <Linkedin className="w-5 h-5" />
                          </a>}
                        {member.twitter && <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                          </a>}
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default About;