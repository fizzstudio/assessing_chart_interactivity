const barProps = {
	accessibility: {
		"includeDataKeyNames": true,
		"contextExplanation": "This example of a bar chart was selected through example list on the sidebar.",
		"structureNotes": "The chart is laid out horizontally and each bar is colored according to the geographic region the country belongs to. Hovering, focusing, clicking, or selecting a bar will visually emphasize the other bars in that region.",
		"purpose": "This chart presents the amount by country and groups countries within the same region.",
		"elementsAreInterface": true,
		"disableValidation": true
	},
	xAxis: {
		"visible": false,
		"gridVisible": false,
		"label": "Amount",
		"format": "0,0[a]"
	},
	yAxis: {
		"visible": true,
		"gridVisible": false,
		"label": "",
		"format": ""
	},
	mainTitle: "Amount by country",
	subTitle: "Amount occured by top countries, grouped by region.",
	data: [
		{
			"country": "China",
			"value": 27,
			"region": "Region 1"
		},
		{
			"country": "Japan",
			"value": 10,
			"region": "Region 1"
		},
		{
			"country": "Group 2",
			"value": 114,
			"region": "Region 2"
		},
		{
			"country": "Group 3",
			"value": 24,
			"region": "Region 2"
		},
		{
			"country": "India",
			"value": 21,
			"region": "Region 1"
		},
		{
			"country": "Indonesia",
			"value": 111,
			"region": "Region 1"
		},
		{
			"country": "Germany",
			"value": 38,
			"region": "Region 4"
		},
		{
			"country": "Turkey",
			"value": 28,
			"region": "Region 4"
		},
		{
			"country": "Italy",
			"value": 16,
			"region": "Region 4"
		}
	],
	ordinalAccessor: "country",
	valueAccessor: "value",
	groupAccessor: "region",
	tooltipLabel: {
		"labelAccessor": [
			"region",
			"country",
			"value"
		],
		"labelTitle": [
			"Region",
			"Country",
			"Amount"
		],
		"format": [
			"",
			"",
			"$0,0[a]"
		]
	},
	padding: {
		"top": 20,
		"bottom": 60,
		"right": 100,
		"left": 80
	},
	layout: "horizontal",
	sortOrder: "desc",
	legend: {
		"visible": true,
		"interactive": true
	},
	colorPalette: "categorical",
	referenceStyle: {
		"color": "categorical_blue",
		"strokeWidth": "1px",
		"opacity": 0.8,
		"dashed": "3 2"
	},
	dataLabel: {
		"visible": true,
		"placement": "right",
		"labelAccessor": "value",
		"format": "$0,0[a]"
	},
	referenceLines: [
		{
			"label": "Average",
			"labelPlacementHorizontal": "left",
			"labelPlacementVertical": "top",
			"value": 57
		}
	],
	clickStyle: {
		"color": "",
		"stroke": "categorical_blue",
		"strokeWidth": 2,
		"dashed": "4 2"
	},
	hoverStyle: {
		"color": "",
		"strokeWidth": 2
	},
	cursor: "pointer",
	interactionKeys: [
		"region"
	],
	uniqueID: "bar-chart-Category"
}