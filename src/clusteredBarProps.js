const clusteredBarProps = {
	accessibility: {
		"contextExplanation": "This example of a clustered bar chart was selected through example list on the sidebar.",
		"purpose": "Clustered bar chart showing group amount within years 2016 to 2020.",
		"structureNotes": "Within each year, a different color and pattern is used to represent each group.",
		"elementsAreInterface": false,
		"disableValidation": true
	},
	// annotations: [
	// 	{
	// 	  "note": {
	// 		"label": "Group C saw strong gains until Group B was improved.",
	// 		"bgPadding": {
	// 		  "top": 0,
	// 		  "bottom": 0,
	// 		  "left": 5,
	// 		  "right": 5
	// 		},
	// 		"title": "Temporary Growth",
	// 		"lineType": "none",
	// 		"align": "middle",
	// 		"wrap": 225
	// 	  },
	// 	  "accessibilityDescription": "This annotation points to Group C's strong growth starting in 2016 but ending in 2018.",
	// 	  "y": [
	// 		22
	// 	  ],
	// 	  "x": "18%",
	// 	  "dy": [
	// 		56.5
	// 	  ],
	// 	  "dx": [
	// 		"2017",
	// 		"2016"
	// 	  ],
	// 	  "className": "clustered-chart-annotation",
	// 	  "type": "annotationCalloutElbow"
	// 	},
	// 	{
	// 	  "note": {},
	// 	  "y": [
	// 		45
	// 	  ],
	// 	  "x": "33.6%",
	// 	  "dy": [
	// 		56.5
	// 	  ],
	// 	  "dx": [
	// 		"2017",
	// 		"2016"
	// 	  ],
	// 	  "className": "clustered-chart-annotation",
	// 	  "type": "annotationCalloutElbow"
	// 	},
	// 	{
	// 	  "note": {},
	// 	  "y": [
	// 		78
	// 	  ],
	// 	  "x": "52.8%",
	// 	  "dy": [
	// 		56.5
	// 	  ],
	// 	  "dx": [
	// 		"2017",
	// 		"2016"
	// 	  ],
	// 	  "className": "clustered-chart-annotation",
	// 	  "type": "annotationCalloutElbow"
	// 	}
	//   ],
	xAxis: {
		"visible": true,
		"gridVisible": false,
		"label": "Year",
		"format": ""
	},
	yAxis: {
		"visible": true,
		"gridVisible": true,
		"label": "Amount",
		"format": "0,0",
		"tickInterval": 2
	},
	mainTitle: "Yearly group amount",
	subTitle: "Comparison of group amount within each year from 2016 to 2020.",
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
	dataLabel: {
		"visible": true,
		"placement": "auto",
		// "collisionPlacement": "bottom",
		"labelAccessor": "value",
		"format": "0,0"
	},
	margin: {
		"top": 4,
		"bottom": 4,
		"right": 8,
		"left": 8
	},
	padding: {
		"top": 30,
		"bottom": 50,
		"right": 10,
		"left": 60
	},
	ordinalAccessor: "item",
	valueAccessor: "value",
	groupAccessor: "year",
	legend: {
		"visible": true,
		"labels": [
			"Group A",
			"Group B",
			"Group C"
		]
	},
	uniqueID: "clustered-bar-chart-Annotation"
}