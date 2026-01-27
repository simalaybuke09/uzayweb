import AchievementCard from "@/components/achievement-card";
import basarilar from "@/data/basarilar.json";

export const metadata = {
  title: "Başarılarımız - Otonom Sistemler Kulübü",
  description: "Ulusal ve uluslararası yarışmalardaki başarılarımız",
};

export default function BasarilarPage() {
  // Tarihe göre sırala (en yeni önce)
  const sortedBasarilar = [...basarilar.achievements].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Başarılarımız</h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ulusal ve uluslararası yarışmalarda kazandığımız ödüller
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">
              {basarilar.achievements.filter(b => b.award.includes("Birincilik")).length}
            </div>
            <div className="text-yellow-100">Birincilik</div>
          </div>
          <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">
              {basarilar.achievements.filter(b => b.award.includes("İkincilik")).length}
            </div>
            <div className="text-slate-100">İkincilik</div>
          </div>
          <div className="bg-gradient-to-br from-orange-700 to-orange-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">
              {basarilar.achievements.filter(b => b.award.includes("Üçüncülük")).length}
            </div>
            <div className="text-orange-100">Üçüncülük</div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedBasarilar.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              title={achievement.title}
              date={achievement.date}
              award={achievement.award}
              description={achievement.description}
              image={achievement.image}
              team={achievement.team}
            />
          ))}
        </div>
      </div>
    </main>
  );
}