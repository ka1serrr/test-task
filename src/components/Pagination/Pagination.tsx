import { useTypedSelector } from '../../hooks/useTypedSelector';
import { setPage } from '../../slices/postsSlice';
import { AppDispatch } from '../../store/store';
import styles from './Pagination.module.scss';
import { createPages } from './createPages';
import { useDispatch } from 'react-redux/es/exports';

export const Pagination = () => {
  const { page } = useTypedSelector((state) => state.posts);
  const { postsAmount } = useTypedSelector((state) => state.postsAmount);
  const dispatch = useDispatch<AppDispatch>();
  const amountOfPages = Math.ceil(postsAmount / 10);

  const pagination = createPages(amountOfPages, page);
  return (
    <div className={styles.pagination}>
      {pagination.map((item) => (
        <button
          key={item}
          className={`${styles.paginationButton} ${page === item ? styles.active : ''}`}
          onClick={() => dispatch(setPage(item))}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
