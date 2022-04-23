const NUMS= document.querySelectorAll('[NUMS]');
const OPERANDSS= document.querySelectorAll('[OPERANDS]');
const equal= document.querySelector('[data-equal]');
const CLEAR_ALL= document.querySelector('[CLEAR_ALL]');
const display= document.querySelector('[VIEW_SCREEN]');
const DECIMAL_NUM= document.querySelector('[DECIMAL_NUM]');
const DEL_NUM = document.querySelector('[DEL_NUM ]');
const NEG_NUM = document.querySelector('[NEG_NUM ]');



var resultvalue= '0';
var present_number='0';
var past_value;
var present_operation;
var selected_number;



const view_screen= (num) =>{
	selected_number= num.target.innerText;
		if (present_number === '0' || resultvalue) {
			present_number = selected_number;
			resultvalue='';
			console.log(present_number);	
		}
		else{
			present_number = present_number + selected_number;
		}
	display.innerText= present_number;	
}

const Clear_All= () =>{
	present_number='0';
	past_value='';
	present_operation=undefined;
	display.innerText= present_number;
}

const Decimal_addition= () =>{
	if (!present_number.includes('.')) {
		present_number= present_number += '.';
		display.innerText=present_number;
	}
}

const DELETE_number= () => {
	present_number=present_number.slice(0,-1);
			if(present_number === ''){
				present_number= '0';
			}
			display.innerText= present_number;
}

const Negative_number= () =>{
	if (present_number !== '0') {
		present_number = present_number * -1 ;
			display.innerText= present_number;
	}
}

const perform_operation= (operator) =>{
	if (past_value) {
		perform_calculation();
	}
	present_operation=operator.target.innerText;
	past_value= present_number;
	present_number='';
}

const perform_calculation= () =>{
	if (!past_value) {
		return resultvalue=present_number;
	}
	past_value = parseFloat(past_value);
    present_number = parseFloat(present_number);

	switch(present_operation){
		case '+':
		if (!present_number && present_number !== 0) {
			resultvalue= past_value + past_value;
		}
		else{
			resultvalue= past_value + present_number;	
		}
		break;
		case '-':
			if (!present_number && present_number !== 0) {
				resultvalue= past_value - past_value;
		}
		else{
			resultvalue= past_value - present_number;	
		}
		break;
		case '*':
			if (!present_number && present_number !== 0) {
				resultvalue= past_value * past_value;
		}
		else{
			resultvalue= past_value * present_number;	
		}
		break;
		case '÷':
			if (!present_number && present_number !== 0) {
				resultvalue= past_value / past_value;
		}
		else{
			resultvalue= past_value / present_number;	
		}
		default:
		break;
	}

	display.innerText= resultvalue;
	past_value='';
	present_number=resultvalue; // that way you can do operations with result
}

NUMS.forEach(number=>{
	number.addEventListener('click', view_screen)
});
CLEAR_ALL.addEventListener('click', Clear_All);
DECIMAL_NUM.addEventListener('click', Decimal_addition);
OPERANDSS.forEach(operation=>{
	operation.addEventListener('click', perform_operation)
});
equal.addEventListener('click', perform_calculation);
DEL_NUM.addEventListener('click',  DELETE_number);
NEG_NUM.addEventListener('click', Negative_number);