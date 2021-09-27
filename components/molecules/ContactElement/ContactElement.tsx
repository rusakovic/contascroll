import React, {FC} from 'react';
import {View} from 'react-native';
import ContainerCenter from '@components/atoms/Containers/ContainerCenter';
import ContainerSpace from '@components/atoms/Containers/ContainerSpace';
import DefaultText from '@components/atoms/Text/DefaultText/DefaultText';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {UserLocation, UserName, UserType} from '@globalTypes/UserType';

interface ContactElementProps {
  name: UserName['first'];
  surname: UserName['last'];
  aboutMe: UserType['aboutMe'];
  city: UserLocation['city'];
  country: UserLocation['country'];
}

const ContactElement: FC<ContactElementProps> = ({
  name,
  surname,
  aboutMe,
  city,
  country,
}) => {
  return (
    <View
      style={{
        height: hp(90),
        marginBottom: hp(5),
      }}>
      <ContainerCenter isContainer alignItemsCenter>
        <ContainerCenter flexDirectionRow>
          <DefaultText fontFamilyBold>{name}</DefaultText>
          <DefaultText marginLeftCustom={wp(2)}>{surname}</DefaultText>
        </ContainerCenter>

        <DefaultText numberOfLines={20} xs fitText={false}>
          {city}, {country}
        </DefaultText>
        <ContainerSpace mtM />
        <ContainerCenter>
          <DefaultText fontFamilyBold s>
            About me
          </DefaultText>
          <DefaultText
            numberOfLines={20}
            xs
            fitText={false}
            marginTopCustom={wp(1)}>
            {aboutMe}
          </DefaultText>
        </ContainerCenter>
      </ContainerCenter>
    </View>
  );
};

export default ContactElement;
