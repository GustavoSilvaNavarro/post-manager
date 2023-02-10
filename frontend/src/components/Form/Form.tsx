import '@/components/Form/Form.css';

export const Form = (): JSX.Element => {
  return (
    <div className="px-4">
      <form>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <label className="text-white text-lg" htmlFor="nameInput">
              Name
            </label>
            <input
              className="bg-[#374151] border-none outline-none focus:ring-0 min-w-[300px] text-[#bec2c8] placeholder-[#bec2c8] rounded-md"
              type="text"
              id="nameInput"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white text-lg" htmlFor="descriptionInput">
              Description
            </label>
            <textarea
              className="bg-[#374151] border-none outline-none focus:ring-0 min-w-[400px] text-[#bec2c8] placeholder-[#bec2c8] rounded-md descriptionInput"
              id="descriptionInput"
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
