
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PortTaxLogo from '@/components/PortTaxLogo';
import { Calendar, Database, FileText, FolderOpen, Info, Layout, LayoutDashboard, List, ListCheck, User, UserRound, Users } from 'lucide-react';

const Dashboard = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="bg-porttax-blue text-white shadow-sm">
        <div className="px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <PortTaxLogo className="text-white" />
            <div className="h-6 border-r border-gray-400"></div>
            <span className="text-sm">Versi: 1.1.2-build-1943</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-red-600 px-2 py-1 rounded-md text-xs flex items-center">
              BETA
            </div>
            <div className="flex items-center gap-2">
              <span>06611970795420000 MATARAM SURYA VISI SINEMA</span>
            </div>
            <div className="h-6 border-r border-gray-400"></div>
            <div className="text-sm">
              Login terakhir: {formattedDate}
            </div>
          </div>
        </div>
        
        {/* Second Row Navigation */}
        <div className="bg-porttax-blue border-t border-gray-700 px-4 py-1">
          <nav className="flex space-x-1">
            <NavItem href="#" active>Portal Saya</NavItem>
            <NavItem href="#">e-Faktur</NavItem>
            <NavItem href="#">eBupot</NavItem>
            <NavItem href="#">Surat Pemberitahuan (SPT)</NavItem>
            <NavItem href="#">Bantuan</NavItem>
            <NavItem href="#">Pembayaran</NavItem>
            <NavItem href="#">Buku Besar</NavItem>
            <NavItem href="#">Layanan Wajib Pajak</NavItem>
            <NavItem href="#">Manajemen Akses</NavItem>
          </nav>
        </div>
      </header>
      
      {/* Main Content Area with Sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r">
          <div className="bg-porttax-blue text-white p-4">
            <div className="font-bold">06611970795420000</div>
            <div className="text-sm">MATARAM SURYA VISI SINEMA</div>
          </div>
          
          <nav className="p-2">
            <SidebarItem icon={<UserRound size={18} />} label="Wakil/Kuasa Saya" />
            <SidebarItem icon={<User size={18} />} label="Wajib Pajak yang Diwakili" active />
            <SidebarItem icon={<Info size={18} />} label="Informasi Detail" />
            <SidebarItem icon={<FileText size={18} />} label="Ikhtisar Profil Wajib Pajak" />
            <SidebarItem icon={<Layout size={18} />} label="Informasi Umum" />
            <SidebarItem icon={<Layout size={18} />} label="Alamat" />
            <SidebarItem icon={<Layout size={18} />} label="Detail Kontak" />
            <SidebarItem icon={<Database size={18} />} label="Pihak Terkait" />
            <SidebarItem icon={<Database size={18} />} label="Objek Pajak Bumi dan Bangunan (PBB)" />
            <SidebarItem icon={<Layout size={18} />} label="Klasifikasi Lapangan Usaha (KLU)" />
            <SidebarItem icon={<Layout size={18} />} label="Detail Bank" />
            <SidebarItem icon={<Calendar size={18} />} label="Tempat Kegiatan Usaha/Sub Unit" />
            <SidebarItem icon={<FileText size={18} />} label="Nomor Identifikasi Eksternal" />
            <SidebarItem icon={<List size={18} />} label="Jenis Pajak" />
            <SidebarItem icon={<Users size={18} />} label="Wakil/Kuasa Saya" />
            <SidebarItem icon={<User size={18} />} label="Wajib Pajak yang Diwakili" />
            <SidebarItem icon={<ListCheck size={18} />} label="Verifikasi Dua Langkah" />
            <SidebarItem icon={<FolderOpen size={18} />} label="Permohonan Tertunda" />
            <SidebarItem icon={<FolderOpen size={18} />} label="Semua Permohonan" />
          </nav>
        </aside>
        
        {/* Main Content */}
        <div className="flex-1 p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold text-porttax-blue">Ikhtisar Profil Wajib Pajak</h1>
            <Button className="bg-porttax-blue hover:bg-blue-800">
              <FileText className="mr-2" size={16} />
              Unduh Ikhtisar Profil
            </Button>
          </div>
          
          {/* Tabs Navigation */}
          <div className="flex border-b mb-4">
            <TabItem label="Profil" active />
            <TabItem label="Daftar Kode Billing Belum Dibayar" />
            <TabItem label="Saldo Saat Ini" />
            <TabItem label="SPT Belum Disampaikan" />
            <TabItem label="Jenis Pajak Terdaftar" />
            <TabItem label="Kasus Aktif" />
            <TabItem label="Fasilitas Aktif" />
          </div>
          
          {/* Profile Information */}
          <div className="bg-white shadow rounded-lg p-6 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <ProfileItem label="Nama" value="MATARAM SURYA VISI SINEMA" />
              <ProfileItem label="Nomor Pokok Wajib Pajak" value="06611970795420000" />
              <ProfileItem label="Kegiatan Utama" value="AKTIVITAS PRODUKSI FILM, VIDEO DAN PROGRAM TELEVISI OLEH SWASTA" />
              <ProfileItem label="Jenis Wajib Pajak" value="Badan" />
              <ProfileItem label="Bentuk Badan Hukum" value="Perseroan Terbatas (PT)" />
              <ProfileItem label="Status NPWP" value={<span className="bg-green-100 text-green-800 px-2 py-1 rounded">Aktif</span>} />
              <ProfileItem label="Tanggal Terdaftar" value="20 Januari 2014" />
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Alamat Utama</h3>
              <p className="text-gray-700 mb-6">
                GEDUNG II LT. 2 KAMPUS STMIK AMIKOM, RINGROAD UTARA, DERO, CONDONGCATUR RT 000 RW 000, CONDONGCATUR,<br/>
                DEPOK, KAB. SLEMAN,<br/>
                DAERAH ISTIMEWA YOGYAKARTA, Indonesia.<br/>
                55598,<br/>
                3404072003
              </p>
              
              <h3 className="font-semibold text-lg mb-2">Kontak Utama</h3>
              <ProfileItem label="Nomor Handphone" value="081327444418" />
              <ProfileItem label="Email" value="msv.msvpictures@gmail.com" />
              
              <h3 className="font-semibold text-lg mb-2 mt-4">Klasifikasi Lapangan Usaha Utama</h3>
              <ProfileItem label="Kode Klasifikasi Lapangan Usaha" value="59112" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const NavItem = ({ href, children, active = false }) => (
  <a 
    href={href} 
    className={`px-3 py-2 text-sm hover:bg-blue-700 rounded transition-colors ${
      active ? 'bg-blue-700' : ''
    }`}
  >
    {children}
  </a>
);

const SidebarItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-2 px-3 py-2 text-sm rounded hover:bg-gray-100 cursor-pointer ${
    active ? 'bg-gray-100 font-medium' : ''
  }`}>
    {icon}
    <span>{label}</span>
  </div>
);

const TabItem = ({ label, active = false }) => (
  <div className={`px-4 py-2 cursor-pointer border-b-2 text-sm ${
    active 
      ? 'border-porttax-blue text-porttax-blue font-medium' 
      : 'border-transparent text-gray-600 hover:text-porttax-blue'
  }`}>
    {label}
  </div>
);

const ProfileItem = ({ label, value }) => (
  <div className="flex">
    <div className="w-48 text-gray-600">{label}</div>
    <div className="flex-1 font-medium">: {value}</div>
  </div>
);

export default Dashboard;
