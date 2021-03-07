/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
 } from 'react-native';
 
 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';
 
 import {
   NavigationContainer,
   DefaultTheme as NavigationDefaultTheme,
   DarkTheme as NavigationDarkTheme,
 } from '@react-navigation/native';
 
 import {createDrawerNavigator} from '@react-navigation/drawer';
 import {
   Provider as PaperProvider,
   DefaultTheme as PaperDefaultTheme,
   DarkTheme as PaperDarkTheme,
 } from 'react-native-paper';
 
 import AsyncStorage from '@react-native-community/async-storage';
 import {AuthContext} from './components/context';
 import { useState } from 'react';
 import Login from './pages/Login.js';
 import StackScreen from './pages/StackScreens.js';
 import Products from './pages/Products';
 
 import {createStackNavigator} from '@react-navigation/stack';
 import ViewProduct from './pages/ViewProduct';
 import DrawerContent from './pages/DrawerContent';
 
 const Drawer = createDrawerNavigator();
 
 const App = () => {
   const customDefaultTheme = {
     ...NavigationDefaultTheme,
     ...PaperDefaultTheme,
     colors: {
       ...NavigationDefaultTheme.colors,
       ...PaperDefaultTheme.colors,
       background: '#ffffff',
       text: '#333333',
     },
   };
 
   const customDarkTheme = {
     ...NavigationDarkTheme,
     ...PaperDarkTheme,
     colors: {
       ...NavigationDarkTheme.colors,
       ...PaperDarkTheme.colors,
       background: '#333333',
       text: '#ffffff',
     },
   };
   const [loggedIn, setLoggedIn] =  useState(false);
   const authContext = React.useMemo(() => ({
     signIn: async () => {
       const token = {
         ID: 'trampete92@gmail.com',
       };
 
       try {
         await AsyncStorage.setItem('userToken', JSON.stringify(token));
         setLoggedIn(true);
       } catch (e){
         console.log(e);
       }
     },

     signOut: async () => {
       try {
        await AsyncStorage.removeItem('userToken');
        setLoggedIn(false);
       } catch (e) {
         console.log(e)
       }
     },
   }), []);
 
   const isDarkTheme =  useState(false);
 
   const theme = isDarkTheme ? customDarkTheme : customDefaultTheme;
 
   const Stack = createStackNavigator();
 
 
   const ModalStackScreen = () => {
     return (
       <Stack.Navigator mode = "modal" >
         <Stack.Screen name = "ViewProductScreen" component = {ViewProduct} />
       </Stack.Navigator>
     );
   };
 
   const MainDrawer = () => {
     return (
       <Drawer.Navigator drawerContent = {props => <DrawerContent {...props} />}>
         <Drawer.Screen name= "HomeDrawer" component = {Products}/>
     </Drawer.Navigator>
     );
   };
   const MainStack = () => {
     return (
       <Stack.Navigator mode ="modal" >
         <Stack.Screen name = "Home" component = {MainDrawer}
         options = {{headerShown: false}}
         />
         <Stack.Screen name = "ViewProductScreen" component = {ViewProduct} 
         options ={{
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff'
        }}
         />
       </Stack.Navigator>
     );
   };
 
   return (
     <View style = {styles.mainSection}>
         {/* <PaperProvider theme = {theme}> */}
         <AuthContext.Provider value = {authContext}>
           <NavigationContainer >
             {
               !loggedIn ?
               <StackScreen />
               :
               <MainStack />
             }
           </NavigationContainer>
         {/* </PaperProvider> */}
         </AuthContext.Provider>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   scrollView: {
     backgroundColor: Colors.lighter,
   },
   baseText: {
     fontFamily: 'Cochin',
   },
   mainSection: {
     flex: 1,
     justifyContent: 'center',
   },
   engine: {
     position: 'absolute',
     right: 0,
   },
   body: {
     backgroundColor: Colors.white,
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
     color: Colors.black,
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
     color: Colors.dark,
   },
   highlight: {
     fontWeight: '700',
   },
   footer: {
     color: Colors.dark,
     fontSize: 12,
     fontWeight: '600',
     padding: 4,
     paddingRight: 12,
     textAlign: 'right',
   },
 });
 
 export default App;
 