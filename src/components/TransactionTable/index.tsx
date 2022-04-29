import MaterialTable from "material-table";
import { Button, Select, MenuItem } from "@material-ui/core";
import { useLayoutEffect, useEffect, useState } from "react";
import { Container } from "./styles";
import { ScatterChart, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend, Scatter } from "recharts";
import { Footer } from "../Footer";

interface dataProps {
  year: number;
  species: string;
  company: string;
  hybrid: string;
  companyhybrid: string;
  season: string;
  relativematurity: number | string | null;
  topyield: number | string | null;
  yield: number | string | null;
  at35dm: number | string | null;
  topmilksilage: number | string | null;
  milksilage: number | string | null;
  topmilkacre: number | string | null;
  milkacre: number | string | null;
  drymatter: number | string | null;
  crudeprotein: number | string | null;
  ndf: number | string | null;
  ndfd: number | string | null;
  at240undf: number | string | null;
  adf: number | string | null;
  starch: number | string | null;
  sugar: number | string | null;
  nel: number | string | null;
  ivdmd: number | string | null;
  tdn: number | string | null;
  yielddigestiblendf: number | string | null;
  diseasedonotuse: number | string | null;
  disease: number | string | null;
  donotuselodging: number | string | null;
  lodging: number | string | null;
  active: number;
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


  //////////////////////////////////////////
  // Customized Filters
  //////////////////////////////////////////

  const [filteredData, setFilteredData] = useState<dataProps[]>([]);
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [companyFilter, setCompanyFilter] = useState<string>("all");
  const [speciesFilter, setSpeciesFilter] = useState<string>("all");
  const [seasonFilter, setSeasonFilter] = useState<string>("all");

  useEffect(() => {
    const year_filtered = selectedYearFilter(data);
    const company_filtered = selectedCompanyFilter(year_filtered);
    const species_filtered = selectedSpeciesFilter(company_filtered);
    const season_filtered = selectedSeasonFilter(species_filtered);

    setFilteredData(season_filtered);

  }, [yearFilter, companyFilter, speciesFilter, seasonFilter])


  function selectedYearFilter(auxData: dataProps[]): dataProps[] {
    return (yearFilter === "all" ? auxData : auxData.filter(dt => dt.year === Number(yearFilter)))
  }
  function selectedCompanyFilter(auxData: dataProps[]): dataProps[] {
    return (companyFilter === "all" ? auxData : auxData.filter(dt => dt.company === (companyFilter)))
  }
  function selectedSpeciesFilter(auxData: dataProps[]): dataProps[] {
    return (speciesFilter === "all" ? auxData : auxData.filter(dt => dt.species === (speciesFilter)))
  }
  function selectedSeasonFilter(auxData: dataProps[]): dataProps[] {
    return (seasonFilter === "all" ? auxData : auxData.filter(dt => dt.season === (seasonFilter)))
  }

  //////////////////////////////////////////
  // End of Customized Filters
  //////////////////////////////////////////

