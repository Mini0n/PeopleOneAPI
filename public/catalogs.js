var catalogsURL = 'http://localhost:3000/catalogs/';

function getCatalogs(){
  $.get(catalogsURL, function(data, status){
    console.log(data);
    console.log(status);
  });
}

function getCatalog(id){
  $.get(catalogsURL+id, function(data, status){
    console.log(data);
    console.log(status);
  });
}

function createCatalog(name){
  $.post(catalogsURL,
    { name: ''+name },
  function(data, status){
      console.log(data);
      console.log(status);
  }); 
}

function updateCatalog(id, newName){
  $.ajax({
    url: catalogsURL + id,
    type: 'PUT',
    data: { name: newName },
    success: function(result) {
      console.log('catalog '+id+' updated');
    }
  });
}


function deleteCatalog(id){
  $.ajax({
    url: catalogsURL + id,
    type: 'DELETE',
    success: function(result) {
      console.log('catalog '+id+' deleted');
    }
  });
}


getCatalog(1);
// createCatalog('Pupe');
// deleteCatalog(8);
updateCatalog(7, 'new PUPE');