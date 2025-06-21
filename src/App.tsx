import React from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  ArrowUp,
} from "lucide-react";
import { latinicaData } from "./data/latinica";
import { cirilicaData } from "./data/cirilica";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [language, setLanguage] = React.useState<'cirilica' | 'latinica'>(() => {
    // Load language from localStorage on initial render
    const savedLanguage = localStorage.getItem('selectedLanguage');
    return (savedLanguage as 'cirilica' | 'latinica') || 'cirilica';
  });
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  
  const data = language === 'cirilica' ? cirilicaData : latinicaData;

  // Save language to localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem('selectedLanguage', language);
  }, [language]);

  // Handle scroll to show/hide scroll to top button
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 z-50 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-serif text-teal-700">
                {data.title}
              </h1>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-teal-600 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                {data.navigation.home}
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-teal-600 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                {data.navigation.about}
              </a>
              <a
                href="#gestalt"
                className="text-gray-700 hover:text-teal-600 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('gestalt');
                }}
              >
                {data.navigation.gestalt}
              </a>
              <a
                href="#schema"
                className="text-gray-700 hover:text-teal-600 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('schema');
                }}
              >
                {data.navigation.schema}
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-teal-600 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                {data.navigation.contact}
              </a>
              
              {/* Language switcher */}
              <div className="flex items-center space-x-2">
                <img 
                  src="https://flagcdn.com/w20/rs.png" 
                  alt="Serbian flag" 
                  className="w-5 h-3"
                />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'cirilica' | 'latinica')}
                  className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-teal-500"
                >
                  <option value="cirilica">Ћирилица</option>
                  <option value="latinica">Latinica</option>
                </select>
              </div>
             
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a 
              href="#home" 
              className="block px-3 py-3 text-gray-700 text-base hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
                setIsMenuOpen(false);
              }}
            >
              {data.navigation.home}
            </a>
            <a 
              href="#about" 
              className="block px-3 py-3 text-gray-700 text-base hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
                setIsMenuOpen(false);
              }}
            >
              {data.navigation.about}
            </a>
            <a 
              href="#gestalt" 
              className="block px-3 py-3 text-gray-700 text-base hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('gestalt');
                setIsMenuOpen(false);
              }}
            >
              {data.navigation.gestalt}
            </a>
            <a 
              href="#schema" 
              className="block px-3 py-3 text-gray-700 text-base hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('schema');
                setIsMenuOpen(false);
              }}
            >
              {data.navigation.schema}
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-3 text-gray-700 text-base hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
            >
              {data.navigation.contact}
            </a>
            
            {/* Language switcher for mobile */}
            <div className="flex items-center px-3 py-3 hover:bg-gray-50 rounded-lg transition-colors">
              <img 
                src="https://flagcdn.com/w20/rs.png" 
                alt="Serbian flag" 
                className="w-5 h-3 mr-3"
              />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'cirilica' | 'latinica')}
                className="text-base text-gray-700 bg-transparent border-none focus:outline-none focus:ring-0 cursor-pointer"
              >
                <option value="cirilica">Ћирилица</option>
                <option value="latinica">Latinica</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <section id="home" className="pt-20">
        <div className="relative h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Mirna terapijska soba"
            className="w-full h-full object-cover filter blur-sm"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
              <div className="grid md:grid-cols-2 gap-12 w-full">
                {/* Left column */}
                <div className="text-white">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif mb-3 md:mb-4 lg:mb-6">
                    {data.hero.title}
                  </h1>
                  <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8">
                    {data.hero.description}
                  </p>
                  <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8">
                    {data.hero.additionalText}
                  </p>
                </div>
                
                {/* Right column */}
                <div className="text-white">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif mb-3 md:mb-4 lg:mb-6">
                    {data.title}
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8">
                    {data.hero.approach}
                  </p>
                  <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8">
                    {data.hero.schemaInfo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-16 md:py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src="/photos/psihoterapeut.jpg"
                alt="Suzana Mojsilović - psihoterapeut"
                className="w-full h-full object-contain bg-gray-100"
              />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-serif text-gray-900 mb-3 md:mb-4">
                {data.about.name}
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                {data.about.education}
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                {data.about.gestaltLicense}
                {language === 'cirilica' && (
                  <a 
                    href="https://www.gestaltstudio.org.rs/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 underline ml-1"
                  >
                    (https://www.gestaltstudio.org.rs/)
                  </a>
                )}
                {language === 'latinica' && (
                  <a 
                    href="https://www.gestaltstudio.org.rs/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 underline ml-1"
                  >
                    (https://www.gestaltstudio.org.rs/)
                  </a>
                )}
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                {data.about.schemaEducation}
                {language === 'cirilica' && (
                  <a 
                    href="https://schematherapybelgrade.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 underline ml-1"
                  >
                    (https://schematherapybelgrade.com/)
                  </a>
                )}
                {language === 'latinica' && (
                  <a 
                    href="https://schematherapybelgrade.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 underline ml-1"
                  >
                    (https://schematherapybelgrade.com/)
                  </a>
                )}
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                {data.about.memberships}
                {language === 'cirilica' && (
                  <>
                    <br />
                    <a 
                      href="https://savezpsihoterapeuta.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 underline"
                    >
                      https://savezpsihoterapeuta.org/
                    </a>
                    <br />
                    <a 
                      href="https://sugp.rs/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 underline"
                    >
                      https://sugp.rs/
                    </a>
                  </>
                )}
                {language === 'latinica' && (
                  <>
                    <br />
                    <a 
                      href="https://savezpsihoterapeuta.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 underline"
                    >
                      https://savezpsihoterapeuta.org/
                    </a>
                    <br />
                    <a 
                      href="https://sugp.rs/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 underline"
                    >
                      https://sugp.rs/
                    </a>
                  </>
                )}
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                {data.about.workApproach}
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                {data.about.therapeuticRelationship}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      {/* <section id="licenses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center text-gray-900 mb-12">
            Profesionalne licence i kvalifikacije
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
                <h3 className="text-xl font-serif text-gray-900 mb-4">
                  Obrazovanje i akreditacije
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-teal-500 mr-3"></div>
                    <p>Diplomirani psiholog - Filozofski fakultet, Univerzitet u Beogradu</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-teal-500 mr-3"></div>
                    <p>Sertifikovani Gestalt psihoterapeut - Gestalt Psychotherapy Training Institute</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-teal-500 mr-3"></div>
                    <p>Član Saveza psihoterapeuta Srbije (SPS)</p>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
                <h3 className="text-xl font-serif text-gray-900 mb-4">
                  Kontinuirana edukacija
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-teal-500 mr-3"></div>
                    <p>Redovno učešće na stručnim konferencijama i seminarima</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-teal-500 mr-3"></div>
                    <p>Supervizijski rad sa iskusnim Gestalt supervizorima</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-teal-500 mr-3"></div>
                    <p>Kontinuirano praćenje najnovijih istraživanja i metoda u oblasti psihoterapije</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-serif text-gray-900 mb-4">
                  Zašto su licence važne?
                </h3>
                <p className="text-gray-600 mb-4">
                  Profesionalne licence i akreditacije su ključni pokazatelji kompetentnosti i stručnosti psihoterapeuta. One garantuju da terapeut:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-teal-500 mr-3"></div>
                    <p>Poseduje potrebno teorijsko znanje i praktične veštine</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-teal-500 mr-3"></div>
                    <p>Radi u skladu sa etičkim kodeksom i profesionalnim standardima</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-teal-500 mr-3"></div>
                    <p>Kontinuirano unapređuje svoje znanje i veštine</p>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-serif text-gray-900 mb-4">
                  Etički standardi i poverljivost
                </h3>
                <p className="text-gray-600 mb-4">
                  Kao licencirani psihoterapeut, obavezujem se na:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-teal-500 mr-3"></div>
                    <p>Potpunu poverljivost podataka i sadržaja terapijskih sesija</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-teal-500 mr-3"></div>
                    <p>Poštovanje profesionalnih granica i etičkih principa</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-teal-500 mr-3"></div>
                    <p>Transparentnost u radu i jasnu komunikaciju sa klijentima</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* What is Gestalt */}
      <section id="gestalt" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-center text-gray-900 mb-8 md:mb-12">
            {data.gestalt.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-2 border-teal-100 hover:border-teal-200 transition-colors">
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                {data.gestalt.description}
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                {data.gestalt.approach}
              </p>
              <p className="text-sm md:text-base text-gray-600">
                {data.gestalt.benefits}
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-2 border-teal-100 hover:border-teal-200 transition-colors">
              <h3 className="text-lg md:text-xl font-serif text-gray-900 mb-3 md:mb-4">
                {data.therapy.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                {data.therapy.description}
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                {data.therapy.sessions}
              </p>
              <p className="text-sm md:text-base text-gray-600">
                {data.therapy.approach}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Therapy */}
      <section id="schema" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-center text-gray-900 mb-8 md:mb-12">
            {data.schema.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                {data.schema.description}
              </p>
              <h3 className="text-lg md:text-xl font-serif text-gray-900 mb-3 md:mb-4">
                {data.schema.maladaptiveSchemasTitle}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {data.schema.maladaptiveSchemas}
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-lg md:text-xl font-serif text-gray-900 mb-3 md:mb-4">
                {data.schema.goalsTitle}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {data.schema.goals}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-center text-gray-900 mb-8 md:mb-12">
            {data.forWhom.title}
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-6">
              {data.forWhom.description}
            </p>
            <p className="text-sm md:text-lg text-gray-600">
              {data.forWhom.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-center text-gray-900 mb-8 md:mb-12">
            {data.faq.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <p className="text-sm md:text-base text-gray-600 font-medium mb-2">
                {data.faq.sessionDuration}
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <p className="text-sm md:text-base text-gray-600 font-medium mb-2">
                {data.faq.sessionFrequency}
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <p className="text-sm md:text-base text-gray-600 font-medium mb-2">
                {data.faq.confidentiality}
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <p className="text-sm md:text-base text-gray-600 font-medium mb-2">
                {data.faq.bigProblem}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-center text-gray-900 mb-8 md:mb-12">
            {data.contact.title}
          </h2>
          <div className="flex justify-center">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center">
                <Phone className="text-teal-600 mr-3 md:mr-4" size={20} />
                <div className="flex items-center space-x-2">
                  <h3 className="text-base md:text-lg font-medium text-gray-900">
                    {data.contact.phone}
                  </h3>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('+381669000012');
                      alert('Broj telefona kopiran!');
                    }}
                    className="text-teal-600 hover:text-teal-700 text-xs md:text-sm underline"
                    title="Kopiraj broj telefona"
                  >
                    {data.contact.copyText}
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="text-teal-600 mr-3 md:mr-4" size={20} />
                <div>
                  <a
                    href="mailto:suza.psihoterapeut@gmail.com"
                    className="text-base md:text-lg font-medium text-gray-900 hover:text-teal-600 transition-colors underline"
                  >
                    {data.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="text-teal-600 mr-3 md:mr-4" size={20} />
                <div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900">
                    {data.contact.workType}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
          <div className=" text-center text-gray-400">
            <p>
              &copy; 2025 Gestalt Psihoterapija Novi Pazar. Sva prava zadržana.
            </p>
          </div>
      </footer>
    </div>
  );
}

export default App;
