
import {View, Text, Button} from "react-native";
import {useEffect} from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";


export default function PlannerScreen({navigation}: NativeStackHeaderProps){

  useEffect(() => {
    console.log('Rendering Planner Screen')

    return () => {
      console.log('Unmounting Planner Screen')
    }

  }, [])

  return (
    <View>
      <Text>I am planner screen</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate("Home")
        }}
      />
    </View>
  )
}