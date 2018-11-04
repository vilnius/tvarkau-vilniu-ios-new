/* eslint-disable import/prefer-default-export */
// @flow
import type { Pagination } from './pagination';
import { sanitize, toRequestFields } from './pagination';
import type { Issue, StatusType } from './model';
import { STATUS } from './model';

const LEGACY_API_URL = 'https://tvarkaumiesta.lt/mob_api/server.php';

type APIIssue = {
  problem_id: number,
  docNo: string,
  description: string,
  status: string,
  type?: string,
  type_name?: string,
  assignee?: string,
  report_date?: string,
  entry_date?: string,
  complete_date?: string,
  time_ago?: string,
  answer?: string,
  address?: string,
  x?: number,
  y?: number,
  thumbnail?: string,
  photo?: string[],
};

// eslint-disable-next-line no-unused-vars
type APIResponse = {
  id: number,
  result?: APIIssue[],
  error?: any,
};

const toStatus = (s?: string): StatusType => {
  switch (s) {
    case 'Išnagrinėta':
      return STATUS.RESOLVED;
    case 'Nagrinėjama':
      return STATUS.IN_PROGRESS;
    case 'Atlikta':
      return STATUS.DONE;
    case 'Perduota':
      return STATUS.REDIRECTED;
    case 'Atidėta':
      return STATUS.POSTPONED;
    default:
      return STATUS.REGISTERED;
  }
};

const toIssue = (apiIssue: APIIssue): Issue => ({
  id: apiIssue.problem_id,
  documentId: apiIssue.docNo,
  date: apiIssue.report_date || apiIssue.entry_date,
  category: apiIssue.type || apiIssue.type_name,
  description: apiIssue.description,
  status: toStatus(apiIssue.status),
  answer: apiIssue.answer,
  answerDate: apiIssue.complete_date,
  location: (apiIssue.x && apiIssue.y) || apiIssue.address ? {
    address: apiIssue.address,
    coordinates: (apiIssue.x && apiIssue.y) ? {
      lon: apiIssue.x,
      lat: apiIssue.y,
    } : undefined,
  } : undefined,
  thumbnail: apiIssue.thumbnail,
  photo: apiIssue.photo,
});

export const listIssues = async (pagination?: Pagination): Promise<Issue[]> => {
  const params = toRequestFields(sanitize(pagination));
  try {
    const response = await fetch(LEGACY_API_URL, {
      method: 'POST',
      body: JSON.stringify({
        method: 'get_problems',
        id: 6,
        params,
      }),
    });
    const json = await response.json();
    return json.result.map(toIssue);
  } catch (error) {
    console.error('Error listing issues:', error);
    return [];
  }
};

export const getIssue = async (id: number): Promise<?Issue> => {
  const params = { id };
  try {
    const response = await fetch(LEGACY_API_URL, {
      method: 'POST',
      body: JSON.stringify({
        method: 'get_report',
        id: 7,
        params,
      }),
    });
    const json = await response.json();
    return toIssue(json.result);
  } catch (error) {
    console.error(`Error loading issue: ${id}`, error);
    return null;
  }
};
