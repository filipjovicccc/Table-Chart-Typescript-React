import React from "react";
import TableStyle from "./Table.styled";
import { Item } from "./models/Item";
import NewRow from "./NewRow";

const Table: React.FC<{ items: Item[] }> = (props) => {
  console.log(props.items);
  return (
    <TableStyle>
      <thead>
        <tr>
          <th>Year</th>
          <th>Starting Rent</th>
          <th>Effective rent</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item) => (
          <NewRow
            id={item.id}
            key={item.id}
            starting={item.startingRent}
            effective={item.effectiveRent}
          />
        ))}
      </tbody>
    </TableStyle>
  );
};

export default Table;
