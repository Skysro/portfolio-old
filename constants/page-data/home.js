import links from "./links"

export const homePageData = {
  photo: {
    url: '/me.png',
    alt: "Pritam Panda"
  },
  tagline: "I love to transform ideas into web application.",
  tagline2: "I am on a mission to build web applications to empower businesses.",
  intro:
    "I am a passionate MERN stack web developer from India, deeply in love with coding and exploring various tech domains.",
  status: [
    "Im currently building Full Stack Projects.",
    "Im on a mission to become a full stack developer.",
    "I bring life to designs through lines of code."
  ],
  socials: [
    {
      id: 1,
      name: "twitter",
      link: links.twitter
    },
    {
      id: 2,
      name: "linkedin",
      link: links.linkedin
    },
    {
      id: 3,
      name: "github",
      link: links.github
    }
  ],
  resumelink: "/PritamPandaCV.pdf"
};
