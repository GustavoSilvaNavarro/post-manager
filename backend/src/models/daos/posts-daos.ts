import { PostSchema } from '@/models/schemas/posts-schema';
import { checkData } from '@/helpers/helper-functions';
import { IPost } from '@/types/api-data';
import { AppErrors, HttpStatusCode } from '@/helpers/app-error';

export const addNewPost = async (payload: Omit<IPost, 'id'>) => {
  const { name, description } = payload;

  if (!checkData(name) || !checkData(description)) {
    throw new AppErrors({ message: 'Invalid fields', httpCode: HttpStatusCode.BAD_REQUEST, code: 3 });
  }

  const newPost = await PostSchema.create(payload);
  return newPost;
};

export const retrievePosts = async () => await PostSchema.findAll({});

export const deleteOnePost = async (id: string) => {
  const idPost = Number(id);

  if (checkData(idPost)) {
    throw new AppErrors({ message: 'Invalid ID', httpCode: HttpStatusCode.BAD_REQUEST, code: 3 });
  }

  const post = await PostSchema.findOne({ where: { id: idPost } });

  if (!post) {
    throw new AppErrors({ message: 'Post does not exist', httpCode: HttpStatusCode.BAD_REQUEST, code: 3 });
  }

  await post.destroy();

  return post;
};
