"use client";
import { useEffect, useState } from "react";
import { Shield } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.replace("/admin/index.html");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8 flex justify-center">
          <div className="bg-blue-600 p-6 rounded-full">
            <Shield size={48} className="text-white" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">
          Yönetim Paneli
        </h1>
        
        <div className="mb-8">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg">
            Yönlendiriliyorsunuz...
          </p>
          <p className="text-slate-500 text-sm mt-2">
            {countdown} saniye
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <p className="text-slate-400 text-sm mb-4">
            Eğer otomatik yönlendirilmediyseniz:
          </p>
          <Link
            href="/admin/index.html"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
          
            Manuel Giriş Yap
          </Link>
          
        </div>

        <p className="text-slate-500 text-xs mt-6">
          Güvenli bağlantı ile korunmaktasınız
        </p>
      </div>
    </div>
  );
}