fetch('ipl-frontend/data.json').then(data => data.json()).then(data => {
  view1(data);
  view2(data);
  view3(data);
  view4(data);
})



// // Create the chart View1
// // -----------------------
let view1 = (vdata) => {
  let nameArr = Object.keys(vdata[Object.keys(vdata)[0]]);
  let dataArr = Object.values(vdata[Object.keys(vdata)[0]]);
  Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      text: Object.keys(vdata)[0]
    },
    xAxis: {
      categories: Object.keys(vdata[Object.keys(vdata)[0]])
    },
    yAxis: {
      min: 0,
      title: {
        text: 'No. of matches'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'

      }

    },
    series: [{
      name: "Chart1",
      data: dataArr,
      "colorByPoint": true

    }]
  });
}

// Create the chart View2
// -----------------------


let view2 = (vdata) => {
  let arr = Object.values(vdata[Object.keys(vdata)[1]]);
  let seriesArr = [];
  let i = 0;
  let dataArr = [];
  for (let cou of arr) {
    seriesArr[i] = {};
    seriesArr[i].name = Object.keys(cou)[i];
    seriesArr[i].data = [];
    for (let dataCou of arr) {
      seriesArr[i].data.push(Object.values(dataCou)[i]);
    }
    i++
  }

  Highcharts.chart('container1', {
    chart: {
      type: 'bar'
    },
    title: {
      text: Object.keys(vdata)[1]
    },
    xAxis: {
      categories: Object.keys(vdata[Object.keys(vdata)[1]])
    },
    yAxis: {
      min: 0,
      title: {
        text: 'No. of matches'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: seriesArr

  });
}
// Create the chart View3
// -----------------------

let view3 = (vdata) => {
  let nameArr = Object.keys(vdata[Object.keys(vdata)[2]]);
  let dataArr = Object.values(vdata[Object.keys(vdata)[2]]);
  Highcharts.chart('container2', {
    chart: {
      type: 'column'
    },
    title: {
      text: Object.keys(vdata)[2]
    },
    xAxis: {
      categories: Object.keys(vdata[Object.keys(vdata)[2]])
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Extra Runs'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'

      }

    },
    series: [{
      name: "Chart3",
      data: dataArr,
      "colorByPoint": true

    }]
  });
}



// Create the chart View4
// -----------------------


let view4 = (vdata) => {
  let nameArr = Object.keys(vdata[Object.keys(vdata)[3]]);
  let dataArr = Object.values(vdata[Object.keys(vdata)[3]]);
  Highcharts.chart('container3', {
    chart: {
      type: 'column'
    },
    title: {
      text: Object.keys(vdata)[3]
    },
    xAxis: {
      categories: Object.keys(vdata[Object.keys(vdata)[3]])
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Economy'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'

      }

    },
    series: [{
      name: "Chart4",
      data: dataArr,
      "colorByPoint": true

    }]
  });
}