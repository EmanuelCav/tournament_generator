import { DrawerNavigationProp } from "@react-navigation/drawer";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type DrawerRouteType = {
    Event: undefined;
}

export type BottomTabRouteType = {
    Home: undefined;
    Explore: undefined;
    Config: undefined;
    Create: undefined;
}

export type StackNavigationDrawer = DrawerNavigationProp<DrawerRouteType>;
export type StackNavigationBottomTab = BottomTabNavigationProp<BottomTabRouteType>;
