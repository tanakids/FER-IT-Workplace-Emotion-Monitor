
import React from 'react';

const CoreTaxLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold">
        <span className={className ? "" : "text-coretax-blue"}>CORE</span>
        <span className={className ? "" : "text-coretax-yellow"}>TAX</span>
      </span>
    </div>
  );
};

export default CoreTaxLogo;
