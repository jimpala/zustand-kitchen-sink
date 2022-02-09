import React from "react";
import { useStore } from "../../zustand";

export interface IncButtonProps {}

const IncButton: React.FunctionComponent<IncButtonProps> = (): JSX.Element => {
  const increase = useStore((state) => state.increase);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        increase(1);
      }}
    >
      Increment
    </button>
  );
};

export default IncButton;
