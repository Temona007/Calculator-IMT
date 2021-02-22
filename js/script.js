
calculate_property.onclick = function () {


	var IMT_Payable;
	var Stamp_Duty;
	var Total_Payable;

	var initial_property_price_test = document.getElementById('intl_property_price').value;                                                                                // find property price
	var property_location = document.querySelector('input[name = select-location]:checked').value;   // checked location
	var island_property_type_taxs = document.querySelector('input[name = select-type-island]:checked').value;      // checked property type on Island
	var continent_property_type_taxs = document.querySelector('input[name = select-type-continent]:checked').value;      // checked property type on Island

	var ipp = initial_property_price_test.replace(/,/g, '');
	var ipp2 = ipp.replace("€", "");
	var	initial_property_price = ipp2 * 1;


	if ( island_property_type_taxs == 0.0375 ) {   // FIRST ISLAND
		if (initial_property_price < 115508.75) {
			 var per = 0;
			 var relief = 0;
			 island_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		} 
		else if ( initial_property_price < 158003.75) {
			var per = 0.02;
			var relief = 2310.18 ;
			island_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}
		else if ( initial_property_price < 215435) {
			var per = 0.05;
			var relief = 7050.29;
			island_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}
		else if ( initial_property_price < 359016.25) {
			var per = 0.07;
			var relief = 11358.99;
			island_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}
		else if ( initial_property_price < 717903.75) {
			var per = 0.08;
			var relief = 14949.15;
			island_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}
		else if ( initial_property_price > 717903.75) {
			var per = 0.06;
			var relief = 0;
			island_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}

		document.getElementById('table_0').style.display = 'none';
	    document.getElementById('table_1').style.display = 'none';
	    document.getElementById('table_2').style.display = 'none';
	    document.getElementById('table_3').style.display = 'none';
	    document.getElementById('table_4').style.display = 'table';
	    document.getElementById('table_5').style.display = 'none';

	    document.getElementById('calculation_block').style.display = 'none';
	    document.getElementById('calculation_block_IF').style.display = 'block';
	    document.getElementById('calculation_block_IS').style.display = 'none';
	    document.getElementById('calculation_block_CF').style.display = 'none';
	    document.getElementById('calculation_block_CS').style.display = 'none';
	    document.getElementById('calculation_block_R').style.display = 'none';

	    var PTR;
		
	    var a; // perrecent
		var b; // relief

		if ( initial_property_price < 115508.75) {
			a = 0;
			b = 0;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_IF;
			calculation_block_IF = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR;
			document.getElementById("calculation_block_IF").innerHTML = calculation_block_IF;

	    } else if ( initial_property_price < 158003.75) {
			a = 0.02;
			b = 2310.18;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_IF;
			calculation_block_IF = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR.toFixed(2);
			document.getElementById("calculation_block_IF").innerHTML = calculation_block_IF;

	    } else if ( initial_property_price < 215435) {
			a = 0.05;
			b = 7050.29;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_IF;
			calculation_block_IF = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR.toFixed(2);
			document.getElementById("calculation_block_IF").innerHTML = calculation_block_IF;

	    } else if ( initial_property_price < 359016.25) {
			a = 0.07;
			b = 11358.99;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_IF;
			calculation_block_IF = "Calculation: (€ " + initial_property_price + " x " + c.toFixed(0) + "%) - € " + b + " = € " + PTR.toFixed(2);
			document.getElementById("calculation_block_IF").innerHTML = calculation_block_IF;

	    } else if ( initial_property_price < 717903.75) {
			a = 0.08;
			b = 14949.15;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_IF;
			calculation_block_IF = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR.toFixed(2);
			document.getElementById("calculation_block_IF").innerHTML = calculation_block_IF;

	    } else if ( initial_property_price >= 717903.75) {
			a = 0.06;
			b = 0;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_IF;
			calculation_block_IF = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR;
			document.getElementById("calculation_block_IF").innerHTML = calculation_block_IF;
		}
	} 

	else if ( island_property_type_taxs == 0.0408 ) {  // SECOND ISLAND
		if (initial_property_price < 115508.75) {
			 var per = 0.01;
			 var relief = 0;
			 island_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		} 
		else if ( initial_property_price < 158003.75) {
			var per = 0.02;
			var relief = 1155.09;
			island_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}
		else if ( initial_property_price < 215435) {
			var per = 0.05;
			var relief = 5895.20;
			island_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}
		else if ( initial_property_price < 359016.25) {
			var per = 0.07;
			var relief = 10203.90;
			island_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}
		else if ( initial_property_price < 688545) {
			var per = 0.08;
			var relief = 13794.06;
			island_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}
		else if ( initial_property_price > 688545) {
			var per = 0.06;
			var relief = 0;
			island_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}

		document.getElementById('table_0').style.display = 'none';
	    document.getElementById('table_1').style.display = 'none';
	    document.getElementById('table_2').style.display = 'none';
	    document.getElementById('table_3').style.display = 'none';
	    document.getElementById('table_4').style.display = 'none';
	    document.getElementById('table_5').style.display = 'table';

	    document.getElementById('calculation_block').style.display = 'none';
	    document.getElementById('calculation_block_IF').style.display = 'none';
	    document.getElementById('calculation_block_IS').style.display = 'block';
	    document.getElementById('calculation_block_CF').style.display = 'none';
	    document.getElementById('calculation_block_CS').style.display = 'none';
	    document.getElementById('calculation_block_R').style.display = 'none';

	    var PTR;
		
	    var a; // perrecent
		var b; // relief

		if ( initial_property_price < 115508.75) {
			a = 0.01;
			b = 0;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_IS;
			calculation_block_IS = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR;
			document.getElementById("calculation_block_IS").innerHTML = calculation_block_IS;

	    } else if ( initial_property_price < 158003.75) {
			a = 0.02;
			b = 1155.09;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_IS;
			calculation_block_IS = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR.toFixed(2);
			document.getElementById("calculation_block_IS").innerHTML = calculation_block_IS;

	    } else if ( initial_property_price < 215435) {
			a = 0.05;
			b = 5895.20;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_IS;
			calculation_block_IS = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR.toFixed(2);
			document.getElementById("calculation_block_IS").innerHTML = calculation_block_IS;

	    } else if ( initial_property_price < 359016.25) {
			a = 0.07;
			b = 10203.90;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_IS;
			calculation_block_IS = "Calculation: (€ " + initial_property_price + " x " + c.toFixed(0) + "%) - € " + b + " = € " + PTR.toFixed(2);
			document.getElementById("calculation_block_IS").innerHTML = calculation_block_IS;

	    } else if ( initial_property_price < 688545) {
			a = 0.08;
			b = 13794.06 ;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_IS;
			calculation_block_IS = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR.toFixed(2);
			document.getElementById("calculation_block_IS").innerHTML = calculation_block_IS;

	    } else if ( initial_property_price >= 688545) {
			a = 0.06;
			b = 0;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_IS;
			calculation_block_IS = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR;
			document.getElementById("calculation_block_IS").innerHTML = calculation_block_IS;
		}
	} 

	else if ( island_property_type_taxs == 0.05 ) { // Rustic ISLAND
		island_property_type_taxs = 0.05;

		document.getElementById('table_0').style.display = 'none';
	    document.getElementById('table_1').style.display = 'none';
	    document.getElementById('table_2').style.display = 'none';
	    document.getElementById('table_3').style.display = 'table';
	    document.getElementById('table_4').style.display = 'none';
	    document.getElementById('table_5').style.display = 'none';

	    document.getElementById('calculation_block').style.display = 'none';
	    document.getElementById('calculation_block_IF').style.display = 'none';
	    document.getElementById('calculation_block_IS').style.display = 'none';
	    document.getElementById('calculation_block_CF').style.display = 'none';
	    document.getElementById('calculation_block_CS').style.display = 'none';
	    document.getElementById('calculation_block_R').style.display = 'block';

	    var PTR;
		
	    var a; // perrecent
		var b; // relief

		a = 0.05;
		b = 0;
		c = a * 100;
		var PTR = (initial_property_price * a) - b;
		var calculation_block_R;
		calculation_block_R = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR;
		document.getElementById("calculation_block_R").innerHTML = calculation_block_R;

	}

	else if ( island_property_type_taxs == 1 ) {
		island_property_type_taxs = 1;
	}

	//--------------------------------


	if ( continent_property_type_taxs == 0.0458 ) {   // FIRST CONTENT
		if (initial_property_price < 92407) {
			 var per = 0;
			 var relief = 0;
			 continent_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		} 
		else if ( initial_property_price < 126403) {
			var per = 0.02;
			var relief = 1848.14;
			continent_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}
		else if ( initial_property_price < 172348) {
			var per = 0.05;
			var relief = 5640.23;
			continent_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}
		else if ( initial_property_price < 287213) {
			var per = 0.07;
			var relief = 9087.19;
			continent_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}
		else if ( initial_property_price < 574322) {
			var per = 0.08;
			var relief = 11959.32;
			continent_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}
		else if ( initial_property_price > 574322) {
			var per = 0.06;
			var relief = 0;
			continent_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}

		document.getElementById('table_0').style.display = 'none';
	    document.getElementById('table_1').style.display = 'table';
	    document.getElementById('table_2').style.display = 'none';
	    document.getElementById('table_3').style.display = 'none';
	    document.getElementById('table_4').style.display = 'none';
	    document.getElementById('table_5').style.display = 'none';

	    document.getElementById('calculation_block').style.display = 'none';
	    document.getElementById('calculation_block_IF').style.display = 'none';
	    document.getElementById('calculation_block_IS').style.display = 'none';
	    document.getElementById('calculation_block_CF').style.display = 'block';
	    document.getElementById('calculation_block_CS').style.display = 'none';
	    document.getElementById('calculation_block_R').style.display = 'none';

	    var PTR;
		
	    var a; // perrecent
		var b; // relief

		if ( initial_property_price <= 92407) {
			a = 0;
			b = 0;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_CF;
			calculation_block_CF = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR;
			document.getElementById("calculation_block_CF").innerHTML = calculation_block_CF;

	    } else if ( initial_property_price < 126403 ) {
			a = 0.02;
			b = 1848.14;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_CF;
			calculation_block_CF = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR.toFixed(2);
			document.getElementById("calculation_block_CF").innerHTML = calculation_block_CF;

	    } else if ( initial_property_price < 172348 ) {
			a = 0.05;
			b =   5640.23 ;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_CF;
			calculation_block_CF = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR.toFixed(2);
			document.getElementById("calculation_block_CF").innerHTML = calculation_block_CF;

	    } else if ( initial_property_price < 287213 ) {
			a = 0.07;
			b = 9087.19;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_CF;
			calculation_block_CF = "Calculation: (€ " + initial_property_price + " x " + c.toFixed(0) + "%) - € " + b + " = € " + PTR.toFixed(2);
			document.getElementById("calculation_block_CF").innerHTML = calculation_block_CF;

	    } else if ( initial_property_price < 574322) {
			a = 0.08;
			b = 11959.32;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_CF;
			calculation_block_CF = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR.toFixed(2);
			document.getElementById("calculation_block_CF").innerHTML = calculation_block_CF;

	    } else if ( initial_property_price > 574322 ) {
			a = 0.06;
			b = 0;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_CF;
			calculation_block_CF = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR;
			document.getElementById("calculation_block_CF").innerHTML = calculation_block_CF;
		}
	} 

	else if ( continent_property_type_taxs == 0.0485 ) {  // SECOND CONTENT
		if (initial_property_price < 92407) {
			 var per = 0.01;
			 var relief = 0;
			 continent_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		} 
		else if ( initial_property_price < 126403) {
			var per = 0.02;
			var relief = 924.07;
			continent_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}
		else if ( initial_property_price < 172348) {
			var per = 0.05;
			var relief = 4716.22;
			continent_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}
		else if ( initial_property_price < 287213) {
			var per = 0.07;
			var relief = 8163.09;
			continent_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}
		else if ( initial_property_price < 550836) {
			var per = 0.08;
			var relief = 11035.35;
			continent_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}
		else if ( initial_property_price > 550836) {
			var per = 0.06;
			var relief = 0;
			continent_property_type_taxs = ((initial_property_price * per) - relief) / initial_property_price;
		}

		document.getElementById('table_0').style.display = 'none';
	    document.getElementById('table_1').style.display = 'none';
	    document.getElementById('table_2').style.display = 'table';
	    document.getElementById('table_3').style.display = 'none';
	    document.getElementById('table_4').style.display = 'none';
	    document.getElementById('table_5').style.display = 'none';

	    document.getElementById('calculation_block').style.display = 'none';
	    document.getElementById('calculation_block_IF').style.display = 'none';
	    document.getElementById('calculation_block_IS').style.display = 'none';
	    document.getElementById('calculation_block_CF').style.display = 'none';
	    document.getElementById('calculation_block_CS').style.display = 'block';
	    document.getElementById('calculation_block_R').style.display = 'none';

	    var PTR;
		
	    var a; // perrecent
		var b; // relief

		if ( initial_property_price <= 92407) {
			a = 0.01;
			b = 0;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_CS;
			calculation_block_CS = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR;
			document.getElementById("calculation_block_CS").innerHTML = calculation_block_CS;

	    } else if ( initial_property_price < 126403 ) {
			a = 0.02;
			b = 924.07 ;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_CS;
			calculation_block_CS = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR.toFixed(2);
			document.getElementById("calculation_block_CS").innerHTML = calculation_block_CS;

	    } else if ( initial_property_price < 172348 ) {
			a = 0.05;
			b = 4716.22;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_CS;
			calculation_block_CS = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR.toFixed(2);
			document.getElementById("calculation_block_CS").innerHTML = calculation_block_CS;

	    } else if ( initial_property_price < 287213 ) {
			a = 0.07;
			b = 8163.09;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_CS;
			calculation_block_CS = "Calculation: (€ " + initial_property_price + " x " + c.toFixed(0) + "%) - € " + b + " = € " + PTR.toFixed(2);
			document.getElementById("calculation_block_CS").innerHTML = calculation_block_CS;

	    } else if ( initial_property_price < 550836) {
			a = 0.08;
			b = 11035.35;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_CS;
			calculation_block_CS = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR.toFixed(2);
			document.getElementById("calculation_block_CS").innerHTML = calculation_block_CS;

	    } else if ( initial_property_price >= 550836 ) {
			a = 0.06;
			b = 0;
			c = a * 100;
			var PTR = (initial_property_price * a) - b;
			var calculation_block_CS;
			calculation_block_CS = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR.toFixed(2);
			document.getElementById("calculation_block_CS").innerHTML = calculation_block_CS;
		}
	} 

	else if ( continent_property_type_taxs == 0.05 ) { // RUSTIC CONTINENT
		continent_property_type_taxs = 0.05;

		document.getElementById('table_0').style.display = 'none';
	    document.getElementById('table_1').style.display = 'none';
	    document.getElementById('table_2').style.display = 'none';
	    document.getElementById('table_3').style.display = 'table';
	    document.getElementById('table_4').style.display = 'none';
	    document.getElementById('table_5').style.display = 'none';

	    document.getElementById('calculation_block').style.display = 'none';
	    document.getElementById('calculation_block_IF').style.display = 'none';
	    document.getElementById('calculation_block_IS').style.display = 'none';
	    document.getElementById('calculation_block_CF').style.display = 'none';
	    document.getElementById('calculation_block_CS').style.display = 'none';
	    document.getElementById('calculation_block_R').style.display = 'block'; 

	    var PTR;
		
	    var a; // perrecent
		var b; // relief

		a = 0.05;
		b = 0;
		c = a * 100;
		var PTR = (initial_property_price * a) - b;
		var calculation_block_R;
		calculation_block_R = "Calculation: (€ " + initial_property_price + " x " + c + "%) - € " + b + " = € " + PTR;
		document.getElementById("calculation_block_R").innerHTML = calculation_block_R;

	}

	else if ( continent_property_type_taxs == 1 ) {
		continent_property_type_taxs = 1;
	}

	var property_type_taxs = island_property_type_taxs * continent_property_type_taxs;

	// IMT Payable
	IMT_Payable = initial_property_price * property_type_taxs;
	var IMT_Payable2 = IMT_Payable.toFixed(2);
	var re3 = /(?=\B(?:\d{3})+(?!\d))/g;
	var IMT_Payable_decimal = IMT_Payable2.toString().replace( re3, ',' ).replace('.', '.');
	document.getElementById("result_imt_playable").innerHTML = "€ " + IMT_Payable_decimal;


	// Stamp Duty
	Stamp_Duty = initial_property_price * 0.008;
	var Stamp_Duty2 = Stamp_Duty.toFixed(2);
	var re = /(?=\B(?:\d{3})+(?!\d))/g;
	var Stamp_Duty_decimal = Stamp_Duty2.toString().replace( re, ',' ).replace('.', '.');
	document.getElementById("result_Stamp_Duty_Tax").innerHTML = "€ " + Stamp_Duty_decimal;

   // Total Payable
	Total_Payable = IMT_Payable + Stamp_Duty;
	var Total_Payable2 = Total_Payable.toFixed(2);
	var re2 = /(?=\B(?:\d{3})+(?!\d))/g;
	var Total_Payable_decimal = Total_Payable2.toString().replace( re2, ',' ).replace('.', '.');
	document.getElementById("result_Total_Payable").innerHTML = "€ " + Total_Payable_decimal;

}


