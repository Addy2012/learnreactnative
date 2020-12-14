import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import ImageDetails from '../components/ImageDetails';


const ImageScreen = () => {
    return (
        <View>
            <ImageDetails
                title="Forest"
                score={9} 
                imageSource={require("../../assets/forest.jpg")} />
            <ImageDetails
                score={10} 
                title="Beach"
                imageSource={require('../../assets/beach.jpg')}/>
            <ImageDetails
                score={5} 
                title="Mountain" 
                imageSource={require('../../assets/mountain.jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({

})
export default ImageScreen;