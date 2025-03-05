
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PortTaxLogo from "@/components/PortTaxLogo";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 p-6 animate-fade-in">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-12 animate-fade-up">
          <PortTaxLogo className="mx-auto mb-8" />
          <h1 className="text-4xl font-bold text-porttax-blue mb-4">Sistem Administrasi Pajak</h1>
          <p className="text-lg text-gray-600 mb-8">Sistem manajemen pajak yang efisien dan mudah digunakan</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              className="bg-porttax-button hover:bg-porttax-yellow text-black px-8 py-6 rounded-md text-lg transition-all"
            >
              <Link to="/login">Masuk Sistem</Link>
            </Button>
            
            <Button 
              variant="outline"
              className="border-porttax-blue text-porttax-blue hover:bg-porttax-blue hover:text-white px-8 py-6 rounded-md text-lg transition-all"
            >
              Pelajari Selengkapnya
            </Button>
          </div>
        </div>
        
        <div className="mt-16 text-center text-sm text-gray-500">
          Copyright © Tax Hits
        </div>
      </div>
    </div>
  );
};

export default Index;
