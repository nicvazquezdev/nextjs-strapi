import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Next Big Things",
  description:
    "A minimal catalog of emerging technologies powered by Strapi GraphQL",
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
          <div className="flex-1 mx-auto max-w-6xl px-6 py-8">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
