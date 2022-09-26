import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import Navbar from "../components/navbar.js";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-gradient-to-r from-[#513972] via-[#380D72] to-[#4C0DA2]">
          <Navbar />
          <div className="m-6 md:m-52 text-lg bg-background drop-shadow-2xl break-words">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
