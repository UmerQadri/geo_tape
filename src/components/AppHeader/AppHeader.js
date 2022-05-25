import React from 'react';
import { Pressable, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import { goBack } from '../../services/NavigationServices';

import { Images } from '../../theme';
import { styles } from './Styles';

const AppHeader = ({ title }) => {
  const BackButton = () => (
    <Pressable onPress={goBack} style={styles.backButton}>
      <Image source={Images.backIcon} style={styles.backIcon} />
    </Pressable>
  );
  return (
    <Pressable style={styles.appHeader}>
      <BackButton />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

AppHeader.propTypes = {
  title: PropTypes.string,
};

export default AppHeader;
