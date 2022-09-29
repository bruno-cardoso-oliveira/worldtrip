import { Grid, GridItem } from "@chakra-ui/react";
import Option from './Options'

export default function Options() {
    return (
        <Grid
            templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            mt={["10", "32"]}
            mx="auto"
            maxW="1160px"
            gap={[1, 5]}
        >
            <GridItem>
                <Option icon="cocktail" text="vida noturna" />
            </GridItem>
            <GridItem>
                <Option icon="surf" text="praia" />
            </GridItem>
            <GridItem>
                <Option icon="building" text="moderno" />
            </GridItem>
            <GridItem>
                <Option icon="museum" text="clássico" />
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
                <Option icon="earth" text="e mais..." />
            </GridItem>
        </Grid>    
    );
}