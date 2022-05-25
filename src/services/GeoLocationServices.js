import Geolocation from 'react-native-geolocation-service';
import { showMessage } from '../utils';

export const getCurrentLocation = async onSuccess => {
  try {
    const permission = await Geolocation.requestAuthorization('whenInUse');

    if (permission === 'granted') {
      Geolocation.getCurrentPosition(
        ({ coords }) => {
          const { latitude, longitude } = coords;
          onSuccess({ latitude, longitude });
        },
        error => {
          showMessage(error.message);
        },
      );
    } else if (permission === 'denied') {
      showMessage('GPS permission Denied');
    }
  } catch (error) {
    console.log({ error });
  }
};
