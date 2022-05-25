import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { Container, AppButton, MeasurementListItem } from '../../components';

// import { measurements } from '../../data/measurements';
import { navigate } from '../../services/NavigationServices';
import { styles } from './Styles';

const Home = () => {
  const { measurements } = useSelector(state => state.measurement);
  const _onPressStartMeasurement = () => {
    navigate('NewMeasurement');
  };

  const _renderMeasurementItem = ({ item }) => (
    <MeasurementListItem data={measurements[item]} />
  );
  const NoMeasurements = () => (
    <Text style={styles.listEmtpyComponent}>No Measurements Added</Text>
  );

  const MeasurementsList = () => (
    <FlatList
      data={Object.keys(measurements)}
      renderItem={_renderMeasurementItem}
      ListEmptyComponent={NoMeasurements}
      keyExtractor={item => item}
    />
  );
  return (
    <Container>
      <MeasurementsList />
      <AppButton
        title="Start New Measurement"
        onPress={_onPressStartMeasurement}
      />
    </Container>
  );
};

export default Home;
