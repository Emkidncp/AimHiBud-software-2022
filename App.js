import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./screens/Welcome"
import SignIn from "./screens/SignIn"
import SignUp from "./screens/SignUp"
import ForgotPassword from "./screens/ForgotPassword"
import StudentTutor from "./screens/StudentTutor"
import Dashboard from "./screens/Dashboard"

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="StudentTutor" component={StudentTutor} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
