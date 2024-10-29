import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Cards1() {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    
  ];

  return (
    
    <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
      {list.map((item, index) => (
        <Card
          style={{
            width: '100%', // Set width to full to utilize grid space
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>

      ))}
    </div>
  );
}
