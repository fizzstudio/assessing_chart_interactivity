const charts = {
  1: 'stacked-bar-chart',
  2: 'line-chart',
  3: 'bar-chart',
  4: 'heat-map',
  5: 'sparkline'
};

const years = {
  2016: [
    { Product: 'Chairs', Region: 'West', Value: 10 },
    { Product: 'Tables', Region: 'Northeast', Value: 15 },
    { Product: 'Notepads', Region: 'South', Value: 12 },
    { Product: 'Pens', Region: 'Northeast', Value: 11 },
    { Product: 'Paper', Region: 'South', Value: 18},
    { Product: 'Envelopes', Region: 'West', Value: 9 },
    { Product: 'Labels', Region: 'Non-contiguous', Value: 7 },
    { Product: 'Binders', Region: 'Midwest', Value: 9 },
    { Product: 'Art', Region: 'Northeast', Value: 19 },
    { Product: 'Fasteners', Region: 'West', Value: 11 },
    { Product: 'Accessories', Region: 'Midwest', Value: 17 }
  ],
  2020: [
    { Product: 'Chairs', Region: 'West', Value: 8 },
    { Product: 'Notepads', Region: 'South', Value: 16 },
    { Product: 'Pens', Region: 'Northeast', Value: 15 },
    { Product: 'Paper', Region: 'South', Value: 28 },
    { Product: 'Envelopes', Region: 'West', Value: 7 },
    { Product: 'Labels', Region: 'Non-contiguous', Value: 8 },
    { Product: 'Binders', Region: 'Midwest', Value: 14 },
    { Product: 'Art', Region: 'Northeast', Value: 15 },
    { Product: 'Fasteners', Region: 'West', Value: 22 },
    { Product: 'Accessories', Region: 'Midwest', Value: 18 },
    { Product: 'Pencils', Region: 'West', Value: 20 },
    { Product: 'Erasers', Region: 'Northeast', Value: 26 },
    { Product: 'Cleaners', Region: 'South', Value: 22 },
    { Product: 'Sticky Notes', Region: 'Northeast', Value: 14 },
    { Product: 'Paperclips', Region: 'Non-contiguous', Value: 13 }
  ]
};

const sparklineFix = (d) => {
    document.getElementById('sparkline').querySelectorAll('circle').forEach(circle => {
        circle.removeAttribute('tabindex')
        circle.setAttribute('aria-hidden','true')
    })
}
const heatClick = d => {
  d.target.clickHighlight =
    d.target.clickHighlight && d.target.clickHighlight[0] === d.detail.data ? [] : [d.detail.data];
  document.getElementById('aria-live').innerHTML = !d.target.clickHighlight.length
    ? 'Selected data has been removed.'
    : d.detail.data.Value > 0.95
    ? 'Success: Highest approval correlation has been selected.'
    : `${d.detail.data.Note} has been selected.`;
};
const heatHover = d => {
  d.target.hoverHighlight = d.detail.data;
};
const heatOut = d => {
  d.target.hoverHighlight = '';
};

