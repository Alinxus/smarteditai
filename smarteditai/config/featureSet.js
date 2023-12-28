import {
    MdOutlineRssFeed,
    MdRocketLaunch,
    MdOutlineShield,
    MdPublishedWithChanges,
    MdSpeed,
    MdVideoLabel,
  } from "react-icons/md";
  import { BsGlobeAmericas } from "react-icons/bs";
  import { TbSeo } from "react-icons/tb";
  import { BiDollar } from "react-icons/bi";

const features = [
  {
    Icon: MdVideoLabel,
    title: "Save time and energy",
    description:
      "Saving 20+ hours editing with our intuitive AI video editor",
  },
  {
    Icon: MdRocketLaunch,
    title: "One-Click Enhancements:    ",
    description:
      "a feature that allows users to apply one-click enhancements to their videos. These enhancements could include basic color correction, noise reduction, or auto-stabilization. This feature provides users with quick and easy improvements to the overall quality of their videos without requiring in-depth editing skills.      ",
  },
  {
    Icon: BsGlobeAmericas,
    title: "Intelligent Content Suggestions: ",
    description:
      "Implement an AI-driven content suggestion system that recommends relevant multimedia elements based on the video's content. This could include suggesting B-roll footage, images, or graphics that complement or enhance the storyline. The AI analyzes the video context and offers creative suggestions to improve the overall production value.",
  },
  {
    Icon: MdOutlineShield,
    title: "Style Based editing",
    description:
      "Develop an AI system that learns from popular editing styles, trends, and user preferences. Users can choose from a variety of auto-adaptive editing styles that automatically apply a consistent and professional look to their videos. This feature caters to users who may not have a strong design sense but want polished and visually appealing results.",
  },
  {
    Icon: MdPublishedWithChanges,
    title: "AI-Powered Video Analysis and Storyboarding",
    description:
      "Implement AI algorithms that can analyze video content to automatically generate a storyboard or timeline. This could involve identifying key scenes, emotions, or objects within the video. Users can then use the generated storyboard as a starting point for their edits, saving time and providing a creative spark."
      ,
  },
  {
    Icon: MdSpeed,
    title: "Real-Time Collaboration with AI Suggestions",
    description:
      "Enable real-time collaboration among multiple users on the same project. Integrate AI to provide collaborative suggestions, such as recommending edits, transitions, or effects based on the content being edited. This feature can enhance teamwork and creativity, particularly for projects with multiple contributors.",
  },
  {
    Icon: TbSeo,
    title: "Speech-to-Text Transcription and Captioning:",
    description:
      "Integrate AI-powered speech recognition to transcribe spoken words in the video. This feature can be extended to automatically generate captions, making videos more accessible and improving SEO. Users can edit and customize the captions within the editor, ensuring accuracy and style",
  },
  {
    Icon: BiDollar,
    title: "Cost Effective",
    description:
      "Well featured and cost effective",
  },
];

export default features;
