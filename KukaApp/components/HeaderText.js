import React from 'react';
import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';

const themedStyles = StyleService.create({
  headerContainer: {
    backgroundColor: 'color-primary-default',
    fontFamily: 'OpenSans-Bold',
    fontWeight: '700',
    fontSize: 26,
    paddingLeft: 18,
    paddingBottom: 10,
  },
});

export const HeaderText = ({ text }) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Text style={styles.headerContainer} appearance="alternative" category="h2">
      {text}
    </Text>
  );
};
