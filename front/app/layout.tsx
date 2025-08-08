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
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
