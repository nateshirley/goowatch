// NATHAN SHIRLEY (nes2ta) and JT Graass (jtg4de)
// enables user to click to decrease value of a Guru's ranking
downvoteVanilla = (id) => {
  targetID = "previewScore-" + id;
  var score = document.getElementById(targetID);
  score = score.textContent;
  score = parseInt(score) - 1;
  console.log(targetID);
  document.getElementById(targetID).innerHTML = score;
  let targetButton = "down-" + id;
  document.getElementById(targetButton).style.color = "red";
};
// enables user to click to increase value of a Guru's ranking
upvoteVanilla = (id) => {
  targetID = "previewScore-" + id;
  var score = document.getElementById(targetID);
  score = score.textContent;
  score = parseInt(score) + 1;
  console.log(targetID);
  document.getElementById(targetID).innerHTML = score;
  let targetButton = "up-" + id;
  document.getElementById(targetButton).style.color = "green";
};
failUp = (id) => {
  targetButton = "up-" + id;
  document.getElementById(targetButton).style.color = "Gainsboro";
};
failDown = (id) => {
  console.log("fail");
  targetButton = "down-" + id;
  document.getElementById(targetButton).style.color = "Gainsboro";
};
// enables user to submit a comment on a Guru's page
checkCommentVanilla = () => {
  var comment = document.getElementById("commentTextArea").value;
  var errorMsg;
  if (comment.length > 0 && comment.length < 400) {
    errorMsg = "";
    return comment;
  } else {
    errorMsg = "Type a comment.";
  }
  document.getElementById("commentError").innerHTML = errorMsg;
};
// enables user to submit a comment on a Guru's page
showCommentVanilla = (user, comment) => {
  if (comment.length > 0) {
    html =
      '<div class="comment-loop"><div class="comment-card"><div class="row comment-card-row user-row"><div class="comment-user">' +
      user +
      '</div></div><div class="row comment-card-row"><div class="comment">' +
      comment +
      "</div></div></div></div>";
    document.getElementById("recentComment").innerHTML =
      html + document.getElementById("recentComment").innerHTML;
    document.getElementById("commentTextArea").value = "";
    return true;
  } else return false;
};
// allows user to see how their submitted Guru's card would appear
previewGooVanilla = () => {
  var displayName = document.getElementById("displayName").value;
  var category = document.getElementById("category").value;
  var description = document.getElementById("description").value;
  //var youtube = document.getElementById("youtube").value;
  var otherLink = document.getElementById("link").value;
  console.log(otherLink);
  var isValid = checkAddInput(displayName, category, description, otherLink);
  if (isValid) {
    var htmlLeft =
      '<div class="card-wrap goo-loop"><div class="row goo-preview-card align-self-center"><div class="col-3 no-gutters preview-card-left"><div class="preview-card-left-content"><img src="../assets/pics/default-hand.png" alt="new guru" class="preview-card-avatar"/><div class="preview-card-score">&#8595;000&#8593;</div></div></div>';
    var htmlRight =
      '<div class="col-9 no-gutters preview-card-right"><div><div class="preview-card-right-header"><span class="preview-card-name name-select">' +
      displayName +
      '</span><span class="preview-card-category">' +
      category +
      '</span></div><p class="preview-card-description">' +
      description +
      '</p></div><div class="icon-row"><div class="icons"><span class="icon-span"><a href="' +
      //youtube +
      //'" target="_blank"><img src="../assets/icons/youtube1.png"alt="YouTube"class="icon"/></a></span><span class="icon-span"><a href="' +
      otherLink +
      '" target="_blank"><img src="../assets/icons/link.png"alt="website"class="icon-link"/></a></span></div></div></div></div></div>';
    document.getElementById("preview").innerHTML = htmlLeft + htmlRight;
    window.scrollTo(0, 10000);
  } else {
    document.getElementById("preview").innerHTML = "";
  }
};
// creates another Guru card for review
submitGooVanilla = () => {
  var displayName = document.getElementById("displayName").value;
  var category = document.getElementById("category").value;
  var description = document.getElementById("description").value;
  //var youtube = document.getElementById("youtube").value;
  var otherLink = document.getElementById("link").value;
  var isValid = checkAddInput(
    displayName,
    category,
    description,
    //youtube,
    otherLink
  );
  if (isValid) {
    let formData = [displayName, category, description, otherLink];
    document.getElementById("displayName").value = "";
    document.getElementById("category").value = "";
    document.getElementById("description").value = "";
    //document.getElementById("youtube").value = "";
    document.getElementById("link").value = "";
    document.getElementById("preview").innerHTML =
      "Thank you for your submission. We look forward to reviewing it.";
    return formData;
  }
};
// checks the validity of a user's submitted Guru
checkAddInput = (displayName, category, description, otherLink) => {
  isValid = true;
  if (displayName.length < 1) {
    isValid = false;
    document.getElementById("name_error").innerHTML = "Add a name.";
  } else {
    document.getElementById("name_error").innerHTML = "";
  }
  if (category === "") {
    isValid = false;
    document.getElementById("category_error").innerHTML = "Select a category.";
  } else {
    document.getElementById("category_error").innerHTML = "";
  }
  if (description.length < 30) {
    isValid = false;
    document.getElementById("description_error").innerHTML =
      "Description must be 30 characters.";
  } else {
    document.getElementById("description_error").innerHTML = "";
  }
  /*   var checkYoutube = function (youtube) {
    var pattern = new RegExp("(?:https?://)?(?:www.)?youtube.com/.*");
    var checkPattern = pattern.test(youtube);
    return checkPattern;
  };
  if (!checkYoutube(youtube)) {
    isValid = false;
    document.getElementById("youtube_error").innerHTML =
      "Paste full youtube link, e.g., www.youtube.com/dropshipking";
    console.log(checkYoutube(youtube));
  } else {
    document.getElementById("youtube_error").innerHTML = "";
  } */
  if (otherLink.length < 1) {
    isValid = false;
    document.getElementById("otherLink_error").innerHTML =
      "Other link required.";
  } else {
    document.getElementById("otherLink_error").innerHTML = "";
  }
  return isValid;
};
// event listener for submitting comments on a Guru
addCommentListener = () => {
  document
    .getElementById("submitComment")
    .addEventListener("click", submitCommentVanilla);
};

