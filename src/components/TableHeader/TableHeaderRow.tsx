import styles from './TableHeader.module.scss';
import { TableHeaderCell } from './TableHeaderCell';

export const TableHeaderRow = ({}) => {
  return (
    <div className={styles.row}>
      <TableHeaderCell text='id' style={`id-default ${styles.id}`} />
      <TableHeaderCell text='Заголовок' style={`title-default ${styles.title}`} isFilterNeeded={true} />
      <TableHeaderCell text='Описание' style={styles.description} />
    </div>
  );
};
