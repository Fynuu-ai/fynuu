import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Code, Book, Zap, Shield, Smartphone, Download, Settings, MessageSquare, Key, ExternalLink, Mail } from "lucide-react";
import { useEffect, useState } from "react";
const Docs = () => {
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => {
    // Handle hash-based navigation
    const hash = window.location.hash.replace('#', '');
    if (hash && hash === 'api-keys') {
      setActiveTab('api-keys');
    }
  }, []);
  const docSections = [{
    icon: Zap,
    title: "Quick Start",
    emoji: "🚀",
    content: ["Download the Android app from Google Play Store", "Grant necessary permissions for notifications and calendar access", "Complete the initial setup and AI assistant configuration", "Start chatting with your AI assistant using natural language commands"]
  }, {
    icon: Book,
    title: "Core Features",
    emoji: "📚",
    content: ["AI-Powered Intelligence: Advanced contextual understanding and responses", "Smart Clock Integration: Intelligent time management and scheduling", "Task Management: Create, organize, and track your daily activities", "Interactive Conversations: Natural language processing with follow-up questions"]
  }, {
    icon: MessageSquare,
    title: "Interactive Features",
    emoji: "💬",
    content: ["Smart Checkboxes: Interactive selection options for better prompt clarity", "Progress Tracking: Visual progress bars for task completion", "Flexible Options: Customizable responses and adaptive suggestions", "Real-time Feedback: Instant responses with contextual understanding"]
  }, {
    icon: Shield,
    title: "Privacy & Security",
    emoji: "🔒",
    content: ["Local AI processing for enhanced privacy protection", "Encrypted data storage on your device", "No unauthorized data transmission to external servers", "Complete user control over personal information and settings"]
  }];
  const androidFeatures = [{
    title: "Native Android Integration",
    description: "Seamlessly integrates with Android system features including notifications, calendar, and contacts."
  }, {
    title: "Offline Capabilities",
    description: "Core AI functionality works without internet connection for privacy and reliability."
  }, {
    title: "Material Design UI",
    description: "Beautiful, intuitive interface following Google's Material Design guidelines."
  }, {
    title: "Voice Commands",
    description: "Voice-activated assistance with natural language understanding."
  }, {
    title: "Widget Support",
    description: "Quick access widgets for your home screen with essential AI functions."
  }, {
    title: "Third-party App Integration",
    description: "Connect with popular productivity apps and services on your Android device."
  }];
  const apiKeySteps = {
    gemini: [{
      step: 1,
      title: "Visit Google AI Studio",
      description: "Go to https://aistudio.google.com and sign in with your Google account",
      action: "Navigate to the website"
    }, {
      step: 2,
      title: "Access API Keys",
      description: "Click on 'Get API key' in the left sidebar or navigate to the API keys section",
      action: "Find the API key section"
    }, {
      step: 3,
      title: "Create New Key",
      description: "Click 'Create API key' and select your Google Cloud project (or create a new one)",
      action: "Generate your key"
    }, {
      step: 4,
      title: "Copy Your Key",
      description: "Copy the generated API key immediately - you won't be able to see it again",
      action: "Save the key securely"
    }],
    groq: [{
      step: 1,
      title: "Visit Groq Console",
      description: "Go to https://console.groq.com and create an account or sign in",
      action: "Access the platform"
    }, {
      step: 2,
      title: "Navigate to API Keys",
      description: "In the dashboard, find and click on 'API Keys' in the navigation menu",
      action: "Find API section"
    }, {
      step: 3,
      title: "Create API Key",
      description: "Click 'Create API Key', give it a descriptive name, and set appropriate permissions",
      action: "Generate new key"
    }, {
      step: 4,
      title: "Save Your Key",
      description: "Copy the API key immediately and store it securely - it won't be shown again",
      action: "Store securely"
    }]
  };
  return <div className="min-h-screen gradient-bg">
      <Header />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6 animate-float">📖</div>
            <h1 className="text-4xl font-bold gradient-text mb-4">Complete Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about Assistant - from basic usage to advanced Android development
            </p>
          </div>

          {/* Main Documentation Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">App Overview</TabsTrigger>
              <TabsTrigger value="android">Android App</TabsTrigger>
              <TabsTrigger value="features">Features Guide</TabsTrigger>
              {/* <TabsTrigger value="api-keys">API Keys Setup</TabsTrigger> */}
              <TabsTrigger value="api">API Reference</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card className="bg-card/80 backdrop-blur-lg border-border/50">
                <CardHeader>
                  <CardTitle className="text-3xl gradient-text text-center mb-4">About Assistant AI</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">What is Assistant AI?</h3>
                      <p className="text-muted-foreground">
                        Assistant AI is an intelligent personal assistant application designed to help you manage your daily tasks, 
                        schedule appointments, and provide smart suggestions through natural conversation. Our AI understands context 
                        and learns from your preferences to deliver personalized assistance.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">Key Benefits</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Increase productivity with intelligent task management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Save time with automated scheduling and reminders</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Enjoy privacy-focused AI that works offline</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Experience seamless integration with your devices</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {docSections.map((section, index) => <Card key={section.title} className="bg-card/80 backdrop-blur-lg border-border/50 animate-slide-up" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-3xl">{section.emoji}</div>
                        <section.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl gradient-text">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>)}
                      </ul>
                    </CardContent>
                  </Card>)}
              </div>
            </TabsContent>

            <TabsContent value="android" className="space-y-8">
              <Card className="bg-card/80 backdrop-blur-lg border-border/50">
                <CardHeader>
                  <div className="text-center">
                    <Smartphone className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-3xl gradient-text mb-4">Android Application</CardTitle>
                    <p className="text-lg text-muted-foreground">
                      Native Android app with advanced AI capabilities and seamless system integration
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Installation Guide */}
                  <div className="bg-muted/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Download className="w-5 h-5" />
                      Installation Guide
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-background/50 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-2">From Google Play Store</h4>
                          <ol className="space-y-2 text-sm text-muted-foreground">
                            <li>1. Open Google Play Store on your Android device</li>
                            <li>2. Search for "Assistant AI"</li>
                            <li>3. Tap "Install" to download the app</li>
                            <li>4. Open the app and complete setup</li>
                          </ol>
                        </div>
                        <div className="bg-background/50 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-2">System Requirements</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Android 8.0 (API level 26) or higher</li>
                            <li>• 2GB RAM minimum (4GB recommended)</li>
                            <li>• 500MB available storage space</li>
                            <li>• Internet connection for initial setup</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Android Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6">Android-Specific Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {androidFeatures.map((feature, index) => <div key={index} className="bg-muted/20 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>)}
                    </div>
                  </div>

                  {/* Permissions */}
                  <div className="bg-muted/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Settings className="w-5 h-5" />
                      Required Permissions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Essential Permissions</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• <strong>Calendar:</strong> Schedule management and event creation</li>
                          <li>• <strong>Notifications:</strong> Send reminders and alerts</li>
                          <li>• <strong>Microphone:</strong> Voice command recognition</li>
                          <li>• <strong>Storage:</strong> Save user data and preferences</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Optional Permissions</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• <strong>Contacts:</strong> Enhanced contact management</li>
                          <li>• <strong>Location:</strong> Location-based reminders</li>
                          <li>• <strong>Camera:</strong> QR code scanning and image analysis</li>
                          <li>• <strong>Phone:</strong> Call management integration</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="space-y-8">
              <Card className="bg-card/80 backdrop-blur-lg border-border/50">
                <CardHeader>
                  <CardTitle className="text-3xl gradient-text text-center mb-4">Detailed Features Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* AI Features */}
                  <div className="bg-muted/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">🧠 AI-Powered Intelligence</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Natural Language Processing</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Understands complex commands and context, allowing for natural conversation flow.
                        </p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Multi-turn conversations</li>
                          <li>• Context awareness</li>
                          <li>• Intent recognition</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Smart Suggestions</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Proactive recommendations based on your habits and preferences.
                        </p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Predictive task creation</li>
                          <li>• Schedule optimization</li>
                          <li>• Priority recommendations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Features */}
                  <div className="bg-muted/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">💬 Interactive Conversations</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-background/50 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-2">Smart Checkboxes</h4>
                          <p className="text-sm text-muted-foreground">
                            Interactive selection options that help clarify your requests and preferences.
                          </p>
                        </div>
                        <div className="bg-background/50 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-2">Progress Tracking</h4>
                          <p className="text-sm text-muted-foreground">
                            Visual progress bars and completion indicators for all your tasks and goals.
                          </p>
                        </div>
                        <div className="bg-background/50 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-2">Follow-up Questions</h4>
                          <p className="text-sm text-muted-foreground">
                            AI asks clarifying questions to ensure accurate understanding and better results.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Integration Features */}
                  <div className="bg-muted/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">🔗 Seamless Integration</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Mobile App Integration</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Calendar apps (Google Calendar, Outlook)</li>
                          <li>• Note-taking apps (OneNote, Google Keep)</li>
                          <li>• Email clients (Gmail, Outlook)</li>
                          <li>• Task managers (Todoist, Any.do)</li>
                          <li>• Communication apps (Slack, Teams)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">System Integration</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Android notification system</li>
                          <li>• Device calendar and contacts</li>
                          <li>• Voice assistant integration</li>
                          <li>• Quick settings tiles</li>
                          <li>• App shortcuts and widgets</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* API Keys section temporarily disabled for future use */}
            {/*
            <TabsContent value="api-keys" className="space-y-8">
              <Card className="bg-card/80 backdrop-blur-lg border-border/50">
                <CardHeader>
                  <div className="text-center">
                    <Key className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-3xl gradient-text mb-4">API Keys Setup Tutorial</CardTitle>
                    <p className="text-lg text-muted-foreground">
                      Learn how to create and integrate API keys for Gemini and Groq to power your local LLM assistant
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="bg-muted/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Why Do You Need API Keys?</h3>
                    <p className="text-muted-foreground mb-4">
                      API keys allow your local LLM assistant to communicate with powerful language models like Google's Gemini 
                      and Groq's ultra-fast inference engine. These keys authenticate your requests and enable advanced AI capabilities.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-background/50 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">🤖 Google Gemini</h4>
                        <p className="text-sm text-muted-foreground">
                          Advanced multimodal AI with excellent reasoning, vision capabilities, and natural conversation flow.
                        </p>
                      </div>
                      <div className="bg-background/50 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">⚡ Groq</h4>
                        <p className="text-sm text-muted-foreground">
                          Lightning-fast inference with specialized hardware acceleration for real-time AI responses.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground">Google Gemini API Key Setup</h3>
                    <p className="text-muted-foreground mb-4">
                      Google's Gemini offers powerful multimodal AI capabilities with excellent reasoning skills.
                    </p>
                    {apiKeySteps.gemini.map((step, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-background/50 rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                          {step.action && (
                            <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs rounded-full">
                              {step.action}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-muted/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground">Groq API Key Setup</h3>
                    <p className="text-muted-foreground mb-4">
                      Groq provides lightning-fast inference speeds, perfect for real-time conversations.
                    </p>
                    {apiKeySteps.groq.map((step, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-background/50 rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                          {step.action && (
                            <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs rounded-full">
                              {step.action}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-accent/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Integration Steps
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Once you have your API keys, here's how to integrate them into your local LLM assistant:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {integrationSteps.map((step, index) => (
                        <div key={index} className="p-4 bg-background/50 rounded-lg">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-3">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{step.title}</p>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-destructive/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <span className="text-destructive">⚠️</span>
                      Security Best Practices
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">Storage</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Never share your API keys publicly</li>
                          <li>• Use environment variables or secure storage</li>
                          <li>• Regenerate keys if compromised</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">Usage Monitoring</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Monitor API usage through dashboards</li>
                          <li>• Set up billing alerts and quotas</li>
                          <li>• Review access logs regularly</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Troubleshooting Common Issues</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-background/50 rounded-lg p-4">
                        <h5 className="font-semibold text-foreground mb-2">API Key Not Working?</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Verify the key was copied correctly (no extra spaces)</li>
                          <li>• Check if your API quota is exceeded</li>
                          <li>• Ensure billing is set up (for Gemini)</li>
                          <li>• Try regenerating the API key</li>
                        </ul>
                      </div>
                      <div className="bg-background/50 rounded-lg p-4">
                        <h5 className="font-semibold text-foreground mb-2">Slow Responses?</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Switch to Groq for faster inference</li>
                          <li>• Check your internet connection</li>
                          <li>• Reduce context length if possible</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            */}

            <TabsContent value="api" className="space-y-8">
              {/* API Reference */}
              <Card className="bg-card/80 backdrop-blur-lg border-border/50">
                <CardHeader>
                  <CardTitle className="text-3xl gradient-text text-center mb-4">API Reference</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Base Configuration</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Local API Endpoint</h4>
                        <code className="bg-background px-3 py-1 rounded text-primary block">
                          http://localhost:8080/api/v1
                        </code>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Authentication</h4>
                        <code className="bg-background px-3 py-1 rounded text-primary block text-sm">
                          Authorization: Bearer {"{device_token}"}
                        </code>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-muted/20 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Core Endpoints</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <code className="text-primary">GET /tasks</code>
                          <span className="text-muted-foreground">List all tasks</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <code className="text-primary">POST /tasks</code>
                          <span className="text-muted-foreground">Create new task</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <code className="text-primary">GET /calendar</code>
                          <span className="text-muted-foreground">Get calendar events</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <code className="text-primary">POST /chat</code>
                          <span className="text-muted-foreground">Send message to AI</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <code className="text-primary">GET /settings</code>
                          <span className="text-muted-foreground">User preferences</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/20 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Android-Specific APIs</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <code className="text-primary">POST /notifications</code>
                          <span className="text-muted-foreground">Create notification</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <code className="text-primary">GET /contacts</code>
                          <span className="text-muted-foreground">Access contacts</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <code className="text-primary">POST /voice</code>
                          <span className="text-muted-foreground">Process voice input</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <code className="text-primary">GET /widgets</code>
                          <span className="text-muted-foreground">Widget data</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <code className="text-primary">POST /integrations</code>
                          <span className="text-muted-foreground">App integrations</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SDK Section */}
                  <div className="bg-muted/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Development Resources</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-background/50 rounded-lg p-4 text-center">
                        <div className="text-3xl mb-4">📱</div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Android SDK</h4>
                        <p className="text-sm text-muted-foreground mb-3">Native Android development kit</p>
                        <code className="text-xs bg-muted px-2 py-1 rounded">com.assistantai:android-sdk</code>
                      </div>
                      
                      <div className="bg-background/50 rounded-lg p-4 text-center">
                        <div className="text-3xl mb-4">🌐</div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Web SDK</h4>
                        <p className="text-sm text-muted-foreground mb-3">JavaScript library for web integration</p>
                        <code className="text-xs bg-muted px-2 py-1 rounded">npm install @assistantai/web-sdk</code>
                      </div>
                      
                      <div className="bg-background/50 rounded-lg p-4 text-center">
                        <div className="text-3xl mb-4">⚙️</div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">REST API</h4>
                        <p className="text-sm text-muted-foreground mb-3">Direct HTTP integration</p>
                        <code className="text-xs bg-muted px-2 py-1 rounded">curl -X GET /api/v1/status</code>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-muted-foreground">
                        Need development support? Contact our team at{" "}
                        <span className="text-primary">developers@assistantai.com</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default Docs;