import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';

export default function SignIn({navigation, route}) {
    const {position} = route.params

  return (
    <View style={styles.container}>
      <Text style = {styles.welcomeText}> I am a {position}</Text>
      <Image style={styles.logoStyle} source={require('../assets/Logo.jpeg')} />
      <View style={styles.buttonsContainer}>
    <TouchableOpacity 
    onPress={()=>{ navigation.navigate("SignIn", {position})}}
    style={styles.studentTutorButton}>
        <Text style={styles.studentTutorText}>Sign In</Text>
    </TouchableOpacity>
    <Text>Or</Text>
    <TouchableOpacity
    onPress={()=>{ navigation.navigate("SignUp", {position})}}
    
    style={styles.studentTutorButton}>
        <Text style={styles.studentTutorText}>Sign Up</Text>
    </TouchableOpacity>
      </View>
      <Text style={styles.descriptionText}>AimHi-Bud assumes that you are a {position}.
           This service is an online software service that offers tutorship to students
           It is one of the most integrated learning envoronments that are focused
           on providing the best services to the users.
             Join us to become a member.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', //setting the background color to light blue
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:50
  },
  welcomeText:{
    color:'black',
    fontWeight:"bold",
    fontSize:20,  
},
logoStyle:{  //setting logo
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
    borderRadius:10
},
buttonsContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:'center'
},
studentTutorText:{
    color:"white"
},
descriptionText:{
  color:"black",
  marginTop:40,
  fontSize:14,
  textAlign:"center"  //center, left, right
}
});
