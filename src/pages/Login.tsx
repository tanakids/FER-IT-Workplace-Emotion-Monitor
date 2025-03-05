
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import CoreTaxLogo from '@/components/CoreTaxLogo';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaText, setCaptchaText] = useState('8g5138');
  const [showPassword, setShowPassword] = useState(false);
  const [language, setLanguage] = useState('id-ID');
  
  const refreshCaptcha = () => {
    // In a real app, this would request a new CAPTCHA from the server
    const randomChars = Math.random().toString(36).substring(2, 8);
    setCaptchaText(randomChars);
    setCaptcha('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (captcha !== captchaText) {
      toast.error('Captcha tidak sesuai');
      return;
    }
    
    // This is a mock login - in a real app, you would validate with a server
    if (username && password) {
      toast.success('Login berhasil');
      navigate('/dashboard');
    } else {
      toast.error('Silakan isi semua field');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white animate-fade-in">
      {/* Background building illustration */}
      <div className="fixed inset-0 bg-[url('/lovable-uploads/c58455cf-582f-4472-9da4-d2296c9f1d34.png')] bg-no-repeat bg-cover opacity-5 pointer-events-none" />
      
      <div className="flex-1 flex flex-col items-center justify-center p-8 z-10">
        <div className="w-full max-w-md">
          <div className="mb-10 flex justify-center">
            <CoreTaxLogo />
          </div>
          
          <div className="bg-white rounded-md shadow-md p-8 animate-fade-up">
            <h1 className="text-2xl font-bold text-coretax-blue mb-6">Login</h1>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="username">ID Pengguna</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="NIKIN/NPNITU identitas khusus untuk ILAP dan Lembaga KI"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border-gray-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Kata Sandi</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Masukkan Kata Sandi ID Pengguna Anda"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-gray-300 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="language">Pemilihan Bahasa</Label>
                  <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="id-ID">id-ID</option>
                    <option value="en-US">en-US</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <div className="bg-gray-200 p-2 rounded w-32 text-center font-mono text-lg">
                      {captchaText}
                    </div>
                    <button
                      type="button"
                      onClick={refreshCaptcha}
                      className="p-2 border border-gray-300 rounded"
                    >
                      <RefreshCcw size={20} />
                    </button>
                  </div>
                  <Input
                    id="captcha"
                    type="text"
                    placeholder="Masukkan Captcha"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                    className="border-gray-300"
                  />
                </div>
                
                <div>
                  <a href="#" className="text-coretax-blue hover:underline text-sm">
                    Lupa Kata Sandi?
                  </a>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-coretax-button hover:bg-coretax-yellow text-black"
                >
                  Login
                </Button>
                
                <div className="text-center space-y-2 pt-2">
                  <p className="text-sm">
                    Pengguna Baru? <a href="#" className="text-coretax-red hover:underline">Daftar disini</a>
                  </p>
                  <p className="text-sm">
                    <a href="#" className="text-coretax-red hover:underline">Aktivasi Akun Wajib Pajak</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="hidden md:block w-full md:w-2/5 bg-coretax-blue p-8 flex flex-col justify-center animate-fade-in">
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-white mb-2">Core</h2>
          <h2 className="text-5xl font-bold text-white mb-2">Tax</h2>
          <h2 className="text-5xl font-bold text-white mb-6">Administration</h2>
          <h2 className="text-5xl font-bold text-white mb-2">System <span className="inline-block w-32 h-2 bg-coretax-yellow"></span></h2>
          
          <div className="absolute bottom-4 right-4 text-white text-xs">
            Copyright © 2024 Direktorat Jenderal Pajak
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
