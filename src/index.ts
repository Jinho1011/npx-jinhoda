import { createElement } from "react";
import { render } from "ink";
import { Introduce } from "./Jinho";

const run = () => {
  return render(createElement(Introduce));
};

export default run;
