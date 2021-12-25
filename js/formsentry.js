function sendformdetails(productlist)
{
	customer_name_detail = document.getElementById("username").value;
	customer_email_detail = document.getElementById("email").value;
	customer_phone_detail = document.getElementById("phone").value;
	customer_address_detail = document.getElementById("address").value;
	var total_price_detail = document.querySelector("#ptotalvalue").innerText;
	
	var finalproduct_val = 'ProductName | Product Code | Product Price | Quantity | Total Price \n';
	for(formi = 0; formi < productlist.p_name.length; formi++)
	{
		var p_name_val = productlist.p_name[formi];
		var p_code_val = productlist.p_code[formi];
		var p_price_val = productlist.p_price[formi];
		var p_qty_val = productlist.p_qty[formi];
		var t_p_price_val = productlist.t_p_price[formi];
		finalproduct_val = finalproduct_val + p_name_val + ' | ' + p_code_val + ' | ' + p_price_val + ' | ' + p_qty_val + ' | ₹' + t_p_price_val + '\n';
		
	}
	finalproduct_val = finalproduct_val + 'Total Price is | ₹' + total_price_detail;
	console.log(finalproduct_val);
	
	// Get data
	var data = {
	  'entry.553869678': customer_email_detail,
	  'entry.1297809527': customer_name_detail,
	  'entry.463615446': customer_phone_detail,
	  'entry.2010102669': customer_address_detail,
	  'entry.211065904': finalproduct_val
	  //'entry.407126866': $('#form-email').val()
	};

	// Validate form
	var formSuccess = true;

	if (formSuccess) 
	{
	  // Send request
	  $.ajax({
		url: 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSdj2PGuekZF-gaxqJJkQ8rdbElZzfyibppMzxPpUSvJr1RDkw/formResponse',
		type: 'POST',
		crossDomain: true,
		dataType: "xml",
		data: data
	  });
	}

}