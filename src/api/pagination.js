// @flow

const PAGE_SIZE = 50;

export type Pagination = {
  page: number,
};

export const sanitize = (pagination?: Pagination): Pagination => {
  const page = pagination && pagination.page > 0 ? pagination.page : 1;
  return { page };
};

export const toRequestFields = (pagination: Pagination): { start: number, limit: number } => ({
  start: (pagination.page - 1) * PAGE_SIZE,
  limit: PAGE_SIZE,
});
