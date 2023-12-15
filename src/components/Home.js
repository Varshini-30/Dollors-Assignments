import React from "react";

import { Carousel, IconButton } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const EcommerceCard = ({ title, description, image, path }) => {
  return (
    <Link to={path}>
      <Card className="w-96 mb-8 relative">
        <CardHeader shadow={false} floated={false} className="h-60">
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>

        <CardBody className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="text-white text-center">
            <Typography color="white" className="font-medium">
              {title}
            </Typography>
            <Typography
              variant="small"
              color="white"
              className="font-normal opacity-75"
            >
              {description}
            </Typography>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

const Home = () => {
  const cardsData = [
    {
      title: "Fashion",
      description: "Step into style with our trendy fashion collection...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJzkMYfrc4iOUIFRpmD-4yRrVIG93kMQJQQ&usqp=CAU",
      path: "/fashion",
    },
    {
      title: "Electronics",
      description:
        "Discover cutting-edge electronics that seamlessly blend innovation...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl_zl39cO2ij4g3cPSVu8nAu51lgrIx9Fz1g&usqp=CAU",
      path: "/electronics",
    },
    {
      title: "Jewellers",
      description:
        "Enhance your productivity with a sleek and comfortable wireless keyboard.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBjzpIOVjzjEJQn3vBM_FlGDovITUrFDa6w&usqp=CAU",
      path: "/jewellers",
    },
  ];

  return (
    <div>
      <Carousel
        className="mx-auto max-w-screen-xl px-4 py-3 pt-10"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/1d106026d4daf695.jpg?q=20"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/039ec2390c9d9c67.jpeg?q=20"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/efad44c6d919443e.jpg?q=20"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
      <div className="mx-auto max-w-screen-xl px-4 py-3 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  ">
          {cardsData.map((card, index) => (
            <EcommerceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
