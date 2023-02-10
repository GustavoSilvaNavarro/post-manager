import { BsSearch } from 'react-icons/bs';

export const NavBar = (): JSX.Element => {
  return (
    <div className="w-full flex items-center justify-between px-4 mb-8">
      <div className="flex items-center bg-[#374151] px-4 rounded-md">
        <BsSearch className="text-[#bec2c8] font-semibold" />
        <input
          className="border-none outline-none bg-transparent focus:ring-0 min-w-[500px] text-[#bec2c8] placeholder-[#bec2c8]"
          type="text"
          placeholder="Search by name..."
        />
      </div>
      <button
        className="bg-shine-green border-[1px] border-shine-green min-w-[150px] rounded-md py-2 text-[white] hover:bg-transparent hover:border-[1px] hover:border-[#bec2c8] transition-colors"
        type="button"
      >
        Search
      </button>
    </div>
  );
};
