import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Privacy = () => {
  return <div className="min-h-screen gradient-bg">
      <Header />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-card/80 backdrop-blur-lg border-border/50">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <CardTitle className="text-4xl gradient-text">Privacy Policy</CardTitle>
              <p className="text-muted-foreground">Last updated: September 2025</p>
            </CardHeader>
            
            <CardContent className="prose prose-invert max-w-none space-y-6">
              <section>
                <p className="text-muted-foreground">
                  At Fynuu (the "App"), we take your privacy seriously. In compliance with applicable laws (such as GDPR and CCPA) and Google Play's User Data policy, this Privacy Policy explains what information we collect, how we use and share it, and your rights. Google Play requires that apps "comprehensively disclose how [we] collect[], use[], and share[] user data", and that the Privacy Policy be publicly available and specifically cover user privacy. We ensure our policy meets these standards and Google's "Data Safety" requirements (as updated in 2022) by clearly detailing data types, purposes, recipients, and control measures.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect only the information needed to operate and improve the App, and we list all categories here in an easy-to-understand format:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Account Information (Identity):</strong> If you choose to sign in with Google (via Firebase Authentication), we receive basic profile data (e.g. Google name, email address, and account ID) to create and manage your account. We do not collect personal data beyond what Google provides with your consent. All account credentials (passwords) are handled by Google; we only receive an authentication token.</li>
                  <li><strong>Voice Data:</strong> When you grant microphone permission, we capture your speech input (voice commands) and convert it to text for the App's AI assistant. Voice recordings are used only to process your request and are not stored long-term. Any personal identifiers are removed before sending transcripts to local or cloud AI models. (We do not collect audio or store recordings unless explicitly needed for the active session.)</li>
                  <li><strong>Location Data:</strong> If you allow location permission, we may use your geographic location to provide location-based features (e.g. local weather or time). We only collect location while the app is in use, and we do not continuously track you in the background. You can choose to deny this permission; doing so will limit location-dependent features.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Device & Usage Data</h2>
                <p className="text-muted-foreground">
                  We automatically collect certain device and usage information via Firebase Analytics and crash reporting. This includes non-personal device identifiers (e.g. device model, OS version), app usage events (which features you use, how often, how long), and app performance data (crashes or errors). This data is used in aggregate to improve app stability and user experience. It does not include your name or contents of your communications. Firebase Analytics handles this data on our behalf and aggregates it without creating a user profile.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the collected information only for the purposes described below (all of which are reasonably expected by users of an AI assistant). In summary, we use data for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Core App Functionality:</strong> To process your voice or text queries and provide answers via the AI assistant (either on-device or through cloud-based AI). For example, we need your voice input to convert to text and generate a response.</li>
                  <li><strong>Authentication & Personalization:</strong> To create and manage your account (Google Sign-In) and personalize your experience (e.g. remembering your name or preferences). Account info lets you access your settings across devices if you log in, and we use it solely to identify you, not to advertise to you.</li>
                  <li><strong>Analytics & Improvement:</strong> To analyze usage patterns and improve the App. Using Firebase Analytics (a Google service), we gather aggregate data about feature usage and performance.</li>
                  <li><strong>Security & Verification:</strong> To protect against fraud or abuse and to ensure the app is functioning properly.</li>
                  <li><strong>User Communications:</strong> To send you notifications or reminders you request (for example, an alarm you set). We do not use your contact information or any other data for marketing emails or spam.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Sharing and Disclosure</h2>
                <p className="text-muted-foreground mb-4">
                  We do not share your personal data with third parties except as described here:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Service Providers:</strong> We use Google's Firebase services (Authentication and Analytics). Firebase acts as a data processor under GDPR/CCPA, while we remain the data controller for your information.</li>
                  <li><strong>AI Processing (LLM):</strong> For generating assistant responses, we use a hybrid approach: local on-device LLMs when possible, and cloud-based LLMs for more complex queries. Critically, any data sent to cloud LLM providers is stripped of personal identifiers and encrypted.</li>
                  <li><strong>Legal Requirements:</strong> We will disclose your information if required by law (for example, to comply with a court order or to prevent fraud or security issues), but we will not sell or share personal data for any other purpose.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention and Your Choices</h2>
                <p className="text-muted-foreground mb-4">
                  We retain personal data only as long as necessary for the purposes above or as required by law. You have the right to request deletion of your account and personal data. If you create an account in our app, you may delete it at any time by using the in-app delete feature (Logout) or by contacting us. Upon such a request, we will erase your profile and any data associated with it from our servers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Security</h2>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your data. All data sent between the app and our servers (including Firebase and any cloud AI service) is encrypted in transit via HTTPS/TLS. Local data in RoomDB is encrypted at rest by the Android OS. Google Firebase services are ISO 27001 and ISO 27018 certified and undergo regular third-party audits.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our App is not intended for use by children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us so we can delete it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy or our data practices, you may contact our privacy team at nikgames.lab@gmail.com. We will respond to your inquiry as soon as possible.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default Privacy;