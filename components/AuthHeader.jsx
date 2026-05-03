import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import { COLORS } from '../constants/theme';

export default function AuthHeader({ activeTab }) {
  const isRegister = activeTab === 'Cadastrar';

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <Image source={require('../assets/images/logo.png')} style={styles.logoIcon} resizeMode="contain" />
          <Text style={styles.title}>
            <Text style={{color: COLORS.primary}}>Pets</Text> <Text style={{color: COLORS.secondary}}>Brasil</Text>
          </Text>
          {activeTab && (
            <View style={styles.activeTab}>
              <Text style={styles.activeTabText}>{activeTab}</Text>
            </View>
          )}
        </View>
        <Link href="/help" style={styles.helpLink}>Precisa de Ajuda?</Link>
      </View>
      <View style={[styles.bottomLine, isRegister ? styles.lineRegister : styles.lineLogin]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15, backgroundColor: '#FFFFFF' },
  leftSection: { flexDirection: 'row', alignItems: 'center' },
  logoIcon: { height: 35, width: 35, marginRight: 10 },
  title: { fontSize: 22, fontWeight: 'bold', marginRight: 20 },
  activeTab: { backgroundColor: '#D1F0D9', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 20 },
  activeTabText: { color: COLORS.primary, fontWeight: 'bold' },
  helpLink: { color: COLORS.secondary, fontSize: 16 },
  bottomLine: { width: '100%' },
  lineLogin: { height: 1, backgroundColor: COLORS.border },
  lineRegister: { height: 3, backgroundColor: '#2D9CDB' },
});