import React from "react";
import { Table } from "@mantine/core";

interface Props {
  data: any[];
  headings: string[];
  table: "Average" | "Aggregate";
}
const ResultTable: React.FC<Props> = ({ data, headings, table }) => {

  const rows = data.map((element, index) => (
    <Table.Tr key={index}>
      <Table.Td>{table === "Aggregate" ? element.year : element.crop}</Table.Td>
      <Table.Td>
        {table === "Aggregate" ? element.maxCrop : element.avgYield.toFixed(3)}
      </Table.Td>
      <Table.Td>
        {table === "Aggregate" ? element.minCrop : element.avgArea.toFixed(3)}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <h2>{table} Data Table</h2>
      <Table highlightOnHover withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            {headings.map((heading, index) => (
              <Table.Th key={index}>{heading}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};

export default ResultTable;
