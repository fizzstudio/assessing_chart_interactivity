const styleInnerHTML = `
.vcl-accessibility-instructions {
    position: relative !important;
}
.screen-reader-info {
    position: relative !important;
    left: 0px !important;
    top: 0px !important;
    width: auto !important;
    height: auto !important;
    overflow: auto !important;
}
`

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
    ? 'Highest approval correlation has been selected.'
    : `${d.detail.data.Note} has been selected.`;
};

const genericClick = d => {
    const clickArray = [...(d.target.clickHighlight || [])]
    const i = clickArray.indexOf(d.detail.data)
    if (i < 0) {
        clickArray.push(d.detail.data)
    } else {
        clickArray.splice(i,1)
    }
    d.target.clickHighlight = clickArray
    document.getElementById('aria-live').innerHTML = `${clickArray.length} clicked item${clickArray.length !== 1 ? 's' : ''}.`
};
const genericHover = d => {
    d.target.hoverHighlight = d.detail.data;
};
const genericMouseOut = d => {
    d.target.hoverHighlight = '';
};

const props = {
    'bar-chart': barProps,
    'line-chart': lineProps,
    'stacked-bar-chart': stackedBarProps,
    'heat-map': heatProps,
    // sparkline: sparklineProps,
    'clustered-bar-chart': clusteredBarProps,
    'pie-chart': pieProps,
    'scatter-plot': scatterProps,
    'circle-packing': circleProps,
    'parallel-plot': parallelProps,
    'dumbbell-plot': dumbbellProps,
    'world-map': mapProps,
    'alluvial-diagram': alluvialProps
};

const events = {
    'bar-chart': {
        clickEvent: genericClick,
        hoverEvent: genericHover,
        mouseOutEvent: genericMouseOut
    },
    'heat-map': {
        clickEvent: heatClick,
        hoverEvent: genericHover,
        mouseOutEvent: genericMouseOut
    },
    'circle-packing': {
        clickEvent: genericClick,
        hoverEvent: genericHover,
        mouseOutEvent: genericMouseOut
    },
    'world-map': {
        clickEvent: genericClick,
        hoverEvent: genericHover,
        mouseOutEvent: genericMouseOut
    }
}

const chartConstructor = (chartTag, id) => {
let chart = document.getElementById(id);
if (!chart) {
    chart = document.createElement(props[chartTag].chartType || chartTag);
}
chart.classList.add('hidden')
chart.classList.add('environment')
Object.keys(props[chartTag]).forEach(prop => {
    let propToTransfer = props[chartTag][prop]
    if (props[chartTag][prop][0] && props[chartTag][prop][0].date) {
        propToTransfer = []
        props[chartTag][prop].forEach(d => {
            let newDatum = {...d}
            newDatum.date = new Date(d.date)
            propToTransfer.push(newDatum)
        })
    }
    chart[prop] = propToTransfer;
});
if (events[chartTag]) {
    Object.keys(events[chartTag]).forEach(key => {
        chart.addEventListener(key, events[chartTag][key]);
    });
}
return chart;
};

const swapCharts = e => {
    const chartType = e.target.id.substr(1);
    document.getElementById('render-location').querySelectorAll('.environment').forEach(env => {
        env.classList.add('hidden')
    })
    document.getElementById(chartType).classList.remove('hidden')
    document.getElementById('aria-live').innerHTML = `${e.target.value} has loaded.`
};

const toggleSRText = e => {
    console.log(e.target.checked)
    document.getElementById("flexible-style").innerHTML = e.target.checked ? styleInnerHTML : ''
}

const initPage = () => {
    let inputs = ''

    Object.keys(props).forEach(chartType => {
        inputs += `<input type="radio" id="i${props[chartType].uniqueID}" name="chart" value="${chartType}" class="input-selector" />
        <label for="i${props[chartType].uniqueID}">${chartType}</label><br />`
        const chart = chartConstructor(chartType, props[chartType].uniqueID);
        document.getElementById('render-location').appendChild(chart);
    })

    document.getElementById('toggle').addEventListener('change', toggleSRText);

    document.getElementById("inputs").innerHTML = inputs
    inputs = document.querySelectorAll('.input-selector');
    inputs.forEach(i => {
        i.addEventListener('change', swapCharts);
    });
};

window.addEventListener('load', initPage, false);
  