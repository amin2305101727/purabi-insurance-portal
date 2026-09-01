import { InsuranceCategory, NewsItem, FAQItem, WorkingStep, ClientPartner, HealthPlan, ClaimRecord } from '../types';

export const COMPANY_INFO = {
  name: "PURABI GENERAL INSURANCE CO. LTD.",
  shortName: "PGICL",
  tagline: "Protecting Value Through Innovation",
  establishedYear: "1988",
  incorporationDate: "June 29, 1988",
  phone: "+880 1714-044146",
  hotline: "+880 1714-044146",
  email: "purabiinsurance@gmail.com",
  infoEmail: "purabiinsurance@gmail.com",
  address: "Sandhani Life Tower (2nd Floor), 34 Bangla Motor, Dhaka - 1000.",
  officeHours: "Sunday to Thursday : 10 AM to 6 PM",
  satisfactionCount: "1000k+",
  experienceYears: "27+",
  successRate: "90%",
  playStoreUrl: "https://play.google.com",
  appStoreUrl: "https://apple.com/app-store",
};

export const QUICK_CATEGORY_ICONS = [
  { id: 'health', name: 'Health', icon: 'HeartHandshake', path: '/services/health' },
  { id: 'car', name: 'Car', icon: 'Car', path: '/services/motor' },
  { id: 'travel', name: 'Travel', icon: 'Luggage', path: '/services/travel' },
  { id: 'life', name: 'Life', icon: 'Users', path: '/services/life' },
  { id: 'marine', name: 'Marine', icon: 'Ship', path: '/services/marine' },
  { id: 'engineering', name: 'Engineering', icon: 'HardHat', path: '/services/engineering' },
  { id: 'more', name: 'More', icon: 'LayoutGrid', path: '/services' },
];

export const INSURANCE_CATEGORIES: InsuranceCategory[] = [
  {
    id: 'fire',
    name: 'Fire Insurance',
    slug: 'fire',
    iconName: 'Flame',
    title: 'FIRE INSURANCE',
    description: 'With our fire insurance policies, you can choose from various coverage against fire, protect your property, equipment, and stock.',
    benefits: ['Industrial All Risk coverage', 'Fire & Allied Perils', 'Business Interruption', 'Riot & Strike Damage'],
    startingPrice: '৳ 2,500 / year',
    accentColor: '#fef2f2',
  },
  {
    id: 'health',
    name: 'Health Insurance',
    slug: 'health',
    iconName: 'HeartHandshake',
    title: 'HEALTH INSURANCE',
    description: 'With our health insurance policies, you can choose from various coverage options that protect you, your family, and employee healthcare costs.',
    benefits: ['Cashless Hospitalization in 500+ clinics', 'Pre & Post Hospitalization', 'Maternity Cover', 'Critical Illness Support'],
    startingPrice: '৳ 3,200 / year',
    accentColor: '#fdf2f8',
  },
  {
    id: 'motor',
    name: 'Motor Insurance',
    slug: 'motor',
    iconName: 'Car',
    title: 'MOTOR INSURANCE',
    description: 'Comprehensive motor coverage protecting your private and commercial vehicles against accidents, theft, third-party liability, and natural disasters.',
    benefits: ['Comprehensive & Third Party cover', 'Accidental Damage', 'Theft & Fire Protection', '24/7 Roadside Assistance'],
    startingPrice: '৳ 1,800 / year',
    accentColor: '#f0fdf4',
  },
  {
    id: 'marine',
    name: 'Marine Insurance',
    slug: 'marine',
    iconName: 'Ship',
    title: 'MARINE INSURANCE',
    description: 'We offer comprehensive protection for sea voyages, cargo shipping, transit vessels, and port handling risks with swift overseas settlement.',
    benefits: ['Marine Cargo (Import & Export)', 'Marine Hull Protection', 'Transit Inland Coverage', 'Customs Bonded Warehouses'],
    startingPrice: '৳ 4,000 / consignment',
    accentColor: '#eff6ff',
  },
  {
    id: 'engineering',
    name: 'Engineering Insurance',
    slug: 'engineering',
    iconName: 'HardHat',
    title: 'ENGINEERING INSURANCE',
    description: 'Specialized policies for construction sites, heavy industrial machinery breakdown, electronic equipment, and contractor risks.',
    benefits: ['Contractor All Risks (CAR)', 'Erection All Risks (EAR)', 'Machinery Breakdown', 'Boiler Explosion Cover'],
    startingPrice: '৳ 5,500 / project',
    accentColor: '#fffbeb',
  },
  {
    id: 'travel',
    name: 'Travel Insurance',
    slug: 'travel',
    iconName: 'Luggage',
    title: 'TRAVEL INSURANCE',
    description: 'Global medical and travel protection for international business, leisure, and student trips with Schengen visa compliance.',
    benefits: ['Overseas Medical Emergency', 'Trip Cancellation / Delay', 'Lost Luggage & Passport', 'Emergency Evacuation'],
    startingPrice: '৳ 1,200 / trip',
    accentColor: '#faf5ff',
  }
];

