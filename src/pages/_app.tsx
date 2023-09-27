import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { NextComponentType } from "next";

import { api } from "~/utils/api";

import "~/styles/globals.css";

interface AppPropsWithComponentLayout extends AppProps {
  Component: NextComponentType & { layout: keyof typeof layouts };
}

const layouts = {
  default: dynamic(() => import("../layouts/default"), { ssr: false }),
  app: dynamic(() => import("../layouts/app"), { ssr: false }),
};

const MyApp = ({ Component, pageProps }: AppPropsWithComponentLayout) => {
  const Layout = layouts[Component.layout || "default"];

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default api.withTRPC(MyApp);
