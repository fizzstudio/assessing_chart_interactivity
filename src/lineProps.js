const lineProps = {
	accessibility: {
		"includeDataKeyNames": true,
		"contextExplanation": "This example of a line chart was selected through example list on the sidebar.",
		"purpose": "Line chart showing the trend of amount by month over the last 12 months.",
		"structureNotes": "A different color is used to represent each line series. Lines break in cases where a month of data is missing.",
		"disableValidation": true
	},
	xAxis: {
		"visible": true,
		"gridVisible": false,
		"label": "Month",
		"unit": "month",
		"format": "%b"
	},
	yAxis: {
		"visible": true,
		"gridVisible": true,
		"label": "Amount",
		"format": "0,0[.][0][a]",
		"tickInterval": 2
	},
	mainTitle: "Monthly count trend by group",
	subTitle: "Trend of monthly count by group over the last 12 months.",
	padding: {
		"bottom": 50,
		"left": 50,
		"right": 90,
		"top": 20
	},
	data: [
		{
			"date": "2016-01-01",
			"category": "Group A",
			"value": 7670994739
		},
		{
			"date": "2016-02-01",
			"category": "Group A",
			"value": 7628909842
		},
		{
			"date": "2016-03-01",
			"category": "Group A",
			"value": 8358837379
		},
		{
			"date": "2016-04-01",
			"category": "Group A",
			"value": 8334842966
		},
		{
			"date": "2016-05-01",
			"category": "Group A",
			"value": 8588600035
		},
		{
			"date": "2016-06-01",
			"category": "Group A",
			"value": 8484192554
		},
		{
			"date": "2016-07-01",
			"category": "Group A",
			"value": 8778636197
		},
		{
			"date": "2016-08-01",
			"category": "Group A",
			"value": 8811163096
		},
		{
			"date": "2016-09-01",
			"category": "Group A",
			"value": 8462148898
		},
		{
			"date": "2016-10-01",
			"category": "Group A",
			"value": 9051933407
		},
		{
			"date": "2016-11-01",
			"category": "Group A",
			"value": 8872849978
		},
		{
			"date": "2016-12-01",
			"category": "Group A",
			"value": 9709829820
		},
		{
			"date": "2016-01-01",
			"category": "Group B",
			"value": 6570994739
		},
		{
			"date": "2016-02-01",
			"category": "Group B",
			"value": 4628909842
		},
		{
			"date": "2016-03-01",
			"category": "Group B",
			"value": null
		},
		{
			"date": "2016-04-01",
			"category": "Group B",
			"value": null
		},
		{
			"date": "2016-05-01",
			"category": "Group B",
			"value": 4388600035
		},
		{
			"date": "2016-06-01",
			"category": "Group B",
			"value": 3484192554
		},
		{
			"date": "2016-07-01",
			"category": "Group B",
			"value": 3578636197
		},
		{
			"date": "2016-08-01",
			"category": "Group B",
			"value": null
		},
		{
			"date": "2016-09-01",
			"category": "Group B",
			"value": 5262148898
		},
		{
			"date": "2016-10-01",
			"category": "Group B",
			"value": 4651933407
		},
		{
			"date": "2016-11-01",
			"category": "Group B",
			"value": 6772849978
		},
		{
			"date": "2016-12-01",
			"category": "Group B",
			"value": 5609829820
		}
	],
	ordinalAccessor: "date",
	valueAccessor: "value",
	seriesAccessor: "category",
	dataLabel: {
		"visible": true,
		"placement": "top",
		"labelAccessor": "value",
		"format": "0,0[.][0][a]"
	},
	seriesLabel: {
		"visible": true,
		"placement": "right"
	},
	uniqueID: "line-chart-BreakLines"
}