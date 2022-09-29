import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        colors:{
            gray: {
                "100": "#F5F8FA",
                "300": "#DADADA",
                "400": "rgba(153, 153, 153, 0.5)",
                "500": "#999999",
                "700": "#47585B",
            },
            yellow: {
                "300": "rgba(255, 186, 8, 0.5)",
                "400": "#FFBA08",
            }
        },
        fonts: {
            heading: 'Poppins',
            body: 'Poppins'
        },
        global: {
            body: {
                bg: 'white',
                color: 'gray.500',
            }
        }
    }
})