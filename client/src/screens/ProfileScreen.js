import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { User, Settings, Bell, ShieldCheck } from 'lucide-react-native';

const ProfileOption = ({ icon: Icon, title }) => (
  <TouchableOpacity style={styles.option}>
    <View style={styles.optionLeft}>
      <Icon color="#6C63FF" size={22} />
      <Text style={styles.optionText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarCircle}>
          <User color="#FFF" size={50} />
        </View>
        <Text style={styles.userName}>Your Name</Text>
        <Text style={styles.userEmail}>user@example.com</Text>
      </View>

      <View style={styles.section}>
        <ProfileOption icon={Bell} title="Reminders" />
        <ProfileOption icon={ShieldCheck} title="Privacy & Security" />
        <ProfileOption icon={Settings} title="App Settings" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FBFF' },
  header: { alignItems: 'center', paddingVertical: 40, backgroundColor: '#8E84FF', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  avatarCircle: { width: 100, height: 100, borderRadius: 50, backgroundColor: 'rgba(255,255,255,0.3)', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  userName: { fontSize: 24, fontWeight: 'bold', color: '#FFF' },
  userEmail: { fontSize: 14, color: 'rgba(255,255,255,0.8)' },
  section: { padding: 20, marginTop: 10 },
  option: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#EEE' },
  optionLeft: { flexDirection: 'row', alignItems: 'center' },
  optionText: { fontSize: 16, color: '#333', marginLeft: 15, fontWeight: '500' }
});