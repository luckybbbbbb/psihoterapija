import React from "react";
import { Menu, X, Phone, Mail, Clock, ArrowUp, Eye, EyeOff } from "lucide-react";
import { latinicaData } from "./data/latinica";
import { cirilicaData } from "./data/cirilica";
import SEO from "./components/SEO";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [language, setLanguage] = React.useState<"cirilica" | "latinica">(
    () => {
      const savedLanguage = localStorage.getItem("selectedLanguage");
      return (savedLanguage as "cirilica" | "latinica") || "cirilica";
    }
  );
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = React.useState(false);

  const data = language === "cirilica" ? cirilicaData : latinicaData;

  React.useEffect(() => {
    localStorage.setItem("selectedLanguage", language);
  }, [language]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const trackEvent = (action: string, category: string, label?: string) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: 1
      });
    }
  };

  const handlePhoneClick = () => {
    trackEvent('phone_click', 'contact', 'phone_number_revealed');
    setShowPhoneNumber(true);
  };

  const handleEmailClick = () => {
    trackEvent('email_click', 'contact', 'email_clicked');
  };

  const handleAppointmentClick = () => {
    trackEvent('appointment_click', 'conversion', 'appointment_button');
    scrollToSection("contact");
  };

  const handleAboutClick = () => {
    trackEvent('about_click', 'navigation', 'about_section');
    scrollToSection("about");
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Psihoterapija Suzana Mojsilović"
        description="Gestalt i Schema psihoterapija sa licenciranim psihoterapeutom Suzana Mojsilović u Srbiji. Online i uživo seanse. Anksioznost, depresija, stres, odnosi."
        keywords="psihoterapija, gestalt terapija, schema terapija, online psihoterapija, anksioznost, depresija, stres, psiholog, psihoterapeut, srbija"
        language={language}
      />
      
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
      <header className="bg-white shadow-sm fixed w-full z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <img 
                src="/photos/1.png" 
                alt="Logo - Tvoj Psihoterapeut" 
                className="w-12 h-12 md:w-12 md:h-12 mr-3"
              />
              <h1 className="text-lg md:text-2xl font-serif text-teal-700">
                {data.title}
              </h1>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                className="text-gray-700 hover:text-teal-600 transition-colors cursor-pointer"
                onClick={() => scrollToSection("home")}
              >
                {data.navigation.home}
              </button>
              <button
                className="text-gray-700 hover:text-teal-600 transition-colors cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                {data.navigation.about}
              </button>
              <button
                className="text-gray-700 hover:text-teal-600 transition-colors cursor-pointer"
                onClick={() => scrollToSection("gestalt")}
              >
                {data.navigation.gestalt}
              </button>
              <button
                className="text-gray-700 hover:text-teal-600 transition-colors cursor-pointer"
                onClick={() => scrollToSection("schema")}
              >
                {data.navigation.schema}
              </button>
              <button
                className="text-gray-700 hover:text-teal-600 transition-colors cursor-pointer"
                onClick={() => scrollToSection("contact")}
              >
                {data.navigation.contact}
              </button>

              {/* Language switcher */}
              <div className="flex items-center space-x-2">
                <img
                  src="https://flagcdn.com/w20/rs.png"
                  alt="Serbian flag"
                  className="w-5 h-3"
                />
                <select
                  value={language}
                  onChange={(e) =>
                    setLanguage(e.target.value as "cirilica" | "latinica")
                  }
                  className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-teal-500"
                  aria-label="Select language"
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
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile navigation */}
        <div
          className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-3">
            <button
              className="block w-full text-left px-3 py-3 text-gray-700 text-base hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
              onClick={() => {
                scrollToSection("home");
                setIsMenuOpen(false);
              }}
            >
              {data.navigation.home}
            </button>
            <button
              className="block w-full text-left px-3 py-3 text-gray-700 text-base hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
              onClick={() => {
                scrollToSection("about");
                setIsMenuOpen(false);
              }}
            >
              {data.navigation.about}
            </button>
            <button
              className="block w-full text-left px-3 py-3 text-gray-700 text-base hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
              onClick={() => {
                scrollToSection("gestalt");
                setIsMenuOpen(false);
              }}
            >
              {data.navigation.gestalt}
            </button>
            <button
              className="block w-full text-left px-3 py-3 text-gray-700 text-base hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
              onClick={() => {
                scrollToSection("schema");
                setIsMenuOpen(false);
              }}
            >
              {data.navigation.schema}
            </button>
            <button
              className="block w-full text-left px-3 py-3 text-gray-700 text-base hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
              onClick={() => {
                scrollToSection("contact");
                setIsMenuOpen(false);
              }}
            >
              {data.navigation.contact}
            </button>

            {/* Language switcher for mobile */}
            <div className="flex items-center px-3 py-3 hover:bg-gray-50 rounded-lg transition-colors">
              <img
                src="https://flagcdn.com/w20/rs.png"
                alt="Serbian flag"
                className="w-5 h-3 mr-3"
              />
              <select
                value={language}
                onChange={(e) =>
                  setLanguage(e.target.value as "cirilica" | "latinica")
                }
                className="text-base text-gray-700 bg-transparent border-none focus:outline-none focus:ring-0 cursor-pointer"
                aria-label="Select language"
              >
                <option value="cirilica">Ћирилица</option>
                <option value="latinica">Latinica</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <main>
        <section id="home" className="pt-20 pb-20 md:pb-0">
          <div className="relative h-[700px] sm:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Mirna terapijska soba za psihoterapiju u Srbiji"
              className="w-full h-full object-cover filter blur-sm"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40">
              <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
                <div className="grid md:grid-cols-2 gap-12 w-full">
                  {/* Left column */}
                  <article className="text-white">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif mb-3 md:mb-4 lg:mb-6">
                      {data.hero.title}
                    </h1>
                    <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8">
                      {data.hero.description}
                    </p>
                    <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8">
                      {data.hero.additionalText}
                    </p>
                    
                    {/* Call to action - desktop only */}
                    <div className="hidden md:flex flex-col sm:flex-row gap-4 mt-8">
                      <button
                        onClick={handleAppointmentClick}
                        className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                      >
                        {data.cta.book}
                      </button>
                      <button
                        onClick={handleAboutClick}
                        className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                      >
                        {data.cta.about}
                      </button>
                    </div>
                  </article>

                  {/* Right column */}
                  <article className="text-white pb-40 md:pb-0">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif mb-3 md:mb-4 lg:mb-6">
                      {data.title}
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8">
                      {data.hero.approach}
                    </p>
                    <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8">
                      {data.hero.schemaInfo}
                    </p>
                  </article>
                </div>
                
                {/* Call to action buttons - mobile only, positioned at bottom */}
                <div className="md:hidden absolute bottom-8 left-4 right-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleAppointmentClick}
                      className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                    >
                      {data.cta.book}
                    </button>
                    <button
                      onClick={handleAboutClick}
                      className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                    >
                      {data.cta.about}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* About Me */}
      <section id="about" className="py-16 md:py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <figure className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src="/photos/psihoterapeut.jpg"
                alt="Suzana Mojsilović - psihoterapeut u Srbiji"
                className="w-full h-full object-contain bg-gray-100"
              />
            </figure>
            <article>
              <h2 className="text-lg md:text-xl font-serif text-gray-900 mb-3 md:mb-4">
                {data.about.name}
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                {data.about.education}
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                {data.about.gestaltLicense}
                {language === "cirilica" && (
                  <a
                    href="https://www.gestaltstudio.org.rs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 underline ml-1"
                  >
                    (https://www.gestaltstudio.org.rs/)
                  </a>
                )}
                {language === "latinica" && (
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
                {language === "cirilica" && (
                  <a
                    href="https://schematherapybelgrade.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 underline ml-1"
                  >
                    (https://schematherapybelgrade.com/)
                  </a>
                )}
                {language === "latinica" && (
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
                {language === "cirilica" && (
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
                {language === "latinica" && (
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
            </article>
          </div>
        </div>
      </section>

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
              <div className="text-sm md:text-base text-gray-600">
                <div className="font-bold mb-2" dangerouslySetInnerHTML={{ __html: data.faq.sessionDuration.split('\n\n')[0] }} />
                <div className="italic" dangerouslySetInnerHTML={{ __html: data.faq.sessionDuration.split('\n\n')[1] }} />
              </div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="text-sm md:text-base text-gray-600">
                <div className="font-bold mb-2" dangerouslySetInnerHTML={{ __html: data.faq.sessionFrequency.split('\n\n')[0] }} />
                <div className="italic" dangerouslySetInnerHTML={{ __html: data.faq.sessionFrequency.split('\n\n')[1] }} />
              </div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="text-sm md:text-base text-gray-600">
                <div className="font-bold mb-2" dangerouslySetInnerHTML={{ __html: data.faq.confidentiality.split('\n\n')[0] }} />
                <div className="italic" dangerouslySetInnerHTML={{ __html: data.faq.confidentiality.split('\n\n')[1] }} />
              </div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="text-sm md:text-base text-gray-600">
                <div className="font-bold mb-2" dangerouslySetInnerHTML={{ __html: data.faq.bigProblem.split('\n\n')[0] }} />
                <div className="italic" dangerouslySetInnerHTML={{ __html: data.faq.bigProblem.split('\n\n')[1] }} />
              </div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="text-sm md:text-base text-gray-600">
                <div className="font-bold mb-2" dangerouslySetInnerHTML={{ __html: data.faq.howToKnowTherapist.split('\n\n')[0] }} />
                <div className="italic" dangerouslySetInnerHTML={{ __html: data.faq.howToKnowTherapist.split('\n\n')[1] }} />
              </div>
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
                  {showPhoneNumber ? (
                    <>
                      <h3 className="text-base md:text-lg font-medium text-gray-900">
                        {data.contact.phone}
                      </h3>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText("+381 66 9000 012");
                          alert("Broj telefona kopiran!");
                          trackEvent('phone_copy', 'contact', 'phone_number_copied');
                        }}
                        className="text-teal-600 hover:text-teal-700 text-xs md:text-sm underline"
                        title="Kopiraj broj telefona"
                      >
                        {data.contact.copyText}
                      </button>
                      <button
                        onClick={() => setShowPhoneNumber(false)}
                        className="text-gray-500 hover:text-gray-700 text-xs md:text-sm"
                        title="Sakrij broj telefona"
                      >
                        <EyeOff size={16} />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={handlePhoneClick}
                      className="text-teal-600 hover:text-teal-700 text-base md:text-lg font-medium underline flex items-center space-x-2"
                      title="Prikaži broj telefona"
                    >
                      <span>Prikaži broj telefona</span>
                      <Eye size={16} />
                    </button>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="text-teal-600 mr-3 md:mr-4" size={20} />
                <div>
                  <a
                    href="mailto:suza.psihoterapeut@gmail.com"
                    onClick={handleEmailClick}
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
        <div className="text-center text-gray-400">
          <p>
            &copy; {data.copyright.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
