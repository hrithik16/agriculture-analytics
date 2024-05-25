import { ProcessedDataItem, AverageItem } from './types';

export const calculateAverage = (data: ProcessedDataItem[]): AverageItem[] => {
    let crops = [...new Set(data.map(item => item.crop))];
    let result: AverageItem[] = [];

    crops.forEach(crop => {
        let cropData = data.filter(item => item.crop === crop);
        let totalYield = cropData.reduce((sum, item) => sum + item.yield, 0);
        let totalArea = cropData.reduce((sum, item) => sum + item.area, 0);

        result.push({
            crop: crop,
            avgYield: totalYield / cropData.length,
            avgArea: totalArea / cropData.length
        });
    });

    return result;
};
