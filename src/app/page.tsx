import { Instagram, Linkedin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import siteInfo from "@/data/site-info.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            {siteInfo.slogan.split(" ").map((word, i) => (
              <span key={i}>
                {word === "Birlikte" ? (
                  <span className="text-blue-500">{word}</span>
                ) : (
                  word
                )}{" "}
              </span>
            ))}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            {siteInfo.about}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/iletisim"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition flex items-center justify-center gap-2 group"
            >
              Bize Katıl
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/ekipler"
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              Ekiplerimizi Keşfet
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-500 mb-2">3</div>
            <div className="text-slate-400">Aktif Takım</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-500 mb-2">30+</div>
            <div className="text-slate-400">Üye</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-500 mb-2">10+</div>
            <div className="text-slate-400">Başarı</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-500 mb-2">5+</div>
            <div className="text-slate-400">Sponsor</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Hakkımızda</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {siteInfo.about}
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Ulusal ve uluslararası yarışmalarda dereceye giren ekiplerimizle, 
                üniversitemizi başarıyla temsil ediyoruz.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Misyonumuz</h3>
              <p className="text-blue-100">
                {siteInfo.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Teknolojiye Tutkulu musun?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Kulübümüze katıl, projeler geliştir ve yarışmalarda başarılar kazan!
          </p>
          <Link 
            href="/iletisim"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Hemen Başvur
          </Link>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Bizi Takip Edin</h2>
          <p className="text-slate-400 mb-12">Sosyal medyada güncel kalın</p>
          
          <div className="flex gap-8 justify-center">
            <a 
              href={siteInfo.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-purple-600 to-pink-500 p-6 rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <Instagram size={32} className="text-white" />
            </a>
            <a 
              href={siteInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-6 rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <Linkedin size={32} className="text-white" />
            </a>
            <a 
              href={`mailto:${siteInfo.contact.email}`}
              className="bg-slate-700 p-6 rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <Mail size={32} className="text-white" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}