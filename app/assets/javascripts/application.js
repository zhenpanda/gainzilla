// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require handlebars
//= require_self
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree ./templates
//= require_tree .

//= require underscore
//= require gmaps/google
//= require Chart.js

$(document).ready(function() {

	//login page js
	$("#nav-scroll-down").click(function() {
		$("html, body").animate({ scrollTop: 1000 }, "slow");
	});
	$(".go-button").click(function(){
		$( "#go-button-submit" ).trigger( "click" );
	});
	$(".getin-button").click(function(){
		$( "#getin-button-submit" ).trigger( "click" );
	});
	
	//weight page: chart section
	$( ".weight-hide" ).hide();
	$( "#check-box" ).click(function() {
	  $('#weight-box').val('');
	  $("html, body").animate({ scrollTop: 675 }, "slow");

	  //draw chart with some timeout
	  setTimeout(function(){
	  	$( ".weight-hide" ).show(); 

		// Get the context of the canvas element we want to select
		var ctx = document.getElementById("myChart").getContext("2d");
		var data = {
		    labels: ["You", "Godzilla"],
		    datasets: [
		        {
		            label: "My Second dataset",
		            fillColor: "rgba(151,187,205,0.8)",
		            strokeColor: "rgba(151,187,205,0.8)",
		            highlightFill: "rgba(255,0,0,0.8)",
		            highlightStroke: "rgba(151,187,205,1)",
		            data: [0.0000001, 100]
		        }
		    ]
		};
		var options = 
		{
		    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
		    scaleBeginAtZero : true,
		    //Boolean - Whether grid lines are shown across the chart
		    scaleShowGridLines : true,
		    //String - Colour of the grid lines
		    scaleGridLineColor : "rgba(0,0,0,.05)",
		    //Number - Width of the grid lines
		    scaleGridLineWidth : 1,
		    //Boolean - Whether to show horizontal lines (except X axis)
		    scaleShowHorizontalLines: true,
		    //Boolean - Whether to show vertical lines (except Y axis)
		    scaleShowVerticalLines: true,
		    //Boolean - If there is a stroke on each bar
		    barShowStroke : true,
		    //Number - Pixel width of the bar stroke
		    barStrokeWidth : 2,
		    //Number - Spacing between each of the X value sets
		    barValueSpacing : 5,
		    //Number - Spacing between data sets within X values
		    barDatasetSpacing : 1,
		    //String - A legend template
		    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
		}
		var myBarChart = new Chart(ctx).Bar(data, options);
		console.log("chart is bein loaded.");
	  	}, 700
	  );
	});
	$("#red-arrow-down").click(function() {
		$("html, body").animate({ scrollTop: 1285 }, "slow");
	});
	$("#yellow-arrow-down").click(function() {
		$("html, body").animate({ scrollTop: 2020 }, "slow");
	});

	//weight page: map section
	$("#white-arrow-down").click(function() {
		$("html, body").animate({ scrollTop: 2760 }, "slow");
	});

	//weight page: resturant section
	$( "#fader1" ).hide();
	$( "#fader2" ).hide();
	$( "#fader3" ).hide();
	$( "#fader4" ).hide();
	$( "#fader5" ).hide();
	$( "#fader6" ).hide();
	$("#orange-arrow-down").click(function() {
		$("#fader1").delay( 350 ).fadeIn('slow', function() {
			$("#fader2").delay( 200 ).fadeIn('slow', function() {
				$("#fader3").delay( 120 ).fadeIn('slow', function() {
					$("#fader4").delay( 740 ).fadeIn('slow', function() {
						$("#fader5").delay( 860 ).fadeIn('slow', function() {
							$("#fader6").delay( 900 ).fadeIn('slow', function() {});
						});
					});
				});
			});
		});
	});

	//weight page: end section
	$( "#be-ok" ).hide();
	$("#dark-arrow-down").click(function() {
		$("html, body").animate({ scrollTop: 3760 }, "slow");
		$("#be-ok").delay( 450 ).fadeIn( "slow" );
	});
});

/*
var App = {
	Models: {}, 
	Collections: {}, 
	Views: {}, 
	Routers: {}
};
*/