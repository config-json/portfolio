import { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });

const METADATA_TITLE = "config.json"
const METADATA_DESCRIPTION = "Twitter @config_json | Github @config-json";
const METADATA_IMAGE = 'https://configjson.dev/opengraph.png'

export const metadata: Metadata = {
  title: METADATA_TITLE,
  description: METADATA_DESCRIPTION,
  twitter: {
    title: METADATA_TITLE,
    images: [METADATA_IMAGE]
  },
  openGraph: {
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
    images: {
      url: METADATA_IMAGE,
      width: 1500,
      height: 750,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
