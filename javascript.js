
		var slideIndex = 0;
		
		carousel();
		function carousel() {
		var j;
		var x = document.getElementsByClassName("myslide");
		for (j = 0; j < x.length; j++) {
			x[j].style.display = "none";
		}
		slideIndex++;
		if (slideIndex > x.length) {slideIndex = 1}
		x[slideIndex-1].style.display = "block";
		setTimeout(carousel, 15000);
		}

		
		function plusDivs(n) {
		  showDivs(slideIndex += n);
		}
		
		function showDivs(n) {
		  var i;
		  var x = document.getElementsByClassName("myslide");
		  if (n > x.length) {slideIndex = 1}
		  if (n < 1) {slideIndex = x.length}
		  for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		  }
		  x[slideIndex-1].style.display = "block";  
		  
		}

		//read more or read less

		// function myFunction() {
		// 	var dots = document.getElementById("dots");
		// 	var moreText = document.getElementById("more");
		// 	var btnText = document.getElementById("myBtn");
		// 	var updateButton = document.getElementById("updateButton");
		// 	var deleteButton = document.getElementById("deleteButton");
		  
		// 	if (dots.style.display === "none") {
		// 	  dots.style.display = "inline";
		// 	  btnText.innerHTML = "Read more"; 
		// 	  moreText.style.display = "none";
		// 	  updateButton.style.display = "none";
		// 	  deleteButton.style.display = "none";
		// 	} else {
		// 	  dots.style.display = "none";
		// 	  btnText.innerHTML = "Read less"; 
		// 	  moreText.style.display = "inline";
		// 	  updateButton.style.display = "inline"
		// 	  deleteButton.style.display = "inline"
		// 	}
		//   }


		// model

		// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//model 2

		// Get the modal
		var modal = document.getElementById("myModal1");

		// Get the button that opens the modal
		var btn = document.getElementById("myBtn1");
		
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
		
		// When the user clicks the button, open the modal 
		btn.onclick = function() {
		  modal.style.display = "block";
		}
		
		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		  modal.style.display = "none";
		}
		
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal) {
			modal.style.display = "none";
		  }
		}


		//model 3

		//model 2

		// Get the modal
		var modal = document.getElementById("myModal2");

		// Get the button that opens the modal
		var btn = document.getElementById("myBtn2");
		
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
		
		// When the user clicks the button, open the modal 
		btn.onclick = function() {
		  modal.style.display = "block";
		}
		
		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		  modal.style.display = "none";
		}
		
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal) {
			modal.style.display = "none";
		  }
		}


		//model 4

		// Get the modal
		var modal = document.getElementById("myModal3");

		// Get the button that opens the modal
		var btn = document.getElementById("myBtn3");
		
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
		
		// When the user clicks the button, open the modal 
		btn.onclick = function() {
		  modal.style.display = "block";
		}
		
		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		  modal.style.display = "none";
		}
		
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal) {
			modal.style.display = "none";
		  }
		}

		//model 5

		// Get the modal
		var modal = document.getElementById("myModal4");

		// Get the button that opens the modal
		var btn = document.getElementById("myBtn4");
		
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
		
		// When the user clicks the button, open the modal 
		btn.onclick = function() {
		  modal.style.display = "block";
		}
		
		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		  modal.style.display = "none";
		}
		
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal) {
			modal.style.display = "none";
		  }
		}

		//model 6

		// Get the modal
		var modal = document.getElementById("myModal5");

		// Get the button that opens the modal
		var btn = document.getElementById("myBtn5");
		
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
		
		// When the user clicks the button, open the modal 
		btn.onclick = function() {
		  modal.style.display = "block";
		}
		
		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		  modal.style.display = "none";
		}
		
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal) {
			modal.style.display = "none";
		  }
		}