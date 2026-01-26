import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hakkımızda */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Otonom Sistemler Kulübü</h3>
            <p className="text-slate-400 text-sm">
              Geleceği birlikte kodluyoruz. Teknoloji ve inovasyon odaklı öğrenci kulübü.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Hızlı Linkler</h3>
            <div className="space-y-2">
              <Link href="/ekipler" className="block text-slate-400 hover:text-white text-sm transition">
                Ekiplerimiz
              </Link>
              <Link href="/basarilar" className="block text-slate-400 hover:text-white text-sm transition">
                Başarılarımız
              </Link>
              <Link href="/sponsorlar" className="block text-slate-400 hover:text-white text-sm transition">
                Sponsorlar
              </Link>
              <Link href="/iletisim" className="block text-slate-400 hover:text-white text-sm transition">
                İletişim
              </Link>
            </div>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">İletişim</h3>
            <div className="space-y-3">
              <a href="mailto:kulup@universite.edu.tr" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition">
                <Mail size={16} />
                kulup@universite.edu.tr
              </a>
              <a href="tel:+905551234567" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition">
                <Phone size={16} />
                +90 555 123 4567
              </a>
              <div className="flex gap-4 mt-4">
                <a href="https://instagram.com" target="_blank" className="text-slate-400 hover:text-white transition">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" className="text-slate-400 hover:text-white transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2024 Otonom Sistemler Kulübü. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}