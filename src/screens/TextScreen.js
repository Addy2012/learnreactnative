import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen=()=> {
    const [name , setName] = useState('')
    const errorMessage = <Text>Password must be greater than 5 character</Text>
    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue)=> setName(newValue)}
            />
            {name.length<6 ? errorMessage : null}
            
            <Text>{"\n"}{"\n"}My name is {name} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        // height: 100
    }
})

export default TextScreen;