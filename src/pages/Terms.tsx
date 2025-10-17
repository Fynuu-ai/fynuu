import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Terms = () => {
  return <div className="min-h-screen gradient-bg">
      <Header />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-card/80 backdrop-blur-lg border-border/50">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <CardTitle className="text-4xl gradient-text">Terms of Service</CardTitle>
              <p className="text-muted-foreground">Last updated: September 2025</p>
            </CardHeader>
            
            <CardContent className="prose prose-invert max-w-none space-y-6">
              <section>
                <p className="text-muted-foreground">
                  Welcome to Fynuu. These Terms and Conditions ("Terms") govern your use of the Fynuu mobile app and any related services. Fynuu is a personal assistant app (hybrid on-device and cloud-based LLM) providing features like reminders, planning, a floating overlay window, and storing your preferences. By downloading, installing, or using Fynuu, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use the app.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">License and Use of the App</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Limited License:</strong> Fynuu grants you a revocable, non-exclusive, non-transferable, limited license to download, install, and use the app strictly according to these Terms. You may use Fynuu for your personal purposes.</li>
                  <li><strong>Account and Authentication:</strong> Fynuu may require you to sign in with a Google account (using Firebase Authentication). You are responsible for keeping your account credentials secure and for all activity under your account.</li>
                  <li><strong>No Resale or Distribution:</strong> You agree not to license, sell, rent, lease, assign, distribute, transmit, or otherwise commercially exploit the app or its content. You may not modify, create derivative works of, disassemble, decompile, reverse engineer, decrypt, reverse compile, or reverse engineer any part of the app or its code.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Permissions and Device Access</h2>
                <p className="text-muted-foreground mb-4">
                  Fynuu requires certain device permissions to provide its features. By granting these permissions, you enable the corresponding functionality:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Microphone:</strong> For voice input to the AI assistant. (Permission must be granted in your device settings.)</li>
                  <li><strong>Location:</strong> To offer location-based reminders and planning features.</li>
                  <li><strong>Notifications:</strong> To send you reminder and alert notifications.</li>
                  <li><strong>Display Over Other Apps:</strong> To show the floating assistant window atop other apps.</li>
                  <li><strong>Alarms:</strong> To schedule and trigger reminders at the correct time.</li>
                </ul>
                <p className="text-muted-foreground">
                  You acknowledge that if you deny some permissions, related features may be unavailable. The app will request these permissions when needed. You may change your permissions in your device settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Storage and Privacy</h2>
                <p className="text-muted-foreground mb-4">
                  Fynuu is designed with user privacy in mind:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>On-Device Storage:</strong> All personal data, preferences, and entries (e.g. reminders, voice inputs) are stored locally on your device using encrypted storage (e.g. RoomDB). No personal data is stored unencrypted on external servers.</li>
                  <li><strong>Use of Cloud Services:</strong> When you use cloud-based AI services (for example, to process voice input or queries), any data sent from your device is encrypted in transit. We strip or anonymize personal identifiers so that cloud servers only receive the content needed to generate a response.</li>
                  <li><strong>Third-Party Services:</strong> Fynuu uses Firebase services (Authentication, Analytics, Crashlytics, etc.) and Google APIs under their own terms. These services may collect non-personal analytics data to help improve the app. We do not sell or rent your personal data.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  Fynuu, its graphics, user interface, and content are the intellectual property of the developer. All rights not expressly granted to you are reserved. You may not copy, reproduce, modify, or distribute any part of the app except as explicitly permitted in these Terms. All trademarks and service marks (including the name "Fynuu") are the property of their owner.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">User Conduct and Prohibited Uses</h2>
                <p className="text-muted-foreground mb-4">
                  You agree to use Fynuu responsibly and lawfully. In particular, you must not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Use the app to transmit any unlawful, harassing, defamatory, obscene, threatening, or otherwise objectionable content or material.</li>
                  <li>Attempt to gain unauthorized access to any part of the app or any networks, systems, or servers connected to Fynuu.</li>
                  <li>Use any automated means (e.g., bots, spiders, scraping) to access or interact with the app beyond normal user activity.</li>
                  <li>Distribute viruses, malware, or other harmful code through the app or any related service.</li>
                  <li>Violate any applicable laws or regulations while using the app.</li>
                  <li>Remove, alter, or obscure any copyright, trademark or other proprietary notices included in the app.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimers and Warranties</h2>
                <p className="text-muted-foreground">
                  The Fynuu app and any content or output it generates are provided "AS IS" and "AS AVAILABLE," without any warranty of any kind. We disclaim all warranties (express, implied or statutory), including any implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Fynuu's assistant uses artificial intelligence (LLM) technology that may occasionally produce inaccurate, incomplete, or outdated information. You agree not to rely solely on the assistant's output.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the fullest extent allowed by law, we (and our affiliates) shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of Fynuu. This includes, but is not limited to, damages for loss of data, loss of profits, or any other intangible losses, even if we have been advised of the possibility of such damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to the App and Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify, suspend, or discontinue Fynuu (or any feature) at any time, with or without notice, and without liability. We may also introduce in-app purchases, subscriptions, or other paid features in the future. We may update these Terms from time to time. When we do, we will post the revised Terms in the app or on our website and update the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions or concerns about these Terms, you may contact us at nikgames.lab@gmail.com
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default Terms;