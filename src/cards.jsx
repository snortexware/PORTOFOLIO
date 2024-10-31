import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { Typography } from "@mui/joy";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

export default function Cards1() {
  return (
    <>
      <Typography 
        style={{ 
          marginBottom: "5%", 
          display: 'flex', 
          fontFamily: "Lexend Deca", 
          fontSize: "25px", 
          justifyContent: "center", 
          alignItems: "center" 
        }}
      >
        Projetos
      </Typography>
      <div className="max-w-[900px] gap-4 grid grid-cols-1 sm:grid-cols-2 px-8">
        
        {/* Orange Card */}
        <Card className="flex flex-col h-[300px] w-[80vw] sm:w-[45%] md:w-[300px] lg:w-[400px] bg-[#1A1336] p-8 rounded-lg shadow-lg transition-transform duration-700 ease-in-out hover:translate-y-[-5px] hover:shadow-xl">
          <div className="flex flex-col h-full">
            <FolderOpenIcon size={'lg'} />
            <CardBody className="overflow-visible p-0 flex-grow">
              <h1 className="text-white">Hello</h1>
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b className="text-white">Orange</b>
              <p className="text-default-500">$5.50</p>
            </CardFooter>
          </div>
        </Card>

        {/* Tangerine Card */}
        <Card className="flex flex-col h-[300px] w-[80vw] sm:w-[45%] md:w-[300px] lg:w-[400px] bg-[#1A1336] p-8 rounded-lg shadow-lg transition-transform duration-700 ease-in-out hover:translate-y-[-5px] hover:shadow-xl">
          <div className="flex flex-col h-full">
            <FolderOpenIcon size={'lg'} />
            <CardBody className="overflow-visible p-0 flex-grow">
              <h1 className="text-white">Hello</h1>
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b className="text-white">Tangerine</b>
              <p className="text-default-500">$3.00</p>
            </CardFooter>
          </div>
        </Card>

        {/* Raspberry Card */}
        <Card className="flex flex-col h-[300px] w-[80vw] sm:w-[45%] md:w-[300px] lg:w-[400px] bg-[#1A1336] p-8 rounded-lg shadow-lg transition-transform duration-700 ease-in-out hover:translate-y-[-5px] hover:shadow-xl">
          <div className="flex flex-col h-full">
            <FolderOpenIcon size={'lg'} />
            <CardBody className="overflow-visible p-0 flex-grow">
              <h1 className="text-white">Hello</h1>
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b className="text-white">Raspberry</b>
              <p className="text-default-500">$10.00</p>
            </CardFooter>
          </div>
        </Card>

        {/* Lemon Card */}
        <Card className="flex flex-col h-[300px] w-[80vw] sm:w-[45%] md:w-[300px] lg:w-[400px] bg-[#1A1336] p-8 rounded-lg shadow-lg transition-transform duration-1000 ease-in-out hover:translate-y-[-5px] hover:shadow-xl">
          <div className="flex flex-col h-full">
            <FolderOpenIcon size={'lg'} />
            <CardBody className="overflow-visible p-0 flex-grow">
              <h1 className="text-white">Hello</h1>
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b className="text-white">Lemon</b>
              <p className="text-default-500">$5.30</p>
            </CardFooter>
          </div>
        </Card>

      </div>
    </>
  );
}
