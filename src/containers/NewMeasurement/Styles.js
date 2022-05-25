import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../theme';

export const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
  },
  title: {
    color: '#000',
    fontSize: 22,
    fontWeight: '600',
  },
  textInput: {
    borderWidth: 0.5,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: Metrics.smallMargin,
    marginVertical: Metrics.baseMargin,
    fontSize: 18,
  },
  locationPoint: {
    marginVertical: Metrics.baseMargin,
  },
  pointButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Metrics.smallMargin,
  },
  pointButtonValue: {
    color: Colors.secondary,
    fontSize: 18,
  },
});
