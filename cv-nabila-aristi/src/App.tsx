import React, { useState, useRef } from 'react';
import {
  Mail,
  GraduationCap,
  Users,
  Award,
  BookOpen,
  CheckCircle2,
  Copy,
  ChevronRight,
  Menu,
  X,
  ArrowUp,
  Download,
  Building2,
  Heart,
  Camera,
  RotateCcw,
  ExternalLink
} from 'lucide-react';
import defaultAvatarImg from './assets/images/nabila_aristi_pink_portrait_1791553756444.jpg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState<'all' | 'edu' | 'org'>('all');
  const [avatarSrc, setAvatarSrc] = useState<string>(defaultAvatarImg);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const emailAddress = 'nabilaaristi03@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setAvatarSrc(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = () => {
    setAvatarSrc(defaultAvatarImg);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Keahlian tanpa dasar pemrograman dan tanpa sistem teknologi komputer sesuai permintaan user
  const skillsData = [
    {
      category: 'edu',
      title: 'Teknologi & Media Pembelajaran',
      desc: 'Perancangan materi dan media interaktif digital untuk penyampaian informasi dan edukasi komputasi secara efektif.',
      tags: ['Media Pembelajaran Digital', 'Penyusunan Modul', 'Literasi Edukatif', 'Presentasi Visual'],
      icon: BookOpen
    },
    {
      category: 'edu',
      title: 'Komunikasi Edukatif & Pembelajaran',
      desc: 'Kemampuan menjelaskan materi teknis secara runtut, terstruktur, ramah, dan mudah dipahami oleh peserta didik.',
      tags: ['Instruksional', 'Penyuluhan Edukasi', 'Komunikasi Publik', 'Penyampaian Materi'],
      icon: Award
    },
    {
      category: 'org',
      title: 'Manajemen Organisasi (BEMP PTIK)',
      desc: 'Berpengalaman aktif dalam koordinasi program kerja kemahasiswaan, kepanitiaan acara kampus, dan administrasi organisasi.',
      tags: ['BEMP PTIK', 'Koordinasi Acara', 'Administrasi Tim', 'Perencanaan Kerja'],
      icon: Users
    },
    {
      category: 'org',
      title: 'Kerja Sama Tim & Kepribadian Baik',
      desc: 'Pribadi yang ramah, berkarakter baik, adaptif dalam dinamika kelompok, serta memegang integritas dan tanggung jawab tinggi.',
      tags: ['Kolaborasi Tim', 'Karakter Baik', 'Adaptabilitas', 'Problem Solving'],
      icon: Heart
    }
  ];

  const filteredSkills = activeSkillCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeSkillCategory);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-rose-50/20 text-slate-800 flex flex-col font-sans">
      {/* Top Bar Navigation (Strict 3-zone contract, Pink/Rose Theme) */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-3 text-slate-900 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-600 to-rose-500 text-white font-bold flex items-center justify-center text-lg shadow-sm shadow-pink-500/25 group-hover:from-pink-700 group-hover:to-rose-600 transition-all">
              NA
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight block text-slate-900 group-hover:text-pink-600 transition-colors">
                Nabila Aristi
              </span>
              <span className="text-xs text-rose-500 block -mt-1 font-medium">
                PTIK · Universitas Negeri Jakarta
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button
              onClick={() => scrollToSection('tentang')}
              className="hover:text-pink-600 transition-colors cursor-pointer"
            >
              Tentang Saya
            </button>
            <button
              onClick={() => scrollToSection('keahlian')}
              className="hover:text-pink-600 transition-colors cursor-pointer"
            >
              Keahlian
            </button>
            <button
              onClick={() => scrollToSection('riwayat')}
              className="hover:text-pink-600 transition-colors cursor-pointer"
            >
              Pendidikan & Pengalaman
            </button>
            <button
              onClick={() => scrollToSection('kontak')}
              className="hover:text-pink-600 transition-colors cursor-pointer"
            >
              Kontak
            </button>
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('kontak')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-700 active:scale-95 transition-all shadow-sm shadow-pink-600/25 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Hubungi Saya</span>
            </button>

            <button
              onClick={() => window.print()}
              title="Cetak CV / Simpan PDF"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors cursor-pointer border border-rose-200/60"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Cetak CV</span>
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-rose-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
            <button
              onClick={() => scrollToSection('tentang')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-pink-50 hover:text-pink-600 transition-colors"
            >
              Tentang Saya
            </button>
            <button
              onClick={() => scrollToSection('keahlian')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-pink-50 hover:text-pink-600 transition-colors"
            >
              Keahlian
            </button>
            <button
              onClick={() => scrollToSection('riwayat')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-pink-50 hover:text-pink-600 transition-colors"
            >
              Pendidikan & Pengalaman
            </button>
            <button
              onClick={() => scrollToSection('kontak')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-pink-50 hover:text-pink-600 transition-colors"
            >
              Kontak
            </button>
            <div className="pt-2 border-t border-rose-100 flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('kontak')}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors"
              >
                Hubungi Saya
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.print();
                }}
                className="w-full py-2 text-center text-xs font-medium text-rose-700 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors"
              >
                Cetak / Simpan PDF
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* SECTION 1: HERO */}
        <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-pink-50/40 to-rose-50/20 border-b border-rose-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Identity & Actions */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Clean unboxed metadata kicker */}
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-pink-700 bg-pink-50 border border-pink-200/80 px-3 py-1.5 rounded-md">
                  <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                  <span>CURRICULUM VITAE PRIBADI</span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Nabila Aristi
                  </h1>
                  <p className="text-lg sm:text-xl font-medium text-pink-600 leading-snug">
                    Pendidikan Teknik Informatika dan Komputer
                  </p>
                  <p className="text-base text-slate-600 font-normal">
                    Universitas Negeri Jakarta
                  </p>
                </div>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Pribadi yang berkarakter <strong className="text-slate-900 font-semibold">baik</strong>, ramah, dan berdedikasi tinggi dalam bidang teknologi pendidikan dan komputasi. Memiliki komitmen dalam mengembangkan diri serta aktif berkontribusi dalam organisasi kemahasiswaan.
                </p>

                {/* Primary Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => scrollToSection('kontak')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-pink-600 hover:bg-pink-700 rounded-lg shadow-md shadow-pink-600/25 active:scale-95 transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Hubungi Saya</span>
                  </button>

                  <button
                    onClick={() => scrollToSection('riwayat')}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-700 bg-white border border-rose-200 hover:bg-rose-50/60 hover:border-pink-300 rounded-lg transition-all cursor-pointer"
                  >
                    <span>Lihat Riwayat</span>
                    <ChevronRight className="w-4 h-4 text-pink-500" />
                  </button>
                </div>

                {/* Email Quick Action Card */}
                <div className="pt-3">
                  <div className="inline-flex items-center gap-3 p-2.5 sm:px-4 sm:py-2.5 rounded-lg bg-white border border-rose-100 shadow-xs max-w-full">
                    <Mail className="w-4 h-4 text-pink-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-mono text-slate-700 truncate select-all">
                      {emailAddress}
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="ml-auto inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-pink-700 bg-pink-50 hover:bg-pink-100 rounded transition-colors cursor-pointer shrink-0"
                      title="Salin email"
                    >
                      {copiedEmail ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean Portrait Visual */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
                <div className="relative w-full max-w-sm sm:max-w-md">
                  {/* Subtle Background Accent Frame in Pink */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-rose-400 rounded-2xl transform rotate-2 scale-98 opacity-25 filter blur-xs"></div>
                  
                  {/* Portrait Card */}
                  <div className="relative bg-white p-3 sm:p-4 rounded-2xl border border-rose-100 shadow-xl shadow-rose-200/40">
                    <div className="relative overflow-hidden rounded-xl aspect-square bg-rose-50">
                      <img
                        src={avatarSrc}
                        alt="Foto Profil Nabila Aristi"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Bottom label & photo selector trigger */}
                    <div className="pt-3 px-1 flex items-center justify-between text-xs text-slate-500">
                      <div>
                        <span className="font-semibold text-slate-800 block">Nabila Aristi</span>
                        <span className="text-rose-500 font-medium">PTIK · UNJ</span>
                      </div>

                      {/* Photo change buttons */}
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          title="Ganti foto dengan file dari perangkat"
                          className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-pink-700 bg-pink-50 hover:bg-pink-100 rounded-md transition-colors cursor-pointer border border-pink-200/60"
                        >
                          <Camera className="w-3 h-3" />
                          <span>Ganti Foto</span>
                        </button>
                        {avatarSrc !== defaultAvatarImg && (
                          <button
                            onClick={handleResetImage}
                            title="Kembalikan foto semula"
                            className="p-1 text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
                          >
                            <RotateCcw className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hidden File Input for Custom Upload */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: TENTANG SAYA */}
        <section id="tentang" className="py-20 bg-white border-b border-rose-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold tracking-wider text-pink-600 uppercase">
                Profil Personal
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1">
                Tentang Saya
              </h2>
              <div className="h-1 w-12 bg-pink-600 rounded-full mt-3"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Narasi Ringkas */}
              <div className="md:col-span-7 space-y-5 text-slate-600 leading-relaxed text-base">
                <p className="text-lg text-slate-800 font-medium leading-relaxed">
                  Halo! Saya <span className="text-pink-600 font-semibold">Nabila Aristi</span>, mahasiswi program studi Pendidikan Teknik Informatika dan Komputer di Universitas Negeri Jakarta.
                </p>
                <p>
                  Saya merupakan pribadi yang <strong className="text-slate-900">baik</strong>, bertanggung jawab, dan memiliki dedikasi positif dalam mendukung kegiatan pendidikan berbasis teknologi dan komputasi.
                </p>
                <p>
                  Dalam kehidupan perkuliahan, saya aktif memperluas pengalaman dan kemampuan kolaborasi melalui organisasi kemahasiswaan <strong className="text-slate-900">BEMP PTIK</strong> (Badan Eksekutif Mahasiswa Prodi Pendidikan Teknik Informatika dan Komputer). Keterlibatan ini melatih saya dalam manajemen program kerja, komunikasi interpersonal, dan kerja sama tim secara solid.
                </p>
              </div>

              {/* Ringkasan Data Kunci (Structured Grid) */}
              <div className="md:col-span-5 space-y-4">
                <div className="p-5 rounded-xl bg-rose-50/30 border border-rose-100 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600" />
                    <span>Informasi Ringkas</span>
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div className="pb-3 border-b border-rose-100/80">
                      <span className="text-xs text-slate-400 block font-medium">NAMA LENGKAP</span>
                      <span className="font-semibold text-slate-900">Nabila Aristi</span>
                    </div>

                    <div className="pb-3 border-b border-rose-100/80">
                      <span className="text-xs text-slate-400 block font-medium">PROGRAM STUDI</span>
                      <span className="font-medium text-slate-800">Pendidikan Teknik Informatika dan Komputer</span>
                    </div>

                    <div className="pb-3 border-b border-rose-100/80">
                      <span className="text-xs text-slate-400 block font-medium">PERGURUAN TINGGI</span>
                      <span className="font-medium text-slate-800">Universitas Negeri Jakarta (UNJ)</span>
                    </div>

                    <div className="pb-3 border-b border-rose-100/80">
                      <span className="text-xs text-slate-400 block font-medium">DESKRIPSI KARAKTER</span>
                      <span className="font-medium text-slate-800">Baik, berintegritas, & kooperatif</span>
                    </div>

                    <div>
                      <span className="text-xs text-slate-400 block font-medium">PENGALAMAN ORGANISASI</span>
                      <span className="font-medium text-slate-800">BEMP PTIK UNJ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: KEAHLIAN (KARTU & BADGE PINK) */}
        <section id="keahlian" className="py-20 bg-rose-50/20 border-b border-rose-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-xs font-bold tracking-wider text-pink-600 uppercase">
                  Kompetensi & Kemampuan
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1">
                  Keahlian
                </h2>
                <div className="h-1 w-12 bg-pink-600 rounded-full mt-3"></div>
              </div>

              {/* Segmented Filter Control */}
              <div className="inline-flex p-1 bg-white border border-rose-100 rounded-lg self-start md:self-auto shadow-xs">
                <button
                  onClick={() => setActiveSkillCategory('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    activeSkillCategory === 'all'
                      ? 'bg-pink-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-pink-600'
                  }`}
                >
                  Semua
                </button>
                <button
                  onClick={() => setActiveSkillCategory('edu')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    activeSkillCategory === 'edu'
                      ? 'bg-pink-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-pink-600'
                  }`}
                >
                  Pendidikan Komputer
                </button>
                <button
                  onClick={() => setActiveSkillCategory('org')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    activeSkillCategory === 'org'
                      ? 'bg-pink-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-pink-600'
                  }`}
                >
                  Organisasi & Interpersonal
                </button>
              </div>
            </div>

            {/* Grid Kartu Keahlian */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-white border border-rose-100 hover:border-pink-300 hover:shadow-md hover:shadow-pink-100/50 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-100">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {skill.title}
                        </h3>
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                          {skill.desc}
                        </p>
                      </div>
                    </div>

                    {/* Badge Container */}
                    <div className="pt-5 mt-4 border-t border-rose-50 flex flex-wrap gap-1.5">
                      {skill.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2.5 py-1 text-xs font-medium text-pink-700 bg-pink-50/70 border border-pink-100 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: PENDIDIKAN DAN PENGALAMAN (TIMELINE) */}
        <section id="riwayat" className="py-20 bg-white border-b border-rose-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold tracking-wider text-pink-600 uppercase">
                Jejak Perjalanan
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1">
                Pendidikan dan Pengalaman
              </h2>
              <div className="h-1 w-12 bg-pink-600 rounded-full mt-3"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Kolom 1: Pendidikan */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-rose-100">
                  <div className="p-2 rounded-lg bg-pink-50 text-pink-600">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Pendidikan</h3>
                </div>

                <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-pink-200">
                  
                  {/* Timeline Item: PTIK UNJ */}
                  <div className="relative">
                    {/* Timeline Node Point */}
                    <div className="absolute -left-6 sm:-left-8 top-1 w-4 h-4 rounded-full bg-pink-600 ring-4 ring-pink-100"></div>

                    <div className="p-5 rounded-xl bg-rose-50/25 border border-rose-100 hover:border-pink-200 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-pink-700 bg-pink-100/70 px-2.5 py-0.5 rounded">
                          Perguruan Tinggi Negeri
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          Mahasiswi Aktif
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 mt-2">
                        Universitas Negeri Jakarta
                      </h4>
                      <p className="text-sm font-semibold text-pink-600">
                        Pendidikan Teknik Informatika dan Komputer (PTIK)
                      </p>

                      <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                        Menempuh pendidikan tinggi dengan fokus keilmuan pada integrasi ilmu komputer, teknologi informasi, dan metode pembelajaran teknologi di Universitas Negeri Jakarta.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Kolom 2: Pengalaman */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-rose-100">
                  <div className="p-2 rounded-lg bg-pink-50 text-pink-600">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Pengalaman</h3>
                </div>

                <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-pink-200">
                  
                  {/* Timeline Item: BEMP PTIK */}
                  <div className="relative">
                    {/* Timeline Node Point */}
                    <div className="absolute -left-6 sm:-left-8 top-1 w-4 h-4 rounded-full bg-pink-600 ring-4 ring-pink-100"></div>

                    <div className="p-5 rounded-xl bg-rose-50/25 border border-rose-100 hover:border-pink-200 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-pink-700 bg-pink-100/70 px-2.5 py-0.5 rounded">
                          Organisasi Kemahasiswaan
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          Kepengurusan Mahasiswa
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 mt-2">
                        BEMP PTIK
                      </h4>
                      <p className="text-sm font-semibold text-pink-600">
                        Badan Eksekutif Mahasiswa Prodi Pendidikan Teknik Informatika dan Komputer
                      </p>

                      <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                        Mengikuti dan berpartisipasi aktif dalam organisasi BEMP PTIK Universitas Negeri Jakarta. Berperan dalam kepengurusan program kerja, koordinasi mahasiswa, dan kegiatan kepanitiaan bersama tim.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 5: KONTAK (Informasi Kontak & Tombol Kirim Email Langsung Saja) */}
        <section id="kontak" className="py-20 bg-rose-50/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-wider text-pink-600 uppercase">
                Hubungi & Terhubung
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1">
                Kontak
              </h2>
              <div className="h-1 w-12 bg-pink-600 rounded-full mx-auto mt-3"></div>
              <p className="text-base text-slate-600 mt-4 leading-relaxed">
                Silakan hubungi saya untuk keperluan akademik, kolaborasi organisasi, atau diskusi lebih lanjut melalui email resmi di bawah ini.
              </p>
            </div>

            {/* Focused & Elegant Contact Information Box */}
            <div className="bg-white rounded-2xl border border-rose-100 p-8 sm:p-10 shadow-lg shadow-rose-100/40 max-w-2xl mx-auto">
              <div className="space-y-6">
                
                {/* Email Item */}
                <div className="flex items-start sm:items-center gap-4 p-4 rounded-xl bg-rose-50/30 border border-rose-100/80">
                  <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 border border-pink-100">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Alamat Email
                    </span>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-base sm:text-lg font-semibold text-pink-600 hover:text-pink-700 break-all transition-colors inline-block"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                {/* Campus & Location Item */}
                <div className="flex items-start sm:items-center gap-4 p-4 rounded-xl bg-slate-50/60 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-white text-slate-600 flex items-center justify-center shrink-0 border border-slate-200">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Kampus / Domisili
                    </span>
                    <span className="text-sm sm:text-base font-medium text-slate-800 block">
                      Universitas Negeri Jakarta, Rawamangun, Jakarta Timur
                    </span>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-pink-600 hover:bg-pink-700 rounded-xl shadow-md shadow-pink-600/25 active:scale-98 transition-all cursor-pointer text-center"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Kirim Email Langsung</span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 text-sm font-medium text-slate-700 bg-rose-50/70 hover:bg-rose-100/80 rounded-xl active:scale-98 transition-all cursor-pointer border border-rose-200/60"
                  >
                    {copiedEmail ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-pink-500" />
                        <span>Salin Email</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </div>

          </div>
        </section>
      </main>

      {/* SECTION 6: FOOTER (Berisi tulisan "app.nabila.biz.id") */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-600 text-white font-bold flex items-center justify-center text-sm shadow-xs shadow-pink-600/30">
                  NA
                </div>
                <span className="text-lg font-bold text-white">Nabila Aristi</span>
              </div>
              <p className="text-xs text-rose-300/80 mt-1">
                Pendidikan Teknik Informatika dan Komputer · Universitas Negeri Jakarta
              </p>
            </div>

            {/* Tulisan khusus sesuai permintaan: app.nabila.biz.id */}
            <div className="text-center md:text-right">
              <span className="text-xs text-slate-400 block uppercase tracking-wider font-semibold">
                Domain CV Pribadi
              </span>
              <div className="mt-1 flex items-center gap-2 justify-center md:justify-end">
                <code className="text-sm sm:text-base font-mono font-semibold text-pink-400 bg-slate-800/80 px-3.5 py-1.5 rounded-md border border-slate-700 select-all">
                  app.nabila.biz.id
                </code>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Nabila Aristi. Seluruh hak cipta dilindungi.
            </p>

            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection('hero')}
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-pink-400 transition-colors cursor-pointer"
              >
                <span>Kembali ke Atas</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
