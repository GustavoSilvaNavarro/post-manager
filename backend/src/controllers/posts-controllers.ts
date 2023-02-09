import { Request, Response, NextFunction } from 'express';

import { addNewPost, retrievePosts, deleteOnePost } from '@/models/daos/posts-daos';
import { IPost } from '@/types/api-data';
import { Params } from '@/types/routes-types';

export const retrieveAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const postList = await retrievePosts();
    return res.status(200).json(postList);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const createNewPost = async (
  req: Request<never, never, Omit<IPost, 'id'>>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newPost = await addNewPost(req.body);
    return res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const deleteSinglePost = async (req: Request<Params>, res: Response, next: NextFunction) => {
  try {
    const deletedPost = await deleteOnePost(req.params.idPost);
    return res.status(200).json(deletedPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
