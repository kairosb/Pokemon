import React, { createContext, useState, useContext, ReactNode } from "react";

interface Favorito {
  id: number; 
  name: string;
  url: string;
  image: string;
}

interface FavoritosContextType {
  favorito: Favorito[];
  setFavorito: (favorito: Favorito[]) => void;
}

const FavoritosContext = createContext<FavoritosContextType>({
  favorito: [],
  setFavorito: () => {},
});

FavoritosContext.displayName = "Favoritos";


interface FavoritosProviderProps {
  children: ReactNode;
}

export default function FavoritosProvider({ children }: FavoritosProviderProps) {
  const [favorito, setFavorito] = useState<Favorito[]>([]);

  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

interface NovoFavorito {
    id: number;
    name: string;
    image: string;
    url: string;
  }

export function useFavoritoContext() {
    const {favorito, setFavorito} = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito: NovoFavorito){
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);
        
        let novaLista = [...favorito];

        if(!favoritoRepetido){
            novaLista.push(novoFavorito)
            return setFavorito(novaLista);
        }

        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
        return setFavorito(novaLista);
    }
    return{
        favorito,
        adicionarFavorito
    }
}
