import React from 'react';
import { 
  Brain, 
  GitPullRequest, 
  MessageSquare, 
  ShieldCheck,
  BadgeDollarSign,
  Award
} from 'lucide-react';

type FeatureProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-[#000000] p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group border border-gray-800">
      <div className="text-orange-400 mb-4 sm:mb-6">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6 sm:w-8 sm:h-8' })}
      </div>
      <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 text-white">{title}</h3>
      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export const Features: React.FC = () => {
  const features = [
    {
      title: "Smart Merge",
      description: "Prioritize and merge PRs based on project impact and contributor reliability.",
      icon: <GitPullRequest />
    },
    {
      title: "Feedback Loop",
      description: "Provide constructive, automated feedback to help contributors improve.",
      icon: <MessageSquare />
    },
    {
      title: "Security Scanning",
      description: "Identify and flag potential security vulnerabilities before they enter your codebase.",
      icon: <ShieldCheck />
    },
    {
      title: "Custom Workflows",
      description: "Configure project-specific rules and thresholds for automated decisions.",
      icon: <Brain />
    },
    {
      title: "Bounty Payouts",
      description: "Pay bounties to contributors once code passes test and PR merged.",
      icon: <BadgeDollarSign />
    },
    {
      title: "Contributor Reward",
      description: "Automatically calculate and distribute rewards based on contribution quality and complexity.",
      icon: <Award />
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm font-medium bg-gradient-to-r from-orange-600/10 to-orange-500/10 border border-orange-500/20 text-orange-400">
            Features
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Powerful Tools for Modern Open-Source
          </h2>
          <p className="text-sm sm:text-lg text-gray-400 max-w-2xl mx-auto">
            DevAsign combines AI-powered code analysis with seamless payment infrastructure to transform your workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
