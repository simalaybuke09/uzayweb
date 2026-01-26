import { Calendar, Trophy } from "lucide-react";
import Image from "next/image";

interface AchievementCardProps {
  title: string;
  date: string;
  award: string;
  description: string;
  image: string;
  team: string;
}

export default function AchievementCard({
  title,
  date,
  award,
  description,
  image,
  team,
}: AchievementCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Trophy size={16} />
          {award}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
          <Calendar size={16} />
          <span>{formattedDate}</span>
        </div>
        
        <p className="text-slate-300 mb-3">{description}</p>
        
        <div className="pt-3 border-t border-slate-800">
          <span className="text-sm text-blue-400 font-medium">{team}</span>
        </div>
      </div>
    </div>
  );
}