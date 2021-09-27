import React, {FC, useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Pressable,
  Animated,
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
  const usersCount = contactsArray.length;
  const contactsArrayLength = contactsArray.length;
  const refScrollHorizontalView: React.MutableRefObject<ScrollView> =
    React.useRef();

  const refFlatlistVertical: React.MutableRefObject<ScrollView> =
    React.useRef();

  const scrollX = useRef(new Animated.Value(0)).current;
  console.log('🚀 ~ file: ContactScreen.tsx ~ line 210 ~ scrollX', scrollX);
  const scrollY = useRef(new Animated.Value(0)).current;
  const itemWidth = wp(35);
  const itemHeight = hp(95);

  const lengthX = (usersCount - 1) * itemWidth;
  const proportion = itemHeight / itemWidth;
  const [currentPositionX, setCurrentPositionX] = useState(0);
  const [currentPositionY, setCurrentPositionY] = useState(0);

  const [isHorizontalScrolling, setIsHorizontalScrolling] = useState(false);
  console.log(
    '🚀 ~ file: ContactScreen.tsx ~ line 90 ~ isHorizontalScrolling',
    isHorizontalScrolling,
  );
  const [isVerticalScrolling, setIsVerticalScrolling] = useState(false);
  console.log(
    '🚀 ~ file: ContactScreen.tsx ~ line 92 ~ isVerticalScrolling',
    isVerticalScrolling,
  );

  const [isManualSelectionContact, setIsManualSelectionContact] =
    useState(false);

  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
  console.log(
    '🚀 ~ file: ContactScreen.tsx ~ line 91 ~ currentPositionIndex',
    currentPositionIndex,
  );
  const [currentPositionIndexDescription, setCurrentPositionIndexDescription] =
    useState(0);

  const onScrollHorizontal = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const positionX = e.nativeEvent.contentOffset.x;
    if (
      !isVerticalScrolling &&
      !isManualSelectionContact &&
      isHorizontalScrolling
    ) {
      setCurrentPositionX(positionX);
      if (refFlatlistVertical.current != null) {
        refFlatlistVertical.current.scrollTo({
          x: 0,
          y: positionX * proportion - wp(15),
          animated: false,
        });
      }

      setCurrentPositionY(e.nativeEvent.contentOffset.y);
    }
    if (positionX < itemWidth / 2) {
      setCurrentPositionIndex(0);
    } else if (positionX > lengthX - itemWidth / 2) {
      setCurrentPositionIndex(usersCount - 1);
    } else {
      const positionCalc = Math.trunc((positionX + itemWidth / 2) / itemWidth);
      setCurrentPositionIndex(positionCalc);
    }
  };

  const onScrollVertical = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (
      !isHorizontalScrolling &&
      !isManualSelectionContact &&
      isVerticalScrolling
    ) {
      const positionY = e.nativeEvent.contentOffset.y;
      if (refScrollHorizontalView.current != null) {
        refScrollHorizontalView.current.scrollTo({
          x: positionY / proportion + wp(2),
          y: 0,
          animated: false,
        });
      }
      setCurrentPositionY(positionY);
    }
  };
  const onChangedContact = (index: number) => {
    setCurrentPositionIndex(index);
  };

  const scrollToPosition = (position: number) => {
    setIsManualSelectionContact(true);
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

  // const snapTimer = async () => {
  //   const nextPosition = Math.round(currentPositionX / itemWidth);
  //   scrollToPosition(nextPosition);
  // };

  const onDragScrollHorizontalBegin = () => {
    setIsHorizontalScrolling(true);
  };

  const onMomentumScrollHorizontalEnd = () => {
    if (isHorizontalScrolling) {
      setIsHorizontalScrolling(false);
    }
    setIsManualSelectionContact(false);
  };

  const onMomentumScrollVerticalEnd = () => {
    setIsVerticalScrolling(false);
  };

  const onDragScrollVerticalStart = () => {
    setIsVerticalScrolling(true);
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <ScrollView
          horizontal
          scrollEventThrottle={16}
          ref={refScrollHorizontalView}
          decelerationRate={Platform.OS === 'ios' ? 0.99 : 0.9}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          snapToInterval={wp(35)}
          scrollEnabled={!isVerticalScrolling && !isManualSelectionContact}
          onScroll={onScrollHorizontal}
          onScrollBeginDrag={onDragScrollHorizontalBegin}
          onMomentumScrollEnd={onMomentumScrollHorizontalEnd}
          contentContainerStyle={{
            paddingHorizontal: Platform.OS === 'android' ? wp(32) : wp(34),
          }}>
          {contactsArray.map((item, index) => (
            <Pressable key={index} onPress={() => scrollToPosition(index)}>
              <CircleAvatar
                avatarUri={item.picture.medium}
                isFocused={index === currentPositionIndex}
              />
            </Pressable>
          ))}
        </ScrollView>

        <ContainerSpace mtS />
        <ScrollView
          ref={refFlatlistVertical}
          snapToAlignment="start"
          snapToStart
          scrollEventThrottle={16}
          scrollEnabled={!isHorizontalScrolling && !isManualSelectionContact}
          snapToInterval={hp(95)}
          onScroll={onScrollVertical}
          decelerationRate={Platform.OS === 'ios' ? 100 : 0.9}
          onScrollBeginDrag={onDragScrollVerticalStart}
          onMomentumScrollEnd={onMomentumScrollVerticalEnd}
          contentInset={{
            top: 0,
            left: 0,
            bottom: wp(5),
            right: 0,
          }}>
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
