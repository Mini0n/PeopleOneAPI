var catsURL = 'http://localhost:3000/catalogs/';
var areasURL = '/areas/';

function getAreas(catId){
  $.get(catsURL+catId+areasURL, function(data, status){
    console.log(data);
    console.log(status);
  });
}

function getArea(catId, id){
  $.get(catsURL+catId+areasURL+id, function(data, status){
    console.log(data);
    console.log(status);
  });
}

function createArea(catId, name){
  $.post(catsURL+catId+areasURL,
    { name: ''+name },
  function(data, status){
      console.log(data);
      console.log(status);
  }); 
}

function updateArea(catId, id, newName){
  $.ajax({
    url: catsURL+catId+areasURL+id,
    type: 'PUT',
    data: { name: newName },
    success: function(result) {
      console.log('area '+id+' updated');
    }
  });
}


function deleteArea(catId, id){
  $.ajax({
    url: catsURL+catId+areasURL+id,
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