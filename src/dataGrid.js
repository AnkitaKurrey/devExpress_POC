import React, { useCallback, useRef } from "react";
import "devextreme/dist/css/dx.light.css";

import {
  DataGrid,
  Column,
  SearchPanel,
  Paging,
  Pager,
  Editing,
  Form,
  Popup,
} from "devextreme-react/data-grid";
import {
  Item,
  SimpleItem,
  TabbedItem,
  TabPanelOptions,
  Tab,
} from "devextreme-react/form";
import { SpeedDialAction } from "devextreme-react/speed-dial-action";
import { leads } from "./simpleJSON";

function DataGridFunc() {
  const allowedPageSizes = [5, 10, "all"];
  const gridRef = useRef(null);
  const addRow = useCallback(() => {
    gridRef.current.instance.addRow();
    gridRef.current.instance.deselectAll();
  }, [gridRef]);

  const lead = {
    property_name: "Apartment A",
    property_value: 250000,
    property_size: "1200 sq ft",
    customer_name: "John Smith",
    customer_cibil_score: 720,
    customer_employment_details: "salaried",
    monthly_income: 5000,
    monthly_obligations: 2000,
  };
  return (
    <>
      <DataGrid
        dataSource={leads}
        allowColumnReordering={true}
        ref={gridRef}
        showBorders={true}
      >
        <Column dataField="customer_name"></Column>
        <Column dataField="property_name"></Column>
        <Column dataField="property_value"></Column>
        {/* <Column dataField="property_size"></Column> */}
        <Column
          dataField="lead_creation_date"
          dataType="date"
          sortOrder="desc"
        ></Column>
        <Column dataField="status" />
        {/* <Column dataField="customer_cibil_score" /> */}
        {/* <Column dataField="customer_employment_details" /> */}
        {/* <Column dataField="monthly_income" /> */}
        {/* <Column dataField="monthly_obligations" /> */}

        <SearchPanel
          placeholder="Search here"
          width={500}
          visible={true}
          highlightSearchText={false}
        />

        <Paging defaultPageSize={10} />
        <Pager
          visible={true}
          showPageSizeSelector={true}
          allowedPageSizes={allowedPageSizes}
          showInfo={true}
          infoText="Page {0} of {1} ({2} items)"
        />
        <Editing mode="popup" allowUpdating={true} allowDeleting={true}>
          <Popup
            title="New Lead"
            showTitle={true}
            width={700}
            height={525}
            closeOnOutsideClick={true}
            formData={lead}
          />
          {
            <Form id="form" labelLocation="left" labelMode="outside">
              <Item
                itemType="group"
                caption="Property Details"
                colCount={1}
                colSpan={2}
              >
                <Item
                  dataField="property_name"
                  helpText="Enter property name here..."
                />
                <Item
                  dataField="property_value"
                  helpText="Enter estimated property value here..."
                />
                <Item
                  dataField="property_size"
                  helpText="Enter estimated property size here..."
                />
              </Item>

              <Item
                itemType="group"
                caption="Customer Details"
                colCount={1}
                colSpan={2}
              >
                <Item
                  dataField="customer_name"
                  helpText="Enter customer name here..."
                />
                <Item
                  dataField="customer_cibil_score"
                  helpText="Enter customer CIBIL score here..."
                />
              </Item>
              <Item
                itemType="group"
                caption="Customer Employment Details"
                colCount={1}
                colSpan={2}
              >
                <TabbedItem>
                  <TabPanelOptions deferRendering={false} height="150" />
                  <Tab title="Salaried">
                    <SimpleItem dataField="Monthly Income" />
                    <SimpleItem dataField="Monthly Obligations" />
                  </Tab>
                  <Tab title="Non-Salaried">
                    <SimpleItem dataField="Monthly Income" />
                  </Tab>
                </TabbedItem>
              </Item>
            </Form>
          }
        </Editing>
        <SpeedDialAction
          icon="add"
          label="Add Lead"
          index={1}
          onClick={addRow}
        />
      </DataGrid>
    </>
  );
}

export default DataGridFunc;
