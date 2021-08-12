import MaterialTable from "material-table";
import { useEffect, useState } from "react";
import { Container } from "./styles";

//https://devfel.github.io/convertfloss/data/flosscolor.json

export function TransactionTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("localhost:3000/data/data.json")
      .then((resp) => resp.json())
      .then((resp) => console.log(resp));
  }, []);
  // const TableCellStyle = { borderRight: "1px solid #e5e5e5" };
  const BoldCellStyle = { fontWeight: 600 };

  const dataList = [{ hexa: "test", name: "hibrid" }];

  const columns = [
    { title: "Company", field: "hexa", cellStyle: BoldCellStyle },
    { title: "Hybrid", field: "name", cellStyle: BoldCellStyle },
    // { title: "Total Production (lb DM/A)", field: "totalProduction" },
    // { title: "Estimated Silage (ton Silage/A)", field: "estimatedSilage" },
    // { title: "Milk Production per ton (lb milk/ton)", field: "milkPerTon" },
    // { title: "Milk production per acre (lb milk/A)", field: "milkPerAcre", cellStyle: BoldCellStyle },
    // { title: "Disease score", field: "diseaseScore" },
    // { title: "Year", field: "year" },
    // { title: "Season", field: "season" },
    // { title: "Analysis Type", field: "type" },
  ];

  return (
    <Container>
      <MaterialTable
        columns={columns}
        data={data}
        options={{
          exportButton: true,
          padding: "dense",
          tableLayout: "auto",
          headerStyle: {
            backgroundColor: "#cecece",
          },
          rowStyle: {
            backgroundColor: "#ffffff",
            fontSize: "85%",
          },
        }}
        detailPanel={[
          {
            tooltip: "Show Details",
            render: (rowData) => {
              return (
                <div
                  style={{
                    fontSize: 50,
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "#9b90fd",
                  }}
                >
                  {/* {rowData.hexa} */}
                </div>
              );
            },
          },
        ]}
        title="Demo Title"
      />
    </Container>
  );
}
