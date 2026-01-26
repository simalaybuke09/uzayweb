import SponsorCard from "@/components/sponsor-card";
import sponsorlar from "@/data/sponsorlar.json";
import Link from "next/link";

export const metadata = {
  title: "Sponsorlarımız - Otonom Sistemler Kulübü",
  description: "Bize destek veren değerli sponsorlarımız",
};

export default function SponsorlarPage() {
  const platinumSponsors = sponsorlar.filter(s => s.tier === "platinum");
  const goldSponsors = sponsorlar.filter(s => s.tier === "gold");
  const silverSponsors = sponsorlar.filter(s => s.tier === "silver");

  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Sponsorlarımız</h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Projelerimize destek veren değerli iş ortaklarımız
          </p>
        </div>

        {/* Platinum Sponsors */}
        {platinumSponsors.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Platinum Sponsorlar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {platinumSponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.id}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  website={sponsor.website}
                  tier={sponsor.tier}
                />
              ))}
            </div>
          </div>
        )}

        {/* Gold Sponsors */}
        {goldSponsors.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Gold Sponsorlar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {goldSponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.id}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  website={sponsor.website}
                  tier={sponsor.tier}
                />
              ))}
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Silver Sponsorlar
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {silverSponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.id}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  website={sponsor.website}
                  tier={sponsor.tier}
                />
              ))}
            </div>
          </div>
        )}

        {/* Become Sponsor CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sponsor Olmak İster misiniz?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Projelerimize destek olarak genç yeteneklerin gelişimine katkıda bulunun
          </p>
           
          <Link href="/iletisim"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">İletişime Geçin</Link>
            
          
        </div>
      </div>
    </main>
  );
}