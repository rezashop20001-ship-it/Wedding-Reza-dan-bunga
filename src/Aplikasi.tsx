import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Clock, 
  Music, 
  Music2, 
  Instagram, 
  ChevronDown, 
  ExternalLink 
} from 'lucide-react';

/**
 * ============================================================
 * --- BAGIAN EDIT DATA (EDIT DI SINI) ---
 * Jika Anda mengupload foto ke GitHub, ganti URL di bawah 
 * dengan nama file Anda, misal: "./pengantin-cowo.jpg"
 * ============================================================
 */
const DATA_UNDANGAN = {
  // --- MEMPELAI PRIA ---
  nama_panggilan_pria: "Aliandra",
  nama_lengkap_pria: "Aliandra Reliandi, S.T.",
  orang_tua_pria: "Putra Kedua dari Bapak Doddy Garnadi & Ibu Demayanti Shakuntala",
  foto_pria: "https://images.unsplash.com/photo-1550005814-19069d316e13?q=80&w=800", // Ganti ke "./pengantin-cowo.jpg"
  instagram_pria: "@aliandra",

  // --- MEMPELAI WANITA ---
  nama_panggilan_wanita: "Adinda",
  nama_lengkap_wanita: "Adinda Farsyadhia, S.Sn.",
  orang_tua_wanita: "Putri Kedua dari Bapak Indra Koesoemo & Ibu Mita Damayanti",
  foto_wanita: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800", // Ganti ke "./pengantin-cewi.jpg"
  instagram_wanita: "@adinda",

  // --- WAKTU & LOKASI ---
  tanggal_acara_iso: "2024-09-15T19:00:00", 
  tanggal_teks: "Minggu, 15 September 2024",
  waktu_resepsi: "19:00 - 21:00 WIB",
  nama_lokasi: "Ballroom 3, Sheraton Grand Jakarta",
  alamat_lokasi: "Gandaria City Hotel, Jl. Sultan Iskandar Muda, Jakarta Selatan",
  link_maps: "https://maps.app.goo.gl/v123",

  // --- KUMPULAN FOTO (GALERI) ---
  foto_halaman_depan: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80",
  foto_galeri_1: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80",
  foto_galeri_2: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80",
  foto_galeri_3: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80",

  // --- KATA-KATA MUTIARA ---
  teks_quote: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.",
  sumber_quote: "QS. Ar-Rum: 21"
};

/**
 * ============================================================
 * --- KODINGAN ANIMASI (JANGAN DIUBAH KECUALI ANDA AHLI) ---
 * ============================================================
 */

