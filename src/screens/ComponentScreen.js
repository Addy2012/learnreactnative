import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ComponentScreen = () => {
    const myName = 'Anand'
    return (
        <View>
            <Text style={styles.textStyles}>Getting started react native</Text>
            <Text style={styles.myName}>My name is {myName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles : {
        fontSize : 45
    },
    myNameStyle : {
        fontSize : 20
    }
}) 
export default ComponentScreen;