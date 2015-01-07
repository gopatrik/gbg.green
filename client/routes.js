Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', function () {
  this.render('voteScreen', {
  });
});

Router.route('/map', function () {
  this.render('map', {});
}, {name:"map"});