function show(str){
    document.getElementById('island-property').style.display = 'block';
    document.getElementById('continent-property').style.display = 'none';
    document.getElementById('hidden-property').style.display = 'none';
}

function show2(sign){
    document.getElementById('island-property').style.display = 'none';
    document.getElementById('continent-property').style.display = 'block';
    document.getElementById('hidden-property').style.display = 'none';
}


// CLEAR button
function show8(str){
	document.getElementById('table_0').style.display = 'table';
    document.getElementById('table_1').style.display = 'none';
    document.getElementById('table_2').style.display = 'none';
    document.getElementById('table_3').style.display = 'none';
    document.getElementById('table_4').style.display = 'none';
    document.getElementById('table_5').style.display = 'none';
}

function ClearFields() {
	document.getElementById("result_imt_playable").innerHTML = "0.00 €";
	document.getElementById("result_Stamp_Duty_Tax").innerHTML = "0.00 €";
	document.getElementById("result_Total_Payable").innerHTML = "0.00 €";
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){
       $('[data-toggle="tooltip"]').click(function () {
          $('[data-toggle="tooltip"]').tooltip("hide");

       });
   });

$('#clear').click(function() {
   location.reload();
});

function activate_islands() {
	document.getElementById("property-null-1").checked = true;
	document.getElementById("property-own-1").checked = false;
	document.getElementById("property-own").checked = true;
}

