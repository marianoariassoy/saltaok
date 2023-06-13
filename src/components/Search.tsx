const Search = () => {
  return (
    <div className="flex gap-4 items-center">
      <input type="text" className="w-full h-8 bg-transparent pr-8 border-b text-sm input-search" />
      <img src="/assets/search.svg" width="15" />
    </div>
  );
};

export default Search;
