
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CoreTaxLogo from '@/components/CoreTaxLogo';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <CoreTaxLogo />
          <Button asChild variant="ghost" className="text-coretax-blue">
            <Link to="/login">Keluar</Link>
          </Button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white shadow rounded-lg p-6 animate-fade-up">
          <h1 className="text-2xl font-bold text-coretax-blue mb-6">Dashboard</h1>
          <p className="text-gray-600 mb-4">Selamat datang di CoreTax Dashboard.</p>
          <p className="text-gray-600">Halaman ini adalah contoh halaman setelah login berhasil.</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
