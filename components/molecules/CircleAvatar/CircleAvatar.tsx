import React, {useEffect, useRef} from 'react';
import {Animated, Image, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import styled from '../../../constants/styled';
import ContainerCenter from '../../atoms/Containers/ContainerCenter';

interface CircleAvatarProps {}

const CircleAvatar: React.FunctionComponent<CircleAvatarProps> = ({
  avatarUri,
  isFocused,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isFocused) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isFocused, fadeAnim]);
  return (
    <ContainerCenter
      style={{
        marginHorizontal: wp(5),
        marginVertical: wp(6),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          borderRadius: wp(25),
          backgroundColor: styled.colors.blue.standardIosBlue,
          opacity: fadeAnim,
          position: 'absolute',
          height: wp(27),
          width: wp(27),
        }}
      />
      <Image
        source={{uri: avatarUri}}
        style={{
          height: wp(25),
          width: wp(25),
          borderRadius: wp(25),
        }}
      />
    </ContainerCenter>
  );
};

export default CircleAvatar;
