import React from "react";
import type { IconPlateProps } from "../../../types/ComponentsProps";

const IconPlate: React.FC<IconPlateProps> = (props) => {
  const Icon = props.icon;
  return (
    <div
      style={{
        backgroundColor: props.color,
        boxShadow: `0 0 10px ${props.color}`,
      }}
      className="m-1 flex aspect-square h-11 w-11 items-center justify-center rounded-full"
    >
      <Icon className="text-xl text-white" />
    </div>
  );
};

export default IconPlate;
