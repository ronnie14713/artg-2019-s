const transDataPromise = d3.csv('../finalproject/data/ACS_17_5YR_S0804_with_ann.csv');
const geoidPromise = d3.json('../finalproject/data/geoid_20m.json');
const metadataPromise = d3.csv('../finalproject/data/ACS_17_5YR_S0804_metadata.csv');

  Promise.all([
    transDataPromise,
    geoidPromise,
    metadataPromise
    
])
.then(([transData, geoid, metadata]) => {
    console.log(transData);
    console.log(metadata);
    console.log(geoid);




});
