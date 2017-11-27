var catsURL = 'http://localhost:3000/catalogs/';
var arsURL = '/areas/';
var itemsURL = '/items/';

function getItems(catId, areaId){
  $.get(catsURL+catId+arsURL+areaId+itemsURL, function(data, status){
    console.log(data);
    console.log(status);
  });
}

function getItem(catId, areaId, id){
  $.get(catsURL+catId+arsURL+areaId+itemsURL+id, function(data, status){
    console.log(data);
    console.log(status);
  });
}

function createItem(catId, areaId, name){
  $.post(catsURL+catId+arsURL+areaId+itemsURL,
    { name: ''+name },
  function(data, status){
      console.log(data);
      console.log(status);
  }); 
}

function updateItem(catId, areaId, id, newName){
  $.ajax({
    url: catsURL+catId+arsURL+areaId+itemsURL+id,
    type: 'PUT',
    data: { name: newName },
    success: function(result) {
      console.log('item '+id+' updated');
    }
  });
}


function deleteItem(catId, areaId, id){
  $.ajax({
    url: catsURL+catId+arsURL+areaId+itemsURL+id,
    type: 'DELETE',
    success: function(result) {
      console.log('item '+id+' deleted');
    }
  });
}


// getItems(1,1);
// getItem(1,1,1);
// createItem(1,1,'new item');
// updateItem(1,1,7,'new name edited');
// deleteItem(1,1,7);