import { Post } from '../../common.types.ts/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TableRow } from '../TableRow/TableRow';

export const TableRows = () => {
  const { posts } = useTypedSelector((state) => state.posts);

  return (
    <>
      {posts?.map((post: Post) => (
        <TableRow key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </>
  );
};
