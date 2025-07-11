"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiX, FiPhone, FiMapPin, FiClock, FiStar, FiTruck, FiHeart, FiAward, FiUsers, FiChevronRight, FiMail, FiInstagram, FiFacebook, FiHome, FiInfo, FiPackage, FiShoppingCart, FiDollarSign } from "react-icons/fi";
import Link from "next/link";

export default function Home() {
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
    { name: "Accueil", href: "/", icon: <FiHome size={20} />, active: true },
    { name: "À Propos", href: "/about", icon: <FiInfo size={20} />, active: true },
    { name: "Bœuf", href: "/viandes/boeuf", icon: <FiPackage size={20} />, active: true },
    { name: "Veau", href: "/viandes/veau", icon: <FiPackage size={20} />, active: false },
    { name: "Agneau", href: "/viandes/agneau", icon: <FiPackage size={20} />, active: false },
    { name: "Porc", href: "/viandes/porc", icon: <FiPackage size={20} />, active: false },
    { name: "Volailles", href: "/viandes/volailles", icon: <FiPackage size={20} />, active: false },
    { name: "Spécialités", href: "/viandes/specialites", icon: <FiAward size={20} />, active: false },
    { name: "Promotions", href: "/promotions", icon: <FiDollarSign size={20} />, active: true },
    { name: "Panier", href: "/panier", icon: <FiShoppingCart size={20} />, active: true },
    { name: "Contact", href: "/contact", icon: <FiPhone size={20} />, active: true }
  ];

  const services = [
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Viandes Premium",
      description: "Sélection rigoureuse de nos éleveurs partenaires pour une qualité exceptionnelle"
    },
    {
      icon: <FiTruck className="w-8 h-8" />,
      title: "Livraison Rapide",
      description: "Commandez en ligne et recevez vos produits frais directement chez vous"
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Savoir-Faire Artisanal",
      description: "Techniques traditionnelles et passion transmises de génération en génération"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Conseil Personnalisé",
      description: "Notre équipe d'experts vous accompagne dans tous vos projets culinaires"
    }
  ];

  const products = [
    {
      name: "Bœuf de Qualité",
      description: "Côtes, entrecôtes, filets, steaks... Découvrez notre sélection de bœuf français",
      image: "/Viande2Boeuf.jpg"
    },
    {
      name: "Agneau & Veau",
      description: "Viandes tendres et savoureuses, parfaites pour vos repas de fête",
      image: "/Viande2Mouton.jpg"
    },
    {
      name: "Volailles Fermières",
      description: "Poulets, canards, pintades élevés au grain dans nos fermes partenaires",
      image: "/Viande2Poulet.jpg"
    },
    {
      name: "Spécialités Maison",
      description: "Saucisses, terrines, pâtés et préparations artisanales de notre chef boucher",
      image: "/Viande2Porc.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      text: "Une boucherie exceptionnelle ! La qualité des produits est irréprochable et les conseils sont toujours pertinents.",
      rating: 5
    },
    {
      name: "Jean Martin",
      text: "Depuis que j'ai découvert la Boucherie d'Aliénor, je ne vais plus ailleurs. Un vrai savoir-faire artisanal !",
      rating: 5
    },
    {
      name: "Sophie Leroux",
      text: "Service impeccable et produits de première qualité. Je recommande vivement cette boucherie !",
      rating: 5
    }
  ];

  return (
    <div className="w-full">
      {/* Header Fixe */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
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
                  className="rounded-full border-2 border-white shadow-lg transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-xl font-bold transition-colors duration-300 ${
                  scrollY > 50 ? 'text-gray-900' : 'text-white'
                }`}>
                  Boucherie d&apos;Aliénor
                </h1>
                <p className={`text-sm transition-colors duration-300 ${
                  scrollY > 50 ? 'text-gray-600' : 'text-white/80'
                }`}>
                  Artisan boucher depuis 1985
                </p>
              </div>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className={`font-medium transition-colors duration-300 hover:text-red-600 ${
                scrollY > 50 ? 'text-gray-700' : 'text-white'
              }`}>
                Accueil
              </Link>
              <Link href="/about" className={`font-medium transition-colors duration-300 hover:text-red-600 ${
                scrollY > 50 ? 'text-gray-700' : 'text-white'
              }`}>
                À Propos
              </Link>
              <div className="relative group">
                <button className={`font-medium transition-colors duration-300 hover:text-red-600 flex items-center gap-2 ${
                  scrollY > 50 ? 'text-gray-700' : 'text-white'
                }`}>
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
              <Link href="/promotions" className={`font-medium transition-colors duration-300 hover:text-red-600 ${
                scrollY > 50 ? 'text-gray-700' : 'text-white'
              }`}>
                Promotions
              </Link>
              <Link href="/contact" className={`font-medium transition-colors duration-300 hover:text-red-600 ${
                scrollY > 50 ? 'text-gray-700' : 'text-white'
              }`}>
                Contact
              </Link>
            </nav>

            {/* Panier et Menu Mobile */}
            <div className="flex items-center gap-4">
              {/* Bouton Panier */}
              <Link href="/panier" className={`relative p-3 rounded-full transition-all duration-300 ${
                scrollY > 50 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
              }`}>
                <FiShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  3
                </span>
              </Link>

              {/* Menu Hamburger */}
              <button
                className={`lg:hidden p-3 rounded-full transition-all duration-300 ${
                  scrollY > 50 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
                }`}
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
                link.active ? (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="text-red-600 group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-red-600 transition-colors">
                      {link.name}
                    </span>
                    <FiChevronRight size={16} className="ml-auto text-gray-400 group-hover:text-red-600 transition-colors" />
                  </Link>
                ) : (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl opacity-50 cursor-not-allowed"
                  >
                    <div className="text-gray-400">
                      {link.icon}
                    </div>
                    <span className="font-medium text-gray-400">
                      {link.name} (Bientôt)
                    </span>
                  </div>
                )
              ))}
            </div>

            {/* Section Viandes Populaires */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Viandes Populaires</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/viandes/boeuf" className="bg-red-50 p-3 rounded-lg text-center hover:bg-red-100 transition-colors">
                  <div className="text-red-600 font-semibold text-sm">Bœuf</div>
                  <div className="text-xs text-gray-600">À partir de 15€/kg</div>
                </Link>
                <Link href="/viandes/agneau" className="bg-red-50 p-3 rounded-lg text-center hover:bg-red-100 transition-colors">
                  <div className="text-red-600 font-semibold text-sm">Agneau</div>
                  <div className="text-xs text-gray-600">À partir de 18€/kg</div>
                </Link>
                <Link href="/viandes/volailles" className="bg-red-50 p-3 rounded-lg text-center hover:bg-red-100 transition-colors">
                  <div className="text-red-600 font-semibold text-sm">Volailles</div>
                  <div className="text-xs text-gray-600">À partir de 8€/kg</div>
                </Link>
                <Link href="/viandes/specialites" className="bg-red-50 p-3 rounded-lg text-center hover:bg-red-100 transition-colors">
                  <div className="text-red-600 font-semibold text-sm">Spécialités</div>
                  <div className="text-xs text-gray-600">À partir de 12€/kg</div>
                </Link>
              </div>
            </div>

            {/* Contact rapide */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Rapide</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <FiPhone size={16} className="text-red-600" />
                  <span className="text-sm">01 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FiMapPin size={16} className="text-red-600" />
                  <span className="text-sm">123 Rue de la Boucherie, Paris</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FiClock size={16} className="text-red-600" />
                  <span className="text-sm">Lun-Sam: 8h-19h30</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Section Héro avec Vidéo */}
      <div className="relative min-h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/BeefSopoudring.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-black/60 to-black/80 z-10" />

        {/* Contenu Héro */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pt-20">
          <div className="text-center max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl mb-6 animate-fade-in">
              Boucherie d&apos;Aliénor
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg animate-fade-in-delay">
              L&apos;excellence de la viande artisanale depuis 1985
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <Link href="/viandes/boeuf" className="bg-red-900 hover:bg-red-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Découvrir nos produits
              </Link>
              <Link href="/contact" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/30">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Section Services */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Services d&apos;Exception
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez pourquoi nous sommes la référence en matière de boucherie artisanale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="text-red-900 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Produits */}
      <section id="produits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Produits d&apos;Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une sélection rigoureuse de viandes de qualité supérieure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                      Voir les prix
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-900 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section À Propos */}
      <section id="about" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Notre Histoire
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Depuis 1985, la Boucherie d&apos;Aliénor perpétue la tradition de l&apos;artisanat boucher avec passion et excellence. Fondée par Aliénor Martin, notre boucherie familiale s&apos;est imposée comme une référence incontournable dans la région.
                </p>
                <p>
                  Nous sélectionnons méticuleusement nos éleveurs partenaires, privilégiant les circuits courts et les méthodes d&apos;élevage respectueuses du bien-être animal. Chaque pièce de viande est découpée avec soin par nos maîtres bouchers, garantissant une qualité irréprochable.
                </p>
                <p>
                  Notre engagement : vous offrir le meilleur de la boucherie traditionnelle française, alliant savoir-faire ancestral et innovation moderne pour satisfaire les palais les plus exigeants.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-900 mb-2">38+</div>
                  <div className="text-gray-600">Années d&apos;expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-900 mb-2">5000+</div>
                  <div className="text-gray-600">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-900 mb-2">15+</div>
                  <div className="text-gray-600">Éleveurs partenaires</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/BoucherieAlieneorLogo.jpg"
                  alt="Équipe Boucherie d&apos;Aliénor"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="text-red-900">
                    <FiAward size={32} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Certifié Artisan</div>
                    <div className="text-gray-600">Qualité garantie</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La satisfaction de nos clients est notre plus belle récompense
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-red-900 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-nous
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Nous sommes là pour vous conseiller et répondre à toutes vos questions
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-full">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Adresse</h3>
                  <p className="text-red-100">123 Rue de la Boucherie<br />75001 Paris, France</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-full">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                  <p className="text-red-100">01 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-full">
                  <FiClock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Horaires</h3>
                  <p className="text-red-100">
                    Lun-Sam : 8h00 - 19h30<br />
                    Dimanche : 8h00 - 13h00
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Votre message"
                    rows={4}
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-red-900 font-bold py-4 px-8 rounded-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
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
