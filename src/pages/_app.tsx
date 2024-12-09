import "@/styles/globals.css";
import { Rock_Salt, Poppins } from "next/font/google";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

// Load Local Fonts
const ppFormulaCondensed = localFont({
  src: [
    {
      path: "/fonts/PPFormulaCondensedBlack.woff", // Ensure this path is correct relative to the public folder
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-ppformula", // Optional custom variable
});

const ppFormulaExtra = localFont({
  src: [
    {
      path: "../pages/fonts/PPFormulaExtrabold.woff", // Ensure this path is correct relative to the public folder
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-ppformulabold", // Optional custom variable
});

// Load Google Fonts
const rockSalt = Rock_Salt({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${rockSalt.className} ${ppFormulaCondensed.variable} ${ppFormulaExtra.variable} ${poppins.className}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
