
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CoreTaxLogo from "@/components/CoreTaxLogo";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 p-6 animate-fade-in">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-12 animate-fade-up">
          <CoreTaxLogo className="mx-auto mb-8" />
          <h1 className="text-4xl font-bold text-coretax-blue mb-4">Sistem Administrasi Pajak</h1>
          <p className="text-lg text-gray-600 mb-8">Sistem manajemen pajak yang efisien dan mudah digunakan</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              className="bg-coretax-button hover:bg-coretax-yellow text-black px-8 py-6 rounded-md text-lg transition-all"
            >
              <Link to="/login">Masuk Sistem</Link>
            </Button>
            
            <Button 
              variant="outline"
              className="border-coretax-blue text-coretax-blue hover:bg-coretax-blue hover:text-white px-8 py-6 rounded-md text-lg transition-all"
            >
              Pelajari Selengkapnya
            </Button>
          </div>
        </div>
        
        <div className="mt-16 text-center text-sm text-gray-500">
          Copyright © 2024 Direktorat Jenderal Pajak
        </div>
      </div>
    </div>
  );
};

export default Index;
