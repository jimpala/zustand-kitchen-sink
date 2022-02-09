import create from "zustand";

type State = {
  count: number;
  increase: (by: number) => void;
  reset: () => void;
};

export const useStore = create<State>((set) => ({
  count: 0,
  increase: (by) => {
    set((state) => ({count: state.count + by}));
  },
  reset: () => {
    set((state) => ({count: 0}));
  },
}));
