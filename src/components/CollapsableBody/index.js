// @flow
import React from 'react';
import { View } from 'react-native';

type Props = {
  children: any
};

const CollapsableBody = (props: Props) => {
  return (
    <View {...props}>
      {props.children}
    </View>
  );
}

export default CollapsableBody;

