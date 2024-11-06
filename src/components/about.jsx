import { Typography } from "@mui/joy";
import { Card, CardBody, Image } from "@nextui-org/react";
import ScrollRevealWrapper from "./wrapper";
import { MdDoubleArrow } from "react-icons/md";

const About = () => {
  return (
    <div style={{ padding: "100px 0px" }} id="about">
      <ScrollRevealWrapper>
        <div
              className="relative flex items-center justify-center grid grid-cols-1 sm:grid-cols-1  w-[300px] sm:w-[211px] md:w-[900px] mt-8 md:mt-0 mx-auto">

          <div className="flex flex-col md:flex-row items-center w-full ">
            <div>
              <div
                style={{
                  flexDirection: "row",
                  margin: "10px 0px 40px",
                  alignItems: "baseline",
                  display: "flex",
                  marginBottom: "5%",
                  gap: "10px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "clamp(10px, 2.5vw, 15px)",
                    fontFamily: "Roboto Mono",
                    color: "#00bbf0",
                  }}
                >
                  01.
                </Typography>
                <Typography
                  style={{
                    fontSize: "clamp(10px, 2.5vw, 20px)",
                    fontFamily: "Lexend Deca",
                    color: "white",
                  }}
                >
                  Sobre
                </Typography>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-x-24 max-w-full">
                <div>
                  <Typography
                    style={{
                      fontSize: "clamp(10px, 2.5vw, 15px)",
                      color: "#d1d5db",
                    }}
                  >
                    Olá, eu sou Lucas, um Desenvolvedor de Software e moro em
                    Gaspar, Brasil.
                    <br />
                    Tenho 21 anos e gosto de criar aplicativos bonitos e
                    flexíveis, tanto <br></br>para web quanto para back-end.
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "clamp(10px, 2.5vw, 15px)",
                      color: "#d1d5db",
                    }}
                  >
                    Meu objetivo sempre é criar experiencias seguras e
                    performaticas
                    <br />
                    Aqui estão algumas tecnologias que tenho utilizado
                    recentemente:
                  </Typography>
                  <div className="relative flex items-center justify-center top-4 grid grid-cols-2 sm:grid-cols-3 px-0">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        margin: "0px 0px",
                        marginTop: "5%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <MdDoubleArrow size="14px" color="#00bbf0" />
                        <Typography
                          style={{
                            fontFamily: "Roboto Mono",
                            fontSize: "clamp(10px, 2.5vw, 14px)",
                            color: "#d1d5db",
                            textAlign: "center",
                          }}
                        >
                          React
                        </Typography>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <MdDoubleArrow size="14px" color="#00bbf0" />
                        <Typography
                          style={{
                            fontFamily: "Roboto Mono",
                            fontSize: "clamp(10px, 2.5vw, 14px)",
                            color: "#d1d5db",
                            textAlign: "center",
                          }}
                        >
                          Vite.js
                        </Typography>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        margin: "0px 00px",
                        marginTop: "5%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <MdDoubleArrow size="14px" color="#00bbf0" />
                        <Typography
                          style={{
                            fontFamily: "Roboto Mono",
                            fontSize: "clamp(10px, 2.5vw, 14px)",
                            color: "#d1d5db",
                            textAlign: "center",
                          }}
                        >
                          Javascript
                        </Typography>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <MdDoubleArrow size="14px" color="#00bbf0" />
                        <Typography
                          style={{
                            fontFamily: "Roboto Mono",
                            fontSize: "clamp(10px, 2.5vw, 14px)",
                            color: "#d1d5db",
                            textAlign: "center",
                          }}
                        >
                          Java
                        </Typography>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        margin: "0px 00px",
                        marginTop: "5%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <MdDoubleArrow size="14px" color="#00bbf0" />
                        <Typography
                          style={{
                            fontFamily: "Roboto Mono",
                            fontSize: "clamp(10px, 2.5vw, 14px)",
                            color: "#d1d5db",
                            textAlign: "center",
                          }}
                        >
                          Node.js
                        </Typography>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <MdDoubleArrow size="14px" color="#00bbf0" />
                        <Typography
                          style={{
                            whiteSpace: "nowrap",
                            fontFamily: "Roboto Mono",
                            fontSize: "clamp(10px, 2.5vw, 14px)",
                            color: "#d1d5db",
                            textAlign: "center",
                          }}
                        >
                          Spring Framework
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-center w-[200px] sm:w-[211px] md:w-[300px] mt-8 md:mt-0 mx-auto">
                  <Card>
                    <Image
                      alt="NextUI hero Image with delay"
                      src="https://avatars.githubusercontent.com/u/159702740?v=4"
                    />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollRevealWrapper>
    </div>
  );
};

export default About;
