import { FC } from 'react';
import { TableCellProps } from '../../common.types.ts/types';
import arrow from '../../assets/arrow-down.svg';
import { useDispatch } from 'react-redux/es/exports';
import { AppDispatch } from '../../store/store';
import { setPage } from '../../slices/postsSlice';
import { useSearchParams } from 'react-router-dom';

interface TableHeaderCell extends TableCellProps {
  isFilterNeeded?: boolean;
}

export const TableHeaderCell: FC<TableHeaderCell> = ({ style, text, isFilterNeeded }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    // Если фильтр нужен, то выполняется проверка на фильтр и выполненеие нужной функции.
    if (isFilterNeeded) {
      if (!searchParams.has('_sort')) {
        searchParams.append('_sort', 'title');
        setSearchParams(searchParams);
        dispatch(setPage(1));
        return;
      }
      searchParams.delete('_sort');
      setSearchParams(searchParams);
    }
  };

  return (
    <div className={style} onClick={handleClick}>
      <div
        className={`h-full w-full overflow-auto flex items-center ${
          text === 'id' ? 'justify-between' : 'justify-center'
        }`}
      >
        <div className='mr-7'>{text}</div>
        <img src={arrow} alt='arrow-down' className='block' />
      </div>
    </div>
  );
};