const props = {
  'bar-chart': {
    mainTitle: `Products in all Regions, 2020`,
    subTitle:
      'This chart shows all products sales across every region, sorted from worst-performing to best. Values are in millions of dollars.',
    data: years['2020'],
    colorPalette: 'categorical',
    height: 450,
    padding: { top: 100, bottom: 50, right: 20, left: 20 },
    ordinalAccessor: 'Product',
    valueAccessor: 'Value',
    groupAccessor: 'Region',
    uniqueID: 'bar-chart',
    yAxis: { visible: false, gridVisible: false },
    xAxis: { label: '', visible: true },
    sortOrder: 'asc',
    accessibility: {
      elementDescriptionAccessor: 'Note',
      executiveSummary: 'Product Paper is the Highest Value, Envelopes is the Lowest.',
      statisticalNotes: 'Chart is sorted in descending order.',
      disableValidation: true
    }
  },
  'line-chart': {
    mainTitle: 'Sales in Related Peer Products "Chairs" and "Tables"',
    subTitle: `This is a chart demonstrating the sales patterns of two different products (which have been anonymized) over the year 2021.`,
    data: [
      { Date: 'Jan', Line: 'Chairs', Value: 10, Note: 'Lowest Value' },
      { Date: 'Feb', Line: 'Chairs', Value: 15 },
      { Date: 'Mar', Line: 'Chairs', Value: 12 },
      { Date: 'Apr', Line: 'Chairs', Value: 16 },
      { Date: 'May', Line: 'Chairs', Value: 18 },
      { Date: 'Jun', Line: 'Chairs', Value: 23 },
      { Date: 'Jul', Line: 'Chairs', Value: 34 },
      { Date: 'Aug', Line: 'Chairs', Value: 51 },
      { Date: 'Sep', Line: 'Chairs', Value: 86 },
      { Date: 'Oct', Line: 'Chairs', Value: 143 },
      { Date: 'Nov', Line: 'Chairs', Value: 228 },
      { Date: 'Dec', Line: 'Chairs', Value: 386, Note: 'Highest Value' },
      { Date: 'Jan', Line: 'Tables', Value: 86 },
      { Date: 'Feb', Line: 'Tables', Value: 85 },
      { Date: 'Mar', Line: 'Tables', Value: 89, Note: 'Highest Value' },
      { Date: 'Apr', Line: 'Tables', Value: 83 },
      { Date: 'May', Line: 'Tables', Value: 78, Note: 'Lowest Value' },
      { Date: 'Jun', Line: 'Tables', Value: 82 },
      { Date: 'Jul', Line: 'Tables', Value: 84 },
      { Date: 'Aug', Line: 'Tables', Value: 88 },
      { Date: 'Sep', Line: 'Tables', Value: 85 },
      { Date: 'Oct', Line: 'Tables', Value: 85 },
      { Date: 'Nov', Line: 'Tables', Value: 83 },
      { Date: 'Dec', Line: 'Tables', Value: 86 }
    ],
    ordinalAccessor: 'Date',
    valueAccessor: 'Value',
    seriesAccessor: 'Line',
    colorPalette: 'categorical',
    height: 430,
    width: 800,
    padding: { top: 20, bottom: 40, right: 40, left: 60 },
    uniqueID: 'line-chart',
    yAxis: { label: '', visible: true, gridVisible: true },
    xAxis: { label: '', visible: true },
    showBaselineX: false,
    dataLabel: { visible: true, placement: 'auto' },
    accessibility: {
      elementDescriptionAccessor: 'Note',
      disableValidation: true
    }
  },
  'stacked-bar-chart': {
    mainTitle: 'All Products Trending Down in 2022',
    subTitle:
      "COVID-19 affected numerous parts of our product chain. Business and Platinum sign-ups are dropping, despite a hopeful start of the year. May's promotional campaign saw a jump in Personal sign-ups.",
    data: [
      { Month: 'Jan', Product: 'Personal', 'Sign-ups': 16 },
      { Month: 'Jan', Product: 'Business', 'Sign-ups': 16 },
      { Month: 'Jan', Product: 'Platinum', 'Sign-ups': 15 },
      { Month: 'Feb', Product: 'Personal', 'Sign-ups': 15 },
      { Month: 'Feb', Product: 'Business', 'Sign-ups': 19 },
      { Month: 'Feb', Product: 'Platinum', 'Sign-ups': 16 },
      { Month: 'Mar', Product: 'Personal', 'Sign-ups': 16 },
      { Month: 'Mar', Product: 'Business', 'Sign-ups': 15 },
      { Month: 'Mar', Product: 'Platinum', 'Sign-ups': 13 },
      { Month: 'Apr', Product: 'Personal', 'Sign-ups': 15 },
      { Month: 'Apr', Product: 'Business', 'Sign-ups': 13 },
      { Month: 'Apr', Product: 'Platinum', 'Sign-ups': 10 },
      { Month: 'May', Product: 'Personal', 'Sign-ups': 20, Note: 'Highest Value' },
      { Month: 'May', Product: 'Business', 'Sign-ups': 8 },
      { Month: 'May', Product: 'Platinum', 'Sign-ups': 9 },
      { Month: 'Jun', Product: 'Personal', 'Sign-ups': 15 },
      { Month: 'Jun', Product: 'Business', 'Sign-ups': 7, Note: 'Lowest Value' },
      { Month: 'Jun', Product: 'Platinum', 'Sign-ups': 9 }
    ],
    height: 450,
    width: 678,
    padding: { top: 100, bottom: 50, right: 20, left: 20 },
    ordinalAccessor: 'Product',
    valueAccessor: 'Sign-ups',
    groupAccessor: 'Month',
    colorPalette: 'categorical',
    uniqueID: 'stacked-bar-chart',
    yAxis: { visible: false, gridVisible: false },
    xAxis: { label: '', visible: true },
    accessibility: {
      elementDescriptionAccessor: 'Note',
      disableValidation: true
    }
  },
  'heat-map': {
    mainTitle: 'Comparing how user groups correlate to approval rates of product types',
    subTitle:
      'A high correlation value (close to 1) indicates that these users have a high approval rate of that product. A low correlation value (close to -1) indicates a negative approval rate of those products.',
    data: [
      { Product: 'Chairs', 'User group': 'Northwest', Value: 0.74, Note: 'High approval correlation' },
      { Product: 'Tables', 'User group': 'Northwest', Value: 0.43, Note: 'Medium approval correlation' },
      { Product: 'Notepads', 'User group': 'Northwest', Value: 0.33, Note: 'Medium approval correlation' },
      { Product: 'Pens', 'User group': 'Northwest', Value: -0.55, Note: 'Low approval correlation' },
      { Product: 'Chairs', 'User group': 'Midwest', Value: 0.81, Note: 'High approval correlation' },
      { Product: 'Tables', 'User group': 'Midwest', Value: 0.09, Note: 'Low approval correlation' },
      { Product: 'Notepads', 'User group': 'Midwest', Value: -0.25, Note: 'Low approval correlation' },
      { Product: 'Pens', 'User group': 'Midwest', Value: -0.45, Note: 'Low approval correlation' },
      { Product: 'Chairs', 'User group': 'Northeast', Value: 0.23, Note: 'Medium approval correlation' },
      { Product: 'Tables', 'User group': 'Northeast', Value: -0.25, Note: 'Low approval correlation' },
      { Product: 'Notepads', 'User group': 'Northeast', Value: 0.97, Note: 'High approval correlation' },
      { Product: 'Pens', 'User group': 'Northeast', Value: -0.76, Note: 'Very low approval correlation' },
      { Product: 'Chairs', 'User group': 'South', Value: -0.9, Note: 'Lowest approval correlation' },
      { Product: 'Tables', 'User group': 'South', Value: -0.52, Note: 'Low approval correlation' },
      { Product: 'Notepads', 'User group': 'South', Value: -0.69, Note: 'Very low approval correlation' },
      { Product: 'Pens', 'User group': 'South', Value: 0.02, Note: 'Low approval correlation' }
    ],
    height: 450,
    width: 500,
    padding: { top: 50, bottom: 50, right: 50, left: 100 },
    xAccessor: 'Product',
    yAccessor: 'User group',
    valueAccessor: 'Value',
    colorPalette: 'sequential_grey', // sequential_grey
    uniqueID: 'heat-map',
    dataLabel: { visible: false },
    legend: { visible: true, type: 'default' },
    yAxis: { visible: true, label: '' },
    xAxis: { label: '', visible: true },
    events: {
      clickEvent: heatClick,
      hoverEvent: heatHover,
      mouseOutEvent: heatOut
    },
    tooltipLabel: {
      labelAccessor: ['Product', 'User group', 'Value'],
      labelTitle: ['Product', 'User group', 'Value'],
      format: ''
    },
    clickStyle: { strokeWidth: '3px' },
    accessibility: {
      executiveSummary: 'Product Notepads has the highest approval rate correlation with the user group Northeast.',
      disableValidation: true,
      elementsAreInterface: true
    }
  },
  sparkline: {
    chartType: 'line-chart',
    mainTitle: '',
    subTitle: '',
    valueAccessor: 'value',
    ordinalAccessor: 'date',
    seriesAccessor: 'category',
    uniqueID: 'sparkline',
    highestHeadingLevel: 'span',
    width: 36,
    height: 18,
    padding: { top: 0, bottom: 0, left: 0, right: 0 },
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
    dataLabel: { visible: false },
    xAxis: { visible: false },
    yAxis: { visible: false },
    showDots: false,
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
    ],
    suppressEvents: true,
    accessibility: {
      title: 'line chart trending up',
      keyboardNavConfig: { disabled: true },
      hideDataTableButton: true,
      elementsAreInterface: false,
      disableValidation: true,
      onChangeFunc: sparklineFix
    }
  }
};

