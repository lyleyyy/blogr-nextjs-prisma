// import { AppProps } from "next/app";

// const App = ({ Component, pageProps }: AppProps) => {
//   return (
//     <Component {...pageProps} />
//   );
// };

// export default App;

import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { Session } from "next-auth";

const App = ({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
