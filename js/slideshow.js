function img1slide()
{
	document.getElementById("newarr1").style.display = "block";
	document.getElementById("newarr2").style.display = "none";
	document.getElementById("newarr3").style.display = "none";
	myVar1 = setTimeout(img2slide, 5000);
}

function img2slide()
{
	document.getElementById("newarr1").style.display = "none";
	document.getElementById("newarr2").style.display = "block";
	document.getElementById("newarr3").style.display = "none";
	myVar2 = setTimeout(img3slide, 5000);
}

function img3slide()
{
	document.getElementById("newarr1").style.display = "none";
	document.getElementById("newarr2").style.display = "none";
	document.getElementById("newarr3").style.display = "block";
	myVar3 = setTimeout(img1slide, 5000);
}