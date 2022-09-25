import {Pressable, Text, PressableProps} from "react-native";

export function PressableText(props: PressableProps & {text: string}) {

  return (
    <Pressable
      {...props}
    >
      <Text style={{textDecorationLine: "underline", color: "blue"}}>
        {props.text}
      </Text>
    </Pressable>
  )
}