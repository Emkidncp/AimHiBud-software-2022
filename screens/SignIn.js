import React from 'react';
import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput} from 'react-native';
import firebase from "firebase";

export default function SignIn({navigation, route}) {
    const {position} = route.params
    
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onPressSubmit = () => {
        if (email.length == 0 || password.length == 0) {
          alert("You must enter both Email and Password");
          return;
        } else {
          firebase
            .auth()
            .signInWithEmailAndPassword(email.trim(), password)
            .then(() => {
                navigation.navigate("Dashboard", {position})
            })
            .catch((error) => {
              alert(error);
            });
        }
      };

  return (
    <View style={styles.container}>
      <Text style = {styles.welcomeText}>  {position} Sign In</Text>
      <Image style={styles.myLogoStyle} source={require('../assets/Logo.jpeg')} />
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
        <TouchableOpacity
    onPress={onPressSubmit}
    style={styles.studentTutorButton}>
        <Text style={styles.submitButtonText}>submit</Text>
    </TouchableOpacity>
    <Text 
    onPress={()=> alert("Function coming soon")}
    style = {styles.forgotText}>Forgot Password</Text>
    


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:50,

  },
  welcomeText:{
    color:'black',
    fontWeight:"bold",
    fontSize:20, 
    marginBottom:50 
},
logoStyle:{
    height:200,
    width:200,
    marginVertical:50
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
buttonsContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:'center'
},
studentTutorText:{
    color:"white"
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
submitButtonText:{
    color:'white'

},
forgotText:{
    color:'blue',
    // alignSelf:"flex-start",
    marginTop:5,
    fontStyle:"italic"
},

myLogoStyle:
{
    height:150,
    width:150,
    marginBottom:20
}
});
