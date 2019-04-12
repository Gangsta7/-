var mypitch = document.getElementById('mypitch');
var mypitch1 = document.getElementById('mypitch1');
var mypitch2 = document.getElementById('mypitch2');
var mypitch3 = document.getElementById('mypitch3');
var modal = document.getElementById('modal');
var pitch1 = document.getElementById('pitch1');
var text = document.getElementById('text');

mypitch.onclick = function(){
	modal.style.display = "block";
	pitch1.src = this.src;
	text.innerHTML = this.alt;
}
mypitch1.onclick = function(){
	modal.style.display = "block";
	pitch1.src = this.src;
	text.innerHTML = this.alt;
}
mypitch2.onclick = function(){
	modal.style.display = "block";
	pitch1.src = this.src;
	text.innerHTML = this.alt;
}
mypitch3.onclick = function(){
	modal.style.display = "block";
	pitch1.src = this.src;
	text.innerHTML = this.alt;
}



window.onclick = function(event){
	if(event.target == modal)
		modal.style.display = "none";

}