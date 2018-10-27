// @flow

export type APIIssue = {
  problem_id: number,
  docNo: string,
  description: string,
  status: string,
  type_name: string,
  report_date: string,
  entry_date: string,
  time_ago: string,
  answer?: string,
  from_app: boolean,
  x: number,
  y: number,
  thumbnail: string,
};

export type APIResponse = {
  id: number,
  result?: APIIssue[],
  error?: any,
};
