Router.route("/", function() {
  this.render("main");
  $("head").append("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.3.0/css/material-fullpalette.css'></script>");
});