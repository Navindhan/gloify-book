var main = document.querySelector('.container .main'); 
var get = document.querySelector('.container .main p'); 
var bookStores = document.querySelector('.container .book-stores');
var logsign = document.querySelector('.container .log-sign'); 
var storeDetails = [{'name' : 'Nataraja Book Stores','location' : 'Chidambaram'},
					{'name' : 'Janagiram Book Stores','location' : 'Killai'}];
// a.innerText='Nataraja Book Stores';
window.onload=function(e){
	e.preventDefault();
	setTimeout(function(){
		main.classList.add('front');
	},1000);
	setTimeout(function(){
		get.classList.add('visible');
	},2500);
}

get.addEventListener('click',function(){
	setTimeout(function(){
		main.classList.remove('front');
		bookStores.classList.add('front');
		logsign.classList.add('front');
	},500);
})
// const database=firebase.database();
// var len = database
for(let i=0;i<storeDetails.length;i++){
	var div = document.createElement('div');
	div.className='inner';
	var p1 = document.createElement('p');
	p1.innerText=storeDetails[i].name;
	div.appendChild(p1);
	var p2 = document.createElement('p');
	p2.innerText=storeDetails[i].location;
	div.appendChild(p2);
	bookStores.appendChild(div);
}
logsign.addEventListener('click',function(){
	window.location.href='login.html'
})