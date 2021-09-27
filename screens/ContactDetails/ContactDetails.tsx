import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ContainerCenter from '../../components/atoms/Containers/ContainerCenter';
import ContainerSpace from '../../components/atoms/Containers/ContainerSpace';
import DefaultText from '../../components/atoms/Text/DefaultText/DefaultText';

interface ContactDetailsProps {}

const ContactDetails: React.FunctionComponent<ContactDetailsProps> = props => {
  const {
    params: {avatar, name, surname, aboutMe},
  } = useRoute();
  return (
    <ContainerCenter isContainer isMarginVertical2>
      <ContainerCenter flexDirectionRow>
        <View
          style={{
            elevation: 5,
            borderRadius: wp(2),
            shadowOffset: {
              height: 10,
              width: 0,
            },
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 8,
          }}>
          <Image
            source={{uri: avatar}}
            style={{
              height: wp(40),
              width: wp(40),
              borderRadius: wp(2),
            }}
          />
        </View>

        <ContainerCenter isContainer>
          {/* NAME SURNAME  */}
          <ContainerCenter isMarginVertical2>
            <DefaultText l>{name}</DefaultText>
            <DefaultText fontFamilyThin>{surname}</DefaultText>
          </ContainerCenter>
        </ContainerCenter>
      </ContainerCenter>
      <ContainerSpace mtXS />

      <ContainerSpace mtXS />
      <DefaultText s fontFamilyBold>
        About me:
      </DefaultText>
      <DefaultText numberOfLines={20} xs fitText={false}>
        {aboutMe}
      </DefaultText>
    </ContainerCenter>
  );
};

const styles = StyleSheet.create({});

export default ContactDetails;
