import type { Metadata } from 'next';
import { Space_Grotesk, Manrope, IBM_Plex_Mono, Bebas_Neue } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { ScrollRevealProvider } from '@/components/ui/scroll-reveal';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-condensed',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://devanshu-dev-portfolio.vercel.app'),
  title: 'Devanshu Saini — Software Engineer & Developer',
  description:
    'Personal portfolio of Devanshu Saini. Computer Science student and software engineer building thoughtful solutions through code, full-stack applications, and systems programming.',
  keywords: [
    'Devanshu Saini',
    'Software Engineer',
    'Full-Stack Developer',
    'Python',
    'Django',
    'Java',
    'Flask',
    'Next.js',
    'TypeScript',
    'MySQL',
    'Portfolio',
  ],
  authors: [{ name: 'Devanshu Saini', url: 'https://github.com/Devanshu-Saini-07' }],
  creator: 'Devanshu Saini',
  icons: {
    icon: '/images/weblogo.jpg',
    apple: '/images/weblogo.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devanshu-dev-portfolio.vercel.app',
    title: 'Devanshu Saini — Software Engineer & Developer',
    description:
      'Computer Science student and aspiring engineer building practical software, backend architectures, and modern web applications.',
    siteName: 'Devanshu Saini Portfolio',
    images: [
      {
        url: '/images/devanshu.png',
        width: 800,
        height: 800,
        alt: 'Devanshu Saini — Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devanshu Saini — Software Engineer & Developer',
    description:
      'Computer Science student and aspiring engineer building practical software, backend architectures, and modern web applications.',
    images: ['/images/devanshu.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${manrope.variable} ${ibmPlexMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('dev_theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark) || saved === 'system' && prefersDark) {
                    document.documentElement.classList.add('dark');
                  } else if (saved === 'light' || (!saved && !prefersDark) || saved === 'system' && !prefersDark) {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-text-primary selection:bg-accent selection:text-accent-foreground min-h-screen">
        <ThemeProvider>
          <ScrollRevealProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
