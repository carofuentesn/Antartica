var whitespace = " \t\n\r";

function isNumero(str){
  var flag=true;
  var i=0;
  var nums=new Array(1,1,1,1,1,1,1,1,1,1);
  while (i<str.length && flag){
    flag= (nums[str.charAt(i++)]!=null);
  }
  return flag;
}     

function isWhitespace(s){
	var i;
	if (isEmpty(s)) return true;
	for (i = 0; i < s.length; i++){
		var c = s.charAt(i);
		if (whitespace.indexOf(c) == -1)
			return false;
	}
	return true;
}

function isEmail(valor) {
   
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
   
    alert (valor);
    return true;
  } else {
   return true;
  }
}
    
function LTrim(str){	
	while(str.length > 0 && str.charAt(0) == " "){
		str = str.substr(1,str.length)
	}

	return str
}

function RTrim(str){
	while(str.length > 0 && str.charAt(str.length-1) == " "){
		str = str.substr(0,str.length-1);
	}
	
	return str
}

function Trim(theStr){
	theStr = RTrim(theStr);
	theStr = LTrim(theStr);
	
	return theStr 
}

function isEmpty(s){
	return ((s == null) || (s.length == 0));
}

function isDigit (c){
	return ((c >= "0") && (c <= "9"));
}

function isInteger (s){
	var i;

	if (isEmpty(s)) {return false;}
	
	for (i = 0; i < s.length; i++){   
		if (!isDigit(s.charAt(i))){return false;}
	}

	return true;
}

function isDecimal (s){
	var i,nums;

	if (isEmpty(s)) {return false;}
	nums = s.split(".");

	if (nums.length == 1){
		return isInteger(nums[0]);
	}else if(nums.length == 2){
		return isInteger(nums[0]) && isInteger(nums[1]);
	}
	
	return false;
}

function isFieldEmpty(theForm,fieldVal,fieldName,alertName){
	if (isEmpty(fieldVal)){
		alert("Debes ingresar "+alertName);
		theForm.elements[fieldName].focus();
		return true;
	}
	
	return false;
}

function checkEmail(emailStr){
	var result = false

	if (!isEmpty(emailStr)){
		result = isEmail(emailStr);
	}
	
	return result;
}

function isLeapYear(year){

	if (year % 4 == 0){
		if (year % 100 == 0 && year % 400 != 0){
			return false;
		}
		return true;
	}
	
	return false;
}

function checkFecha(day,month,year){
	var febDays = 28;
	
	
	if (day < 1 || day > 31) {return false;}
	if (month < 1 || month > 12) {return false;}
	if (isLeapYear(year)) {febDays = 29;}
	if (month == 2 && day > febDays){return false;}
	if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30){return false;}
	
	return true;
}

function reloadTopFrame(){
	if (typeof(parent.menuFrame) != "undefined" && !parent.menuFrame.isLoggedOn){
		parent.menuFrame.location.href="/3deseos/frames/top.jsp?dummy="+(new Date()).getTime();
	}
}

function alertNotLogged(){
	alert("Tu session como usuario a expirado. Por favor vuelve a logearte.");
	
	if (typeof(parent.menuFrame) != "undefined" && parent.menuFrame.isLoggedOn){
		parent.menuFrame.location.href="/3deseos/frames/top.jsp?dummy="+(new Date()).getTime();
	}
}

function checkNotLogged(){
	if (typeof(parent.menuFrame) != "undefined" && parent.menuFrame.isLoggedOn){
		alert("Tu sesion como usuario a expirado. Por favor vuelve a logearte.");
		parent.menuFrame.location.href="/3deseos/frames/top.jsp?dummy="+(new Date()).getTime();
	}
}

function selectall(theForm,total,whatAction){
	var i, tmpBox, estado, nuevoestado;
	var choosenBoxes=0;
		
	for(i = 0; i < total; i++){
		tmpBox = eval("theForm.checkbox_"+i);
		if (typeof(tmpBox) != "undefined"){
			if (whatAction =="selectAll"){
				tmpBox.checked = theForm.todos.checked;
			}
			if (tmpBox.checked){
				choosenBoxes++;
			}
		}
	}
	
	if (whatAction =="deleteMessage" && choosenBoxes < 1){
		alert("Debes elegir un o mas mensajes!")
	} else if (whatAction =="deleteMessage"){
		theForm.action.value=whatAction;
		theForm.submit();
	}else{
		return true;
	}
	return false;
}

function revisarDigito( dvr )
{	
	dv = dvr + ""	
	if ( dv != '0' && dv != '1' && dv != '2' && dv != '3' && dv != '4' && dv != '5' && dv != '6' && dv != '7' && dv != '8' && dv != '9' && dv != 'k'  && dv != 'K')	
	{		
		//alert("Debe ingresar un digito verificador valido");		
		//window.document.form1.rut.focus();		
		///window.document.form1.rut.select();		
		return false;	
	}	
	return true;
}

