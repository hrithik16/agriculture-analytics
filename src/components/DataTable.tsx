import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { ProcessedDataItem } from "../utils/types";
import { calculateAggregates } from "../utils/aggregateUtils";
import { calculateAverage } from "../utils/averageUtils";
import ResultTable from "./ResultTable";

const DataTable: React.FC = () => {
  const [data, setData] = useState<ProcessedDataItem[]>([]);

  useEffect(() => {
    fetchData()
      .then((processedData) => {
        setData(processedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const aggregates = calculateAggregates(data);
  const averages = calculateAverage(data);

  return ( <div>
    <ResultTable data={aggregates} headings={["year", "Max Crop", "Min Crop"]} table='Aggregate'/>
    <ResultTable data={averages} headings={["crop", "Max Crop", "Min Crop"]} table='Average'/>
    </div>);
};

export default DataTable;
