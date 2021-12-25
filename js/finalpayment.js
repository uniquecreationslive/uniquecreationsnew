//document.querySelector("#payment_btn").addEventListener("click",razorpay);
var razkey="rzp_live_DASRJZO07nKORA";


function razorpay()
{
	console.log("success");
	  var product_name=[];
	  var product_code=[];
	  var product_price=[];
	  var product_qty=[];
	  var total_product_price=[];
	  var purchase_data = {p_name:product_name,p_code:product_code,p_price:product_price,p_qty:product_qty,t_p_price:total_product_price,t_price:total_price};

	  var elementss=document.querySelectorAll("td");
	  var total_price=document.querySelector("#ptotalvalue").innerText;
	  var total_price_int=Number(total_price)*100;

	if (elementss.length !=0 )
	{
	   for (var i=0;i<elementss.length;i=i+6){

	   product_name.push(elementss[0+i].innerText);
	   product_code.push(elementss[1+i].innerText);
	   product_price.push(elementss[2+i].innerText);
	   product_qty.push(elementss[3+i].innerText);
	   total_product_price.push(elementss[4+i].innerText);
	}

	customer_name=document.getElementById("username").value;
	customer_email=document.getElementById("email").value;
	customer_phone=document.getElementById("phone").value;

	}

	//alert(purchase_data.t_price);

	sendformdetails(purchase_data);
	
	 var options = {
		"key": razkey, // Enter the Key ID generated from the Dashboard
		"amount": total_price_int.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
		"currency": "INR",
		"name": "Uniquecreations",
		"description": "Product purchase",
		"image": "https://uniquecreationslive.com/images/logo/logo.png",
		"handler": function (response)
		{
		if (typeof response.razorpay_payment_id == 'undefined' ||  response.razorpay_payment_id < 1) 
		{location.replace("https://uniquecreationslive.com/Error.html")}
		else{location.replace("https://uniquecreationslive.com/OrderConfirmation.html")}
		},		
		"prefill": {
			"name": customer_name,
			"email": customer_email,
			"contact": customer_phone
		},
		"notes": {
			"address": "Uniquecreation"
		},
		"theme": {
			"color": "#3399cc"
		}
	};
	var rzp1 = new Razorpay(options);

		rzp1.open();
		//e.preventDefault();
		
	
}