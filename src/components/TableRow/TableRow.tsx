import { FC } from 'react';
import { TableCell } from '../TableCell/TableCell';
import { Post } from '../../common.types.ts/types';

import styles from './TableRow.module.scss';

export const TableRow: FC<Post> = ({ id, title, body }) => {
  return (
    <div className={styles.row}>
      <TableCell text={id} style={styles.id} />
      <TableCell text={title} style={styles.title} />
      <TableCell text={body} style={styles.description} />
    </div>
  );
};
