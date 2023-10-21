import SalesCard from "./SalesCard";
import ScoreListCard from "./ScoreListCard";
import WebAnalyticsCard from "./WebAnalyticsCard";

const RightColumn = () => {
  return (
    <div className="w-full p-2">
      <SalesCard />
      <WebAnalyticsCard />
      <ScoreListCard />
    </div>
  );
};

export default RightColumn;
