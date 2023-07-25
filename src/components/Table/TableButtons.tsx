import { useTypedSelector } from '../../hooks/useTypedSelector';
import { decremetPage, incrementPage } from '../../slices/postsSlice';
import { AppDispatch } from '../../store/store';
import { Button } from '../Button/Button';
import { useDispatch } from 'react-redux';
import { Pagination } from '../Pagination/Pagination';

const TableButtons = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { page } = useTypedSelector((state) => state.posts);
  const { postsAmount } = useTypedSelector((state) => state.postsAmount);
  const totalPages = Math.ceil(postsAmount / 10);
  const addPage = () => {
    dispatch(incrementPage());
  };

  const minueOnePage = () => {
    dispatch(decremetPage());
  };

  return (
    <div className='flex justify-between mt-4 px-[25px] '>
      <Button text='Назад' onClick={minueOnePage} disabled={page === 1} />
      <Pagination />
      <Button text='Далее' onClick={addPage} disabled={page === totalPages} />
    </div>
  );
};

export default TableButtons;
