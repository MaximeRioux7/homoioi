//** 
( function() {
	document.addEventListener("click", function(){
		let NavMenu = document.getElementById("menu-ul");
		let BtnMenu = document.getElementById("btn-menu");

		window.onclick = function(event) {
			if(event.target != NavMenu && event.target !=BtnMenu){
				if (BtnMenu.checked == true) {
					NavMenu.style.transform = "translate(-100%, 0)";
					BtnMenu.checked = false;									
				}
			}			
		}	
	});		
}() );
//*/
