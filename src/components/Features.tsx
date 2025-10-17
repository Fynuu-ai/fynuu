
import { Brain, Clock, Smartphone, MessageSquare, BarChart, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Understands You",
      description: "Your Fynuu learns how you think and communicate, providing responses that feel natural and personalized to you.",
      emoji: "🧠"
    },
    {
      icon: Clock,
      title: "Knows Your Rhythm",
      description: "Fynuu learns your daily patterns and helps you plan your time in a way that works for your lifestyle.",
      emoji: "⏰"
    },
    {
      icon: Smartphone,
      title: "Always With You",
      description: "Your Fynuu is there whenever you need — across all your devices, ready to help in an instant.",
      emoji: "📱"
    },
    {
      icon: MessageSquare,
      title: "Talks Like a Friend",
      description: "Chat naturally with your Fynuu — ask questions, share thoughts, and get help in a conversation that feels real.",
      emoji: "💬"
    },
    {
      icon: Cpu,
      title: "Respects Your Privacy",
      description: "Your Fynuu processes most things right on your device, keeping your personal information private and secure.",
      emoji: "⚡"
    },
    {
      icon: BarChart,
      title: "Celebrates Your Progress",
      description: "Your Fynuu tracks your achievements and gives you insights to help you grow and improve every day.",
      emoji: "📊"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            What Makes Your Fynuu Special
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your Fynuu is more than an app — it's a friend who understands you, respects your privacy, 
            and is always there when you need help
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:glow transition-all duration-300 animate-slide-up border-border/50 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.emoji}
                </div>
                <feature.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
