// @flow
import * as React from 'react';
import type { StatusType } from '../api/model';
import Badge from './Badge';
import { STATUS } from '../api/model';
import statusColor from '../pallette/statusColor';

type Props = {
  status: StatusType,
  style?: any,
};

// TODO i18n
const STATUS_TEXTS = {
  [STATUS.REGISTERED]: 'Registruota',
  [STATUS.IN_PROGRESS]: 'Vykdoma',
  [STATUS.DONE]: 'Atlikta',
  [STATUS.RESOLVED]: 'Išnagrinėta',
  [STATUS.REDIRECTED]: 'Perduota',
  [STATUS.POSTPONED]: 'Atidėta',
};

export default class StatusBadge extends React.PureComponent<Props> {
  static defaultProps = {
    style: undefined,
  };

  render() {
    const { status, style } = this.props;
    const text = STATUS_TEXTS[status];
    const color = statusColor(status);
    return (
      <Badge text={text} color={color} style={style} />
    );
  }
}
