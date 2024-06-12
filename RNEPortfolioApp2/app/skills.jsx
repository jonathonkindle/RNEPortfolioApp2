import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function SkillsPage() {
  return (
    <View style={styles.container}>
      <Link href="/" style={styles.button}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </Link>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Skills</Text>
        <View style={styles.skillsList}>
          <Text style={styles.skill}>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML" style={styles.skillLink}>
              HTML
            </Link>
          </Text>
          <Text style={styles.skill}>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS" style={styles.skillLink}>
              CSS
            </Link>
          </Text>
          <Text style={styles.skill}>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" style={styles.skillLink}>
              JavaScript
            </Link>
          </Text>
          <Text style={styles.skill}>
            <Link href="https://reactjs.org/docs/getting-started.html" style={styles.skillLink}>
              React
            </Link>
          </Text>
          <Text style={styles.skill}>
            <Link href="https://reactnative.dev/docs/getting-started" style={styles.skillLink}>
              React Native
            </Link>
          </Text>
          <Text style={styles.skill}>
            <Link href="https://docs.expo.dev/" style={styles.skillLink}>
              Expo
            </Link>
          </Text>
          <Text style={styles.skill}>
            <Link href="https://nextjs.org/docs" style={styles.skillLink}>
              NextJS
            </Link>
          </Text>
          <Text style={styles.skill}>
            <Link href="https://nodejs.org/en/docs/" style={styles.skillLink}>
              Node
            </Link>
          </Text>
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
    alignItems: 'center',
  },
  title: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  skillsList: {
    alignItems: 'flex-start',
  },
  skill: {
    marginBottom: 10,
  },
  skillLink: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: '600',
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
