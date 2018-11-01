// @flow

import * as React from 'react';
import type { StatusType } from '../api/model';
import Badge from './Badge';
import { STATUS } from '../api/model';

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

const STATUS_COLORS = {
  [STATUS.REGISTERED]: '#0f76bb',
  [STATUS.IN_PROGRESS]: '#0f76bb',
  [STATUS.DONE]: '#39b54a',
  [STATUS.RESOLVED]: '#39b54a',
  [STATUS.REDIRECTED]: '#ff9600',
  [STATUS.POSTPONED]: '#8f8e94',
};

class StatusBadge extends React.PureComponent<Props> {
  static defaultProps = {
    style: undefined,
  };

  render() {
    const { status, style } = this.props;
    const text = STATUS_TEXTS[status];
    const color = STATUS_COLORS[status];
    return (
      <Badge text={text} color={color} style={style} />
    );
  }
}

export default StatusBadge;