function activate_continent() {
	document.getElementById("property-null").checked = true;
	document.getElementById("property-own-1").checked = true;
}

// IMAGE BACKGROUND FUNCTIONS

function button_island () {
	if ( document.getElementById('island-location').checked = true ) {
		document.getElementById('button-island').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/island-selected.png')";
		document.getElementById('button-continental').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/continental-normal.png')";

		document.getElementById('button-own-1').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/own-selected.png')";
		document.getElementById('button-second-1').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/second-normal.png')";
		document.getElementById('button-rustic-1').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/rustic-normal.png')";

		// document.getElementById("intl_property_price").focus();
	} 
}

function button_continental () {
	if ( document.getElementById('continent-location').checked = true ) {
		document.getElementById('button-continental').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/continent-selected.png')";
		document.getElementById('button-island').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/island-normal.png')";

		document.getElementById('button-own').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/own-selected.png')";
		document.getElementById('button-second').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/second-normal.png')";
		document.getElementById('button-rustic').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/rustic-normal.png')";

		// document.getElementById("intl_property_price").focus();
	} 
}

function button_own_isl () {
	if ( document.getElementById('property-own').checked = true ) {
		document.getElementById('button-own-1').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/own-selected.png')";
		document.getElementById('button-second-1').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/second-normal.png')";
		document.getElementById('button-rustic-1').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/rustic-normal.png')";

		// document.getElementById("intl_property_price").focus();
	} 
}

