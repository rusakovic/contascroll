import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Theme} from '@react-navigation/native/lib/typescript/src/types';

const Stack = createNativeStackNavigator();

const navigatorDecorator =
  (initialParams?: object, options?: object, theme?: Theme) =>
  (getStory: () => JSX.Element): JSX.Element =>
    (
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="ROUTE"
            component={getStory}
            options={{headerShown: false, ...options}}
            initialParams={initialParams}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );

export default navigatorDecorator;
