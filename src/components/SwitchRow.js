/* @flow */
import * as React from 'react';

import RowItem from './RowItem';
import Switch from './Switch';
import { withTheme } from '../core/theming';
import type { Theme } from '../types/Theme';

type Props = {
  theme: Theme,
  value: boolean,
  onValueChange?: (value: boolean) => *,
  style: any,
};

class SwitchRow extends React.Component<Props> {
  renderRight = () => {
    const { value, onValueChange, theme, style } = this.props;
    return <Switch onValueChange={onValueChange} theme={theme} value={value} />;
  };

  render() {
    return <RowItem title="" renderRight={this.renderRight} style={style} {...this.props} />;
  }
}

export default withTheme(SwitchRow);
