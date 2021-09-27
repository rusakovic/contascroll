export interface UserName {
  title: string;
  first: string;
  last: string;
}

export interface UserLocation {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

export interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface UserType {
  name: UserName;
  location: UserLocation;
  picture: UserPicture;
  aboutMe: string;
}
