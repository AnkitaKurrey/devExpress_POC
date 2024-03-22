import React from "react";
import Chart, {
  Series,
  Title,
  Subtitle,
  Pane,
  Border,
} from "devextreme-react/chart";
import { leads } from "./simpleJSON";

const ChartFunc = () => {
  const januaryLeads = leads.filter((lead) => {
    const leadDate = new Date(lead.lead_creation_date);
    return leadDate.getMonth() === 0; // January has index 0
  });
  const propertyValuesJanuary = januaryLeads.map((lead) => lead.property_value);
  const sumOfPointEightPercentJan = propertyValuesJanuary
    .map((value) => value * 0.008)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const FebruaryLeads = leads.filter((lead) => {
    const leadDate = new Date(lead.lead_creation_date);
    return leadDate.getMonth() === 1; // February has index 0
  });
  const propertyValuesFebruary = FebruaryLeads.map(
    (lead) => lead.property_value,
  );
  const sumOfPointEightPercentFeb = propertyValuesFebruary
    .map((value) => value * 0.008)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const MarchLeads = leads.filter((lead) => {
    const leadDate = new Date(lead.lead_creation_date);
    return leadDate.getMonth() === 1;
  });
  const propertyValuesMarch = MarchLeads.map((lead) => lead.property_value);
  const sumOfPointEightPercentMar = propertyValuesMarch
    .map((value) => value * 0.008)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  let res = [
    { revenue: sumOfPointEightPercentJan, month: "January" },
    { revenue: sumOfPointEightPercentFeb, month: "Febraury" },
    { revenue: sumOfPointEightPercentMar, month: "March" },
  ];

  return (
    <Chart dataSource={res}>
      <Title text="Revenue by Month">
        <Subtitle text="(Last 3 months)" />
      </Title>
      <Series
        type="stackedbar"
        argumentField="month"
        valueField="revenue"
        name="revenue"
      />
      <Pane backgroundColor="beige">
        <Border visible={true} width={2} />
      </Pane>
    </Chart>
  );
};

export default ChartFunc;
