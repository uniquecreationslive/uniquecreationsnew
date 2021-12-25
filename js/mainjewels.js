function myFunction() 
	{
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") 
		{
			x.className += " responsive";
		} else 
		{
			x.className = "topnav";
		}
	}

var prodpricelisting = [650,600,850,550,650,550,400,450,800,350,650,1050,550,450,500,500,550,450,350,550,550,750,500];

function navprod1(id1, id2)
{
	document.getElementById(id1).style.display = "block";
	document.getElementById(id2).style.display = "none";
}

function navprod2(id1, id2)
{
	document.getElementById(id1).style.display = "none";
	document.getElementById(id2).style.display = "block";
}

function qtyinc(qtyid,priceid,prodindex)
{
	var qtyvalue = document.getElementById(qtyid).value;
	qtyincrvalue = parseInt(qtyvalue) + 1;
	document.getElementById(qtyid).value = qtyincrvalue;
	
	var valueprice = prodpricelisting[prodindex-1]*qtyincrvalue;
	document.getElementById(priceid).value = valueprice.toString();
}

function qtydec(qtyid,priceid,prodindex)
{
	var qtyvalue = document.getElementById(qtyid).value;
	if(parseInt(qtyvalue) != 1)
	{
		qtyincrvalue = parseInt(qtyvalue) - 1;
		document.getElementById(qtyid).value = qtyincrvalue;
		
		var valueprice = prodpricelisting[prodindex-1]*qtyincrvalue;
		document.getElementById(priceid).value = valueprice.toString();
	}
}


function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


var tempi = 2000;
function addtocart(pname,pcode,pprice,pqty,ptprice)
{
	var table = document.getElementById("cartlist");
	var row = table.insertRow(1);
	row.id = tempi;
	
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	
	var valueprice = prodpricelisting[pprice-1]
	
	cell1.innerHTML = document.getElementById(pname).innerHTML;
	cell2.innerHTML = document.getElementById(pcode).innerHTML;
	cell3.innerHTML = valueprice;
	cell4.innerHTML = document.getElementById(pqty).value;
	cell5.innerHTML = document.getElementById(ptprice).value;
	cell6.innerHTML = "❌";
	var functionname = 'deletecart('+tempi+')';
	cell6.setAttribute('onclick', functionname);
	tempi = tempi + 1;
	console.log(tempi);
}


function deletecart(rowvali)
{
	//document.getElementById("cartlist").deleteRow(document.getElementById(rowvali));
	var rowval = document.getElementById(rowvali);
	rowval.parentNode.removeChild(rowval);
	itemdiff();
}

function itemadd()
{
	var cartqty = document.getElementById("cartquantity").innerHTML;
	document.getElementById("cartquantity").innerHTML = parseInt(cartqty)+1;
	
	pricesumvalue();
	alert("Item Added to cart");
	
}	
function itemdiff()
{
	var cartqty = document.getElementById("cartquantity").innerHTML;
	document.getElementById("cartquantity").innerHTML = parseInt(cartqty)-1;
	pricesumvalue();
}	

function pricesumvalue()
{
	var totalvalue = 0;
	var tempiiter;
	
	var noofrow = document.getElementById("cartlist").rows.length;
	console.log(noofrow);
	
	
	if(noofrow == 1)
	{
		totalvalue = 0;
	}
	else if(noofrow > 1)
	{
		for (iiter = 0; iiter < noofrow-1; iiter++)
		{
			tempiiter = iiter + 1;
			var priceval = document.getElementById("cartlist").rows[tempiiter].cells[4].innerHTML;
			totalvalue = parseInt(totalvalue) + parseInt(priceval);
		}
	}
	
	console.log(totalvalue);
	document.getElementById("ptotalvalue").innerHTML = totalvalue;
}

function openpay()
{
	var totalvalcheck = document.getElementById("ptotalvalue").innerHTML;
	
	if(parseInt(totalvalcheck) > 0)
	{
		document.getElementById("pdetails").style.display = "block";
		document.getElementById("proceedcheckout").disabled = true;
		document.getElementById("proceedcheckout").style.backgroundColor ="grey";
	}
	else
	{
		alert("Purchase some products before Checkout");
	}
}
function checkvalue()
{
	document.getElementById("errorId").style.display = "none";
	var usernameVal = document.getElementById("username").value;
	var emailVal = document.getElementById("email").value;
	var numberVal = document.getElementById("phone").value;
	var addressVal = document.getElementById("address").value;
	console.log(usernameVal);
	console.log(emailVal);
	console.log(numberVal);
	if(usernameVal == "" || emailVal == "" || numberVal == "" || addressVal == "")
		{
			document.getElementById("errorId").style.display = "block";
		}
	else
		{
			document.getElementById("errorId").style.display = "none";
			razorpay();	
		}
}