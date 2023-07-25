import { useSearchParams } from 'react-router-dom';
import styles from './SearchBar.module.scss';
import { useState } from 'react';
import searchIcon from '../../assets/search.svg';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux/es/exports';
import { setPage } from '../../slices/postsSlice';

export const SearchBar = () => {
  // Input
  const [search, setSearch] = useState<string>('');
  // Строка поиска
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchParams.set('q', search);
    setSearchParams(searchParams);
    dispatch(setPage(1));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder='Поиск'
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit' disabled={search.length === 0}>
        <img src={searchIcon} alt='search-icon' />
      </button>
    </form>
  );
};
