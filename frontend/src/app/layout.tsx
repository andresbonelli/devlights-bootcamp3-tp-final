import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sfProRegular = localFont({
  src: "../../public/fonts/sf-pro-font/SFPRODISPLAYREGULAR.otf",
  variable: "--font-sf-pro-regular",
  weight: "100 900",
});

const sfProBold = localFont({
  src: "../../public/fonts/sf-pro-font/SFPRODISPLAYBOLD.otf",
  variable: "--font-sf-pro-bold",
  weight: "100 900",
});

const sfProMedium = localFont({
  src: "../../public/fonts/sf-pro-font/SFPRODISPLAYMEDIUM.otf",
  variable: "--font-sf-pro-medium",
  weight: "100 900",
});

const sfProSemiboldItalic = localFont({
  src: "../../public/fonts/sf-pro-font/SFPRODISPLAYSEMIBOLDITALIC.otf",
  variable: "--font-sf-pro-semibold-italic",
  weight: "100 900",
});

const sfProHeavyItalic = localFont({
  src: "../../public/fonts/sf-pro-font/SFPRODISPLAYHEAVYITALIC.otf",
  variable: "--font-sf-pro-heavy-italic",
  weight: "100 900",
});

const sfProLightItalic = localFont({
  src: "../../public/fonts/sf-pro-font/SFPRODISPLAYLIGHTITALIC.otf",
  variable: "--font-sf-pro-light-italic",
  weight: "100 900",
});

const sfProBlackItalic = localFont({
  src: "../../public/fonts/sf-pro-font/SFPRODISPLAYBLACKITALIC.otf",
  variable: "--font-sf-pro-black-italic",
  weight: "100 900",
});

const sfProThinItalic = localFont({
  src: "../../public/fonts/sf-pro-font/SFPRODISPLAYTHINITALIC.otf",
  variable: "--font-sf-pro-thin-italic",
  weight: "100 900",
});

const sfProUltralightItalic = localFont({
  src: "../../public/fonts/sf-pro-font/SFPRODISPLAYULTRALIGHTITALIC.otf",
  variable: "--font-sf-pro-ultralight-italic",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Devligths Bootcamps 3.0",
  description: "TP final grupal - grupo 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
      ${sfProRegular.variable}
      ${sfProBlackItalic.variable}
      ${sfProBold.variable}
      ${sfProHeavyItalic.variable}
      ${sfProLightItalic.variable}
      ${sfProMedium.variable}
      ${sfProSemiboldItalic.variable}
      ${sfProThinItalic.variable}
      ${sfProUltralightItalic.variable}
      antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
