import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

export const styles = StyleSheet.create({
  measurementListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: Colors.secondary,
    marginBottom: Metrics.baseMargin,
    paddingVertical: Metrics.largeMargin,
    paddingHorizontal: Metrics.baseMargin,
    borderRadius: 12,
  },
  content: {
    fontSize: 16,
    fontWeight: '500',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: Metrics.smallMargin,
  },
  buttonTitle: {
    color: Colors.primary,
    textTransform: 'uppercase',
  },
});
