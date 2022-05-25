import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

export const styles = StyleSheet.create({
  appButton: {
    backgroundColor: Colors.primary,
    borderRadius: Metrics.buttonBorderRadius,
    paddingVertical: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledAppButton: {
    backgroundColor: '#ae9763',
  },
  title: {
    color: Colors.secondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  disabledTitle: {
    color: '#b1b1b1',
  },
});
