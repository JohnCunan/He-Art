//introduction no ready function
// made by Paul Salcedo
//Description Always Handsome
window.addEventListener("scroll", function(){


	let scrollShow = document.getElementById("back_to_top");

	scrollShow.classList.toggle("active", window.scrollY > 30);


});	

window.addEventListener("scroll", content2);
content2();
function content2(){

	let active2 = document.querySelector(".col-6");
	active2.classList.toggle("active2", window.scrollY> 500);


	let active3 = document.querySelector(".Twojoints-mafia");
	active3.classList.toggle("active3", window.scrollY> 500);
	active3.style.transition = "2s";
}

let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener('load', ()=>{ //when browser reloaded function
	setTimeout(()=>{
			logoSpan.forEach((span, idx)=>{ // each span animation transition in
				setTimeout(()=>{
					span.classList.add('active');
				}, (idx + 1) * 400)
			})
			setTimeout(() => {
				logoSpan.forEach((span, idx)=>{ // each span animation transition out
					setTimeout(()=>{
						span.classList.remove('active');
						span.classList.add('fade');

					}, (idx + 1) *100);
				})
			},2000);

			setTimeout(() => { // black background transition out
				intro.style.top = '-100vh';
			}, 2300);
	})

})

function isChecked(){
	if(document.querySelector(".check-box").checked==true){
		document.querySelector(".nav-toggle").classList.toggle("navActive");
		document.querySelector(".check").style.background = "#fff";
	}else{
		document.querySelector(".nav-toggle").classList.remove("navActive");
		document.querySelector(".check").style.background = "#000";
	}
}
