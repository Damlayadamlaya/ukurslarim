import { Modal, StyleSheet, Text, View,Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'


export default function CourseU({ visible, onAddCourse,onCancel}) {
    const [enteredCourseText, setEnteredCourseText] = useState('');
    const addCourseHandler = () => {
        onAddCourse(enteredCourseText);
        setEnteredCourseText('');
    };

  return (
    <Modal
        animationType="slide"
        visible={visible} >
          <View style={styles.inputContainer}>
              <Image style={styles.image} source={require('../assets/images/cblogo.jpg')} />
              <TextInput style={styles.textInput} placeholder="yeni kurs ekle"
              value={enteredCourseText}  onChangeText={(text) => setEnteredCourseText(text)} />
          <View style={styles.buttonContainer}>
           
            
                  <View>
                       <Button style={styles.button} title='iptal et' color='red' onPress={onCancel} />
                  </View>
                  
                  <View>
                       <Button style={styles.button} title='ekle' color='blue' onPress={addCourseHandler}   />
                  </View>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'gray',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 20,
        margin:20,
    },
    textInput: {
        borderWidth: 1,
        width: '100%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'pink',
        borderColor:'pink',

    },
    buttonContainer:{},
    button:{},
})