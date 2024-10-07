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

import seventh from "../public/media/seventh.png"
import nxwss from "../public/media/nxwss.png"
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
        title="Arkè Consulting - Diamo vita alle tue Idee!"
        description="Noi crediamo che la creatività debba fluire senza ostacoli: la nostra mission è liberare gli imprenditori, ideatori o sognatori dalle catene della gestione, consentendo loro di concentrarsi esclusivamente sulla realizzazione delle proprie idee."
        ogTitle="Arkè Consulting - Diamo vita alle tue Idee!"
        ogDescription="Noi crediamo che la creatività debba fluire senza ostacoli: la nostra mission è liberare gli imprenditori, ideatori o sognatori dalle catene della gestione, consentendo loro di concentrarsi esclusivamente sulla realizzazione delle proprie idee."
        ogImage="/media/seo-favicon.ico"
      />
      <div className="main-contents">
        <Link target="_blank" rel="noopener noreferrer" href={`https://wa.me/393899264088?text=Ciao%2C%20sono%20*nome*%2C%20*ruolo*%20di%20*nome%20societ%C3%A0*%2C%20che%20si%20occupa%20di.....%0A%0AVorrei%20pi%C3%B9%20info%20sui%20servizi%20di%20Ark%C3%A8.%20`}>
          <FaWhatsapp className="wa-icon"/>
        </Link>
        <Collapse in={showTitle} className="py-5">
          <Row>
            <div className="col-12 col-lg-12 typewriter-container">
              <Typewriter
                texts={[
                  "la tua Identità dal Principio",
                  "strategie di successo per Aziende",
                  "la tua Web App",
                ]}
              />
            </div>
          </Row>
        </Collapse>
{/*         <ScaleFade
          in={showSubtitle}
          transition={{ exit: { duration: 2 } }}
          className="py-5"
        >
          <Row id="about" className="justify-content-center text-center py-5">
            <div className="col-lg-6" data-aos="fade-up">
              <p className="text-white py-3">
                Noi crediamgirao che la creatività debba fluire senza ostacoli: la
                nostra mission è liberare gli imprenditori, ideatori o sognatori
                dalle catene della gestione, consentendo loro di concentrarsi
                esclusivamente sulla realizzazione delle proprie idee.
              </p>
              <p className="text-white py-3">
                Ed è qui che entra in gioco Arkè... dal principio!
              </p>
            </div>
          </Row>
        </ScaleFade> */}
        <ScaleFade
          in={showServices}
          transition={{ exit: { duration: 2 } }}
          className="py-5"
        >
          <Row
            id="services"
            data-aos="fade-up"
            className="justify-content-center text-center"
          >
            <h1 className="text-white font-bold py-3">Servizi</h1>
            <div className="d-flex justify-content-center align-items-center flex-wrap py-5 gap-lg-0">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="col-6 col-lg-3 d-flex py-4 flex-column justify-content-start align-items-center gap-2"
                  onClick={() => showServiceModal(service)}
                >
                  <Image
                    src={service.icon}
                    width={service.width}
                    className="hover-move"
                  />
                  <h4 className="text-white font-bold pt-2">{service.title}</h4>
                </div>
              ))}
            </div>
          </Row>
          {selectedService && (
            <InfoSlide
              isOpen={!!selectedService}
              toggleSlide={hideServiceModal}
              subtitle={selectedService.subtitle}
              description={selectedService.description}
            />
          )}
        </ScaleFade>
        <Row
          id="case-study"
          data-aos="fade-up"
          className="justify-content-center text-center"
        >
          <h1 className="text-white font-bold py-3">Case Study</h1>
          <div className="d-flex justify-content-center align-items-center flex-wrap py-5 gap-5 gap-lg-5">
            <Image
              src={seventh}
              width={75}
              className="img-fluid case-icon"
            />
            <Image
              src={nxwss}
              width={100}
              className="img-fluid case-icon"
            />
          </div>
        </Row>
        <ScaleFade
          in={showTeam}
          transition={{ exit: { duration: 2 } }}
          className="py-5"
        >
          <Row
            id="team"
            data-aos="fade-up"
            className="justify-content-center text-center"
          >
            <h1 className="text-white font-bold py-3">Chi siamo</h1>
            <div className="d-flex justify-content-center align-items-center flex-wrap py-5 gap-5 gap-lg-0">
              <div className="col-12 col-lg-4 d-flex flex-column justify-content-start align-items-center gap-2">
                <Image src={eduardo} width={155} className="rounded-all" />
                <h4 className="text-white font-bold pt-2">Eduardo Serafino</h4>
                <p className="text-white font-light">Co-Founder | CEO</p>
              </div>
              <div className="col-12 col-lg-4 d-flex flex-column justify-content-start align-items-center gap-2">
                <Image src={marco} width={155} className="rounded-all" />
                <h4 className="text-white font-bold pt-2">Marco Vecchione</h4>
                <p className="text-white font-light">
                  Co-Founder | Art Director
                </p>
              </div>
              <div className="col-12 col-lg-4 d-flex flex-column justify-content-start align-items-center gap-2">
                <Image src={giorgia} width={155} className="rounded-all" />
                <h4 className="text-white font-bold pt-2">Giorgia Campus</h4>
                <p className="text-white font-light">Co-Founder | CMO</p>
              </div>
            </div>
          </Row>
        </ScaleFade>
        {/* <ScaleFade
          id="contacts"
          in={showContacts}
          transition={{ exit: { duration: 2 } }}
          className="py-5"
        >
          <Row
            data-aos="fade-up"
            className="justify-content-center text-center py-5"
          >
            <div className="col-12 col-lg-6">
              <h1 className="text-white font-bold py-3">
                Resta in contatto con noi!
              </h1>
            </div>
            <div className="col-12 col-lg-6 p-2">
              <div className=" p-3 rounded-4 d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-3">
                  <InputText placeholder="Nome" />
                  <InputText placeholder="E-Mail" />
                </div>
                <TextArea placeholder="Messaggio" />
                <Button>Invia</Button>
              </div>
            </div>
          </Row>
        </ScaleFade> */}
      </div>
    </>
  );
};

export default HomePage;
