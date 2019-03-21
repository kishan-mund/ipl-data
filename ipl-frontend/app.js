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
  console.log(Object.keys(vdata[Object.keys(vdata)[0]]));
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
      name:"Chart1",
        data:dataArr,
        "colorByPoint": true

      }
    ]
  });
}

// Create the chart View2
// -----------------------


let view2 = (vdata) => {
  let arr = Object.values(vdata[Object.keys(vdata)[1]]);
  let arr2008 = [];
  for (let i of arr) {
    arr2008.push(Object.values(i)[0])
  }
  let arr2009 = [];
  for (let i of arr) {
    arr2009.push(Object.values(i)[1])
  }
  let arr2010 = [];
  for (let i of arr) {
    arr2010.push(Object.values(i)[2])
  }
  let arr2011 = [];
  for (let i of arr) {
    arr2011.push(Object.values(i)[3])
  }
  let arr2012 = [];
  for (let i of arr) {
    arr2012.push(Object.values(i)[4])
  }
  let arr2013 = [];
  for (let i of arr) {
    arr2013.push(Object.values(i)[5])
  }
  let arr2014 = [];
  for (let i of arr) {
    arr2014.push(Object.values(i)[6])
  }
  let arr2015 = [];
  for (let i of arr) {
    arr2015.push(Object.values(i)[7])
  }
  let arr2016 = [];
  for (let i of arr) {
    arr2016.push(Object.values(i)[8])
  }
  let arr2017 = [];
  for (let i of arr) {
    arr2017.push(Object.values(i)[9])
  }
console.log(arr2008)
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
    series: [{
        name: "2008",
        data: arr2008

      },
      {
        name: "2009",
        data: arr2009

      },
      {
        name: "2010",
        data: arr2010

      },
      {
        name: "2011",
        data: arr2011

      },
      {
        name: "2012",
        data: arr2012

      },
      {
        name: "2013",
        data: arr2013

      },
      {
        name: "2014",
        data: arr2014

      },
      {
        name: "2015",
        data: arr2015

      },
      {
        name: "2016",
        data: arr2016

      },
      {
        name: "2017",
        data: arr2017

      }
    ]
  });
}
// Create the chart View3
// -----------------------

let view3 = (vdata) => {
  let nameArr = Object.keys(vdata[Object.keys(vdata)[2]]);
  let dataArr = Object.values(vdata[Object.keys(vdata)[2]]);
  console.log(Object.keys(vdata[Object.keys(vdata)[2]]));
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
      name:"Chart3",
        data:dataArr,
        "colorByPoint": true

      }
    ]
  });
}



// Create the chart View4
// -----------------------


let view4 = (vdata) => {
  let nameArr = Object.keys(vdata[Object.keys(vdata)[3]]);
  let dataArr = Object.values(vdata[Object.keys(vdata)[3]]);
  console.log(Object.keys(vdata[Object.keys(vdata)[3]]));
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
      name:"Chart4",
        data:dataArr,
        "colorByPoint": true

      }
    ]
  });
}