import React from 'react';

// Import partner logo images from the partners&clients directory
import waltonImg from '/public/images/partners&clients/walton.png';
import inceptaImg from '/public/images/partners&clients/incepta.jpg';
import acmeImg from '/public/images/partners&clients/acme.jpg';
import doreenImg from '/public/images/partners&clients/doreen.jpg';
import hplImg from '/public/images/partners&clients/hpl.jpg';
import generalImg from '/public/images/partners&clients/general.jpg';
import palmalImg from '/public/images/partners&clients/palmal.jpg';

interface PartnerItem {
  id: string;
  imageSrc: string;
  alt: string;
}

const PARTNERS: PartnerItem[] = [
  {
    id: 'walton',
    imageSrc: waltonImg,
    alt: 'Walton',
  },
  {
    id: 'incepta',
    imageSrc: inceptaImg,
    alt: 'Incepta',
  },
  {
    id: 'acme',
    imageSrc: acmeImg,
    alt: 'ACME',
  },
  {
    id: 'doreen',
    imageSrc: doreenImg,
    alt: 'Doreen Power',
  },
  {
    id: 'healthcare',
    imageSrc: hplImg,
    alt: 'Healthcare Pharmaceuticals Limited',
  },
  {
    id: 'general',
    imageSrc: generalImg,
    alt: 'General Pharmaceuticals Ltd.',
  },
  {
    id: 'palmal',
    imageSrc: palmalImg,
    alt: 'Palmal Group',
  },
];

export const PartnersMarquee: React.FC = () => {
  // Repeating array for smooth infinite marquee animation
  const repeatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section 
      className="w-full bg-white flex justify-center items-center overflow-hidden"
      style={{
        paddingTop: '50px',
        paddingBottom: '50px',
      }}
    >
      <div 
        className="w-full max-w-[1440px] mx-auto flex flex-col items-center px-4 sm:px-8 lg:px-[80px]"
      >
        {/* Title matching exact blueprint specifications */}
        <h2 
          className="text-center"
          style={{
            color: '#000',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '35px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            textTransform: 'uppercase',
            marginBottom: '50px',
          }}
        >
          OUR GENUINE TRUSTED PARTNERS & CLIENTS
        </h2>

        {/* Marquee Carousel Container with deep border color and exact card blueprint size */}
        <div className="w-full border border-[#9CA3AF] bg-white overflow-hidden relative shadow-xs">
          {/* Animated Marquee Track: Moves from Right to Left infinitely */}
          <div className="animate-marquee-left flex items-stretch">
            {repeatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="w-[182.857px] h-[150px] shrink-0 border-r border-[#9CA3AF] flex items-center justify-center bg-white select-none hover:bg-stone-50/70 transition-colors"
                style={{
                  paddingTop: '18px',
                  paddingBottom: '18px',
                  paddingLeft: '24px',
                  paddingRight: '24px',
                }}
              >
                <img
                  src={partner.imageSrc}
                  alt={partner.alt}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain select-none transition-transform duration-200 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