function button_second_isl () {
	if ( document.getElementById('property-secondary').checked = true ) {
		document.getElementById('button-own-1').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/own-normal.png')";
		document.getElementById('button-second-1').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/second-selected.png')";
		document.getElementById('button-rustic-1').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/rustic-normal.png')";

		// document.getElementById("intl_property_price").focus();
	} 	
} 

function button_rustic_isl () {
	if ( document.getElementById('property-rustic').checked = true ) {
		document.getElementById('button-own-1').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/own-normal.png')";
		document.getElementById('button-second-1').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/second-normal.png')";
		document.getElementById('button-rustic-1').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/rustic-selected.png')";

		// document.getElementById("intl_property_price").focus();
	} 	
}

function button_own () {
	if ( document.getElementById('property-own-1').checked = true ) {
		document.getElementById('button-own').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/own-selected.png')";
		document.getElementById('button-second').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/second-normal.png')";
		document.getElementById('button-rustic').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/rustic-normal.png')";

		// document.getElementById("intl_property_price").focus();
	} 
}

function button_second () {
	if ( document.getElementById('property-secondary-1').checked = true ) {
		document.getElementById('button-own').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/own-normal.png')";
		document.getElementById('button-second').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/second-selected.png')";
		document.getElementById('button-rustic').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/rustic-normal.png')";

		// document.getElementById("intl_property_price").focus();
	} 	
} 

