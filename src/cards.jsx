import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Avatar,
  Button,
} from "@nextui-org/react";
import { Typography } from "@mui/joy";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { BiFolderOpen } from "react-icons/bi";
import React from "react";
import { TfiNewWindow } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa6";
import ScrollRevealWrapper from "./components/wrapper";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Cards1() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        minWidth: "50px",
        maxWidth: "100vw",
      }}
    >
      <div style={{ padding: '40px 0' }}></div>
      <ScrollRevealWrapper duration={0.8}>
        <div style={{position:'relative',justifyContent: "center", alignItems: 'center', display: 'flex', marginBottom: '5%' }}>
          <Typography
          className='gap-2 grid grid-cols-1 px-8'
            style={{
              fontSize: "clamp(10px, 2.5vw, 20px)", // Minimum 10px, ideal 2vw, max 16px
              fontFamily:"Lexend Deca",
              marginBottom: "5px",
              color: "white",
            }}
          >
            <p style={{display:"flex", fontFamily:'Roboto Mono',color: '#00bbf0'}}>02</p>
            Projetos
          </Typography>
        </div>
      </ScrollRevealWrapper>
      <div
        style={{}}
        className=" gap-4 grid grid-cols-1 sm:grid-cols-2 px-8"
      >
        <ScrollRevealWrapper duration={1.1}>
          <Card
            shadow="xl"
            className=" h-[250px] bg-[#162268]  rounded-lg shadow-lg transition duration-500  hover:translate-y-[-5px] hover:shadow-xl">
            <CardHeader className="justify-between">
              <BiFolderOpen
                style={{ color: "#00bbf0", width: "50px", height: "50px" }}
              />
              <div className="flex gap-1">
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className=" text-md font-semibold leading-none text-default-800">
                    Sistema de Agenda Telecom
                  </h4>
                  <h5 className="text-small tracking-tight text-gray-300">
                    Em andamento
                  </h5>
                </div>
              </div>
              <div className="flex gap-5">
                <FaGithub style={{ width: "20px", height: "20px" }} />
                <TfiNewWindow style={{ width: "20px", height: "20px" }} />
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-gray-300">
              <p>
                Um sistema web de agendamento para instalação e mudança de plano., <br></br>notificações automáticas e gestão em tempo real.
              </p>
              <p>
              Oferece interface intuitiva para <br></br>clientes e equipe, com seleção de horários
              </p>
              <p>
              manutenção, cancelamento, troca de titularidade 
              </p>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className=" text-default-400 text-small">React.js</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">
                  MaterialUI Joy
                </p>
                <p className="font-family-mono font-semibold text-default-400 text-small">
                  Framer Motion
                </p>
                <p className="font-semibold text-default-400 text-small">Java</p>
                <p className="text-default-400 text-small">PostgreSQL</p>
              </div>
            </CardFooter>
          </Card>
        </ScrollRevealWrapper>

        <ScrollRevealWrapper duration={1.3}>
          <Card className="min-w-full h-[280px]  bg-[#162268]  rounded-lg shadow-lg transition-transform duration-1000 ease-in-out hover:translate-y-[-5px] hover:shadow-xl">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <BiFolderOpen
                  style={{ color: "#00bbf0", width: "50px", height: "50px" }}
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className=" text-md font-semibold leading-none text-default-800">
                    Sistema de Agenda Telecom
                  </h4>
                </div>
              </div>
              <div className="flex gap-5">
                <FaGithub style={{ width: "20px", height: "20px" }} />
                <TfiNewWindow style={{ width: "20px", height: "20px" }} />
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-gray-300">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this
                coding adventure!
              </p>
              <span className="pt-2">
                #FrontendWithZoey
                <span className="py-2" aria-label="computer" role="img">
                  💻
                </span>
              </span>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">4</p>
                <p className=" text-default-400 text-small">Following</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">
                  97.1K
                </p>
                <p className="text-default-400 text-small">Followers</p>
              </div>
            </CardFooter>
          </Card>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper width={"100vh"} duration={1.2}>
          <Card className=" h-[280px]  bg-[#162268]  rounded-lg shadow-lg transition-transform duration-1000 ease-in-out hover:translate-y-[-5px] hover:shadow-xl">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <BiFolderOpen
                  style={{ color: "#00bbf0", width: "50px", height: "50px" }}
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className=" text-md font-semibold leading-none text-gray-300">
                    Sistema de Agenda Telecom
                  </h4>
                </div>
              </div>
              <div className="flex gap-5">
                <FaGithub style={{ width: "20px", height: "20px" }} />
                <TfiNewWindow style={{ width: "20px", height: "20px" }} />
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-gray-300">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this
                coding adventure!
              </p>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">4</p>
                <p className=" text-default-400 text-small">Following</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-gray-300 text-small">
                  97.1K
                </p>
                <p className="text-default-400 text-small">Followers</p>
              </div>
            </CardFooter>
          </Card>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper width={"100vh"} duration={1.4}>
          <Card className=" h-[280px]  bg-[#162268]  rounded-lg shadow-lg transition-transform duration-1000 ease-in-out hover:translate-y-[-10px] hover:shadow-xl">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <BiFolderOpen
                  style={{ color: "#00bbf0", width: "50px", height: "50px" }}
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className=" text-md font-semibold leading-none text-gray-300">
                    Sistema de Agenda Telecom
                  </h4>
                </div>
              </div>
              <div className="flex gap-5">
                <FaGithub style={{ width: "20px", height: "20px" }} />
                <TfiNewWindow style={{ width: "20px", height: "20px" }} />
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0  text-small text-gray-300">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this
                coding adventure!
              </p>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="font-semibold text-gray-300 text-small">4</p>
                <p className=" text-default-400 text-small">Following</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">
                  97.1K
                </p>
                <p className="text-default-400 text-small">Followers</p>
              </div>
            </CardFooter>
          </Card>
        </ScrollRevealWrapper>
      </div>
    </div>
  );
}
