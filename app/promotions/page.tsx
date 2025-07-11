"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiX, FiPhone, FiClock, FiStar, FiTruck, FiHeart, FiAward, FiUsers, FiChevronRight, FiMail, FiInstagram, FiFacebook, FiHome, FiInfo, FiPackage, FiShoppingCart, FiDollarSign, FiArrowLeft, FiPercent, FiGift, FiCalendar, FiTag } from "react-icons/fi";
import Link from "next/link";

export default function Promotions() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Fermer le menu quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuOpen && !(event.target as Element).closest('.menu-container')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const navigationLinks = [
    { name: "Accueil", href: "/", icon: <FiHome size={20} /> },
    { name: "À Propos", href: "/about", icon: <FiInfo size={20} /> },
    { name: "Bœuf", href: "/viandes/boeuf", icon: <FiPackage size={20} /> },
    { name: "Veau", href: "/viandes/veau", icon: <FiPackage size={20} /> },
    { name: "Agneau", href: "/viandes/agneau", icon: <FiPackage size={20} /> },
    { name: "Porc", href: "/viandes/porc", icon: <FiPackage size={20} /> },
    { name: "Volailles", href: "/viandes/volailles", icon: <FiPackage size={20} /> },
    { name: "Spécialités", href: "/viandes/specialites", icon: <FiAward size={20} /> },
    { name: "Promotions", href: "/promotions", icon: <FiDollarSign size={20} /> },
    { name: "Panier", href: "/panier", icon: <FiShoppingCart size={20} /> },
    { name: "Contact", href: "/contact", icon: <FiPhone size={20} /> }
  ];

  const promotions = [
    {
      id: 1,
      title: "Offre Spéciale Bœuf",
      description: "Profitez de -20% sur toute notre sélection de bœuf premium",
      discount: 20,
      originalPrice: 28.90,
      promoPrice: 23.12,
      image: "/Viande2Boeuf.jpg",
      category: "Bœuf",
      validUntil: "2024-02-15",
      isFlash: true,
      code: "BOEUF20"
    },
    {
      id: 2,
      title: "Pack Famille",
      description: "2kg de viandes mélangées pour toute la famille",
      discount: 15,
      originalPrice: 45.00,
      promoPrice: 38.25,
      image: "/Viande2Porc.jpg",
      category: "Pack",
      validUntil: "2024-02-20",
      isFlash: false,
      code: "FAMILLE15"
    },
    {
      id: 3,
      title: "Volailles Fermières",
      description: "Nos volailles élevées au grain à prix réduit",
      discount: 25,
      originalPrice: 12.90,
      promoPrice: 9.68,
      image: "/Viande2Poulet.jpg",
      category: "Volailles",
      validUntil: "2024-02-18",
      isFlash: true,
      code: "VOLAILLE25"
    },
    {
      id: 4,
      title: "Agneau de Pâques",
      description: "Préparez Pâques avec notre agneau d'exception",
      discount: 10,
      originalPrice: 24.50,
      promoPrice: 22.05,
      image: "/Viande2Mouton.jpg",
      category: "Agneau",
      validUntil: "2024-03-31",
      isFlash: false,
      code: "PAQUES10"
    },
    {
      id: 5,
      title: "Spécialités Maison",
      description: "Nos préparations artisanales à prix doux",
      discount: 30,
      originalPrice: 16.90,
      promoPrice: 11.83,
      image: "/Viande2Porc.jpg",
      category: "Spécialités",
      validUntil: "2024-02-14",
      isFlash: true,
      code: "SPECIAL30"
    },
    {
      id: 6,
      title: "Barbecue d'Été",
      description: "Assortiment parfait pour vos grillades",
      discount: 20,
      originalPrice: 35.00,
      promoPrice: 28.00,
      image: "/Viande2Boeuf.jpg",
      category: "Pack",
      validUntil: "2024-08-31",
      isFlash: false,
      code: "BARBECUE20"
    }
  ];

  const weeklyOffers = [
    {
      day: "Lundi",
      title: "Lundi Bœuf",
      description: "Toutes les pièces de bœuf à -15%",
      discount: 15,
      icon: <FiPackage className="w-6 h-6" />
    },
    {
      day: "Mardi",
      title: "Mardi Porc",
      description: "Spécialités de porc à prix réduit",
      discount: 20,
      icon: <FiGift className="w-6 h-6" />
    },
    {
      day: "Mercredi",
      title: "Mercredi Volailles",
      description: "Volailles fermières en promotion",
      discount: 25,
      icon: <FiHeart className="w-6 h-6" />
    },
    {
      day: "Jeudi",
      title: "Jeudi Agneau",
      description: "Agneau tendre à prix doux",
      discount: 18,
      icon: <FiAward className="w-6 h-6" />
    },
    {
      day: "Vendredi",
      title: "Vendredi Veau",
      description: "Veau de qualité en promotion",
      discount: 22,
      icon: <FiStar className="w-6 h-6" />
    },
    {
      day: "Samedi",
      title: "Samedi Spécialités",
      description: "Nos préparations maison à -30%",
      discount: 30,
      icon: <FiUsers className="w-6 h-6" />
    },
    {
      day: "Dimanche",
      title: "Dimanche Famille",
      description: "Packs familiaux avantageux",
      discount: 12,
      icon: <FiTruck className="w-6 h-6" />
    }
  ];

  return (
    <div className="w-full">
      {/* Header Fixe */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo et Nom */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src="/BoucherieAlieneorLogo.jpg"
                  alt="Logo Boucherie d&apos;Aliénor"
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-red-600 shadow-lg transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">
                  Boucherie d&apos;Aliénor
                </h1>
                <p className="text-sm text-gray-600">
                  Artisan boucher depuis 1985
                </p>
              </div>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="font-medium text-gray-700 hover:text-red-600 transition-colors duration-300">
                Accueil
              </Link>
              <Link href="/about" className="font-medium text-gray-700 hover:text-red-600 transition-colors duration-300">
                À Propos
              </Link>
              <div className="relative group">
                <button className="font-medium text-gray-700 hover:text-red-600 transition-colors duration-300 flex items-center gap-2">
                  Nos Viandes
                  <FiChevronRight size={16} className="transform group-hover:rotate-90 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-2">
                    <Link href="/viandes/boeuf" className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">Bœuf</Link>
                    <span className="block px-4 py-3 text-gray-400 cursor-not-allowed rounded-lg">Veau (Bientôt)</span>
                    <span className="block px-4 py-3 text-gray-400 cursor-not-allowed rounded-lg">Agneau (Bientôt)</span>
                    <span className="block px-4 py-3 text-gray-400 cursor-not-allowed rounded-lg">Porc (Bientôt)</span>
                    <span className="block px-4 py-3 text-gray-400 cursor-not-allowed rounded-lg">Volailles (Bientôt)</span>
                    <span className="block px-4 py-3 text-gray-400 cursor-not-allowed rounded-lg">Spécialités (Bientôt)</span>
                  </div>
                </div>
              </div>
              <Link href="/promotions" className="font-medium text-red-600 border-b-2 border-red-600">
                Promotions
              </Link>
              <Link href="/contact" className="font-medium text-gray-700 hover:text-red-600 transition-colors duration-300">
                Contact
              </Link>
            </nav>

            {/* Panier et Menu Mobile */}
            <div className="flex items-center gap-4">
              {/* Bouton Panier */}
              <Link href="/panier" className="relative p-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all duration-300">
                <FiShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  3
                </span>
              </Link>

              {/* Menu Hamburger */}
              <button
                className="lg:hidden p-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all duration-300"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute top-0 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? 'rotate-45 top-2.5' : ''
                  }`}></span>
                  <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? 'opacity-0' : ''
                  }`}></span>
                  <span className={`absolute top-5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? '-rotate-45 top-2.5' : ''
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ${
        menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`} onClick={() => setMenuOpen(false)}>
        <div className={`menu-container absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`} onClick={(e) => e.stopPropagation()}>
          {/* Header du menu */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/BoucherieAlieneorLogo.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="font-semibold">Boucherie d&apos;Aliénor</div>
                <div className="text-red-100 text-sm">Artisan boucher</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-6">
            <div className="space-y-2">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-colors group ${
                    link.href === '/promotions' ? 'bg-red-50 text-red-600' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <div className={`group-hover:scale-110 transition-transform ${
                    link.href === '/promotions' ? 'text-red-600' : 'text-red-600'
                  }`}>
                    {link.icon}
                  </div>
                  <span className={`font-medium transition-colors ${
                    link.href === '/promotions' ? 'text-red-600' : 'text-gray-700 group-hover:text-red-600'
                  }`}>
                    {link.name}
                  </span>
                  <FiChevronRight size={16} className={`ml-auto transition-colors ${
                    link.href === '/promotions' ? 'text-red-600' : 'text-gray-400 group-hover:text-red-600'
                  }`} />
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-red-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/" className="flex items-center gap-2 text-red-100 hover:text-white transition-colors">
              <FiArrowLeft size={20} />
              <span>Retour à l&apos;accueil</span>
            </Link>
            <span className="text-red-300">/</span>
            <span className="text-white font-medium">Promotions</span>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FiPercent size={48} className="text-yellow-400" />
              <h1 className="text-5xl md:text-6xl font-extrabold">
                Nos Promotions
              </h1>
            </div>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Profitez de nos offres exceptionnelles sur une sélection de viandes premium. 
              Qualité artisanale à prix réduits !
            </p>
            
            {/* Compteur Flash Sale */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FiClock size={20} className="text-yellow-400" />
                <span className="text-lg font-bold">Offres Flash - Temps limité !</span>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold">{timeLeft.days}</div>
                  <div className="text-sm text-red-100">Jours</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold">{timeLeft.hours}</div>
                  <div className="text-sm text-red-100">Heures</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-sm text-red-100">Min</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-sm text-red-100">Sec</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Principales */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Offres Spéciales
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez nos meilleures promotions du moment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotions.map((promo) => (
              <div key={promo.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                <div className="relative">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`px-4 py-2 rounded-full text-white font-bold ${
                      promo.isFlash ? 'bg-red-600' : 'bg-green-600'
                    }`}>
                      -{promo.discount}%
                    </div>
                  </div>
                  {promo.isFlash && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                      FLASH
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FiTag className="text-red-600" size={16} />
                    <span className="text-sm text-gray-500">{promo.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{promo.title}</h3>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-sm text-gray-500 line-through">
                      {promo.originalPrice.toFixed(2)}€/kg
                    </div>
                    <div className="text-2xl font-bold text-red-600">
                      {promo.promoPrice.toFixed(2)}€/kg
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FiCalendar size={14} />
                      <span>Valable jusqu&apos;au {new Date(promo.validUntil).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                      Profiter de l&apos;offre
                    </button>
                    <button className="p-3 bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-600 rounded-lg transition-colors">
                      <FiHeart size={20} />
                    </button>
                  </div>
                  
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <FiGift className="text-red-600" size={14} />
                      <span className="text-gray-600">Code promo: </span>
                      <span className="font-bold text-red-600">{promo.code}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offres Hebdomadaires */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Offres de la Semaine
            </h2>
            <p className="text-xl text-gray-600">
              Chaque jour, une nouvelle promotion vous attend
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {weeklyOffers.map((offer, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-red-600 mb-4 flex justify-center">
                  {offer.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{offer.day}</h3>
                <h4 className="text-sm font-semibold text-red-600 mb-3">{offer.title}</h4>
                <p className="text-xs text-gray-600 mb-4">{offer.description}</p>
                <div className="bg-red-50 rounded-lg p-2">
                  <span className="text-lg font-bold text-red-600">-{offer.discount}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ne Ratez Aucune Promotion !
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Inscrivez-vous à notre newsletter et recevez en exclusivité nos meilleures offres
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 p-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-red-50 transition-colors">
              S&apos;inscrire
            </button>
          </div>
          <p className="text-sm text-red-100 mt-4">
            Vous recevrez maximum 2 emails par semaine. Désinscription possible à tout moment.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/BoucherieAlieneorLogo.jpg"
                  alt="Logo Boucherie d&apos;Aliénor"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="text-xl font-bold">Boucherie d&apos;Aliénor</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Votre boucherie artisanale de confiance depuis 1985. Qualité, fraîcheur et savoir-faire français.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Navigation</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">À Propos</Link></li>
                <li><Link href="/viandes/boeuf" className="text-gray-400 hover:text-white transition-colors">Nos Viandes</Link></li>
                <li><Link href="/promotions" className="text-gray-400 hover:text-white transition-colors">Promotions</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Produits</h4>
              <ul className="space-y-3">
                <li><Link href="/viandes/boeuf" className="text-gray-400 hover:text-white transition-colors">Bœuf</Link></li>
                <li><Link href="/viandes/veau" className="text-gray-400 hover:text-white transition-colors">Veau</Link></li>
                <li><Link href="/viandes/agneau" className="text-gray-400 hover:text-white transition-colors">Agneau</Link></li>
                <li><Link href="/viandes/porc" className="text-gray-400 hover:text-white transition-colors">Porc</Link></li>
                <li><Link href="/viandes/volailles" className="text-gray-400 hover:text-white transition-colors">Volailles</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Suivez-nous</h4>
              <div className="flex gap-4 mb-6">
                <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-900 transition-colors">
                  <FiFacebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-900 transition-colors">
                  <FiInstagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-900 transition-colors">
                  <FiMail className="w-5 h-5" />
                </Link>
              </div>
              <p className="text-gray-400 text-sm">
                Restez informé de nos nouveautés et promotions
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Boucherie d&apos;Aliénor. Tous droits réservés. | 
              <Link href="#" className="hover:text-white transition-colors ml-2">Mentions légales</Link> | 
              <Link href="#" className="hover:text-white transition-colors ml-2">Politique de confidentialité</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 