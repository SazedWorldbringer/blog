import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Atharva Pardeshi",
  EMAIL: "hello@atharvapardeshi.space",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Atharva Pardeshi's blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Articles on topics I am interested in, musings of things on my mind, and experiences.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/sazed8703",
  },
  {
    NAME: "github",
    HREF: "https://github.com/SazedWorldbringer"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/atharvapardeshi",
  }
];
