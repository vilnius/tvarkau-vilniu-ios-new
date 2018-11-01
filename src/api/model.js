// @flow

// eslint-disable-next-line import/prefer-default-export
export const STATUS = Object.freeze({
  REGISTERED: 'REGISTERED',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
  RESOLVED: 'RESOLVED',
  REDIRECTED: 'REDIRECTED',
  POSTPONED: 'POSTPONED',
});

// eslint-disable-next-line no-undef
export type StatusType = $Values<typeof STATUS>;

export type Coordinates = {|
  lon: number,
  lat: number,
|};

export type Location = {|
  address?: string,
  coordinates?: Coordinates,
|};

export type Issue = {
  id: number,
  documentId?: string,
  date?: string,
  category?: string,
  description?: string,
  status: StatusType,
  answer?: string,
  answerDate?: string,
  location?: Location,
  thumbnail?: string,
  photo?: string[]
}
