import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native';

export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style = {styles.welcomeText}> Welcome To AimHi Bud</Text>
      <Image style={styles.logoStyle} source={require('../assets/Logo.jpeg')} />
      <View style={styles.buttonsContainer}>
    <TouchableOpacity 
    onPress={()=>{ navigation.navigate("StudentTutor", {position:"Student"})}}
    style={styles.studentTutorButton}>
        <Text style={styles.studentTutorText}>Student</Text>
    </TouchableOpacity>
    <Text>Or</Text>
    <TouchableOpacity
    onPress={()=>{ navigation.navigate("StudentTutor", {position:"Tutor"})}}
    
    style={styles.studentTutorButton}>
        <Text style={styles.studentTutorText}>Tutor</Text>
    </TouchableOpacity>
      </View>
      <Text style={styles.descriptionText}>
            Stay up-to-date. AimHi-Bud, the best tutoring application software
            for students and tutors.
            This software has been motivated by the need to provide a platform
            for students and tutors to connect and share their knowledge.
            Sign up  to not miss more.
        </Text>
        <Text style={styles.bottomText}>AimHi-Bud Online (Pty) Ltd. 2022 All rights reserved.</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:30
  },
  welcomeText:{  //Welcome Text
      color:'black',
      fontWeight:"bold",
      fontSize:20,  
  },
  studentTutorButton:{  //style for the buttons
      height: 50,
      width:150,
      backgroundColor:'blue',
      marginHorizontal:5,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:10
  },
  buttonsContainer:{  //container for the buttons
      flexDirection:"row",
      justifyContent:"center",
      alignItems:'center'
  },
  logoStyle:{  //setting logo
      height:200,
      width:200,
      marginVertical:50
  },
  studentTutorText:{
      color:"white"
  },
  descriptionText:{
      color:"black",
      marginTop:30,
      fontSize:14,
      textAlign:"center"  //center, left, right
  },
  bottomText:
  {
      color:"black",
      marginTop:100,
      fontSize:10
  }
  
});
