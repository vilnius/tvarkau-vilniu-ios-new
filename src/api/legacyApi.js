/* eslint-disable import/prefer-default-export */
// @flow
import type { APIIssue } from './types';
import type { Pagination } from './pagination';
import { sanitize, toRequestFields } from './pagination';

const LEGACY_API_URL = 'https://tvarkaumiesta.lt/mob_api/server.php';

export const listIssues = async (pagination?: Pagination): Promise<APIIssue[]> => {
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
    return json.result;
  } catch (error) {
    console.error('Error listing issues:', error);
    return [];
  }
};
