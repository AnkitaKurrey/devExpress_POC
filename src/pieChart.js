import {
  PieChart,
  Series,
  Label,
  Connector,
  Subtitle,
  Title,
  Animation,
} from "devextreme-react/pie-chart";
import { leads } from "./simpleJSON";

function PieChartFun() {
  const distinctStatus = new Set();
  for (var j = 0; j < leads.length; j++) {
    distinctStatus.add(leads[j].status);
  }
  let arr = [];
  for (const item of distinctStatus) {
    arr.push({ status: item, count: 0 });
  }
  leads.forEach((lead) => {
    arr.forEach((obj) => {
      if (obj.status === lead.status) {
        obj.count += 1;
      }
    });
  });

  const customizeText = (pointInfo) => {
    return pointInfo.value + " leads";
  };

  const onPointClick = (e) => {
    const point = e.target;
    if (point.isSelected()) {
      point.clearSelection();
    } else {
      point.select();
    }
  };

  return (
    <PieChart dataSource={arr} onPointClick={onPointClick}>
      <Title text="Leads by Status">
        <Subtitle text="(Last 3 months)" />
      </Title>
      <Series argumentField="status" valueField="count">
        <Label visible={true} position="columns" customizeText={customizeText}>
          <Connector visible={true}></Connector>
        </Label>
      </Series>
    </PieChart>
  );
}

export default PieChartFun;
