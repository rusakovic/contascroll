import {RouteProp} from '@react-navigation/core';
import {UserName, UserPicture, UserType} from '../../globalTypes/UserType';

interface ContactDetailProps {
  avatar: UserPicture['large'];
  name: UserName['first'];
  surname: UserName['last'];
  aboutMe: UserType['aboutMe'];
}

export type ContactDetailsRouteProps = RouteProp<
  Record<string, ContactDetailProps>
>;
