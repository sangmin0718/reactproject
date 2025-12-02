import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Day3_2({ onPrev, onNext }) {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");

  const handlePress1 = (value) => {
    setAnswer1(value);
  };

  const handlePress2 = (value) => {
    setAnswer2(value);
  };

  let resultText1 = "";
  let resultColor1 = "#1e1e1e";
  if (answer1 === "동물") {
    resultText1 = "정답입니다.";
    resultColor1 = "#1b5e20";
  } else if (answer1 !== "") {
    resultText1 = "다시 골라 보세요.";
    resultColor1 = "#b71c1c";
  }

  let resultText2 = "";
  let resultColor2 = "#1e1e1e";
  if (answer2 === "과일") {
    resultText2 = "정답입니다.";
    resultColor2 = "#1b5e20";
  } else if (answer2 !== "") {
    resultText2 = "다시 골라 보세요.";
    resultColor2 = "#b71c1c";
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
          <View style={styles.runTag}>
            <Text style={styles.tagText}>실행</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.item}>
            <Image
              source={require("../assets/images/dog.png")}
              style={styles.image}
            />
            <Text style={styles.label}>강아지</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={require("../assets/images/cat.png")}
              style={styles.image}
            />
            <Text style={styles.label}>고양이</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={require("../assets/images/horse.png")}
              style={styles.image}
            />
            <Text style={styles.label}>말</Text>
          </View>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress1("동물")}
          >
            <Text style={styles.buttonText}>동물</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress1("상의")}
          >
            <Text style={styles.buttonText}>상의</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress1("과일")}
          >
            <Text style={styles.buttonText}>과일</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.result, { color: resultColor1 }]}>
          {resultText1}
        </Text>
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
              source={require("../assets/images/banana.png")}
              style={styles.image}
            />
            <Text style={styles.label}>바나나</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={require("../assets/images/apple.png")}
              style={styles.image}
            />
            <Text style={styles.label}>사과</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={require("../assets/images/watermelon.png")}
              style={styles.image}
            />
            <Text style={styles.label}>수박</Text>
          </View>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress2("동물")}
          >
            <Text style={styles.buttonText}>동물</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress2("상의")}
          >
            <Text style={styles.buttonText}>상의</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress2("과일")}
          >
            <Text style={styles.buttonText}>과일</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.result, { color: resultColor2 }]}>
          {resultText2}
        </Text>
      </View>

      <View style={styles.nextWrapper}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.nextButton} onPress={onPrev}>
            <Text style={styles.nextText}>이전</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.nextButton} onPress={onNext}>
            <Text style={styles.nextText}>다음</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
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
    color: "#ffffff",
  },
  box: {
    marginBottom: 20,
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
  },
    nextButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#dddddd",
    marginHorizontal: 4,
    },
  nextText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
