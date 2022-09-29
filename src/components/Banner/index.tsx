import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Banner() {
    return (
        <Flex
            bgImage="url('/background.png')"
            w="100%"
            h={["163px", "250px", "250px", "335px"]}
            bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
            bgRepeat="no-repeat"
            bgSize="cover" // dimensiona a imagem o menor possível para que mesmo assim ela preencha o espaço
        >
            <Flex
                justify={['center', 'space-between']} // celular alinha o texto no centro e dispositivos maiores da um space-between entre o texto e o avião
                align="center"
                w="100%"
                mx="auto"
                px={["4", "10", "15", "20", "36"]}
            >
                <div>
                    <Heading color="gray.100" fontWeight="500" fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}>
                        5 continentes <br />Infinitas possibilidades.
                    </Heading>
                    <Text 
                        color="gray.300" 
                        mt="5" 
                        fontSize={["0.8rem", "xl"]}
                        maxW={["100%", "100%", "100%", "550px"]} 
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </div>

                <Image 
                    src="./airplane.svg"
                    alt="avião"
                    w={["300px", "300px", "300px", "430px"]}
                    display={["none", "none", "block"]} // none vai ignorar a imagem (dispositivos menores), assim apenas mostrando texto
                    transform="translateY(48px)" // faz com que o avião fique um pouco mais para baixo que o banner, dando impressão de sobreposição
                    ml="8" // margin a esquerda para que o avião não encoste no texto
                />
               

            </Flex>
            
            
        </Flex>
    );
}