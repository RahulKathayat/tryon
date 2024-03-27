import { create } from 'zustand';

const useStore = create((set) => ({
    apparelUrl: "initvalue",
    setApparelUrl: (newUrl) => set({ apparelUrl: newUrl }),
  }));
  
export default useStore;