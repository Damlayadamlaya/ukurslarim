import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View ,FlatList} from 'react-native';

import CourseU from './components/CourseU';




export default function App() {
  const [modalIsVisibile, setModalIsVisibile] = useState(false);

  const [courses, setCourses] = useState([]);
  const startModal = () => { 
    setModalIsVisibile(true)
  };
  
  const endModal = () => { 
    setModalIsVisibile(false)
  };




   const addCourse = (courseTitle) => { 
     //console.log(courseTitle);
     setCourses((currentCourses) => [...currentCourses, { text: courseTitle, id: Math.random().toString() }]);

     endModal();
  };


  return (
  <>
      <StatusBar style="light" />
      
      <View style={styles.container}>
        
        <Button title="kurs ekle" color="red" onPress={startModal} />
        <CourseU visible={modalIsVisibile} onAddCourse={addCourse} onCancel={endModal} />
        
        <View>
          <FlatList
            data={courses} renderItem={({ item }) => (
              <View style={styles.courseItem}>
              <Text style={styles.courseText} >{ item.text}</Text>
            </View> )}
          />


         </View>
        
      </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    paddingTop: 50,
    paddingHorizontal:20,
  },
  courseItem: {
    backgroundColor: 'gray',
    margin: 8,
    borderRadius:5,
  
  },
  courseText: {
    padding: 8,
    color:'white',
  },
});
