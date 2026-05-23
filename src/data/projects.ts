export type Project = {
  name: string;
  description: string;
  liveUrl: string;
  stack: string[];
  status: "Live" | "Complete";
  highlight: string;
};

export const projects: Project[] = [
  {
    name: "Portfolio",
    description:
      "A premium personal portfolio that showcases selected work with a clean landing page, strong visuals, and a simple path to contact.",
    liveUrl: "https://portfolio-mauve-xi-64.vercel.app",
    stack: ["Next.js", "Tailwind CSS", "Responsive UI"],
    status: "Live",
    highlight: "Personal showcase",
  },
  {
    name: "Thai Business Finder",
    description:
      "A polished landing page for discovering Thai businesses, tuned for a premium dark-green brand experience.",
    liveUrl: "https://thai-business-finder.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Complete",
    highlight: "Business discovery",
  },
  {
    name: "CSS Gradient Studio",
    description:
      "A focused utility for designing smooth, polished CSS gradients and previewing them in real time.",
    liveUrl: "https://css-gradient-studio-ruby.vercel.app",
    stack: ["CSS", "Color Tools", "UI Preview"],
    status: "Live",
    highlight: "Gradient maker",
  },
  {
    name: "JSON Forge",
    description:
      "A fast JSON workspace for formatting, inspecting, and reshaping structured data with clarity.",
    liveUrl: "https://json-forge-nu.vercel.app",
    stack: ["TypeScript", "Data Tools", "Formatter"],
    status: "Live",
    highlight: "JSON utility",
  },
  {
    name: "Meta Tag Wizard",
    description:
      "A practical tool for generating clean SEO metadata and share-ready tags for web pages.",
    liveUrl: "https://meta-tag-wizard.vercel.app",
    stack: ["SEO", "Metadata", "Web Utility"],
    status: "Live",
    highlight: "SEO helper",
  },
  {
    name: "Palette Craft",
    description:
      "A color palette exploration tool for building balanced, brand-ready combinations with confidence.",
    liveUrl: "https://palette-craft-theta.vercel.app",
    stack: ["Color Systems", "Design", "Frontend"],
    status: "Live",
    highlight: "Palette studio",
  },
  {
    name: "Regex Lab",
    description:
      "An interactive regex workspace for testing patterns, checking matches, and iterating safely.",
    liveUrl: "https://regex-lab-two.vercel.app",
    stack: ["Regex", "Developer Tool", "Validation"],
    status: "Live",
    highlight: "Pattern lab",
  },
];
