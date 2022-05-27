const dumbbellProps = {
	accessibility: {
		"includeDataKeyNames": true,
		"contextExplanation": "This example of a dumbbell plot was selected through example list on the sidebar.",
		"purpose": "Dumbbell plot highlighting the difference between group a and b over time.",
		"structureNotes": "Each month contains an arrow encoding the value of the difference between group a and b. The arrow is pointing towards group a, thus up when a is higher than b.",
		"elementsAreInterface": false,
		"disableValidation": true
	},
	yAxis: {
		"visible": true,
		"gridVisible": false,
		"label": "Value",
		"format": "0.0%",
		"tickInterval": 2
	},
	xAxis: {
		"visible": true,
		"gridVisible": false,
		"label": "",
		"unit": "month",
		"format": "%b",
		"tickInterval": 1
	},
	mainTitle: "Difference between A and B over time",
	subTitle: "Difference in amount between group A and B over a 12 month period.",
	padding: {
		"bottom": 50,
		"left": 50,
		"right": 75,
		"top": 20
	},
	data: [
		{
			"date": "2016-01-01",
			"category": "Group A",
			"value": 0.024570994739
		},
		{
			"date": "2016-02-01",
			"category": "Group A",
			"value": 0.022628909842
		},
		{
			"date": "2016-03-01",
			"category": "Group A",
			"value": 0.020358837379
		},
		{
			"date": "2016-04-01",
			"category": "Group A",
			"value": 0.02134842966
		},
		{
			"date": "2016-05-01",
			"category": "Group A",
			"value": 0.012388600035
		},
		{
			"date": "2016-06-01",
			"category": "Group A",
			"value": 0.01184192554
		},
		{
			"date": "2016-07-01",
			"category": "Group A",
			"value": 0.001578636197
		},
		{
			"date": "2016-08-01",
			"category": "Group A",
			"value": -0.008311163096
		},
		{
			"date": "2016-09-01",
			"category": "Group A",
			"value": -0.003262148898
		},
		{
			"date": "2016-10-01",
			"category": "Group A",
			"value": -0.004651933407
		},
		{
			"date": "2016-11-01",
			"category": "Group A",
			"value": 0.007772849978
		},
		{
			"date": "2016-12-01",
			"category": "Group A",
			"value": 0.01430982982
		},
		{
			"date": "2016-01-01",
			"category": "Group B",
			"value": 0.016370994739
		},
		{
			"date": "2016-02-01",
			"category": "Group B",
			"value": 0.017628909842
		},
		{
			"date": "2016-03-01",
			"category": "Group B",
			"value": 0.018358837379
		},
		{
			"date": "2016-04-01",
			"category": "Group B",
			"value": 0.018334842966
		},
		{
			"date": "2016-05-01",
			"category": "Group B",
			"value": 0.015588600035
		},
		{
			"date": "2016-06-01",
			"category": "Group B",
			"value": 0.014484192554
		},
		{
			"date": "2016-07-01",
			"category": "Group B",
			"value": 0.010778636197
		},
		{
			"date": "2016-08-01",
			"category": "Group B",
			"value": 0.004811163096
		},
		{
			"date": "2016-09-01",
			"category": "Group B",
			"value": 0.010462148898
		},
		{
			"date": "2016-10-01",
			"category": "Group B",
			"value": 0.012051933407
		},
		{
			"date": "2016-11-01",
			"category": "Group B",
			"value": 0.016872849978
		},
		{
			"date": "2016-12-01",
			"category": "Group B",
			"value": 0.01970982982
		}
	],
	ordinalAccessor: "date",
	valueAccessor: "value",
	seriesAccessor: "category",
	dataLabel: {
		"visible": false,
		"placement": "auto",
		"labelAccessor": "value",
		"format": "0.0%"
	},
	focusMarker: {
		"key": "Group A",
		"sizeFromBar": 4
	},
	marker: {
		"visible": true,
		"type": "arrow",
		"sizeFromBar": 1
	},
	barStyle: {
		"width": 3,
		"opacity": 1,
		"colorRule": "default"
	},
	seriesLabel: {
		"visible": true,
		"placement": "auto",
		"label": [
			"A",
			"B"
		]
	},
	differenceLabel: {
		"visible": true,
		"placement": "auto",
		"calculation": "difference",
		"format": "0.0%"
	},
	colors: [
		"#164d79",
		"#7c99b1",
		"#979797"
	],
	uniqueID: "dumbbell-plot-Difference"
}