// Komponen Bunga Timbul (Floating Flowers)
const FloatingFlower = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute pointer-events-none opacity-40 z-10 ${className}`}
    initial={{ scale: 0, opacity: 0, rotate: -45 }}
    whileInView={{ scale: 1, opacity: 0.5, rotate: 0 }}
    transition={{ duration: 2, delay, ease: "easeOut" }}
    viewport={{ once: false }}
  >
    <svg width="80" height="80" viewBox="0 0 40 40" fill="none">
      <path d="M20 0C21.1 5.5 25.5 9.9 31 11C25.5 12.1 21.1 16.5 20 22C18.9 16.5 14.5 12.1 9 11C14.5 9.9 18.9 5.5 20 0Z" fill="#C5A58E"/>
    </svg>
  </motion.div>
);

export default function Aplikasi() {
  const [isOpened, setIsOpened] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(DATA_UNDANGAN.tanggal_acara_iso).getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          d: Math.floor(distance / (1000 * 60 * 60 * 24)),
          h: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          m: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          s: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfaf6] selection:bg-[#d2b48c] overflow-x-hidden font-sans">
      
      {/* 1. HALAMAN COVER (Klik untuk Masuk) */}
      <AnimatePresence>
        {!isOpened && (
          <motion.div 
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fdfaf6] p-10 text-center"
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <FloatingFlower className="top-10 left-10 scale-150" delay={0.2} />
            <FloatingFlower className="bottom-20 right-10 scale-[2]" delay={0.5} />
            
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <p className="font-serif italic text-gray-400 tracking-[6px] text-xs mb-8 uppercase">The Wedding Invitation</p>
              <h1 className="font-serif text-6xl text-[#8d6e63] mb-12 leading-tight">
                {DATA_UNDANGAN.nama_panggilan_pria} & {DATA_UNDANGAN.nama_panggilan_wanita}
              </h1>
              <div className="mb-14">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Kepada Yth.</p>
                <p className="font-serif text-3xl font-bold text-[#8d6e63]">Tamu Undangan</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpened(true)}
                className="flex items-center gap-3 bg-[#8d6e63] text-white px-12 py-4 rounded-full font-serif shadow-2xl hover:bg-[#7b5e55] transition-all"
              >
                <Music2 size={20} /> BUKA UNDANGAN
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. KONTEN UTAMA (Muncul Setelah Klik) */}
      {isOpened && (
        <div className="max-w-[480px] mx-auto bg-white shadow-2xl relative min-h-screen">
          
          {/* HEADER (Teks Keluar dari Kanan/Kiri) */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <motion.img 
              initial={{ scale: 1.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 3 }}
              src={DATA_UNDANGAN.foto_halaman_depan}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="relative z-10 text-center text-white px-6">
              <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, delay: 0.5 }} className="font-serif italic text-xl mb-4">The Wedding of</motion.p>
              <motion.h2 initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: "backOut" }} className="font-serif text-6xl mb-8 drop-shadow-xl">
                {DATA_UNDANGAN.nama_panggilan_pria} & {DATA_UNDANGAN.nama_panggilan_wanita}
              </motion.h2>
              <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, delay: 1 }} className="tracking-[5px] uppercase text-[10px] font-bold">{DATA_UNDANGAN.tanggal_teks}</motion.p>
            </div>
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50 text-white"><ChevronDown size={32} /></motion.div>
          </section>

          {/* QUOTE (Bunga Timbul) */}
          <section className="py-24 px-10 text-center bg-[#fdfaf6] relative">
            <FloatingFlower className="-top-5 -left-5 scale-125" />
            <FloatingFlower className="-bottom-5 -right-5 scale-125 rotate-180" />
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
              <Heart className="mx-auto text-[#d2b48c] mb-8" fill="#d2b48c" size={32} />
              <p className="font-serif italic text-gray-500 leading-relaxed text-xl px-4">"{DATA_UNDANGAN.teks_quote}"</p>
              <p className="font-serif font-bold mt-10 text-[#8d6e63] text-lg">— {DATA_UNDANGAN.sumber_quote} —</p>
            </motion.div>
          </section>

          {/* MEMPELAI (Foto Timbul & Teks Bergeser) */}
          <section className="py-24 px-8 bg-white text-center pb-0">
             {/* Pria */}
             <div className="mb-24">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.4, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1.2, type: "spring" }}
                  className="w-full aspect-[4/5] rounded-[100px_100px_40px_40px] overflow-hidden shadow-2xl mb-10 border-[15px] border-[#fdfaf6]"
                >
                  <img src={DATA_UNDANGAN.foto_pria} className="w-full h-full object-cover" />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
                  <h4 className="font-serif text-3xl text-[#8d6e63] mb-2">{DATA_UNDANGAN.nama_lengkap_pria}</h4>
                  <p className="text-xs text-gray-400 italic px-10 leading-relaxed">{DATA_UNDANGAN.orang_tua_pria}</p>
                </motion.div>
             </div>

             <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="font-serif text-8xl text-pink-50 my-[-60px] italic">&</motion.div>

             {/* Wanita */}
             <div className="mt-20 mb-24">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.4, rotate: 5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1.2, type: "spring" }}
                  className="w-full aspect-[4/5] rounded-[100px_100px_40px_40px] overflow-hidden shadow-2xl mb-10 border-[15px] border-[#fdfaf6]"
                >
                  <img src={DATA_UNDANGAN.foto_wanita} className="w-full h-full object-cover" />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
                  <h4 className="font-serif text-3xl text-[#8d6e63] mb-2">{DATA_UNDANGAN.nama_lengkap_wanita}</h4>
                  <p className="text-xs text-gray-400 italic px-10 leading-relaxed">{DATA_UNDANGAN.orang_tua_wanita}</p>
                </motion.div>
             </div>
          </section>

          {/* ACARA & COUNTDOWN */}
          <section className="py-24 px-8 bg-[#f5f1ed] text-center">
            <motion.div initial={{ y: 80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1.2 }} className="bg-white p-12 rounded-[60px] shadow-2xl relative z-10">
              <h3 className="font-serif text-3xl text-[#8d6e63] mb-12">Rangkaian Acara</h3>
              <div className="space-y-12 mb-14">
                <div className="flex flex-col items-center gap-2">
                  <Calendar className="text-[#d2b48c] mb-2" size={32} />
                  <p className="font-serif text-xl font-bold text-gray-700">{DATA_UNDANGAN.tanggal_teks}</p>
                  <p className="text-sm text-gray-400 tracking-widest">{DATA_UNDANGAN.waktu_resepsi}</p>
                </div>
                <div className="w-12 h-[1px] bg-gray-100 mx-auto" />
                <div className="flex flex-col items-center gap-3">
                  <MapPin className="text-[#d2b48c] mb-2" size={32} />
                  <p className="font-serif text-xl font-bold text-[#8d6e63] px-4">{DATA_UNDANGAN.nama_lokasi}</p>
                  <p className="text-xs text-gray-400 italic px-6">{DATA_UNDANGAN.alamat_lokasi}</p>
                  <a href={DATA_UNDANGAN.link_maps} target="_blank" className="mt-8 bg-[#8d6e63] text-white px-10 py-3 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">LIHAT LOKASI <ExternalLink size={14} /></a>
                </div>
              </div>

              {/* Countdown */}
              <div className="grid grid-cols-4 gap-2">
                {[
                  {l:'HARI',v:timeLeft.d}, {l:'JAM',v:timeLeft.h}, {l:'MENIT',v:timeLeft.m}, {l:'DETIK',v:timeLeft.s}
                ].map((t,i)=>(
                  <motion.div key={i} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 + (i*0.1) }} className="bg-[#fdfaf6] py-4 rounded-2xl border border-[#eee]">
                    <p className="text-xl font-serif font-black text-[#8d6e63]">{t.v}</p>
                    <p className="text-[7px] font-bold text-[#d2b48c] tracking-tighter">{t.l}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* GALERI (Foto Keluar dari Bawah) */}
          <section className="py-24 px-6 bg-white overflow-hidden text-center">
            <h3 className="font-serif text-3xl text-[#8d6e63] mb-14 underline decoration-[#d2b48c] underline-offset-8">Momen Bahagia</h3>
            <div className="grid grid-cols-2 gap-3">
              {[DATA_UNDANGAN.foto_galeri_1, DATA_UNDANGAN.foto_galeri_2, DATA_UNDANGAN.foto_galeri_3, DATA_UNDANGAN.foto_halaman_depan].map((url, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className={`relative overflow-hidden rounded-3xl shadow-xl ${i % 3 === 0 ? 'col-span-2 h-72' : 'h-52'}`}
                >
                  <img src={url} className="w-full h-full object-cover hover:scale-110 transition-transform duration-[3s]" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* PENUTUP (Teks Halus) */}
          <footer className="py-24 px-12 pt-32 text-center bg-[#fdfaf6] relative">
             <Heart className="mx-auto text-red-100 mb-12" fill="#fee2e2" size={48} />
             <p className="font-serif italic text-gray-500 leading-relaxed text-lg mb-20">"Tiada kata yang dapat kami ungkapkan selain terima kasih atas kehadiran dan doa restu yang Bapak/Ibu berikan."</p>
             <h4 className="font-serif text-4xl text-[#8d6e63] tracking-[6px] uppercase">{DATA_UNDANGAN.nama_panggilan_pria} & {DATA_UNDANGAN.nama_panggilan_wanita}</h4>
             <p className="text-[9px] text-gray-300 mt-32 tracking-[5px] font-bold">DIGITAL INVITATION BY GITHUB</p>
          </footer>

          {/* Tombol Musik Terapung */}
          <div className="fixed bottom-10 right-8 z-40">
            <motion.button animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="p-5 bg-white shadow-2xl rounded-full text-[#8d6e63] border-4 border-[#fdfaf6]"><Music size={24} /></motion.button>
          </div>

        </div>
      )}
    </div>
  );
          }
