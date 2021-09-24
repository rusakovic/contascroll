import React from 'react';
import {Image, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ContainerCenter from '../../atoms/Containers/ContainerCenter';

interface CircleAvatarProps {}

const CircleAvatar: React.FunctionComponent<CircleAvatarProps> = ({
  avatarUri,
}) => {
  return (
    <ContainerCenter
      style={{marginHorizontal: wp(5), marginVertical: wp(5), height: wp(30)}}>
      <Image
        source={{uri: avatarUri}}
        style={{height: wp(25), width: wp(25), borderRadius: wp(25)}}
      />
    </ContainerCenter>
  );
};

export default CircleAvatar;
