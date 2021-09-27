import React, {FC, useState} from 'react';
import {
  View,
  SafeAreaView,
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
import ContainerSpace from '@components/atoms/Containers/ContainerSpace';
import {contacts} from '@mocks/contactsData';
import {CircleAvatar} from '@components/molecules';
import {useNavigation} from '@react-navigation/native';
import Routes from '@routes';
import {ContactElement} from '@components/molecules';
import {UserName, UserPicture, UserType} from '@globalTypes/UserType';
import {ContactScreenStyles} from './styles';
import {findSelectedContactIndex} from './utils';

const ContactScreen: FC = () => {
  const {navigate} = useNavigation();
  const contactsArray: UserType[] = Object.values(contacts.users);
  const usersCount = contactsArray.length;
  const contactsArrayLength = contactsArray.length;

  const itemWidth = wp(35);
  const itemHeight = hp(95);

  const refScrollHorizontalView: React.MutableRefObject<ScrollView> =
    React.useRef();

  const refFlatlistVertical: React.MutableRefObject<ScrollView> =
    React.useRef();

  const proportion = itemHeight / itemWidth;

  const [isHorizontalScrolling, setIsHorizontalScrolling] = useState(false);
  const [isVerticalScrolling, setIsVerticalScrolling] = useState(false);

  const [isManualSelectionContact, setIsManualSelectionContact] =
    useState(false);

  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);

  // 1. HORIZONTAL SCROLLING
  const onScrollHorizontal = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const positionX = e.nativeEvent.contentOffset.x;
    if (
      !isVerticalScrolling &&
      !isManualSelectionContact &&
      isHorizontalScrolling
    ) {
      if (refFlatlistVertical.current != null) {
        refFlatlistVertical.current.scrollTo({
          x: 0,
          y: positionX * proportion - wp(15),
          animated: false,
        });
      }
    }

    const currentIndex = findSelectedContactIndex(
      positionX,
      itemWidth,
      usersCount,
    );
    setCurrentPositionIndex(currentIndex);
  };

  const onDragScrollHorizontalBegin = () => {
    setIsHorizontalScrolling(true);
  };

  const onMomentumScrollHorizontalEnd = () => {
    if (isHorizontalScrolling) {
      setIsHorizontalScrolling(false);
    }
    setIsManualSelectionContact(false);
  };

  const onChangedContact = (index: number) => {
    setCurrentPositionIndex(index);
  };

  const scrollToPosition = (position: number) => {
    setIsManualSelectionContact(true);
    const x = position * itemWidth;
    const y = position * itemHeight;
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

  const onNavigateToProfileDetailHandler = (
    avatar: UserPicture['large'],
    name: UserName['first'],
    surname: UserName['last'],
    aboutMe: UserType['aboutMe'],
  ) => {
    navigate(Routes.ContactDetails, {
      avatar,
      name,
      surname,
      aboutMe,
    });
  };

  // 2. VERTICAL SCROLLING
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
    }
  };

  const onMomentumScrollVerticalEnd = () => {
    setIsVerticalScrolling(false);
  };

  const onDragScrollVerticalStart = () => {
    setIsVerticalScrolling(true);
  };

  // 3. COMPONENT ELEMENTS
  const renderAvatarElement = () => {
    return contactsArray.map(
      (
        {picture: {thumbnail, large, medium}, name: {first, last}, aboutMe},
        index,
      ) => {
        return (
          // DISCUSS: Should we move Pressable inside 'CircleAvatar'?
          // or we reuse it in different places ?
          <Pressable
            key={thumbnail}
            onPress={() =>
              index === currentPositionIndex
                ? onNavigateToProfileDetailHandler(large, first, last, aboutMe)
                : scrollToPosition(index)
            }>
            <CircleAvatar
              avatarUri={medium}
              isFocused={index === currentPositionIndex}
            />
          </Pressable>
        );
      },
    );
  };

  const renderDescriptionElement = () => {
    return contactsArray.map(
      ({name: {first, last}, location: {city, country}, aboutMe}, index) => (
        <ContactElement
          key={index}
          name={first}
          surname={last}
          aboutMe={aboutMe}
          city={city}
          country={country}
        />
      ),
    );
  };

  return (
    <View style={ContactScreenStyles.flexWrapper}>
      <SafeAreaView>
        {/* HORIZONTAL SCROLL */}
        <ScrollView
          horizontal
          scrollEventThrottle={16}
          ref={refScrollHorizontalView}
          decelerationRate={Platform.OS === 'ios' ? 0.99 : 0.9}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          snapToInterval={itemWidth}
          scrollEnabled={!isVerticalScrolling && !isManualSelectionContact}
          onScroll={onScrollHorizontal}
          onScrollBeginDrag={onDragScrollHorizontalBegin}
          onMomentumScrollEnd={onMomentumScrollHorizontalEnd}
          contentContainerStyle={{
            paddingHorizontal: Platform.OS === 'android' ? wp(32) : wp(34),
          }}>
          {renderAvatarElement()}
        </ScrollView>

        <ContainerSpace mtS />

        {/* VERTICAL SCROLL */}
        <ScrollView
          ref={refFlatlistVertical}
          snapToAlignment="start"
          snapToStart
          scrollEventThrottle={16}
          scrollEnabled={!isHorizontalScrolling && !isManualSelectionContact}
          snapToInterval={itemHeight}
          onScroll={onScrollVertical}
          decelerationRate={Platform.OS === 'ios' ? 100 : 0.9}
          onScrollBeginDrag={onDragScrollVerticalStart}
          onMomentumScrollEnd={onMomentumScrollVerticalEnd}>
          {renderDescriptionElement()}
        </ScrollView>

        <ContainerSpace />
      </SafeAreaView>
    </View>
  );
};

export default ContactScreen;
