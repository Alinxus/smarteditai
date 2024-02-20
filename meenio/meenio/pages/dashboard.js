import React, { useState } from "react";
import LandingLayout from "@/components/landingPage/landingLayout";
import LandingHeader from "@/components/landingPage/landingHeader";
import SEO from "@/components/additional/seo";
import DashboardHero from "@/components/dashboard/DashboardHero";
import DashboardDemo from "@/components/dashboard/DashboardDemo";


import FeedDataCard from "@/components/aiComponent/feedDataCard";
import Chatbot from "@/components/aiComponent/chatbot";
import DalleImageGeneration from "@/components/aiComponent/dalleImageGeneration";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <>
      <LandingLayout>
        <SEO />
        <main className="space-y-10 mb-10">
          <DashboardDemo />
        </main>
      </LandingLayout>
    </>
  );
}
