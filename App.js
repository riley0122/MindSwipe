import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = new Storage({
  size: 50,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});

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
