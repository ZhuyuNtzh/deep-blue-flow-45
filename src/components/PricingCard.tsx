
import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  features,
  isPopular = false,
  ctaText,
  ctaLink,
}) => {
  return (
    <div
      className={cn(
        'rounded-xl border bg-white shadow-sm transition-all duration-300 relative overflow-hidden flex flex-col',
        isPopular
          ? 'border-flux-200 shadow-md hover:shadow-xl scale-[1.02] z-10'
          : 'border-gray-200 hover:shadow-md hover:scale-[1.01]'
      )}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-flux-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
          Most Popular
        </div>
      )}

      <div className="p-6 border-b">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 mb-4">{description}</p>
        <div className="mb-4 flex items-end">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500 ml-1">/month</span>}
        </div>
        <Link
          to={ctaLink}
          className={cn(
            'w-full py-2 rounded-md font-medium transition-all duration-200 flex items-center justify-center',
            isPopular
              ? 'bg-flux-800 text-white hover:bg-flux-700 shadow-sm button-hover-effect'
              : 'bg-white text-flux-800 border border-flux-800 hover:bg-flux-50'
          )}
        >
          {ctaText}
        </Link>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="font-medium text-sm text-gray-700 mb-4">Includes:</p>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-flux-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
