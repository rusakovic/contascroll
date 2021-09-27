import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import styled from '@constants/styled';

export const CircleAvatarStyles = StyleSheet.create({
  mainWrapper: {
    marginHorizontal: wp(5),
    marginVertical: wp(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWithBorder: {
    borderRadius: wp(25),
    backgroundColor: styled.colors.blue.standardIosBlue,
    position: 'absolute',
    height: wp(27),
    width: wp(27),
  },
  image: {
    height: wp(25),
    width: wp(25),
    borderRadius: wp(25),
  },
});
