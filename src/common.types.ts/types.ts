export interface Post {
  id: string;
  title: string;
  body: string;
}

export interface TableCellProps {
  text: string;
  style: string;
}

export type Status = 'error' | 'loading' | 'idle';

export type Method = 'GET' | 'POST' | 'DELETE' | 'PUT';

export type Params = {
  _page?: string;
  _limit?: string;
  q?: string;
  _sort?: string;
  _order?: 'asc';
};
