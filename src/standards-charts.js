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
        clickEvent: d => {
            console.log("clickEvent",d)
        },
        hoverEvent: d => {
            console.log("hoverEvent",d)
        },
        mouseOutEvent: d => {
            console.log("mouseOutEvent",d)
        }
    },
    'heat-map': {
        clickEvent: heatClick,
        hoverEvent: heatHover,
        mouseOutEvent: heatOut
    },
    'circle-packing': {
        clickEvent: d => {
            console.log("clickEvent",d)
        },
        hoverEvent: d => {
            console.log("hoverEvent",d)
        },
        mouseOutEvent: d => {
            console.log("mouseOutEvent",d)
        }
    },
    'world-map': {
        clickEvent: d => {
            console.log("clickEvent",d)
        },
        hoverEvent: d => {
            console.log("hoverEvent",d)
        },
        mouseOutEvent: d => {
            console.log("mouseOutEvent",d)
        }
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
};

const initPage = () => {
    let inputs = ''

    Object.keys(props).forEach(chartType => {
        inputs += `<input type="radio" id="i${props[chartType].uniqueID}" name="chart" value="${chartType}" class="input-selector" />
        <label for="i${props[chartType].uniqueID}">${chartType}</label><br />`
        const chart = chartConstructor(chartType, props[chartType].uniqueID);
        document.getElementById('render-location').appendChild(chart);
    })

    document.getElementById("inputs").innerHTML = inputs
    inputs = document.querySelectorAll('.input-selector');
    inputs.forEach(i => {
        i.addEventListener('change', swapCharts);
    });
};

window.addEventListener('load', initPage, false);
  