import { create } from "zustand";
const useCounterStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  reset: (count) => set({ count }),
}));

export default useCounterStore;
