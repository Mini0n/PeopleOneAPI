console.log('code0 loaded');

// var catalogsArrayTable = [];
// var areasArrayTable = [];
// var ItemsArrayTable = [];
// var catalogsArrayTableObj = [];
// var areasArrayTableObj = [];
// var ItemsArrayTableObj = [];
var everythingArrayObj = [];

function setActiveLink(){
  $('#links').children().removeClass('active');
  $(event.target).parent().addClass('active');
}

//rowInfo {catalog, area, item}
function addRow(rowInfo, objIndex){
  var ro1 = '<tr><td class="catalog-cell" catalog-id="'+objIndex+'">'+rowInfo.catalog+'</td>';
  var ro2 = '<td class="area-cell" area-id="'+objIndex+'">'+rowInfo.area+'</td>';
  var ro3 = '<td class="item-cell" item-id="'+objIndex+'">'+rowInfo.item+'</td></tr>';
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
  cleanTable();
  everythingArray.forEach(catalog => {
   tempRow.catalog = catalog.name;
   tempRow.catId = catalog.id;
   catalog.areas.forEach(area => {
    tempRow.area = area.name;
    tempRow.areaId = area.id;
    area.items.forEach(item => {
      tempRow.item = item.name;
      tempRow.itemId = item.id
      everythingArrayObj.push(Object.assign({},tempRow));
      addRow(tempRow,everythingArrayObj.length-1);
    });
   });
  });
}

function searchTable(){
  var val = $('#search-input').val();
  // console.log(val);
  search(val);
}

function search(text){
  var tempArray = [];
  everythingArrayObj.forEach(obj => {
    var str = JSON.stringify(obj);
    if (str.toLowerCase().includes(text.toLowerCase())){ tempArray.push(obj); }
  });
  // return tempArray;
  console.log(tempArray);
  buildArrayRows(tempArray);
}

function buildArrayRows(objArray){
  cleanTable();
  objArray.forEach(obj => {
    addRow(obj);
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