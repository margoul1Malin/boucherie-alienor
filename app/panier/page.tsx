"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiX, FiPhone, FiTruck, FiAward, FiChevronRight, FiMail, FiInstagram, FiFacebook, FiHome, FiInfo, FiPackage, FiShoppingCart, FiDollarSign, FiArrowLeft, FiPlus, FiMinus, FiTrash2, FiCreditCard, FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function Panier() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Côte de Bœuf",
      price: 28.90,
      quantity: 1,
      unit: "kg",
      image: "/Viande2Boeuf.jpg",
      origin: "France - Limousin",
      weight: "1.5kg"
    },
    {
      id: 2,
      name: "Entrecôte",
      price: 24.50,
      quantity: 2,
      unit: "kg",
      image: "/Viande2Boeuf.jpg",
      origin: "France - Charolais",
      weight: "300g/pièce"
    },
    {
      id: 3,
      name: "Bœuf Haché 15% MG",
      price: 14.90,
      quantity: 1,
      unit: "kg",
      image: "/Viande2Boeuf.jpg",
      origin: "France - Limousin",
      weight: "500g"
    }
  ]);

  const [deliveryOption, setDeliveryOption] = useState<'pickup' | 'delivery'>('pickup');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

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

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'bienvenue10') {
      setPromoApplied(true);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const deliveryFee = deliveryOption === 'delivery' ? 5.90 : 0;
  const total = subtotal - discount + deliveryFee;

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
              <Link href="/promotions" className="font-medium text-gray-700 hover:text-red-600 transition-colors duration-300">
                Promotions
              </Link>
              <Link href="/contact" className="font-medium text-gray-700 hover:text-red-600 transition-colors duration-300">
                Contact
              </Link>
            </nav>

            {/* Panier et Menu Mobile */}
            <div className="flex items-center gap-4">
              {/* Bouton Panier */}
              <Link href="/panier" className="relative p-3 bg-red-600 text-white rounded-full">
                <FiShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {cartItems.length}
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
                    link.href === '/panier' ? 'bg-red-50 text-red-600' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <div className={`group-hover:scale-110 transition-transform ${
                    link.href === '/panier' ? 'text-red-600' : 'text-red-600'
                  }`}>
                    {link.icon}
                  </div>
                  <span className={`font-medium transition-colors ${
                    link.href === '/panier' ? 'text-red-600' : 'text-gray-700 group-hover:text-red-600'
                  }`}>
                    {link.name}
                  </span>
                  <FiChevronRight size={16} className={`ml-auto transition-colors ${
                    link.href === '/panier' ? 'text-red-600' : 'text-gray-400 group-hover:text-red-600'
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
              <span>Continuer les achats</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-red-600 font-medium">Panier</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Votre Panier
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Finalisez votre commande et savourez nos viandes d&apos;exception
            </p>
          </div>
        </div>
      </section>

      {/* Contenu Principal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Liste des produits */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Vos produits ({cartItems.length})
                </h2>
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-2xl p-6 flex gap-6">
                      <div className="w-24 h-24 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-600">{item.origin}</p>
                            <p className="text-sm text-gray-600">{item.weight}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <FiTrash2 size={20} />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-red-50 hover:border-red-300 transition-colors"
                            >
                              <FiMinus size={16} />
                            </button>
                            <span className="font-bold text-gray-900 min-w-[20px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-red-50 hover:border-red-300 transition-colors"
                            >
                              <FiPlus size={16} />
                            </button>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-lg font-bold text-red-600">
                              {(item.price * item.quantity).toFixed(2)}€
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.price.toFixed(2)}€/{item.unit}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Récapitulatif */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-2xl p-6 sticky top-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Récapitulatif</h2>
                  
                  {/* Options de livraison */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Mode de récupération</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:bg-red-50 transition-colors">
                        <input
                          type="radio"
                          name="delivery"
                          value="pickup"
                          checked={deliveryOption === 'pickup'}
                          onChange={(e) => setDeliveryOption(e.target.value as 'pickup' | 'delivery')}
                          className="text-red-600"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">Retrait en magasin</div>
                          <div className="text-sm text-gray-600">Gratuit - Prêt en 2h</div>
                        </div>
                      </label>
                      <label className="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:bg-red-50 transition-colors">
                        <input
                          type="radio"
                          name="delivery"
                          value="delivery"
                          checked={deliveryOption === 'delivery'}
                          onChange={(e) => setDeliveryOption(e.target.value as 'pickup' | 'delivery')}
                          className="text-red-600"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">Livraison à domicile</div>
                          <div className="text-sm text-gray-600">5,90€ - Sous 24h</div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Code promo */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Code promo</h3>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="BIENVENUE10"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                      <button
                        onClick={applyPromoCode}
                        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Appliquer
                      </button>
                    </div>
                    {promoApplied && (
                      <div className="mt-3 flex items-center gap-2 text-green-600">
                        <FiCheck size={16} />
                        <span className="text-sm">Code promo appliqué (-10%)</span>
                      </div>
                    )}
                  </div>

                  {/* Totaux */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-700">
                      <span>Sous-total</span>
                      <span>{subtotal.toFixed(2)}€</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Remise (-10%)</span>
                        <span>-{discount.toFixed(2)}€</span>
                      </div>
                    )}
                    <div className="flex justify-between text-gray-700">
                      <span>Livraison</span>
                      <span>{deliveryFee > 0 ? `${deliveryFee.toFixed(2)}€` : 'Gratuit'}</span>
                    </div>
                    <div className="border-t border-gray-300 pt-3">
                      <div className="flex justify-between text-xl font-bold text-gray-900">
                        <span>Total</span>
                        <span>{total.toFixed(2)}€</span>
                      </div>
                    </div>
                  </div>

                  {/* Bouton de commande */}
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <FiCreditCard size={20} />
                    Finaliser la commande
                  </button>

                  {/* Informations supplémentaires */}
                  <div className="mt-6 space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FiTruck size={16} className="text-red-600" />
                      <span>Livraison gratuite dès 50€</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiAward size={16} className="text-red-600" />
                      <span>Qualité garantie</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiPhone size={16} className="text-red-600" />
                      <span>Support client 7j/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Panier vide */
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiShoppingCart size={48} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Votre panier est vide</h2>
              <p className="text-gray-600 mb-8">Découvrez nos délicieuses viandes et commencez vos achats</p>
              <Link
                href="/viandes/boeuf"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <FiPackage size={20} />
                Découvrir nos produits
              </Link>
            </div>
          )}
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