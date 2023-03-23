import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tooltip } from "../components";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-16">
      {technologies.map((technology) => (
        <div className="w-20 h-20" key={technology.name}>
          <Tooltip message={technology.name}>
            <img src={technology.icon} />
            {/* <BallCanvas icon={technology.icon} /> */}
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
