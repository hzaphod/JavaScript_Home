$(document).ready(function () {
  $("h1").click(function () {
    alert("This is a header.");
  });

  $("p").click(function () {
    alert("This is a paragraph.");
  });

  $("img").click(function () {
    alert("This is an image.");
  });

  $("h2").click(function () {
    alert("This is an h2 header.");
  });

  $("ul").dblclick(function () {
    alert("This is an unordered list.");
  });
});
