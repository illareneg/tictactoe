const NUM_ROWS = 3;
const CELLS_PER_ROW = 3;
const CANVAS_DIMENSION = 200;
const CANVAS_PADDING = CANVAS_DIMENSION*0.15;
const SYMBOL_THICKNESS = 30;

document.addEventListener('DOMContentLoaded', init, false);

function init()
{
	createTable();
}

function createTable()
{
	var table = document.createElement("div");

	table.className = "table";
	table.id = "board";
	for (var i = 0; i != NUM_ROWS; ++i)
		table.appendChild(createRow(i));

	document.body.appendChild(table);
}

function createRow(rowNumber)
{
	var row = document.createElement("div");

	row.className = "row";
	for (var i = 0; i != CELLS_PER_ROW; ++i)
		row.appendChild(createCell(rowNumber*CELLS_PER_ROW + i));

	return row;
}

function createCell(cellIndex)
{
	var cell = document.createElement("div");

	cell.className = "cell";
	cell.id = cellNumberToId(cellIndex);
	cell.onclick = function()
	{
		clickCell(cell);
	}
	cell.appendChild(createCanvas());

	return cell;
}

function createCanvas()
{
	var canvas = document.createElement("canvas");

	canvas.width = canvas.height = CANVAS_DIMENSION;

	return canvas;
}

function clickCell(cell)
{
	
}

function drawCircle(cell)
{
	var canvas = cell.getElementsByTagName("canvas")[0];
	var context = canvas.getContext("2d");

	context.lineWidth = SYMBOL_THICKNESS;
	context.beginPath();
	context.arc(canvas.width/2, canvas.height/2, Math.sqrt(Math.pow(canvas.width, 2), Math.pow(canvas.height, 2))/2 - CANVAS_PADDING, 0, 2*Math.PI);
	context.stroke();
}

function drawX(cell)
{
	var canvas = cell.getElementsByTagName("canvas")[0];
	var context = canvas.getContext("2d");

	context.lineWidth = SYMBOL_THICKNESS;
	context.moveTo(CANVAS_PADDING, CANVAS_PADDING);
	context.lineTo(canvas.width - CANVAS_PADDING, canvas.height - CANVAS_PADDING);
	context.stroke();
	context.moveTo(canvas.width - CANVAS_PADDING, CANVAS_PADDING);
	context.lineTo(CANVAS_PADDING, canvas.height - CANVAS_PADDING);
	context.stroke();
}

function cellNumberToId(cellNumber)
{
	switch(cellNumber)
	{
		case 0: 
			return "topleftsquare"; 
		case 1: 
			return "topsquare";
		case 2: 
			return "toprightsquare";
		case 3: 
			return "leftsquare";
		case 4: 
			return "middlesquare";
		case 5: 
			return "rightsquare";
		case 6: 
			return "bottomleftsquare";
		case 7: 
			return "bottomsquare";
		case 8: 
			return "bottomrightsquare";
	}
}