const chartConstructor = (chartTag, id) => {
  let chart = document.getElementById(id);
  if (!chart) {
    chart = document.createElement(props[chartTag].chartType || chartTag);
  }
  Object.keys(props[chartTag]).forEach(prop => {
    chart[prop] = props[chartTag][prop];
  });
  if (props[chartTag].events) {
    Object.keys(props[chartTag].events).forEach(key => {
      chart.addEventListener(key, props[chartTag].events[key]);
    });
  }
  return chart;
};

const swapCharts = e => {
  const chartNumber = +e.target.id.substr(1);
  const chartType = charts[chartNumber];
  const chart = chartConstructor(chartType, props[chartType].uniqueID);
  document.querySelectorAll('.insert').forEach(i => {
    if (i.children[0]) {
      i.children[0].remove();
    }
  });
  document.querySelectorAll('.environment').forEach(i => {
    i.classList.add('hidden');
  });
  document.getElementById(`chart${chartNumber}`).classList.remove('hidden');
  document.getElementById(`chart${chartNumber}`).querySelector('.insert').appendChild(chart);
};

const changeYears = e => {
  document.getElementById('bar-chart').mainTitle = `Products in all Regions, ${e.target.value}`;
  document.getElementById('bar-chart').data = years[e.target.value];
};

const setMenus = () => {
  const inputs = document.querySelectorAll('.input-selector');
  inputs.forEach(i => {
    i.addEventListener('change', swapCharts);
  });

  const years = document.querySelectorAll('.year-selector');
  years.forEach(i => {
    i.addEventListener('change', changeYears);
  });
  // swapCharts({target:{id:'c1'}})
};

window.addEventListener('load', setMenus, false);
