## To-Do List

### Front-End

- [X] Change Header Image Background 1h
- [X] Fix Title (Analysis type) to (Species) 0.5h
- [X] Add Year to the Table 1h
- [X] Add the Filter Year Functionality to the table. 1h
- [X] Change the Title from (2020 Corn and Sorghum Silage Hybrid Trial) to (Corn and Sorghum Silage Hybrid Trial) 0.5h
- [X] Remove Estimated Silage From Table Main Information: //{ title: "Estimated Silage (ton Silage/A)", field: "estimatedSilage", filtering: false }, 1h
- [X] Add Default Sorting for Total Production. 2h  { title: "Total Production (lb DM/A)", field: "totalProduction", filtering: false, defaultSort: "desc" }, Property defaultSort not working properly.
- [X] Adding Filter PlaceHolders. 1h
- [X] Fix the Export to Export all data instead of selected data only. 1h

- [X] Change Filter for Species Type from Open to SelectBox with kind of Species. 2h
- [X] Add Estimated Silage to the Secondary Information 1h
- [X] Change Search Field Styling 0.5h
- [X] Change Filters to be Shown as Default (Button Show/Hide Filter Starts as True). 0.5h
- [X] Style the Rows with Different Color for "Even" Lines. 2h
- [X] Check where the Silage will be shown //{ title: "Estimated Silage (ton Silage/A)", field: "estimatedSilage", filtering: false } 0.5h

- [X] Update Sample with at least one example of 2019 to check filters. 0.5h
- [X] Add Custom Filter by Year before the Table starts 3h 
- [X] Change Chart to show only the selected Values instead of whole Data. 1h

- [X] Present Software to Lindsey and Felipe and talk about the data on the Spreadsheets. 1h

- [X] Add Filters Fields Outside the Table (Done with the Year). 3h
- [X] Change the custom year filter so it is dynamically constructed with all the years available. 3h
- [X] Change the order of Year Custom filter so last year is first. 1h
- [X] Add Company Field Select Box Outside the Table (make it so it is dynamically constructed with all companies available). 6h
- [X] Change Chart to show only the selected Values instead of whole Data. 3h

- [X] Create Custom Filter for Season. 2h
- [X] Style CSS for Custom Filters added before the table. 6h
- [X] Select Box Filters need to be automatically filled (year for example needs to read the data and present the years accordingly). 5h
- [X] One custom filter is messing with the other, they are not working toghether, have to be fixed. 6h
- [X] Remove Original Filters and change the logic so it start without showing original filters. 2h
- [X] Remove button to show/hide Original Filters. 1h

- [X] Prepare and Present Software to Ashley. Ask about Interface, Pictures, Logo, Colors, Branding. 1h

- [X] Change the Color of the Title Bar to Orange (tryed) Blue didnt like it. 0.5h
- [X] Change the Color of the Title Bar Font to White, while not selected. 0.5h
- [X] Change the Color of the Header Background to UF's Blue. 0.5h
- [X] Change the Color of the Secondary background stats to UF's Blue. 1h
- [X] Change the Header Logo. 1h
- [X] Change Header Background image. 1h
- [X] Change the Header Software Title/Name. 0.5h 
- [X] Change the Title from "Corn and Sorghum Silage Hybrid Trial” to “UF Silage Hybrid Trial” 0.5h

- [X] Look for other Tools and Spreadshets for interface ideas and Name ideas. 2h
- [X] Add contact info at the bottom (Contact us at forages@ifas.ufl.edu) 0.5
- [X] Release New Version online with npm run deploy. 0.5h

- [X] Add Filters selected and not selected (with the state they are in) to the Chart Page. 4h
- [X] Change the Font on Title of the Chart Page to match the Font on the Table Page Title. 1h
- [X] Change the footer information on the chart page to match the table page. 0.5h
- [X] Refactor Footer Code to be a Component and not Coded Twice the same way. 3h

- [X] Change table to show only the 9 chosen characteristics as Main columns. 1h
- [X] Change the show details button to show all the other 13 characteristics as secondary data. 1h
- [X] Invert Year of the Filter By Year to show recent years first. 0.5h
- [X] Organize all the companies in ascending alphabetic order on the filters. 2h
- [X] Change -1 to be (n/a) on the main characteristics. 2h
- [X] Change -1 to be (n/a) on the secondary characteristics. 1h
- [X] Change format of some values if it is Top Characteristics.  Different Color and Size and Bold. 5h
- [X] Change max width of table and header from 1120 px to 1280px.  0.5h
- [X] Add Filter for Species. 3h
- [X] Pre select one filter for Species. (don’t allow “all” option). (Still not 100% accurate) 11h

