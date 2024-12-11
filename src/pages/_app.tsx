import "@/styles/globals.css";
// import "@/styles/bootstrap.min.css";
import { Rock_Salt, Poppins } from "next/font/google";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { useRouter } from "next/router";

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
      path: "../pages/fonts/PPFormulaExtrabold.woff",
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
  const router = useRouter();

  // Pages where `custom-module.css` should NOT be applied
  const excludedRoutes = ["/", "/wall"];
  const isExcluded = excludedRoutes.includes(router.pathname);

  return (
    <main
      className={`${rockSalt.className} ${ppFormulaCondensed.variable} ${ppFormulaExtra.variable} ${poppins.className}`}
    >
      {/* Conditionally include the global CSS */}
      {!isExcluded && <style jsx global>{`@import "/styles/custom-module.module.css";`}</style>}
      <Component {...pageProps} />
    </main>
  );
}
