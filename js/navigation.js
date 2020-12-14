//** 
( function() {
	document.addEventListener("DOMContentLoaded", function(){
		let NavMenu = document.getElementById("menu-ul");
		let BtnMenu = document.getElementById("btn-menu");
		let Checked = false;
		
		window.onclick = function(event) {
			
			if (event.target == BtnMenu && !Checked){
				console.log("Input checked");
				NavMenu.style.transform = "none";
				Checked = true;
			}			
			
						
			else if((event.target != NavMenu || event.target == BtnMenu) && Checked){
					console.log("Input unchecked");
					NavMenu.style.transform = "translate(-100%, 0)";
					BtnMenu.checked = false;									
					Checked = false;
			}						
		}
	});
	
}() );
//*/
