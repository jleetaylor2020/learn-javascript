













// ----------------------NOTES------------------------------------------------------------------
// The following below same as: x = x + y or x = x - y
// x += y; 
// x -= y;

// TIPS ----Don't Use new Object()
// Use {} instead of new Object()
// Use "" instead of new String()
// Use 0 instead of new Number()
// Use false instead of new Boolean()
// Use [] instead of new Array()
// Use /()/ instead of new RegExp()
Use function (){} instead of new Function()

// Operand and Operator - operators are applied to operand. For example:
// ..Expression  8 * 3  there are two operands. Left operand 8, Right oeprand 3
// ..Operands can be referred to as ARGUMENTS.

// JavaScript has the following types of operators:....
// assignment operators
// comparison operators
// arithmetic operators
// bitwise operators
// logical operators
// string operators - concate - example: console.log('alpha' + 'bet') results: 'alphabet' in console
// conditional (or ternary) operators
// comma operator
// unary operator- delete - example: delete objectName; delete objectName.property; delete objectName[index]; - deletes and object, a property, or index in array
// relational operators - returns true if specified property is in the specified object.
// typeof operator - typeof operand - ex. typeof size - if - let size=1;
// void operator - evaluate an expression without returning a value.


//  The following returns a  true statment - if not, it is false:----------------
//  COMPARISON Operators Description	True statements
//  4 == '4'          Equal	==	Returns true if the operands are equal  	
//  4 != '3'          Not Equal	!=	Returns true if the operands are not equal	    
//  x = 4; x === 4    Strict Equal	===	Returns true if the operands are equal of the same type	let     
//  3 !== '3'         Strict Not Equal	!==	Returns true if the operands are of the same type but not equal, or are a different type	
//  14 > 2            Greater than	>	Returns true if the left operand is greater than the right operand	
//  14 >= '14'        Greater than or Equal	>=	Returns true if the left operand is greater than or equal to the right operand	
//  2 < 14            Less than	>	Returns true if the left operand is less than the right operand	
//  14 <= '14'        Less than or Equal	<=	Returns true if the left operand is less than or equal to the right operand	

// 
// ARITHMETIC	Operator	Description	Example---------------
// Remainder	   %	Binary operator that returns the integer remainder of dividing the two operands	10 % 3 returns 1
// Increment	   ++	Unary operator that adds one to its operand and returns the pre or post value depending on the operator placement	if y is 4, ++y sets y to 5 and returns 5, whereas y++ returns 4 and then sets y to 5
// Decrement	   --	Unary operator that subtracts one from its operand and returns the pre or post value depending on the operator placement	if y is 4, --y sets y to 3 and returns 3, whereas y-- returns 4 and then sets y to 3
// Unary Negation	-	Unary operator that returns the negation of its operand	if y is 4, -y returns -4
// Unary Plus	    +	Unary operator that attempts to convert the operand to a number if it is not already	+'4' returns 4, +true returns 1, +-4 returns -4

// 
// Bitwise Operators	Description	Example--------------
// Bitwise AND	&	Binary operator that returns a one in each bit position for which the corresponding bits of both operands are ones	10 & 3 returns 2
// Bitwise OR	|	Binary operator that returns a zero in each bit position for which the corresponding bits of both operands are zeros	10 | 3 returns 11
// Bitwise XOR	^	Binary operator that returns a zero in each bit position for which the corresponding bits are the same and a one in each bit position for which the corresponding bits are different	10 ^ 3 returns 9
// Bitwise NOT	~	Unary operator that inverts the bits of its operand	~10 returns -11
// Left Shift	<<	Binary operator that shifts the left operand in binary representation the right operand bits to the left, shifting in zeros from the right	10 << 3 returns 80
// Sign-propagating Right Shift	>>	Binary operator that shifts the left operand in binary representation the right operand bits to the right, discarding bits shifted off	10 >> 3 returns 1
// Zero-fill Right Shift	>>>	Binary operator that shifts the left operand in binary representation the right operand bits to the right, discarding bits shifted off, and shifting in zeros from the left	10 >>> 3 returns 1

// 
// LOGICAL Operators	Description	Example-------------
// Logical AND	&&	Binary operator that returns the left operand if it can be converted to false; otherwise, returns the right operand. Thus, when used with Boolean values, returns true if both operands are true; otherwise, returns false	true && false returns false
// Logical OR	||	Binary operator that returns the left operand if it can be converted to true; otherwise, returns the right operand. Thus, when used with Boolean values, returns true if either operand is true; if both are false, returns false	`true		falsereturnstrue`
// Logical NOT	!	Unary operator that returns false if it's a single operand that can be converted to true; otherwise, returns true	!true returns false, !0 returns true
 
// 
// Operator Precendence Type	Operators
// member	. []
// call/create instance	() new
// negation/increment	! ~ - + ++ -- typeof void delete
// multiply/divide	* / %
// addition/subtraction	+ -
// bitwise shift	<< >> >>>
// relational	< <= > >= in instanceof
// equality	== != === !==
// bitwise-and	&
// bitwise-or	|
// logical-and	&&
// logical-or	||
// conditional	?:
// assignment	= += -= *= /= %= <<= >>= >>>= &= ^=	=
// comma	,
