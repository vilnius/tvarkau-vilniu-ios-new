// @flow
import { STATUS } from '../api/model';
import type { StatusType } from '../api/model';

const STATUS_COLORS = {
  [STATUS.REGISTERED]: '#0f76bb',
  [STATUS.IN_PROGRESS]: '#0f76bb',
  [STATUS.DONE]: '#39b54a',
  [STATUS.RESOLVED]: '#39b54a',
  [STATUS.REDIRECTED]: '#ff9600',
  [STATUS.POSTPONED]: '#8f8e94',
};

const statusColor = (status: StatusType): string => STATUS_COLORS[status]
  || STATUS_COLORS[STATUS.REGISTERED];

export default statusColor;
