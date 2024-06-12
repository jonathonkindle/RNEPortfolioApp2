import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function ProjectsPage() {
  return (
    <View style={styles.container}>
      <Link href="/" style={styles.button}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </Link>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Projects</Text>
        
        <View style={styles.projectsList}>
          <Link href="/projects/RNEPortfolioApp" style={styles.projectLink}>
            <Text style={styles.projectLinkText}>RNEPortfolioApp</Text>
          </Link>
          <Link href="/projects/RNENavigation" style={styles.projectLink}>
            <Text style={styles.projectLinkText}>RNENavigation</Text>
          </Link>
          <Link href="/projects/RNETaskManager" style={styles.projectLink}>
            <Text style={styles.projectLinkText}>RNETaskManager</Text>
          </Link>
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
  projectsList: {
    alignItems: 'flex-start',
  },
  projectLink: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  projectLinkText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
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
