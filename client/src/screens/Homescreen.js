import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, Alert } from 'react-native';
import { Moon, Activity, Coffee, Droplets, Brain, CheckCircle2 } from 'lucide-react-native';

const QuestionCard = ({ title, question, icon: Icon, onSelect, selectedValue }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Icon color="#FFF" size={22} style={styles.headerIcon} />
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
    <Text style={styles.questionText}>{question}</Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity 
        style={[styles.choiceButton, selectedValue === true && styles.selectedButton]} 
        onPress={() => onSelect(true)}
      >
        <Text style={[styles.buttonText, selectedValue === true && styles.selectedButtonText]}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.choiceButton, selectedValue === false && styles.selectedButton]} 
        onPress={() => onSelect(false)}
      >
        <Text style={[styles.buttonText, selectedValue === false && styles.selectedButtonText]}>No</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function HomeScreen() {
  const [answers, setAnswers] = useState({});

  const handleSelect = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  const handleSubmit = () => {
    Alert.alert("Check-in Complete", "Your responses have been saved for your weekly insights!");
    // Later, this is where we will call your Backend API
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.mainTitle}>Daily Check-In</Text>
          <Text style={styles.subTitle}>Track your wellbeing</Text>
        </View>

        <QuestionCard 
          title="Good Sleep" 
          question="Did you sleep well last night?" 
          icon={Moon}
          selectedValue={answers.sleep}
          onSelect={(val) => handleSelect('sleep', val)}
        />

        <QuestionCard 
          title="Stress Level" 
          question="Are you feeling stressed today?" 
          icon={Activity}
          selectedValue={answers.stress}
          onSelect={(val) => handleSelect('stress', val)}
        />

        <QuestionCard 
          title="Caffeine Intake" 
          question="Have you had caffeine today?" 
          icon={Coffee}
          selectedValue={answers.caffeine}
          onSelect={(val) => handleSelect('caffeine', val)}
        />

        {/* New Question 4: Hydration */}
        <QuestionCard 
          title="Stayed Hydrated" 
          question="Have you drunk enough water today?" 
          icon={Droplets}
          selectedValue={answers.water}
          onSelect={(val) => handleSelect('water', val)}
        />

        {/* New Question 5: Mindfulness */}
        <QuestionCard 
          title="Mindfulness" 
          question="Did you take a moment to breathe or meditate?" 
          icon={Brain}
          selectedValue={answers.meditation}
          onSelect={(val) => handleSelect('meditation', val)}
        />

        <TouchableOpacity 
          style={[
            styles.submitButton, 
            Object.keys(answers).length < 5 && styles.submitButtonDisabled
          ]}
          onPress={handleSubmit}
          disabled={Object.keys(answers).length < 5}
        >
          <Text style={styles.submitText}>Finish Check-in</Text>
          <CheckCircle2 color="#FFF" size={20} style={{marginLeft: 10}} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#8E84FF' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40, paddingTop: 20 },
  headerSection: { marginBottom: 30 },
  mainTitle: { fontSize: 34, fontWeight: '800', color: '#FFF' },
  subTitle: { fontSize: 17, color: 'rgba(255, 255, 255, 0.8)', marginTop: 4 },
  card: { 
    backgroundColor: 'rgba(255, 255, 255, 0.15)', 
    borderRadius: 24, 
    padding: 20, 
    marginBottom: 16,
    borderWidth: 1, 
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  headerIcon: { marginRight: 8 },
  cardTitle: { fontSize: 20, fontWeight: '700', color: '#FFF' },
  questionText: { fontSize: 16, color: 'rgba(255, 255, 255, 0.9)', marginBottom: 20 },
  buttonContainer: { flexDirection: 'row', gap: 12 },
  choiceButton: { 
    flex: 1, paddingVertical: 14, alignItems: 'center', 
    borderRadius: 16, backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.2)' 
  },
  selectedButton: { backgroundColor: '#FFF', borderColor: '#FFF' },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
  selectedButtonText: { color: '#8E84FF' },
  submitButton: { 
    backgroundColor: '#6C63FF', padding: 18, borderRadius: 20, 
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10,
    elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 5
  },
  submitButtonDisabled: { opacity: 0.5, backgroundColor: 'rgba(255, 255, 255, 0.2)' },
  submitText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});