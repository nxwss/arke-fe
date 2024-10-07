import {
  Box,
  Button,
  Collapse,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ScaleFade,
  Slide,
  SlideFade,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { ModalHeader, Row } from "react-bootstrap";
import Image from "next/image";

import ReactCompareImage from "react-compare-image";

import { FaWhatsapp } from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";

import pencil from "../public/media/pencil.svg";
import circle from "../public/media/circle.svg";
import flow from "../public/media/flow.svg";
import people from "../public/media/people.svg";
import InputText from "../components/Input";

import marco from "../public/media/IMG_6305.PNG";
import eduardo from "../public/media/IMG_6306.PNG";
import giorgia from "../public/media/IMG_6307.PNG";
import Typewriter from "../components/Typewriter";
import TextArea from "../components/TextArea";
import Link from "next/link";

import seventh from "../public/media/seventh.png";
import nxwss from "../public/media/nxwss.png";
import GiorgiaTypewriter from "../components/GiorgiaTypewriter";
import SEO from "../components/Seo";

const HomePage = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  const phoneNumber = "1234567890";
  const message = encodeURIComponent(
    "Ciao, sono interessato ai vostri servizi!"
  );

  useEffect(() => {
    AOS.init({
      mirror: true,
      delay: 200,
      duration: 600,
    });
  }, []);

  const [selectedService, setSelectedService] = useState(null);

  const showServiceModal = (service) => {
    setSelectedService(service);
  };

  const hideServiceModal = () => {
    setSelectedService(null);
  };

  const services = [
    {
      id: "grafica",
      title: "Grafica",
      subtitle: "Il Tuo Partner Creativo.",
      description:
        "Entra nel mondo di Arkè Consulting, dove la tua creatività non conosce confini. La nostra mission? Liberare imprenditori, ideatori e sognatori dalle preoccupazioni gestionali, offrendoti servizi all'avanguardia in ambito social, ottimizzazione del workflow, sviluppo su misura e strategie vincenti. Con Arkè, ti dedichi a quello che ami, mentre noi trasformiamo le tue idee in realtà.",
      icon: pencil,
      width: 40,
    },
    {
      id: "marketing",
      title: "Marketing",
      subtitle: "Innovazione e Libertà Creativa con Arkè.",
      description:
        "Immagina un luogo dove le tue idee possono fiorire liberamente, senza essere soffocate dalle quotidiane sfide gestionali. Arkè Consulting fa proprio questo: ti supporta con soluzioni innovative in social media, miglioramento dei processi, sviluppo personalizzato e pianificazione strategica. Scegli Arkè e focalizzati sul dare vita alla tua visione, mentre noi curiamo il resto.",
      icon: circle,
      width: 55,
    },
    {
      id: "workflow",
      title: "WorkFlow",
      subtitle: "Dove le Idee Prendono Vita.",
      description:
        "Da ideatori a sognatori, Arkè Consulting è il baluardo per chi aspira a realizzare senza limiti. La nostra mission è chiara: offrirti la libertà di creare, eliminando gli ostacoli della gestione quotidiana. Con un ampio ventaglio di servizi che spaziano dal marketing sui social, all'efficienza dei workflow, allo sviluppo software, fino alla strategia aziendale, Arkè è la chiave per trasformare le tue idee in successi tangibili.",
      icon: flow,
      width: 55,
    },
    {
      id: "social",
      title: "Social",
      subtitle: "Sblocca il Tuo Potenziale Creativo con Arkè.",
      description:
        "Arkè Consulting rappresenta più di un semplice supporto; è il tuo alleato nella realizzazione dei sogni. Crediamo fermamente nella potenza della creatività libera da vincoli e, per questo, offriamo servizi personalizzati in gestione dei social media, ottimizzazione del workflow, sviluppo dedicato e consulenza strategica. Unisciti a noi, e insieme, diamo vita alle tue ambizioni senza lasciare che la gestione quotidiana ti rallenti.",
      icon: people,
      width: 85,
    },
  ];

  const InfoSlide = ({ isOpen, toggleSlide, subtitle, description }) => {
    const ref = useRef();

    // Funzione per chiudere lo Slide se il clic avviene fuori dall'elemento
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        toggleSlide();
      }
    };

    useEffect(() => {
      // Aggiungi l'ascoltatore di eventi quando lo Slide è aperto
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      // Rimuovi l'ascoltatore di eventi quando lo Slide si chiude o il componente viene smontato
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen, toggleSlide]);

    return (
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box p="40px" color="white" bg="" rounded="md" shadow="md" ref={ref}>
          <div className="d-flex align-items-start justify-content-between">
            <div className="d-flex flex-column align-items-start justify-content-between">
              <h5 className="p-0 font-black m-0 pb-4">
                <span className="movingGradientText">Arkè</span> // {subtitle}
              </h5>
              <p className="font-light p-0 m-0">{description}</p>
            </div>
          </div>
        </Box>
      </Slide>
    );
  };

  const [graphicModal, showGraphicModal] = useState(false);
  const [socialModal, showSocialModal] = useState(false);
  const [flowModal, showFlowModal] = useState(false);
  const [marketingModal, showMarketingModal] = useState(false);

  useEffect(() => {
    setShowTitle(true);
    setTimeout(() => setShowSubtitle(true), 1000);
    setTimeout(() => setShowServices(true), 1500);
    setTimeout(() => setShowTeam(true), 2500);
    setTimeout(() => setShowContacts(true), 3000);
  }, []);

  return (
    <>
      <SEO
        title="Giorgia Campus - Arkè Consulting - Diamo vita alle tue Idee!"
        description="Chi sono oggi è il frutto di un percorso fatto di contrasti
                  apparentemente inconciliabili. Dall’economia alle discipline
                  umanistiche, dalle Risorse Umane al Marketing: ora posso
                  osservare il mondo da più prospettive e questo mi rende…
                  un’ibrida! Ma non intendo l’automobile.."
        ogTitle="Giorgia Campus - Arkè Consulting - Diamo vita alle tue Idee!"
        ogDescription="Chi sono oggi è il frutto di un percorso fatto di contrasti
                  apparentemente inconciliabili. Dall’economia alle discipline
                  umanistiche, dalle Risorse Umane al Marketing: ora posso
                  osservare il mondo da più prospettive e questo mi rende…
                  un’ibrida! Ma non intendo l’automobile.."
        ogImage="/media/seo-favicon.ico"
      />
      <div className="main-contents">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/393899264088?text=Ciao%2C%20sono%20*nome*%2C%20*ruolo*%20di%20*nome%20societ%C3%A0*%2C%20che%20si%20occupa%20di.....%0A%0AVorrei%20pi%C3%B9%20info%20sui%20servizi%20di%20Ark%C3%A8.%20`}
        >
          <FaWhatsapp className="wa-icon" />
        </Link>
        <Collapse in={showTitle} className="py-5">
          <Row>
            <div className="col-12 col-lg-12 typewriter-container">
              <GiorgiaTypewriter
                texts={[
                  "il talento",
                  "la bravura",
                  "la passione",
                  "il genio",
                  "le capacità",
                ]}
              />
            </div>
            <div className="d-flex justify-content-center">
              <Link href={'/giorgia-campus/#calendar'}>
                <Button className="rounded-5 px-4">
                  <p className="movingGiorgiaGradientText p-0 m-0">La soluzione è qui</p>
                </Button>
              </Link>
            </div>
          </Row>
        </Collapse>
        <ScaleFade
          in={showServices}
          transition={{ exit: { duration: 2 } }}
          className="py-5"
        >
          <Row
            id="monetizza"
            data-aos="fade-up"
            className="justify-content-center text-center"
          >
            <h1 className="text-white subtitle-hero font-bold py-3 movingGiorgiaGradientText">
              Monetizza il tuo talento
            </h1>
            <div className="d-flex justify-content-center align-items-center flex-wrap py-5 gap-lg-0">
              <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end p-2">
                <Image
                  src={"/media/strategic-img.png"}
                  width={324}
                  height={324}
                  className="hover-move"
                />
              </div>
              <div className="col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start p-0 p-lg-5 pt-5 pt-lg-0 gap-3">
                <h3 className="text-white font-bold text-center text-lg-start">
                  Giorgia Campus
                </h3>
                <p className="font-light text-white text-center text-lg-start">
                  Chi sono oggi è il frutto di un percorso fatto di contrasti
                  apparentemente inconciliabili. Dall’economia alle discipline
                  umanistiche, dalle Risorse Umane al Marketing: ora posso
                  osservare il mondo da più prospettive e questo mi rende…
                  un’ibrida! Ma non intendo l’automobile :)
                </p>
                <Link href={'/giorgia-campus/#calendar'}>
                <Button className="rounded-5 px-4">
                  <p className="movingGiorgiaGradientText p-0 m-0">
                    Contattami
                  </p>
                </Button>
                </Link>
              </div>
            </div>
          </Row>
        </ScaleFade>
        <ScaleFade
          in={showServices}
          transition={{ exit: { duration: 2 } }}
          className="py-5"
        >
          <Row
            id="numeri"
            data-aos="fade-up"
            className="justify-content-center text-center"
          >
            <h1 className="text-white subtitle-hero font-bold py-3 movingGiorgiaGradientText">
              Ho aiutato +300 professionisti a
            </h1>
            <div className="d-flex justify-content-center align-items-start gap-3 flex-wrap py-5 gap-lg-0">
              <div className="col-12 col-lg-4 d-flex px-4 flex-column justify-content-center justify-content-lg-end p-2">
                <h4 className="text-white font-bold text-center text-lg-start">
                  Trovare lavoro in meno di 40 giorni
                </h4>
                <p className="text-white font-light text-center text-lg-start">
                  Grazie a un CV ottimizzato e un profilo Linkedin curato
                </p>
                <h2 className="text-white movingGiorgiaGradientText font-bold text-center text-lg-start">
                  +20% della RAL desiderata
                </h2>
              </div>
              <div className="col-12 col-lg-4 d-flex px-4 flex-column justify-content-center justify-content-lg-end p-2">
                <h4 className="text-white font-bold">
                  Trovare clienti online e aumentare il fatturato
                </h4>
                <p className="text-white font-light">
                  Ad aziende e liberi professionisti
                </p>
                <h2 className="text-white movingGiorgiaGradientText font-bold">
                  +3000% di vendite
                </h2>
              </div>
              <div className="col-12 col-lg-4 d-flex px-4 flex-column justify-content-center justify-content-lg-end p-2">
                <h4 className="text-white font-bold text-center text-lg-end">
                  Ottenere visibilità e autorità
                </h4>
                <p className="text-white font-light text-center text-lg-end">
                  Da media company a grandi multinazionali
                </p>
                <h2 className="text-white movingGiorgiaGradientText font-bold text-center text-lg-end">
                  +2.400.000.000 di impression
                </h2>
              </div>
              <Link href={'/giorgia-campus/#calendar'}>
                <Button className="rounded-5 px-4">
                  <p className="movingGiorgiaGradientText p-0 m-0">Scopri come</p>
                </Button>
              </Link>
            </div>
          </Row>
        </ScaleFade>
        <ScaleFade
          in={showServices}
          transition={{ exit: { duration: 2 } }}
          className="py-5"
        >
          <Row
            id="cv"
            data-aos="fade-up"
            className="justify-content-center text-center"
          >
            <h1 className="text-white subtitle-hero font-bold py-3 movingGiorgiaGradientText">
              Non solo CV
            </h1>
            <div className="d-flex justify-content-center align-items-center flex-wrap py-5 gap-lg-0">
              <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end p-2">
                <ReactCompareImage
                  /* vertical */
                   sliderLineColor="#A00FF6"
                  leftImage="/media/bad-cv.jpeg"
                  rightImage="/media/good-cv.jpeg"
                />
                ;
              </div>
              <div className="col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start p-0 p-lg-5 pt-5 pt-lg-0 gap-3">
                <h3 className="text-white font-bold py-3 movingGiorgiaGradientText text-center text-lg-start">
                  Perchè non trovo lavoro?
                </h3>
                <p className="font-light text-white text-center text-lg-start">
                  Già. Il mondo non sa riconoscere il talento. Ma noi ci
                  mettiamo del nostro per non valorizzarci. <br></br>
                  <br></br>
                  Quante volte dopo un colloquio ti sei detto “potevo dire
                  questo”? O quante volte vedi il tuo CV e non ti senti
                  rappresentato? E quella offerta di lavoro che ti calzava a
                  pennello ma da cui non sei riuscito nemmeno a ottenere un
                  colloquio? O ancora peggio: quante volte hai pensato che il
                  tuo capo avesse meno competenze di te, ma che magari prende il
                  50%, 100% o 200% del tuo stipendio? <br></br>
                  <br></br>
                  No, non è mondo non fa andare avanti solo gli str*nz. Siamo
                  noi che dobbiamo imparare a vendere meglio chi siamo… ma prima
                  bisogna capire cosa l’altro si aspetta da noi. E a volte non
                  basta un buon CV.
                </p>
                <Link href={'/giorgia-campus/#calendar'}>
                <Button className="rounded-5 px-4">
                  <p className="movingGiorgiaGradientText p-0 m-0">
                    Scopri i servizi
                  </p>
                </Button>
                </Link>
              </div>
            </div>
          </Row>
        </ScaleFade>
        <ScaleFade
          in={showServices}
          transition={{ exit: { duration: 2 } }}
          className="py-5"
        >
          <Row
            id="calendar"
            data-aos="fade-up"
            className="justify-content-center text-center"
          >
            <h1 className="text-white subtitle-hero font-bold py-3 movingGiorgiaGradientText">
              La soluzione è qui
            </h1>
            <p className="text-white">Da qualcosa bisogna pur iniziare: compila il form per parlarne con me.
            La prima consulenza telefonica la offro io!</p>
            <div className="d-flex justify-content-center align-items-center flex-wrap py-5 gap-lg-0">
              <div className="col-12 col-lg-8 bg-white rounded-5 d-flex justify-content-center py-0 py-lg-3">
                <iframe
                  src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Y3BSb7U7RgDsRkEJCquAToFWJrDzVDcvjtCz5_WWnube2xO6h5JE3EY5UVFELjJNCYryXtqrA"
                  style={{ border: 0, width: '800px', height: '700px' }}
                  allowFullScreen
                  title="Google Calendar"
                ></iframe>
              </div>
            </div>
          </Row>
        </ScaleFade>
        <ScaleFade
          in={showServices}
          transition={{ exit: { duration: 2 } }}
          className="py-5"
        >
          <Row
            id="dicono"
            data-aos="fade-up"
            className="justify-content-center text-center"
          >
            <h1 className="text-white subtitle-hero font-bold py-3 movingGiorgiaGradientText">
              Cosa dicono di me
            </h1>
            <p className="text-center text-white">Avete mai visto qualcuno che mette quelle negative? Quanta poca autenticità. Io cambio strategia: vi mostro solo quelle di chi mi sta simpatico!             </p>
            <div className="d-flex justify-content-center align-items-stretch gap-3 flex-wrap py-5 gap-lg-0">
              <div className="col-12 col-lg-4 d-flex px-4 flex-column justify-content-center justify-content-lg-end p-2">
                <div className="dicono-card rounded-4 p-4">
                  <h2 className="text-white movingGiorgiaGradientText font-bold text-center text-lg-start">
                    Cristal Coghene
                  </h2>
                  <p className="text-white font-light text-center text-lg-start p-0 m-0">
                    Rifare il CV
                  </p>
                  <div className="d-flex gap-1 justify-content-center justify-content-lg-start">
                    <Image src={'/media/loghettino.png'} width={15} height={15} />
                    <Image src={'/media/loghettino.png'} width={15} height={15} />
                    <Image src={'/media/loghettino.png'} width={15} height={15} />
                    <Image src={'/media/loghettino.png'} width={15} height={15} />
                    <Image src={'/media/loghettino.png'} width={15} height={15} />
                  </div>
                  <p className="text-white font-light text-center text-lg-start pt-3">
                  Inizialmente ero scettica quando ho chiesto aiuto per rifare il mio CV e trovare lavoro, ma mi sono dovuta ricredere. Ora ho un CV che mi valorizza pienamente e rispecchia le mie competenze. Sono davvero soddisfatta sia del risultato che della rapidità con cui è stato realizzato! Grazie mille Giorgia {"<3"} 
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4 d-flex px-4 flex-column justify-content-center justify-content-lg-end p-2">
                <div className="dicono-card rounded-4 p-4">
                  <h2 className="text-white movingGiorgiaGradientText font-bold text-center text-lg-start">
                  Emiliano Nivelli
                  </h2>
                  <p className="text-white font-light text-center text-lg-start p-0 m-0">
                    Personal branding
                  </p>
                  <div className="d-flex gap-1 justify-content-center justify-content-lg-start">
                    <Image src={'/media/loghettino.png'} width={15} height={15} />
                    <Image src={'/media/loghettino.png'} width={15} height={15} />
                    <Image src={'/media/loghettino.png'} width={15} height={15} />
                    <Image src={'/media/loghettino.png'} width={15} height={15} />
                    <Image src={'/media/loghettino.png'} width={15} height={15} />
                  </div>
                  <p className="text-white font-light text-center text-lg-start pt-3">
                  Giorgia è una ragazza giovane e in gamba. Ha risposto alle mie esigenze e in maniera professionale mi ha supportato come consulente in merito al mio profilo Linkedin e alla mia immagine da professionista
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4 d-flex px-4 flex-column justify-content-center justify-content-lg-end p-2">
                <div className="dicono-card rounded-4 p-4">
                  <h2 className="text-white movingGiorgiaGradientText font-bold text-center text-lg-start">
                    Nxwss SRL
                  </h2>
                  <p className="text-white font-light text-center text-lg-start p-0 m-0">
                    Aumentare il fatturato
                  </p>
                  <div className="d-flex gap-1 justify-content-center justify-content-lg-start">
                    <Image src={'/media/loghettino.png'} width={15} height={15} />
                    <Image src={'/media/loghettino.png'} width={15} height={15} />
                    <Image src={'/media/loghettino.png'} width={15} height={15} />
                    <Image src={'/media/loghettino.png'} width={15} height={15} />
                    <Image src={'/media/loghettino.png'} width={15} height={15} />
                  </div>
                  <p className="text-white font-light text-center text-lg-start pt-3">
                  Risultati del genere (e si parla di milioni e milioni di views, impression, utenti unici) in così pochi mesi? Io non ve la consiglio, ce la teniamo per noi!!!
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </ScaleFade>
      </div>
    </>
  );
};

export default HomePage;
