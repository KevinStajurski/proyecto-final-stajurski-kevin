import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Cities, Zones, Plan} from '../screens'

const Stack = createNativeStackNavigator()

function PlansNavigator() {
    return(
            <Stack.Navigator screenOptions={({route})=>({headerTitleAlign: 'center'})}>
                <Stack.Screen name='Ciudades' component={Cities}/>
                <Stack.Screen name='Zonas' component={Zones}/>
                <Stack.Screen name='Plano' component={Plan}/>
            </Stack.Navigator>
    )
}

export default PlansNavigator