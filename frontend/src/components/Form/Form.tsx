import { useState } from 'react';
import { useDispatch } from 'react-redux';

import '@/components/Form/Form.css';

import { createNewPost } from '@/services/post-services';
import { addPost } from '@/redux/features/posts/post-slice';

export const Form = (): JSX.Element => {
  const [state, setState] = useState({
    namePost: '',
    postDescription: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state.namePost === '' || state.postDescription === '') {
      //TODO: Send a toast
      return;
    }

    const newPost = await createNewPost({
      name: state.namePost,
      description: state.postDescription,
    });

    if (newPost) {
      setState({
        namePost: '',
        postDescription: '',
      });

      dispatch(addPost(newPost));
    }
  };

  return (
    <div className="px-4">
      <form onSubmit={e => void handleSubmit(e)}>
        <div className="flex items-center justify-between flex-wrap formContainer">
          <div className="flex flex-col formContainer__input">
            <label className="text-white text-lg" htmlFor="nameInput">
              Name
            </label>
            <input
              className="bg-[#374151] border-none outline-none focus:ring-0 min-w-[300px] text-[#bec2c8] placeholder-[#bec2c8] rounded-md"
              type="text"
              name="namePost"
              value={state.namePost}
              onChange={handleChange}
              id="nameInput"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col formContainer__input">
            <label className="text-white text-lg" htmlFor="descriptionInput">
              Description
            </label>
            <textarea
              className="bg-[#374151] border-none outline-none focus:ring-0 min-w-[400px] text-[#bec2c8] placeholder-[#bec2c8] rounded-md descriptionInput"
              id="descriptionInput"
              name="postDescription"
              onChange={handleChange}
              value={state.postDescription}
              placeholder="Description"
            ></textarea>
          </div>
          <button
            className="bg-shine-green border-[1px] border-shine-green min-w-[150px] rounded-md py-2 text-[white] hover:bg-transparent hover:border-[1px] hover:border-[#bec2c8] transition-colors"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