function revisarDigito2( crut )
{	
	largo = crut.length;	
	if ( largo < 2 )	
	{		
		//alert("Debe ingresar el rut completo")		
		//window.document.form1.rut.focus();		
		//window.document.form1.rut.select();		
		return false;	
	}	
	if ( largo > 2 )		
		rut = crut.substring(0, largo - 1);	
	else		
		rut = crut.charAt(0);	
	dv = crut.charAt(largo-1);	
	revisarDigito( dv );	

	if ( rut == null || dv == null )
		return 0	

	var dvr = '0'	
	suma = 0	
	mul  = 2	

	for (i= rut.length -1 ; i >= 0; i--)	
	{	
		suma = suma + rut.charAt(i) * mul		
		if (mul == 7)			
			mul = 2		
		else    			
			mul++	
	}	
	res = suma % 11	
	if (res==1)		
		dvr = 'k'	
	else if (res==0)		
		dvr = '0'	
	else	
	{		
		dvi = 11-res		
		dvr = dvi + ""	
	}
	if ( dvr != dv.toLowerCase() )	
	{		
		//alert("EL rut es incorrecto")		
		//window.document.form1.rut.focus();		
		//window.document.form1.rut.select();		
		return false	
	}

	return true
}

function Rut(texto)
{	
	var tmpstr = "";	
	for ( i=0; i < texto.length ; i++ )		
		if ( texto.charAt(i) != ' ' && texto.charAt(i) != '.' && texto.charAt(i) != '-' )
			tmpstr = tmpstr + texto.charAt(i);	
	texto = tmpstr;	
	largo = texto.length;	

	if ( largo < 2 )	
	{		
		//alert("Debe ingresar el rut completo")		
		//window.document.form1.rut.focus();		
		//window.document.form1.rut.select();		
		return false;	
	}	

	for (i=0; i < largo ; i++ )	
	{			
		if ( texto.charAt(i) !="0" && texto.charAt(i) != "1" && texto.charAt(i) !="2" && texto.charAt(i) != "3" && texto.charAt(i) != "4" && texto.charAt(i) !="5" && texto.charAt(i) != "6" && texto.charAt(i) != "7" && texto.charAt(i) !="8" && texto.charAt(i) != "9" && texto.charAt(i) !="k" && texto.charAt(i) != "K" )
 		{			
			//alert("El valor ingresado no corresponde a un R.U.T valido");			
			//window.document.form1.rut.focus();			
			//window.document.form1.rut.select();			
			return false;		
		}	
	}	

	var invertido = "";	
	for ( i=(largo-1),j=0; i>=0; i--,j++ )		
		invertido = invertido + texto.charAt(i);	
	var dtexto = "";	
	dtexto = dtexto + invertido.charAt(0);	
	dtexto = dtexto + '-';	
	cnt = 0;	

	for ( i=1,j=2; i<largo; i++,j++ )	
	{		
		//alert("i=[" + i + "] j=[" + j +"]" );		
		if ( cnt == 3 )		
		{			
			dtexto = dtexto + '';			
			j++;			
			dtexto = dtexto + invertido.charAt(i);			
			cnt = 1;		
		}		
		else		
		{				
			dtexto = dtexto + invertido.charAt(i);			
			cnt++;		
		}	
	}	

	invertido = "";	
	for ( i=(dtexto.length-1),j=0; i>=0; i--,j++ )		
		invertido = invertido + dtexto.charAt(i);	

	//window.document.form1.rut.value = invertido.toUpperCase()		

	if ( revisarDigito2(texto) )		
		return true;	

	return false;
}

function FormatoRut(texto)
{
    	
	var tmpstr = "";	
	for ( i=0; i < texto.length ; i++ )		
		if ( texto.charAt(i) != ' ' && texto.charAt(i) != '.' && texto.charAt(i) != '-' )
			tmpstr = tmpstr + texto.charAt(i);	
	texto = tmpstr;	
	largo = texto.length;	


	for (i=0; i < largo ; i++ )	
	{			
		if ( texto.charAt(i) !="0" && texto.charAt(i) != "1" && texto.charAt(i) !="2" && texto.charAt(i) != "3" && texto.charAt(i) != "4" && texto.charAt(i) !="5" && texto.charAt(i) != "6" && texto.charAt(i) != "7" && texto.charAt(i) !="8" && texto.charAt(i) != "9" && texto.charAt(i) !="k" && texto.charAt(i) != "K" )
 		{		
			
		}	
	}	

	var invertido = "";	
	for ( i=(largo-1),j=0; i>=0; i--,j++ )		
		invertido = invertido + texto.charAt(i);	
	var dtexto = "";	
	dtexto = dtexto + invertido.charAt(0);	
	dtexto = dtexto + '-';	
	cnt = 0;	

	for ( i=1,j=2; i<largo; i++,j++ )	
	{		
		//alert("i=[" + i + "] j=[" + j +"]" );		
		if ( cnt == 3 )		
		{			
			dtexto = dtexto + '';			
			j++;			
			dtexto = dtexto + invertido.charAt(i);			
			cnt = 1;		
		}		
		else		
		{				
			dtexto = dtexto + invertido.charAt(i);			
			cnt++;		
		}	
	}	

	invertido = "";	
	for ( i=(dtexto.length-1),j=0; i>=0; i--,j++ )		
		invertido = invertido + dtexto.charAt(i);	

	//window.document.form1.rut.value = invertido.toUpperCase()		
        return invertido.toUpperCase();		
		

	
	
    
}

