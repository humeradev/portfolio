import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Humera Khan | Frontend Developer & CEO | HumAi Webs",
  description:
    "Portfolio of Humera Khan, founder and CEO of HumAi Webs, a forward-thinking web design and development studio based in the UK.",
  keywords:
    "Humera Khan, HumAi Webs, UK web developer, frontend developer UK, React developer, Next.js developer, web design UK",
  authors: [{ name: "Humera Khan" }],
  creator: "Humera Khan",
  publisher: "HumAi Webs",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://humerakhan.com",
    title: "Humera Khan | Frontend Developer & CEO | HumAi Webs",
    description:
      "Portfolio of Humera Khan, founder and CEO of HumAi Webs, a forward-thinking web design and development studio based in the UK.",
    siteName: "Humera Khan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Humera Khan | Frontend Developer & CEO | HumAi Webs",
    description:
      "Portfolio of Humera Khan, founder and CEO of HumAi Webs, a forward-thinking web design and development studio based in the UK.",
    creator: "@humerakhan",
  },
  alternates: {
    canonical: "https://humerakhan.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="London" />
      </head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Humera Khan",
              "jobTitle": "CEO & Frontend Developer",
              "description": "Founder and CEO of HumAi Webs, a forward-thinking web design and development studio.",
              "url": "https://humerakhan.com",
              "sameAs": [
                "https://twitter.com/humerakhan",
                "https://github.com/humerakhan",
                "https://linkedin.com/in/humerakhan"
              ],
              "knowsAbout": ["Frontend Development", "React", "Next.js", "Tailwind CSS", "UI/UX Design", "Web Development"],
              "worksFor": {
                "@type": "Organization",
                "name": "HumAi Webs",
                "description": "A forward-thinking web design and development studio founded by Humera Khan.",
                "url": "https://humaiwebs.com"
              }
            }
          `}
        </Script>
      </body>
    </html>
  )
}


import './globals.css'