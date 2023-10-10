import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { NextComponentType } from "next";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { useUser } from "~/utils/atoms";

interface AppPropsWithComponentLayout extends AppProps {
  Component: NextComponentType & { layout: keyof typeof layouts };
}

const layouts = {
  default: dynamic(() => import("../layouts/default"), { ssr: false }),
  app: dynamic(() => import("../layouts/app"), { ssr: false }),
  dashboard: dynamic(() => import("../layouts/dashboard"), { ssr: false }),
};

const MyApp = ({ Component, pageProps }: AppPropsWithComponentLayout) => {
  const Layout = layouts[Component.layout || "default"];

  const [user, setUser] = useUser();
  const { isLoading } = api.auth.session.useQuery(undefined, {
    retry: false,
    refetchOnWindowFocus: false,
    onSuccess(data) {
      if (data) {
        setUser((old) => ({ ...old, ...data }));
      }
    },
    onError() {
      setUser(null);
    },
  });

  if (isLoading) return <>Loading...</>;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default api.withTRPC(MyApp);
