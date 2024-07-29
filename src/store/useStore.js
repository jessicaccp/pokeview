import { create } from "zustand";

const useStore = create((set) => ({
  countPokemon: 0,
  dataPokemon: [],
  setCountPokemon: (countPokemon) => set({ countPokemon }),
  setDataPokemon: (dataPokemon) => set({ dataPokemon }),
}));

export default useStore;
