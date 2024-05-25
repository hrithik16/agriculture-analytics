import { DataItem, ProcessedDataItem } from './types';

export const fetchData = async (): Promise<ProcessedDataItem[]> => {
    const response = await fetch('/dataset.json');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data: DataItem[] = await response.json();
    return data.map(item => ({
        year: item.Year,
        crop: item["Crop Name"],
        production: item["Crop Production (UOM:t(Tonnes))"] || 0,
        yield: item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0,
        area: item["Area Under Cultivation (UOM:Ha(Hectares))"] || 0
    }));
};
