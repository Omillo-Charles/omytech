import localFont from "next/font/local";

export const glacialIndifference = localFont({
  src: [
    {
      path: "../public/fonts/glacial-indifference/GlacialIndifference-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/glacial-indifference/GlacialIndifference-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/glacial-indifference/GlacialIndifference-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-glacial-indifference",
  display: "swap",
  fallback: ["sans-serif"],
});

export const mulish = localFont({
  src: [
    {
      path: "../public/fonts/mulish/Mulish-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/mulish/Mulish-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/mulish/Mulish-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/mulish/Mulish-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-mulish",
  display: "swap",
  fallback: ["sans-serif"],
});
