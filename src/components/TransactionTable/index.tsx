import MaterialTable from "material-table";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button, Checkbox, Select, MenuItem } from "@material-ui/core";
import DataSet from "../../data/data.json"

import { useLayoutEffect, useEffect, useState } from "react";
import { Container } from "./styles";
import { ScatterChart, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend, Scatter } from "recharts";
import { Console } from "console";

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
  const [filter, setFilter] = useState<boolean>(true);
  const [chartDataCorn, setChartDataCorn] = useState<chartDataProps[]>([]);
  const [chartDataCornSilage, setChartDataCornSilage] = useState<chartDataProps[]>([]);
  const [chartDataForageSoghum, setChartDataForageSoghum] = useState<chartDataProps[]>([]);
  const [chartDataSoghumSudan, setChartDataSoghumSudan] = useState<chartDataProps[]>([]);

  const [screenSwitch, setScreenSwitch] = useState<string>("table2020");

  const windowWidth = useWindowSize()[0];
  const chartWidth = windowWidth > 1120 ? 1120 - 30 : windowWidth - 30;
  const chartHeight = chartWidth < 600 ? 300 : chartWidth / 2;

  //////////////////////////////////////////
  // Customized Filters
  //////////////////////////////////////////
  const [filteredData, setFilteredData] = useState<dataProps[]>([]);
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [companyFilter, setCompanyFilter] = useState<string>("all");

  useEffect(() => {
    const year_filtered = selectedYearFilter(data)
    const company_filtered = selectedCompanyFilter(year_filtered)

    setFilteredData(company_filtered)

  }, [yearFilter, companyFilter])

  function selectedYearFilter(auxData: dataProps[]): dataProps[] {
    return (yearFilter === "all" ? auxData : auxData.filter(dt => dt.year === Number(yearFilter)))
  }
  function selectedCompanyFilter(auxData: dataProps[]): dataProps[] {
    return (companyFilter === "all" ? auxData : auxData.filter(dt => dt.company === (companyFilter)))
  }
  //////////////////////////////////////////
  // End of Customized Filters
  //////////////////////////////////////////

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

        setFilteredData(formattedData);
        return setData(formattedData);
      });
  }, []);

  // Populating Data Set - Summer Corn (*NO IF ON SEASON)
  useEffect(() => {
    const formattedChartDataCorn = filteredData.map((el: chartDataProps) => {
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
  }, [filteredData]);

  // Populating Data Set - Spring Corn Silage (*NO IF ON SEASON)
  useEffect(() => {
    const formattedChartDataCorn = filteredData.map((el: chartDataProps) => {
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
  }, [filteredData]);

  // Populating Data Set - Summer Forage Soghum (*NO IF ON SEASON)
  useEffect(() => {
    const formattedChartDataCorn = filteredData.map((el: chartDataProps) => {
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
  }, [filteredData]);

  // Populating Data Set - Summer Soghum Sudan (*NO IF ON SEASON)
  useEffect(() => {
    const formattedChartDataCorn = filteredData.map((el: chartDataProps) => {
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
  }, [filteredData]);

  // const TableCellStyle = { borderRight: "1px solid #e5e5e5" };
  const BoldCellStyle = { fontWeight: 600 };
  const yearsLookup = {
    2020: "2020",
    2019: "2019",
    2018: "2018",
    2017: "2017",
  };

  const speciesLookup = {
    "Corn Silage": "Corn Silage",
    Corn: "Corn",
    "Soghum Sudan": "Soghum Sudan",
    "Forage Soghum": "Forage Soghum",
  };

  const seasonLookup = { Spring: "Spring", Summer: "Summer" };

  const columns = [
    { title: "Company", field: "company", cellStyle: BoldCellStyle, filterPlaceholder: "Search" },
    { title: "Hybrid", field: "hybrid", cellStyle: BoldCellStyle, filterPlaceholder: "Search" },
    { title: "Total Production (lb DM/A)", field: "totalProduction", filtering: false, defaultSort: "desc" },
    //{ title: "Estimated Silage (ton Silage/A)", field: "estimatedSilage", filtering: false },
    { title: "Milk Production per ton (lb milk/ton)", field: "milkPerTon", filtering: false },
    { title: "Milk production per acre (lb milk/A)", field: "milkPerAcre", filtering: false },
    { title: "Disease score", field: "diseaseScore", filtering: false },
    { title: "Year", field: "year", lookup: yearsLookup, filterPlaceholder: "Select" },
    { title: "Season", field: "season", lookup: seasonLookup, filterPlaceholder: "Select" },
    { title: "Species", field: "type", lookup: speciesLookup, filterPlaceholder: "Select" },
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

  //Variables to populate filters dinamically 
  const allYears = data.map(el => el.year);
  const allYearsSingle = Array.from(new Set(allYears)).reverse();
  const allCompanies = data.map(el => el.company);
  const allCompaniesSingle = Array.from(new Set(allCompanies));

  if (screenSwitch === "table2020") {
    return (
      <Container>
        <Button onClick={handleClickTable} variant="contained" className="selected">
          Table
        </Button>
        <Button onClick={handleClickChart} variant="contained">
          Chart
        </Button>

        <br></br><br></br>
        <p>Filter by Year:</p>
        <Select
          labelId="filter-year-label"
          id="filter-year-id"
          style={{ width: 56 }}
          value={yearFilter}
          label="Year"
          onChange={(e) => setYearFilter(e.target.value as any)}
        >
          <MenuItem value={"all"}><em>All</em></MenuItem>
          {allYearsSingle.map(el => <MenuItem value={el}>{el}</MenuItem>)}

          {/* //Old Method used to Populate Filters Manually
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2017}>2017</MenuItem>
          */ }
        </Select>

        <br></br><br></br>
        <p>Filter by Company:</p>
        <Select
          labelId="filter-company-label"
          id="filter-company-id"
          style={{ width: 180 }}
          value={companyFilter}
          label="Company"
          onChange={(e) => setCompanyFilter(e.target.value as any)}
        >
          <MenuItem value={"all"}><em>All</em></MenuItem>
          {allCompaniesSingle.map(el => <MenuItem value={el}>{el}</MenuItem>)}
        </Select>

        <div className="filter">
          <FormControlLabel style={{ fontSize: "20rem" }} control={<Checkbox checked={filter} onChange={handleChangeFilter} color="default" />} label="Hide/Show Filters" />
        </div>

        <MaterialTable
          icons={{ Filter: (() => <div></div>) as any }}
          columns={columns as any}
          data={filteredData}
          options={{
            filtering: filter,
            emptyRowsWhenPaging: false,
            pageSize: 10,
            pageSizeOptions: [10, 20, 50, 100],
            exportButton: true,
            exportAllData: true,
            padding: "dense",
            tableLayout: "auto",
            headerStyle: {
              backgroundColor: "#cecece",
            },
            rowStyle: (data, index, teste) => index % 2 == 0 ? {
              backgroundColor: "#f8f8f8",
              fontSize: "85%",
            } : {
              backgroundColor: "#fdfdfd",
              fontSize: "85%",
            },
            searchFieldVariant: "outlined",
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
                    <p>Estimated Silage (Ton/A): {rowData.estimatedSilage}</p>
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
          title="Corn and Sorghum Silage Hybrid Trial"
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

        <div className="chart-title">Corn and Sorghum Silage Hybrid Trial</div>
        <div className="chart-sub-title">Total DM Production (lb DM/ton) X Milk Production (lb milk/ton) </div>

        <ScatterChart className="chart-container" width={chartWidth} height={chartHeight} margin={{ top: 20, right: 30, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="1 1" />
          <ZAxis dataKey="hybrid" name="Hybrid Entry" unit="" />
          <XAxis tickCount={5} dataKey="totalProduction" type="number" domain={[6000, 22000]} name="Total Production" unit=" lb DM/A" />
          <YAxis interval={0} tickCount={5} dataKey="milkPerTon" type="number" domain={[1400, 3800]} name="Milk Production" unit=" mk/ton" />
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
