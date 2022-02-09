import create from "zustand";

type State = {
  count: number;
  increase: (by: number) => void;
  reset: () => void;
};

export const useStore = create<State>((set, get) => ({
  count: 0,
  // @TODO: NOTES/ It isn't safe to call get() when not in a setter, because of initialisation.
  increase: (by) => {
    console.log(`Updating from previous state of ${get().count}`)
    set((state) => ({count: state.count + by}));
  },
  reset: () => {
    set((state) => ({count: 0}));
  },
}));
