============
Purpose
============

This folder tests the Pass compiler (PassC.java) on basic .pass input files stored in ./Pass_File_Tests.


============
How It Works
============

The makefile runs tests by executing commands such as:

	java PassC ./Test_Files/input1.pass > ./output.txt;
	diff ./output.txt ./Test_Files/Expected_Outputs/input1EO.txt;

First it runs PassC with a .pass input file, such as input1.pass above. It sends the output of this compile on
input1.pass to the file ./output.txt. The file ./output.txt is then compared with the corresonding file 
in ./Test_Files/Expected_Outputs that contains the expected output for the given compile on
input1.pass. If the contents of files match, the test passes and the makefile moves on to the next test. 
If there is an error, the makefile halts and shows the error.

============
Execution
============

$make clean
$make

------
And then any one of the following options:
------
Test all 76 .pass tests with:
$make tests

Test helloworld.pass and input1.pass - input10.pass with:
$make tests10

Test input11.pass - input20.pass with:
#make tests20

Test input21.pass - input30.pass with:
#make tests30

Test input31.pass - input40.pass with:
#make tests40

Test input41.pass - input50.pass with:
#make tests50

Test input51.pass - input60.pass with:
#make tests60

Test input61.pass - input70.pass with:
#make tests70

Test input71.pass - input75.pass with:
#make tests75