import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetails = ({score,imageSource,title}) => {
    return (
        <View>
            <Text>Image Score - {score}</Text>
            <Image source={imageSource}/>
            <Text>I am {title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})
export default ImageDetails;