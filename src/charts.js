props = {
  'line-chart': {
    valueAccessor: 'value',
    ordinalAccessor: 'date',
    seriesAccessor: 'category',
    uniqueID: 'sparkline',
    data: [
      {
        value: 12,
        date: 'Jan',
        category: 'Product'
      },
      {
        value: 13,
        date: 'Feb',
        category: 'Product'
      },
      {
        value: 15,
        date: 'Mar',
        category: 'Product'
      },
      {
        value: 14,
        date: 'Apr',
        category: 'Product'
      },
      {
        value: 14,
        date: 'May',
        category: 'Product'
      },
      {
        value: 18,
        date: 'Jun',
        category: 'Product'
      },
      {
        value: 17,
        date: 'Jul',
        category: 'Product'
      },
      {
        value: 19,
        date: 'Aug',
        category: 'Product'
      },
      {
        value: 24,
        date: 'Sep',
        category: 'Product'
      },
      {
        value: 23,
        date: 'Oct',
        category: 'Product'
      },
      {
        value: 29,
        date: 'Nov',
        category: 'Product'
      },
      {
        value: 39,
        date: 'Dec',
        category: 'Product'
      }
    ]
  }
};

const chartConstructor = (chartTag, id) => {
  let chart = document.getElementById(id);
  if (!chart) {
    chart = document.createElement(chartTag);
  }
  Object.keys(props[chartTag]).forEach(prop => {
    chart[prop] = props[chartTag][prop];
  });
  document.body.appendChild(chart);
  return chart;
};
const line = chartConstructor('line-chart', props['line-chart'].uniqueID);

console.log('hi', line);
