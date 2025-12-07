import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function Day3_1({ onNext }) {
  const [answer, setAnswer] = useState("");

  const handlePress = (value) => {
    setAnswer(value);
  };

  let resultText = "";
  let resultColor = "#1e1e1e";

  if (answer === "상의") {
    resultText = "정답입니다.";
    resultColor = "#1b5e20";
  } else if (answer !== "") {
    resultText = "다시 골라 보세요.";
    resultColor = "#b71c1c";
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      contentContainerStyle={styles.container}
    >
      <View>
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
              <Text style={styles.label}>자켓</Text>
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

          <Text style={[styles.result, { color: resultColor }]}>
            {resultText}
          </Text>
        </View>

        <View style={styles.nextWrapper}>
          <TouchableOpacity style={styles.nextButton} onPress={onNext}>
            <Text style={styles.nextText}>다음</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: "#ffffff",
  },
  instructionBox: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#167993",
    marginBottom: 20,
  },
  instructionText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "700",
    color: "#ffffff"
  },
  box: {
    marginBottom: 40,
  },
  headerRow: {
    marginBottom: 10,
  },
  exampleTag: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "#033645",
    alignSelf: "flex-start",
  },
  runTag: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "#167993",
    alignSelf: "flex-start",
  },
  tagText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
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
    fontWeight: "700",
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
    fontSize: 18,
    fontWeight: "700",
  },
  result: {
    marginTop: 12,
    fontSize: 24,
    textAlign: "center",
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
