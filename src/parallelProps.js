const parallelProps = {
	accessibility: {
		"contextExplanation": "This example of a parallel plot was selected through example list on the sidebar.",
		"purpose": "Demonstration of a parallel plot built with VCC and minimal properties provided.",
		"statisticalNotes": "This chart is using dummy data.",
		disableValidation: true
	},
	data: [
		{
			"group": "Metric 1",
			"filter": "all",
			"amount": 0.69
		},
		{
			"group": "Metric 2",
			"filter": "all",
			"amount": 0.28
		},
		{
			"group": "Metric 3",
			"filter": "all",
			"amount": 0.31
		},
		{
			"group": "Metric 4",
			"filter": "all",
			"amount": 0.51
		},
		{
			"group": "Metric 1",
			"filter": "group 1",
			"amount": 0.29
		},
		{
			"group": "Metric 2",
			"filter": "group 1",
			"amount": 0.18
		},
		{
			"group": "Metric 3",
			"filter": "group 1",
			"amount": 0.71
		},
		{
			"group": "Metric 4",
			"filter": "group 1",
			"amount": 0.31
		},
		{
			"group": "Metric 1",
			"filter": "group 2",
			"amount": 0.82
		},
		{
			"group": "Metric 2",
			"filter": "group 2",
			"amount": 0.9
		},
		{
			"group": "Metric 3",
			"filter": "group 2",
			"amount": 0.26
		},
		{
			"group": "Metric 4",
			"filter": "group 2",
			"amount": 0.65
		}
	],
	ordinalAccessor: "group",
	valueAccessor: "amount",
	seriesAccessor: "filter",
	uniqueID: "parallel-plot-Default"
}