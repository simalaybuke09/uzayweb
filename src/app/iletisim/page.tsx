"use client";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import siteInfo from "@/data/site-info.json";
import Link from "next/link";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Formspree veya Getform endpoint'inizi buraya ekleyin
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">İletişim</h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Sorularınız mı var? Bize ulaşın, size yardımcı olmaktan mutluluk duyarız
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Bize Ulaşın</h2>
              <p className="text-slate-400 mb-8">
                Kulübümüz hakkında daha fazla bilgi almak, etkinliklerimize katılmak veya 
                projelerimize destek olmak için bizimle iletişime geçebilirsiniz.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
                <Link href={`mailto:${siteInfo.contact.email}`}
                    className="flex items-start gap-4 bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-500 transition group">
                </Link>
                
                <div className="bg-blue-600 p-3 rounded-lg group-hover:scale-110 transition">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">E-posta</h3>
                  <p className="text-slate-400">{siteInfo.contact.email}</p>
                </div>

              <Link href={`tel:${siteInfo.contact.phone}`}
                className="flex items-start gap-4 bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-500 transition group"></Link>
            
              
                
              
                <div className="bg-blue-600 p-3 rounded-lg group-hover:scale-110 transition">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Telefon</h3>
                  <p className="text-slate-400">{siteInfo.contact.phone}</p>
                </div>
              

              <div className="flex items-start gap-4 bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Adres</h3>
                  <p className="text-slate-400">{siteInfo.contact.address}</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl">
              <h3 className="text-white font-semibold mb-3">Çalışma Saatleri</h3>
              <div className="space-y-2 text-blue-100">
                <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                <p>Cumartesi: 10:00 - 15:00</p>
                <p>Pazar: Kapalı</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Mesaj Gönderin</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ahmet Yılmaz"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ahmet@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Kulübe katılmak istiyorum"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 group"
              >
                {status === "sending" ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    Gönder
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="bg-green-600/20 border border-green-600 text-green-400 px-4 py-3 rounded-lg">
                  Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-600/20 border border-red-600 text-red-400 px-4 py-3 rounded-lg">
                  Bir hata oluştu. Lütfen daha sonra tekrar deneyin veya e-posta ile iletişime geçin.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map Section (Optional) */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Konumumuz</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.654090437831!2d28.978359315451495!3d41.06238797929544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zxLBzdGFuYnVsIFRla25payDDnG5pdmVyc2l0ZXNp!5e0!3m2!1str!2str!4v1621234567890!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-slate-400 mt-4 text-sm">
            * Haritadaki konum örnek amaçlıdır. Gerçek konumunuzu ekleyebilirsiniz.
          </p>
        </div>
      </div>
    </main>
  );
}