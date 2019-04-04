var sketch = require('sketch')
var document = sketch.getSelectedDocument()
var selectedLayers = document.selectedLayers
var selectedCount = selectedLayers.length
var Rectangle = sketch.Rectangle
var Settings = sketch.Settings
var UI = sketch.UI
var pxSeleccion = Settings.settingForKey('miMultiploPreferido');


/* ************************************************************** */


export function settings(context){

	var theme = UI.getTheme()
	if (theme === 'dark'){

	} else {

	}

	UI.getInputFromUser("Select the value of which all actions will be multiple",{
		initialValue: Settings.settingForKey('miMultiploPreferido') || 8,
		type: UI.INPUT_TYPE.selection,
		possibleValues: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
		
	},(err,value)=>{
		if(err){ 
		return
	}
	
	Settings.setSettingForKey('miMultiploPreferido', value );
	
	})
};


/* ************************************************************** */


export function MethodPage(context){

  	NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString("http://www.kikesainz.com/method/"));
};

export function About(context){

	NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString("http://www.kikesainz.com/"));
};


/* ************************************************************** */


export function Round(context){

	if (selectedCount === 0) {
		sketch.UI.message('No layers are selected.😅');
	} else {
		
		selectedLayers.forEach(function (layer, i) {
			
			var resizeW = layer.frame.width%pxSeleccion;
			var resizeH = layer.frame.height%pxSeleccion;
			
			if (resizeW >= pxSeleccion/2) {
				resizeW = resizeW - pxSeleccion;
			}
			if (resizeH >= pxSeleccion/2) {
				resizeH = resizeH - pxSeleccion;
			}
			
		layer.frame= new Rectangle(layer.frame.x, layer.frame.y, layer.frame.width - resizeW, layer.frame.height - resizeH);
		document.sketchObject.inspectorController().reload()
		})
	}

};

export function MoveRight(context){

	if (selectedCount === 0) {
		sketch.UI.message('No layers are selected 😅');
	} else {
		
		selectedLayers.forEach(function (layer, i) {
		layer.frame= new Rectangle(layer.frame.x + pxSeleccion, layer.frame.y, layer.frame.width, layer.frame.height);
		document.sketchObject.inspectorController().reload()
		})
	}

};

export function MoveTop(context){

	if (selectedCount === 0) {
		sketch.UI.message('No layers are selected 😅');
	} else {

		selectedLayers.forEach(function (layer, i) {
		layer.frame= new Rectangle(layer.frame.x , layer.frame.y - pxSeleccion, layer.frame.width, layer.frame.height);
		document.sketchObject.inspectorController().reload()
		})
	}

};

export function MoveLeft(context){

	if (selectedCount === 0) {
		sketch.UI.message('No layers are selected 😅');
	} else {

		selectedLayers.forEach(function (layer, i) {
		layer.frame= new Rectangle(layer.frame.x - pxSeleccion, layer.frame.y, layer.frame.width, layer.frame.height);
		document.sketchObject.inspectorController().reload()
		})
	}

};

export function MoveDown(context){

	if (selectedCount === 0) {
		sketch.UI.message('No layers are selected 😅');
	} else {

		selectedLayers.forEach(function (layer, i) {
		layer.frame= new Rectangle(layer.frame.x , layer.frame.y + pxSeleccion, layer.frame.width, layer.frame.height);
		document.sketchObject.inspectorController().reload()
		})
	}

};

export function ResizeRight(context){

	if (selectedCount === 0) {
		sketch.UI.message('No layers are selected 😅');
	} else {

		selectedLayers.forEach(function (layer, i) {
		layer.frame= new Rectangle(layer.frame.x , layer.frame.y , layer.frame.width + pxSeleccion, layer.frame.height);
		document.sketchObject.inspectorController().reload()
		})
	}

};

export function ResizeLeft(context){

	if (selectedCount === 0) {
		sketch.UI.message('No layers are selected 😅');
	} else {

		selectedLayers.forEach(function (layer, i) {
		layer.frame= new Rectangle(layer.frame.x , layer.frame.y , layer.frame.width - pxSeleccion, layer.frame.height);
		document.sketchObject.inspectorController().reload()
		})
	}

};

export function ResizeTop(context){

	if (selectedCount === 0) {
		sketch.UI.message('No layers are selected 😅');
	} else {

		selectedLayers.forEach(function (layer, i) {
		layer.frame= new Rectangle(layer.frame.x , layer.frame.y , layer.frame.width , layer.frame.height - pxSeleccion);
		document.sketchObject.inspectorController().reload()
		})
	}

};

export function ResizeDown(context){

	if (selectedCount === 0) {
		sketch.UI.message('No layers are selected 😅');
	} else {

		selectedLayers.forEach(function (layer, i) {
		layer.frame= new Rectangle(layer.frame.x , layer.frame.y , layer.frame.width , layer.frame.height + pxSeleccion);
		document.sketchObject.inspectorController().reload()
		})
	}

};





          