  // Populating Data Set
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/devfel/forage-hybrid-table/master/src/data/data2021.json")
      .then((resp) => resp.json())
      .then((resp) => {
        const formattedData = resp.map((el: dataProps) => {
          //TODO, DONT LONAD IF ACTIVE === 0 .... if (el.active === 1) {
          return {
            // ALL DATA TO BE LOADED BY THE SOFTWARE
            year: el.year,
            species: el.species,
            company: el.company,
            hybrid: el.hybrid,
            companyhybrid: (el.company + " / " + el.hybrid),
            season: el.season,
            relativematurity: (el.relativematurity === null || el.relativematurity === "") ? -1 : Number(el.relativematurity),
            topyield: el.topyield,
            yield: (el.yield === null || el.yield === "") ? -1 : Number(el.yield),
            at35dm: (el.at35dm === null || el.at35dm === "") ? -1 : Number(el.at35dm),
            topmilksilage: el.topmilksilage,
            milksilage: (el.milksilage === null || el.milksilage === "") ? -1 : Number(el.milksilage),
            topmilkacre: el.topmilkacre,
            milkacre: (el.milkacre === null || el.milkacre === "") ? -1 : Number(el.milkacre),
            drymatter: (el.drymatter === null || el.drymatter === "") ? -1 : Number(el.drymatter),
            crudeprotein: (el.crudeprotein === null || el.crudeprotein === "") ? -1 : Number(el.crudeprotein),
            ndf: (el.ndf === null || el.ndf === "") ? -1 : Number(el.ndf),
            ndfd: (el.ndfd === null || el.ndfd === "") ? -1 : Number(el.ndfd),
            at240undf: (el.at240undf === null || el.at240undf === "") ? -1 : Number(el.at240undf),
            adf: (el.adf === null || el.adf === "") ? -1 : Number(el.adf),
            starch: (el.starch === null || el.starch === "") ? -1 : Number(el.starch),
            sugar: (el.sugar === null || el.sugar === "") ? -1 : Number(el.sugar),
            nel: (el.nel === null || el.nel === "") ? -1 : Number(el.nel),
            ivdmd: (el.ivdmd === null || el.ivdmd === "") ? -1 : Number(el.ivdmd),
            tdn: (el.tdn === null || el.tdn === "") ? -1 : Number(el.tdn),
            yielddigestiblendf: (el.yielddigestiblendf === null || el.yielddigestiblendf === "") ? -1 : Number(el.yielddigestiblendf),
            diseasedonotuse: (el.diseasedonotuse === null || el.diseasedonotuse === "") ? -1 : Number(el.diseasedonotuse),
            disease: (el.disease === null || el.disease === "") ? -1 : Number(el.disease),
            donotuselodging: (el.donotuselodging === null || el.donotuselodging === "") ? -1 : Number(el.donotuselodging),
            lodging: (el.lodging === null || el.lodging === "") ? -1 : Number(el.lodging),
            active: (el.active)
          };
          //}
        });

        setFilteredData(formattedData);
        setData(formattedData);

        setYearFilter("2021");
        setSpeciesFilter("Corn"); //TODO SELECT THE CORRECT VALUE DEPENDING ON THE USER.
        return setData(formattedData);
      });
  }, []);


  /* TODO - Fix Chart
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
  END OF CHART DATA POPULATING */

  // const TableCellStyle = { borderRight: "1px solid #e5e5e5" };
  const BoldCellStyle = { fontWeight: 600 };

  // --- LOOKUPS USED WITH THE OLD FILTERING SYSTEM ---
  // const yearsLookup = {
  //   2020: "2020",
  //   2019: "2019",
  //   2018: "2018",
  //   2017: "2017",
  // };
  // const speciesLookup = {
  //   "Corn Silage": "Corn Silage",
  //   Corn: "Corn",
  //   "Soghum Sudan": "Soghum Sudan",
  //   "Forage Soghum": "Forage Soghum",
  // };
  // const seasonLookup = { 
  //   Spring: "Spring", 
  //   Summer: "Summer" 
  // };
  // //{title: "Year", field: "year", lookup: yearsLookup, filterPlaceholder: "Select" },
  // --- ---

  const columns = [
    // THE MAIN COLUMNS THAT WILL APPEAR IN THE TABLE 
    // All Comentaries are columns that will NOT be displayed as main columns. 

    { title: "Year", field: "year" },
    //{ title: "Species", field: "species" },
    { title: "Company", field: "company" },
    { title: "Hybrid", field: "hybrid" },
    { title: "Season", field: "season" },
    //{ title: "Relative Maturity", field: "relativematurity" },
    //{ title: "Top Yield", field: "topyield" },
    { title: "Yield Dry Tons/acre", field: "yield", defaultSort: "desc", render: (row: any) => <div className={row.topyield === "*" ? "top-characteristic" : ""}>{row.yield !== -1 ? row.yield : "n/a"}</div> },
    //{ title: "35% DM T/A", field: "at35dm" },
    //{ title: "Top Milk lb/Ton of silage", field: "topmilksilage" },
    { title: "Milk lb/Ton of silage", field: "milksilage", render: (row: any) => <div className={row.topmilksilage === "*" ? "top-characteristic" : ""}>{row.milksilage !== -1 ? row.milksilage : "n/a"}</div> },
    //{ title: "Top Milk lb/acre", field: "topmilkacre" },
    { title: "Milk lb/acre", field: "milkacre", render: (row: any) => <div className={row.topmilkacre === "*" ? "top-characteristic" : ""}>{row.milkacre !== -1 ? row.milkacre : "n/a"}</div> },
    //{ title: "Dry matter %", field: "drymatter" },
    //{ title: "Crude protein %", field: "crudeprotein" },
    { title: "NDF %", field: "ndf", render: (row: any) => <div>{row.ndf !== -1 ? row.ndf : "n/a"}</div> },
    { title: "NDFD %", field: "ndfd", render: (row: any) => <div>{row.ndfd !== -1 ? row.ndfd : "n/a"}</div> },
    //{ title: "240 UNDF", field: "at240undf" },
    //{ title: "ADF %", field: "adf" },
    { title: "Starch %", field: "starch", render: (row: any) => <div>{row.starch !== -1 ? row.starch : "n/a"}</div> },
    //{ title: "Sugar %", field: "sugar" },
    //{ title: "NEL Mcal/lb", field: "nel" },
    //{ title: "IVDMD %", field: "ivdmd" }, //TODO 
    //{ title: "TDN %", field: "tdn" },
    //{ title: "Yield digestible NDF, T/A", field: "yielddigestiblendf" },
    //{ title: "Disease Not to be Used", field: "diseasedonotuse" },
    //{ title: "Disease %", field: "disease" },
    //{ title: "Lodging Not to be Used", field: "donotuselodging" },
    //{ title: "Lodging %", field: "lodging" },
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
  const allYearsSingle = Array.from(new Set(allYears));
  const allCompanies = data.map(el => el.company);
  const allCompaniesSingle = Array.from(new Set(allCompanies)).sort();
  const allSpecies = data.map(el => el.species);
  const allSpeciesSingle = Array.from(new Set(allSpecies)).sort();
  const allSeasons = data.map(el => el.season);
  const allSeasonsSingle = Array.from(new Set(allSeasons));

  if (screenSwitch === "table2020") {
    return (
      <Container>
        <Button onClick={handleClickTable} variant="contained" className="selected">
          Table
        </Button>
        <Button onClick={handleClickChart} variant="contained">
          Chart
        </Button>

        <Button className="tutorial-button" variant="contained">
          <a href="#">Tutorial</a>
        </Button>

        {/* Not using the original filters
        <div className="show-filter-select-box">
          <FormControlLabel style={{ fontSize: "20rem" }} control={<Checkbox checked={filter} onChange={handleChangeFilter} color="default" />} label="Hide/Show Filters" />
        </div>
        */}

        {/* CUSTOM FILTERS BEGIN - TABLE PAGE */}
        <div className="show-filter-select-box">
          <p style={{ fontSize: "1rem" }}> <b>Available Filters</b> </p>
        </div>

        <div className="custom-filters">

          <div className="custom-species-filter custom-filter-item">
            <p>Filter by Species:</p>
            <Select className="select-filter"
              labelId="filter-species-label"
              id="filter-species-id"
              value={speciesFilter}
              label="Species"
              onChange={(e) => setSpeciesFilter(e.target.value as any)}
            >
              {allSpeciesSingle.map(el => <MenuItem value={el}>{el}</MenuItem>)}
            </Select>
          </div>

          <div className="custom-year-filter custom-filter-item">
            <p>Filter by Year:</p>
            <Select className="select-filter"
              labelId="filter-year-label"
              id="filter-year-id"
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
          </div>

          <div className="custom-season-filter custom-filter-item">
            <p>Filter by Season:</p>
            <Select className="select-filter"
              labelId="filter-season-label"
              id="filter-season-id"
              value={seasonFilter}
              label="Season"
              onChange={(e) => setSeasonFilter(e.target.value as any)}
            >
              <MenuItem value={"all"}><em>All</em></MenuItem>
              {allSeasonsSingle.map(el => <MenuItem value={el}>{el}</MenuItem>)}
            </Select>
          </div>


          <div className="custom-company-filter custom-filter-item">
            <p>Filter by Company:</p>
            <Select className="select-filter"
              labelId="filter-company-label"
              id="filter-company-id"
              value={companyFilter}
              label="Company"
              onChange={(e) => setCompanyFilter(e.target.value as any)}
            >
              <MenuItem value={"all"}><em>All</em></MenuItem>
              {allCompaniesSingle.map(el => <MenuItem value={el}>{el}</MenuItem>)}
            </Select>
          </div>
        </div>
        {/* CUSTOM FILTERS ENDS - TABLE PAGE */}


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
              backgroundColor: "#FA4616",
              color: "#fefefe",
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
                      backgroundColor: "#0021A5",
                    }}
                  >
                    {/*** SECONDARY CHARACTERISTICS ***/}
                    <p>Relative Maturity: {rowData.relativematurity !== -1 ? rowData.relativematurity : "n/a"}</p>
                    <p>35% DM T/A: {rowData.at35dm !== -1 ? rowData.at35dm : "n/a"}</p>
                    <p>Dry matter %: {rowData.drymatter !== -1 ? rowData.drymatter : "n/a"}</p>
                    <p>Crude protein %: {rowData.crudeprotein !== -1 ? rowData.crudeprotein : "n/a"}</p>
                    <p>240 UNDF: {rowData.at240undf !== -1 ? rowData.at240undf : "n/a"}</p>
                    <p>ADF %: {rowData.adf !== -1 ? rowData.adf : "n/a"}</p>
                    <p>Sugar %: {rowData.sugar !== -1 ? rowData.sugar : "n/a"}</p>
                    <p>NEL Mcal/lb: {rowData.nel !== -1 ? rowData.nel : "n/a"}</p>
                    <p>IVDMD %: {rowData.ivdmd !== -1 ? rowData.ivdmd : "n/a"}</p>
                    <p>TDN %: {rowData.tdn !== -1 ? rowData.tdn : "n/a"}</p>
                    <p>Yield digestible NDF, T/A: {rowData.yielddigestiblendf !== -1 ? rowData.yielddigestiblendf : "n/a"}</p>
                    <p>Disease %: {rowData.disease !== -1 ? rowData.disease : "n/a"}</p>
                    <p>Lodging %: {rowData.lodging !== -1 ? rowData.lodging : "n/a"}</p>
                  </div>
                );
              },
            },
          ]}
          title="UF Silage Hybrid Trial Table"
        />
        <span style={{ color: "darkblue", fontWeight: "bold", margin: "1rem" }}>Blue and bold characteristics in the table mean it was a top performer within that season and year.</span>
        <br></br>
        <Footer />
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

        <Button className="tutorial-button" variant="contained">
          <a href="#">Tutorial</a>
        </Button>


        {/* CUSTOM FILTERS BEGIN - CHART PAGE */}
        <div className="show-filter-select-box">
          <p style={{ fontSize: "1rem" }}> <b>Available Filters</b> </p>
        </div>

        <div className="custom-filters">

          <div className="custom-species-filter custom-filter-item">
            <p>Filter by Species:</p>
            <Select className="select-filter"
              labelId="filter-species-label"
              id="filter-species-id"
              value={speciesFilter}
              label="Species"
              onChange={(e) => setSpeciesFilter(e.target.value as any)}
            >
              {allSpeciesSingle.map(el => <MenuItem value={el}>{el}</MenuItem>)}
            </Select>
          </div>


          <div className="custom-year-filter custom-filter-item">
            <p>Filter by Year:</p>
            <Select className="select-filter"
              labelId="filter-year-label"
              id="filter-year-id"
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
          </div>

          <div className="custom-season-filter custom-filter-item">
            <p>Filter by Season:</p>
            <Select className="select-filter"
              labelId="filter-season-label"
              id="filter-season-id"
              value={seasonFilter}
              label="Season"
              onChange={(e) => setSeasonFilter(e.target.value as any)}
            >
              <MenuItem value={"all"}><em>All</em></MenuItem>
              {allSeasonsSingle.map(el => <MenuItem value={el}>{el}</MenuItem>)}
            </Select>
          </div>

          <div className="custom-company-filter custom-filter-item">
            <p>Filter by Company:</p>
            <Select className="select-filter"
              labelId="filter-company-label"
              id="filter-company-id"
              value={companyFilter}
              label="Company"
              onChange={(e) => setCompanyFilter(e.target.value as any)}
            >
              <MenuItem value={"all"}><em>All</em></MenuItem>
              {allCompaniesSingle.map(el => <MenuItem value={el}>{el}</MenuItem>)}
            </Select>
          </div>
        </div>
        {/* CUSTOM FILTERS ENDS - CHART PAGE */}
        <div className="chart-box">
          <div className="chart-title">UF Silage Hybrid Trial Chart</div>
          <div className="chart-sub-title" style={{ color: "#FAFAFA" }}>Yield Dry Matter (DM tons/acre) X Milk Production (lb milk/ton) </div>

          <ScatterChart className="chart-container" width={chartWidth} height={chartHeight} margin={{ top: 20, right: 30, bottom: 10, left: 0 }}>
            <CartesianGrid strokeDasharray="1 1" />
            <ZAxis dataKey="companyhybrid" name="Company/Hybrid" unit="" />
            <XAxis tickCount={4} dataKey="yield" type="number" domain={[1, 16]} name="Total Production" unit=" lb DM/A" />
            <YAxis interval={0} tickCount={4} dataKey="milksilage" type="number" domain={[1400, 4100]} name="Milk Production" unit=" mk/ton" />
            <Tooltip cursor={{ strokeDasharray: "10 10" }} />
            <Legend />
            <Scatter name={speciesFilter} data={filteredData} fill="#22884C" />
          </ScatterChart>
        </div>
        <Footer />
      </Container>
    );
  }
}
