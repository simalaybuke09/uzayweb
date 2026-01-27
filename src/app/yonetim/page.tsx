"use client";
import { useState } from "react";
import { 
  Trophy, 
  Users, 
  Handshake, 
  Plus, 
  Edit2, 
  Trash2, 
  X, 
  Save, 
  Search,
  LayoutDashboard
} from "lucide-react";

// --- Types ---
type Achievement = { id: number; title: string; date: string; description: string };
type TeamMember = { id: number; name: string; role: string; image: string };
type Sponsor = { id: number; name: string; type: string; logo: string };

type TabType = "achievements" | "teams" | "sponsors";

export default function YonetimPage() {
  const [activeTab, setActiveTab] = useState<TabType>("achievements");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // --- Mock Data States ---
  const [achievements, setAchievements] = useState<Achievement[]>([
    { id: 1, title: "Teknofest Birinciliği", date: "2023-09-01", description: "İHA kategorisinde birincilik ödülü." },
  ]);
  const [teams, setTeams] = useState<TeamMember[]>([
    { id: 1, name: "Ahmet Yılmaz", role: "Yönetim Kurulu Başkanı", image: "/team/1.jpg" },
  ]);
  const [sponsors, setSponsors] = useState<Sponsor[]>([
    { id: 1, name: "TechCorp", type: "Ana Sponsor", logo: "/sponsors/techcorp.png" },
  ]);

  // --- Handlers ---
  const handleDelete = (id: number) => {
    if (!confirm("Bu öğeyi silmek istediğinize emin misiniz?")) return;
    
    if (activeTab === "achievements") {
      setAchievements(prev => prev.filter(item => item.id !== id));
    } else if (activeTab === "teams") {
      setTeams(prev => prev.filter(item => item.id !== id));
    } else if (activeTab === "sponsors") {
      setSponsors(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: any = Object.fromEntries(formData.entries());
    
    // ID generation for new items
    const newItem = { ...data, id: editingItem ? editingItem.id : Date.now() };

    if (activeTab === "achievements") {
      if (editingItem) {
        setAchievements(prev => prev.map(item => item.id === newItem.id ? newItem : item));
      } else {
        setAchievements(prev => [...prev, newItem]);
      }
    } else if (activeTab === "teams") {
      if (editingItem) {
        setTeams(prev => prev.map(item => item.id === newItem.id ? newItem : item));
      } else {
        setTeams(prev => [...prev, newItem]);
      }
    } else if (activeTab === "sponsors") {
      if (editingItem) {
        setSponsors(prev => prev.map(item => item.id === newItem.id ? newItem : item));
      } else {
        setSponsors(prev => [...prev, newItem]);
      }
    }

    setIsModalOpen(false);
  };

  // --- Render Helpers ---
  const renderTable = () => {
    let columns: { key: string; label: string }[] = [];
    let data: any[] = [];

    if (activeTab === "achievements") {
      columns = [
        { key: "title", label: "Başlık" },
        { key: "date", label: "Tarih" },
        { key: "description", label: "Açıklama" },
      ];
      data = achievements;
    } else if (activeTab === "teams") {
      columns = [
        { key: "name", label: "İsim" },
        { key: "role", label: "Görev" },
        { key: "image", label: "Görsel URL" },
      ];
      data = teams;
    } else if (activeTab === "sponsors") {
      columns = [
        { key: "name", label: "Sponsor Adı" },
        { key: "type", label: "Sponsorluk Tipi" },
        { key: "logo", label: "Logo URL" },
      ];
      data = sponsors;
    }

    return (
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-slate-400">
          <thead className="bg-slate-950 text-slate-200 uppercase text-sm font-semibold">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-6 py-4">{col.label}</th>
              ))}
              <th className="px-6 py-4 text-right">İşlemler</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-slate-800/50 transition">
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-4">{item[col.key]}</td>
                ))}
                <td className="px-6 py-4 text-right space-x-2">
                  <button 
                    onClick={() => handleEdit(item)}
                    className="p-2 bg-blue-600/10 text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white transition"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="p-2 bg-red-600/10 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="px-6 py-8 text-center text-slate-500">
                  Henüz kayıt bulunmuyor.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  const renderModal = () => {
    if (!isModalOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg p-6 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">
              {editingItem ? "Düzenle" : "Yeni Ekle"}
            </h3>
            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            {activeTab === "achievements" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Başlık</label>
                  <input name="title" defaultValue={editingItem?.title} required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Tarih</label>
                  <input name="date" type="date" defaultValue={editingItem?.date} required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Açıklama</label>
                  <textarea name="description" defaultValue={editingItem?.description} rows={3} required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </>
            )}

            {activeTab === "teams" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">İsim Soyisim</label>
                  <input name="name" defaultValue={editingItem?.name} required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Görev / Rol</label>
                  <input name="role" defaultValue={editingItem?.role} required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Görsel URL</label>
                  <input name="image" defaultValue={editingItem?.image} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </>
            )}

            {activeTab === "sponsors" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Sponsor Adı</label>
                  <input name="name" defaultValue={editingItem?.name} required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Sponsorluk Tipi</label>
                  <select name="type" defaultValue={editingItem?.type || "Ana Sponsor"} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none">
                    <option value="Ana Sponsor">Ana Sponsor</option>
                    <option value="Altın">Altın</option>
                    <option value="Gümüş">Gümüş</option>
                    <option value="Bronz">Bronz</option>
                    <option value="Destekçi">Destekçi</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Logo URL</label>
                  <input name="logo" defaultValue={editingItem?.logo} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </>
            )}

            <div className="flex gap-3 mt-8">
              <button 
                type="button" 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition"
              >
                İptal
              </button>
              <button 
                type="submit" 
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <Save size={18} />
                Kaydet
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sticky top-24">
              <div className="flex items-center gap-3 mb-6 px-2">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <LayoutDashboard size={20} className="text-white" />
                </div>
                <h2 className="font-bold text-white">Yönetim Paneli</h2>
              </div>
              
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("achievements")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === "achievements" 
                      ? "bg-blue-600 text-white" 
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Trophy size={20} />
                  <span>Başarılar</span>
                </button>
                
                <button
                  onClick={() => setActiveTab("teams")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === "teams" 
                      ? "bg-blue-600 text-white" 
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Users size={20} />
                  <span>Ekipler</span>
                </button>
                
                <button
                  onClick={() => setActiveTab("sponsors")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === "sponsors" 
                      ? "bg-blue-600 text-white" 
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Handshake size={20} />
                  <span>Sponsorlar</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  {activeTab === "achievements" && "Başarılar"}
                  {activeTab === "teams" && "Ekipler & Üyeler"}
                  {activeTab === "sponsors" && "Sponsorlar"}
                </h1>
                <p className="text-slate-400">
                  {activeTab === "achievements" && "Kulüp başarılarını ve ödüllerini yönetin."}
                  {activeTab === "teams" && "Ekip üyelerini ve görevlerini düzenleyin."}
                  {activeTab === "sponsors" && "Sponsorluk anlaşmalarını ve logoları güncelleyin."}
                </p>
              </div>
              
              <button 
                onClick={handleAddNew}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-semibold transition flex items-center gap-2"
              >
                <Plus size={20} />
                Yeni Ekle
              </button>
            </div>

            {/* Search Bar (Visual Only) */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input 
                type="text" 
                placeholder="Ara..." 
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            {/* Content Table */}
            {renderTable()}
          </div>
        </div>
      </div>

      {/* Modal */}
      {renderModal()}
    </main>
  );
}