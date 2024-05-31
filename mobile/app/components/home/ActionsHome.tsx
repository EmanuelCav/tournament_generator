import { Box, Center } from "native-base"

import CardsActionsHome from "./components/actionsHome/CardsActionsHome"
import TextsHome from "./components/actionsHome/TextsHome"

import { StackNativation } from "../../types/props.types"

const ActionsHome = ({ navigation }: { navigation: StackNativation }) => {
    return (
        <Center height={'100%'} width={'100%'}>
            <Box height={'100%'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <TextsHome />
                <CardsActionsHome navigation={navigation} />
            </Box>
        </Center>
    )
}

export default ActionsHome