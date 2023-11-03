import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {UserProfile} from '../screens'

const Stack = createNativeStackNavigator()

function ProfileNavigator() {
    return(
            <Stack.Navigator screenOptions={({route})=>({headerTitleAlign: 'center'})}>
                <Stack.Screen name='Mi perfil' component={UserProfile}/>
            </Stack.Navigator>
    )
}

export default ProfileNavigator