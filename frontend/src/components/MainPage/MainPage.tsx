import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '@/components/MainPage/MainPage.css';

import { RootState } from '@/redux/store';
import { retrieveListOfPosts, deleteSinglePost } from '@/services/post-services';
import { listsOfPost, deletePost } from '@/redux/features/posts/post-slice';
import { errorToast } from '@/helpers/toasts';

export const MainPage = (): JSX.Element => {
  const postList = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    void retrieveListOfPosts().then(posts => {
      if (posts) dispatch(listsOfPost(posts));
    });
  }, [dispatch]);

  const removePost = async (id: number) => {
    if (isNaN(id)) return;

    const deletedPost = await deleteSinglePost(id);

    if (deletedPost) {
      dispatch(deletePost(deletedPost.id));
      return;
    }

    errorToast('Post was not deleted');
  };

  if (!postList || postList.length < 1) {
    return (
      <main className="flex-1 px-4 flex items-center justify-center">
        <h1 className="text-white text-2xl">Data is not available</h1>
      </main>
    );
  }

  return (
    <main className="px-4 flex items-center justify-center h-full py-2 overflow-auto">
      <div className="relative sm:rounded-lg w-full h-full tableContainer">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {postList.map((post, i) => (
              <tr
                key={post.id}
                className={`${
                  i !== postList.length - 1
                    ? 'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                    : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600'
                }`}
              >
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {post.name}
                </th>
                <td className="px-6 py-4">{post.description}</td>
                <td className="px-6 py-4">
                  <button className="text-red-600" onClick={() => void removePost(post.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
