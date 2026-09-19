import type { Profile } from "./types";

export const profile: Profile = {
  name: "Manvitha Pentapati",
  title: "Software engineer",
  headline: "Driven by curiosity and a love for building",
  avatarUrl: "https://avatars.githubusercontent.com/u/159559667?v=4",
  email: "",
  cta: {
    label: "Get in touch",
    href: "https://portfolio-app-sigma-olive.vercel.app",
  },
  about: [
    "I enjoy working across the stack, but I'm happiest making systems simpler, faster and easier to operate.",
    "Below are a few projects I'm proud of. Most of my work lives on GitHub.",
  ],
  stats: [
    {
      label: "Public repositories",
      value: "30",
    },
    {
      label: "Stars earned",
      value: "2",
    },
    {
      label: "Followers",
      value: "3",
    },
    {
      label: "Years on GitHub",
      value: "2",
    },
  ],
  socials: [
    {
      platform: "github",
      url: "https://github.com/manvip28",
    },
    {
      platform: "website",
      url: "https://portfolio-app-sigma-olive.vercel.app",
    },
  ],
  contactNote: "Open to interesting engineering problems and collaborations.",
};
