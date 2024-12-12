import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS globallynpm run dev
import 'bootstrap/dist/css/bootstrap.min.css'; // Load Bootstrap first
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
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css"
        integrity="sha512-6lLUdeQ5uheMFbWm3CP271l14RsX1xtx+J5x2yeIDkkiBpeVTNhTqijME7GgRKKi6hCqovwCoBTlRBEC20M8Mg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css"
        integrity="sha512-wR4oNhLBHf7smjy0K4oqzdWumd+r5/+6QO/vDda76MW5iug4PT7v86FoEkySIJft3XA0Ae6axhIvHrqwm793Nw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
        integrity="sha512-HGOnQO9+SP1V92SrtZfjqxxtLmVzqZpjFFekvzZVWoiASSQgSr4cw9Kqd2+l8Llp4Gm0G8GIFJ4ddwZilcdb8A=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        
      {/* Conditionally include the global CSS */}
      {!isExcluded && <style jsx global>{`@import "/styles/custom-module.module.css";`}</style>}
      <Component {...pageProps} />
    </main>
  );
}
