import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';

import ContainerCenter from '@components/atoms/Containers/ContainerCenter';
import ContainerSpace from '@components/atoms/Containers/ContainerSpace';
import DefaultText from '@components/atoms/Text/DefaultText/DefaultText';
import {ContactDetailsStyles} from './styles';
import {ContactDetailsRouteProps} from './types';

const ContactDetails: React.FunctionComponent = () => {
  const {
    params: {avatar, name, surname, aboutMe},
  } = useRoute<ContactDetailsRouteProps>();

  return (
    <ContainerCenter isContainer isMarginVertical2>
      <ContainerCenter flexDirectionRow>
        <View style={ContactDetailsStyles.imageWrapper}>
          <Image source={{uri: avatar}} style={ContactDetailsStyles.image} />
        </View>

        {/* NAME SURNAME  */}
        <ContainerCenter isContainer>
          <ContainerCenter isMarginVertical2>
            <DefaultText l>{name}</DefaultText>
            <DefaultText fontFamilyThin>{surname}</DefaultText>
          </ContainerCenter>
        </ContainerCenter>
      </ContainerCenter>
      <ContainerSpace mtXS />

      <ContainerSpace mtXS />

      {/* ABOUT ME */}
      <DefaultText s fontFamilyBold>
        About me:
      </DefaultText>
      <DefaultText numberOfLines={20} xs fitText={false}>
        {aboutMe}
      </DefaultText>
    </ContainerCenter>
  );
};

export default ContactDetails;
