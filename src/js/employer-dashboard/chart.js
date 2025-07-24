window.onload = function () {

let matchProfileChart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	exportEnabled: false,
	theme: "light1",
	data: [{
		type: "pyramid",
		yValueFormatString: "#\"%\"",
		indexLabelFontColor: "black",
		indexLabelFontSize: 12,
	    indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} people (#percent%)",
		//reversed: true, // Reverses the pyramid
		dataPoints: [
            { y: 100, label: "70-100%", color: "#4072EF" },
            { y: 68, label: ">60%", color: "#9FBAFF" },
            { y: 50, label: "50%", color: "#5583F7" },
            { y: 45, label: "10-50%", color: "#759CFF" },
                ]

	}]
});
    
// experience chart
let experienceChart = new CanvasJS.Chart("experienceChartContainer", {
  animationEnabled: true,
  data: [{
    type: "doughnut",
    // startAngle: 420,
    indexLabelFontSize: 12,
    indexLabel: "", // hide label for very small chart
    innerRadius: 50, // thin ring
    toolTipContent: "{label}: {y} yrs",

    dataPoints: [
      { y: 67, label: "0-2yrs", color : "#4072EF" },
      { y: 28, label: "2-3yrs", color : "#5583F7" },
      { y: 10, label: "3-5yrs", color : "#759CFF" },
      { y: 7, label: "5-10yrs", color : "#9FBAFF" },
      { y: 15, label: "10+ yrs", color : "#D5E1FF" }
    ]
  }]
});

    
const salaryChart = new CanvasJS.Chart("salaryChartContainer", {
    animationEnabled: true,
    data: [{
      type: "pie",
      startAngle: 450,
      indexLabel: "{label} - #percent%",
      toolTipContent: "<b>{label}:</b> {y} people (#percent%)",
      dataPoints: [
        { y: 10, label: "35k - 50k", color: "#4072EF" },
        { y: 5,  label: "Above 50k", color: "#9FBAFF" }
      ]
    }]
  });

  
salaryChart.render();
experienceChart.render();
matchProfileChart.render();

}