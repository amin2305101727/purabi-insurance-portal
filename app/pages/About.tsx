import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Play, 
  CheckCircle2, 
  Award, 
  RotateCcw, 
  Zap, 
  TrendingUp,
  BarChart3,
  ChartNoAxesCombined,
} from 'lucide-react';
import { CLIENT_PARTNERS } from '../data/mockData';
import { PartnersMarquee } from '../components/PartnersMarquee';
import startTrackingImg from '/public/images/StartTracking.png';
import imageHorizontalBorder from '/public/images/Image+HorizontalBorder.png';

interface AboutUsPageProps {
  onOpenClaimTracker: () => void;
  onOpenVideo: () => void;
  onOpenQuote: () => void;
}

export const About: React.FC<AboutUsPageProps> = ({
  onOpenClaimTracker,
  onOpenVideo,
  onOpenQuote,
}) => {
  return (
    <div className="min-h-screen bg-white pb-20 font-sans text-slate-800">
      
      {/* 1. HERO BANNER SECTION (W: 1440px, H: 341px with background-3 image & translucent inner card) */}
      <section 
        className="w-full relative overflow-hidden bg-stone-900 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/background-3.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '341px',
        }}
      >
        <div 
          className="w-full max-w-[1440px] mx-auto flex items-center justify-center"
          style={{
            paddingTop: '50px',
            paddingBottom: '50px',
            paddingLeft: 'max(16px, min(80px, 6vw))',
            paddingRight: 'max(16px, min(80px, 6vw))',
          }}
        >
          {/* Inner Translucent Card */}
          <div 
            className="w-full border border-white/25 shadow-xl flex flex-col justify-center"
            style={{
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.20)',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              padding: '30px',
            }}
          >
            {/* Breadcrumb Pill */}
            <div 
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[13px] sm:text-[14px] text-white border border-white/30 self-start select-none"
              style={{
                background: 'rgba(255, 255, 255, 0.20)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                marginBottom: '12px',
              }}
            >
              <Link to="/" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">Home</Link>
              <span className="opacity-75">›</span>
              <span className="font-medium text-white">About Us</span>
            </div>

            {/* Heading */}
            <h1 
              className="text-white"
              style={{
                color: '#FFF',
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(24px, 3.2vw, 35px)',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'clamp(38px, 4.8vw, 60px)',
                textTransform: 'capitalize',
                margin: 0,
                paddingBottom: '8px',
              }}
            >
              Securing Your Future With Confidence
            </h1>

            {/* Subheading */}
            <p 
              className="text-white max-w-5xl"
              style={{
                color: '#FFF',
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(15px, 1.8vw, 20px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                margin: 0,
              }}
            >
              Driven by a vision of trust and reliability, we aim not just to sell policies, but to build lasting relationships with our clients—supporting you through every stage of life.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US MAIN INTRO (Blueprint exact design with collage & stats) */}
      <section 
        className="w-full max-w-[1440px] mx-auto"
        style={{
          paddingTop: '100px',
          paddingBottom: '100px',
          paddingLeft: 'max(16px, min(80px, 6vw))',
          paddingRight: 'max(16px, min(80px, 6vw))',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[20px] items-center">
          
          {/* Left: Image Collage & Floating Badges with Exact Blueprint Coordinates */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-start">
            <div 
              className="relative w-full max-w-[580px] select-none"
              style={{
                height: 'clamp(440px, 58vw, 580px)',
              }}
            >
              {/* 1. Main Family Roof Image (about-image-1.png) - W: 428.86px, H: 421.61px */}
              <div 
                className="absolute top-0 left-0 overflow-hidden rounded-[24px] shadow-md bg-stone-100 border border-stone-200/60 z-0"
                style={{
                  width: 'min(75%, 428.86px)',
                  height: 'clamp(260px, 42vw, 421.61px)',
                }}
              >
                <img
                  src="/images/about-image-1.png"
                  alt="Happy family under roof"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* 2. 27+ Years of Experience Badge (Higher Position & Blueprint Padding 34.62px) */}
              <div 
                className="absolute bg-[#a83b24] text-white rounded-[24px] shadow-2xl flex flex-col items-center justify-center text-center border-4 border-white z-20"
                style={{
                  top: 'clamp(18px, 4vw, 42px)',
                  left: 'clamp(52%, 48vw, 340px)',
                  minWidth: 'clamp(130px, 18vw, 158px)',
                  paddingTop: '34.62px',
                  paddingBottom: '34.62px',
                  paddingLeft: '18px',
                  paddingRight: '18px',
                }}
              >
                <span 
                  className="font-bold leading-none tracking-tight"
                  style={{ 
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 'clamp(30px, 4vw, 40px)',
                  }}
                >
                  27+
                </span>
                <span 
                  className="font-semibold uppercase tracking-wider mt-2 text-white leading-tight"
                  style={{ 
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 'clamp(10px, 1.2vw, 12px)',
                  }}
                >
                  Years Of<br />Experience
                </span>
              </div>

              {/* 3. Sub-image: Umbrella over home (about-image-2.png) - Overlapping bottom-right */}
              <div 
                className="absolute rounded-[24px] overflow-hidden shadow-2xl border-4 border-white z-10 bg-white"
                style={{
                  top: 'clamp(190px, 29vw, 275px)',
                  left: 'clamp(42%, 38vw, 250px)',
                  width: 'clamp(190px, 33vw, 321.65px)',
                  height: 'clamp(185px, 32vw, 316.21px)',
                }}
              >
                <img
                  src="/images/about-image-2.png"
                  alt="House protection with umbrella"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 4. 1000k+ Satisfied Clients Badge (Above Umbrella Image with 100px x 100px Avatar) */}
              <div 
                className="absolute bg-white p-2.5 sm:p-3 rounded-[20px] shadow-2xl border border-stone-100/80 flex items-center gap-3 sm:gap-4 z-30"
                style={{
                  top: 'clamp(295px, 44vw, 420px)',
                  left: 'clamp(8px, 2.5vw, 25px)',
                  minWidth: 'clamp(260px, 38vw, 330px)',
                }}
              >
                {/* 100px x 100px Avatar (about-image-4.jpg) */}
                <div 
                  className="overflow-hidden rounded-[14px] shrink-0 bg-stone-100 border border-stone-100 shadow-xs"
                  style={{
                    width: '100px',
                    height: '100px',
                  }}
                >
                  <img
                    src="/images/about-image-4.jpg"
                    alt="Satisfied client avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pr-4 select-none">
                  <div 
                    className="text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-900 leading-tight"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    1000k+
                  </div>
                  <div 
                    className="text-[10px] sm:text-[11.5px] lg:text-[12px] font-semibold uppercase text-[#a83b24] tracking-wider mt-1 whitespace-nowrap"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Satisfied Clients
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Content & Blueprint Specifications */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Eyebrow Label */}
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-5 h-[2px] bg-[#a83b24]" />
              <span 
                className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-[#a83b24]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 
              className="mb-3.5"
              style={{
                color: '#000',
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(28px, 3.2vw, 45px)',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'clamp(36px, 3.8vw, 50px)',
              }}
            >
              We’re Providing Best Insurance Policy's
            </h2>

            {/* Subheading */}
            <p 
              style={{
                color: 'rgba(0, 0, 0, 0.70)',
                textAlign: 'justify',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginBottom: '30px',
              }}
            >
              Purabi General Insurance Company Limited (PGICL), <strong className="font-semibold text-slate-900">established on June 29, 1998</strong>, is a leading insurer in Bangladesh, providing comprehensive general insurance services. Licensed under the Insurance Act, 1938, PGICL offers a wide range of protection beyond life insurance, ensuring your peace of mind with reliable and innovative solutions.
            </p>

            {/* Bottom Card Container with 20px padding & light neutral background */}
            <div 
              className="rounded-[24px] flex flex-col sm:flex-row items-center justify-between gap-5"
              style={{
                background: '#F9F7F5',
                padding: '20px',
                border: '1px solid #F0ECE8',
              }}
            >
              
              {/* Left Column: 90% Success Rate & Checkmarks Card */}
              <div className="flex-1 w-full flex flex-col justify-between self-stretch">
                
                {/* 90% Success Rate */}
                <div className="flex items-center gap-4 mb-3.5">
                  <div className="w-[74px] h-[74px] rounded-[20px] bg-[#a83b24] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <ChartNoAxesCombined className="w-9 h-9 stroke-[2]" />
                  </div>
                  <div>
                    <div 
                      className="text-4xl sm:text-[42px] font-bold text-[#000] leading-none"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      90%
                    </div>
                    <div 
                      className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-[#716E8C] mt-2"
                      style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.06em' }}
                    >
                      SUCCESS RATE
                    </div>
                  </div>
                </div>

                {/* White Card with Checkmarks */}
                <div className="bg-white rounded-[16px] p-3.5 sm:p-4 shadow-xs border border-stone-100/80">
                  <ul className="space-y-2 text-[12.5px] sm:text-[13px] font-medium text-[#a83b24]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#a83b24] shrink-0 fill-[#a83b24]/15" />
                      <span className="leading-tight">Comprehensive Coverage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#a83b24] shrink-0 fill-[#a83b24]/15" />
                      <span className="leading-tight">Customer-Centric Approach</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#a83b24] shrink-0 fill-[#a83b24]/15" />
                      <span className="leading-tight">Commitment to Excellence</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* Right Image: about-image-3.png (W: 290px, H: 255px) */}
              <div 
                className="overflow-hidden rounded-[20px] shadow-sm shrink-0 bg-stone-100 border border-stone-200/60"
                style={{
                  width: 'min(100%, 290px)',
                  height: '255px',
                }}
              >
                <img
                  src="/images/about-image-3.png"
                  alt="Insurance policy documents"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. START TRACKING YOUR CLAIMS BANNER */}
      <section 
        className="w-full bg-white flex justify-center items-center font-poppins"
        style={{
          paddingTop: '50px',
          paddingBottom: '50px',
          paddingLeft: 'clamp(16px, 5vw, 80px)',
          paddingRight: 'clamp(16px, 5vw, 80px)',
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Family Image with Image+HorizontalBorder Backdrop */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[460px] flex items-end justify-center pt-8">
              {/* Background Horizontal Border Graphic (Image+HorizontalBorder.png) */}
              <img
                src={imageHorizontalBorder}
                alt=""
                aria-hidden="true"
                referrerPolicy="no-referrer"
                className="absolute object-contain select-none pointer-events-none -z-0"
                style={{
                  width: '56%',
                  maxHeight: '410px',
                  top: '-35px',
                  left: '13%',
                }}
              />
              <img
                src={startTrackingImg}
                alt="Start tracking your claims with Purabi General Insurance"
                referrerPolicy="no-referrer"
                className="relative z-10 w-full h-auto max-h-[380px] object-contain select-none pointer-events-none drop-shadow-sm"
              />
            </div>
          </div>

          {/* Right Content Card (Blueprint: Top 50px, Bottom 50px, Left 40px, Right 40px, Gap 25px) */}
          <div 
            className="lg:col-span-7 bg-[#FAF1EE] rounded-[24px] flex flex-col justify-center"
            style={{
              paddingTop: '50px',
              paddingBottom: '50px',
              paddingLeft: '40px',
              paddingRight: '40px',
            }}
          >
            {/* Upper text block */}
            <div className="w-full flex flex-col">
              <div 
                className="text-slate-800 uppercase tracking-normal mb-2"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '13px',
                  lineHeight: '120%',
                }}
              >
                BE HAPPY TO GET INSURANCE
              </div>
              <h2 
                className="text-slate-900 tracking-tight mb-3"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(26px, 3.2vw, 38px)',
                  lineHeight: '115%',
                }}
              >
                Start Tracking Your Claims
              </h2>
              <p 
                className="text-slate-600 font-normal leading-relaxed max-w-[580px]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '14px',
                  lineHeight: '160%',
                }}
              >
                Enjoy peace of mind with hassle-free insurance. Track your claims effortlessly and stay informed every step of the way.
              </p>
            </div>

            {/* Gap of exactly 25px as shown in blueprint */}
            <div style={{ height: '25px' }} className="shrink-0" />

            {/* Action Bottom Bar */}
            <div className="w-full flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={onOpenClaimTracker}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#a83b24] hover:bg-[#8f2d18] text-white rounded-[8px] font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:scale-102 active:scale-98 cursor-pointer"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span>Claim Coverage</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="flex items-center gap-3 text-xs sm:text-[13px]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <div className="w-6 sm:w-10 h-[1px] bg-[#d9beaf]" />
                <span className="font-semibold text-slate-800 tracking-wide uppercase">OR</span>
                <div className="w-6 sm:w-10 h-[1px] bg-[#d9beaf]" />

                <div className="flex items-center gap-1.5 text-slate-600 whitespace-nowrap pl-1">
                  <span className="text-[12px] sm:text-[13px] font-normal text-slate-500">Mail Us Anytime:</span>
                  <a
                    href="mailto:purabiinsurance@gmail.com"
                    className="font-bold text-slate-900 hover:text-[#a83b24] transition-colors"
                  >
                    purabiinsurance@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section 
        className="w-full bg-white flex justify-center items-center font-poppins"
        style={{
          paddingTop: '100px',
          paddingBottom: '0px',
          paddingLeft: 'clamp(16px, 5vw, 80px)',
          paddingRight: 'clamp(16px, 5vw, 80px)',
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Lower Text Container (3 Cards with exact 30px gap and 99px x 125px badges) */}
          <div className="lg:col-span-6 flex flex-col space-y-[30px] pt-4">
            
            {/* Card 1: 100% Safe Money */}
            <div 
              className="relative rounded-[20px] flex items-center transition-all duration-300 hover:shadow-md"
              style={{
                background: '#FAF7F5',
                border: '1px solid #F0ECE8',
                paddingTop: '19px',
                paddingBottom: '19px',
                paddingRight: '20px',
                paddingLeft: '16px',
              }}
            >
              {/* Terracotta Icon Badge: W 99px, H 125px, extends 30px above top, custom corners */}
              <div 
                className="shrink-0 bg-[#A83B24] text-white flex items-center justify-center shadow-md select-none -mt-[30px] mr-5 sm:mr-6"
                style={{
                  width: '99px',
                  height: '125px',
                  borderRadius: '24px 0px 24px 24px',
                  padding: '24px 17px',
                }}
              >
                <img 
                  src="/images/about-icon-1.png" 
                  alt="100% Safe Money Icon" 
                  className="w-full h-full object-contain select-none pointer-events-none"
                />
              </div>
              <div className="flex-1 max-w-[515px]">
                <h3 
                  className="mb-1"
                  style={{
                    color: '#6D2819',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '19px',
                    fontWeight: 700,
                    lineHeight: '130%',
                  }}
                >
                  100% Safe Money
                </h3>
                <p 
                  style={{
                    color: 'rgba(0, 0, 0, 0.70)',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '13.5px',
                    fontWeight: 400,
                    lineHeight: '20px',
                  }}
                >
                  Your money is 100% secure with us, ensuring peace of mind.
                </p>
              </div>
            </div>

            {/* Card 2: Anytime Money Back */}
            <div 
              className="relative rounded-[20px] flex items-center transition-all duration-300 hover:shadow-md"
              style={{
                background: '#FAF7F5',
                border: '1px solid #F0ECE8',
                paddingTop: '19px',
                paddingBottom: '19px',
                paddingRight: '20px',
                paddingLeft: '16px',
              }}
            >
              {/* Terracotta Icon Badge: W 99px, H 125px, extends 30px above top, custom corners */}
              <div 
                className="shrink-0 bg-[#A83B24] text-white flex items-center justify-center shadow-md select-none -mt-[30px] mr-5 sm:mr-6"
                style={{
                  width: '99px',
                  height: '125px',
                  borderRadius: '24px 0px 24px 24px',
                  padding: '24px 17px',
                }}
              >
                <img 
                  src="/images/about-icon-2.png" 
                  alt="Anytime Money Back Icon" 
                  className="w-full h-full object-contain select-none pointer-events-none"
                />
              </div>
              <div className="flex-1 max-w-[515px]">
                <h3 
                  className="mb-1"
                  style={{
                    color: '#6D2819',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '19px',
                    fontWeight: 700,
                    lineHeight: '130%',
                  }}
                >
                  Anytime Money Back
                </h3>
                <p 
                  style={{
                    color: 'rgba(0, 0, 0, 0.70)',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '13.5px',
                    fontWeight: 400,
                    lineHeight: '20px',
                  }}
                >
                  Access your money anytime with Anytime Money Back for maximum convenience.
                </p>
              </div>
            </div>

            {/* Card 3: Fast Process */}
            <div 
              className="relative rounded-[20px] flex items-center transition-all duration-300 hover:shadow-md"
              style={{
                background: '#FAF7F5',
                border: '1px solid #F0ECE8',
                paddingTop: '19px',
                paddingBottom: '19px',
                paddingRight: '20px',
                paddingLeft: '16px',
              }}
            >
              {/* Terracotta Icon Badge: W 99px, H 125px, extends 30px above top, custom corners */}
              <div 
                className="shrink-0 bg-[#A83B24] text-white flex items-center justify-center shadow-md select-none -mt-[30px] mr-5 sm:mr-6"
                style={{
                  width: '99px',
                  height: '125px',
                  borderRadius: '24px 0px 24px 24px',
                  padding: '24px 17px',
                }}
              >
                <img 
                  src="/images/about-icon-3.png" 
                  alt="Fast Process Icon" 
                  className="w-full h-full object-contain select-none pointer-events-none"
                />
              </div>
              <div className="flex-1 max-w-[515px]">
                <h3 
                  className="mb-1"
                  style={{
                    color: '#6D2819',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '19px',
                    fontWeight: 700,
                    lineHeight: '130%',
                  }}
                >
                  Fast Process
                </h3>
                <p 
                  style={{
                    color: 'rgba(0, 0, 0, 0.70)',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '13.5px',
                    fontWeight: 400,
                    lineHeight: '20px',
                  }}
                >
                  Experience a Fast Process with quick and efficient solutions tailored to your needs.
                </p>
              </div>
            </div>

          </div>

          {/* Right: Why Choose Us Header & Video Box */}
          <div className="lg:col-span-6 flex flex-col justify-center max-w-[630px] w-full">
            {/* Small Eyebrow Label */}
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-5 h-[2px] bg-[#a83b24]" />
              <span 
                className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-[#a83b24]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                WHY CHOOSE US
              </span>
            </div>

            {/* Heading with requested exact CSS & dimensions */}
            <h2 
              className="mb-3.5 max-w-[630px] w-full"
              style={{
                color: '#000',
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(28px, 3.5vw, 45px)',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'clamp(36px, 4.2vw, 50px)',
              }}
            >
              Why You Should Choose Our Insurance Policy's
            </h2>

            {/* Subheading with requested exact CSS */}
            <p 
              className="max-w-[630px] w-full"
              style={{
                color: 'rgba(0, 0, 0, 0.70)',
                textAlign: 'justify',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginBottom: '28px',
              }}
            >
              Choose our insurance policy for comprehensive coverage, reliable protection, hassle-free claims, and a customer-focused experience.
            </p>

            {/* Image Box: about-image-5.jpg (W: 630px, H: 298px Fixed) with centered video play logo */}
            <div 
              className="relative rounded-[20px] overflow-hidden shadow-sm border border-stone-200/80 w-full max-w-[630px] bg-stone-100"
              style={{
                height: '298px',
              }}
            >
              <img
                src="/images/about-image-5.jpg"
                alt="Why You Should Choose PGICL"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center select-none"
              />
              {/* Centered Video Play Logo (Static display, no action on click) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <div 
                  className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.18)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '2px solid #A83B24',
                  }}
                >
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="#A83B24" 
                    className="ml-1"
                  >
                    <path d="M7 4.5v15l13-7.5-13-7.5z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. GENUINE TRUSTED PARTNERS & CLIENTS */}
      <PartnersMarquee />

    </div>
  );
};

export const AboutUsPage = About;
export default About;
