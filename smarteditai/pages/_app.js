import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import SEO from "../components/additional/seo";
import LandingLayout from "../components/landingPage/landingLayout";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SEO />
      <SessionProvider session={session}>
        <ThemeProvider attribute="class">
          <LandingLayout>
            <Component {...pageProps} />
          </LandingLayout>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
