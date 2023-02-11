import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsSearch } from 'react-icons/bs';

import '@/components/NavBar/NavBar.css';

import { filterPosts, listsOfPost } from '@/redux/features/posts/post-slice';
import { retrieveListOfPosts } from '@/services/post-services';

export const NavBar = (): JSX.Element => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleFilter = () => {
    if (filter !== '') {
      dispatch(filterPosts(filter));
    }
  };

  const restoreValues = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filter === '' && e.key === 'Backspace') {
      const posts = await retrieveListOfPosts();
      if (posts) dispatch(listsOfPost(posts));
    }
  };

  return (
    <div className="w-full flex items-center flex-wrap justify-between px-4 mb-8 filterBarContainer">
      <div className="flex items-center bg-[#374151] px-4 rounded-md searchBar__input">
        <BsSearch className="text-[#bec2c8] font-semibold" />
        <input
          className="border-none outline-none bg-transparent focus:ring-0 min-w-[500px] text-[#bec2c8] placeholder-[#bec2c8]"
          type="text"
          value={filter}
          onKeyUp={e => void restoreValues(e)}
          onChange={e => setFilter(e.target.value)}
          placeholder="Search by name..."
        />
      </div>
      <button
        className="bg-shine-green border-[1px] border-shine-green min-w-[150px] rounded-md py-2 text-[white] hover:bg-transparent hover:border-[1px] hover:border-[#bec2c8] transition-colors searchButton"
        type="button"
        onClick={handleFilter}
      >
        Search
      </button>
    </div>
  );
};
