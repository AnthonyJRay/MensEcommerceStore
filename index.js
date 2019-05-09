
 
 
 const listing = fetch('https://api.bridgedataoutput.com/api/v2/OData/test/Property/replication?access_token=14f2783b3d19202535676bb124c320e7')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson)
    return myJson;
  });