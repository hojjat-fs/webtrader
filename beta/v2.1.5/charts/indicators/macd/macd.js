define(["jquery","common/rivetsExtra","jquery-ui","color-picker","ddslick"],function(a,b){function c(){a(this).dialog("close")}function d(d,e){require(["css!charts/indicators/macd/macd.css"]),require(["text!charts/indicators/macd/macd.html","text!charts/indicators/indicators.json"],function(f,g){f=a(f),f.appendTo("body"),g=JSON.parse(g);var h=g.macd,i={title:h.long_display_name,description:h.description};b.bind(f[0],i),f.find("#macd_line_stroke,#signal_line_stroke,#macd_hstgrm_color").each(function(){a(this).colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)},ok:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)}})});var j="Solid";a("#macd_dash_style").ddslick({imagePosition:"left",width:148,background:"white",onSelected:function(b){a("#macd_dash_style .dd-selected-image").css("max-width","115px"),j=b.selectedData.value}}),a("#macd_dash_style .dd-option-image").css("max-width","115px"),a("#macd_line_stroke").css("background","#2a277a"),a("#signal_line_stroke").css("background","red"),a("#macd_hstgrm_color").css("background","#7e9fc9"),f.dialog({autoOpen:!1,resizable:!0,width:390,modal:!0,my:"center",at:"center",of:window,dialogClass:"macd-ui-dialog",buttons:[{text:"OK",click:function(){var b=!0;if(a(".macd_input_width_for_period").each(function(){var c=a(this);return _.isInteger(_.toNumber(c.val()))&&_.inRange(c.val(),parseInt(c.attr("min")),parseInt(c.attr("max"))+1)?void 0:(require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+c.attr("min")+" to "+c.attr("max")+" is allowed for "+c.closest("tr").find("td:first").text()+"!"})}),c.val(c.prop("defaultValue")),void(b=!1))}),b){var d={fastPeriod:parseInt(a("#macd_fast_period").val()),slowPeriod:parseInt(a("#macd_slow_period").val()),signalPeriod:parseInt(a("#macd_signal_period").val()),fastMaType:a("#macd_fast_ma_type").val(),slowMaType:a("#macd_slow_ma_type").val(),signalMaType:a("#macd_signal_ma_type").val(),macdStroke:a("#macd_line_stroke").css("background-color"),signalLineStroke:a("#signal_line_stroke").css("background-color"),macdHstgrmColor:a("#macd_hstgrm_color").css("background-color"),strokeWidth:parseInt(a("#macd_stroke_width").val()),dashStyle:j,appliedTo:parseInt(a("#macd_applied_to").val())};a(a(".macd").data("refererChartID")).highcharts().series[0].addIndicator("macd",d),c.call(f)}}},{text:"Cancel",click:function(){c.call(this)}}]}),f.find("select").selectmenu({width:150}),a.isFunction(e)&&e(d)})}return{open:function(b){return 0===a(".macd").length?void d(b,this.open):void a(".macd").data("refererChartID",b).dialog("open")}}});