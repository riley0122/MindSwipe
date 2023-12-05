import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function Hello() {
  return (
    <View>
      <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
        Welcome to MindSwipe!
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <Hello />
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001F3F",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
