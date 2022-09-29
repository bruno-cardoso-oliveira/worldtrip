import { Flex, Heading } from "@chakra-ui/react";

import Banner from "../components/Banner";
import Header from "../components/Header";
import Options from "../components/Options";
import Separator from "../components/Separator";
import Slider from "../components/Slider";


export default function Home() {
  return (
    <Flex direction="column">
       <Header />
       <Banner />
       <Options />
       <Separator />

       <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
        color="gray.700"
       >
        Vamos nessa? <br />Então escolha o seu continente
       </Heading>

       <Slider />
    </Flex>
  );
}