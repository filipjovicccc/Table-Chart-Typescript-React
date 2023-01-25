import React from "react";

const NewRow: React.FC<{ id: string; starting: number; effective: number }> = (
  props
) => {
  console.log(props.starting);

  let usedNumbers:number[] = [];

function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * (2023 - 2000 + 1)) + 2000;
  
  while (usedNumbers.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * (2023 - 2000 + 1)) + 2000;
  }
  
  usedNumbers.push(randomNumber);
  return randomNumber;
}
  return (
    <tr>
      <td> {generateRandomNumber()}</td>
      <td>{props.starting}</td>
      <td>{props.effective}</td>
    </tr>
  );
};

export default NewRow;
