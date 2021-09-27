import React, {useEffect, useRef} from 'react';
import {Animated, Image} from 'react-native';
import {UserPicture} from '@globalTypes/UserType';
import ContainerCenter from '@components/atoms/Containers/ContainerCenter';
import {CircleAvatarStyles} from './styles';

interface CircleAvatarProps {
  avatarUri: UserPicture['medium'];
  isFocused: boolean;
}

const FADE_DURATION = 300;

const CircleAvatar: React.FunctionComponent<CircleAvatarProps> = ({
  avatarUri,
  isFocused,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isFocused) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: FADE_DURATION,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: FADE_DURATION,
        useNativeDriver: true,
      }).start();
    }
  }, [isFocused, fadeAnim]);

  return (
    <ContainerCenter style={CircleAvatarStyles.mainWrapper}>
      <Animated.View
        style={[CircleAvatarStyles.imageWithBorder, {opacity: fadeAnim}]}
      />
      <Image source={{uri: avatarUri}} style={CircleAvatarStyles.image} />
    </ContainerCenter>
  );
};

export default CircleAvatar;
