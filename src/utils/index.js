import Toast from 'react-native-root-toast';

import { Colors } from '../theme';

export const showMessage = message => {
  Toast.show(message, {
    backgroundColor: Colors.primary,
    textColor: Colors.secondary,
  });
};
