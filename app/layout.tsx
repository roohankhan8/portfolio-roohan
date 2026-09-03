import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteMeta } from "./_lib/portfolio-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: siteMeta.title,
  description: siteMeta.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: siteMeta.title,
    description: siteMeta.description,
    type: "website",
    siteName: siteMeta.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Roohan Khan — Backend-focused Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--bg)] font-sans text-[var(--text)]">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var theme=localStorage.getItem('portfolio-theme');if(theme==='light'||theme==='dark'){document.documentElement.dataset.theme=theme;}}catch(error){}",
          }}
        />
        {children}
      </body>
    </html>
  );
}
