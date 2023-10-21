import CardItem from "./CardItem";
import AreaChartCard from "./AreaChartCard";
import TableCard from "./TableCard";

const LeftColumn = () => {
  return (
    <div className="w-full flex flex-col justify-between p-2">
      <div className="flex flex-col lg:flex-row gap-2 w-full">
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <div className="flex-auto w-full">
        <AreaChartCard />
        <TableCard />
      </div>
    </div>
  );
};

export default LeftColumn;
