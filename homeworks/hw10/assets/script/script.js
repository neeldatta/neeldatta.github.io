

function hideoutfits() {
	let outfits = document.getElementsByClassName("outfit");
	for (let i = 0; i < outfits.length; i++) {
			outfits[i].style.display = "none";
	}
}

//hideoutfits();

// s1 outfit
let s1 = document.getElementById("s1");/* get #s1 outfit */


s1.onclick = function() {
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
    let bod = document.getElementById("body");
	bod.style.display = "none";
	hideoutfits();
	let out1 = document.getElementById("o1");
	out1.style.display = "block";
}

// s2 outfit
/* get #s2 outfit */
/* repeat process */
let s2 = document.getElementById("s2");
s2.onclick = function() {
	let bod = document.getElementById("body")
	bod.style.display = "none";
	hideoutfits();
	let out2 = document.getElementById("o2");
	out2.style.display = "block";

}

// s3 outfit
/* get #s3 outfit */
/* repeat process */
let s3 = document.getElementById("s3");
s3.onclick = function() {
	let bod = document.getElementById("body")
	bod.style.display = "none";
	hideoutfits();
	let out3 = document.getElementById("o3")
	out3.style.display = "block";

};

// s4 outfit
/* get #s4 outfit */
/* repeat process */
let s4 = document.getElementById("s4");
s4.onclick = function() {
	let bod = document.getElementById("body")
	bod.style.display = "none";
	hideoutfits();
	let out4 = document.getElementById("o4");
	out4.style.display = "block";

}

// s5 outfit
/* get #s5 outfit */
/* repeat process */
let s5 = document.getElementById("s5");
s5.onclick = function() {
	let bod = document.getElementById("body")
	bod.style.display = "none";
	hideoutfits();
	let out5 = document.getElementById("o5");
	out5.style.display = "block";

}

// strip outfit
let strip = document.getElementById("strip-button"); /* get #strip-button */
strip.onclick = function() {
	/* call the function you created to hide all the outfits */
	/* show #body */
	hideoutfits();
	let bod = document.getElementById("body");
	bod.style.display = "block";
}