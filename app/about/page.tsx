"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiX, FiPhone, FiAward, FiUsers, FiChevronRight, FiMail, FiInstagram, FiFacebook, FiHome, FiInfo, FiPackage, FiShoppingCart, FiDollarSign, FiArrowLeft, FiCalendar, FiTarget, FiShield, FiHeart } from "react-icons/fi";
import Link from "next/link";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const teamMembers = [
    {
      name: "Aliénor Martin",
      role: "Fondatrice & Maître Bouchère",
      experience: "40 ans d'expérience",
      image: "/BoucherieAlieneorLogo.jpg",
      description: "Passionnée depuis toujours, Aliénor a fondé la boucherie en 1985 avec l'ambition de proposer des viandes d'exception."
    },
    {
      name: "Pierre Dubois",
      role: "Chef Boucher",
      experience: "25 ans d'expérience",
      image: "/BoucherieAlieneorLogo.jpg",
      description: "Expert en découpe traditionnelle, Pierre forme notre équipe aux techniques artisanales."
    },
    {
      name: "Marie Leroy",
      role: "Responsable Qualité",
      experience: "15 ans d'expérience",
      image: "/BoucherieAlieneorLogo.jpg",
      description: "Garante de la traçabilité et de la qualité, Marie sélectionne nos éleveurs partenaires."
    },
    {
      name: "Thomas Bernard",
      role: "Boucher Spécialisé",
      experience: "12 ans d'expérience",
      image: "/BoucherieAlieneorLogo.jpg",
      description: "Spécialiste des préparations maison, Thomas crée nos spécialités artisanales."
    }
  ];

  const values = [
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque geste, de la sélection à la découpe."
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Passion",
      description: "Notre amour du métier se ressent dans la qualité de nos produits."
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Confiance",
      description: "Transparence et traçabilité totale pour votre tranquillité d'esprit."
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Proximité",
      description: "Nous cultivons une relation de confiance avec chaque client."
    }
  ];

  const timeline = [
    {
      year: "1985",
      title: "Fondation",
      description: "Aliénor Martin ouvre sa première boucherie avec l'ambition de proposer des viandes d'exception."
    },
    {
      year: "1992",
      title: "Expansion",
      description: "Agrandissement de la boutique et développement des spécialités maison."
    },
    {
      year: "2005",
      title: "Certification",
      description: "Obtention de la certification Artisan Boucher et partenariats avec des éleveurs locaux."
    },
    {
      year: "2015",
      title: "Modernisation",
      description: "Rénovation complète et installation d'équipements de pointe."
    },
    {
      year: "2024",
      title: "Digital",
      description: "Lancement de notre boutique en ligne pour servir encore plus de clients."
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
                  alt="Logo Boucherie d'Aliénor"
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
              <a href="/about" className="font-medium text-red-600 border-b-2 border-red-600">
                À Propos
              </a>
              <div className="relative group">
                <button className="font-medium text-gray-700 hover:text-red-600 transition-colors duration-300 flex items-center gap-2">
                  Nos Viandes
                  <FiChevronRight size={16} className="transform group-hover:rotate-90 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-2">
                    <a href="/viandes/boeuf" className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">Bœuf</a>
                    <span className="block px-4 py-3 text-gray-400 cursor-not-allowed rounded-lg">Veau (Bientôt)</span>
                    <span className="block px-4 py-3 text-gray-400 cursor-not-allowed rounded-lg">Agneau (Bientôt)</span>
                    <span className="block px-4 py-3 text-gray-400 cursor-not-allowed rounded-lg">Porc (Bientôt)</span>
                    <span className="block px-4 py-3 text-gray-400 cursor-not-allowed rounded-lg">Volailles (Bientôt)</span>
                    <span className="block px-4 py-3 text-gray-400 cursor-not-allowed rounded-lg">Spécialités (Bientôt)</span>
                  </div>
                </div>
              </div>
              <a href="/promotions" className="font-medium text-gray-700 hover:text-red-600 transition-colors duration-300">
                Promotions
              </a>
              <a href="/contact" className="font-medium text-gray-700 hover:text-red-600 transition-colors duration-300">
                Contact
              </a>
            </nav>

            {/* Panier et Menu Mobile */}
            <div className="flex items-center gap-4">
              {/* Bouton Panier */}
              <a href="/panier" className="relative p-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all duration-300">
                <FiShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  3
                </span>
              </a>

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
                <a
                  key={index}
                  href={link.href}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-colors group ${
                    link.href === '/about' ? 'bg-red-50 text-red-600' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <div className={`group-hover:scale-110 transition-transform ${
                    link.href === '/about' ? 'text-red-600' : 'text-red-600'
                  }`}>
                    {link.icon}
                  </div>
                  <span className={`font-medium transition-colors ${
                    link.href === '/about' ? 'text-red-600' : 'text-gray-700 group-hover:text-red-600'
                  }`}>
                    {link.name}
                  </span>
                  <FiChevronRight size={16} className={`ml-auto transition-colors ${
                    link.href === '/about' ? 'text-red-600' : 'text-gray-400 group-hover:text-red-600'
                  }`} />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
              <FiArrowLeft size={20} />
              <span>Retour à l&apos;accueil</span>
            </Link>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Notre Histoire
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Depuis 1985, nous perpétuons la tradition de l&apos;artisanat boucher avec passion et excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">38+</div>
                <div className="text-gray-600">Années d&apos;expérience</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">5000+</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                <div className="text-gray-600">Éleveurs partenaires</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Une Passion Transmise
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  En 1985, Aliénor Martin ouvre sa première boucherie avec un rêve simple : proposer des viandes d&apos;exception à ses clients. Forte de sa formation auprès des meilleurs maîtres bouchers de France, elle développe rapidement une réputation d&apos;excellence.
                </p>
                <p>
                  Au fil des années, la boucherie s&apos;agrandit et l&apos;équipe se renforce. Chaque membre partage la même passion pour la qualité et le service client. Nous sélectionnons méticuleusement nos éleveurs partenaires, privilégiant les circuits courts et les méthodes d&apos;élevage respectueuses.
                </p>
                <p>
                  Aujourd&apos;hui, la Boucherie d&apos;Aliénor est devenue une référence incontournable. Nous continuons d&apos;innover tout en préservant les techniques traditionnelles qui font notre réputation depuis près de 40 ans.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/BoucherieAlieneorLogo.jpg"
                  alt="Histoire de la boucherie"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre Parcours
            </h2>
            <p className="text-xl text-gray-600">
              Les étapes clés de notre développement
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <FiCalendar className="text-red-600" size={20} />
                        <span className="text-2xl font-bold text-red-600">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-red-50 rounded-2xl p-8 mb-6 group-hover:bg-red-100 transition-colors">
                  <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600">
              Des artisans passionnés à votre service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-red-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-4">{member.experience}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à Découvrir Nos Produits ?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Explorez notre sélection de viandes d&apos;exception et laissez-vous séduire par notre savoir-faire artisanal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/viandes/boeuf" className="bg-white text-red-600 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-all duration-300 transform hover:scale-105">
              Découvrir nos viandes
            </a>
            <a href="/contact" className="bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30">
              Nous contacter
            </a>
          </div>
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
                  alt="Logo Boucherie d'Aliénor"
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
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-900 transition-colors">
                  <FiFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-900 transition-colors">
                  <FiInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-900 transition-colors">
                  <FiMail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Restez informé de nos nouveautés et promotions
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Boucherie d&apos;Aliénor. Tous droits réservés. | 
              <a href="#" className="hover:text-white transition-colors ml-2">Mentions légales</a> | 
              <a href="#" className="hover:text-white transition-colors ml-2">Politique de confidentialité</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 