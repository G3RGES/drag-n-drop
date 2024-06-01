import React from "react";

import { useDrop } from "react-dnd";

const Bin = ({ binnedItems }) => {
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: "note",
      drop: () => ({ name: "bin" }),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    []
  );

  return (
    <div className="border h-48 " ref={drop}>
      <h1 className="text-center font-medium py-2 ">Bin</h1>
      {binnedItems.map((item, idx) => (
        <div className="" key={idx}>
          <p className="">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Bin;
