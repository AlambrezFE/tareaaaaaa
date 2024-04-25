import * as React from 'react'
import * as RN from 'react-native'
import { View, Text, StyleSheet} from 'react-native'
import { database } from '../database/firebase'
import { doc } from 'firebase/firestore'

export default function Usuarios({
    id,
    email,
    name,
    phone
}) {
    return (
    <RN.View style={styles.container}>
        <RN.Text style={styles.text}> {email} </RN.Text>
        <RN.Text style={styles.text}> {name} </RN.Text>
        <RN.Text style={styles.text}> {phone} </RN.Text>
    </RN.View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#4caf50',
      backgroundColor: '#c8e6c9'
    },
    text: {
      color: '#4caf50',
      fontSize: 16
    }
  })




