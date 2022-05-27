const stackedBarProps = {
	accessibility: {
		"contextExplanation": "This example of a stacked bar chart was selected through example list on the sidebar.",
		"purpose": "Stacked bar chart showing group count by year.",
		"structureNotes": "A different color and pattern is used to represent each group. Each stack of bars shows the count for each group in that year.",
		"elementsAreInterface": true,
		"disableValidation": true
	},
	xAxis: {
		"visible": true,
		"gridVisible": false,
		"label": "Year",
		"format": " "
	},
	yAxis: {
		"visible": false,
		"gridVisible": false,
		"label": "Count",
		"format": "0,0"
	},
	mainTitle: "Group count by year",
	subTitle: "Trend of count for groups from 2016 to 2020.",
	data: [
		{
			"year": "2016",
			"item": "A",
			"value": -30
		},
		{
			"year": "2017",
			"item": "A",
			"value": 15
		},
		{
			"year": "2018",
			"item": "A",
			"value": 4
		},
		{
			"year": "2019",
			"item": "A",
			"value": 73
		},
		{
			"year": "2020",
			"item": "A",
			"value": 64
		},
		{
			"year": "2016",
			"item": "B",
			"value": -5
		},
		{
			"year": "2017",
			"item": "B",
			"value": 23
		},
		{
			"year": "2018",
			"item": "B",
			"value": 6
		},
		{
			"year": "2019",
			"item": "B",
			"value": 21
		},
		{
			"year": "2020",
			"item": "B",
			"value": 57
		},
		{
			"year": "2016",
			"item": "C",
			"value": 22
		},
		{
			"year": "2017",
			"item": "C",
			"value": 45
		},
		{
			"year": "2018",
			"item": "C",
			"value": 78
		},
		{
			"year": "2019",
			"item": "C",
			"value": 51
		},
		{
			"year": "2020",
			"item": "C",
			"value": 8
		}
	],
	tooltipLabel: {
		"labelAccessor": [
			"year",
			"item",
			"value"
		],
		"labelTitle": [
			"",
			"Group",
			"Count"
		]
	},
	margin: {
		"top": 4,
		"bottom": 4,
		"right": 8,
		"left": 8
	},
	padding: {
		"top": 20,
		"bottom": 50,
		"right": 50,
		"left": 30
	},
	ordinalAccessor: "item",
	valueAccessor: "value",
	groupAccessor: "year",
	legend: {
		"visible": true,
		"interactive": true,
		"labels": [
			"Group A",
			"Group B",
			"Group C"
		]
	},
	colorPalette: "diverging_GtoP",
	cursor: "pointer",
	minValueOverride: "-40",
	interactionKeys: [
		"item"
	],
	uniqueID: "stacked-bar-chart-Interaction"
}