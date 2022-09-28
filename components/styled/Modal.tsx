import {Text, View, Modal as DefaultModal, StyleSheet} from "react-native";
import {PressableText} from "./PressableText";
import {useState} from "react";

export function Modal() {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <DefaultModal
        visible={isModalVisible}
        transparent={false}
        animationType="fade"
      >
        <View style={styles.centerView}>
          <Text>Hello There!</Text>
          <PressableText
            text={"Close"}
            onPress={() => {
              setModalVisible(false)
            }}
          />
        </View>
      </DefaultModal>
      <PressableText
        text={"Check Sequence"}
        onPress={() => {
          setModalVisible(true)
        }}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})