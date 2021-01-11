cost=120;
er=0;
function fu1() 
{
	
	if 
		(
			(document.getElementById("time").value >= '10:00')&& 
			(document.getElementById("time").value < '12:00')
			) 
		{
			cost=cost;
		}
	else if 
		(
			(document.getElementById("time").value >= '12:00')&& 
			(document.getElementById("time").value <= '14:59')
		) 
		{
			cost=cost+150;
		}
	else if 
		(
			(document.getElementById("time").value >= '15:00')&&
			(document.getElementById("time").value <= '17:59')
		) 
		{
			cost=cost+250;
		}
	else if 
		(
			(document.getElementById("time").value >= '18:00')&& 
			(document.getElementById("time").value <= '23:59')
		)
		{
			cost=cost+200; 
		}
	else if 
		(
			(document.getElementById("time").value >= '00:00')&&
			(document.getElementById("time").value <= '03:59')
		) 
	{
		(document.getElementById("cost").value = cost + " ₽")
	}
	else{
			er=1;
			cost=0;
			alert("В это время кинотеатр не работает");
		}

}

function fu2()
{
	if 
		(
			(document.getElementById("filmrow").value.substring(0,2) == '1-')|| 
			(document.getElementById("filmrow").value.substring(0,2) == '2-')||
			(document.getElementById("filmrow").value.substring(0,2) == '3-')
		) 
		{
			cost=cost;	
		}
	else if 
		(
			(document.getElementById("filmrow").value.substring(0,2) == '4-')|| 
			(document.getElementById("filmrow").value.substring(0,2) == '5-')||
			(document.getElementById("filmrow").value.substring(0,2) == '6-')
		) 
		{
			cost=cost+100;
		}
	else if 
		(
			(document.getElementById("filmrow").value.substring(0,2) == '7-')|| 
			(document.getElementById("filmrow").value.substring(0,2) == '8-')||
			(document.getElementById("filmrow").value.substring(0,2) == '9-')
		) 
		{
			cost=cost+150;
		}
	else if 
		(
			(document.getElementById("filmrow").value.substring(0,2) == '10')|| 
			(document.getElementById("filmrow").value.substring(0,2) == '11')
		) 
		{
			cost=cost+200;
		}
	else
		{
			er=1;
			cost=0;
			alert("Данные введены неправильно");
		}
}

function fu3()
{
	if  
		(
			(document.getElementById("filmplace").value.substring(0,2) == '1-')||
			(document.getElementById("filmplace").value.substring(0,2) == '2-')||
			(document.getElementById("filmplace").value.substring(0,2) == '3-')||
			(document.getElementById("filmplace").value.substring(0,2) == '4-')||
			(document.getElementById("filmplace").value.substring(0,2) == '5-')||
			(document.getElementById("filmplace").value.substring(0,2) == '26')||
			(document.getElementById("filmplace").value.substring(0,2) == '27')||
			(document.getElementById("filmplace").value.substring(0,2) == '28')||
			(document.getElementById("filmplace").value.substring(0,2) == '29')||
			(document.getElementById("filmplace").value.substring(0,2) == '30')
		) 

		{	
		}
	else if 
		(
			(document.getElementById("filmplace").value.substring(0,2) == '6-')||
			(document.getElementById("filmplace").value.substring(0,2) == '7-')||
			(document.getElementById("filmplace").value.substring(0,2) == '8-')||
			(document.getElementById("filmplace").value.substring(0,2) == '9-')||
			(document.getElementById("filmplace").value.substring(0,2) == '22')||
			(document.getElementById("filmplace").value.substring(0,2) == '23')||
			(document.getElementById("filmplace").value.substring(0,2) == '24')||
			(document.getElementById("filmplace").value.substring(0,2) == '25')
		)

		{
			cost=cost+50;
		}
	else if 
		(
			(document.getElementById("filmplace").value.substring(0,2) == '10')|| 
			(document.getElementById("filmplace").value.substring(0,2) == '11')||
			(document.getElementById("filmplace").value.substring(0,2) == '12')||
			(document.getElementById("filmplace").value.substring(0,2) == '13')|| 
			(document.getElementById("filmplace").value.substring(0,2) == '14')||
			(document.getElementById("filmplace").value.substring(0,2) == '15')||
			(document.getElementById("filmplace").value.substring(0,2) == '16')|| 
			(document.getElementById("filmplace").value.substring(0,2) == '17')||
			(document.getElementById("filmplace").value.substring(0,2) == '18')||
			(document.getElementById("filmplace").value.substring(0,2) == '19')|| 
			(document.getElementById("filmplace").value.substring(0,2) == '20')||
			(document.getElementById("filmplace").value.substring(0,2) == '21')
		)

		{
			cost=cost+100;
		}
	else
		{
			er=1;
			cost=0;
			alert("Данные введены неправильно");
		}
}


