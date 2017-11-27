console.log('code0 loaded');

var catalogsArrayTable = [];
var areasArrayTable = [];
var ItemsArrayTable = [];
var catalogsArrayTableObj = [];
var areasArrayTableObj = [];
var ItemsArrayTableObj = [];

function setActiveLink(){
  $('#links').children().removeClass('active');
  $(event.target).parent().addClass('active');
}

//rowInfo {catalog, area, item}
function addRow(rowInfo){
  var ro1 = '<tr><td class="catalog-cell">'+rowInfo.catalog+'</td>';
  var ro2 = '<td class="area-cell">'+rowInfo.area+'</td>';
  var ro3 = '<td class="item-cell">'+rowInfo.item+'</td></tr>';
  var row = ro1+ro2+ro3;
  var table = $('#table-body');
  table.append(row);
}

function createRowObject(catalog, area, item){
  var r = {};
  r['catalog'] = ((catalog == '' )|| (catalog == undefined)) ? '-' : catalog;
  r['area'] = ((area == '') || (area == undefined)) ? '-' : area;
  r['item'] = ((item == '') || (item == undefined)) ? '-' : item;
  return r;
}

function loading(millis){
  console.log('loading');
  var time = setTimeout(function(){
    console.log('loaded');
    clearTimeout(time);
  }, millis);
}


function readEverything(){
  var cats = getEverything();
  var time = setTimeout(function(){
    clearTimeout(time);
    // console.log(everythingArray);
    buildAllRows();
  }, 1500);
}

function buildAllRows(){
  var tempRow = {};
  everythingArray.forEach(catalog => {
   tempRow.catalog = catalog.name;
   catalog.areas.forEach(area => {
    tempRow.area = area.name;
    area.items.forEach(item => {
      tempRow.item = item.name;
      addRow(tempRow);
    });
   });
  });
}




function cleanTable(){
  $('#table-body').html('');
}



function hideAll(){
  $('.catalog-cell').hide();
  $('.area-cell').hide();
  $('.item-cell').hide();
}

function showAll(){
  cleanTable();
  buildAllRows();
  $('.catalog-cell').show();
  $('.area-cell').show();
  $('.item-cell').show();
  
}

function showCatalogs(){ 
  hideAll();
  $('.catalog-cell').show(); 
}
function showAreas(){
  hideAll(); 
  $('.area-cell').show(); 
}
function showItems(){
  hideAll();
  $('.item-cell').show();
}


var testRow = {catalog:'prueba',area:'area51',item:'alien'};
var row2 = createRowObject('algo','algo2','algo3');
// console.log(row2);

// console.log(testRow);
// addRow(testRow);
// addRow(row2);

// readCatalogs();


readEverything();