import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "江定承｜影像創作者履歷",
  description: "江定承的個人履歷、攝影作品與短影音剪輯作品。",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
