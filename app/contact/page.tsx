"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiX, FiPhone, FiMapPin, FiClock, FiTruck, FiAward, FiUsers, FiChevronRight, FiMail, FiInstagram, FiFacebook, FiHome, FiInfo, FiPackage, FiShoppingCart, FiDollarSign, FiArrowLeft, FiSend, FiCheck, FiCalendar } from "react-icons/fi";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Adresse",
      content: "123 Rue de la Boucherie\n75001 Paris, France",
      action: "Voir sur la carte"
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Téléphone",
      content: "01 23 45 67 89",
      action: "Appeler maintenant"
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      content: "contact@boucherie-alienor.fr",
      action: "Envoyer un email"
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Horaires",
      content: "Lun-Sam: 8h00 - 19h30\nDimanche: 8h00 - 13h00",
      action: "Voir les horaires"
    }
  ];

  const openingHours = [
    { day: "Lundi", hours: "8h00 - 19h30", isOpen: true },
    { day: "Mardi", hours: "8h00 - 19h30", isOpen: true },
    { day: "Mercredi", hours: "8h00 - 19h30", isOpen: true },
    { day: "Jeudi", hours: "8h00 - 19h30", isOpen: true },
    { day: "Vendredi", hours: "8h00 - 19h30", isOpen: true },
    { day: "Samedi", hours: "8h00 - 19h30", isOpen: true },
    { day: "Dimanche", hours: "8h00 - 13h00", isOpen: true }
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
              <Link href="/promotions" className="font-medium text-gray-700 hover:text-red-600 transition-colors duration-300">
                Promotions
              </Link>
              <Link href="/contact" className="font-medium text-red-600 border-b-2 border-red-600">
                Contact
              </Link>
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
                <Link
                  key={index}
                  href={link.href}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-colors group ${
                    link.href === '/contact' ? 'bg-red-50 text-red-600' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <div className={`group-hover:scale-110 transition-transform ${
                    link.href === '/contact' ? 'text-red-600' : 'text-red-600'
                  }`}>
                    {link.icon}
                  </div>
                  <span className={`font-medium transition-colors ${
                    link.href === '/contact' ? 'text-red-600' : 'text-gray-700 group-hover:text-red-600'
                  }`}>
                    {link.name}
                  </span>
                  <FiChevronRight size={16} className={`ml-auto transition-colors ${
                    link.href === '/contact' ? 'text-red-600' : 'text-gray-400 group-hover:text-red-600'
                  }`} />
                </Link>
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
            <span className="text-gray-400">/</span>
            <span className="text-red-600 font-medium">Contact</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Une question, une commande spéciale, ou simplement envie de nous rendre visite ? 
              Nous sommes là pour vous conseiller et répondre à tous vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0123456789" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <FiPhone size={20} />
                Appeler maintenant
              </a>
              <a href="#formulaire" className="bg-white text-red-600 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border-2 border-red-600 hover:bg-red-50 flex items-center justify-center gap-2">
                <FiMail size={20} />
                Envoyer un message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="h-64 bg-red-50 rounded-2xl p-8 mb-6 group-hover:bg-red-100 transition-all duration-300 transform group-hover:-translate-y-2 flex flex-col justify-between">
                  <div className="text-red-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line mb-4">{info.content}</p>
                  <button className="text-red-600 hover:text-red-700 font-medium transition-colors">
                    {info.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horaires d'ouverture */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Horaires d&apos;Ouverture
            </h2>
            <p className="text-xl text-gray-600">
              Nous sommes ouverts 7 jours sur 7 pour vous servir
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-4">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center gap-3">
                      <FiCalendar size={20} className="text-red-600" />
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600">{schedule.hours}</span>
                      <div className={`w-3 h-3 rounded-full ${
                        schedule.isOpen ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 text-green-600">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Ouvert maintenant</span>
                </div>
                <p className="text-sm text-green-700 mt-2">
                  Fermeture dans 3h30
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section id="formulaire" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Formulaire */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Envoyez-nous un Message
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiCheck size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Message envoyé !</h3>
                  <p className="text-green-700 mb-6">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="01 23 45 67 89"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      >
                        <option value="">Choisir un sujet</option>
                        <option value="commande">Commande spéciale</option>
                        <option value="renseignement">Renseignement produit</option>
                        <option value="livraison">Livraison</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <FiSend size={20} />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Carte et informations */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Venez Nous Rendre Visite
              </h2>
              
              {/* Carte simulée */}
              <div className="bg-gray-200 rounded-2xl h-64 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <FiMapPin size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Carte interactive</p>
                  <p className="text-sm text-gray-500">123 Rue de la Boucherie, 75001 Paris</p>
                </div>
              </div>

              {/* Informations pratiques */}
              <div className="space-y-6">
                <div className="bg-red-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Informations Pratiques</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FiTruck size={20} className="text-red-600" />
                      <span className="text-gray-700">Livraison gratuite dès 50€</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiAward size={20} className="text-red-600" />
                      <span className="text-gray-700">Produits certifiés qualité</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiUsers size={20} className="text-red-600" />
                      <span className="text-gray-700">Conseil personnalisé</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Accès & Parking</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>• Métro : Châtelet-Les Halles (lignes 1, 4, 7, 11, 14)</p>
                    <p>• Bus : Lignes 21, 67, 74, 85</p>
                    <p>• Parking : Places disponibles rue adjacente</p>
                    <p>• Accès PMR : Boutique accessible</p>
                  </div>
                </div>
              </div>
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
              <Link href="#" className="hover:text-white transition-colors ml-2">Mentions légales</Link> | 
              <Link href="#" className="hover:text-white transition-colors ml-2">Politique de confidentialité</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 