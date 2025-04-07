import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Image from "next/image";

interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string;
}

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Card className="bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-all">
      <CardHeader className="relative">
        <div className="w-full h-40 relative">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-semibold text-center">{pokemon.name}</CardTitle>
        <CardDescription className="text-sm text-center mt-2 text-gray-600">
          Altura: {pokemon.height}m <br />
          Peso: {pokemon.weight}kg
        </CardDescription>
        <div className="mt-2">
          <p className="text-sm font-medium text-gray-700 text-center">Tipo: {pokemon.types}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;