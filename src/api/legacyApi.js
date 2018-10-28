/* eslint-disable import/prefer-default-export */
// @flow
import type { APIIssue } from './types';

const LEGACY_API_URL = 'https://tvarkaumiesta.lt/mob_api/server.php';

export const listIssues = async (): Promise<APIIssue[]> => {
  try {
    const response = await fetch(LEGACY_API_URL, {
      method: 'POST',
      body: JSON.stringify({
        method: 'get_problems',
        id: 6,
        params: {
          start: 0,
          limit: 100,
        },
      }),
    });
    const json = await response.json();
    return json.result;
  } catch (error) {
    return [];
  }
};
