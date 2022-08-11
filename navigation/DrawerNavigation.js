import Raect from 'react';
import { createDrawerNavigator} from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator =() => {
    return( 
        <Drawer.Navigator>
            <DrawerScreen name='Home' component={TabNaviagtor}/>
            <DrawerScreen name='Profile' component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;