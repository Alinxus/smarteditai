import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import LandingLayout from "@/components/landingPage/landingLayout";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";
import SEO from "@/components/additional/seo";
import { ThemeProvider } from "next-themes";
import GoogleAnalytics from "@/components/additional/googleAnalytics";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <ClerkProvider {...pageProps}>
      <GoogleAnalytics />
      <SEO />
      <SessionProvider session={session}>
        <ThemeProvider attribute="class">
          <LandingLayout>
            <Component {...pageProps} />
          </LandingLayout>
        </ThemeProvider>
      </SessionProvider>
      </ClerkProvider>
    </>
  );
}
