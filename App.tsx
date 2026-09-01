import React, { useState } from 'react';
import { Building2, Calendar, Phone, Shield, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building2 className="w-8 h-8 text-emerald-400" />
            <span className="text-xl font-bold tracking-wider text-white">XASIL</span>
          </div>
          <nav className="flex space-x-6 text-sm font-medium">
            <button onClick={() => setActiveTab('home')} className={hover:text-emerald-400 transition ${activeTab === 'home' ? 'text-emerald-400' : 'text-slate-300'}}>Bogga Hore</button>
            <button onClick={() => setActiveTab('services')} className={hover:text-emerald-400 transition ${activeTab === 'services' ? 'text-emerald-400' : 'text-slate-300'}}>Adeegyada</button>
            <button onClick={() => setActiveTab('contact')} className={hover:text-emerald-400 transition ${activeTab === 'contact' ? 'text-emerald-400' : 'text-slate-300'}}>Nala Soo Xiriir</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full text-emerald-400 text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Nidaamka Casriga ah ee Xasil</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Maamul oo Hagaaji Adeegyadaada <span className="text-emerald-400">Si Fudud</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Halkan waxaad ka heli kartaa xalal dhammaystiran oo casri ah oo ku saabsan maamulka iyo adeegyada goobtaada.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button onClick={() => setActiveTab('services')} className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-6 py-3 rounded-xl transition shadow-lg shadow-emerald-500/20">
              Eeg Adeegyada
            </button>
            <button onClick={() => setActiveTab('contact')} className="border border-slate-700 hover:bg-slate-800 font-semibold px-6 py-3 rounded-xl transition text-white">
              Nala Soo Xiriir
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl">
            <Shield className="w-10 h-10 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Amaan & Kalsooni</h3>
            <p className="text-slate-400 text-sm">Xogtaada iyo nidaamkaagu waxay ku jiraan ilaalo buuxda oo sugan.</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl">
            <Clock className="w-10 h-10 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Degdeg & Fudud</h3>
            <p className="text-slate-400 text-sm">Adeeg si xawli ah ku shaqeynaya oo waqtigaaga badbaadinaya.</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Tayada Sare</h3>
            <p className="text-slate-400 text-sm">Naqshad casri ah oo adeegsaneysa teknoolojiyada ugu dambeysa.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-20 py-8 text-center text-slate-500 text-sm">
        <p>&copy; 2026 Xasil. Xuquuqda oo dhan waa la dhowray.</p>
      </footer>
    </div>
  );
}
