import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { database } from '../database/firebase'
import { QuerySnapshot, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import Usuarios from './Usuarios'

const UsersList = () => {

const [users, setUsers] = useState([])

useEffect( () => {
  const collectionRef = collection(database, 'usuarios')
  const q = query(collectionRef, orderBy('name', 'desc'))

  const unsuscribe = onSnapshot(q, querySnapshot => {
    setUsers(
      querySnapshot.docs.map(doc => ({
        id: doc.id,
        email: doc.data().email,
        name: doc.data().name,
        phone: doc.data().phone
      })
      )
    )
  })
  return unsuscribe
}, [])

  return (
    <View>
        <Text style={styles.title}>Users List</Text>
        {users.map(usuario => <Usuarios key={usuario.id} {...usuario}/>)}
    </View>
  )
}

export default UsersList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: '#e8f5e9' // verde claro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4caf50', // verde
    marginBottom: 20
  }
})