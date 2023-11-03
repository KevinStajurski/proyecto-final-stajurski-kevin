import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {SignUp, Login} from '../screens'

const Stack = createNativeStackNavigator()

function AuthNavigator() {
    return(
            <Stack.Navigator screenOptions={({route})=>({headerTitleAlign: 'center'})}>
                <Stack.Screen name='Iniciar Sesión' component={Login}/>
                <Stack.Screen name='Registrarse' component={SignUp}/>
            </Stack.Navigator>
    )
}

export default AuthNavigator