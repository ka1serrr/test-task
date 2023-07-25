import styles from './TableHeader.module.scss';
import { TableHeaderRow } from './TableHeaderRow';
export const TableHeader = () => {
  return (
    <div className={styles.tableHeader}>
      <TableHeaderRow />
    </div>
  );
};
