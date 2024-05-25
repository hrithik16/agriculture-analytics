import { ProcessedDataItem, AggregateItem } from './types';

export const calculateAggregates = (data: ProcessedDataItem[]): AggregateItem[] => {
    let result: AggregateItem[] = [];
    let years = [...new Set(data.map(item => item.year))];

    years.forEach(year => {
        let cropsInYear = data.filter(item => item.year === year);

        // Initialize variables to track max and min production
        let maxProduction = -Infinity;
        let maxCrops: string[] = [];
        let minProduction = Infinity;
        let minCrops: string[] = [];

        cropsInYear.forEach(item => {
            if (item.production > maxProduction) {
                maxProduction = item.production;
                maxCrops = [item.crop];
            } else if (item.production === maxProduction) {
                maxCrops.push(item.crop);
            }

            if (item.production < minProduction) {
                minProduction = item.production;
                minCrops = [item.crop];
            } else if (item.production === minProduction) {
                minCrops.push(item.crop);
            }
        });

        result.push({
            year: parseInt(year.toString().substring(year.toString().length - 4)),
            maxCrop: maxCrops.join(", "),
            minCrop: minCrops.join(", "),
        });
    });

    return result;
};
