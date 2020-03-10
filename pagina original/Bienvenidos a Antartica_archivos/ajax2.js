
$('#b').click(function(){
        var book = $('#book').val();
        var user = $('#user').val();
   $.ajax({
     type: 'GET',
     url:'/antartica/js/js/favoritos.jsp',
     data: 'book='+book+'&user='+user,
     success: function(data){
      $('#a').html(data);
     }
     }).error(function(){
         $('#a').html(data);
     });
});

 
$('#deploy').click(function(){
 var book = $('#bookCs').val();
 $.ajax({
     type:'GET',
     url:'/antartica/js/js/comentarios.jsp',
     data:'libro='+book,
     success: function(data){
         $('#comments').html(data);
     }
 }).error(function(){
     $('#comments').html(data);
 });
});

$('#11').click(function(){
var book = $('#bookR').val();
var user = $('#userR').val();
 $.ajax({
     type:'GET',
     url:'/antartica/js/js/ranking.jsp',
     data:'book='+book+'&user='+user+'&score=1',
     success: function(data){
         $('#thanks').html(data);
     }
 }).error(function(){
     $('#thanks').html(data);
 });
});
$('#12').click(function(){
var book = $('#bookR').val();
var user = $('#userR').val();
 $.ajax({
     type:'GET',
     url:'/antartica/js/js/ranking.jsp',
     data:'book='+book+'&user='+user+'&score=2',
     success: function(data){
         $('#thanks').html(data);
     }
 }).error(function(){
     $('#thanks').html(data);
 });
});
$('#13').click(function(){
var book = $('#bookR').val();
var user = $('#userR').val();
 $.ajax({
     type:'GET',
     url:'/antartica/js/js/ranking.jsp',
     data:'book='+book+'&user='+user+'&score=3',
     success: function(data){
         $('#thanks').html(data);
     }
 }).error(function(){
     $('#thanks').html(data);
 });
});
$('#14').click(function(){
var book = $('#bookR').val();
var user = $('#userR').val();
 $.ajax({
     type:'GET',
     url:'/antartica/js/js/ranking.jsp',
     data:'book='+book+'&user='+user+'&score=4',
     success: function(data){
         $('#thanks').html(data);
     }
 }).error(function(){
     $('#thanks').html(data);
 });
});
$('#15').click(function(){
var book = $('#bookR').val();
var user = $('#userR').val();
 $.ajax({
     type:'GET',
     url:'/antartica/js/js/ranking.jsp',
     data:'book='+book+'&user='+user+'&score=5',
     success: function(data){
         $('#thanks').html(data);
     }
 }).error(function(){
     $('#thanks').html(data);
 });
});
$('#categoria').change(function(){
var cat = $('#categoria').val();
 $.ajax({
     type:'GET',
     url:'/antartica/js/js/categorias.jsp',
     data:'cat='+cat,
     success: function(data){
         $('#alerta').html(data);
     }
 }).error(function(){
     $('#alerta').html(data);
 });
});
