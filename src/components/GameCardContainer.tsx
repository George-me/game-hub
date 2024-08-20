import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Card>
  );
};

export default GameCardContainer;
