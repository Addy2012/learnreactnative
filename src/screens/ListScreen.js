import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const ListScreen = () => {
    const friends =[
        {name:'Subhas', age:12},
        {name:'Arko', age:5},
        {name:'Arup', age:31},
        {name:'Arup1', age:14},
        {name:'Arup2', age:51},
        {name:'Arup3', age:16},
        {name:'Arup4', age:71},
        {name:'Arup5', age:18},
        {name:'Arup6', age:91},
        {name:'Arup7', age:110},
        {name:'Arup8', age:111},
        {name:'Arup9', age:121},
        {name:'Arup10', age:113}
    ];
    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
                )
            }}
        />
    )
}

export default ListScreen

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})
