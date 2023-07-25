import { fetchPosts, setPage } from '../../slices/postsSlice';
import { AppDispatch } from '../../store/store';
import { TableHeader } from '../TableHeader/TableHeader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TableRows } from '../TableRows/TableRows';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import TableButtons from './TableButtons';
import { useSearchParams } from 'react-router-dom';
import { Params } from '../../common.types.ts/types';
import { AxiosRequestConfig } from 'axios';
import { fetchLength } from '../../slices/lengthSlice';
import { Loading } from '../Loading/Loading';
import { Errors } from '../Errors/Errors';
import { SearchBar } from '../SearchBar/SearchBar';

const TableContent = () => {
  return (
    <div>
      <SearchBar />
      <TableHeader />
      <TableRows />
      <TableButtons />
    </div>
  );
};

export const Table = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { page, status: postsStatus } = useTypedSelector((state) => state.posts);
  const { status: postsAmountStatus } = useTypedSelector((state) => state.postsAmount);
  const [searchParams, setSearchParams] = useSearchParams();

  const pageQuery = searchParams.get('_page');
  const sortQuery = searchParams.get('_sort');
  const findQuery = searchParams.get('q');

  useEffect(() => {
    searchParams.set('_page', String(page));
    setSearchParams(searchParams);
    const params: AxiosRequestConfig<Params> = {
      params: {
        _limit: 10,
        _page: page,
        _sort: sortQuery,
        q: findQuery,
      },
    };

    // Отдельно делаем params для считывания общего количества элементов, чтобы рассчитать длину.
    const paramsLength: AxiosRequestConfig<Params> = {
      params: {
        q: findQuery,
      },
    };

    dispatch(fetchLength(paramsLength));
    dispatch(fetchPosts(params));
  }, [dispatch, page, sortQuery, findQuery]);

  // На случай, если пользователь захочет поменять страницу вручную при помощи URL
  useEffect(() => {
    dispatch(setPage(Number(pageQuery)));
  }, []);

  const isLoading = postsStatus === 'loading' && postsAmountStatus === 'loading' ? <Loading /> : null;
  const isError = postsStatus === 'error' ? <Errors /> : null;
  const content = postsStatus === 'idle' ? <TableContent /> : null;

  return (
    <>
      {isLoading}
      {isError}
      {content}
    </>
  );
};
