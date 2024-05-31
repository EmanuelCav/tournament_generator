import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

type RouteProp = {
    Home: undefined;
    Create: undefined;
    Join: undefined;
}

export type StackNativation = NativeStackNavigationProp<RouteProp>;