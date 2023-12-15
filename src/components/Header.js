import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import {
  MoonIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const Header = () => {
  return (
    <div>
      <Navbar
        variant="gradient"
        color="blue-gray"
        className="mx-auto max-w-screen-xl from-blue-900 to-blue-800 px-4 py-3"
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5"
          >
            Flipcart Plus
          </Typography>

          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button
              size="sm"
              color="white"
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div>
          <Typography
            as="a"
            href="/"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5"
          >
            Home
          </Typography>
          <div className="ml-auto flex gap-1 md:mr-4">
            <IconButton variant="text" color="white">
              <ShoppingCartIcon className=" h-7 w-7" />
            </IconButton>
            <IconButton variant="text" color="white" className="px-5">
              <MoonIcon className="h-7 w-7" />
            </IconButton>
            <Menu>
              <MenuHandler>
                <Button className="bg-blue-800 ">
                  <UserIcon className=" h-7 w-7" />
                </Button>
              </MenuHandler>
              <MenuList>
                <a href="/login">
                  <MenuItem>Login</MenuItem>
                </a>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
