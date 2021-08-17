import Big from "big.js";
import { dataItem } from "../../components/IntervalAndLine";

interface ColumnDataItem {
  label: string;
  value: number;
  type: string;
  realValue?: number;
}
interface LineDataItem {
  label: string;
  percent: number;
}

export const handleIntervalAndLineData = (data: any[]) => {
  const columnData: ColumnDataItem[] = [],
    lineData: LineDataItem[] = [];
  data.map((item) => {
    columnData.push({
      label: item.label.slice(0, 2),
      value:
        item.target > item.current
          ? Big(item.target).minus(item.current).toNumber()
          : 0,
      realValue: item.target,
      type: "目标",
    });
    columnData.push({
      label: item.label.slice(0, 2),
      value: item.current,
      type: "达成",
    });
    lineData.push({
      label: item.label.slice(0, 2),
      percent: Big(item.current).div(item.target).toNumber(),
    });
  });
  return [columnData, lineData];
};
