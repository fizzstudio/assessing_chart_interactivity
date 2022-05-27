const circleProps = {
	accessibility: {
		"includeDataKeyNames": true,
		"contextExplanation": "This example of a circle packing was selected through example list on the sidebar.",
		"purpose": "Circle packing chart showing value within the hierarchy of groups.",
		"structureNotes": "A hierarchy of circles for which size is driven by the size of the inner most children being displayed.",
		"elementsAreInterface": true,
		"disableValidation": true,
		"hideTextures": true
	},
	mainTitle: "Value across group hierarchy",
	subTitle: "Summary of value across group hierarchy, note that sizing of nodes is specifically driven by the inner most children.",
	data: [
		{
			"Type": "Parent Group",
			"Country": "",
			"value": 10
		},
		{
			"Type": "Group 1",
			"Country": "Parent Group",
			"value": 73
		},
		{
			"Type": "Group 2",
			"Country": "Parent Group",
			"value": 15
		},
		{
			"Type": "Group 3",
			"Country": "Parent Group",
			"value": 4
		},
		{
			"Type": "A",
			"Country": "Group 1",
			"value": 64
		},
		{
			"Type": "B",
			"Country": "Group 1",
			"value": 35
		},
		{
			"Type": "C",
			"Country": "Group 2",
			"value": 23
		},
		{
			"Type": "D",
			"Country": "Group 3",
			"value": 16
		},
		{
			"Type": "E",
			"Country": "Group 1",
			"value": 25
		},
		{
			"Type": "F",
			"Country": "Group 2",
			"value": 23
		},
		{
			"Type": "G",
			"Country": "Group 2",
			"value": 6
		},
		{
			"Type": "H",
			"Country": "Group 3",
			"value": 36
		},
		{
			"Type": "I",
			"Country": "Group 2",
			"value": 10
		}
	],
	dataLabel: {
		"visible": true,
		"placement": "center",
		"labelAccessor": "Type"
	},
	cursor: "pointer",
	nodeAccessor: "Type",
	parentAccessor: "Country",
	sizeAccessor: "value",
	tooltipLabel: {
		"labelAccessor": [
			"Type",
			"Country"
		],
		"labelTitle": [
			"Type",
			"Country"
		],
		"format": [
			"",
			""
		]
	},
	clickStyle: {
		"color": "categorical_blue",
		"stroke": "base_grey",
		"strokeWidth": 0.5,
		"dashed": "3 1"
	},
	hoverStyle: {
		"color": "sec_yellow",
		"strokeWidth": 1
	},
	interactionKeys: [
		"Type"
	],
	uniqueID: "circle-packing-Interaction"
}