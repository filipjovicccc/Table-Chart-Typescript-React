import React from "react";

const NewRow: React.FC<{ id: string; starting: number; effective: number }> = (
  props
) => {
  console.log(props.starting);
  return (
    <tr>
      <td> {Math.floor(Math.random() * 2000)}</td>
      <td>{props.starting}</td>
      <td>{props.effective}</td>
    </tr>
  );
};

export default NewRow;
