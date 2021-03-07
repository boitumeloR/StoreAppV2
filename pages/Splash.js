import  React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';

const Splash = ({navigation}) => {
    return (
        <View style = {styles.main}>
            <Text>Splash Works</Text>
            <TextInput style = {styles.textInput}
          placeholder = "Enter your email"
          autoCapitalize = "none"
          />
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
});

export default Splash;
