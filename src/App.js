import ChartFunc from "./chart";
import DataGridFunc from "./dataGrid";
import PieChartFun from "./pieChart";

function App() {
  return (
    <>
      <div class="container">
        <div class="box">
          <PieChartFun />
        </div>
        <div class="box">
          <ChartFunc />
        </div>
      </div>
      <div class="box2">
        <DataGridFunc />
      </div>
    </>
  );
}

export default App;
