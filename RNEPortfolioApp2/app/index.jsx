import { View, Text, StyleSheet, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from '../components/ImageViewer';
import Button from '../components/Button';

const PlaceholderImage = require('../assets/images/profile.jpeg');

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter();

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to My Portfolio</Text>
        
        <View style={styles.profileImage}>
        <ImageViewer 
          placeholderImageSource={PlaceholderImage} 
          selectedImage={selectedImage}
        />
        </View>
        <View style={styles.imageSelector}>
          <Button theme="primary" label="Select" onPress={pickImageAsync}/>
        </View>
        
        <Link href="/projects" style={styles.link}>
          <Text style={styles.linkText}>Projects (Push)</Text>
        </Link>
        <Text style={styles.navigationButton} onPress={() => router.replace('/skills')}>
          Skills (Replace)
        </Text>
        <Link href="/contact" style={styles.link}>
          <Text style={styles.linkText}>Contact</Text>
        </Link>
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  link: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20,
    width: '100%',
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  navigationButton: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    padding: 15,
    backgroundColor: '#F2F2F5',
    borderRadius: 8,
    width: '100%',
  },
  imageSelector: {
    marginBottom: 20,
    textAlign: 'center',
    width: '50%',
  }
});
