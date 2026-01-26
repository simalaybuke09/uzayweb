import { Users, Award } from "lucide-react";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  captain: string;
  captainImage: string;
  description: string;
  members: number;
  achievements: number;
}

export default function TeamCard({
  name,
  captain,
  captainImage,
  description,
  members,
  achievements,
}: TeamCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src={captainImage}
              alt={captain}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-sm text-slate-400">Kaptan: {captain}</p>
          </div>
        </div>
        
        <p className="text-slate-300 mb-4">{description}</p>
        
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-1 text-slate-400">
            <Users size={16} />
            <span>{members} Üye</span>
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <Award size={16} />
            <span>{achievements} Başarı</span>
          </div>
        </div>
      </div>
    </div>
  );
}