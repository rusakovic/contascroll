import {storiesOf} from '@storybook/react-native';
import React from 'react';

// FIX: direct import from index.ts not possible
// https://github.com/storybookjs/storybook/issues/5013#issuecomment-908575731
import ContactDetails from './ContactDetails';

import {navigatorDecorator} from '@decorators';

storiesOf('screens/ContactDetails', module)
  .addDecorator(
    navigatorDecorator({
      avatar: 'https://randomuser.me/api/portraits/med/women/90.jpg',

      name: 'Julian',
      surname: 'Poronavau',
      aboutMe:
        'Facilisis volutpat est velit egestas. Ultrices neque ornare aenean euismod elementum nisi. Aliquet porttitor lacus luctus accumsan. Auctor elit sed vulputate mi sit amet mauris. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Vulputate odio ut enim blandit volutpat. Amet aliquam id diam maecenas ultricies mi eget. Vivamus arcu felis bibendum ut tristique et egestas. Praesent elementum facilisis leo vel fringilla. Quisque id diam vel quam elementum pulvinar etiam non quam. Amet consectetur adipiscing elit ut aliquam purus sit amet. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Gravida neque convallis a cras semper auctor neque. Eget mauris pharetra et ultrices neque ornare. Tortor aliquam nulla facilisi cras fermentum odio eu. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Arcu non odio euismod lacinia at quis risus. Amet justo donec enim diam vulputate ut. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi.',
    }),
  )
  .add('Playground', () => <ContactDetails />);
