import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/src/components/organisms/nabvar";
import { UserMenu } from "@/src/components/molecules/user-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className='min-h-screen mx-auto p-4'>
          <Navbar userMenu={<UserMenu />} />
          {children}
        </main>
      </body>
    </html>
  );
}