// AJAX CODE 
// Adding an event listener for the "keyup" event that we used in class for username
addUsernameLoginListener = (str_sofar) => {
    // var str_sofar = document.getElementById("fname").value;
    var backend_url = "http://localhost/goowatch/loginAjax.php";
    // var backend_url = "loginAjax.php"; // is the relative path (but won't work here since not in same directory)
    var data = "StringSoFar=" + str_sofar;
    makeAjaxCall("POST", backend_url, data).then(showHint, errorHandler);
}

// Adding an event listener for the "keyup" event that we used in class for username
addPasswordLoginListener = (str_sofar) => {
    var backend_url = "http://localhost/goowatch/loginAjax.php";
    // var backend_url = "loginAjax.php"; // is the relative path (but won't work here since not in same directory)
    var data = "StringSoFar=" + str_sofar;
    makeAjaxCall("POST", backend_url, data).then(showHint2, errorHandler);
}

function makeAjaxCall(methodType, url, data_tosend)
{
   // 2. Create an instance of an XMLHttpRequest object
   var promiseObj = new Promise(function(resolve, reject)
   {
      xhr = GetXmlHttpObject();
      if (xhr == null)
      {
         alert ("Your browser does not support XMLHTTP!");
         return;
      }

      // 6. Make an asynchronous request
      xhr.open(methodType, url, true);

      // 6.1 set header
      // application/x-www-form-urlencoded -- send binary data without boundary
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      // 7. The request is sent to the server
      xhr.send(data_tosend);


      xhr.onreadystatechange = function()
      {
         if (xhr.readyState === 4)
         {
            if (xhr.status === 200)
            {
               console.log("xhr done successfully");
               var res = xhr.responseText;         // assume response is text

               // callback_fn(res);
               resolve(res);
               // 8. Once the response is back the from the backend,
               //    the callback function is called to update the screen
               //    (this will be handled by the configuration above)

            } else
            {
               console.log("xhr failed");
               reject(xhr.status);
            }
         } else
         {
            console.log("xhr processing going on");
         }
      }
   });
   return promiseObj;
}


function showHint(str)
{
   if (str.length == 0)
   {
      document.getElementById ("txtHint").innerHTML = "";
      return;
   }
   document.getElementById ("txtHint").innerHTML = "Welcome " + str;
}


function showHint2(str)
{
   if (str.length == 0)
   {
      document.getElementById ("txtYousay").innerHTML = "";
      return;
   }
  //  rando = jumble(str);
  //  document.getElementById ("txtYousay").innerHTML = "Here's your password: " + rando;
  document.getElementById ("txtYousay").innerHTML = "Here's your password: " + str;

}

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

function jumble(s) 
{
  if (s.length == 1){
    return s;
  }
  // source of shuffle subroutine: https://www.codespeedy.com/shuffle-characters-of-a-string-in-javascript/
  // len = str.length - 35;
  var arr = s.split('');           // Convert String to array
  var n = arr.length-35;              // Length of the array
  // console.log(n);
  // console.log(s);
  for(var i=0 ; i<n-1 ; ++i) {
    var j = getRandomInt(n);       // Get random of [0, n-1]
    
    var temp = arr[i];             // Swap arr[i] and arr[j]
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  s = arr.join('');                // Convert Array to string
  return s;                        // Return shuffled string
}
//   for(var i = len - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var tmp = str[i];
//     str[i] = str[j];
//     str[j] = tmp;
// }
  // for (var i = 0; i < (len - 1); i++) 
  // {
  //     var a = Math.floor(Math.random() * (i + 1) );
  //     var t = str[a];
  //     str[i] = str[a];
  //     str[a] = t;

function errorHandler(statusCode){
 console.log("failed with status", status);
}



function GetXmlHttpObject()
{
   // Create an XMLHttpRequest object?
	
   if (window.XMLHttpRequest)
   {  // code for IE7+, Firefox, Chrome, Opera, Safari
      return new XMLHttpRequest();
   }
   if (window.ActiveXObject)
   { // code for IE6, IE5
     return new ActiveXObject ("Microsoft.XMLHTTP");
   }
   return null;
}
