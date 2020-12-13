/** 
( function() {
	document.addEventListener("click", function(){
		let NavMenu = document.getElementById("menu-ul");
		let BtnMenu = document.getElementById("btn-menu");
		
		window.onclick = function(event) {
			if(event.target == BtnMenu) {
				console.log("Input unchecked");
				NavMenu.style.transform = "none";
			}
			
			else if(event.target != NavMenu && event.target != BtnMenu){
				if (BtnMenu.checked == true) {
					console.log("Input checked");
					NavMenu.style.transform = "translate(-100%, 0)";
					BtnMenu.checked = false;									
				}
			}
						
		}	
	});
}() );
//*/
