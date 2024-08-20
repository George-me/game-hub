import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaWindows,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  //Index signature
  const iconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    windows: FaWindows,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((plaform) => (
        <Icon color="gray.500" as={iconMap[plaform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
