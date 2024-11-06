import { Typography } from "@mui/joy";
import { Button } from "@nextui-org/react";
import ScrollRevealWrapper from "./wrapper"

const Contact = () => {
  return (
    <ScrollRevealWrapper duration={1.2}>
      <div id="contact" style={{ padding: "100px 0" }}>
        <div className="relative flex items-center justify-center w-[300px] sm:w-[211px] md:w-[900px] mt-8 max-w-full md:mt-0 mx-auto">
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
                fontSize: "clamp(10px, 2.5vw, 12px)",
                fontFamily: "Roboto Mono",
                color: "#00bbf0",
              }}
            >
              03.
            </Typography>
            <Typography
              style={{
                fontSize: "clamp(10px, 2.5vw, 15x)",
                fontFamily: "Roboto Mono",
                color: "#00bbf0",
              }}
            >
              Qual é o próximo passo?
            </Typography>

            <div></div>
          </div>
        </div>
        <div
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography
            style={{
              fontSize: "clamp(10px, 2.5vw, 25px)",
              fontFamily: "Lexend Deca",
              color: "white",
            }}
          >
            Entre em contato
          </Typography>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              margin: "10px 0 0",
              textAlign: "center",
              maxWidth: "500px",
            }}
          >
            <Typography
              style={{ fontSize: "clamp(10px, 2.5vw, 15px)", color: "#d1d5db" }}
            >
              Estou em busca de novas oportunidades e ficarei feliz em conversar
              sobre possíveis colaborações. Caso queira trocar ideias ou tenha
              perguntas, minha caixa de entrada está sempre aberta. Responderei
              o mais rápido possível!
            </Typography>
          </div>
          <Button
            onClick={() =>
              (window.location = "mailto:lucasmoreiraprivado@proton.me")
            }
            style={{ fontFamily: "Lexend Deca", marginTop: "30px" }}
            color="primary"
            radius="full"
            variant="bordered"
          >
            Entre em contato
          </Button>
        </div>
      </div>
    </ScrollRevealWrapper>
  );
};

export default Contact;
