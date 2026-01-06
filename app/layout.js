import MainHeader from "@/components/main-header";
import "./globals.css";

export const metadata = {
  title: "Deep Dive",
  description: "Articles and news about web development and programming.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          <main id="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