export const WORKING_STEPS: WorkingStep[] = [
  {
    stepNumber: '01',
    title: 'Get A Quotetation',
    description: "Answer a couple of questions, we'll provide accurate live quotes.",
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
  },
  {
    stepNumber: '02',
    title: 'Complete The Aplication',
    description: "Answer a couple of questions, we'll provide accurate live quotes.",
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=500&q=80',
  },
  {
    stepNumber: '03',
    title: 'Get your Insurance',
    description: "Answer a couple of questions, we'll provide accurate live quotes.",
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=80',
  }
];

export const CLIENT_PARTNERS: ClientPartner[] = [
  { id: '1', name: 'WALTON', logoText: 'WALTON', color: '#0054a6', type: 'Electronics & Conglomerate' },
  { id: '2', name: 'Incepta', logoText: 'Incepta Pharmaceuticals', color: '#0f766e', type: 'Healthcare' },
  { id: '3', name: 'ACME', logoText: 'THE ACME LABORATORIES', color: '#dc2626', type: 'Pharmaceuticals' },
  { id: '4', name: 'DOREEN POWER', logoText: 'DOREEN POWER', color: '#b91c1c', type: 'Energy & Power' },
  { id: '5', name: 'Square / Healthcare', logoText: 'Healthcare Pharma', color: '#1e40af', type: 'Pharmaceuticals' },
  { id: '6', name: 'GENERAL PHARMA', logoText: 'GENERAL PHARMA', color: '#2563eb', type: 'Healthcare' },
  { id: '7', name: 'Palmal Group', logoText: 'PALMAL GROUP', color: '#15803d', type: 'Apparel & Garments' },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Condolence Notice - Remembering Honored Board Member',
    bengaliTitle: 'শোক সংবাদ',
    date: '17 June 2024',
    category: 'Corporate News',
    summary: 'পুরবী জেনারেল ইন্স্যুরেন্স কোম্পানি লিমিটেড গভীর শ্রদ্ধার সাথে তাদের সম্মানিত পরিচালনা পর্ষদের সদস্যের বিদেহী আত্মার মাগফিরাত কামনা করছে।',
    content: 'পুরবী জেনারেল ইন্স্যুরেন্স কোম্পানি লিমিটেড (PGICL) পরিবারের পক্ষ থেকে গভীর শোক ও সমবেদনা জ্ঞাপন করা হচ্ছে। মরহুমের অবদান কোম্পানি চিরকাল শ্রদ্ধার সাথে স্মরণ রাখবে। তাঁর শোকসন্তপ্ত পরিবারের প্রতি গভীর সহমর্মিতা জানানো হচ্ছে।',
    imageUrl: '/images/shok_songbad.png',
  },
  {
    id: 'news-2',
    title: 'Annual Memorial & Welfare Initiative 2024',
    bengaliTitle: 'শোক সংবাদ ও দোয়া মাহফিল',
    date: '17 June 2024',
    category: 'Event',
    summary: 'কোম্পানির সকল কর্মকর্তা ও কর্মচারীদের উপস্থিতিতে বিশেষ দোয়া ও স্মৃতিচারণ অনুষ্ঠান আয়োজিত হয়েছে।',
    content: 'পুরবী জেনারেল ইন্স্যুরেন্স কোম্পানি লিমিটেডের প্রধান কার্যালয় ও শাখা অফিসগুলোতে বিশেষ দোয়া মাহফিল অনুষ্ঠিত হয়। এতে কর্মকর্তা, শেয়ারহোল্ডার এবং শুভানুধ্যায়ীগণ অংশগ্রহণ করেন।',
    imageUrl: '/images/shok_songbad.png',
  },
  {
    id: 'news-3',
    title: 'Notice Regarding Dividend and AGM Notification',
    bengaliTitle: 'নোটিশ (28 March, 2022)',
    date: '28 March, 2022',
    category: 'Regulatory Notice',
    isNotice: true,
    summary: 'বাংলাদেশ সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন ও বীমা উন্নয়ন কর্তৃপক্ষের বিধিমালা অনুযায়ী কোম্পানি বার্ষিক নোটিশ প্রকাশ করেছে।',
    content: 'এতদ্বারা পুরবী জেনারেল ইন্স্যুরেন্স কোম্পানি লিমিটেডের সম্মানিত শেয়ারহোল্ডারগণের অবগতির জন্য জানানো যাইতেছে যে, বাংলাদেশ সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন ও বীমা উন্নয়ন কর্তৃপক্ষের বিধিমালা অনুযায়ী কোম্পানি বার্ষিক সাধারণ সভা ও লভ্যাংশ বণ্টন সংক্রান্ত নোটিশ প্রকাশ করেছে।',
    imageUrl: '/images/notice.jpg',
  },
  {
    id: 'news-4',
    title: 'PGICL Expands Digital Portal for Real-time Claim Settlement',
    bengaliTitle: 'ডিজিটাল ক্লেইম ট্র্যাকিং সেবা চালু',
    date: '12 January 2025',
    category: 'Innovation',
    summary: 'Purabi General Insurance announces instantaneous claim tracking and digital submission portal for policyholders.',
    content: 'In line with the company vision of "Protecting Value Through Innovation", PGICL has deployed a cloud-enabled claim tracking pipeline that allows corporate and individual customers to track survey updates and claim approvals in minutes.',
    imageUrl: '/images/shok_songbad.png',
  }
];

