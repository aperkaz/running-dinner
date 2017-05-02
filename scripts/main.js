var groups = [];
var vegGroups = [];
var pack =  [];

/* General methods*/
function addGroup(){
  var newGroup = extractGroupInfo();
  if(newGroup.name !== ''){
    if(newGroup.vegetarian === true){
      vegGroups.push(newGroup);
    }else {
      groups.push(newGroup);
    }
    addGroupToList(newGroup);
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

/* Group List Methods */
function addGroupToList(newGroup){
  if(newGroup.vegetarian === true){
    appendHTML('added-groups', '<div>'+newGroup.name+ ' &#127813;</div>');
  } else {
    appendHTML('added-groups', '<div>'+newGroup.name+' &#127831;</div>');
  }
  document.getElementById('group-name').value = "";
  document.getElementById('group-vegetarian').checked = false;
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
