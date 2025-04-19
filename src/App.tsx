import React from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-serif text-teal-700">
                Gestalt Psihoterapija
              </h1>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Početna
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                O meni
              </a>
              <a
                href="#gestalt"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Gestalt
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Usluge
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Kontakt
              </a>
              <a
                href="#contact"
                className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors inline-block"
              >
                Zakaži termin
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-700">
                Početna
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700">
                O meni
              </a>
              <a href="#gestalt" className="block px-3 py-2 text-gray-700">
                Gestalt
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-700">
                Usluge
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700">
                Kontakt
              </a>
              <button className="w-full mt-4 bg-teal-600 text-white px-6 py-2 rounded-full">
                Zakaži termin
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero section */}
      <section id="home" className="pt-20">
        <div className="relative h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Mirna terapijska soba"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-serif mb-6">
                  Gestalt psihoterapija u Novom Pazaru
                </h1>
                <p className="text-xl mb-8">
                  Otkrijte put ka svesnijem i ispunjenijem životu kroz Gestalt
                  pristup — terapija koja vas osnažuje da budete autentično
                  prisutni i u kontaktu sa sobom i drugima.
                </p>
                <button className="bg-teal-600 text-white px-8 py-3 rounded-full text-lg hover:bg-teal-700 transition-colors">
                  Započnite vaše putovanje
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
              <img
                src="/src/photos/psihoterapeut.jpg"
                alt="Suzana Mojsilović - psihoterapeut"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                Suzana Mojsilović
              </h2>
              <h3 className="text-lg text-teal-600 mb-6">
                Diplomirani psiholog i licencirani psihoterapeut
              </h3>
              <p className="text-gray-600 mb-4">
                Suzana ima više od 15 godina iskustva u radu sa pojedincima,
                parovima i porodicama. Njena praksa je fokusirana na pružanje
                podrške kroz sve životne izazove, uz korišćenje savremenih
                terapijskih pristupa.
              </p>
              <p className="text-gray-600 mb-6">
                Empatija, posvećenost i diskretnost su osnovni principi njenog
                rada. Suzana veruje da svaka osoba ima kapacitet za promenu i
                isceljenje uz odgovarajuću podršku.
              </p>
              <button className="flex items-center text-teal-600 hover:text-teal-700 transition-colors">
                <a href="#licenses" className="flex items-center">
                  Saznaj više <ChevronRight className="ml-2" size={20} />
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section id="licenses" className="py-20 bg-white">
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
      </section>

      {/* What is Gestalt */}
      <section id="gestalt" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center text-gray-900 mb-12">
            Šta je Gestalt psihoterapija?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-teal-100 hover:border-teal-200 transition-colors">
              <p className="text-gray-600 mb-4">
                Gestalt psihoterapija je holistički pristup koji podstiče
                svesnost o sadašnjem trenutku i direktno iskustvo "ovde i sada".
                Ovaj pristup naglašava važnost integrisanja različitih aspekata
                sebe kako bismo funkcionisali kao celina.
              </p>
              <p className="text-gray-600 mb-4">
                Centralne ideje Gestalt pristupa uključuju:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                <li>Svesnost o trenutku i doživljaju ("awareness")</li>
                <li>Kontakt sa sobom i okolinom</li>
                <li>Preuzimanje odgovornosti za sopstvene izbore</li>
                <li>Kreativno prilagođavanje novim situacijama</li>
                <li>Integracija polariteta i nedovršenih iskustava</li>
              </ul>
              <p className="text-gray-600">
                Kroz dijalog, eksperimente i kreativne tehnike, Gestalt terapija
                vam pomaže da osvestite obrasce ponašanja, misli i osećanja, kao
                i da pronađete nove, zdravije načine za suočavanje sa životnim
                izazovima.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-teal-100 hover:border-teal-200 transition-colors">
              <h3 className="text-xl font-serif text-gray-900 mb-4">
                Kada može pomoći Gestalt pristup?
              </h3>
              <p className="text-gray-600 mb-4">
                Gestalt terapija je posebno efikasna kod:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                <li>Anksioznosti i depresije</li>
                <li>Poteškoća u odnosima</li>
                <li>Nedostatka samopouzdanja i samoprihvatanja</li>
                <li>Osećaja praznine i besmisla</li>
                <li>Traume i gubitka</li>
                <li>Potrebe za ličnim rastom i samospoznajom</li>
                <li>Problema sa komunikacijom</li>
                <li>Profesionalnih izazova i pregorenja</li>
              </ul>
              <p className="text-gray-600">
                Kroz naš zajednički rad, pomoći ću vam da osvrnete na životne
                obrasce koji vas ograničavaju i da razvijete nove, autentičnije
                i ispunjenije načine postojanja u svetu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center text-gray-900 mb-12">
            Moje usluge
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Individualna Gestalt terapija",
                description:
                  "Personalizovane sesije fokusirane na povećanje svesnosti, integraciju polariteta i razvoj autentičnog života u sadašnjosti.",
              },
              {
                title: "Psihoterapija parova",
                description:
                  "Poboljšanje komunikacije i povezanosti kroz povećanje svesnosti o dinamici odnosa i unapređenje kontakta među partnerima.",
              },
              {
                title: "Online terapija",
                description:
                  "Gestalt pristup prilagođen virtuelnom okruženju, dostupan odakle god se nalazite, sa istim principima i benefitima.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-serif text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-teal-600 hover:text-teal-700 transition-colors flex items-center">
                  Saznaj više <ChevronRight className="ml-2" size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif text-gray-900 mb-6">
              O sesijama
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">
                  Kako izgleda sesija?
                </h4>
                <p className="text-gray-600 mb-4">
                  Individualne sesije traju 50 minuta i održavaju se u sigurnom,
                  poverljivom okruženju. Prva sesija je fokusirana na
                  upoznavanje i definisanje ciljeva terapije, dok naredne sesije
                  prate vaše potrebe i teme koje želite da istražite.
                </p>
                <p className="text-gray-600">
                  U Gestalt pristupu, terapeut je aktivan saradnik koji vas
                  podržava u istraživanju i prati vaš jedinstveni proces, bez
                  nametanja rešenja ili saveta.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">
                  Trajanje terapije
                </h4>
                <p className="text-gray-600 mb-4">
                  Dužina psihoterapijskog procesa zavisi od vaših potreba i
                  ciljeva. Neki klijenti pronalaze vrednost u kratkoročnom radu
                  (5-10 sesija), dok drugi biraju duži proces za dublje,
                  strukturalne promene.
                </p>
                <p className="text-gray-600">
                  Za optimalnu efikasnost, sesije se najčešće održavaju jednom
                  nedeljno, posebno u početnoj fazi, a kasnije je moguće
                  prilagoditi dinamiku prema vašem napretku i potrebama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center text-gray-900 mb-12">
            Kontaktirajte me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="text-teal-600 mr-4" size={24} />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Telefon
                    </h3>
                    <p className="text-gray-600">+381 XX XXX XXX</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-teal-600 mr-4" size={24} />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      kontakt@gestaltnovipazar.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-teal-600 mr-4" size={24} />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Lokacija
                    </h3>
                    <p className="text-gray-600">
                      Ulica Prvomajska XX
                      <br />
                      Novi Pazar, Srbija
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="text-teal-600 mr-4" size={24} />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Radno vreme
                    </h3>
                    <p className="text-gray-600">
                      Ponedeljak - Petak: 9h - 19h
                      <br />
                      Subota: 10h - 14h (po dogovoru)
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Društvene mreže
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ime i prezime
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 py-3"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 py-3"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 py-3"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Poruka
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 py-3"
                  placeholder="Opišite ukratko razlog za kontakt ili postavite pitanje..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors"
              >
                Pošalji poruku
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Leva strana */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-serif mb-4">Gestalt Psihoterapija</h3>
              <p className="text-gray-400 max-w-md">
                Profesionalne usluge Gestalt psihoterapije u Novom Pazaru, za
                osvešćivanje, lični rast i emocionalno blagostanje.
              </p>
            </div>

            {/* Desna strana */}
            <div>
              <h3 className="text-xl font-serif mb-4">Brzi linkovi</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Početna
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    O meni
                  </a>
                </li>
                <li>
                  <a
                    href="#gestalt"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Gestalt
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Usluge
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; 2025 Gestalt Psihoterapija Novi Pazar. Sva prava zadržana.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
