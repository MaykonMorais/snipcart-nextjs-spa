import Script from "next/script";
import ProductList from "../components/ProductList";
import Contact from "../components/Contact";
import Head from "next/head";
import { IProduct } from "../components/Product";
import halfmoonBettaPicture from "../public/halfmoon.jpg";
import dragonScaleBettaPicture from "../public/dragonscale.jpg";
import crowntailBettaPicture from "../public/crowntail.jpeg";
import veiltailBettaPicture from "../public/veiltail.jpg";
import { GetStaticProps } from "next";
import Jumbotron from "../components/Jumbotron";

interface IProductListProps {
  products: IProduct[];
}

export default function Home({ products }: IProductListProps) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TGX24L6');`,
          }}
        ></script>
        <title>My awesome store</title>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
        />
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TGX24L6"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        <main className="main">
          <Jumbotron />
          <ProductList products={products} />
          <Contact />
        </main>
        <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
        <div
          hidden
          id="snipcart"
          data-api-key="OWNlZTNlYmItZTU5OS00MmI4LThjOTAtMjY0NzAyYmI2ODAxNjM3NjIyMjY3MDMxMTIzMzUx
"
        ></div>
      </body>
    </>
  );
}

export const products: IProduct[] = [
  {
    id: "halfmoon",
    name: "Halfmoon Betta",
    price: 25.0,
    image: halfmoonBettaPicture,
    description:
      "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.",
    url: "/api/products/halfmoon",
  },
  {
    id: "dragonscale",
    name: "Dragon Scale Betta",
    price: 35,
    image: dragonScaleBettaPicture,
    description:
      "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.",
    url: "/api/products/dragonscale",
  },
  {
    id: "crowntail",
    name: "Crowntail Betta",
    price: 7.5,
    image: crowntailBettaPicture,
    description:
      "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb.",
    url: "/api/products/crowntail",
  },
  {
    id: "veiltail",
    name: "Veiltail Betta",
    price: 5.0,
    image: veiltailBettaPicture,
    description:
      "By far the most common betta fish. You can recognize it by its long tail aiming downwards.",
    url: "/api/products/veiltail",
  },
];

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      products,
    },
  };
};
