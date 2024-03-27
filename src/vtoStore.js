import { create } from 'zustand';

const useStore = create((set) => ({
    apparelUrl: "initvalues",
    setApparelUrl: (newUrl) => set({ apparelUrl: newUrl }),
  }));
  
export default useStore;