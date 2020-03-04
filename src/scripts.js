submitCommentVanilla = () => {
  var comment = document.getElementById("commentTextArea").value;
  var errorMsg;
  if (comment.length > 0) {
    errorMsg = "";
    html =
      '<div class="comment-loop"><div class="comment-card"><div class="row comment-card-row user-row"><div class="comment-user">guest</div></div><div class="row comment-card-row"><div class="comment">' +
      comment +
      "</div></div></div></div>";
    document.getElementById("recentComment").innerHTML =
      html + document.getElementById("recentComment").innerHTML;
    document.getElementById("commentTextArea").value = "";
  } else {
    errorMsg = "Type a comment.";
  }
  document.getElementById("commentError").innerHTML = errorMsg;
};

function isInt(str) {
  var val = parseInt(str);
  return val > 0;
}

function checkPattern(str) {
  // test if str matches the pattern
  var pattern = new RegExp("[a-z]{2,3}[1-9][a-z]{1,3}");
  var match_test = pattern.test(str);
  return match_test;
}

// Four tests:
// 1) Age is an integer
// 2) Major is not an integer
// 3) Major is not missing
// 4) Student number is in proper format
// If any tests doesn't pass, submission is canceled.

function checkRegistration() {
  var error_msg = "";
  var number_error = 0;

  var age = document.getElementById("age");
  if (!isInt(age.value)) {
    number_error++;
    error_msg += "<br/>" + number_error + ". Age must be an integer."; // for innerHTML
    document.getElementById("age").value = age.value;
    document.getElementById("msg_age").innerHTML = "Age must be an integer.";
  } else document.getElementById("msg_age").innerHTML = "";

  var major = document.getElementById("major");
  if (isInt(major.value)) {
    number_error++;
    error_msg += "<br/>" + number_error + ". Use major name, not major number.";
    document.getElementById("major").value = major.value;
    document.getElementById("msg_major").innerHTML =
      "Use major name, not major number.";
  } else if (major.value.length <= 0) {
    number_error++;
    error_msg += "<br/>" + number_error + ". Missing major.";
    document.getElementById("msg_major").innerHTML = "Missing major.";
  } else document.getElementById("msg_major").innerHTML = "";

  var sid = document.getElementById("sid");
  if (sid.value.length < 4 || sid.value.length > 6) {
    // assume UVA computingID  xxx9xxx
    number_error++;
    error_msg +=
      "<br/>" +
      number_error +
      ". Student ID must be 4 to 6 characters and follow the UVA computingID format.";
    document.getElementById("sid").value = sid.value;
    document.getElementById("msg_sid").innerHTML =
      "Student ID must be 4 to 6 characters and follow the UVA computingID format.";
  } else if (!checkPattern(sid.value)) {
    number_error++;
    error_msg +=
      "<br/>" +
      number_error +
      ". Student ID must be in the UVA computingID format.";
    document.getElementById("sid").value = sid.value;
    document.getElementById("msg_sid").innerHTML =
      "Student ID must be 4 to 6 characters and follow the UVA computingID format.";
  } else document.getElementById("msg_sid").innerHTML = "";

  if (number_error > 0) {
    document.getElementById("msg").innerHTML =
      "Please fix the following fields and submit again: " + error_msg;
    return false;
  } // Format looks OK, form can be submitted.
  else return true;
}
