import { create } from 'zustand';

const useStore = create((set) => ({
    apparelUrl: "",
    setApparelUrl: (newUrl) => set({ apparelUrl: newUrl }),
  }));
  
export default useStore;