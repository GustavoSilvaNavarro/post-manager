import { Router } from 'express';

import { retrieveAllPosts, createNewPost, deleteSinglePost } from '@/controllers/posts-controllers';

const router = Router();

router.get('/all', retrieveAllPosts);
router.post('/new', createNewPost);
router.delete('/:idPost', deleteSinglePost);

export default router;
