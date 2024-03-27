import { create } from 'zustand';

const useStore = create((set) => ({
    apparelUrl: "initvalue",
    setApparelUrl: (newUrl) => set((state) => ({ count: newUrl })),
  }));
  
export default useStore;