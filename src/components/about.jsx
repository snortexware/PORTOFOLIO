import { Typography } from "@mui/joy";
import { Card, CardBody, Image } from "@nextui-org/react";
import ScrollRevealWrapper from "./wrapper";

const About = () => {
    return (
        <div style={{ padding: "100px 0px" }} id="about" >

            <ScrollRevealWrapper>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    margin: "0 auto",
                    padding: "5 0%",
                    marginBottom: "100px",
                }}>

                    <div className="gap-x-3 flex flex-col md:flex-row items-center ">
                        <div>
                            <div
                                style={{
                                    flexDirection: 'row',
                                    margin: "10px 0px 40px",
                                    alignItems: 'baseline',
                                    display: 'flex',
                                    marginBottom: '5%',
                                }}
                            >
                                <Typography
                                    style={{
                                        fontSize: "clamp(10px, 2.5vw, 15px)",
                                        fontFamily: 'Roboto Mono',
                                        color: '#00bbf0',
                                    }}
                                >
                                    02.
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

                            <div className="flex flex-col md:flex-row items-start gap-8 max-w-full">
                                <div >
                                    <Typography style={{ fontSize:"clamp(10px, 2.5vw, 15px)", color: '#d1d5db' }}>
                                        Crazy Hamburger is a burger unlike any you have ever tasted before!
                                        <br />
                                        The flavor of this burger will take you on a wild and tasty ride!
                                    </Typography>
                                    <Typography style={{ fontSize:"clamp(10px, 2.5vw, 15px)", color: '#d1d5db' }}>
                                        You won’t believe the size of this burger; it’s simply unbelievable!
                                        <br />
                                        With layers stacked high, this burger will leave you breathless!<br></br>
                                        Cheese from sao paulo from brazil
                                    </Typography>
                                </div>

                                <div className="relative flex items-start">
                                    <Card>
                                        <CardBody>
                                            <Image
                                                alt="NextUI hero Image with delay"
                                                width={211}
                                                height={211}
                                                src="https://media.tenor.com/b-jY8nEnbB8AAAAe/crazy-hamburger.png"
                                            />
                                        </CardBody>
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