- [ ] Add Modal for the user to select what species he/she wants. 
- [ ] Double check Pre selected filter for Species. Apprently still not 100% accurate for every time page is loaded.
- [ ] Make Last Year avaible as default on the Search.

- [ ] Create Custom Filter for Species.
- [ ] Do the Custom Search Bar for Hybrid Names. 
- [ ] Change which columns will be shown as primary and as secondary.
- [ ] Change the Titles of columns and secondary charactersitics.

- [ ] Style the Property if it is a TOP performer
- [ ] Change the Tooltip on Chart to show Company, Hybrid and Values.
- [ ] Add Other Data from SpreedSheet.
- [ ] Refactor software so Filters are shown in both pages as a component.
- [ ] Refactor sourccde code as components to be easier to maintain and update.
- [ ] With all the correct data, certify chart will work for higher and smallers values predefined on the chart MAX MIN.
- [ ] Test and Make Sure all the Needed FaveIcons are Working

- Changes to be made after Meeting with Ashley.

- [ ] Add How to use the system button/link.

--- TODO after meeting with Wallau ---
- [ ] Change data, to work with the new correct data. 
- [ ] Add website Statistics.
- [ ] Correct the main characteristics to be: year, company, hybrid, season, yield, milksilage, milkacre, ndf, ndfd, starch.
- [ ] Try to make starch for Corn Only.
- [ ] Change the colors of the Top Ones. (Legend: Top performer within season within year).
- [ ] Species Filter must start with one of them and not have the all option. 
- [ ] Create a NOTE saying that the top characteristics are for each specific year. 
- [ ] Do a stress test on the system before release (look for paid options)
- [ ] Ask if they want to pay for a Domain. 


- [Not] Change the Order of Filter Lookup for Year (Default Year), so that the most recent year appear first when the user open fiters to select. (Maybe Wont Be necessary if Default Filters are Removed)



- ADD TO NOTION: TODOS DONE, PROBLEMAS DATA E ULTIMOS COMMITS REALIZADOS

### Back-End

- [ ] Create Back-end to send xls-file to the server.


### Other Table and Tools Examples

- https://search.utcrops.com/corn-silage/table-2-a-across-locations-yield-and-agronomic-traits
- https://search.utcrops.com/corn-grain/table-16-corn-hybrid-characteristics
- http://forages.org/index.php/tools2/36-forage-species-selector-cat (Forage Species Selector)
- http://forages.org/index.php/tools-grassman (Grass Management Tools - Excel Spreadsheets)
- https://varietytrials.msu.edu/wp-content/uploads/2020/12/2020-MSU-Corn-Bulletin-E31.pdf (2020 Michigan Corn Hybrids Compared)
- https://www.canr.msu.edu/resources/corn-picker-for-silage (Corn Picker for Silage)
- https://www.rea-hybrids.com/en-us/products/corn.html (Corn - Rea Hybrids)
- https://cals.cornell.edu/field-crops/about/resources/web-based-tools (Variety of Tools)
- http://corn.agronomy.wisc.edu/Season/DSS.aspx (Corn Agronomy - Decision Support Systems)
- https://www.whminer.org/dairy (Dairy Management Tools) & Small Article: https://www.progressivedairy.com/topics/feed-nutrition/the-next-step-in-corn-silage-hybrid-evaluation-fiber-and-starch-yields
- https://auburn.medius.re (One Professor Wallau Sended to Me)

### Other Information
- Show Grouping Option to Professor.
- Show Hide/Show Collumns Option to Professor.
- Remeber that exists the Custom Render Option.


### Helpfull Tools & Tutorials
- https://www.youtube.com/watch?v=4TOONPrrlKY - Learn Material Table with React JS | Material Table Tutorial
- https://www.youtube.com/watch?v=RHOu7pt0_G8 - 15. Filtering in Material Table | Material UI
- CSV, Excel to JSON Converter: https://shancarter.github.io/mr-data-converter/

