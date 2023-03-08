import "./globals.css";

export const metadata = {
  title: "Greenhouse Hunter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
