function sum() {
		
    var x;

			switch(document.getElementById("from").value){


			case "USD":

			if ((document.getElementById("to").value=="INR")) {

				x=67.20*document.getElementById("io") ;
		document.getElementById("io1").value=x;
			}else if ((document.getElementById("to").value=="USD"))
			 {
			 	x=1*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 } 
			else if ((document.getElementById("to").value=="GBP"))
			 {
			 	x=0.80*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="CAD")) {
			 	x=1.30*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
                    else if ((document.getElementById("to").value=="AUD")) {
			 	x=1.32*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
                    else if ((document.getElementById("to").value=="EURO")) {
			 	x=0.93*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
                    else if ((document.getElementById("to").value=="PESO")) {
			 	x=20.36*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="BRL")) {
			 	x=3.12*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }

			 break;


			 case "INR":

			 if ((document.getElementById("to").value=="USD")) {

				x=0.015*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			}else if ((document.getElementById("to").value=="INR"))
			 {
			 	x=1*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 } 
			else if ((document.getElementById("to").value=="GBP"))
			 {
			 	x=0.012*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="CAD")) {
			 	x=0.019*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }  else if ((document.getElementById("to").value=="EURO")) {
			 	x=0.014*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
                    else if ((document.getElementById("to").value=="PESO")) {
			 	x=0.32*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="BRL")) {
			 	x=0.046*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
                    
                    else if ((document.getElementById("to").value=="AUD")) {
			 	x=0.019*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
			 break;

			 case "GBP":

			  if ((document.getElementById("to").value=="USD")) {

				x=1.25*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			} else if ((document.getElementById("to").value=="GBP"))
			 {
			 	x=1*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="INR"))
			 {
			 	x=83.91*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="CAD")) {
			 	x=1.63*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }  else if ((document.getElementById("to").value=="EURO")) {
			 	x=1.16*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
                    else if ((document.getElementById("to").value=="PESO")) {
			 	x=25.43*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="BRL")) {
			 	x=3.89*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
             else if ((document.getElementById("to").value=="AUD")) {
			 	x=1.63*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
             break;

             case "CAD":
             if ((document.getElementById("to").value=="USD")) {

				x=0.77*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			} else if ((document.getElementById("to").value=="CAD"))
			 {
			 	x=1*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="INR"))
			 {
			 	x=51.60*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="GBP")) {
			 	x=0.61*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }  else if ((document.getElementById("to").value=="EURO")) {
			 	x=0.71*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }  else if ((document.getElementById("to").value=="PESO")) {
			 	x=15.64*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="BRL")) {
			 	x=2.39*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 } else if ((document.getElementById("to").value=="AUD")) {
			 	x=1*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
             break;
                     case "AUD":
             if ((document.getElementById("to").value=="USD")) {

				x=0.77*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			} else if ((document.getElementById("to").value=="INR"))
			 {
			 	x=51.60*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="GBP")) {
			 	x=0.61*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }  else if ((document.getElementById("to").value=="EURO")) {
			 	x=0.71*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 } else if ((document.getElementById("to").value=="PESO")) {
			 	x=15.64*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="BRL")) {
			 	x=2.39*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="CAD"))
			 {x=1*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="AUD")) {
			 	x=1*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
             break;
                     case "EURO":
             if ((document.getElementById("to").value=="USD")) {

				x=1.08*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			} else if ((document.getElementById("to").value=="CAD"))
			 {
			 	x=1.40*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="INR"))
			 {
			 	x=72.48*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="GBP")) {
			 	x=0.86*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }  else if ((document.getElementById("to").value=="EURO")) {
			 	x=1*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
                    else if ((document.getElementById("to").value=="PESO")) {
			 	x=21.96*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="BRL")) {
			 	x=3.36*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="AUD")) {
			 	x=1.40*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
             break;
                     case "PESO":
             if ((document.getElementById("to").value=="USD")) {

				x=0.049*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			} else if ((document.getElementById("to").value=="CAD"))
			 {
				 x=0.064*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="INR"))
			 {
			 	x=3.30*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="GBP")) {
			 	x=0.039*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }  else if ((document.getElementById("to").value=="EURO")) {
			 	x=0.046*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 } else if ((document.getElementById("to").value=="PESO")) {
			 	x=1*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="BRL")) {
			 	x=0.15*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="AUD")) {
			 	x=0.064*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
             break;
                     case "BRL":
             if ((document.getElementById("to").value=="USD")) {

				x=0.32*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			} else if ((document.getElementById("to").value=="INR"))
			 {
			 	x=21.56*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="GBP")) {
			 	x=0.26*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }  else if ((document.getElementById("to").value=="EURO")) {
			 	x=0.32*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
                    else if ((document.getElementById("to").value=="PESO")) {
			 	x=6.53*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="BRL")) {
			 	x=1*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="CAD"))
			 {
			 	x=0.42*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 } else if ((document.getElementById("to").value=="AUD")) {
			 	x=0.42*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
             break;
}


if((document.getElementById("from").value=="Select")||(document.getElementById("to").value=="Select")){

	 alert("Please Select the Currency");
}


 

 }
 