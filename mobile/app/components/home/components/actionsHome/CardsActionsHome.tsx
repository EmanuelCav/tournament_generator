import { VStack } from "native-base"
import Icon from 'react-native-vector-icons/Ionicons';

import CardActionHome from "./components/CardActionHome"

import { StackNativation } from "../../../../types/props.types";

const CardsActionsHome = ({ navigation }: { navigation: StackNativation }) => {

    const redirectCreate = () => {
        navigation.navigate('Create')
    }

    const redirectJoin = () => {
        navigation.navigate('Join')
    }

    return (
        <VStack alignItems="center" mt={"10"} space={4} justifyContent="space-between">
            <CardActionHome text="JOIN" Icon={Icon} icon='enter' handleRedirect={redirectJoin} />
            <CardActionHome text="CREATE" Icon={Icon} icon='add-circle' handleRedirect={redirectCreate} />
        </VStack>
    )
}

export default CardsActionsHome