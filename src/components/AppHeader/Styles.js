import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

export const styles = StyleSheet.create({
  appHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Metrics.baseMargin,
  },
  backButton: {
    position: 'absolute',
    left: Metrics.baseMargin,
  },
  backIcon: {
    tintColor: Colors.primary,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
});
