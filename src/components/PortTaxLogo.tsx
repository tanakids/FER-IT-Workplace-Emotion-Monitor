
import React from 'react';

const PortTaxLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold">
        <span className={className ? "" : "text-porttax-blue"}>PORT</span>
        <span className={className ? "" : "text-porttax-yellow"}>TAX</span>
      </span>
    </div>
  );
};

export default PortTaxLogo;
