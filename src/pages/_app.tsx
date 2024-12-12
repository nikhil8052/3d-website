import "@/styles/globals.css";
import { Rock_Salt, Poppins } from "next/font/google";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Layout from "./components/Layout";

// Load Local Fonts
const ppFormulaCondensed = localFont({
  src: [
    {
      path: "/fonts/PPFormulaCondensedBlack.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-ppformula",
});

const ppFormulaExtra = localFont({
  src: [
    {
      path: "/fonts/PPFormulaExtrabold.woff",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-ppformulabold",
});

// Load Google Fonts
const rockSalt = Rock_Salt({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${rockSalt.className} ${ppFormulaCondensed.variable} ${ppFormulaExtra.variable} ${poppins.className}`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
