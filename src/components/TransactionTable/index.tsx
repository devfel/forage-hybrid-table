import MaterialTable from "material-table";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

import { useLayoutEffect, useEffect, useState } from "react";
import { Container } from "./styles";
import { ScatterChart, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend, Scatter, ResponsiveContainer } from "recharts";

interface dataProps {
  company: string;
  hybrid: string;
  relativeMaturity: number | string;
  totalProduction: number | string;
  estimatedSilage: number | string;
  milkPerTon: number | string;
  milkPerAcre: number | string;
  diseaseScore: number | string;
  lodgingScore: number | string;
  dmAtHarvest: string;
  nel: number | string;
  tdn: number | string;
  cp: number | string;
  ivtdmd30: number | string;
  starch: number | string;
  wsc: number | string;
  adf: number | string;
  aNdf: number | string;
  dNdf3: number | string;
  nDfd30Percentage: number | string;
  year: number;
  season: string;
  type: string;
}

interface chartDataProps {
  company: string;
  hybrid: string;
  totalProduction: number | string;
  milkPerTon: number | string;
  year: number;
  season: string;
  type: string;
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

// function ShowWindowDimensions(props) {
//   const [width, height] = useWindowSize();
//   return <span>Window size: {width} x {height}</span>;
// }

export function TransactionTable() {
  const [data, setData] = useState<dataProps[]>([]);
  const [filter, setFilter] = useState<boolean>(false);
  const [chartDataCorn, setChartDataCorn] = useState<chartDataProps[]>([]);
  const [chartDataCornSilage, setChartDataCornSilage] = useState<chartDataProps[]>([]);
  const [chartDataForageSoghum, setChartDataForageSoghum] = useState<chartDataProps[]>([]);
  const [chartDataSoghumSudan, setChartDataSoghumSudan] = useState<chartDataProps[]>([]);

  const [screenSwitch, setScreenSwitch] = useState<string>("table2020");

  const windowWidth = useWindowSize()[0];
  const chartWidth = windowWidth > 1120 ? 1120 - 30 : windowWidth - 30;
  const chartHeight = chartWidth < 600 ? 300 : chartWidth / 2;

  // Populating Data Set
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/devfel/forage-hybrid-table/master/src/data/data.json")
      .then((resp) => resp.json())
      .then((resp) => {
        const formattedData = resp.map((el: dataProps) => {
          return {
            company: el.company,
            hybrid: el.hybrid,
            relativeMaturity: !isNaN(Number(el.relativeMaturity)) ? Number(el.relativeMaturity) : "-",
            totalProduction: Number(el.totalProduction),
            estimatedSilage: !isNaN(Number(el.estimatedSilage)) ? Number(el.estimatedSilage) : "-",
            milkPerTon: !isNaN(Number(el.milkPerTon)) ? Number(el.milkPerTon) : "-",
            milkPerAcre: !isNaN(Number(el.milkPerAcre)) ? Number(el.milkPerAcre) : "-",
            diseaseScore: !isNaN(Number(el.diseaseScore)) ? Number(el.diseaseScore) : "-",
            lodgingScore: !isNaN(Number(el.lodgingScore)) ? Number(el.lodgingScore) : "-",
            dmAtHarvest: el.dmAtHarvest,
            nel: !isNaN(Number(el.nel)) ? Number(el.nel) : "-",
            tdn: !isNaN(Number(el.tdn)) ? Number(el.tdn) : "-",
            cp: !isNaN(Number(el.cp)) ? Number(el.cp) : "-",
            ivtdmd30: !isNaN(Number(el.ivtdmd30)) ? Number(el.ivtdmd30) : "-",
            starch: !isNaN(Number(el.starch)) ? Number(el.starch) : "-",
            wsc: !isNaN(Number(el.wsc)) ? Number(el.wsc) : "-",
            adf: !isNaN(Number(el.adf)) ? Number(el.adf) : "-",
            aNdf: !isNaN(Number(el.aNdf)) ? Number(el.aNdf) : "-",
            dNdf3: !isNaN(Number(el.dNdf3)) ? Number(el.dNdf3) : "-",
            nDfd30Percentage: !isNaN(Number(el.nDfd30Percentage)) ? Number(el.nDfd30Percentage) : "-",
            year: !isNaN(Number(el.year)) ? Number(el.year) : 0,
            season: el.season,
            type: el.type,
          };
        });

        return setData(formattedData);
      });
  }, []);

  // Populating Data Set - Summer Corn (*NO IF ON SEASON)
  useEffect(() => {
    const formattedChartDataCorn = data.map((el: chartDataProps) => {
      if (el.type === "Corn") {
        return {
          company: el.company,
          hybrid: el.hybrid,
          totalProduction: el.totalProduction,
          milkPerTon: el.milkPerTon,
          year: el.year,
          season: el.season,
          type: el.type,
        };
      } else
        return {
          company: "-",
          hybrid: "-",
          totalProduction: "-",
          milkPerTon: "-",
          year: 0,
          season: "-",
          type: "-",
        };
    });

    setChartDataCorn(formattedChartDataCorn);
  }, [data]);

  // Populating Data Set - Spring Corn Silage (*NO IF ON SEASON)
  useEffect(() => {
    const formattedChartDataCorn = data.map((el: chartDataProps) => {
      if (el.type === "Corn Silage") {
        return {
          company: el.company,
          hybrid: el.hybrid,
          totalProduction: el.totalProduction,
          milkPerTon: el.milkPerTon,
          year: el.year,
          season: el.season,
          type: el.type,
        };
      } else
        return {
          company: "-",
          hybrid: "-",
          totalProduction: "-",
          milkPerTon: "-",
          year: 0,
          season: "-",
          type: "-",
        };
    });

    setChartDataCornSilage(formattedChartDataCorn);
  }, [data]);

  // Populating Data Set - Summer Forage Soghum (*NO IF ON SEASON)
  useEffect(() => {
    const formattedChartDataCorn = data.map((el: chartDataProps) => {
      if (el.type === "Forage Soghum") {
        return {
          company: el.company,
          hybrid: el.hybrid,
          totalProduction: el.totalProduction,
          milkPerTon: el.milkPerTon,
          year: el.year,
          season: el.season,
          type: el.type,
        };
      } else
        return {
          company: "-",
          hybrid: "-",
          totalProduction: "-",
          milkPerTon: "-",
          year: 0,
          season: "-",
          type: "-",
        };
    });

    setChartDataForageSoghum(formattedChartDataCorn);
  }, [data]);

  // Populating Data Set - Summer Soghum Sudan (*NO IF ON SEASON)
  useEffect(() => {
    const formattedChartDataCorn = data.map((el: chartDataProps) => {
      if (el.type === "Soghum Sudan") {
        return {
          company: el.company,
          hybrid: el.hybrid,
          totalProduction: el.totalProduction,
          milkPerTon: el.milkPerTon,
          year: el.year,
          season: el.season,
          type: el.type,
        };
      } else
        return {
          company: "-",
          hybrid: "-",
          totalProduction: "-",
          milkPerTon: "-",
          year: 0,
          season: "-",
          type: "-",
        };
    });

    setChartDataSoghumSudan(formattedChartDataCorn);
  }, [data]);

  // const TableCellStyle = { borderRight: "1px solid #e5e5e5" };
  const BoldCellStyle = { fontWeight: 600 };
  // const yearsLookup = {
  //   2020: "2020",
  //   2019: "2019",
  //   2018: "2018",
  //   2017: "2017",
  // };

  const seasonLookup = { Spring: "Spring", Summer: "Summer" };

  const columns = [
    { title: "Company", field: "company", cellStyle: BoldCellStyle },
    { title: "Hybrid", field: "hybrid", cellStyle: BoldCellStyle, filtering: false },
    { title: "Total Production (lb DM/A)", field: "totalProduction", filtering: false },
    { title: "Estimated Silage (ton Silage/A)", field: "estimatedSilage", filtering: false },
    { title: "Milk Production per ton (lb milk/ton)", field: "milkPerTon", filtering: false },
    { title: "Milk production per acre (lb milk/A)", field: "milkPerAcre", filtering: false },
    { title: "Disease score", field: "diseaseScore", filtering: false },
    // { title: "Year", field: "year", lookup: yearsLookup },
    { title: "Season", field: "season", lookup: seasonLookup },
    { title: "Analysis Type", field: "type" },
  ];

  const handleChangeFilter = () => {
    setFilter(!filter);
  };
  const handleClickChart = () => {
    setScreenSwitch("chart2020");
  };
  const handleClickTable = () => {
    setScreenSwitch("table2020");
  };

  if (screenSwitch === "table2020") {
    return (
      <Container>
        <Button onClick={handleClickTable} variant="contained" className="selected">
          Table
        </Button>
        <Button onClick={handleClickChart} variant="contained">
          Chart
        </Button>

        <div className="filter">
          <FormControlLabel style={{ fontSize: "20rem" }} control={<Checkbox checked={filter} onChange={handleChangeFilter} color="default" />} label="Hide/Show Filters" />
        </div>

        <MaterialTable
          icons={{ Filter: (() => <div></div>) as any }}
          columns={columns}
          data={data}
          options={{
            filtering: filter,
            emptyRowsWhenPaging: false,
            pageSize: 10,
            pageSizeOptions: [10, 20, 50, 100],
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
                      display: "grid",
                      gridTemplateColumns: "repeat(5, 1fr)",
                      gap: "1rem",
                      fontSize: "1rem",
                      padding: "1rem",
                      textAlign: "center",
                      color: "white",
                      backgroundColor: "#2c8558",
                    }}
                  >
                    <p>Relative Maturity: {rowData.relativeMaturity}</p>
                    <p>Lodging Score: {rowData.lodgingScore}</p>
                    <p>DM% at Harvest : {rowData.dmAtHarvest}</p>
                    <p>NEl: {rowData.nel} </p>
                    <p>TDN: {rowData.tdn} </p>
                    <p>CP: {rowData.cp} </p>
                    <p>IVTDMD30: {rowData.ivtdmd30} </p>
                    <p>Starch: {rowData.starch} </p>
                    <p>WSC: {rowData.wsc} </p>
                    <p>ADF: {rowData.adf} </p>
                    <p>aNDF: {rowData.aNdf} </p>
                    <p>dNDF30: {rowData.dNdf3} </p>
                    <p>NDFD30 (%NDF): {rowData.nDfd30Percentage} </p>
                  </div>
                );
              },
            },
          ]}
          title="2020 Corn and Sorghum Silage Hybrid Trial"
        />
        <div className="footer">
          <span>*All the information were gathered from the University of Florida website.</span>
          <span>
            Visit{" "}
            <a href="https://animal.ifas.ufl.edu/extension/courses/csfd/" target="_blank" rel="noopener noreferrer">
              {" "}
              https://animal.ifas.ufl.edu/extension/courses/csfd/{" "}
            </a>{" "}
            for more details.
          </span>
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <Button onClick={handleClickTable} variant="contained">
          Table
        </Button>
        <Button onClick={handleClickChart} variant="contained" className="selected">
          Chart
        </Button>

        <div className="chart-title">2020 Corn and Sorghum Silage Hybrid Trial</div>
        <div className="chart-sub-title">Total DM Production (lb DM/ton) X Milk Production (lb milk/ton) </div>

        <ScatterChart className="chart-container" width={chartWidth} height={chartHeight} margin={{ top: 20, right: 30, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="1 1" />
          <ZAxis dataKey="hybrid" name="Hybrid Entry" unit="" />
          <XAxis tickCount={5} dataKey="totalProduction" type="number" domain={[6000, 22000]} name="Total Production" unit=" lb DM/A" />
          <YAxis interval={0} tickCount={5} dataKey="milkPerTon" type="number" domain={[1400, 3800]} name="Milk Production" unit=" lb/ton" />
          <Tooltip cursor={{ strokeDasharray: "10 10" }} />
          <Legend />
          {/* <Scatter name="All" data={data} fill="#000" /> */}
          <Scatter name="Spring Corn Silage" data={chartDataCornSilage} fill="#8884d8" />
          <Scatter name="Summer Corn" data={chartDataCorn} fill="#96afa0" />
          <Scatter name="Summer Forage Soghum" data={chartDataForageSoghum} fill="#443850" />
          <Scatter name="Summer Soghum Sudan" data={chartDataSoghumSudan} fill="#008f28" />
        </ScatterChart>

        <div className="footer">
          <span>*All the information were gathered from the University of Florida website.</span>
          <span>
            Visit{" "}
            <a href="https://animal.ifas.ufl.edu/extension/courses/csfd/" target="_blank" rel="noopener noreferrer">
              {" "}
              https://animal.ifas.ufl.edu/extension/courses/csfd/{" "}
            </a>{" "}
            for more details.
          </span>
        </div>
      </Container>
    );
  }
}
