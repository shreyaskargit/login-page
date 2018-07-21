var eve = document.querySelectorAll("#lform input");

for(var i=0; i<eve.length; i++)
{
	eve[i].addeventlistener("click", function(){
		eve[i].style.borderBottomColor = "rgb(94, 155, 255)";
	});
}