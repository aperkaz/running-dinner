/*  Group Matching Algorithing*/
function generateResults(){
  cleanTable();
  shuffleGroups();
}


function shuffleGroups(){

  pack = [];

  var groupsClone = jQuery.extend(true, [], groups);
  var vegGroupsClone = vegGroups.slice(0);
  console.log(groups);
  console.log(groupsClone);
  console.log(vegGroups);
  console.log('vegs: ',vegGroupsClone);

  // match veggies
  while(vegGroupsClone.length > 0 && vegGroupsClone.length !== "undefined"){
    console.log('matching vegies');
    var index = Math.floor(Math.random() * vegGroupsClone.length);
    console.log('index: ',index)
    console.log('Adding veg: ',vegGroupsClone[index]);
    pack.push(vegGroupsClone[index]);
    vegGroupsClone.splice(index,1);
    if(pack.length >= 3){
      console.log('Publishing: ',pack);
       publishGroup(pack);
       pack = [];
    }
 }

 // fill veggie groups
  while(pack.length > 0 && pack.length < 3 && groupsClone.length > 0){
    console.log('filling vegie group');

      console.log('Adding normal: '+groupsClone[0]);
      pack.push(groupsClone[0]);
      groupsClone.splice(0,1);

  }
  console.log('Publishing: ',pack);
  publishGroup(pack);
  pack = [];

  // match normals
  while( groupsClone.length > 0){

    var index = Math.floor(Math.random() * groupsClone.length );
    console.log('Adding normal: ',groupsClone[index]);
    pack.push(groupsClone[index]);
    groupsClone.splice(index,1);
    if(pack.length >= 3){
       console.log('Publishing: ',pack);
       publishGroup(pack);
       pack = [];
    }
  }
  if(pack.length > 0){
    console.log('OUT: ',pack);
    publishGroup(pack);
  }
  pack = [];
}
