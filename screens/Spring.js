import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Spring({ onNext }) {
  const [selected, setSelected] = useState(null);

  const choices = [
    { id: 'scarf', image: require('../assets/images/scarf.png'), correct: false },
    { id: 'ssuk', image: require('../assets/images/ssuk.png'), correct: true },
    { id: 'sandals', image: require('../assets/images/sandals.png'), correct: false },
    { id: 'chestnut', image: require('../assets/images/chestnut.png'), correct: false },
  ];

  const checkAnswer = () => {
    const choice = choices[selected];
    if ( !choice || !choice.correct) {
      Alert.alert('다시 시도하세요.');
    } else {
      onNext();
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/spring.png')}
        style={styles.seasonImage}
      />

      <Text style={styles.questionText}>봄과 어울리는 이미지를 골라보세요</Text>

      <View style={styles.choiceGrid}>
        {choices.map((c, index) => (
          <TouchableOpacity
            key={c.id}
            style={[styles.choiceCard, selected === index && styles.choiceSelected]}
            onPress={() => setSelected(index)}>
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
  seasonImage: {
    width: '100%',
    height: 280,
    borderRadius: 12,
    marginBottom: 18,
    resizeMode: 'cover',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
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
  choiceLabel: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
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
