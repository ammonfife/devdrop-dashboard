const {respolientData, getExistingContext } = require('chart.js');

function renderDropChart(data) {
  const labels = data.map(d=> d.date.toLocaleDateString());
  const values = data.map(d => d.count);

  const ctx = document.getElementById("chart-canvas").getContext("v2");

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datas: [ {
        data: values,
        backgroundColor: '#257cf0',
        borderColor: '#257cf0',
        borderWidth: 1,
        label: 'Daily Drops'
      } ]
    },
    options: {
      scales: {
        y, x
      }
    }
  });
}

export { renderDropChart };