function costfun() 
{
	if 
	((document.getElementById("inpfilm").value != '') && (document.getElementById("inpcinemas").value != '') && (document.getElementById("date").value != '') && (document.getElementById("time").value != '') && (document.getElementById("filmrow").value != '') && (document.getElementById("filmplace").value != '')) 
	{
		fu1();
		fu2();
		fu3();
		(document.getElementById("cost").value = cost + " ₽");
		cost=120;

	}
	else
	{
		(document.getElementById("cost").value = "");
		(document.getElementById('alertobl').style.visibility = "visible");
		(document.getElementById('alertobl').style.opacity = "0.8");
			
	}
	if(er==1)
	{
		(document.getElementById("cost").value = "");
		er=0;
	}
}


function alerthide(){
	(document.getElementById('alertobl').style.visibility = "hidden");
	(document.getElementById('alertobl').style.opacity = "0");
}

function delete_show1() {
if (document.getElementById('delete_record1').style.width == "99%")
	{
		(document.getElementById('delete_record1').style.width = "32.7%");
		(document.getElementById('delete_record_forms1').style.height = "0");
		(document.getElementById('delete_record_forms1').style.opacity = "0");
		(document.getElementById('delete_record_forms1').style.visibility = "hidden");
		(document.getElementById('add_record1').style.opacity = "1");
		(document.getElementById('add_record1').style.position = "relative");
		(document.getElementById('add_record1').style.visibility = "visible");
		(document.getElementById('edit_record1').style.opacity = "1");
		(document.getElementById('edit_record1').style.position = "relative");
		(document.getElementById('edit_record1').style.visibility = "visible");

	}
else
	{	
		(document.getElementById('delete_record1').style.width = "99%");
		(document.getElementById('delete_record_forms1').style.height = "auto");
		(document.getElementById('delete_record_forms1').style.opacity = "1");
		(document.getElementById('delete_record_forms1').style.visibility = "visible");
		(document.getElementById('add_record1').style.opacity = "0");
		(document.getElementById('add_record1').style.visibility = "hidden");
		(document.getElementById('add_record1').style.position = "absolute");
		(document.getElementById('edit_record1').style.opacity = "0");
		(document.getElementById('edit_record1').style.visibility = "hidden");
		(document.getElementById('edit_record1').style.position = "absolute");
		
	}
}

