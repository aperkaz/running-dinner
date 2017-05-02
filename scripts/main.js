var groups = [];
var vegGroups = [];
var pack =  [];

function addGroup(){
  var newGroup = extractGroupInfo();
  if(newGroup.name !== ''){
    if(newGroup.vegetarian === true){
      vegGroups.push(newGroup);
      console.log(vegGroups);
    }else {
      groups.push(newGroup);
      console.log(groups);
    }
    addGroupToList(newGroup);
    console.log('--');
   }
}

function cleanGroups(){
  groups = [];
  vegGroups = [];
  cleanList();
  cleanTable();
}

function extractGroupInfo(){
  var newGroup = {};
  newGroup.name = document.getElementById("group-name").value;
  newGroup.vegetarian = document.getElementById('group-vegetarian').checked;
  return newGroup;
}

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

/* Group List Methods */
function addGroupToList(newGroup){
  appendHTML('added-groups', '<div>'+newGroup.name+'</div>');
}

function cleanList(){
  setHTML('added-groups', '');
}

/* Group Table Methods */
function publishGroup(pack){
  var html = '<tr>';
  if(pack.length > 0){
     html += ' <td>' + pack[0].name +'</td>';
   }

  if(pack.length > 1){
     html += ' <td>' + pack[1].name +'</td>';
   }

  if(pack.length > 2){
     html += ' <td>' + pack[2].name +'</td>';
   }

  html +=  '</tr>';

  appendHTML('group-list', html);
}

function cleanTable(){
  setHTML('group-list', '');
}

/*  HTML Manipulation Methods*/
function setHTML(id, html){
  document.getElementById(id).innerHTML = html;
}

function appendHTML(id, html){
  document.getElementById(id).innerHTML += html;
}

/* Array Manipulation Methods */
function deepCopy(oldObj) {
    var newObj = oldObj;
    if (oldObj && typeof oldObj === 'object') {
        newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
        for (var i in oldObj) {
            newObj[i] = deepCopy(oldObj[i]);
        }
    }
    return newObj;
}
