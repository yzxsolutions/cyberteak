import { SearchCheckIcon, BrainCircuit, AreaChart, Store, Gauge, Radar, UserCheck, Landmark } from 'lucide-react';

export const cardData = [
  {
    image: "/images/security.jpg",
    title: "Advanced Threat Detection",
    description: "Our system uses machine learning to detect and neutralize threats before they can impact your business. We provide real-time analysis and alerts.",
    icon: <SearchCheckIcon className="w-10 h-10 text-blue-400" />,
    cta: {
      text: "Learn More",
      link: "/services/threat-detection"
    }
  },
  {
    image: "/images/cyber-lock.png",
    title: "Data Encryption & Privacy",
    description: "Protect your sensitive data with end-to-end encryption. We ensure your data remains confidential and compliant with global privacy regulations.",
    icon: <SearchCheckIcon className="w-10 h-10 text-blue-400" />,
    cta: {
      text: "Explore Encryption",
      link: "/services/encryption"
    }
  },
  {
    image: "/images/team.png",
    title: "24/7 Security Operations",
    description: "Our dedicated Security Operations Center (SOC) provides around-the-clock monitoring and rapid incident response to keep your operations secure.",
    icon: <SearchCheckIcon className="w-10 h-10 text-blue-400" />,
    cta: {
      text: "Discover Our SOC",
      link: "/services/soc"
    }
  }
];

export const productsData = [
  {
    title: 'Resolute Fortress - For Businesses',
    description:
      "Harness the power of AI to predict potential cyber attacks and quantify your organization's cyber risk in financial terms. Our integrated cyber insurance marketplace provides seamless access to tailored coverage. Benefit from our unique hygiene score, offering a clear benchmark of your security posture.",
    image: '/images/product1.png', // Placeholder: Replace with your image
  },
  {
    title: 'Resolute Compass - For Cyber Insurance Providers & Brokers',
    description:
      "Empower your business with a comprehensive view of your customers' risk levels. Resolute Compass provides the insights you need to offer customized cyber insurance policies and better serve your clients.",
    image: '/images/product2.png', // Placeholder: Replace with your image
  },
  {
    title: 'Resolute Vigil - For Individuals',
    description:
      'Take control of your personal cyber security with our intuitive mobile application. Understand your individual risk posture and easily access cyber insurance options to protect yourself in the digital age.',
    image: '/images/product3.png', // Placeholder: Replace with your image
  },
  {
    title: 'Resolute Accord - For AI Governance and Compliance',
    description:
      'Ensure your AI applications comply with evolving regulations like the EU AI Act. Resolute Accord provides comprehensive Governance, Risk, and Compliance (GRC) tools to manage AI risks and build trust with your stakeholders.',
    image: '/images/product4.png', // Placeholder: Replace with your image
  },
];

export const whyChooseUsData = [
  {
    icon: <BrainCircuit className="w-10 h-10 text-blue-300" />,
    title: "AI-Powered Threat Prediction",
    description: "Proactively identify and mitigate potential cyber threats before they impact your business or personal life."
  },
  {
    icon: <AreaChart className="w-10 h-10 text-blue-300" />,
    title: "Cyber Risk Quantification",
    description: "Understand your risk in clear financial terms, enabling better decision-making and resource allocation."
  },
  {
    icon: <Store className="w-10 h-10 text-blue-300" />,
    title: "Cyber Insurance Marketplace",
    description: "Seamlessly access a range of cyber insurance options tailored to your specific risk profile."
  },
  {
    icon: <Gauge className="w-10 h-10 text-blue-300" />,
    title: "Hygiene Scoring",
    description: "Gain a clear, credit-score-like understanding of your security posture with Resolute Fortress."
  },
  {
    icon: <Radar className="w-10 h-10 text-blue-300" />,
    title: "Comprehensive Risk Visibility",
    description: "Resolute Compass provides insurance professionals with a holistic view of their clients' cyber risk."
  },
  {
    icon: <UserCheck className="w-10 h-10 text-blue-300" />,
    title: "Personal Cyber Security",
    description: "Resolute Vigil empowers individuals to understand and manage their own digital safety."
  },
  {
    icon: <Landmark className="w-10 h-10 text-blue-300" />,
    title: "AI GRC and Compliance",
    description: "Ensure your AI applications meet regulatory requirements and ethical standards with Resolute Accord."
  }
];

