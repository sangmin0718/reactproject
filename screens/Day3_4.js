import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function Day3_4({ onPrev }) {
  const [answer, setAnswer] = useState("");

  const handlePress = (value) => {
    setAnswer(value);
  };

  let resultText = "";
  let resultColor = "#1e1e1e";

  if (answer === "3") {
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
      showsVerticalScrollIndicator={true}
      indicatorStyle="black"
    >
      <View>
        <View style={styles.instructionBox}>
          <Text style={styles.instructionText}>
            앞에서 보았던 동그라미의 색깔과 순서가 맞는 것을 선택하세요.
          </Text>
        </View>

        <View style={styles.optionRow}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberText}>1</Text>
          </View>
          <TouchableOpacity
            style={styles.circlePair}
            onPress={() => handlePress("1")}
          >
            <View style={[styles.colorCircle, styles.green]} />
            <View style={[styles.colorCircle, styles.darkGray]} />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />

        <View style={styles.optionRow}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberText}>2</Text>
          </View>
          <TouchableOpacity
            style={styles.circlePair}
            onPress={() => handlePress("2")}
          >
            <View style={[styles.colorCircle, styles.purple]} />
            <View style={[styles.colorCircle, styles.blue]} />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />

        <View style={styles.optionRow}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberText}>3</Text>
          </View>
          <TouchableOpacity
            style={styles.circlePair}
            onPress={() => handlePress("3")}
          >
            <View style={[styles.colorCircle, styles.red]} />
            <View style={[styles.colorCircle, styles.yellow]} />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />

        <View style={styles.optionRow}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberText}>4</Text>
          </View>
          <TouchableOpacity
            style={styles.circlePair}
            onPress={() => handlePress("4")}
          >
            <View style={[styles.colorCircle, styles.purple]} />
            <View style={[styles.colorCircle, styles.green]} />
          </TouchableOpacity>
        </View>

        <Text style={[styles.result, { color: resultColor }]}>{resultText}</Text>

        <View style={styles.navRow}>
          <TouchableOpacity style={styles.navButton} onPress={onPrev}>
            <Text style={styles.navText}>이전</Text>
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
    marginBottom: 30,
  },
  instructionText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "700",
    color: "#ffffff",
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  numberCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#167993",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  numberText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#167993",
  },
  circlePair: {
    flexDirection: "row",
    flex: 1,
  },
  colorCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  green: {
    backgroundColor: "#2ecc71",
  },
  darkGray: {
    backgroundColor: "#424242",
  },
  purple: {
    backgroundColor: "#9c27b0",
  },
  blue: {
    backgroundColor: "#03a9f4",
  },
  red: {
    backgroundColor: "#e53935",
  },
  yellow: {
    backgroundColor: "#fdd835",
  },
  divider: {
    height: 1,
    backgroundColor: "#cccccc",
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
  },
  navRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
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