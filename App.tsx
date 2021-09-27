import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {ContactDetails, ContactScreen} from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes/routes';
import styled from './constants/styled';

const Navigator: React.FC = () => {
  const RootStack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#F6F6F6'},
        }}>
        <RootStack.Screen
          name={Routes.ContactScreen}
          component={ContactScreen}
          options={{
            title: 'Contacts',
          }}
        />
        <RootStack.Screen
          name={Routes.ContactDetails}
          component={ContactDetails}
        />
      </RootStack.Navigator>
    </SafeAreaView>
  );
};

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: styled.colors.white.white,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
