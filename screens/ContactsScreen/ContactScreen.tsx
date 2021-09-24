import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  Platform,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Pressable,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ContainerSpace from '../../components/atoms/Containers/ContainerSpace';
import DefaultText from '../../components/atoms/Text/DefaultText/DefaultText';
import {contacts} from '@mocks/contactsData';
import ContainerCenter from '../../components/atoms/Containers/ContainerCenter';
import {CircleAvatar} from '../../components/molecules';

const ContactElement: FC = ({
  name,
  surname,
  avatarUri,
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

const ContactScreen: FC = () => {
  const contactsArray = Object.values(contacts.users);
  const contactsArrayLength = contactsArray.length;
  const refScrollHorizontalView: React.MutableRefObject<ScrollView> =
    React.useRef();

  const refFlatlistVertical: React.MutableRefObject<ScrollView> =
    React.useRef();

  const itemWidth = wp(35);
  const itemHeight = hp(95);
  const proportion = itemHeight / itemWidth;
  const [currentPositionX, setCurrentPositionX] = useState(0);
  const [currentPositionY, setCurrentPositionY] = useState(0);
  const [isManualScrollVertical, setIsManualScrollVertical] = useState(false);

  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
  const [currentPositionIndexDescription, setCurrentPositionIndexDescription] =
    useState(0);

  const onScrollHorizontal = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setCurrentPositionX(e.nativeEvent.contentOffset.x);

    if (refFlatlistVertical.current != null && isManualScrollVertical) {
      refFlatlistVertical.current.scrollTo({
        x: 0,
        y: e.nativeEvent.contentOffset.x * proportion,
        animated: true,
      });
    }
    setCurrentPositionY(e.nativeEvent.contentOffset.y);
  };
  const onScrollVertical = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setCurrentPositionY(e.nativeEvent.contentOffset.y);
  };

  const onChangedContact = (index: number) => {
    setCurrentPositionIndex(index);
  };

  const scrollToPosition = (position: number) => {
    const x = position * itemWidth;
    const y = position * itemHeight;
    // setIsManualScrollVertical(true);
    if (refScrollHorizontalView.current != null) {
      refScrollHorizontalView.current.scrollTo({x, y: 0, animated: true});
    }

    if (refFlatlistVertical.current != null) {
      refFlatlistVertical.current.scrollTo({x: 0, y, animated: true});
    }

    if (onChangedContact != null) {
      if (position < 1) {
        onChangedContact(0);
      } else if (position > contactsArrayLength) {
        onChangedContact(contactsArrayLength - 1);
      } else {
        onChangedContact(position);
      }
    }
  };

  const snapTimer = async () => {
    const nextPosition = Math.round(currentPositionX / itemWidth);
    console.log('yes');
    scrollToPosition(nextPosition);
    // await setTimeout(() => {
    // }, 100);
  };

  const onMomentumScrollBegin = () => {
    setIsManualScrollVertical(false);
  };

  const onMomentumScrollEnd = () => {
    if (isManualScrollVertical) {
      setIsManualScrollVertical(false);
    }
  };

  const onScrollBeginDrag = () => {
    setIsManualScrollVertical(true);
  };

  const onScrollEndDrag = () => {
    if (isManualScrollVertical) {
      setIsManualScrollVertical(false);
    }
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <ScrollView
          horizontal
          scrollEventThrottle={16}
          ref={refScrollHorizontalView}
          decelerationRate={Platform.OS === 'ios' ? 0.5 : 0.9}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          snapToInterval={wp(35)}
          onScroll={onScrollHorizontal}
          onScrollBeginDrag={onScrollBeginDrag}
          onScrollEndDrag={onScrollEndDrag}
          contentContainerStyle={{
            paddingHorizontal: Platform.OS === 'android' ? wp(32) : wp(35),
          }}>
          {contactsArray.map((item, index) => (
            <Pressable key={index} onPress={() => scrollToPosition(index)}>
              <CircleAvatar avatarUri={item.picture.medium} />
            </Pressable>
          ))}
        </ScrollView>
        <ContainerSpace mtS />
        <ScrollView
          ref={refFlatlistVertical}
          snapToAlignment="start"
          snapToStart
          scrollEventThrottle={16}
          onScroll={onScrollVertical}
          snapToInterval={hp(95)}
          decelerationRate={Platform.OS === 'ios' ? 0 : 0.9}>
          {contactsArray.map((item, index) => (
            <ContactElement
              name={item.name.first}
              surname={item.name.last}
              aboutMe={item.aboutMe}
              city={item.location.city}
              country={item.location.country}
            />
          ))}
        </ScrollView>
        <ContainerSpace />
      </SafeAreaView>
    </View>
  );
};

export default ContactScreen;
