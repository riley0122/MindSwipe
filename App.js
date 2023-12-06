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

const SessionStorage = new Storage({
  size: 150,
  storageBackend: AsyncStorage,
  defaultExpires: 500 * 3600 * 24, // 12 hours
  enableCache: false,
});

class Card {
  constructor() {
    this.front;
    this.back;
    this.uid =
      Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
}

class Session {
  constructor() {
    this.setID;
    this.correct;
    this.incorrect;
  }

  get rating() {
    return (this.correct / this.correct + this.incorrect) * 100;
  }
}

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