export const HEALTH_PLANS: HealthPlan[] = [
  {
    id: 'hp-1',
    name: 'Shurokkha Bronze Individual',
    type: 'self',
    coverageAmount: 100000,
    coverageFormatted: '৳ 1,00,000 (1 Lac)',
    annualPremium: 3200,
    hospitalizationLimit: '৳ 3,000 / day cabin rent',
    icuLimit: '৳ 7,000 / day',
    cashlessHospitals: 350,
    prePostHospitalization: '30 Days Pre / 60 Days Post',
    ambulanceCover: '৳ 2,500 per emergency',
    claimSettlementRate: '92.4%',
    opdLimit: '৳ 5,000 yearly',
  },
  {
    id: 'hp-1b',
    name: 'Shurokkha Gold Individual',
    type: 'self',
    coverageAmount: 300000,
    coverageFormatted: '৳ 3,00,000 (3 Lac)',
    annualPremium: 5900,
    hospitalizationLimit: '৳ 6,000 / day cabin rent',
    icuLimit: '৳ 14,000 / day',
    cashlessHospitals: 450,
    featured: true,
    prePostHospitalization: '30 Days Pre / 60 Days Post',
    ambulanceCover: '৳ 4,000 per emergency',
    claimSettlementRate: '94.8%',
    opdLimit: '৳ 12,000 yearly',
  },
  {
    id: 'hp-2',
    name: 'Shurokkha Couple Silver',
    type: 'couple',
    coverageAmount: 300000,
    coverageFormatted: '৳ 3,00,000 (3 Lac)',
    annualPremium: 7800,
    hospitalizationLimit: '৳ 6,000 / day cabin rent',
    icuLimit: '৳ 12,000 / day',
    cashlessHospitals: 480,
    featured: true,
    prePostHospitalization: '30 Days Pre / 60 Days Post',
    ambulanceCover: '৳ 3,500 per emergency',
    claimSettlementRate: '93.5%',
    opdLimit: '৳ 10,000 yearly',
  },
  {
    id: 'hp-2b',
    name: 'Couple Platinum Care',
    type: 'couple',
    coverageAmount: 600000,
    coverageFormatted: '৳ 6,00,000 (6 Lac)',
    annualPremium: 14200,
    hospitalizationLimit: '৳ 12,000 / day deluxe cabin',
    icuLimit: '৳ 25,000 / day',
    cashlessHospitals: 560,
    prePostHospitalization: '45 Days Pre / 90 Days Post',
    ambulanceCover: '৳ 6,000 per emergency',
    claimSettlementRate: '96.2%',
    opdLimit: '৳ 20,000 yearly',
  },
  {
    id: 'hp-3',
    name: 'Nirapad Family Diamond Floater',
    type: 'family',
    coverageAmount: 500000,
    coverageFormatted: '৳ 5,00,000 (5 Lac)',
    annualPremium: 13500,
    hospitalizationLimit: '৳ 10,000 / day deluxe cabin',
    icuLimit: '৳ 20,000 / day',
    cashlessHospitals: 550,
    featured: true,
    prePostHospitalization: '30 Days Pre / 60 Days Post',
    ambulanceCover: '৳ 5,000 per emergency',
    claimSettlementRate: '95.1%',
    opdLimit: '৳ 18,000 yearly',
  },
  {
    id: 'hp-3b',
    name: 'Family Essential Starter',
    type: 'family',
    coverageAmount: 200000,
    coverageFormatted: '৳ 2,00,000 (2 Lac)',
    annualPremium: 8400,
    hospitalizationLimit: '৳ 4,500 / day cabin rent',
    icuLimit: '৳ 10,000 / day',
    cashlessHospitals: 420,
    prePostHospitalization: '30 Days Pre / 45 Days Post',
    ambulanceCover: '৳ 3,000 per emergency',
    claimSettlementRate: '92.0%',
    opdLimit: '৳ 8,000 yearly',
  },
  {
    id: 'hp-4',
    name: 'Senior Citizen Golden Care',
    type: 'parents',
    coverageAmount: 500000,
    coverageFormatted: '৳ 5,00,000 (5 Lac)',
    annualPremium: 16800,
    hospitalizationLimit: '৳ 9,000 / day cabin rent',
    icuLimit: '৳ 18,000 / day',
    cashlessHospitals: 550,
    featured: true,
    prePostHospitalization: '45 Days Pre / 90 Days Post',
    ambulanceCover: '৳ 5,000 per emergency',
    claimSettlementRate: '95.8%',
    opdLimit: '৳ 15,000 yearly',
  },
  {
    id: 'hp-4b',
    name: 'Parents Basic Medicare',
    type: 'parents',
    coverageAmount: 200000,
    coverageFormatted: '৳ 2,00,000 (2 Lac)',
    annualPremium: 9800,
    hospitalizationLimit: '৳ 4,500 / day cabin rent',
    icuLimit: '৳ 10,000 / day',
    cashlessHospitals: 420,
    prePostHospitalization: '30 Days Pre / 60 Days Post',
    ambulanceCover: '৳ 3,000 per emergency',
    claimSettlementRate: '93.2%',
    opdLimit: '৳ 10,000 yearly',
  },
  {
    id: 'hp-5',
    name: 'Executive Mega Shield Global',
    type: 'family',
    coverageAmount: 1000000,
    coverageFormatted: '৳ 10,00,000 (10 Lac)',
    annualPremium: 24500,
    hospitalizationLimit: '৳ 18,000 / day suite/cabin',
    icuLimit: 'Full actual coverage',
    cashlessHospitals: 600,
    prePostHospitalization: '60 Days Pre / 90 Days Post',
    ambulanceCover: '৳ 10,000 (Air & Road)',
    claimSettlementRate: '97.5%',
    opdLimit: '৳ 35,000 yearly',
  }
];

