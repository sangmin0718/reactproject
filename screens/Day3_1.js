import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Day3_1() {
  const [answer, setAnswer] = useState("");

  const handlePress = (value) => {
    setAnswer(value);
  };

  let resultText = "";
  if (answer === "상의") {
    resultText = "정답입니다.";
  } else if (answer !== "") {
    resultText = "다시 골라 보세요.";
  }

  return (
    <View style={styles.container}>
      <View style={styles.instructionBox}>
        <Text style={styles.instructionText}>
          각 그림들을 예시와 같이 한 단어로 분류해 보세요.
        </Text>
      </View>

      <View style={styles.box}>
        <View style={styles.headerRow}>
          <View style={styles.exampleTag}>
            <Text style={styles.tagText}>예시</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.item}>
            <Image
              source={require("../assets/images/halfpants.png")}
              style={styles.image}
            />
            <Text style={styles.label}>반바지</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={require("../assets/images/pants.png")}
              style={styles.image}
            />
            <Text style={styles.label}>바지</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={require("../assets/images/skirt.png")}
              style={styles.image}
            />
            <Text style={styles.label}>치마</Text>
          </View>
        </View>

        <View style={styles.exampleAnswerBox}>
          <Text style={styles.exampleAnswer}>하의</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.headerRow}>
          <View style={styles.runTag}>
            <Text style={styles.tagText}>실행</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.item}>
            <Image
              source={require("../assets/images/shirts.png")}
              style={styles.image}
            />
            <Text style={styles.label}>셔츠</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={require("../assets/images/tshirts.png")}
              style={styles.image}
            />
            <Text style={styles.label}>반팔</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={require("../assets/images/zipup.png")}
              style={styles.image}
            />
            <Text style={styles.label}>집업</Text>
          </View>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("동물")}
          >
            <Text style={styles.buttonText}>동물</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("상의")}
          >
            <Text style={styles.buttonText}>상의</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("과일")}
          >
            <Text style={styles.buttonText}>과일</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.result}>{resultText}</Text>
      </View>

      <View style={styles.nextWrapper}>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  instructionBox: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#e0f2ff",
    marginBottom: 20,
  },
  instructionText: {
    fontSize: 16,
    textAlign: "center",
  },
  box: {
    marginBottom: 20,
  },
  headerRow: {
    marginBottom: 10,
  },
  exampleTag: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#ffe0b2",
    alignSelf: "flex-start",
  },
  runTag: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#c8e6c9",
    alignSelf: "flex-start",
  },
  tagText: {
    fontSize: 16,
    fontWeight: "700",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  item: {
    alignItems: "center",
    flex: 1,
    marginHorizontal: 4,
  },
  image: {
    width: "100%",
    height: 120,
  },
  label: {
    marginTop: 2,
    fontSize: 16,
    textAlign: "center",
  },
  exampleAnswerBox: {
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
  exampleAnswer: {
    fontSize: 18,
    fontWeight: "700",
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: "#eeeeee",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
  },
  result: {
    marginTop: 12,
    fontSize: 16,
  },
  nextWrapper: {
    alignItems: "flex-end",
  },
  nextButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#dddddd",
  },
  nextText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
