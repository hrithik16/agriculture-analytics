// Define the data type
export interface DataItem {
    Year: number;
    "Crop Name": string;
    "Crop Production (UOM:t(Tonnes))"?: number;
    "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"?: number;
    "Area Under Cultivation (UOM:Ha(Hectares))"?: number;
}

// Define the processed data type
export interface ProcessedDataItem {
    year: number;
    crop: string;
    production: number;
    yield: number;
    area: number;
}

// Define the aggregate data type
export interface AggregateItem {
    year: number;
    maxCrop: string;
    minCrop: string;
}

// Define the average data type
export interface AverageItem {
    crop: string;
    avgYield: number;
    avgArea: number;
}
