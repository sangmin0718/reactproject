import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function Day3_3({ onPrev, onNext }) {
  const [answer, setAnswer] = useState("");

  const handlePress = (value) => {
    setAnswer(value);
  };

  let resultText = "";
  let resultColor = "#1e1e1e";

  if (answer === "스마트폰") {
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
            동그라미에 색칠된 2가지 색깔과 순서를 꼭 기억하세요.
          </Text>
        </View>

        <View style={styles.circleRow}>
          <View style={[styles.circle, styles.circleRed]} />
          <View style={[styles.circle, styles.circleYellow]} />
        </View>

        <View style={styles.problemHeaderBox}>
          <Text style={styles.problemHeaderText}>문제</Text>
        </View>

        <View style={styles.problemBox}>
          <Text style={styles.problemText}>
            옛 물건이 아닌 물건을 선택하시오.
          </Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("엿가위")}
          >
            <Text style={styles.buttonText}>엿가위</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("달구지")}
          >
            <Text style={styles.buttonText}>달구지</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("지게")}
          >
            <Text style={styles.buttonText}>지게</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("아궁이")}
          >
            <Text style={styles.buttonText}>아궁이</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("스마트폰")}
          >
            <Text style={styles.buttonText}>스마트폰</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("곤방대")}
          >
            <Text style={styles.buttonText}>곤방대</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.result, { color: resultColor }]}>{resultText}</Text>

        <View style={styles.navRow}>
          {onPrev && (
            <TouchableOpacity style={styles.navButton} onPress={onPrev}>
              <Text style={styles.navText}>이전</Text>
            </TouchableOpacity>
          )}
          {onNext && (
            <TouchableOpacity style={styles.navButton} onPress={onNext}>
              <Text style={styles.navText}>다음</Text>
            </TouchableOpacity>
          )}
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
    marginBottom: 30,
  },
  instructionText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "700",
    color: "#ffffff",
  },
  circleRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 40,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  circleRed: {
    backgroundColor: "#e53935",
  },
  circleYellow: {
    backgroundColor: "#fdd835",
  },
  problemHeaderBox: {
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#167993",
    marginBottom: 8,
  },
  problemHeaderText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
  },
  problemBox: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#f5f5f5",
    marginBottom: 16,
  },
  problemText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "700",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
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
    fontWeight: "700",
  },
  result: {
    marginTop: 12,
    fontSize: 20,
    textAlign: "center",
  },
  navRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  navButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#dddddd",
    marginHorizontal: 4,
  },
  navText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
