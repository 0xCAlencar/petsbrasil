import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

export default function MainHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image source={require('../assets/images/logo.png')} style={styles.logoIcon} resizeMode="contain" />
      </View>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Procure itens" placeholderTextColor={COLORS.textDark} />
        <FontAwesome name="search" size={16} color={COLORS.textDark} style={styles.searchIcon} />
      </View>

      <View style={styles.rightSection}>
        <TouchableOpacity><Text style={styles.linkVerde}>Doações</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.linkVerde}>Quero doar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}><FontAwesome name="bell-o" size={20} color={COLORS.secondary} /></TouchableOpacity>
        <TouchableOpacity style={styles.avatarContainer}><Text style={styles.avatarText}>W</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, backgroundColor: COLORS.background, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  leftSection: { flexDirection: 'row', alignItems: 'center' },
  logoIcon: { height: 40, width: 40 },
  searchContainer: { flex: 1, maxWidth: 400, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.inputBackground, borderRadius: 8, paddingHorizontal: 12 },
  searchInput: { flex: 1, paddingVertical: 8, fontSize: 14, color: '#000', outlineStyle: 'none' },
  searchIcon: { marginLeft: 8 },
  rightSection: { flexDirection: 'row', alignItems: 'center', gap: 20 },
  linkVerde: { color: COLORS.primary, fontSize: 16, fontWeight: '500' },
  iconButton: { padding: 4 },
  avatarContainer: { width: 35, height: 35, borderRadius: 17.5, backgroundColor: COLORS.secondary, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});