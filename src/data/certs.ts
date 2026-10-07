export type Cert = {
  img: string;
  firm: string;
  sub: string;
  amount: string;
  badge: boolean;
};

export const CERTS: Cert[] = [
  { img: "/images/01-the5ers.jpg",          firm: "The5ers",               sub: "Total Payouts · Jul 30, 2024",       amount: "$5,764.52", badge: false },
  { img: "/images/09-fundednext-split.jpg", firm: "FundedNext",            sub: "Profit Split · Sep 11, 2024",        amount: "$3,673.08", badge: false },
  { img: "/images/06-ftm-4990.jpg",         firm: "Funded Trader Markets", sub: "Withdrawal · Jul 3, 2025",           amount: "$4,990.00", badge: false },
  { img: "/images/05-ftm-3029.jpg",         firm: "Funded Trader Markets", sub: "Withdrawal · Jun 24, 2025",          amount: "$3,029.00", badge: false },
  { img: "/images/03-fundingpips.jpg",      firm: "FundingPips",           sub: "Bronze Certificate · Jun 23, 2025",  amount: "$2,215.00", badge: false },
  { img: "/images/11-alpha-futures.jpg",    firm: "Alpha Futures",         sub: "Proprietary Trader · Feb 13, 2026",  amount: "Certified", badge: true  },
  { img: "/images/10-fundednext-crown.jpg", firm: "FundedNext",            sub: "Crown Trader · Sep 11, 2024",        amount: "Certified", badge: true  },
  { img: "/images/02-alpha.jpg",            firm: "Alpha Capital Group",   sub: "Proprietary Trader · Feb 12, 2024",  amount: "Certified", badge: true  },
  { img: "/images/04-ftm-funded.jpg",       firm: "Funded Trader Markets", sub: "Funded Achievement · Jun 14, 2025",  amount: "Funded",    badge: true  },
  { img: "/images/07-tft-royal.jpg",        firm: "The Funded Trader",     sub: "Royal Challenge · Oct 13, 2023",     amount: "$100K Acc", badge: true  },
  { img: "/images/08-mff.jpg",              firm: "MyForexFunds",          sub: "Professional Trader · May 29, 2023", amount: "Certified", badge: true  },
];

export const FIRMS = [
  "The5ers",
  "FundedNext",
  "Funded Trader Markets",
  "FundingPips",
  "Alpha Capital Group",
  "Alpha Futures",
  "The Funded Trader",
  "MyForexFunds",
];
