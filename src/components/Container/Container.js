import React from 'react';
import { View, SafeAreaView, Platform } from 'react-native';
import PropTypes from 'prop-types';

import { AppHeader } from '../';

import { styles } from './Styles';

const Container = ({ children, headerTitle }) => {
  if (Platform.OS === 'ios') {
    return (
      <SafeAreaView style={styles.safeContainer}>
        {headerTitle && <AppHeader title={headerTitle} />}
        <View style={styles.container}>{children}</View>
      </SafeAreaView>
    );
  }

  return <View style={styles.container}>{children}</View>;
};

Container.propTypes = {
  children: PropTypes.node,
  headerTitle: PropTypes.string,
};

export default Container;
