var catsURL = 'http://localhost:3000/catalogs/';
var arsURL = '/areas/';
var areasArray = null;
var areaItem = null;

function getCatalogObjectInArray(catId){
  for (var i=0; i<catalogsArray.length;i++){
    if (catalogsArray[i].id == catId){
      return i;
    }
  }
  return -1;
}

function getAreasEverything(catId, cat){
  $.get(catsURL+catId+arsURL, function(data, status){
    areasArray = data;
    cat.areas = areasArray;
    areasArray.forEach(area => {
      getItemsEverything(catId, area.id, area);      
    });
  });
}

function getAreas(catId){
  $.get(catsURL+catId+arsURL, function(data, status){
    areasArray = data;
  });
}

function getArea(catId, id){
  $.get(catsURL+catId+arsURL+id, function(data, status){
    areaItem = data;
  });
}

function createArea(catId, name){
  $.post(catsURL+catId+arsURL,
    { name: ''+name },
  function(data, status){
      console.log(data);
      console.log(status);
  }); 
}

function updateArea(catId, id, newName){
  $.ajax({
    url: catsURL+catId+arsURL+id,
    type: 'PUT',
    data: { name: newName },
    success: function(result) {
      console.log('area '+id+' updated');
    }
  });
}


function deleteArea(catId, id){
  $.ajax({
    url: catsURL+catId+arsURL+id,
    type: 'DELETE',
    success: function(result) {
      console.log('area '+id+' deleted');
    }
  });
}



// getAreas(1);
// getArea(1,1);
// createArea(1, 'new area');
// updateArea(1,4,'new name edited');
// deleteArea(1,4);