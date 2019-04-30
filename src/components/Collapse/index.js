// @flow

// Import Native
import React, { Component } from 'react';
import { View, Animated, LayoutAnimation, Text, TouchableOpacity } from 'react-native';

// Import Component
import { CollapsableHeader, CollapsableBody } from '../../index';

// Flow
type Props = {
  isCollapsed: ?boolean,
  disabled: ?boolean,
  children: ?any
};

type State = {
  isCollapsed: boolean,
  updatedHeight: ?number,
  height: ?number,
  isHeightSet: boolean
};

class CollapsableComponent extends Component<Props, State> {

  static defaultProps = {
    isCollapsed: true,
    disabled: false
  };

  state: State = {
    isCollapsed: this.props.isCollapsed,
    updatedHeight: 0,
    isHeightSet: false,
    height: 0
  };

  // Toggle the collapse
  toggle = () => {
    // STEP 1: Prep for the next animation, call it before setState
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    // STEP 2: calculate the new height and set it along with collapsed
    this.setState(state => (
      {
        updatedHeight: state.isCollapsed ? state.height : 0,
        isCollapsed: !state.isCollapsed,
      }
    ));
  };

  // Set the height of the children after it is being calculated
  _setHeight = event => {
    if (!this.state.isHeightSet) {
      this.setState({
        height: event.nativeEvent.layout.height,
        isHeightSet: true
      });
    }
  };

  // Get the height of the collapsing element
  _getHeight = () => {
    let { isCollapsed, isHeightSet, updatedHeight } = this.state;
    if (isHeightSet && isCollapsed) {
      return {
        overflow: 'hidden',
        height: updatedHeight
      };
    } else {
      return {
        overflow: 'hidden'
      };
    }
  };

  render() {
    let { isCollapsed } = this.state;
    let { disabled } = this.props;
    let header = null;
    let body = null;

    // Iterate through the collapsableHeader and collapsableBody wrapped components
    React.Children.forEach(this.props.children, child => {
      if (child.type === CollapsableHeader) {
        header = (
          <TouchableOpacity disabled={disabled}>
            {child}
          </TouchableOpacity>
        );
      }
      else if (child.type === CollapsableBody) {
        body = (
          child
        );
      }
    })

    if (!header) {
      console.warn('CollapsableHeader missing, please include it to enable the collapsable body');
      return null;
    } else {
      return (
        <View>
          {header}
          <View style={this._getHeight()} onLayout={this._setHeight}>
            {isCollapsed ? body : null}
          </View>

        </View>
      );
    }
  }

};

export default CollapsableComponent;