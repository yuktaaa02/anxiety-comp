import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Youtube, Wind, BookOpen } from 'lucide-react-native';

const TechniqueCard = ({ title, description }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Wind color="#de99fe" size={20} />
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
    <Text style={styles.cardDescription}>{description}</Text>
  </View>
);

const VideoLink = ({ title, channel, url }) => (
  <TouchableOpacity style={styles.videoCard} onPress={() => Linking.openURL(url)}>
    <Youtube color="#FF0000" size={24} />
    <View style={styles.videoText}>
      <Text style={styles.videoTitle}>{title}</Text>
      <Text style={styles.videoChannel}>{channel}</Text>
    </View>
  </TouchableOpacity>
);

export default function BreathingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Relaxation Hub</Text>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <BookOpen color="#f1b7ff" size={22} />
            <Text style={styles.sectionTitle}>Simple Techniques</Text>
          </View>
          
          <TechniqueCard 
            title="Box Breathing" 
            description="Inhale for 4 seconds, hold for 4, exhale for 4, and hold for 4. Repeat 4 times." 
          />
          <TechniqueCard 
            title="4-7-8 Technique" 
            description="Inhale for 4 seconds, hold for 7, and exhale forcefully for 8 seconds." 
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Youtube color="#d4a5f8" size={22} />
            <Text style={styles.sectionTitle}>Guided Videos</Text>
          </View>
          
          <VideoLink 
            title="5-Minute Anxiety Relief" 
            channel="Saurabh Bothra" 
            url="https://youtu.be/OtHPzU0-t2Y?si=gEhrrHDSuIdDArDs" 
          />
          <VideoLink 
            title="Box Breathing Guide" 
            channel="Saurabh Bothra" 
            url="https://youtu.be/8TTABLdGCKI?si=En2Iv6QPXwTdcY3R" 
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#8E84FF' },
  scrollContent: { padding: 20, paddingTop: 40 },
  header: { fontSize: 32, fontWeight: '800', color: '#FFF', marginBottom: 30 },
  section: { marginBottom: 30 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { color: '#FFF', fontSize: 22, fontWeight: '700', marginLeft: 10 },
  card: { 
    backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 18, padding: 18, marginBottom: 12,
    borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.2)' 
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  cardTitle: { color: '#FFF', fontSize: 18, fontWeight: '700', marginLeft: 8 },
  cardDescription: { color: 'rgba(255, 255, 255, 0.9)', fontSize: 15, lineHeight: 22 },
  videoCard: { 
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', 
    borderRadius: 18, padding: 15, marginBottom: 12 
  },
  videoText: { marginLeft: 15 },
  videoTitle: { color: '#333', fontSize: 16, fontWeight: '700' },
  videoChannel: { color: '#666', fontSize: 14 }
});