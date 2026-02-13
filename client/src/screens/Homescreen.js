import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Smile, Frown, Meh, SmilePlus, CloudRain } from 'lucide-react-native';

const moods = [
  { label: 'Great', icon: SmilePlus, color: '#4CAF50', value: 5 },
  { label: 'Good', icon: Smile, color: '#8BC34A', value: 4 },
  { label: 'Okay', icon: Meh, color: '#FFC107', value: 3 },
  { label: 'Bad', icon: Frown, color: '#FF9800', value: 2 },
  { label: 'Awful', icon: CloudRain, color: '#F44336', value: 1 },
];

export default function HomeScreen() {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.greeting}>Hey! How are you feeling right now?</Text>
        
        <View style={styles.moodGrid}>
          {moods.map((mood) => (
            <TouchableOpacity 
              key={mood.label}
              style={[
                styles.moodCard, 
                selectedMood === mood.value && { borderColor: mood.color, backgroundColor: mood.color + '10' }
              ]}
              onPress={() => setSelectedMood(mood.value)}
            >
              <mood.icon size={40} color={selectedMood === mood.value ? mood.color : '#666'} />
              <Text style={[styles.moodLabel, selectedMood === mood.value && { color: mood.color }]}>
                {mood.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedMood && (
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Continue</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FBFF' },
  content: { padding: 20, alignItems: 'center', justifyContent: 'center', flex: 1 },
  greeting: { fontSize: 24, fontWeight: '700', color: '#1A1A1A', textAlign: 'center', marginBottom: 40 },
  moodGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 15 },
  moodCard: { 
    width: 100, height: 100, backgroundColor: '#FFF', borderRadius: 20, 
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 2, borderColor: 'transparent',
    elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4
  },
  moodLabel: { marginTop: 8, fontSize: 14, fontWeight: '600', color: '#666' },
  nextButton: { 
    marginTop: 50, backgroundColor: '#6C63FF', paddingVertical: 15, paddingHorizontal: 60, borderRadius: 30 
  },
  nextButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});