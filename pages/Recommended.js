import React from 'react';
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

import { } from 'react-native';


const Products = ({navigation}) => {
    const images = [
        {
            name: 'A Very Nice Coat',
            path: '../assets/coats/coat1.jpg',
            price: 2000,
        },
        {
            name: 'A Very Nice Coat',
            path: '../assets/coats/coat2.jpg',
            price: 2000,
        },
        {
            name: 'A Very Nice Coat',
            path: '../assets/coats/coats3.jpg',
            price: 2000,
        },
        {
            name: 'A Very Nice Coat',
            path: '../assets/coats/coats4.jpg',
            price: 2000,
        },
        {
            name: 'A Very Nice Coat',
            path: '../assets/coats/coats5.jpg',
            price: 2000,
        },
    ];
    return (
        // <SafeAreaView>
            <View style = {styles.mainContainer}>
                <Text style = {styles.categoryName}>
                    Recommended for you
                </Text>
                <ScrollView
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                alwaysBounceHorizontal = {true}>
                    {
                        images.map((image, k) => {
                            return (
                                <View style = {styles.imageContainer} key ={ k}>
                                    <Image style = { styles.images} source = {require('../assets/coats/coat1.jpg')} />
                                    {/* <View style = {styles.description}>
                                        <Text style = {styles.textNameContainer}>{ image.name}</Text>
                                        <Text style = {styles.textContainer}>{ image.price}</Text>
                                    </View> */}
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </View>
        // </ SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        flex: 1,
    },
    categoryName : {
        fontWeight: 'bold',
        fontSize: 28,
        marginTop: 40,
        marginLeft: 20,
        marginBottom: 40,
    },
    imageContainer: {
        width: 150,
        height: 300,
        flex: 1,
    },
    textContainer: {
        marginLeft: 20,
        fontSize: 18,
    },
    textNameContainer: {
        marginLeft: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    description: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    images: {
        borderRadius: 30,
        marginLeft: 20,
        marginBottom: 0,
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
    },
});

export default Products;
