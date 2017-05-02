var groupsClone;
var vegGroupsClone;

/*  Group Matching Algorithing*/
function generateResults(){
  cleanTable();
  if(groups.length > 0 || vegGroups.length > 0){
    document.getElementById("results").style.display = "block";
    shuffleGroups();
  }
}

function matchVegetarians(){
  while(vegGroupsClone.length > 0 && vegGroupsClone.length !== "undefined"){
    var index = Math.floor(Math.random() * vegGroupsClone.length);
    pack.push(vegGroupsClone[index]);
    vegGroupsClone.splice(index,1);
    if(pack.length >= 3){
       publishGroup(pack);
       pack = [];
    }
 }

 // fill veggie groups
  while(pack.length > 0 && pack.length < 3 && groupsClone.length > 0){
      pack.push(groupsClone[0]);
      groupsClone.splice(0,1);

  }
  publishGroup(pack);
  pack = [];
}

function matchMeatEaters(){
  while( groupsClone.length > 0){

    var index = Math.floor(Math.random() * groupsClone.length );
    pack.push(groupsClone[index]);
    groupsClone.splice(index,1);
    if(pack.length >= 3){
       publishGroup(pack);
       pack = [];
    }
  }

  if(pack.length > 0){
    publishGroup(pack);
  }
}

function shuffleGroups(){
  pack = [];

  groupsClone = groups.slice(0);
  vegGroupsClone = vegGroups.slice(0);

  // match veggies
  matchVegetarians();

  // match normals
  matchMeatEaters();
}
