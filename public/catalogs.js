var catsURL = 'http://localhost:3000/catalogs/';

function getCatalogs(){
  $.get(catsURL, function(data, status){
    console.log(data);
    console.log(status);
  });
}

function getCatalog(id){
  $.get(catsURL+id, function(data, status){
    console.log(data);
    console.log(status);
  });
}

function createCatalog(name){
  $.post(catsURL,
    { name: ''+name },
  function(data, status){
      console.log(data);
      console.log(status);
  }); 
}

function updateCatalog(id, newName){
  $.ajax({
    url: catsURL + id,
    type: 'PUT',
    data: { name: newName },
    success: function(result) {
      console.log('catalog '+id+' updated');
    }
  });
}


function deleteCatalog(id){
  $.ajax({
    url: catsURL + id,
    type: 'DELETE',
    success: function(result) {
      console.log('catalog '+id+' deleted');
    }
  });
}


// getCatalogs();
// getCatalog(1);
// createCatalog('Pupe');
// deleteCatalog(8);
// updateCatalog(7, 'new PUPE');