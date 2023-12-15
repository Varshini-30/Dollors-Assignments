import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Bangle = () => {
  return (
    <div className="mx-auto max-w-screen-xl pt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <div className="card1">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
              <img src="https://www.fionadiamonds.com/cdn/shop/products/A100862-2pcs-44gm_550x.png?v=1650694205" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bangles
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
                src="https://www.vaibhavjewellers.com/pub/media/catalog/product/image/17098fc69/22kt-big-size-bridal-gold-bangles-16vn5400-16vn5400-16vn5401.jpg"
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bangles
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
                src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9ef19b6c/images/hi-res/510730VZA2A00_1.jpg?sw=640&sh=640"
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bangles
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

export default Bangle;
