import React from 'react'

import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem
} from '@progress/kendo-react-charts';

import 'hammerjs';
import axios from 'axios';

const ChartContainer = () => {

  // const countries = [];
  // const confirmed = [];
  // const countriesCode = [];


  const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo(Brazzaville)", "Congo(Kinshasa)", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Diamond Princess", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", `"Korea, South"`, "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia"];
  const confirmed = ["65080.0", "132153.0", "126434.0", "13569.0", "31661.0", "1255.0", "3447044.0", "221699.0", "30000.0", "640293.0", "331883.0", "11396.0", "209293.0", "786698.0", "3975.0", "383302.0", "1041706.0", "12761.0", "8025.0", "1374.0", "343065.0", "203150.0", "51620.0", "15894094.0", "235.0", "416055.0", "13408.0", "143211.0", "4418.0", "28898.0", "24157.0", "77429.0", "1358300.0", "7010.0", "4918.0", "1315913.0", "102823.0", "3177212.0", "3868.0", "11476.0", "30825.0", "296632.0", "46834.0", "353217.0", "130543.0", "71610.0", "1656874.0", "272613.0", "712.0", "11485.0", "184.0", "281630.0", "416621.0", "250391.0", "72220.0", "8436.0", "3906.0", "128309.0", "18539.0", "268520.0", "195.0", "91157.0", "5979366.0", "24039.0", "5968.0", "335769.0", "3645883.0", "93521.0", "387426.0", "161.0", "246156.0", "22963.0", "3746.0", "15743.0", "13624.0", "27.0", "230311.0", "801025.0", "6555.0", "26031991.0", "1758898.0", "2815882.0", "1160494.0", "254870.0", "839290.0", "4183476.0", "47776.0", "710834.0", "726432.0", "423130.0", "167535.0", "134678.0", "106770.0", "295861.0", "101878.0", "1763.0", "130271.0", "537887.0", "10806.0", "2142.0"];
  // const countriesCode = ["AFG", "ALB", "DZA", "AND", "AGO", "ATG", "ARG", "ARM", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BTN", "BOL", "BIH", "BWA", "BRA", "BRN", "BGR", "BFA", "MMR", "BDI", "CPV", "KHM", "CMR", "CAN", "CAF", "TCD", "CHL", "CHN", "COL", "COM", "COG", "COD", "CRI", "CIV", "HRV", "CUB", "CYP", "CZE", "DNK", "", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "SWZ", "ETH", "FJI", "FIN", "FRA", "GAB", "GMB", "GEO", "DEU", "GHA", "GRC", "GRD", "GTM", "GIN", "GNB", "GUY", "HTI", "VAT", "HND", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "ISR", "ITA", "JAM", "JPN", "JOR", "KAZ", "KEN", "KOR", "XKS", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR"];


  axios({
    url: `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv`,
  })
    .then(data => {
      // console.log(data.data);
      const rows = data.data.split('\n');

      //  console.log(rows[0].split(',')); // Table label

      for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        // const countryName = row[0];
        // console.log(countryName);
        // const confirmedCases = row[4];
        // console.log(confirmedCases);
        // const countryCode = row[13];
        // if (countryName !== "") {
          // countries.push(countryName);
          // console.log(countries);
          // confirmed.push(confirmedCases);
          // console.log(confirmed);
          // countriesCode.push(countryCode);
          // console.log(countriesCode);
        // }
        //   // console.log(countries);
      }
    });



  return (
      <div className="k-card">
        <Chart className="chart">
          <ChartTitle text="Countries" />
          <ChartCategoryAxis>
            <ChartCategoryAxisItem className='rotate' categories={countries} title={{ text: 'Countries' }} />
          </ChartCategoryAxis>
          <ChartSeries>
            <ChartSeriesItem type="line" data={confirmed} />
          </ChartSeries>
        </Chart>
      </div>
      
  );
}
export default ChartContainer;

