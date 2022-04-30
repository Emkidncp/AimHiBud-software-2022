import React from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity, Image} from 'react-native';
import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTuH1SxPUHTJy6uJb7HSqgvAtUFYdpwj8",
  authDomain: "aimhibud.firebaseapp.com",
  projectId: "aimhibud",
  storageBucket: "aimhibud.appspot.com",
  messagingSenderId: "639252879040",
  appId: "1:639252879040:web:231a88a63c8bc255a13f25",
  measurementId: "G-48TLNN0VPX"
};
  
  firebase.initializeApp(firebaseConfig);

export default function SignUp({navigation, route}) {
    const {position} = route.params

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');



  const onPressSubmit = () => {
    if (fullName === "") {
      alert("Pleaase enter your full names before proceeding");
    } else if (email === "") {
      alert("You must enter a valid Email Address ");
    } else if (password === "") {
      alert("Please enter password");
    } else if (confirmPassword === "") {
      alert("Please confirm your password");
    } else if (password.length < 6) {
      alert("Password should be more than 6 characters");
    }  else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.trim(), password.trim())
        .then(() => {
           firebase
            .database()
            .ref("Users/" + firebase.auth().currentUser.uid).update({
            fullName, email, password, position
          });
          navigation.navigate("Dashboard", {position})
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

return (
  <View style={styles.container}>
    <Text style = {styles.welcomeText1}>  {position} Sign Up</Text>
    <Image style={styles.logoStyle1} source={require('../assets/Logo.jpeg')} />
    <TextInput
      style={styles.inputStyle}
      onChangeText={setFullName}
      value={fullName}
      placeholder="Enter Full Names"
    />
    <TextInput
      style={styles.inputStyle}
      onChangeText={setEmail}
      value={email}
      placeholder=" Enter Email"
    />
    <TextInput
      style={styles.inputStyle}
      onChangeText={setPassword}
      value={password}
      placeholder=" Enter Password"
      secureTextEntry
    />
    <TextInput
      style={styles.inputStyle}
      onChangeText={setConfirmPassword}
      value={confirmPassword}
      placeholder=" Confirm Password"
      secureTextEntry
    />

<TouchableOpacity
    onPress={onPressSubmit}
    style={styles.studentTutorButton}>
        <Text style={styles.submitButtonText}>submit</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', //set color to blue light
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop:30
  },
  inputStyle:{
    color:"black",
    borderColor:"black",
    borderWidth:1,
    height:50,
    width:250,
    borderRadius:5,
    marginTop:10,
    paddingLeft:10
},
studentTutorButton:{
    height: 50,
    width:150,
    backgroundColor:'blue',
    marginHorizontal:5,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    marginTop:10
},
submitButtonText:{
    color:'white'

},
welcomeText1:{
    color:'black',
    fontWeight:"bold",
    fontSize:20,
    marginTop:20,
    marginBottom:50
},
logoStyle1:{  //setting logo
  height:150,
  width:150,
},
});
