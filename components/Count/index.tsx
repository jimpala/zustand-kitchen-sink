import React from "react";
import { useStore } from "../../zustand";

export interface CountProps {}

const Count: React.FunctionComponent<CountProps> = (): JSX.Element => {

  // You could alternatively use...
  // `const { count } = useStore();`
  // Which grabs the whole state object and destructures.
  // The below is better for just grabbing a slice of what you need.
  const count = useStore(state => state.count);

  return <h2>Count: {count}</h2>;
};

export default Count;
