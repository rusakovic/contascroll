# What is?
Code challenge to create sync vertical and horizontal srolling of contacts in React Native

## iOS preview

https://user-images.githubusercontent.com/17801144/135068808-e316fbd3-e5e4-4f5e-81ef-1a0e7fd52869.mp4


## Android preview
https://user-images.githubusercontent.com/17801144/135068338-e269637f-74f8-42b1-9bea-925ddd135d41.mp4




# How to run app?
1. npm i
2. cd ios && pos install && ..
3. For runnig on iOS simulator: `npm run ios`, for Android `npm run adnroid`
4. For running on iOS real device: `npm run ios-device`. Replace your phone name here: 
```json
"device-ios": "ENVFILE=.staging.env react-native run-ios  --device 'iPhone Max' ",
```
https://github.com/rusakovic/contascroll/blob/012bfea1accc85b0e450eebd8bc553254497dee9/package.json#L8

# How to run tests
- For running jest test: `npm run test`
- For running Storybook on iOS simulator: `npm run ios:storybook`

# What was done
1. Only basic libraries were used: `@react-navigation` and `babel-plugin-module-resolver` for more accurate import paths
2. User mock data is located at https://github.com/rusakovic/contascroll/blob/main/mocks/contactsData.ts
3. Solution works on both iOS and Android. Storybook is configured for iOS
4. Typescript is used
5. Jest and Storybook are implemented. Detox could be implemented in addition
6. Readme is written
7. BONUS:
8. Reusable components: most important components are placed in `components` folder divided into `atoms` and `molecules`. `organism` folder could be addded, if necessary.
9. For navigation to profile details, used `@react-navigation`
10. `.env` files is not ignored for quicker running the app. It only contains info about Storybook.

# Task
- Please avoid using 3rd-party libraries: we want to see your code and problem solving.
- App content: you can read the list of contacts and their info from a local .json file.
- Make sure your solution works on both iOS and Android.
- We expect you to implement this using modern JavaScript, extra points if you use TypeScript or Flow for type safety. You are allowed to write some native code if you have a need for it.
- Tests are not optional. We don’t expect good test coverage, we just want to see a few tests on the parts of your app where you think tests are most helpful.
- Have a short README file explaining how to start the app and run the test suite.
- You are free to make assumptions if you find anything ambiguous in the above instructions, just make sure to list those in the README or in comments
- Don't be afraid to cut some corners if you are tight on time. The priority should always be on showing off great code, just make sure to explain what feature you didn't have time to implement.

# What could be done more
1. Adding Detox
2. Adding `story-loader` for Storybook
3. Dividing components into components more, if we plan to reuse them
4. Check behavior in all possible resolutions and phones.

### Bonus tasks:

- Make your app's main component(s) reusable and package them as you would do if you were to distribute it as open source for other developers to use.
- Tapping on a profile picture should navigate to a "detail" view about the tapped contact. You are free to style that view as you like.
