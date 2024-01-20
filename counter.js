let chances=5;

let number = Math.floor(((Math.random()*50)+1));

document.getElementById("submit").onclick= function () {
		chances--;
		let entered=document.getElementById("textbox").value;
		console.log(chances);
		if(entered==number)
		{
			document.getElementById("hint").textContent="Nice!! you guessed it correct :)";
			document.getElementById("result").textContent=number;
		}
		else if(entered>number)
		{
			document.getElementById("hint").textContent="Hint: you guessed it higher!";
			document.getElementById("chance").textContent="Chances left : "+chances;
		}
		else if(entered<number)
		{
			document.getElementById("hint").textContent="Hint: you guessed it lower";
			document.getElementById("chance").textContent="Chances left : "+chances;
		}

		if(chances==0)
		{
			document.getElementById("result").textContent=number;
			document.getElementById("hint").textContent="you did not guessed the number correctly :(";
			document.getElementById("chance").textContent="Chances left : "+chances;
		}
		if(chances<0)
		{
			chances=5;
			document.getElementById("result").textContent="";
			document.getElementById("chance").textContent="Chances left : "+chances;
			number = Math.floor(((Math.random()*50)+1));
		}
}

document.getElementById("reset").onclick= function (){
		chances=5;
		document.getElementById("result").textContent="";
		document.getElementById("hint").textContent="";
		document.getElementById("chance").textContent="Chances left : "+chances;
		number = Math.floor(((Math.random()*50)+1));
}
