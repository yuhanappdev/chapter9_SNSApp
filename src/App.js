/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {StatusBar} from 'react-native';

 import Navigator from '~/Screens/Navigator';
 import {UserContextProvider} from '~/Context/User';
 import {RandomUserDataProvider} from '~/Context/RandomUserData';

 const App = ({}) => {
   return (
     <RandomUserDataProvider cache={true}>
       <UserContextProvider>
         <StatusBar barStyle="default" />
         <Navigator />
       </UserContextProvider>
     </RandomUserDataProvider>
   )
 }

 export default App;