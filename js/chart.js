const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };


  const donutId = document.getElementById("donut"); 
  const donutChart = new Chart(donutId, {
    type: 'doughnut',
    data: data,
  });
  
  const pieId = document.getElementById("pie");
  const pieChart = new Chart(pieId, {
    type: 'pie',
    data: data,
  });

