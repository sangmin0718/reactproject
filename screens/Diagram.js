import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Diagram({ onNext }) {
  const [selected, setSelected] = useState([]);

  const choices = [
    { id: 'arrow', image: require('../assets/images/Arrow.png')},
    { id: 'circle', image: require('../assets/images/Circle.png')},
    { id: 'cross', image: require('../assets/images/Cross.png')},
    { id: 'hexagon', image: require('../assets/images/Hexagon.png')},
  ];

  const toggleSelect = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter(i => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  const checkAnswer = () => {
    const correctIndexes = [2, 3];

    const isCorrect =
      selected.length === correctIndexes.length &&
      selected.every(i => correctIndexes.includes(i));

    if (selected.length === 0) {
      Alert.alert('선택지를 고르세요.');
      return;
    }

    if (isCorrect) {
      onNext();
    } else {
      Alert.alert('다시 고르세요.');
    }
  };

  return (
    
    <View style={styles.container}>
      
      <Text style={styles.questionTextOne}>아래의 예시는 2개의 도형이 서로 겹쳐진 모습입니다.</Text>
      <Text style={styles.questionTextTwo}>어떤 도형이 겹쳐진 것인지 찾아서 동그라미 하세요.</Text>
      <Image 
        source={require('../assets/images/Correct.png')}
        style={styles.correctImage}
      />


      <View style={styles.choiceGrid}>
        {choices.map((c, index) => (
          <TouchableOpacity
            key={c.id}
            style={[styles.choiceCard, selected.includes(index) && styles.choiceSelected]}
            onPress={() => toggleSelect(index)}
          >
            <Image source={c.image} style={styles.choiceImage} />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.checkButton} onPress={checkAnswer}>
        <Text style={styles.checkButtonText}>다음페이지로</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  questionTextOne: {
    fontSize: 16,
    fontWeight: '700',
    paddingTop: 40,
    textAlign: 'center',
  },
  questionTextTwo: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  correctImage: {
    width: '100%',
    height: 280,
    borderRadius: 12,
    marginBottom: 18,
    marginTop: -20,
    resizeMode: 'contain',
  },
  choiceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  choiceCard: {
    width: '48%',
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  choiceSelected: {
    borderColor: '#007c89',
    borderWidth: 2,
    backgroundColor: '#eef9fa',
  },
  choiceImage: {
    width: '100%',
    height: 110,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  checkButton: {
    backgroundColor: '#007c89',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  checkButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
});
