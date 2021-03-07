import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import Swiper from 'react-native-swiper';
import BottomSheet from 'reanimated-bottom-sheet';
import * as Animatable from 'react-native-animatable';
import { useEffect } from 'react';
const ViewProduct = ({navigation}) => {

    const renderContent = () => (
        <View
        style={ styles.bottomSheet}
      >
        <View style = {styles.dragView} />
        <View style = {styles.parent}>
            <View style = {styles.mainInfo}>
                <Text style = {styles.dragHeader}>Winter Coat</Text>
                <Text style = {styles.dragPrice}>R2000</Text>
                <Text style = {styles.dragSizeHeader}>Your Size</Text>
                <View style = {styles.sizeContainer}>
                    <View style = {styles.sizeBlock}>
                        <Text style = {styles.sizeText}>S</Text>
                    </View>
                    <View style = {styles.sizeBlock}>
                        <Text style = {styles.sizeText}>M</Text>
                    </View>
                    <View style = {styles.sizeBlock}>
                        <Text style = {styles.sizeText}>L</Text>
                    </View>
                    <View style = {styles.sizeBlock}>
                        <Text style = {styles.sizeText}>XL</Text>
                    </View>
                </View>
                <Text style = { styles.dragSizeHeader}>Wash and Care Instructions</Text>
                <View style = { styles.descriptionBox}>
                    <Text style = {styles.clothingDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor lorem sem, sit amet fermentum enim tincidunt vitae. Quisque bibendum magna ipsum. Aenean ullamcorper
                        ac dolor vel viverra. Vestibulum et pellentesque lectus</Text>
                </View>
            </View>
            <View style = {styles.colors}>
                <View style = {styles.blackCircle} />
                <View style = {styles.blueCircle} />
                <View style = {styles.pinkCircle} />
            </View>
        </View>
        <TouchableOpacity style = {styles.cart} onPress = {() => navigation.navigate('Home')}>
                    <Text style = {styles.cartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    );

    const bottomSheetRef = React.createRef(null);
    useEffect(()=> {
        setTimeout(() => {
            bottomSheetRef.current.snapTo(1);
        }, 500);
    },[bottomSheetRef]);
    return (
        <View style = {styles.mainContainer}>
            <StatusBar translucent = {true} backgroundColor = "transparent"/>
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                <Image style = { styles.image} source = {require('../assets/coats/coats4.jpg')} />
                </View>
                <View style={styles.slide2}>
                <Image style = { styles.image} source = {require('../assets/coats/coats5.jpg')} />
                </View>
                {/* <View style={styles.slide3}>
                <Image style = { styles.image} source = {require('../assets/coats/coats4.jpg')} />
                </View> */}
            </Swiper>
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={[600,500, 300]}
                borderRadius={30}
                initialSnap = {1}
                renderContent={renderContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    wrapper: {
        position: 'relative',
    },
    image: {
        width: undefined,
        height: undefined,
        flex: 1,
        alignSelf: 'stretch',
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
  },
  slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
  },
  slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
  text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
  floating: {
        // position: 'absolute',
        width: '100%',
        backgroundColor: '#fff',
        // height: (Dimensions.get('window').height / 6),
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    bottomSheet: {
        backgroundColor: 'white',
        padding: 16,
        height: '100%',
        position: 'relative',
    },
    dragView: {
        backgroundColor: '#828282',
        display: 'flex',
        alignSelf: 'center',
        width: 150,
        height: 7,
        borderRadius: 50,
        opacity: 0.8,
    },
    dragHeader: {
        fontWeight: 'bold',
        fontSize: 34,
        marginTop: 20,
        marginLeft: 10,
    },
    dragPrice: {
        fontWeight: 'bold',
        fontSize: 19,
        marginTop: 2,
        marginLeft: 12,
        color: '#828282',
    },
    dragSizeHeader: {
        fontWeight: 'bold',
        fontSize: 19,
        marginTop: 22,
        marginLeft: 12,
        color: '#333333',
    },
    sizeContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 5,
        marginTop: 10,
    },
    sizeBlock: {
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: '#828282',
        opacity: 0.3,
        width: 30,
        height: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#828282',
        shadowOffset: {width: 3, height: 3 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
    },
    sizeText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    descriptionBox: {
        width: 320,
        marginLeft: 10,
        marginTop: 10,
    },
    clothingDescription: {
        fontSize: 16,
    },
    parent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    mainInfo:  {
    },
    colors: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50,
        marginRight: 10,
    },
    blackCircle: {
        marginBottom: 10,
        width: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: '#000',
    },
    blueCircle: {
        marginBottom: 10,
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: '#92BBD9',
    },
    pinkCircle: {
        marginBottom: 10,
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: '#F8D9E0',
    },
    cart: {
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#333333',
        padding: 15,
        width: Dimensions.get('window').width - 50,
    },
    cartText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
    },
});
export default ViewProduct;
