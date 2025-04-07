interface SearchBarProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ setSearchQuery }: SearchBarProps) => {
  return (
    <div className="mb-8 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-lg"
      />
    </div>
  );
};

export default SearchBar;