import React, { useState } from 'react'

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

  const [categories, setCategories] = useState([]);
  const [confirmed, setConfirmed] = useState([]);

  axios({
    url: `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv`,
  })
    .then(data => {
      console.log(data);
      const rows = data.data.split('\n');
      const countries = [];
      const confirmed = [];
      // let allCountriesNum = 0;
     // console.log(rows[0].split(',')); // Table label

      for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        const countryName = row[0];
        const confirmedCases = row[4];
        // const countryCode = row[6];
        if (countryName !== "") {
          countries.push(countryName);
          confirmed.push(confirmedCases);
        }
        // console.log(countries);
      }
      // console.log(countries);
      setCategories(countries);
      setConfirmed(confirmed);
      // console.log(categories);
      console.log(confirmed);

      // console.log(countries.name);
    });

  return (
    <Chart>
      <ChartTitle text="Countries" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={categories} title={{ text: 'Countries' }} />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem type="line" data={confirmed} />
      </ChartSeries>
    </Chart>
  );
}
export default ChartContainer;