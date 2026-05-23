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
];
