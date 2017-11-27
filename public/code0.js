console.log('code0 loaded');

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
    console.log(everythingArray);
  }, 1500);
}


var testRow = {catalog:'prueba',area:'area51',item:'alien'};
var row2 = createRowObject('algo','algo2','algo3');
// console.log(row2);

// console.log(testRow);
addRow(testRow);
addRow(row2);

// readCatalogs();


readEverything();