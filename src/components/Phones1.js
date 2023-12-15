import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Phones1 = () => {
  return (
    <div className="mx-auto max-w-screen-xl pt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <div className="card1">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
              <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674385/Croma%20Assets/Communication/Mobiles/Images/300700_0_uo6nfi.png" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Iphones
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
                src="https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H-485x485-optimized.jpeg"
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Iphones
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
                src="https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/i/p/iphone_14_pro_max_gold_pdp_image_position-1a_avail__en-in-removebg-preview.png"
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Iphones
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

export default Phones1;
