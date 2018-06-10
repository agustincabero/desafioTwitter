

function controlFeed() {
  // Código para pausar/reanudar el streaming de Tweets
  document.addEventListener('newtweet',addTuit);
}

function addTuit() {
  var tuit = event.detail;
  var tuitText = tuit.tweet.text;
  var tuitUser = tuit.tweet.user.screen_name; 
  var name = tuit.tweet.user.name;
  var img = tuit.tweet.user.profile_image_url;

  var imgTuitToAdd = document.createElement('img');
  var nameTuitToAdd = document.createElement('h4');
  var userTuitToAdd = document.createElement('span');
  var textTuitToAdd = document.createElement('p');

  imgTuitToAdd.src = img;
  imgTuitToAdd.className = 'media-object img-rounded';
  nameTuitToAdd.innerText = name;  
  nameTuitToAdd.className = 'media-heading';
  userTuitToAdd.innerText = ' @'+tuitUser;
  textTuitToAdd.innerText = tuitText;

  var body = document.body;
  var columna = body.getElementsByClassName('col-sm-6');

  var divPanelInfo = document.createElement('div');  
  divPanelInfo.className = 'panel panel-info';
  divPanelInfo.id = 'tweets-list';
  var firstChild = columna[0].firstElementChild;
  columna[0].insertBefore(divPanelInfo,firstChild);

  var panelInfo = body.getElementsByClassName('panel panel-info');
  var divPanelBody = document.createElement('div');
  divPanelBody.className = 'panel-body';
  panelInfo[0].appendChild(divPanelBody);

  var panelBody = body.getElementsByClassName('panel-body');
  var divMedia = document.createElement('div');
  divMedia.className = 'media';
  panelBody[1].appendChild(divMedia);

  var media = body.getElementsByClassName('media');
  var divMediaLeft = document.createElement('div');
  var divMediaBody = document.createElement('div');
  divMediaLeft.className = 'media-left';
  divMediaBody.className = 'media-body';
  media[0].appendChild(divMediaLeft);
  media[0].appendChild(divMediaBody);

  var mediaLeft = body.getElementsByClassName('media-left');
  mediaLeft[0].appendChild(imgTuitToAdd);

  var mediaBody = body.getElementsByClassName('media-body');
  mediaBody[0].appendChild(nameTuitToAdd);
  mediaBody[0].appendChild(textTuitToAdd);

  var mediaHeading = body.getElementsByClassName('media-heading');
  mediaHeading[0].appendChild(userTuitToAdd);  
}
