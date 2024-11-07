import { Image } from "@nextui-org/react";
import Vite from "../assets/vitejs.svg";
import { Typography } from "@mui/joy";

const WATERMARK = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full gap-4 py-10">
      <Typography
        style={{
          textAlign: "center",
          fontSize: "clamp(10px, 1vw, 23px)",
          fontFamily: "Roboto Mono",
          color: "#d1d5db",
        }}
      >
        Feito com
      </Typography>

      <div className="flex items-center justify-center gap-2">
        <Image width={50} src={Vite} />
        <Typography
          style={{
            fontSize: "clamp(25px, 2.5vw, 30px)",
            fontFamily: "Lexend Deca",
            color: "white",
          }}
        >
          Vite.js
        </Typography>
      </div>
    </div>
  );
};

export default WATERMARK;
