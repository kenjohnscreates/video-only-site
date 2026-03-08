export type CaseStudy = {
  clientName: string;
  slug: string;
  image: string;
  goal: string;
  role: string;
  results: string;
  accentColor: "blue" | "pink" | "coral";
};

export const caseStudies: CaseStudy[] = [
  {
    clientName: "Ample",
    slug: "ample",
    image: "/case-studies/client-one-1.jpg",
    goal: "Take Ample from 0 to 1, concept to completion. Run content and marketing campaigns through product launch while keeping brand consistency and unified narratives across all channels.",
    role: "Go-To-Market Operator & Founder, responsible for growth, launch and technical delivery.",
    results:
      "Raised $500k. Shipped a security-audited beta dApp plus staking on 2 chains. Built 35+ partners. Grew X to 50k at peak and ran ads that gained millions of impressions.",
    accentColor: "blue",
  },
  {
    clientName: "Moriah Bakes",
    slug: "moriah-bakes",
    image: "/case-studies/client-two-1.jpg",
    goal: "Moriah wanted to upgrade the production quality of her channel and create a unified visual that would help her stand out in her vertical.",
    role: "Creative direction and live production delivery.",
    results:
      "6.2 Million views for 1 video and 4.9 Million views for another. Positive community comments and follow up dealflow.",
    accentColor: "pink",
  },
  {
    clientName: "NEAR",
    slug: "near",
    image: "/case-studies/client-three-1.jpg",
    goal: "Near's Digital Collective (DAO) wanted to raise awareness for their community governance campaign, pleding over $1 Million.",
    role: "Consulting and hands-on execution - process design, training, and producing video, motion plus social content for the campaign.",
    results:
      "Built and distributed MIRO boards for community bounty and voting processes. Videos gained over 100,000 views and posts that gained hundreds of thousands of impressions. Thousands of votes and new members participated.",
    accentColor: "coral",
  },
];
