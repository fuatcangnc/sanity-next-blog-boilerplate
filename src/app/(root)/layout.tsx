import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Header from "@/components/shared/header";
import Script from "next/script";
import { getSiteSettings } from "@/sanity/queries/settings";
import { getAnalyticsSettings } from "@/sanity/queries/analytics";

export const revalidate = 36

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

async function getSettings() {
  const [siteSettings, analyticsSettings] = await Promise.all([
    client.fetch(getSiteSettings),
    client.fetch(getAnalyticsSettings)
  ]);
  
  return { siteSettings, analyticsSettings };
}

export async function generateMetadata(): Promise<Metadata> {
  const { siteSettings } = await getSettings();
  
  return {
    title: {
      default: siteSettings?.title || "Blog Template",
      template: `%s | ${siteSettings?.title || "Blog Template"}`
    },
    description: siteSettings?.description,
    openGraph: {
      type: "website",
      locale: "tr_TR",
      title: siteSettings?.title,
      description: siteSettings?.description,
      images: siteSettings?.ogImage ? [urlFor(siteSettings.ogImage).url()] : [],
    },
    icons: {
      icon: siteSettings?.favicon ? urlFor(siteSettings.favicon).url() : undefined,
      apple: siteSettings?.favicon ? urlFor(siteSettings.favicon).url() : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { analyticsSettings } = await getSettings();

  return (
    <html lang="tr" suppressHydrationWarning>
      {analyticsSettings?.googleAnalyticsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${analyticsSettings.googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${analyticsSettings.googleAnalyticsId}');
            `}
          </Script>
        </>
      )}
      {analyticsSettings?.microsoftClarityId && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${analyticsSettings.microsoftClarityId}");
          `}
        </Script>
      )}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
