import React, {cloneElement, useState} from 'react'
import { View, Text, ScrollView, TextInput, Button, StyleSheet} from 'react-native'
import { database } from '../database/firebase'
import { collection, addDoc } from 'firebase/firestore'

const CreateUserScreen = (props) => {

    const [state, setState] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleChangeText = (name, value) => {
        setState({...state, [name]: value})
    }


    const saveNewUser = async () => {
        if (state.name === '') {
            alert('Por favor, ingresa un nombre');
        } else {
            try {
                await addDoc(collection(database, 'usuarios'), state);
                props.navigation.navigate('UsersList')
                alert('Usuario guardado');
            } catch (error) {
                alert(`Error al guardar el usuario: ${error}`);
            }
        }
    }
    

  return (
    <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
            <TextInput placeholder="Name User"
            onChangeText={(value) => handleChangeText('name', value)} />
        </View>
        <View style={styles.inputGroup}>
            <TextInput placeholder="Email User"
            onChangeText={(value) => handleChangeText('email', value)} />
        </View>
        <View style={styles.inputGroup}>
            <TextInput placeholder="Phone User"
            onChangeText={(value) => handleChangeText('phone', value)} />
        </View>
        <View style={styles.container}>
            <Button title="Save User" onPress={() => saveNewUser()} color={styles.button.backgroundColor}/>
        </View>
    </ScrollView>
  )
}

export default CreateUserScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
      backgroundColor: '#e8f5e9'
    },
    inputGroup: {
      flex: 1,
      padding: 20,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#4caf50',
      backgroundColor: '#c8e6c9'
    },
    button: {
      marginTop: 20,
      backgroundColor: '#4caf50'
    }
  })
