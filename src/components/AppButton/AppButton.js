import React from 'react';
import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './Styles';

const AppButton = ({ title, onPress, disabled = false }) => {
  return (
    <Pressable
      style={[styles.appButton, disabled && styles.disabledAppButton]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.title, disabled && styles.disabledTitle]}>
        {title}
      </Text>
    </Pressable>
  );
};

AppButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

export default AppButton;
