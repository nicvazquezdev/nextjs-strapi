import Footer from "./components/Footer";
import Header from "./components/Header";
import { ErrorBoundary } from "./components/ui/ErrorBoundary";
import { APP_CONFIG } from "./lib/constants";
import "./globals.css";

export const metadata = {
  title: APP_CONFIG.name,
  description: APP_CONFIG.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 mx-auto max-w-6xl px-6 py-8">
            <ErrorBoundary>{children}</ErrorBoundary>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
