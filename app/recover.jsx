import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';

import AuthHeader from '../components/AuthHeader';
import Input from '../components/Input';
import Button from '../components/Button';
import { COLORS } from '../constants/theme';

export default function RecoverScreen() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ email: '', code: '', newPassword: '' });

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
    else router.push('/'); 
  };

  const renderProgressBar = () => (
    <View style={styles.progressRow}>
      <View style={[styles.progressLine, { backgroundColor: COLORS.secondary }]} />
      <View style={[styles.progressLine, { backgroundColor: step >= 2 ? COLORS.primary : COLORS.border }]} />
      <View style={[styles.progressLine, { backgroundColor: step === 3 ? COLORS.secondary : COLORS.border }]} />
    </View>
  );

  return (
    <KeyboardAvoidingView style={styles.mainContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <AuthHeader />

      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.contentWrapper}>
          
          <View style={styles.topSection}>
            <Image source={require('../assets/images/logo.png')} style={styles.centerLogo} resizeMode="contain" />
            <Text style={styles.title}>Recupere sua senha</Text>
            <Text style={styles.subtitle}>Junte-se a milhares de Brasileiros que fazem a diferença</Text>
          </View>

          <View style={styles.card}>
            {renderProgressBar()}

            {step === 1 && (
              <>
                <Text style={styles.stepTitle}>Encontre sua conta</Text>
                <Text style={styles.stepSubtitle}>Insira seu email</Text>
                <Input placeholder="seu@email.com" value={form.email} onChangeText={(t) => handleChange('email', t)} />
                <Button title="Continuar" onPress={handleNextStep} />
              </>
            )}

            {step === 2 && (
              <>
                <Text style={styles.stepTitle}>Confirme sua conta</Text>
                <Text style={styles.stepSubtitle}>Enviamos um código para seu email. Insira esse código para confirmar sua conta</Text>
                <Input placeholder="Insira o código" value={form.code} onChangeText={(t) => handleChange('code', t)} keyboardType="numeric" />
                <Button title="Continuar" onPress={handleNextStep} />
                <Button title="Receber código novamente" variant="outline" onPress={() => {}} />
              </>
            )}

            {step === 3 && (
              <>
                <Text style={styles.stepTitle}>Insira sua senha</Text>
                <Text style={styles.stepSubtitle}>Insira uma nova senha</Text>
                <Input placeholder="*********" secureTextEntry value={form.newPassword} onChangeText={(t) => handleChange('newPassword', t)} />
                <Button title="Entrar" onPress={handleNextStep} />
              </>
            )}
          </View>

          <Text style={styles.loginText}>
            Já tem conta? <Link href="/" style={styles.loginLink}>Entrar</Link>
          </Text>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: COLORS.backgroundGray },
  scrollContainer: { flexGrow: 1, paddingBottom: 40 },
  contentWrapper: { alignItems: 'center', paddingTop: 30, paddingHorizontal: 20 },
  topSection: { alignItems: 'center', marginBottom: 20 },
  centerLogo: { height: 60, width: 60, marginBottom: 10 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#000', marginBottom: 5 },
  subtitle: { fontSize: 16, color: COLORS.textDark, textAlign: 'center' },
  card: { backgroundColor: '#FFFFFF', width: '100%', maxWidth: 480, borderRadius: 16, padding: 30, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3, borderWidth: 1, borderColor: COLORS.border },
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 10, marginBottom: 30 },
  progressLine: { flex: 1, height: 4, borderRadius: 2 },
  stepTitle: { fontSize: 22, fontWeight: 'bold', color: '#000', marginBottom: 5 },
  stepSubtitle: { fontSize: 16, color: '#000', marginBottom: 20 },
  loginText: { marginTop: 24, fontSize: 16, color: COLORS.textDark },
  loginLink: { color: COLORS.primary, fontWeight: 'bold' }
});