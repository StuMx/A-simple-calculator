/**
This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

Calculator = function(){
	this.screen = $("#calculator_screen");
};

Calculator.prototype = {
	key_1: function () { console.log(this);this.screen_append("1"); },
	key_2: function () { this.screen_append("2"); },
	key_3: function () { this.screen_append("3"); },
	key_4: function () { this.screen_append("4"); },
	key_5: function () { this.screen_append("5"); },
	key_6: function () { this.screen_append("6"); },
	key_7: function () { this.screen_append("7"); },
	key_8: function () { this.screen_append("8"); },
	key_9: function () { this.screen_append("9"); },
	key_0: function () { this.screen_append("0"); },
	key_plus: function () { this.screen_append("+"); },
	key_minus: function () { this.screen_append("-"); },
	key_times: function () { this.screen_append("*"); },
	key_division: function () { this.screen_append("/"); },
	key_decimal: function () {
		if( isNaN( parseInt( this.screen.val().slice(-1) ) ) ){
			this.screen_append("0");
		}
		this.screen_append(".");
	},
	key_equals: function () {
		if( isNaN( this.screen.val().slice(-1) ) ){
			this.screen_append(0);
		}
		this.screen_set( eval( this.screen.val()));
	},
	screen_set: function (value) {
		this.screen.val( value );
	},
	screen_append: function(value){
		if( this.allowed_screen_pattern.test(this.screen.val() + value )){
			this.screen.val(this.screen.val()+value);
		}
	},
	screen_delete: function(){
		var result = this.screen.val().substring(0, this.screen.val().length - 1);
		this.screen.val(result);
	},
	screen_clear: function(){
		this.screen.val("");
	},

	allowed_screen_pattern : new RegExp(/^(-?[0-9]+.?[0-9]*)(([\+\-\*\/]\-?([0-9]+.?[0-9]*)?)?)$/,"")
}

$(document).ready(function(){
	calculator = new Calculator();
	$("#btn_1").click(function() { calculator.key_1(); });
	$("#btn_2").click(function() { calculator.key_2(); });
	$("#btn_3").click(function() { calculator.key_3(); });
	$("#btn_4").click(function() { calculator.key_4(); });
	$("#btn_5").click(function() { calculator.key_5(); });
	$("#btn_6").click(function() { calculator.key_6(); });
	$("#btn_7").click(function() { calculator.key_7(); });
	$("#btn_8").click(function() { calculator.key_8(); });
	$("#btn_9").click(function() { calculator.key_9(); });
	$("#btn_0").click(function() { calculator.key_0(); });
	$("#btn_addition").click(function() { calculator.key_plus(); });
	$("#btn_substraction").click(function() { calculator.key_minus(); });
	$("#btn_times").click(function() { calculator.key_times(); });
	$("#btn_division").click(function() { calculator.key_division(); });
	$("#btn_decimal").click(function() { calculator.key_decimal(); });
	$("#btn_delete").click(function() { calculator.screen_delete(); });
	$("#btn_clear").click(function() { calculator.screen_clear(); });
	$("#btn_equals").click(function() { calculator.key_equals();});

	$(document).keypress(function(e) {
		switch(e.keyCode){
			case 13: calculator.key_equals(); break;
			case 42: calculator.key_times(); break;
			case 43: calculator.key_plus(); break;
			case 45: calculator.key_minus(); break;
			case 46: calculator.key_decimal(); break;
			case 47: calculator.key_division(); break;
			case 48: calculator.key_0(); break;
			case 49: calculator.key_1(); break;
			case 50: calculator.key_2(); break;
			case 51: calculator.key_3(); break;
			case 52: calculator.key_4(); break;
			case 53: calculator.key_5(); break;
			case 54: calculator.key_6(); break;
			case 55: calculator.key_7(); break;
			case 56: calculator.key_8(); break;
			case 57: calculator.key_9(); break;
		}
	});

	$(document).keyup(function(e) {
		switch(e.keyCode){
			case 8: calculator.screen_delete(); break
			case 46: calculator.screen_clear(); break
		}
	});
});