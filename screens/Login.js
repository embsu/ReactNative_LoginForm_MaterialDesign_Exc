import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Button, TextInput } from 'react-native-paper'
import MainAppbar from '../components/MainAppbar'

//eli näyttö Login, käyttää MainAppbaria joka on komponentti

export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })
    const [showError, setShowError] = useState(false)

    const validateAndSubmit = () => {
        setShowError(true)
        if (formData.username.length > 0 && formData.password.length > 6) {
            // submit and reset formdata after submission
            setFormData({username: '', password: ''})
            setShowError(false)
            alert('Login successful')
        }
    }

  return (
   <>
    <MainAppbar title="Login" style={styles.login}/>
    <View style={styles.container}>
        <TextInput 
        label="Username" // tulee näkyviin kun klikkaa
        style={styles.inputti} 
        placeholder='Username' // näkyy kokoajan kunnes kirjoitat päälle
        value={formData.username}
        onChangeText={text => setFormData({...formData, username: text})} // setFormData on funktio joka muuttaa statea
        error={formData.username.length === 0 && showError}
        />

        <TextInput 
        label="Password"
        style={styles.inputti} 
        placeholder='Password' 
        keyboardType='visible-password'
        value={formData.password}
        onChangeText={text => setFormData({...formData, password: text})}
        error={formData.password.length < 6 && showError}
        />
        <Button style={styles.button} mode="contained" onPress={validateAndSubmit}>Submit</Button> 
       
    </View>
   </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginTop: 24,
    },
    inputti: {
        margin: (16,8,16,8),
        backgroundColor: '#b5cbc8',
        color: 'white',
    },
  
    button: {
        margin: 16,
        padding: 8,
        borderRadius: 25,
        backgroundColor: '#538680',
    },
    });
    