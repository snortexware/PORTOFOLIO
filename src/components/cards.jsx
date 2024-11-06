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
import ScrollRevealWrapper from "./wrapper";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Cards1() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
  

    
      <div id="projects" className="relative grid grid-cols-1 sm:grid-cols-1 flex justify-center  w-[300px] md:w-[900px] mt-8 md:mt-0 mx-auto">
        <ScrollRevealWrapper duration={0.8}>
          <div
            style={{
              flexDirection: "row",
              gap: "10px",
              justifyContent: "center",
              alignItems: "baseline",
              display: "flex",
              marginBottom: "5%",
            }}
            >
            <Typography
              style={{
                fontSize: "clamp(10px, 2.5vw, 15px)",
                fontFamily: "Roboto Mono",
                color: "#00bbf0",
              }}
              >
              02.
            </Typography>
            <Typography
              style={{
                fontSize: "clamp(10px, 2.5vw, 20px)", // Minimum 10px, ideal 2vw, max 16px
                fontFamily: "Lexend Deca",
                color: "white",
              }}
              >
              Projetos
            </Typography>
          </div>
        </ScrollRevealWrapper>
        <div style={{}} className=" gap-4 items-center justify-center grid grid-cols-1 sm:grid-cols-2 ">
          <ScrollRevealWrapper duration={1.1}>
            <Card
              className=" h-[250px] bg-[#162268]  rounded-lg shadow-lg transition duration-500  hover:translate-y-[-5px] hover:shadow-xl"
            >
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
                  <FaGithub
                    style={{ width: "20px", height: "20px" }}
                  ></FaGithub>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/snortexware/LS2"
                  >
                    <TfiNewWindow style={{ width: "20px", height: "20px" }} />
                  </a>
                </div>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small text-gray-300">
                <p>
                  Um sistema web de agendamento para instalação e manutenção,
                  notificações automáticas e gestão em tempo real. Oferece
                  interface intuitiva para clientes e equipe, com seleção de
                  horários manutenção, cancelamento, troca de titularidade.
                </p>
              </CardBody>
              <CardFooter className="gap-3">
                <Typography
                  style={{
                    whiteSpace: "nowrap",
                    fontFamily: "Roboto Mono",
                    fontSize: "clamp(10px, 2.5vw, 13px)",
                    color: "#d1d5db",
                    textAlign: "center",
                  }}
                >
                  React.js
                </Typography>
                <div className="flex gap-0">
                  <Typography
                    style={{
                      whiteSpace: "nowrap",
                      fontFamily: "Roboto Mono",
                      fontSize: "clamp(10px, 2.5vw, 13px)",
                      color: "#d1d5db",
                      textAlign: "center",
                    }}
                  >
                    Material UI
                  </Typography>
                </div>
                <div className="flex gap-0">
                  <Typography
                    style={{
                      whiteSpace: "nowrap",
                      fontFamily: "Roboto Mono",
                      fontSize: "clamp(10px, 2.5vw, 13px)",
                      color: "#d1d5db",
                      textAlign: "center",
                    }}
                  >
                    Javascript
                  </Typography>
                </div>
                <div className="flex gap-0">
                  <Typography
                    style={{
                      whiteSpace: "nowrap",
                      fontFamily: "Roboto Mono",
                      fontSize: "clamp(10px, 2.5vw, 13px)",
                      color: "#d1d5db",
                      textAlign: "center",
                    }}
                  >
                    Java
                  </Typography>
                </div>
                <div className="flex gap-0">
                  <Typography
                    style={{
                      whiteSpace: "nowrap",
                      fontFamily: "Roboto Mono",
                      fontSize: "clamp(10px, 2.5vw, 13px)",
                      color: "#d1d5db",
                      textAlign: "center",
                    }}
                  >
                    PostgreSQL
                  </Typography>
                </div>
              </CardFooter>
            </Card>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper duration={1.3}>
            <Card className="min-w-full h-[250px]  bg-[#162268]  rounded-lg shadow-lg transition-transform duration-1000 ease-in-out hover:translate-y-[-5px] hover:shadow-xl">
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <BiFolderOpen
                    style={{ color: "#00bbf0", width: "50px", height: "50px" }}
                  />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className=" text-md font-semibold leading-none text-default-800">
                      Cadastro Automatico Bemtevi
                    </h4>
                    <h5 className="text-small tracking-tight text-gray-300">
                      Completo
                    </h5>
                  </div>
                </div>
                <div className="flex gap-5">
                  <FaGithub style={{ width: "20px", height: "20px" }} />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/snortexware/cadastro-automatico"
                  >
                    <TfiNewWindow style={{ width: "20px", height: "20px" }} />
                  </a>
                </div>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small text-gray-300">
                <p>
                  Um sistema de cadastro automatico realizado via API local.
                  Utilizando extensão chrome para extrair dados e Node.js com
                  biblioteca Selenium para realizar automação de cadastro em
                  sistema interno de agenda LS.
                  <br></br>A extesão também injeta um Qr Code na página de
                  impressão de suporte com o código do chamado.
                </p>
              </CardBody>
              <CardFooter className="gap-4">
                <Typography
                  style={{
                    whiteSpace: "nowrap",
                    fontFamily: "Roboto Mono",
                    fontSize: "clamp(10px, 2.5vw, 13px)",
                    color: "#d1d5db",
                    textAlign: "center",
                  }}
                >
                  Javascript
                </Typography>
                <div className="flex gap-0">
                  <Typography
                    style={{
                      whiteSpace: "nowrap",
                      fontFamily: "Roboto Mono",
                      fontSize: "clamp(10px, 2.5vw, 13px)",
                      color: "#d1d5db",
                      textAlign: "center",
                    }}
                  >
                    HTML
                  </Typography>
                </div>
                <div className="flex gap-0">
                  <Typography
                    style={{
                      whiteSpace: "nowrap",
                      fontFamily: "Roboto Mono",
                      fontSize: "clamp(10px, 2.5vw, 13px)",
                      color: "#d1d5db",
                      textAlign: "center",
                    }}
                  >
                    CSS
                  </Typography>
                </div>
                <div className="flex gap-0">
                  <Typography
                    style={{
                      whiteSpace: "nowrap",
                      fontFamily: "Roboto Mono",
                      fontSize: "clamp(10px, 2.5vw, 13px)",
                      color: "#d1d5db",
                      textAlign: "center",
                    }}
                  >
                    Node.js
                  </Typography>
                </div>
                <div className="flex gap-0">
                  <Typography
                    style={{
                      whiteSpace: "nowrap",
                      fontFamily: "Roboto Mono",
                      fontSize: "clamp(10px, 2.5vw, 13px)",
                      color: "#d1d5db",
                      textAlign: "center",
                    }}
                  >
                    EJS
                  </Typography>
                </div>
              </CardFooter>
            </Card>
          </ScrollRevealWrapper>
          <ScrollRevealWrapper width={"100vh"} duration={1.2}>
            
            <Card className=" h-[250px]  bg-[#162268]  rounded-lg shadow-lg transition-transform duration-1000 ease-in-out hover:translate-y-[-5px] hover:shadow-xl">
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <BiFolderOpen
                    style={{ color: "#00bbf0", width: "50px", height: "50px" }}
                    />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className=" text-md font-semibold leading-none text-default-800">
                      Fechamento Automatico MZ
                    </h4>
                    <h5 className="text-small tracking-tight text-gray-300">
                      Em andamento
                    </h5>
                  </div>
                </div>
                <div className="flex gap-5">
                  <FaGithub style={{ width: "20px", height: "20px" }} />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/snortexware/fechamento-automatico_MZ"
                    >
                    <TfiNewWindow style={{ width: "20px", height: "20px" }} />
                  </a>
                </div>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small text-gray-300">
                <p>
                  Um sistema de fechamento de atendimento automatico para
                  Sistema de chat Whatsapp MegaZap feito com a biblioteca
                  Selenium em Node.js, analisando o atendimento e
                  fechando/transferindo de acordo com a tag aplicada pelo
                  atendente.
                </p>
              </CardBody>
              <CardFooter className="gap-4">
                <Typography
                  style={{
                    whiteSpace: "nowrap",
                    fontFamily: "Roboto Mono",
                    fontSize: "clamp(10px, 2.5vw, 13px)",
                    color: "#d1d5db",
                    textAlign: "center",
                  }}
                  >
                  Javascript
                </Typography>
                <div className="flex gap-0">
                  <Typography
                    style={{
                      whiteSpace: "nowrap",
                      fontFamily: "Roboto Mono",
                      fontSize: "clamp(10px, 2.5vw, 13px)",
                      color: "#d1d5db",
                      textAlign: "center",
                    }}
                  >
                    HTML
                  </Typography>
                </div>
                <div className="flex gap-0">
                  <Typography
                    style={{
                      whiteSpace: "nowrap",
                      fontFamily: "Roboto Mono",
                      fontSize: "clamp(10px, 2.5vw, 13px)",
                      color: "#d1d5db",
                      textAlign: "center",
                    }}
                    >
                    CSS
                  </Typography>
                </div>
                <div className="flex gap-0">
                  <Typography
                    style={{
                      whiteSpace: "nowrap",
                      fontFamily: "Roboto Mono",
                      fontSize: "clamp(10px, 2.5vw, 13px)",
                      color: "#d1d5db",
                      textAlign: "center",
                    }}
                    >
                    Node.js
                  </Typography>
                </div>
              </CardFooter>
            </Card>
          </ScrollRevealWrapper>
          <ScrollRevealWrapper width={"100vh"} duration={1.4}>
            <Card className=" h-[250px]  bg-[#162268]  rounded-lg shadow-lg transition-transform duration-1000 ease-in-out hover:translate-y-[-10px] hover:shadow-xl">
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <BiFolderOpen
                    style={{ color: "#00bbf0", width: "50px", height: "50px" }}
                  />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className=" text-md font-semibold leading-none text-gray-300">
                    
                    </h4>
                  </div>
                </div>
                <div className="flex gap-5">
                  <FaGithub
                    style={{ width: "20px", height: "20px" }}
                  ></FaGithub>
                  <TfiNewWindow style={{ width: "20px", height: "20px" }} />
                </div>
              </CardHeader>
              <CardBody className="px-3 py-0  text-small text-gray-300">
                <p></p>
              </CardBody>
              <CardFooter className="gap-3">
                <div className="flex gap-1">
                  <p className="font-semibold text-gray-300 text-small"></p>
                  <p className=" text-default-400 text-small"></p>
                </div>
                <div className="flex gap-1">
                  <p className="font-semibold text-default-400 text-small"></p>
                  <p className="text-default-400 text-small"></p>
                </div>
              </CardFooter>
            </Card>
          </ScrollRevealWrapper>
                    </div>
        </div>
  );
}
