import { api } from '@/services/api';
import { env } from '@/helpers/env';
import { IPost } from '@/types/app-types';

export const createNewPost = async (payload: Omit<IPost, 'id'>) => {
  try {
    const result = await api.post('/posts/new', payload, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': env.apiBaseUrl || '*',
      },
    });

    const newPost = result.data as unknown as IPost;
    return newPost;
  } catch (err) {
    console.error(err);
  }
};

export const retrieveListOfPosts = async () => {
  try {
    const result = await api.get('/posts/all', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': env.apiBaseUrl || '*',
      },
    });

    const postArray = result.data as unknown as Array<IPost>;
    return postArray;
  } catch (err) {
    console.error(err);
  }
};

export const deleteSinglePost = async (id: number) => {
  try {
    const result = await api.delete(`/posts/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': env.apiBaseUrl || '*',
      },
    });

    const deletedPost = result.data as unknown as IPost;
    return deletedPost;
  } catch (err) {
    console.error(err);
  }
};