function button_rustic () {
	if ( document.getElementById('property-rustic-1').checked = true ) {
		document.getElementById('button-own').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/own-normal.png')";
		document.getElementById('button-second').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/second-normal.png')";
		document.getElementById('button-rustic').style.backgroundImage = "url('https:///madcotransportation.com/property-calculator/img/rustic-selected.png')";

		// document.getElementById("intl_property_price").focus();
	} 	
}


// Press Enter and calculate

$('form').submit(function(e){
    e.preventDefault();
}); 

$('form').keypress(function(e) { 
    return e.keyCode != 13;
});

$("#intl_property_price").keypress(function(event) { 
    if (event.keyCode === 13) { 
        $("#calculate_property").click(); 
    } 
});

   


/* REQUIRED

#1
var initial_property_price = document.getElementById('intl_property_price').value;      
if ( initial_property_price < 1 ) {
	document.getElementById('calculate_property').disabled = true;
}
if ( initial_property_price = 1 ) {
	document.getElementById('calculate_property').disabled = false;
}

#2
document.getElementById('calculate_property').onclick = function wtf() {
	var initial_property_price = document.getElementById('intl_property_price').value;      
	if ( initial_property_price < 1 ) {
		document.getElementById('calculate_property').disabled = true;
	}
}

*/  