export const HEALTH_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is Health Insurance?',
    answer: 'Health insurance is a contract between you and Purabi General Insurance where we cover medical expenses incurred from illness, accidental injuries, surgery, and hospitalization in exchange for an agreed premium.'
  },
  {
    id: 'faq-2',
    question: 'Why do you need a Health Insurance?',
    answer: 'Healthcare inflation and emergency hospitalization costs can deplete family savings overnight. A health insurance policy guarantees immediate cashless admission at premier hospitals, quality treatment, and financial security without distress.'
  },
  {
    id: 'faq-3',
    question: 'Which Health Insurance policies are available now?',
    answer: 'Purabi General Insurance offers Individual Health Coverage (For Self), Couple Plans, Family Floater Plans (covers parents and up to 3 children), Senior Citizen Parents Care, and Corporate Group Health Insurance.'
  },
  {
    id: 'faq-4',
    question: 'Individual Plan vs Family Floater Plan, what is the difference?',
    answer: 'An Individual Plan dedicates a fixed sum insured for a single individual person. A Family Floater Plan allows the entire insured family to share one aggregate pool of coverage (e.g. 5 Lac or 10 Lac), which is significantly more cost-effective.'
  },
  {
    id: 'faq-5',
    question: 'How to claim for Health Insurance coverage?',
    answer: 'You can claim in two ways: 1) Cashless Settlement at any network partner hospital by showing your Purabi Digital Health Card, or 2) Reimbursement Claim by submitting original bills, discharge summary, and prescription through our website within 30 days.'
  },
  {
    id: 'faq-6',
    question: 'What happens after claiming Health Insurance coverage?',
    answer: 'Once submitted, our in-house medical assessment team reviews the claim within 48 business hours. For cashless claims, authorization is approved within 60 minutes. Reimbursements are directly transferred to your bank account via BEFTN or bKash.'
  },
  {
    id: 'faq-7',
    question: 'Why is Purabi the best place to buy Health Insurance policies?',
    answer: 'Purabi General Insurance (established in 1988) has 37+ years of solvency, a 90% claims settlement speed, direct tie-ups with 500+ leading hospitals across Bangladesh, and dedicated 24/7 client concierge support.'
  },
  {
    id: 'faq-8',
    question: 'How to contact Purabi?',
    answer: 'You can reach us by phone at +880 024-8314448, WhatsApp hotline at +880 9613-222333, email at purabiinsurance@gmail.com, or visit our Head Office at Sena Kalyan Bhaban, Motijheel, Dhaka.'
  }
];