function edit_show1() {
if (document.getElementById('edit_record1').style.width == "99%")
	{
		(document.getElementById('edit_record1').style.width = "32.7%");
		(document.getElementById('edit_record_forms1').style.height = "0");
		(document.getElementById('edit_record_forms1').style.opacity = "0");
		(document.getElementById('edit_record_forms1').style.visibility = "hidden");
		(document.getElementById('add_record1').style.opacity = "1");
		(document.getElementById('add_record1').style.position = "relative");
		(document.getElementById('add_record1').style.visibility = "visible");
		(document.getElementById('delete_record1').style.opacity = "1");
		(document.getElementById('delete_record1').style.position = "relative");
		(document.getElementById('delete_record1').style.visibility = "visible");

	}
else
	{	
		(document.getElementById('edit_record1').style.width = "99%");
		(document.getElementById('edit_record_forms1').style.height = "auto");
		(document.getElementById('edit_record_forms1').style.opacity = "1");
		(document.getElementById('edit_record_forms1').style.visibility = "visible");
		(document.getElementById('add_record1').style.opacity = "0");
		(document.getElementById('add_record1').style.visibility = "hidden");
		(document.getElementById('add_record1').style.position = "absolute");
		(document.getElementById('delete_record1').style.opacity = "0");
		(document.getElementById('delete_record1').style.visibility = "hidden");
		(document.getElementById('delete_record1').style.position = "absolute");
		
	}
}
function add_show1() {
if (document.getElementById('add_record1').style.width == "99%")
	{
		(document.getElementById('add_record1').style.width = "32.7%");
		(document.getElementById('add_record_forms1').style.height = "0");
		(document.getElementById('add_record_forms1').style.opacity = "0");
		(document.getElementById('add_record_forms1').style.visibility = "hidden");
		(document.getElementById('edit_record1').style.opacity = "1");
		(document.getElementById('edit_record1').style.position = "relative");
		(document.getElementById('edit_record1').style.visibility = "visible");
		(document.getElementById('delete_record1').style.opacity = "1");
		(document.getElementById('delete_record1').style.position = "relative");
		(document.getElementById('delete_record1').style.visibility = "visible");
	}
else
	{	
		(document.getElementById('add_record1').style.width = "99%");
		(document.getElementById('add_record_forms1').style.height = "auto");
		(document.getElementById('add_record_forms1').style.opacity = "1");
		(document.getElementById('add_record_forms1').style.visibility = "visible");
		(document.getElementById('edit_record1').style.opacity = "0");
		(document.getElementById('edit_record1').style.visibility = "hidden");
		(document.getElementById('edit_record1').style.position = "absolute");
		(document.getElementById('delete_record1').style.opacity = "0");
		(document.getElementById('delete_record1').style.visibility = "hidden");
		(document.getElementById('delete_record1').style.position = "absolute");
	}
}
function delete_show2() {
if (document.getElementById('delete_record2').style.width == "99%")
	{
		(document.getElementById('delete_record2').style.width = "32.7%");
		(document.getElementById('delete_record_forms2').style.height = "0");
		(document.getElementById('delete_record_forms2').style.opacity = "0");
		(document.getElementById('delete_record_forms2').style.visibility = "hidden");
		(document.getElementById('add_record2').style.opacity = "1");
		(document.getElementById('add_record2').style.position = "relative");
		(document.getElementById('add_record2').style.visibility = "visible");
		(document.getElementById('edit_record2').style.opacity = "1");
		(document.getElementById('edit_record2').style.position = "relative");
		(document.getElementById('edit_record2').style.visibility = "visible");

	}
else
	{	
		(document.getElementById('delete_record2').style.width = "99%");
		(document.getElementById('delete_record_forms2').style.height = "auto");
		(document.getElementById('delete_record_forms2').style.opacity = "1");
		(document.getElementById('delete_record_forms2').style.visibility = "visible");
		(document.getElementById('add_record2').style.opacity = "0");
		(document.getElementById('add_record2').style.visibility = "hidden");
		(document.getElementById('add_record2').style.position = "absolute");
		(document.getElementById('edit_record2').style.opacity = "0");
		(document.getElementById('edit_record2').style.visibility = "hidden");
		(document.getElementById('edit_record2').style.position = "absolute");
		
	}
}
function edit_show2() {
if (document.getElementById('edit_record2').style.width == "99%")
	{
		(document.getElementById('edit_record2').style.width = "32.7%");
		(document.getElementById('edit_record_forms2').style.height = "0");
		(document.getElementById('edit_record_forms2').style.opacity = "0");
		(document.getElementById('edit_record_forms2').style.visibility = "hidden");
		(document.getElementById('add_record2').style.opacity = "1");
		(document.getElementById('add_record2').style.position = "relative");
		(document.getElementById('add_record2').style.visibility = "visible");
		(document.getElementById('delete_record2').style.opacity = "1");
		(document.getElementById('delete_record2').style.position = "relative");
		(document.getElementById('delete_record2').style.visibility = "visible");
	}
else
	{	
		(document.getElementById('edit_record2').style.width = "99%");
		(document.getElementById('edit_record_forms2').style.height = "auto");
		(document.getElementById('edit_record_forms2').style.opacity = "1");
		(document.getElementById('edit_record_forms2').style.visibility = "visible");
		(document.getElementById('add_record2').style.opacity = "0");
		(document.getElementById('add_record2').style.visibility = "hidden");
		(document.getElementById('add_record2').style.position = "absolute");
		(document.getElementById('delete_record2').style.opacity = "0");
		(document.getElementById('delete_record2').style.visibility = "hidden");
		(document.getElementById('delete_record2').style.position = "absolute");
	}
}
function add_show2() {
if (document.getElementById('add_record2').style.width == "99%")
	{
		
		(document.getElementById('add_record2').style.width = "32.7%");
		(document.getElementById('add_record_forms2').style.height = "0");
		(document.getElementById('add_record_forms2').style.opacity = "0");
		(document.getElementById('add_record_forms2').style.visibility = "hidden");
		(document.getElementById('edit_record2').style.opacity = "1");
		(document.getElementById('edit_record2').style.position = "relative");
		(document.getElementById('edit_record2').style.visibility = "visible");
		(document.getElementById('delete_record2').style.opacity = "1");
		(document.getElementById('delete_record2').style.position = "relative");
		(document.getElementById('delete_record2').style.visibility = "visible");
	}
else
	{	
		(document.getElementById('add_record2').style.width = "99%");
		(document.getElementById('add_record_forms2').style.height = "auto");
		(document.getElementById('add_record_forms2').style.opacity = "1");
		(document.getElementById('add_record_forms2').style.visibility = "visible");
		(document.getElementById('edit_record2').style.opacity = "0");
		(document.getElementById('edit_record2').style.visibility = "hidden");
		(document.getElementById('edit_record2').style.position = "absolute");
		(document.getElementById('delete_record2').style.opacity = "0");
		(document.getElementById('delete_record2').style.visibility = "hidden");
		(document.getElementById('delete_record2').style.position = "absolute");
		
	}
}
function delete_show3() {
if (document.getElementById('delete_record3').style.width == "99%")
	{
		(document.getElementById('delete_record3').style.width = "32.7%");
		(document.getElementById('delete_record_forms3').style.height = "0");
		(document.getElementById('delete_record_forms3').style.opacity = "0");
		(document.getElementById('delete_record_forms3').style.visibility = "hidden");
		(document.getElementById('add_record3').style.opacity = "1");
		(document.getElementById('add_record3').style.position = "relative");
		(document.getElementById('add_record3').style.visibility = "visible");
		(document.getElementById('edit_record3').style.opacity = "1");
		(document.getElementById('edit_record3').style.position = "relative");
		(document.getElementById('edit_record3').style.visibility = "visible");

	}
else
	{	
		(document.getElementById('delete_record3').style.width = "99%");
		(document.getElementById('delete_record_forms3').style.height = "auto");
		(document.getElementById('delete_record_forms3').style.opacity = "1");
		(document.getElementById('delete_record_forms3').style.visibility = "visible");
		(document.getElementById('add_record3').style.opacity = "0");
		(document.getElementById('add_record3').style.visibility = "hidden");
		(document.getElementById('add_record3').style.position = "absolute");
		(document.getElementById('edit_record3').style.opacity = "0");
		(document.getElementById('edit_record3').style.visibility = "hidden");
		(document.getElementById('edit_record3').style.position = "absolute");
		
	}
}
function edit_show3() {
if (document.getElementById('edit_record3').style.width == "99%")
	{
		
		(document.getElementById('edit_record3').style.width = "32.7%");
		(document.getElementById('edit_record_forms3').style.height = "0");
		(document.getElementById('edit_record_forms3').style.opacity = "0");
		(document.getElementById('edit_record_forms3').style.visibility = "hidden");
		(document.getElementById('add_record3').style.opacity = "1");
		(document.getElementById('add_record3').style.position = "relative");
		(document.getElementById('add_record3').style.visibility = "visible");
		(document.getElementById('delete_record3').style.opacity = "1");
		(document.getElementById('delete_record3').style.position = "relative");
		(document.getElementById('delete_record3').style.visibility = "visible");
	}
else
	{	
		(document.getElementById('edit_record3').style.width = "99%");
		(document.getElementById('edit_record_forms3').style.height = "auto");
		(document.getElementById('edit_record_forms3').style.opacity = "1");
		(document.getElementById('edit_record_forms3').style.visibility = "visible");
		(document.getElementById('add_record3').style.opacity = "0");
		(document.getElementById('add_record3').style.visibility = "hidden");
		(document.getElementById('add_record3').style.position = "absolute");
		(document.getElementById('delete_record3').style.opacity = "0");
		(document.getElementById('delete_record3').style.visibility = "hidden");
		(document.getElementById('delete_record3').style.position = "absolute");	
	}
}
function add_show3() {
if (document.getElementById('add_record3').style.width == "99%")
	{
		(document.getElementById('add_record3').style.width = "32.7%");
		(document.getElementById('add_record_forms3').style.height = "0");
		(document.getElementById('add_record_forms3').style.opacity = "0");
		(document.getElementById('add_record_forms3').style.visibility = "hidden");
		(document.getElementById('edit_record3').style.opacity = "1");
		(document.getElementById('edit_record3').style.position = "relative");
		(document.getElementById('edit_record3').style.visibility = "visible");
		(document.getElementById('delete_record3').style.opacity = "1");
		(document.getElementById('delete_record3').style.position = "relative");
		(document.getElementById('delete_record3').style.visibility = "visible");
	}
else
	{
		(document.getElementById('add_record3').style.width = "99%");
		(document.getElementById('add_record_forms3').style.height = "auto");
		(document.getElementById('add_record_forms3').style.opacity = "1");
		(document.getElementById('add_record_forms3').style.visibility = "visible");
		(document.getElementById('edit_record3').style.opacity = "0");
		(document.getElementById('edit_record3').style.visibility = "hidden");
		(document.getElementById('edit_record3').style.position = "absolute");
		(document.getElementById('delete_record3').style.opacity = "0");
		(document.getElementById('delete_record3').style.visibility = "hidden");
		(document.getElementById('delete_record3').style.position = "absolute");
	}
}
function delete_show4() {
if (document.getElementById('delete_record4').style.width == "99%")
	{
		(document.getElementById('delete_record4').style.width = "32.7%");
		(document.getElementById('delete_record_forms4').style.height = "0");
		(document.getElementById('delete_record_forms4').style.opacity = "0");
		(document.getElementById('delete_record_forms4').style.visibility = "hidden");
		(document.getElementById('add_record4').style.opacity = "1");
		(document.getElementById('add_record4').style.position = "relative");
		(document.getElementById('add_record4').style.visibility = "visible");
		(document.getElementById('edit_record4').style.opacity = "1");
		(document.getElementById('edit_record4').style.position = "relative");
		(document.getElementById('edit_record4').style.visibility = "visible");

	}
else
	{	
		(document.getElementById('delete_record4').style.width = "99%");
		(document.getElementById('delete_record_forms4').style.height = "auto");
		(document.getElementById('delete_record_forms4').style.opacity = "1");
		(document.getElementById('delete_record_forms4').style.visibility = "visible");
		(document.getElementById('add_record4').style.opacity = "0");
		(document.getElementById('add_record4').style.visibility = "hidden");
		(document.getElementById('add_record4').style.position = "absolute");
		(document.getElementById('edit_record4').style.opacity = "0");
		(document.getElementById('edit_record4').style.visibility = "hidden");
		(document.getElementById('edit_record4').style.position = "absolute");
		
	}
}
function edit_show4() {
if (document.getElementById('edit_record4').style.width == "99%")
	{
		(document.getElementById('edit_record4').style.width = "32.7%");
		(document.getElementById('edit_record_forms4').style.height = "0");
		(document.getElementById('edit_record_forms4').style.opacity = "0");
		(document.getElementById('edit_record_forms4').style.visibility = "hidden");
		(document.getElementById('add_record4').style.opacity = "1");
		(document.getElementById('add_record4').style.position = "relative");
		(document.getElementById('add_record4').style.visibility = "visible");
		(document.getElementById('delete_record4').style.opacity = "1");
		(document.getElementById('delete_record4').style.position = "relative");
		(document.getElementById('delete_record4').style.visibility = "visible");
	}
else
	{	
		(document.getElementById('edit_record4').style.width = "99%");
		(document.getElementById('edit_record_forms4').style.height = "auto");
		(document.getElementById('edit_record_forms4').style.opacity = "1");
		(document.getElementById('edit_record_forms4').style.visibility = "visible");
		(document.getElementById('add_record4').style.opacity = "0");
		(document.getElementById('add_record4').style.visibility = "hidden");
		(document.getElementById('add_record4').style.position = "absolute");
		(document.getElementById('delete_record4').style.opacity = "0");
		(document.getElementById('delete_record4').style.visibility = "hidden");
		(document.getElementById('delete_record4').style.position = "absolute");
	}
}
function add_show4() {
if (document.getElementById('add_record4').style.width == "99%")
	{
		(document.getElementById('add_record4').style.width = "32.7%");
		(document.getElementById('add_record_forms4').style.height = "0");
		(document.getElementById('add_record_forms4').style.opacity = "0");
		(document.getElementById('add_record_forms4').style.visibility = "hidden");
		(document.getElementById('edit_record4').style.opacity = "1");
		(document.getElementById('edit_record4').style.position = "relative");
		(document.getElementById('edit_record4').style.visibility = "visible");	
		(document.getElementById('delete_record4').style.opacity = "1");
		(document.getElementById('delete_record4').style.position = "relative");
		(document.getElementById('delete_record4').style.visibility = "visible");
	}
else
	{	
		(document.getElementById('add_record4').style.width = "99%");
		(document.getElementById('add_record_forms4').style.height = "auto");
		(document.getElementById('add_record_forms4').style.opacity = "1");
		(document.getElementById('add_record_forms4').style.visibility = "visible");
		(document.getElementById('edit_record4').style.opacity = "0");
		(document.getElementById('edit_record4').style.visibility = "hidden");
		(document.getElementById('edit_record4').style.position = "absolute");
		(document.getElementById('delete_record4').style.opacity = "0");
		(document.getElementById('delete_record4').style.visibility = "hidden");
		(document.getElementById('delete_record4').style.position = "absolute");
	}
}