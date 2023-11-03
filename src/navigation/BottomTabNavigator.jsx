import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlansNavigator from './PlansNavigator'
import ReformsNavigator from './ReformsNavigator'
import ProfileNavigator from "./ProfileNavigator";
import { Foundation, Feather, AntDesign } from '@expo/vector-icons';
import {UserProfile} from '../screens'

const BottomTab = createBottomTabNavigator()

function BottomTabNavigator() {
    return <BottomTab.Navigator screenOptions={{ headerShown: false }}>
        <BottomTab.Screen name="Planos" component={PlansNavigator} options={{ tabBarIcon: () => (<Foundation name="map" size={24} color="black" />) }} />
        <BottomTab.Screen name="Reformas" component={ReformsNavigator} options={{ tabBarIcon: () => (<AntDesign  name="upload" size={24} color="black" />) }} />
        <BottomTab.Screen name="Perfil" component={ProfileNavigator} options={{ tabBarIcon: () => (<Feather name="user" size={24} color="black" />) }} />
    </BottomTab.Navigator>
}

export default BottomTabNavigator