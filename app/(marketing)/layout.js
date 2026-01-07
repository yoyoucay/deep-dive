import "../globals.css";

export const metadata = {
  title: "Deep Dive",
  description: "Articles and news about web development and programming.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
