import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const ContactDetailsStyles = StyleSheet.create({
  imageWrapper: {
    elevation: 5,
    borderRadius: wp(2),
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  image: {
    height: wp(40),
    width: wp(40),
    borderRadius: wp(2),
  },
});
