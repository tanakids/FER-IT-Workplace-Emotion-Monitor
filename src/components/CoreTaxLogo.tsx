
import React from 'react';

const CoreTaxLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-4xl font-bold">
        <span className="text-coretax-blue">CORE</span>
        <span className="text-coretax-yellow">TAX</span>
      </span>
    </div>
  );
};

export default CoreTaxLogo;
