Router.configure({
   layoutTemplate: 'layout',
   loadingTemplate: 'loading',
});

Router.route('/', {
  name: 'root'
}, function () {
  if (this.ready())
  this.render('root');
});
