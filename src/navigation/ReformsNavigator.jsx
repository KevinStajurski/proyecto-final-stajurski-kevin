import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Reforms} from '../screens'
import LastReforms from "../screens/Reforms/components/LastReforms/LastReforms";
import NewReform from "../screens/Reforms/components/NewReform/NewReform";

const Stack = createNativeStackNavigator()

function ReformsNavigator() {
    return(
            <Stack.Navigator screenOptions={({route})=>({headerTitleAlign: 'center'})}>
                <Stack.Screen name='Reformas y ampliaciones' component={Reforms}/>
                <Stack.Screen name='Nueva reforma' component={NewReform}/>
                <Stack.Screen name='Ultimas reformas' component={LastReforms}/>
            </Stack.Navigator>
    )
}

export default ReformsNavigator