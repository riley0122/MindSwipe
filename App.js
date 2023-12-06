import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Editor"
          component={EditorScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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

function GetCards() {
  storage.getAllDataForKey("card").then((data) => {
    console.log(data);
  });
}

function Hello() {
  GetCards();
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: "white",
          fontWeight: "bold",
          marginBottom: 35,
        }}
      >
        Welcome to MindSwipe!
      </Text>
    </View>
  );
}

function CreateButton({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Editor");
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          backgroundColor: "#FF6F61",
          borderRadius: 5,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#F5F5F5",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          + Create new card set +
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Hello />
      <CreateButton navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
}

function EditorScreen() {
  return (
    <View style={styles.container}>
      <Text>Edit your card set</Text>
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

export default MyStack;
