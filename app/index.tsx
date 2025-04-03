import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Colors from './../constant/Colors';
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Image source={require('./../assets/images/landing.png')}
        style={[styles.image, { height: width < 400 ? 200 : 250, marginTop: width < 400 ? 50 : 70 }]}
      />
      <View style={[styles.innerContainer, { padding: width < 400 ? 15 : 25, height: width < 400 ? 400 : 500 }]}>
        <Text style={styles.title}>Welcome to icebarkai</Text>
        <Text style={styles.subtitle}>Transforming future</Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/auth/register')}>
          <Text style={[styles.buttonText, { color: Colors.PRIMARY }]}>Let's Start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/auth/signin')} style={[styles.button, styles.secondaryButton]}>
          <Text style={[styles.buttonText, { color: Colors.SECONDARY }]}>Already have an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  image: {
    width: '100%',
  },
  innerContainer: {
    backgroundColor: Colors.PRIMARY,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.WHITE,
  },
  subtitle: {
    fontSize: 20,
    color: Colors.WHITE,
    marginTop: 20,
    textAlign: 'center',
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    marginTop: 20,
    borderRadius: 10,
  },
  secondaryButton: {
    backgroundColor: Colors.PRIMARY,
    borderWidth: 1,
    borderColor: Colors.WHITE,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
  },
});



