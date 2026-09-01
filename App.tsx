import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

import React, { useState } from 'react';
import { 
  Search, Calendar, Users, Globe, MapPin, 
  Star, Menu, X, ShieldCheck, Phone, Mail,
  Send, KeyRound, Plus, Trash2, Edit, Building2, Handshake,
  Facebook, Instagram, MessageCircle, CheckCircle2, FileText, Lock, Map as MapIcon, ExternalLink, Tag,
  ShoppingBag, TrendingUp, Filter, Check, Clock, AlertCircle
} from 'lucide-react';

// Custom TikTok Icon Component
const TikTokIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 1 1 2.31-1.42V8.9a6.34 6.34 0 0 0-1.12-.1A6.34 6.34 0 1 0 14.85 15V8a8.28 8.28 0 0 0 4.74 1.48V6.69z"/>
  </svg>
);

// Logo Component
const XasilLogo = () => (
  <svg viewBox="0 0 420 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 md:h-9 w-auto block shrink-0">
    <defs>
      <linearGradient id="darkGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0B4045" />
        <stop offset="100%" stopColor="#042222" />
      </linearGradient>
      <linearGradient id="richGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5C056" />
        <stop offset="50%" stopColor="#D4A359" />
        <stop offset="100%" stopColor="#996820" />
      </linearGradient>
    </defs>
    <g strokeWidth="18" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 22 15 L 85 85" stroke="url(#darkGreenGrad)" />
      <path d="M 85 15 L 22 85" stroke="url(#darkGreenGrad)" />
      <path d="M 95 15 C 115 15, 128 27, 128 44 L 128 72 C 128 80, 136 80, 155 80" stroke="url(#richGoldGrad)" fill="none" />
    </g>
    <text x="170" y="56" textAnchor="start" fill="#042222" style={{ fontFamily: "Inter, system-ui, sans-serif", fontWeight: 900, fontSize: '38px', letterSpacing: '4px' }}>XASIL</text>
    <text x="170" y="78" textAnchor="start" fill="#B88237" style={{ fontFamily: "Inter, system-ui, sans-serif", fontWeight: 800, fontSize: '13px', letterSpacing: '2px' }}>STABILITY, BOOKED.</text>
  </svg>
);

const DISTRICTS = [
  "Cabdicasiis", "Boondheere", "Dayniile", "Dharkeynley", 
  "Xamar-Jajab", "Xamar-Weyne", "Hodan", "Howlwadaag", 
  "Huriwaa", "Kaaraan", "Kaxda", "Shangaani", 
  "Shibis", "Waaberi", "Wadajir", "Warta-Nabadda", 
  "Yaaqshiid", "Gubadley", "Daarusalaam", "Garasbaaley"
];

const INITIAL_PROPERTIES = [
  {
    id: 1,
    title: "Jazira Palace Hotel",
    district: "Wadajir",
    type: "Stay",
    subType: "Hotel",
    rating: 4.8,
    maxGuests: 4,
    lat: 2.0152,
    lng: 45.3056,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    description: "Hoteelka Jazira Palace wuxuu leeyahay adeegyo casri ah, amni kaamil ah, iyo meel u dhaw garoonka diyaaradaha ee Aadan Adde.",
    amenities: ["Free Wi-Fi", "Koronto 24/7", "Qaboojiye (AC)", "Amni Gaar Ah"],
    rooms: [
      { 
        id: "r1",
        name: "Qolka Standard-ka", 
        originalPrice: 160,
        price: 150, 
        period: "habeenkii",
        capacity: 2,
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=600",
        desc: "Qol aad u habboon oo leh sariir Master ah, Wi-Fi xawaare sare leh, iyo Biyo kulul."
      },
      { 
        id: "r2",
        name: "Deluxe VIP Suite", 
        originalPrice: 280,
        price: 250, 
        period: "habeenkii",
        capacity: 3,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=600",
        desc: "Qol VIP ah oo leh balcony badda eegaya, fadhi gaar ah, iyo adeeg 24 saac ah."
      }
    ]
  },
  {
    id: 2,
    title: "Taleex Guest House",
    district: "Hodan",
    type: "Stay",
    subType: "Guest House",
    rating: 4.8,
    maxGuests: 6,
    lat: 2.0469,
    lng: 45.3182,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    description: "Guest House aad u qurux badan oo ku yaalla badhtamaha Taleex. Wuxuu ku habboon yahay qoysaska ama dadka shaqada u jooga Muqdisho oo doonaya boos qabsi habeennimo.",
    amenities: ["Free Wi-Fi", "Jiko Buuxda", "Koronto 24/7", "Baarkin"],
    rooms: [
      { 
        id: "r4",
        name: "Guest House Buuxa (2 Qol)", 
        originalPrice: 140,
        price: 120, 
        period: "habeenkii",
        capacity: 6,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600",
        desc: "Guri dhamaystiran oo ka kooban 2 qol, fadhiga, jikada, iyo matoor 24 saac ah."
      }
    ]
  },
  {
    id: 3,
    title: "Royal Lido Event Hall",
    district: "Cabdicasiis",
    type: "Hall",
    subType: "Hoolka Xafladaha & Arooska",
    rating: 4.9,
    maxGuests: 500,
    lat: 2.0398,
    lng: 45.3564,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
    description: "Hool weyn oo loogu talagalay aroosyada, shiraarka, iyo barnaamijyada gaarka ah oo u dhaw xeebta Lido.",
    amenities: ["Mawjadaha Codka", "VIP Stage", "Qaboojiye (AC)", "Amni"],
    rooms: [
      { 
        id: "r5",
        name: "Qabashada Hoolka Buuxa", 
        originalPrice: 950,
        price: 800, 
        period: "xafladdii",
        capacity: 500,
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600",
        desc: "Hool ka kooban Stage casri ah, nalalka xafladaha, iyo kuraasta 500 oo qof."
      }
    ]
  }
];

// Initial Demo Orders Data
const INITIAL_ORDERS = [
  // 20 Orders for Jazeera Palace Hotel
  ...Array.from({ length: 20 }).map((_, i) => ({
    id: `XSL-${9000 + i}`,
    propertyTitle: "Jazira Palace Hotel",
    customerName: [
      "Cabdi Cali", "Farxiya Axmed", "Mustafe Guuleed", "Saynab Yuusuf", "Xasan Jaamac",
      "Khadra Maxamed", "Cumar Nuur", "Safiia Cusmaan", "Aadam Dheere", "Layla Barre",
      "Khaalid Sayid", "Nasteexo Ibraahim", "Maxamed Qaasim", "Deeqa Cilmi", "Xamze Xuseen",
      "Yaxye Ismaaciil", "Caasho Cumar", "Bashiir Saacid", "Fadumo Yaasiin", "Sakariye Haashi"
    ][i],
    customerPhone: `+252 61 ${Math.floor(1000000 + Math.random() * 9000000)}`,
    roomName: i % 2 === 0 ? "Qolka Standard-ka" : "Deluxe VIP Suite",
    price: i % 2 === 0 ? 150 : 250,
    period: "habeenkii",
    days: (i % 3) + 1,
    status: i % 4 === 0 ? "Pending" : i % 5 === 0 ? "Cancelled" : "Confirmed",
    date: `2026-08-${22 + (i % 7)}`
  })),
  // Additional Orders for other properties
  {
    id: "XSL-8001",
    propertyTitle: "Taleex Guest House",
    customerName: "Sharmaarke Maxamed",
    customerPhone: "+252 61 5552211",
    roomName: "Guest House Buuxa (2 Qol)",
    price: 120,
    period: "habeenkii",
    days: 2,
    status: "Confirmed",
    date: "2026-08-25"
  },
  {
    id: "XSL-8002",
    propertyTitle: "Royal Lido Event Hall",
    customerName: "Eng. Cabdirashiid",
    customerPhone: "+252 61 9988776",
    roomName: "Qabashada Hoolka Buuxa",
    price: 800,
    period: "xafladdii",
    days: 1,
    status: "Confirmed",
    date: "2026-08-27"
  }
];

export default function App() {
  const [lang, setLang] = useState<'SOM' | 'ENG'>('SOM');
  const [properties, setProperties] = useState(INITIAL_PROPERTIES);
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('Stay');
  
  const [searchDistrict, setSearchDistrict] = useState<string>('Mogadishu');
  const [searchGuests, setSearchGuests] = useState<number>(1);
  const [customHallGuests, setCustomHallGuests] = useState<string>('');
  const [checkInDate, setCheckInDate] = useState<string>('');
  const [checkOutDate, setCheckOutDate] = useState<string>('');

  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminTab, setAdminTab] = useState<'add' | 'manage' | 'orders'>('orders');
  const [orderFilterHotel, setOrderFilterHotel] = useState<string>('All');
  
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'terms' | 'privacy'>('terms');

  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [editingPropertyId, setEditingPropertyId] = useState<number | null>(null);

  const [partnerPropertyName, setPartnerPropertyName] = useState('');
  const [partnerType, setPartnerType] = useState('Hotel');
  const [partnerDistrict, setPartnerDistrict] = useState('Hodan');
  const [partnerOwnerName, setPartnerOwnerName] = useState('');
  const [partnerPhone, setPartnerPhone] = useState('');

  // Admin Form States
  const [newTitle, setNewTitle] = useState('');
  const [newDistrict, setNewDistrict] = useState('Hodan');
  const [newType, setNewType] = useState('Stay');
  const [newSubType, setNewSubType] = useState('Hotel');
  const [newDesc, setNewDesc] = useState('');
  const [newMainImage, setNewMainImage] = useState('');
  const [newLat, setNewLat] = useState<number>(2.0469);
  const [newLng, setNewLng] = useState<number>(45.3182);
  const [newAmenitiesInput, setNewAmenitiesInput] = useState('Free Wi-Fi, Koronto 24/7, Qaboojiye (AC), Amni');
  
  const [newRooms, setNewRooms] = useState([
    { name: 'Standard Room', originalPrice: 160, price: 150, period: 'habeenkii', capacity: 2, image: '', desc: '' }
  ]);

  const [bookingProperty, setBookingProperty] = useState<any>(null);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [detailsProperty, setDetailsProperty] = useState<any>(null);

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const WHATSAPP_NUMBER = "252616335511";

  const t = {
    tagline: lang === 'SOM' ? "Si fudud ku hel meel aad ku hooyato" : "Easily find your perfect stay",
    search: lang === 'SOM' ? "Raadi Hoy" : "Search Properties",
    checkIn: lang === 'SOM' ? "Taariikhda Imaatinka" : "Check-in Date",
    checkOut: lang === 'SOM' ? "Taariikhda Bixitaanka" : "Check-out Date",
    guests: lang === 'SOM' ? "Martida / Tirada Dadka" : "Guests / Capacity",
    destination: lang === 'SOM' ? "Magaalada ama Degmada" : "Destination",
    allDistricts: lang === 'SOM' ? "Mogadishu (Dhamaan Degmooyinka)" : "Mogadishu (All Districts)",
    bookNow: lang === 'SOM' ? "Qabso Hadda" : "Book Now",
    viewDetails: lang === 'SOM' ? "Eeg Qolalka & Sawirada" : "View Rooms & Details",
    total: lang === 'SOM' ? "Wadarta Qiimaha" : "Total Price",
    staysTab: lang === 'SOM' ? "Hoy (Hoteello & Apartments)" : "Stays (Hotels & Apartments)",
    hallsTab: lang === 'SOM' ? "Hoolal (Aroos & Xaflado)" : "Halls (Wedding & Events)",
    emptyStayMsg: lang === 'SOM' 
      ? "Degmadan wali lagama helin wax hoy ah. Fadlan guji batoonka hoose si aad u aragto dhammaan hoyaalka la heli karo."
      : "No stays found in this district. Click below to view all available stays.",
    emptyStayBtn: lang === 'SOM' ? "Eeg Dhammaan Hoyaalka" : "View All Stays",
    emptyHallMsg: lang === 'SOM' 
      ? "Degmadan wali lagama helin wax hool ah. Fadlan guji batoonka hoose si aad u aragto dhammaan hoolalka la heli karo."
      : "No halls found in this district. Click below to view all available halls.",
    emptyHallBtn: lang === 'SOM' ? "Eeg Dhammaan Hoolalka" : "View All Halls",
    partnerBannerTitle: lang === 'SOM' ? "Ma leedahay Hotel, Apartment ama Hool?" : "Do you own a Hotel, Apartment or Hall?",
    partnerBannerSub: lang === 'SOM' ? "Kori ganacsigaaga oo ku soo dar hantidaada platform-ka XASIL si aad u hesho macaamiil toos ah." : "Grow your business by listing your property on XASIL platform.",
    registerPropertyBtn: lang === 'SOM' ? "+ Diwaan-geli Hantidaada" : "+ Register Your Property",
    fullName: lang === 'SOM' ? "Magacaaga Buuxa" : "Full Name",
    phoneNumber: lang === 'SOM' ? "Nambarka Taleefanka (WhatsApp)" : "Phone Number (WhatsApp)",
    sendWhatsapp: lang === 'SOM' ? "U Dir Order-ka WhatsApp-ka XASIL" : "Send Order to XASIL WhatsApp",
  };

  const filteredProperties = properties.filter(p => {
    const matchDistrict = selectedDistrict === 'All' || p.district.toLowerCase() === selectedDistrict.toLowerCase();
    let matchCategory = false;
    if (selectedCategory === 'Stay') {
      matchCategory = p.type === 'Stay' || p.type === 'Hotel' || p.type === 'Guest House' || p.type === 'Apartment';
    } else if (selectedCategory === 'Hall') {
      matchCategory = p.type === 'Hall';
    }
    const effectiveGuests = selectedCategory === 'Hall' && searchGuests === 0 && customHallGuests 
      ? Number(customHallGuests) || 1 
      : searchGuests;
    const matchGuests = effectiveGuests <= 1 || p.maxGuests >= effectiveGuests;
    return matchDistrict && matchCategory && matchGuests;
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSelectedDistrict(searchDistrict === 'Mogadishu' ? 'All' : searchDistrict);
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === 'xasil2026') {
      setIsAuthenticated(true);
    } else {
      alert(lang === 'SOM' ? 'Password-ku waa khalad! (Isticmaal: xasil2026)' : 'Incorrect password! Use xasil2026');
    }
  };

  const handleAddRoomField = () => {
    setNewRooms([...newRooms, { name: '', originalPrice: 120, price: 100, period: 'habeenkii', capacity: 2, image: '', desc: '' }]);
  };

  const handleRemoveRoomField = (index: number) => {
    setNewRooms(newRooms.filter((_, i) => i !== index));
  };

  const handleCreateOrUpdateProperty = (e: React.FormEvent) => {
    e.preventDefault();
    const amenitiesArray = newAmenitiesInput.split(',').map(item => item.trim()).filter(Boolean);

    if (editingPropertyId) {
      setProperties(properties.map(p => {
        if (p.id === editingPropertyId) {
          return {
            ...p,
            title: newTitle,
            district: newDistrict,
            type: newType,
            subType: newType === 'Stay' ? newSubType : 'Event Hall',
            image: newMainImage || p.image,
            description: newDesc,
            lat: Number(newLat),
            lng: Number(newLng),
            amenities: amenitiesArray.length > 0 ? amenitiesArray : p.amenities,
            rooms: newRooms.map((r, idx) => ({ ...r, id: r.id || `nr-${Date.now()}-${idx}` }))
          };
        }
        return p;
      }));
      alert(lang === 'SOM' ? "Hantida waa la cusbooneysiiyay!" : "Property updated successfully!");
      setEditingPropertyId(null);
    } else {
      const newProp = {
        id: Date.now(),
        title: newTitle,
        district: newDistrict,
        type: newType,
        subType: newType === 'Stay' ? newSubType : 'Event Hall',
        rating: 5.0,
        maxGuests: Math.max(...newRooms.map(r => r.capacity || 2)),
        image: newMainImage || "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
        description: newDesc,
        lat: Number(newLat),
        lng: Number(newLng),
        amenities: amenitiesArray.length > 0 ? amenitiesArray : ["Free Wi-Fi", "Koronto 24/7", "Qaboojiye (AC)", "Amni"],
        rooms: newRooms.map((r, idx) => ({ ...r, id: `nr-${Date.now()}-${idx}` }))
      };
      setProperties([newProp, ...properties]);
      alert(lang === 'SOM' ? "Dhismaha iyo Qolalka Cusub waa lagu guuleystay in la geliyo!" : "Property and rooms added successfully!");
    }
    
    // Reset form fields
    setNewTitle('');
    setNewDesc('');
    setNewMainImage('');
    setNewLat(2.0469);
    setNewLng(45.3182);
    setNewAmenitiesInput("Free Wi-Fi, Koronto 24/7, Qaboojiye (AC), Amni");
    setNewRooms([{ name: 'Standard Room', originalPrice: 160, price: 150, period: 'habeenkii', capacity: 2, image: '', desc: '' }]);
  };

  const handleEditClick = (p: any) => {
    setEditingPropertyId(p.id);
    setNewTitle(p.title);
    setNewDistrict(p.district);
    setNewType(p.type);
    setNewSubType(p.subType || 'Hotel');
    setNewDesc(p.description || '');
    setNewMainImage(p.image);
    setNewLat(p.lat || 2.0469);
    setNewLng(p.lng || 45.3182);
    setNewAmenitiesInput(p.amenities ? p.amenities.join(', ') : '');
    setNewRooms(p.rooms || []);
    setAdminTab('add');
  };

  const handleDeleteProperty = (id: number) => {
    if (confirm(lang === 'SOM' ? "Ma hubtaa in aad tirtirto hantidan?" : "Are you sure you want to delete this property?")) {
      setProperties(properties.filter(p => p.id !== id));
    }
  };

  const handleOrderStatusChange = (orderId: string, newStatus: string) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `🤝 *DIWAAN-GELIN HANTI CUSUB (PARTNER)*\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `🏢 *Magaca Hantida:* ${partnerPropertyName}\n` +
      `🏷️ *Nooca:* ${partnerType}\n` +
      `📍 *Degmada:* ${partnerDistrict}\n` +
      `👤 *Magaca Mulkiilaha:* ${partnerOwnerName}\n` +
      `📞 *Taleefanka:* ${partnerPhone}\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `_Fadlan nala soo xiriira si aan hantida ugu soo darno platform-ka XASIL._`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    setIsPartnerOpen(false);
  };

  const calculateDays = () => {
    if (!checkInDate || !checkOutDate) return 1;
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
    return diff > 0 ? diff : 1;
  };

  const generateBookingCode = () => {
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    return `XSL-${randomNum}`;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingCode = generateBookingCode();
    const days = calculateDays();
    const totalPrice = selectedRoom.period === 'habeenkii' ? selectedRoom.price * days : selectedRoom.price;

    // Get Guest count text dynamically
    const displayGuests = selectedCategory === 'Hall' && searchGuests === 0 && customHallGuests 
      ? `${customHallGuests} Qof`
      : `${searchGuests || 1} Qof`;

    // Add order locally to orders state
    const newOrderObj = {
      id: bookingCode,
      propertyTitle: bookingProperty.title,
      customerName,
      customerPhone,
      roomName: selectedRoom.name,
      price: selectedRoom.price,
      period: selectedRoom.period,
      days,
      status: "Pending",
      date: new Date().toISOString().split('T')[0]
    };
    setOrders([newOrderObj, ...orders]);

    const message = `🔔 *ORDER CUSUB - XASIL BOOKING*\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `🆔 *Booking Ref:* \`${bookingCode}\`\n` +
      `👤 *Magaca Macmiilka:* ${customerName}\n` +
      `📞 *Taleefanka:* ${customerPhone}\n\n` +
      `🏨 *Huteelka/Dhismaha:* ${bookingProperty.title}\n` +
      `📍 *Degmada:* ${bookingProperty.district}\n` +
      `🛏️ *Qolka/Hoolka:* ${selectedRoom.name}\n` +
      `👥 *Tirada Martida/Dadka:* ${displayGuests}\n` +
      `📅 *Check-In:* ${checkInDate || 'U ma caymin'}\n` +
      `📅 *Check-Out:* ${checkOutDate || 'U ma caymin'}\n` +
      `⏱️ *Muddada:* ${selectedRoom.period === 'habeenkii' ? `${days} Habeen` : '1 Xaflad'}\n` +
      `💰 *Wadarta Qiimaha:* $${totalPrice} *(Ku bixinayo Hotel-ka)*\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `_Macmiil, waanu helnay dalabkaaga. Waanu xaqiijinaynaa booking-kaaga, waxaana kuugu soo jawaabi doonaa sida ugu dhakhsaha badan. Mahadsanid inaad XASIL dooratay._`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    setBookingProperty(null);
  };

  // Helper calculation for orders stats
  const filteredOrdersList = orderFilterHotel === 'All' 
    ? orders 
    : orders.filter(o => o.propertyTitle.toLowerCase() === orderFilterHotel.toLowerCase());

  // Weekly Stats calculation (Grouped by Property)
  const propertyWeeklyCounts: { [key: string]: number } = {};
  orders.forEach(o => {
    propertyWeeklyCounts[o.propertyTitle] = (propertyWeeklyCounts[o.propertyTitle] || 0) + 1;
  });

  const maxOrdersCount = Math.max(...Object.values(propertyWeeklyCounts), 1);

  return (
    <div className="min-h-screen bg-[#F7F6F0] text-[#0D2B2A] font-sans relative flex flex-col justify-between">
      <div>
        {/* HEADER */}
        <header className="bg-white text-slate-800 sticky top-0 z-40 border-b border-slate-200/80 shadow-sm py-2">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-9">
            <div className="flex items-center cursor-pointer" onClick={() => { setSelectedDistrict('All'); setSelectedCategory('Stay'); setSearchGuests(1); setCustomHallGuests(''); }}>
              <XasilLogo />
            </div>

            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setLang(lang === 'SOM' ? 'ENG' : 'SOM')}
                className="flex items-center space-x-1 border border-emerald-800/20 bg-emerald-50 px-2.5 py-1 rounded-full text-[11px] font-bold transition text-emerald-900 hover:bg-emerald-100 shadow-sm shrink-0"
              >
                <Globe className="w-3 h-3 text-emerald-700 shrink-0" />
                <span>{lang === 'SOM' ? 'ENG' : 'SOM'}</span>
              </button>

              <button onClick={() => setMenuOpen(true)} className="text-[#042222] p-1.5 hover:text-emerald-700 transition">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="fixed inset-0 bg-[#042222] text-white z-50 flex flex-col justify-between animate-in fade-in duration-200">
            <div>
              <div className="flex items-center justify-between py-2.5 px-4 border-b border-emerald-900/60 bg-white shadow-sm">
                <div className="flex items-center cursor-pointer" onClick={() => setMenuOpen(false)}>
                  <XasilLogo />
                </div>
                <button 
                  onClick={() => setMenuOpen(false)} 
                  className="bg-slate-100 text-slate-800 p-1.5 rounded-full hover:bg-slate-200 transition border border-slate-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6 text-left">
                <button 
                  onClick={() => { setSelectedCategory('Stay'); setSelectedDistrict('All'); setSearchGuests(1); setCustomHallGuests(''); setMenuOpen(false); }}
                  className="block text-left w-full group"
                >
                  <span className="block text-xl font-bold text-white group-hover:text-[#D4A359] transition">Stays</span>
                  <span className="text-xs text-slate-400 font-normal">Hotels, Apartments & Guest Houses</span>
                </button>

                <button 
                  onClick={() => { setSelectedCategory('Hall'); setSelectedDistrict('All'); setSearchGuests(25); setCustomHallGuests(''); setMenuOpen(false); }}
                  className="block text-left w-full group"
                >
                  <span className="block text-xl font-bold text-white group-hover:text-[#D4A359] transition">Halls</span>
                  <span className="text-xs text-slate-400 font-normal">Wedding & Event Venues</span>
                </button>

                <button 
                  onClick={() => { alert('Contact Support: WhatsApp +252 61 633 5511'); setMenuOpen(false); }}
                  className="block text-xl font-bold text-slate-200 hover:text-[#D4A359] transition"
                >
                  {lang === 'SOM' ? 'Caawimaad & Taageero' : 'Help & Support'}
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4 pt-6 border-t border-emerald-900 bg-[#031B1B]">
              <button 
                onClick={() => { setIsAdminOpen(true); setMenuOpen(false); }}
                className="text-sm font-semibold text-emerald-300 hover:text-white flex items-center space-x-2"
              >
                <KeyRound className="w-4 h-4" />
                <span>Admin Portal</span>
              </button>
            </div>
          </div>
        )}

        {/* HERO SECTION */}
        <section className="bg-white text-[#042222] pt-4 pb-4 px-4 border-b border-slate-200">
          <div className="max-w-md mx-auto text-center mb-4">
            <h1 className="text-xl md:text-2xl font-black tracking-tight text-[#042222] whitespace-nowrap">
              {t.tagline}
            </h1>
          </div>

          {/* CATEGORY TABS */}
          <div className="max-w-md mx-auto mb-4">
            <div className="grid grid-cols-2 gap-3 pb-1">
              {[
                { id: 'Stay', label: t.staysTab },
                { id: 'Hall', label: t.hallsTab }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setCustomHallGuests('');
                    if (cat.id === 'Stay') setSearchGuests(1);
                    else setSearchGuests(25);
                  }}
                  className={`py-2.5 px-2 rounded-2xl text-xs font-black transition text-center truncate shadow-sm ${
                    selectedCategory === cat.id 
                      ? 'bg-[#042222] text-[#D4A359] border border-[#042222]' 
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* SEARCH FORM */}
          <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto bg-slate-50 border border-slate-200 text-white p-4 rounded-3xl shadow-xl space-y-3">
            <div>
              <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider block mb-1">{t.destination}</label>
              <div className="bg-[#042222] rounded-2xl p-2.5 flex items-center justify-between border border-[#0B4045]">
                <select 
                  value={searchDistrict}
                  onChange={(e) => setSearchDistrict(e.target.value)}
                  className="bg-transparent font-bold text-white text-sm w-full outline-none cursor-pointer"
                >
                  <option value="Mogadishu" className="text-slate-900">{t.allDistricts}</option>
                  {DISTRICTS.map(d => <option key={d} value={d} className="text-slate-900">{d}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider block mb-1">{t.checkIn}</label>
                <div className="bg-[#042222] rounded-2xl p-2.5 flex items-center space-x-2 border border-[#0B4045]">
                  <Calendar className="w-4 h-4 text-[#D4A359] shrink-0" />
                  <input 
                    type="date" 
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="bg-transparent text-xs font-semibold w-full outline-none text-white cursor-pointer" 
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider block mb-1">{t.checkOut}</label>
                <div className="bg-[#042222] rounded-2xl p-2.5 flex items-center space-x-2 border border-[#0B4045]">
                  <Calendar className="w-4 h-4 text-[#D4A359] shrink-0" />
                  <input 
                    type="date" 
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="bg-transparent text-xs font-semibold w-full outline-none text-white cursor-pointer" 
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider block mb-1">{t.guests}</label>
              <div className="bg-[#042222] rounded-2xl p-2.5 border border-[#0B4045] space-y-2">
                <select 
                  value={searchGuests}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setSearchGuests(val);
                    if (val !== 0) setCustomHallGuests('');
                  }}
                  className="bg-transparent text-sm font-bold text-white w-full outline-none cursor-pointer"
                >
                  {selectedCategory === 'Stay' ? (
                    <>
                      <option value={1} className="text-slate-900">1 qof</option>
                      <option value={2} className="text-slate-900">2 qof</option>
                      <option value={3} className="text-slate-900">3 qof</option>
                      <option value={4} className="text-slate-900">4+ qof</option>
                    </>
                  ) : (
                    <>
                      <option value={25} className="text-slate-900">25 qof</option>
                      <option value={50} className="text-slate-900">50 qof</option>
                      <option value={100} className="text-slate-900">100+ qof</option>
                      <option value={0} className="text-slate-900">Qor tirada martida (Custom)</option>
                    </>
                  )}
                </select>

                {selectedCategory === 'Hall' && searchGuests === 0 && (
                  <input 
                    type="number"
                    placeholder="Qor tirada martida (e.g. 150)"
                    value={customHallGuests}
                    onChange={(e) => setCustomHallGuests(e.target.value)}
                    className="w-full bg-[#083636] border border-[#D4A359]/40 text-white rounded-xl p-2 text-xs font-semibold placeholder-slate-400 outline-none"
                  />
                )}
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#042222] hover:bg-[#083636] text-[#D4A359] font-black py-3 rounded-full text-base transition shadow-md mt-1 border border-[#D4A359]/30"
            >
              {t.search}
            </button>
          </form>
        </section>

        {/* PROPERTY LISTING */}
        <section className="max-w-7xl mx-auto px-4 py-6">
          {filteredProperties.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 text-center max-w-md mx-auto shadow-sm my-2 space-y-4">
              <MapPin className="w-8 h-8 text-[#042222] mx-auto opacity-60" />
              <p className="text-xs md:text-sm font-bold text-slate-800 leading-relaxed">
                {selectedCategory === 'Stay' ? t.emptyStayMsg : t.emptyHallMsg}
              </p>
              <button 
                onClick={() => { setSelectedDistrict('All'); setSearchDistrict('Mogadishu'); setSearchGuests(1); setCustomHallGuests(''); }}
                className="bg-[#042222] hover:bg-[#083636] text-[#D4A359] text-xs font-black px-6 py-3 rounded-full transition shadow-md border border-[#D4A359]/30"
              >
                {selectedCategory === 'Stay' ? t.emptyStayBtn : t.emptyHallBtn}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((p) => {
                const firstRoom = p.rooms[0] || { price: 150, originalPrice: 160, period: 'habeenkii' };

                return (
                  <div key={p.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                    <div>
                      <div className="relative h-52 cursor-pointer" onClick={() => setDetailsProperty(p)}>
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                        <span className="absolute top-3 left-3 bg-[#042222]/90 text-[#D4A359] text-[11px] font-bold px-3 py-1 rounded-full border border-[#D4A359]/30">
                          {p.district} District
                        </span>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-[#D4A359] uppercase tracking-wider">
                            {p.subType || (p.type === 'Hall' ? 'Hoolka Xafladaha' : p.type)}
                          </span>
                          <div className="flex items-center space-x-1 text-amber-500 text-xs font-bold">
                            <Star className="w-3.5 h-3.5 fill-amber-500" />
                            <span>{p.rating}</span>
                          </div>
                        </div>

                        <h3 className="font-extrabold text-[#042222] text-lg mb-2">{p.title}</h3>

                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {p.amenities?.map((a, i) => (
                            <span key={i} className="text-[10px] font-extrabold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                              {a}
                            </span>
                          ))}
                        </div>

                        <div className="bg-[#F7F6F0] p-3 rounded-2xl border border-slate-200/60 mb-4 space-y-2">
                          <span className="text-[10px] font-extrabold text-slate-400 block uppercase">
                            {lang === 'SOM' ? 'Noocyada Qolalka/Hoolka & Qiimaha:' : 'Room Types & Prices:'}
                          </span>
                          {p.rooms.map((r: any, idx: number) => (
                            <div key={idx} className="flex justify-between items-center text-xs border-b border-slate-200/50 pb-1.5 last:border-b-0 last:pb-0">
                              <span className="text-slate-700 font-semibold">{r.name}</span>
                              <div className="flex items-center space-x-1.5">
                                {r.originalPrice && r.originalPrice > r.price && (
                                  <span className="text-slate-400 line-through text-[11px] font-medium">
                                    ${r.originalPrice}
                                  </span>
                                )}
                                <span className="font-black text-[#042222]">
                                  ${r.price}/{r.period}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold block uppercase">{lang === 'SOM' ? 'Ka Anba-baxda' : 'Starts from'}</span>
                        <div className="flex items-baseline space-x-1.5">
                          {firstRoom.originalPrice && firstRoom.originalPrice > firstRoom.price && (
                            <span className="text-xs text-slate-400 line-through font-medium">
                              ${firstRoom.originalPrice}
                            </span>
                          )}
                          <p className="text-xl font-black text-[#042222]">
                            ${firstRoom.price} <span className="text-xs font-normal text-slate-500">/{firstRoom.period}</span>
                          </p>
                        </div>
                      </div>

                      <button 
                        onClick={() => setDetailsProperty(p)}
                        className="bg-[#042222] hover:bg-[#083636] text-[#D4A359] px-5 py-2.5 rounded-full text-xs font-bold transition shadow-sm"
                      >
                        {t.viewDetails}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* PARTNER REGISTER BANNER */}
        <section className="max-w-7xl mx-auto px-4 py-4 mb-6">
          <div className="bg-gradient-to-r from-[#042222] to-[#0B4045] rounded-3xl p-6 md:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#D4A359]/30">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 bg-[#D4A359]/20 text-[#D4A359] px-3 py-1 rounded-full text-xs font-bold border border-[#D4A359]/30">
                <Handshake className="w-3.5 h-3.5" />
                <span>XASIL Partner Network</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white">{t.partnerBannerTitle}</h3>
              <p className="text-xs md:text-sm text-slate-300 max-w-xl leading-relaxed">{t.partnerBannerSub}</p>
            </div>
            <button 
              onClick={() => setIsPartnerOpen(true)}
              className="bg-[#D4A359] hover:bg-[#c09147] text-[#042222] font-black px-6 py-3.5 rounded-full text-xs transition shadow-lg shrink-0 w-full md:w-auto text-center"
            >
              {t.registerPropertyBtn}
            </button>
          </div>
        </section>
      </div>

      {/* FOOTER SECTION */}
      <footer className="bg-[#031B1B] text-white pt-10 pb-8 px-6 border-t border-[#0A3D3F]">
        <div className="max-w-6xl mx-auto space-y-8 text-left">
          
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Connect With Us</h4>
            <div className="flex items-center space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#083636] hover:bg-[#0B4045] flex items-center justify-center text-white transition border border-[#0F4C4E]">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#083636] hover:bg-[#0B4045] flex items-center justify-center text-white transition border border-[#0F4C4E]">
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#083636] hover:bg-[#0B4045] flex items-center justify-center text-white transition border border-[#0F4C4E]">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#083636] hover:bg-[#0B4045] flex items-center justify-center text-white transition border border-[#0F4C4E]">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white tracking-wide">Company</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <button 
                  onClick={() => alert("XASIL waa madal casri ah oo kugu xireysa hoteellada, apartments-ka, iyo hoolalka Somaliland iyo Soomaaliya.")} 
                  className="hover:text-[#D4A359] transition"
                >
                  About Xasil
                </button>
              </li>
              <li>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="hover:text-[#D4A359] transition block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white tracking-wide">Legal</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <button 
                  onClick={() => { setLegalTab('terms'); setIsLegalOpen(true); }} 
                  className="hover:text-[#D4A359] transition"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setLegalTab('privacy'); setIsLegalOpen(true); }} 
                  className="hover:text-[#D4A359] transition"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-[#0A3D3F]/80 text-center space-y-3">
            <p className="text-xs text-slate-400 font-medium">© 2026 XASIL. All rights reserved.</p>
            <button 
              onClick={() => setIsAdminOpen(true)}
              className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-white transition font-medium"
            >
              <KeyRound className="w-3.5 h-3.5 text-slate-400" />
              <span>Admin Portal</span>
            </button>
          </div>

        </div>
      </footer>

      {/* DETAILS MODAL */}
      {detailsProperty && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl">
            <button onClick={() => setDetailsProperty(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 p-2 rounded-full z-10">
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-[#D4A359] uppercase tracking-wider">{detailsProperty.subType || detailsProperty.type}</span>
            <h3 className="text-2xl font-black text-slate-900 mb-1">{detailsProperty.title}</h3>
            
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3 mt-1">
              <p className="text-xs text-slate-500 flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-[#042222] shrink-0" />
                <span>Degmada {detailsProperty.district}, Mogadishu</span>
              </p>

              <a 
                href={`https://www.google.com/maps?q=${detailsProperty.lat || 2.0152},${detailsProperty.lng || 45.3056}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-[#042222] hover:bg-[#083636] text-[#D4A359] px-3 py-1.5 rounded-xl text-xs font-bold border border-[#D4A359]/30 transition shadow-sm"
              >
                <MapIcon className="w-3.5 h-3.5 text-[#D4A359]" />
                <span>Goobta Map-ka</span>
                <ExternalLink className="w-3 h-3 text-[#D4A359]" />
              </a>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">{detailsProperty.description}</p>

            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">
                {lang === 'SOM' ? 'Dooro Qolka ama Hoolka Aad Rabto:' : 'Select Room or Hall Option:'}
              </h4>
              {detailsProperty.rooms.map((room: any) => (
                <div key={room.id} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 hover:border-[#042222] transition">
                  <div className="h-40 w-full relative">
                    <img src={room.image || detailsProperty.image} alt={room.name} className="w-full h-full object-cover" />
                    
                    <div className="absolute bottom-2 right-2 bg-[#042222] text-[#D4A359] font-extrabold text-xs px-3 py-1.5 rounded-full shadow-md border border-[#D4A359]/30 flex items-center space-x-1.5">
                      {room.originalPrice && room.originalPrice > room.price && (
                        <span className="text-slate-300 line-through text-[11px] font-normal">
                          ${room.originalPrice}
                        </span>
                      )}
                      <span>${room.price} /{room.period}</span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <h5 className="font-extrabold text-slate-900 text-base">{room.name}</h5>
                      {room.originalPrice && room.originalPrice > room.price && (
                        <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          -{Math.round(((room.originalPrice - room.price) / room.originalPrice) * 100)}% Discount
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">{room.desc}</p>

                    <button 
                      onClick={() => {
                        setBookingProperty(detailsProperty);
                        setSelectedRoom(room);
                        setDetailsProperty(null);
                      }}
                      className="w-full bg-[#042222] hover:bg-[#083636] text-[#D4A359] font-bold py-2.5 rounded-xl text-xs transition mt-2 flex items-center justify-center space-x-1.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4A359]" />
                      <span>{t.bookNow} (${room.price} /{room.period})</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PARTNER REGISTRATION MODAL */}
      {isPartnerOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 relative shadow-2xl">
            <button onClick={() => setIsPartnerOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 p-2 rounded-full">
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 mb-2">
              <Building2 className="w-6 h-6 text-[#042222]" />
              <h3 className="text-xl font-extrabold text-slate-900">Diwaan-geli Hantidaada</h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">Ku soo dar Hotel-kaaga ama Hoolkaaga XASIL si aad u hesho macaamiil toos ah.</p>

            <form onSubmit={handlePartnerSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Magaca Hotel-ka / Hoolka</label>
                <input 
                  type="text" required placeholder="e.g. Jazira Hotel"
                  value={partnerPropertyName} onChange={(e) => setPartnerPropertyName(e.target.value)}
                  className="w-full border rounded-xl p-3 text-xs font-semibold bg-slate-50"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Nooca</label>
                  <select 
                    value={partnerType} onChange={(e) => setPartnerType(e.target.value)}
                    className="w-full border rounded-xl p-3 text-xs font-semibold bg-slate-50"
                  >
                    <option value="Hotel">Hotel</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Guest House">Guest House</option>
                    <option value="Event Hall">Hoolka Xafladaha</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Degmada</label>
                  <select 
                    value={partnerDistrict} onChange={(e) => setPartnerDistrict(e.target.value)}
                    className="w-full border rounded-xl p-3 text-xs font-semibold bg-slate-50"
                  >
                    {DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Magaca Mulkiilaha ama Maamulaha</label>
                <input 
                  type="text" required placeholder="Magacaaga Buuxa"
                  value={partnerOwnerName} onChange={(e) => setPartnerOwnerName(e.target.value)}
                  className="w-full border rounded-xl p-3 text-xs font-semibold bg-slate-50"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Nambarka WhatsApp-ka</label>
                <input 
                  type="tel" required placeholder="+252 61 ..."
                  value={partnerPhone} onChange={(e) => setPartnerPhone(e.target.value)}
                  className="w-full border rounded-xl p-3 text-xs font-semibold bg-slate-50"
                />
              </div>

              <button type="submit" className="w-full bg-[#042222] hover:bg-[#083636] text-[#D4A359] font-bold py-3.5 rounded-full text-xs flex items-center justify-center space-x-2 transition mt-2">
                <Send className="w-4 h-4" />
                <span>U Dir WhatsApp-ka XASIL</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* LEGAL MODAL */}
      {isLegalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] overflow-y-auto p-6 relative shadow-2xl text-left">
            <button onClick={() => setIsLegalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 p-2 rounded-full">
              <X className="w-5 h-5" />
            </button>

            <div className="flex border-b border-slate-200 mb-4">
              <button 
                onClick={() => setLegalTab('terms')}
                className={`py-2 px-4 text-xs font-bold border-b-2 transition ${
                  legalTab === 'terms' ? 'border-[#042222] text-[#042222]' : 'border-transparent text-slate-400'
                }`}
              >
                Terms of Service
              </button>
              <button 
                onClick={() => setLegalTab('privacy')}
                className={`py-2 px-4 text-xs font-bold border-b-2 transition ${
                  legalTab === 'privacy' ? 'border-[#042222] text-[#042222]' : 'border-transparent text-slate-400'
                }`}
              >
                Privacy Policy
              </button>
            </div>

            {legalTab === 'terms' ? (
              <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                <h4 className="font-extrabold text-slate-900 text-sm">Terms of Service — Shuruudaha Adeegga</h4>
                <p className="font-semibold text-slate-800">TL;DR</p>
                <ul className="list-disc pl-4 space-y-1.5">
                  <li>XASIL waa madal kuu oggolaanaysa inaad raadiso hoteello, aragto adeegyada iyo qiimaha, kadibna samaysato booking.</li>
                  <li>XASIL ma aha milkiilaha hoteellada; hotel kasta ayaa mas'uul ka ah adeegga uu bixiyo.</li>
                  <li>Booking-kaaga wuxuu ku xirnaanayaa availability-ga iyo policies-ka hotelka.</li>
                  <li>Pay at Hotel: lacagta waxaad si toos ah ugu bixinaysaa hotelka, iyadoo la raacayo shuruudahooda.</li>
                  <li>Cancellation iyo refund waxay ku xirnaanayaan policy-ga hotelka ee lagu tusay markaad booking samaynaysay.</li>
                  <li>Isticmaaluhu waa inuu bixiyo xog sax ah, mana isticmaali karo XASIL si khiyaano ama sharci-darro ah.</li>
                  <li>XASIL waxay xaq u leedahay inay joojiso ama diido booking shaki leh ama jebinaya Terms-ka.</li>
                  <li>XASIL waxay isku dayaysaa inay xogta hotelka iyo availability-ga ka dhigto mid sax ah, laakiin khaladaad ama isbeddello way dhici karaan.</li>
                  <li>Markaad booking samayso, waxaad oggolaanaysaa Terms-kan.</li>
                </ul>
              </div>
            ) : (
              <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                <h4 className="font-extrabold text-slate-900 text-sm">Privacy Policy — Siyaasadda Asturnaanta</h4>
                <p className="font-semibold text-slate-800">TL;DR</p>
                <ul className="list-disc pl-4 space-y-1.5">
                  <li>XASIL waxay ururin kartaa magaca, telefoonka, iyo xogta booking-kaaga.</li>
                  <li>Xogtan waxaa loo isticmaalaa booking-ka, xiriirka customer-ka, support-ka iyo amniga platform-ka.</li>
                  <li>Xogta lagama iibinayo third parties.</li>
                  <li>Xogta lagama maarmaanka ah waxaa lala wadaagi karaa hotelka aad booking-ka ka samaysatay si ay kuu siiyaan adeegga.</li>
                  <li>XASIL waxay isticmaali kartaa cookies iyo xog farsamo sida browser/device information si website-ku u shaqeeyo una horumaro.</li>
                  <li>Waxaan qaadnaa tallaabooyin amni oo macquul ah si loo ilaaliyo xogtaada, laakiin internet-ka 100% ammaan ma aha.</li>
                  <li>Xogta waxaa la hayn doonaa inta loo baahan yahay si loo bixiyo adeegga, loo xalliyo disputes, loona buuxiyo waajibaadka sharci.</li>
                  <li>Waxaad xaq u leedahay inaad codsato in xogtaada la saxo ama, marka ay khuseyso, la tirtiro.</li>
                  <li>Haddii Privacy Policy-ga la beddelo, version-ka cusub ayaa lagu daabici doonaa website-ka.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ADMIN MODAL WITH ORDERS DASHBOARD & STATS */}
      {isAdminOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 relative">
            <button onClick={() => setIsAdminOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 p-2 rounded-full z-10">
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 mb-4">
              <ShieldCheck className="w-6 h-6 text-[#042222] shrink-0" />
              <h3 className="text-base font-black text-slate-900">Portal-ka Maamulaha XASIL</h3>
            </div>

            {!isAuthenticated ? (
              <form onSubmit={handleAdminLogin} className="space-y-4">
                <p className="text-xs text-slate-500">Geli Password-ka Admin-ka si aad hantida cusub ugu kireyso ama ugu maamusho.</p>
                <div>
                  <input 
                    type="password" 
                    placeholder="Password (e.g. xasil2026)"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    className="w-full border rounded-2xl p-3.5 text-xs font-semibold focus:outline-emerald-600 bg-slate-50"
                  />
                </div>
                <button type="submit" className="w-full bg-[#042222] text-[#D4A359] font-bold py-3.5 rounded-full text-xs">
                  Geli Admin Portal
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                {/* ADMIN TABS NAVIGATION */}
                <div className="grid grid-cols-3 gap-1.5 bg-slate-100 p-1 rounded-2xl text-center">
                  <button 
                    type="button"
                    onClick={() => setAdminTab('orders')}
                    className={`py-2 px-1 rounded-xl text-[11px] font-bold transition flex items-center justify-center space-x-1 truncate ${
                      adminTab === 'orders' ? 'bg-[#042222] text-[#D4A359] shadow-sm' : 'text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
                    <span>Dalabaadka ({orders.length})</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => { setAdminTab('add'); setEditingPropertyId(null); }}
                    className={`py-2 px-1 rounded-xl text-[11px] font-bold transition flex items-center justify-center space-x-1 truncate ${
                      adminTab === 'add' ? 'bg-[#042222] text-[#D4A359] shadow-sm' : 'text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <Plus className="w-3.5 h-3.5 shrink-0" />
                    <span>{editingPropertyId ? 'Beddel Hantida' : 'Ku Dar Hanti'}</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setAdminTab('manage')}
                    className={`py-2 px-1 rounded-xl text-[11px] font-bold transition flex items-center justify-center space-x-1 truncate ${
                      adminTab === 'manage' ? 'bg-[#042222] text-[#D4A359] shadow-sm' : 'text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Hantida ({properties.length})</span>
                  </button>
                </div>

                {/* TAB 1: ORDERS DASHBOARD & SHAXDA ASBUUCLAHA */}
                {adminTab === 'orders' && (
                  <div className="space-y-5 text-left">
                    {/* WEEKLY STATS CHART CARD */}
                    <div className="bg-gradient-to-br from-[#042222] to-[#083636] p-4 rounded-2xl text-white shadow-md border border-[#D4A359]/30">
                      <div className="flex items-center justify-between mb-3 border-b border-slate-700/60 pb-2">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-[#D4A359]" />
                          <h4 className="text-xs font-black tracking-wide text-white uppercase">Shaxda Tirada Asbuuclaha (Weekly Orders)</h4>
                        </div>
                        <span className="text-[10px] bg-[#D4A359]/20 text-[#D4A359] px-2 py-0.5 rounded-md font-bold border border-[#D4A359]/40">
                          Asbuucan
                        </span>
                      </div>

                      <div className="space-y-3 pt-1">
                        {Object.entries(propertyWeeklyCounts).map(([title, count]) => {
                          const percentage = Math.round((count / maxOrdersCount) * 100);
                          return (
                            <div key={title} className="space-y-1">
                              <div className="flex justify-between items-center text-xs">
                                <span className="font-bold text-slate-200">{title}</span>
                                <span className="font-black text-[#D4A359]">{count} Orders</span>
                              </div>
                              <div className="w-full bg-[#031B1B] h-2.5 rounded-full overflow-hidden border border-slate-700">
                                <div 
                                  className="bg-gradient-to-r from-[#D4A359] to-[#F5C056] h-full rounded-full transition-all duration-500" 
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* FILTER & ORDERS LIST */}
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 pb-2">
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                          Dhamaan Dalabaadka Soo Dhacay ({filteredOrdersList.length})
                        </h4>

                        <div className="flex items-center space-x-2 w-full sm:w-auto">
                          <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <select 
                            value={orderFilterHotel} 
                            onChange={(e) => setOrderFilterHotel(e.target.value)}
                            className="bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold rounded-xl p-1.5 outline-none w-full sm:w-auto"
                          >
                            <option value="All">Dhamaan Hoteellada</option>
                            {properties.map(p => (
                              <option key={p.id} value={p.title}>{p.title}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2.5 max-h-[350px] overflow-y-auto pr-1">
                        {filteredOrdersList.length === 0 ? (
                          <p className="text-xs text-slate-500 py-4 text-center">Wax dalab ah kama helin huteelkan ama filter-kaaga.</p>
                        ) : (
                          filteredOrdersList.map((ord) => {
                            const totalVal = ord.period === 'habeenkii' ? ord.price * (ord.days || 1) : ord.price;

                            return (
                              <div key={ord.id} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-2 hover:border-[#042222] transition">
                                <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                                  <div>
                                    <span className="text-[10px] font-black text-slate-400 block">{ord.id} • {ord.date}</span>
                                    <h5 className="text-xs font-black text-[#042222]">{ord.propertyTitle}</h5>
                                  </div>
                                  <div className="flex items-center space-x-1.5">
                                    <select 
                                      value={ord.status}
                                      onChange={(e) => handleOrderStatusChange(ord.id, e.target.value)}
                                      className={`text-[10px] font-bold px-2 py-1 rounded-full outline-none cursor-pointer border ${
                                        ord.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-800 border-emerald-300' :
                                        ord.status === 'Pending' ? 'bg-amber-100 text-amber-800 border-amber-300' :
                                        'bg-red-100 text-red-800 border-red-300'
                                      }`}
                                    >
                                      <option value="Confirmed">Confirmed</option>
                                      <option value="Pending">Pending</option>
                                      <option value="Cancelled">Cancelled</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 text-xs">
                                  <div>
                                    <span className="text-[10px] font-bold text-slate-400 block">MACMIILKA</span>
                                    <p className="font-bold text-slate-800">{ord.customerName}</p>
                                    <p className="text-[11px] text-slate-500 font-semibold">{ord.customerPhone}</p>
                                  </div>

                                  <div className="text-right">
                                    <span className="text-[10px] font-bold text-slate-400 block">DETAILS & VALUE</span>
                                    <p className="font-bold text-slate-800">{ord.roomName}</p>
                                    <p className="text-xs font-black text-[#042222]">${totalVal} ({ord.days} {ord.period === 'habeenkii' ? 'Habeen' : 'Xaflad'})</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: ADD PROPERTY */}
                {adminTab === 'add' && (
                  <form onSubmit={handleCreateOrUpdateProperty} className="space-y-3.5 text-left">
                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider">
                      {editingPropertyId ? 'Wax ka Beddel Hantida' : 'Ku Dar Hoy (Stay) ama Hall'}
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">MAGACA DHISMAHA/HOOLKA</label>
                        <input 
                          type="text" required placeholder="Dhismaha ama Hoolka..." 
                          value={newTitle} onChange={(e) => setNewTitle(e.target.value)}
                          className="w-full border rounded-xl p-2.5 text-xs font-semibold bg-slate-50"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">DEGMADA</label>
                        <select 
                          value={newDistrict} onChange={(e) => setNewDistrict(e.target.value)}
                          className="w-full border rounded-xl p-2.5 text-xs font-semibold bg-slate-50"
                        >
                          {DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">CATEGORY MAIN</label>
                        <select 
                          value={newType} onChange={(e) => setNewType(e.target.value)}
                          className="w-full border rounded-xl p-2.5 text-xs font-semibold bg-slate-50"
                        >
                          <option value="Stay">Stay (Hoy)</option>
                          <option value="Hall">Hall (Event & Wedding)</option>
                        </select>
                      </div>

                      {newType === 'Stay' && (
                        <div>
                          <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">NOOCA HOYGA (SUB-TYPE)</label>
                          <select 
                            value={newSubType} onChange={(e) => setNewSubType(e.target.value)}
                            className="w-full border rounded-xl p-2.5 text-xs font-semibold bg-slate-50"
                          >
                            <option value="Hotel">Hotel</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Guest House">Guest House</option>
                          </select>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">1. SAWIRKA MAIN-KA (URL)</label>
                      <input 
                        type="url" placeholder="https://images.unsplash.com/..." 
                        value={newMainImage} onChange={(e) => setNewMainImage(e.target.value)}
                        className="w-full border rounded-xl p-2.5 text-xs font-semibold bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">2. DESCRIPTION (FAAHFAAHINTA DHISMAHA)</label>
                      <textarea 
                        rows={2} placeholder="Qor sharaxaad kooban oo ku saabsan hantida..."
                        value={newDesc} onChange={(e) => setNewDesc(e.target.value)}
                        className="w-full border rounded-xl p-2.5 text-xs font-semibold bg-slate-50"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">3. LATITUDE (Map)</label>
                        <input 
                          type="number" step="any" placeholder="2.0469"
                          value={newLat} onChange={(e) => setNewLat(Number(e.target.value))}
                          className="w-full border rounded-xl p-2.5 text-xs font-semibold bg-slate-50"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">LONGITUDE (Map)</label>
                        <input 
                          type="number" step="any" placeholder="45.3182"
                          value={newLng} onChange={(e) => setNewLng(Number(e.target.value))}
                          className="w-full border rounded-xl p-2.5 text-xs font-semibold bg-slate-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">4. AMENITIES (Adeegyada: comma separated)</label>
                      <input 
                        type="text" placeholder="Free Wi-Fi, Koronto 24/7, Qaboojiye (AC)"
                        value={newAmenitiesInput} onChange={(e) => setNewAmenitiesInput(e.target.value)}
                        className="w-full border rounded-xl p-2.5 text-xs font-semibold bg-slate-50"
                      />
                    </div>

                    <div className="border-t border-slate-200 pt-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-black text-slate-900">5. Qolalka, Sawirada & Qiimaha Asalka/Discount-ka</span>
                        <button 
                          type="button" 
                          onClick={handleAddRoomField} 
                          className="text-[11px] text-[#042222] font-bold flex items-center space-x-1 hover:underline"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Ku dar Qol/Hool</span>
                        </button>
                      </div>

                      <div className="space-y-3">
                        {newRooms.map((rm, idx) => (
                          <div key={idx} className="bg-slate-100 p-3 rounded-2xl space-y-2 relative border border-slate-200">
                            {newRooms.length > 1 && (
                              <button type="button" onClick={() => handleRemoveRoomField(idx)} className="absolute top-2.5 right-2.5 text-red-500 hover:text-red-700">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                            <div className="space-y-2">
                              <input 
                                type="text" placeholder="Magaca Qolka/Hoolka (e.g. Standard Room)" required 
                                value={rm.name} onChange={(e) => {
                                  const updated = [...newRooms];
                                  updated[idx].name = e.target.value;
                                  setNewRooms(updated);
                                }}
                                className="w-full border p-2 rounded-xl text-xs font-semibold bg-white"
                              />

                              <div className="grid grid-cols-2 gap-2">
                                <input 
                                  type="url" placeholder="Sawirka Qolka (Image URL)"
                                  value={rm.image || ''} onChange={(e) => {
                                    const updated = [...newRooms];
                                    updated[idx].image = e.target.value;
                                    setNewRooms(updated);
                                  }}
                                  className="w-full border p-2 rounded-xl text-xs font-semibold bg-white"
                                />
                                <input 
                                  type="text" placeholder="Sharaxaada Qolka (Desc)"
                                  value={rm.desc || ''} onChange={(e) => {
                                    const updated = [...newRooms];
                                    updated[idx].desc = e.target.value;
                                    setNewRooms(updated);
                                  }}
                                  className="w-full border p-2 rounded-xl text-xs font-semibold bg-white"
                                />
                              </div>

                              <div className="grid grid-cols-3 gap-2">
                                <div>
                                  <label className="text-[9px] font-bold text-slate-400 block">QIIMAHA ASALKA ($)</label>
                                  <input 
                                    type="number" placeholder="Asalka (e.g. 160)" 
                                    value={rm.originalPrice || ''} onChange={(e) => {
                                      const updated = [...newRooms];
                                      updated[idx].originalPrice = Number(e.target.value);
                                      setNewRooms(updated);
                                    }}
                                    className="w-full border p-2 rounded-xl text-xs font-semibold bg-white"
                                  />
                                </div>
                                <div>
                                  <label className="text-[9px] font-bold text-[#042222] block">DISCOUNT PRICE ($)</label>
                                  <input 
                                    type="number" placeholder="Dhimista (e.g. 150)" required 
                                    value={rm.price} onChange={(e) => {
                                      const updated = [...newRooms];
                                      updated[idx].price = Number(e.target.value);
                                      setNewRooms(updated);
                                    }}
                                    className="w-full border p-2 rounded-xl text-xs font-semibold bg-white border-emerald-500"
                                  />
                                </div>
                                <div>
                                  <label className="text-[9px] font-bold text-slate-400 block">MUDDADA</label>
                                  <select 
                                    value={rm.period} onChange={(e) => {
                                      const updated = [...newRooms];
                                      updated[idx].period = e.target.value;
                                      setNewRooms(updated);
                                    }}
                                    className="w-full border p-2 rounded-xl text-xs font-semibold bg-white"
                                  >
                                    <option value="habeenkii">habeenkii</option>
                                    <option value="xafladdii">xafladdii</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button type="submit" className="w-full bg-[#042222] hover:bg-[#083636] text-[#D4A359] font-bold py-3.5 rounded-full text-xs shadow-md transition mt-2">
                      {editingPropertyId ? 'Cusbooneysii Hantida' : 'Kaydi Hantida Cusub'}
                    </button>
                  </form>
                )}

                {/* TAB 3: MANAGE PROPERTIES */}
                {adminTab === 'manage' && (
                  <div className="space-y-3 text-left">
                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider">Hantida Hadda Ku Jirta System-ka</h4>
                    {properties.map((p) => (
                      <div key={p.id} className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-200">
                        <div className="flex items-center space-x-3 overflow-hidden">
                          <img src={p.image} alt={p.title} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                          <div className="truncate">
                            <h5 className="text-xs font-bold text-slate-900 truncate">{p.title}</h5>
                            <p className="text-[10px] text-slate-500">{p.subType || p.type} • {p.district}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-1.5 shrink-0 ml-2">
                          <button 
                            type="button" 
                            onClick={() => handleEditClick(p)} 
                            className="bg-[#042222]/10 hover:bg-[#042222]/20 text-[#042222] p-2 rounded-xl transition flex items-center space-x-1 text-xs font-bold"
                          >
                            <Edit className="w-3.5 h-3.5" />
                            <span>Beddel</span>
                          </button>
                          <button 
                            type="button" 
                            onClick={() => handleDeleteProperty(p.id)} 
                            className="bg-red-50 hover:bg-red-100 text-red-600 p-2 rounded-xl transition"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* BOOKING MODAL */}
      {bookingProperty && selectedRoom && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 relative">
            <button onClick={() => setBookingProperty(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 p-2 rounded-full">
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-extrabold text-slate-900 mb-1">Xaqiiji Qabsashada</h3>
            <p className="text-xs text-[#042222] font-bold mb-[2px]">{bookingProperty.title} — {selectedRoom.name}</p>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full inline-block mb-4">
              💳 Lacagta waxaa lagu bixinayaa Hotel-ka dhexdiisa (Pay at Hotel)
            </span>

            <form onSubmit={handleBookingSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">{t.fullName}</label>
                <input 
                  type="text" required placeholder="Cali Maxamed"
                  value={customerName} onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full border rounded-xl p-3 text-xs font-semibold bg-slate-50"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">{t.phoneNumber}</label>
                <input 
                  type="tel" required placeholder="+252 61 ..."
                  value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full border rounded-xl p-3 text-xs font-semibold bg-slate-50"
                />
              </div>

              <div className="bg-[#ECEEE8] p-3.5 rounded-2xl space-y-1">
                <div className="flex justify-between text-xs font-bold text-slate-600">
                  <span>Muddada:</span>
                  <span>{selectedRoom.period === 'habeenkii' ? `${calculateDays()} Habeen` : '1 Xaflad'}</span>
                </div>
                <div className="flex justify-between text-xs font-bold text-slate-600">
                  <span>Martida / Tirada Dadka:</span>
                  <span>
                    {selectedCategory === 'Hall' && searchGuests === 0 && customHallGuests 
                      ? `${customHallGuests} Qof` 
                      : `${searchGuests || 1} Qof`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-black text-[#042222] pt-1 border-t border-slate-300/50">
                  <span>{t.total}:</span>
                  <span>${selectedRoom.period === 'habeenkii' ? selectedRoom.price * calculateDays() : selectedRoom.price}</span>
                </div>
              </div>

              <button type="submit" className="w-full bg-[#042222] hover:bg-[#083636] text-[#D4A359] font-bold py-3.5 rounded-full text-xs flex items-center justify-center space-x-2 transition mt-2">
                <Send className="w-4 h-4" />
                <span>{t.sendWhatsapp}</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}