export const SAMPLE_CLAIMS: ClaimRecord[] = [
  {
    claimId: 'CLM-2025-8841',
    policyNumber: 'POL-HLT-99238',
    claimantName: 'Rafiqul Islam',
    insuranceType: 'Health Insurance',
    claimAmount: '৳ 64,500',
    filingDate: '2025-02-14',
    status: 'Approved',
    timeline: [
      { title: 'Claim Intimation Received', date: '14 Feb 2025, 10:30 AM', completed: true, description: 'Documents received digitally.' },
      { title: 'Medical Assessment Completed', date: '15 Feb 2025, 02:15 PM', completed: true, description: 'Discharge summary verified with Apollo Hospital.' },
      { title: 'Claim Approved by Underwriter', date: '16 Feb 2025, 11:00 AM', completed: true, description: 'Approved for ৳ 64,500 net settlement.' },
      { title: 'Disbursement via BEFTN Bank Transfer', date: '17 Feb 2025, 04:00 PM', completed: true, description: 'Disbursement completed to claimant account.' }
    ]
  },
  {
    claimId: 'CLM-2025-9102',
    policyNumber: 'POL-FIR-44102',
    claimantName: 'Textile Horizon Ltd.',
    insuranceType: 'Fire & Industrial Risk',
    claimAmount: '৳ 8,50,000',
    filingDate: '2025-02-20',
    status: 'Surveyor Assigned',
    timeline: [
      { title: 'Claim Intimation Received', date: '20 Feb 2025, 09:00 AM', completed: true, description: 'Incident report recorded.' },
      { title: 'Independent Surveyor Appointed', date: '21 Feb 2025, 11:30 AM', completed: true, description: 'Licensed surveyor visiting the site at Gazipur.' },
      { title: 'Loss Assessment Report Submission', date: 'Pending Survey', completed: false, description: 'Awaiting survey loss estimation report.' },
      { title: 'Final Settlement Approval', date: 'Estimated 28 Feb 2025', completed: false, description: 'Board approval and EFT transfer.' }
    ]
  }
];
