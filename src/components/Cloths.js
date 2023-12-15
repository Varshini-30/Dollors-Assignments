import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Cloths = () => {
  return (
    <div className="mx-auto max-w-screen-xl pt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <div className="card1">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
              <img src="https://stylebyemilyhenderson.com/wp-content/uploads/2023/07/Emily-Henderson_Affordable-Summer-Dresses_Casual_Opener.jpg" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Summer Dress
              </Typography>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis tenetur accusamus earum obcaecati reiciendis optio,
                natus odit maxime doloremque necessitatibus rerum ex
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>View</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="card2">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-75">
              <img
                src="https://media.gettyimages.com/id/1081873610/photo/young-woman-on-beach-with-sun-dress.jpg?s=612x612&w=gi&k=20&c=gtFNLfcXu3NfumY0U3C_BATSChYbok66HXzEX7wJtBQ="
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Summer Dress
              </Typography>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas repellendus obcaecati molestias animi quasi! Nostrum
                repudiandae iste deserunt eaque ipsum reprehenderit eveniet
                quisquam reiciendis
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>View</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="card3">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
              <img
                src="https://media.gettyimages.com/id/1176213973/photo/thinking-about-nature.jpg?s=612x612&w=gi&k=20&c=W4AmBPnpW2F1T-HBIj8fcHyzDDlqRPQDHbwSZoeDvOU="
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Summer Dress
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae nisi maxime, mollitia id, illo rem rerum at saepe
                natus amet a eius dolorem odit ratione sequi quam iusto!
                Reprehenderit, officia!
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>View</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cloths;
