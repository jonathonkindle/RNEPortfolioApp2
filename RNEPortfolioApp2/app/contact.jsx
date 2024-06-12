import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Link } from 'expo-router';

export default function ContactPage() {
  return (
    <View style={styles.container}>
      <Link href="/" style={styles.button}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </Link>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Contact</Text>
        <Image source={require('../assets/images/profile.jpeg')} style={styles.profileImage} />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>FULL NAME</Text>
          <TextInput style={styles.input} value="Jonathon Kindle" editable={false} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>EMAIL ADDRESS</Text>
          <TextInput style={styles.input} value="jonathonkindle@gmail.com" editable={false} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>GITHUB</Text>
          <TextInput style={styles.input} value="https://github.com/jonathonkindle" editable={false} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>PHONE NUMBER</Text>
          <TextInput style={styles.input} value="206-446-7906" editable={false} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    alignSelf: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#555555',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F2F2F5',
    color: '#000000',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
