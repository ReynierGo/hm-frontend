'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string;
}

const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('http://152.53.53.245:8000/pokemon'); // Cambiar por tu URL de FastAPI
        setPokemons(response.data);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };
    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <SearchBar setSearchQuery={setSearchQuery} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
