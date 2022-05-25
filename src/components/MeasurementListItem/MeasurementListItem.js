import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { navigate } from '../../services/NavigationServices';

import { styles } from './Styles';
import { deleteMeasurement } from '../../store/actions/measurementActions';

const Button = ({ onPress, title }) => (
  <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.buttonTitle}>{title}</Text>
  </Pressable>
);

const MeasurementListItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, distance } = data;

  const _onPressDelete = () => {
    dispatch(deleteMeasurement(id));
  };

  const _onPressEdit = () => {
    navigate('NewMeasurement', { data });
  };

  const Buttons = () => (
    <View style={styles.buttonsContainer}>
      <Button title="Delete" onPress={_onPressDelete} />
      <Button title="Edit" onPress={_onPressEdit} />
    </View>
  );

  return (
    <View style={styles.measurementListItem}>
      <Text style={styles.content}>{`${name} - ${distance} km`}</Text>
      <Buttons />
    </View>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

MeasurementListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    distance: PropTypes.number,
  }).isRequired,
};

export default MeasurementListItem;
