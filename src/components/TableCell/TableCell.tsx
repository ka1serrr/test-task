import { FC } from 'react';
import { TableCellProps } from '../../common.types.ts/types';

export const TableCell: FC<TableCellProps> = ({ text, style }) => {
  return (
    <div className={style}>
      <div className='h-full overflow-auto flex items-center'>{text}</div>
    </div>
  );
};
