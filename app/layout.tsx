import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_KR, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-jetbrains",
  display: "swap",
});

const plex = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WOOJIN — Build. Break. Solve.",
  description:
    "클라우드 인프라부터 백엔드 API, 실제로 쓰이는 화면까지 만드는 고등학생 개발자의 포트폴리오. AWS · Kubernetes · Terraform · NestJS · Next.js.",
  openGraph: {
    title: "WOOJIN — Build. Break. Solve.",
    description:
      "Cloud infrastructure, backend APIs and the screens people actually use. A portfolio.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090a" },
    { media: "(prefers-color-scheme: light)", color: "#f4f3ef" },
  ],
};

/** Applies the saved theme and language before first paint, so nothing flashes. */
const preferenceScript = `(function(){try{var b=document.body;var t=localStorage.getItem("theme");var l=localStorage.getItem("lang");b.dataset.theme=t==="light"?"light":t==="dark"?"dark":(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");b.dataset.lang=l==="en"?"en":"ko";}catch(e){document.body.dataset.theme="dark";document.body.dataset.lang="ko";}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${jetbrains.variable} ${plex.variable}`}>
      <body
        data-theme="dark"
        data-lang="ko"
        className="font-sans"
        suppressHydrationWarning
      >
        <script dangerouslySetInnerHTML={{ __html: preferenceScript }} />
        {children}
      </body>
    </html>
  );
}
