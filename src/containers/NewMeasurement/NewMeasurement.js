import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { getDistance } from 'geolib';
import uuid from 'react-native-uuid';

import { Container, AppButton } from '../../components';
import { getCurrentLocation } from '../../services/GeoLocationServices';

import { styles } from './Styles';
import { addMeasurement } from '../../store/actions/measurementActions';
import { goBack } from '../../services/NavigationServices';

const NameInput = ({ value, onChangeText }) => (
  <View>
    <Text style={styles.title}>Name</Text>
    <TextInput
      style={styles.textInput}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

const NewMeasurement = ({ route }) => {
  const { params } = route;
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);
  const [name, setName] = useState(params?.data.name || '');
  const [pointA, setPointA] = useState(params?.data.pointA || null);
  const [pointB, setPointB] = useState(params?.data.pointA || null);
  const dispatch = useDispatch();

  const Title = ({ title }) => <Text style={styles.title}>{title}</Text>;

  useEffect(() => {
    if (name !== '' && pointA && pointB) {
      setIsSaveDisabled(false);
    } else {
      setIsSaveDisabled(true);
    }
  }, [name, pointA, pointB]);

  const _onPressGetPoint = onSuccessGetPoint => {
    getCurrentLocation(onSuccessGetPoint);
  };

  const _onPressSave = () => {
    const distance = getDistance(pointA, pointB);
    const id = params?.data?.id ? params.data.id : uuid.v4();

    const measurement = {
      id,
      name,
      pointA,
      pointB,
      distance: distance / 1000,
    };

    dispatch(addMeasurement(id, measurement));
    goBack();
  };

  const GetPointButton = ({ value, onSuccessGetPoint }) => (
    <Pressable
      style={styles.pointButton}
      onPress={() => _onPressGetPoint(onSuccessGetPoint)}>
      <Text style={styles.pointButtonValue}>
        {value
          ? `${value.latitude}, ${value.longitude}`
          : 'Record GPS Location'}
      </Text>
    </Pressable>
  );

  const LocationPoint = ({ title, stateMethod, value }) => (
    <View style={styles.locationPoint}>
      <Title title={title} />
      <GetPointButton value={value} onSuccessGetPoint={stateMethod} />
    </View>
  );

  return (
    <Container headerTitle="New Measurement">
      <View style={styles.innerContainer}>
        <NameInput value={name} onChangeText={setName} />
        <LocationPoint title="Point A" value={pointA} stateMethod={setPointA} />
        <LocationPoint title="Point B" value={pointB} stateMethod={setPointB} />
      </View>
      <AppButton
        title="Save"
        onPress={_onPressSave}
        disabled={isSaveDisabled}
      />
    </Container>
  );
};

export default NewMeasurement;
