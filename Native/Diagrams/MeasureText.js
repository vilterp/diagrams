Elm.Native = Elm.Native || {};
Elm.Native.Diagrams = Elm.Native.Diagrams || {};
Elm.Native.Diagrams.MeasureText = Elm.Native.Diagrams.MeasureText || {};

Elm.Native.Diagrams.MeasureText = {};
Elm.Native.Diagrams.MeasureText.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Diagrams = localRuntime.Native.Diagrams || {};
	localRuntime.Native.Diagrams.MeasureText = localRuntime.Native.Diagrams.MeasureText || {};
	if ('values' in localRuntime.Native.Diagrams.MeasureText)
	{
		return localRuntime.Native.Diagrams.MeasureText.values;
	}

	var Utils = Elm.Native.Utils.make(localRuntime);
	var canvasCtx = document.createElement('canvas').getContext('2d');

	function toFont(props)
	{
		return [
			props['font-style'],
			props['font-variant'],
			props['font-weight'],
			props['font-size'],
			props['font-family']
		].join(' ');
	}

	// context stuff is from core/Graphics/Collage.js
	var defaultContext = {
		'font-style': 'normal',
		'font-variant': 'normal',
		'font-weight': 'normal',
		'font-size': '12px',
		'font-family': 'sans-serif',
		'color': 'black'
	};

	function mergeContexts(a, default_font)
	{
		var result = {};
		result['font-style'] = a['font-style'] || default_font['font-style'];
		result['font-variant'] = a['font-variant'] || default_font['font-variant'];
		result['font-weight'] = a['font-weight'] || default_font['font-weight'];
		result['font-size'] = a['font-size'] || default_font['font-size'];
		result['font-family'] = a['font-family'] || default_font['font-family'];
		return result;
	}

	return localRuntime.Native.Diagrams.MeasureText.values = {
		textWidth : function(txt) {
			canvasCtx.font = toFont(mergeContexts(txt._0, defaultContext));
			return canvasCtx.measureText(txt._1._0).width;
		},
	};
};
