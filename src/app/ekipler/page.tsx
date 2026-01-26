import TeamCard from "@/components/team-card";
import ekipler from "@/data/ekipler.json";
import Link from "next/link";

export const metadata = {
  title: "Ekiplerimiz - Otonom Sistemler Kulübü",
  description: "Kulübümüzün takımları ve kaptanları",
};

export default function EkiplerPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Ekiplerimiz</h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Farklı alanlarda çalışan, tutkulu ve başarılı takımlarımız
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ekipler.map((team) => (
            <TeamCard
              key={team.id}
              name={team.name}
              captain={team.captain}
              captainImage={team.captainImage}
              description={team.description}
              members={team.members}
              achievements={team.achievements}
            />
          ))}
        </div>

        {/* Join CTA */}
        <div className="mt-16 text-center bg-slate-900 border border-slate-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bir Takıma Katılmak İster misin?
          </h2>
          <p className="text-slate-400 mb-8">
            İlgi alanına uygun takımımıza katıl, projeler geliştir!
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Başvur
            </Link>
            
        </div>
      </div>
    </main>
  );
}