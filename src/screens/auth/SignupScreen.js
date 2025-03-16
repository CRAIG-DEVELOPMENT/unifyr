import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Text, Title, Divider, SegmentedButtons } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState('participant');

  const handleSignup = () => {
    setLoading(true);
    // Simulate signup process
    setTimeout(() => {
      setLoading(false);
      // Navigate to main app or verification screen
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="#0a153d" />
          </TouchableOpacity>
          
          <View style={styles.formContainer}>
            <Title style={styles.title}>Create Account</Title>
            <Text style={styles.subtitle}>Join Unifyr today</Text>
            
            <View style={styles.userTypeContainer}>
              <Text style={styles.userTypeLabel}>I am a:</Text>
              <SegmentedButtons
                value={userType}
                onValueChange={setUserType}
                buttons={[
                  { value: 'participant', label: 'Participant' },
                  { value: 'host', label: 'Host' },
                  { value: 'vendor', label: 'Vendor' },
                ]}
                style={styles.segmentedButtons}
              />
            </View>
            
            <TextInput
              label="Full Name"
              value={name}
              onChangeText={setName}
              mode="outlined"
              left={<TextInput.Icon icon="account" />}
              style={styles.input}
              outlineColor="#ddd"
              activeOutlineColor="#0a153d"
            />
            
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              left={<TextInput.Icon icon="email" />}
              style={styles.input}
              autoCapitalize="none"
              keyboardType="email-address"
              outlineColor="#ddd"
              activeOutlineColor="#0a153d"
            />
            
            <TextInput
              label="Phone Number"
              value={phone}
              onChangeText={setPhone}
              mode="outlined"
              left={<TextInput.Icon icon="phone" />}
              style={styles.input}
              keyboardType="phone-pad"
              outlineColor="#ddd"
              activeOutlineColor="#0a153d"
            />
            
            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              mode="outlined"
              left={<TextInput.Icon icon="lock" />}
              right={
                <TextInput.Icon
                  icon={secureTextEntry ? "eye-off" : "eye"}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              }
              secureTextEntry={secureTextEntry}
              style={styles.input}
              outlineColor="#ddd"
              activeOutlineColor="#0a153d"
            />
            
            <TextInput
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              mode="outlined"
              left={<TextInput.Icon icon="lock-check" />}
              right={
                <TextInput.Icon
                  icon={confirmSecureTextEntry ? "eye-off" : "eye"}
                  onPress={() => setConfirmSecureTextEntry(!confirmSecureTextEntry)}
                />
              }
              secureTextEntry={confirmSecureTextEntry}
              style={styles.input}
              outlineColor="#ddd"
              activeOutlineColor="#0a153d"
            />
            
            <Button
              mode="contained"
              onPress={handleSignup}
              style={styles.signupButton}
              contentStyle={styles.buttonContent}
              loading={loading}
              disabled={loading}
            >
              Sign Up
            </Button>
            
            <View style={styles.orContainer}>
              <Divider style={styles.divider} />
              <Text style={styles.orText}>OR</Text>
              <Divider style={styles.divider} />
            </View>
            
            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
                <MaterialCommunityIcons name="google" size={24} color="#DB4437" />
                <Text style={styles.socialButtonText}>Google</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
                <MaterialCommunityIcons name="facebook" size={24} color="#4267B2" />
                <Text style={styles.socialButtonText}>Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  backButton: {
    padding: 15,
  },
  formContainer: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a153d',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  userTypeContainer: {
    marginBottom: 20,
  },
  userTypeLabel: {
    fontSize: 16,
    color: '#0a153d',
    marginBottom: 10,
  },
  segmentedButtons: {
    backgroundColor: '#f5f5f5',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  signupButton: {
    backgroundColor: '#0a153d',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonContent: {
    height: 50,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
  },
  orText: {
    marginHorizontal: 10,
    color: '#777',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    flex: 0.48,
    borderWidth: 1,
  },
  googleButton: {
    borderColor: '#DB4437',
  },
  facebookButton: {
    borderColor: '#4267B2',
  },
  socialButtonText: {
    marginLeft: 10,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#777',
  },
  loginText: {
    color: '#0a153d',
    fontWeight: 'bold',
  },
});

export default SignupScreen;
