import {Image} from "@nextui-org/react";

export default function Imagem() {
  return (
    <Image
      isBlurred
      width={240}
      src="https://nextui.org/images/album-cover.png"
      alt="NextUI Album Cover"
      className="m-5"
    />
  );
}