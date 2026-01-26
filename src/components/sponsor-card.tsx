import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface SponsorCardProps {
  name: string;
  logo: string;
  website?: string;
  tier: string; // "platinum" | "gold" | "silver" yerine string
}

const tierColors: Record<string, string> = {
  platinum: "border-slate-300 bg-slate-800/50",
  gold: "border-yellow-500 bg-yellow-500/5",
  silver: "border-slate-500 bg-slate-700/30",
};

const tierLabels: Record<string, string> = {
  platinum: "Platinum",
  gold: "Gold",
  silver: "Silver",
};

export default function SponsorCard({ name, logo, website, tier }: SponsorCardProps) {
  const content = (
    <div className={`${tierColors[tier] || tierColors.silver} border-2 rounded-xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer group`}>
      <div className="relative h-24 w-full mb-4">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      
      <div className="text-center">
        <h3 className="text-white font-semibold mb-2">{name}</h3>
        <span className="text-xs text-slate-400 uppercase tracking-wider">
          {tierLabels[tier] || tierLabels.silver} Sponsor
        </span>
      </div>
      
      {website && (
        <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink size={18} className="text-blue-400" />
        </div>
      )}
    </div>
  );

  if (website) {
    return (
      <a href={website} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}