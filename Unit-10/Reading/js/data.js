const MASTER_DB = {
	
	CONFIG: {
		MAX_INPUT: 100,						// max length of typing
		MAX_ATTEMPT_ANS: 2,					// attempts for showing answer button
		INPUT_FILTER_STATUS: false,
		INPUT_FILTER: [84, 116, 70, 102],	//T AND F
		
		INPUT_TRANSFORM: 'default',		// uppercase | lowercase | default
		INPUT_TEXT_CODE: '[<>]',

		FEEDBACK_TIME: 2500
	},
	
	TITLE: 'READING',
	INSTRUCTION: 'Now, Match the words in Part A and Part B to make complete sentences.',
	QUESTIONS: [
		{
			feedback: {
				positive: '<img src="img/correct_Img.gif" alt="" />',
				negative: '<img src="img/incorrect_Img.gif" alt="" />'
			}
		}
	],
	
	ANSWERS: {
		INSTRUCTION: 'Answers'
	}
}

var tempJsonObj =
{
	"LeftHeading"  : "Part A",
	"RightHeading" : "Part B",
     "Left": [ 
       "My blue school bag is",
       "My snack is ",
       "There is a",
       "I have my snack in",
       "Nothing can be better than"
	   
],
    "Right": [
		"pencil, eraser and a ruler in the bag",
		"the lunch break",
		"my school bag",
		"an apple and a bun",
		"nice and smart"
    ],
    "Answer": [
        "l1_r5",
        "l2_r4",
        "l3_r1",
        "l4_r2",
        "l5_r3"
    ],
    "text": "Click on an option in Column A and then click on the correct answer in Column B.<br /> <br /> After completing, click on Submit.<br /> <br />To check answer, click on Show Answer."
}
var button_text={
	"1" : "Submit",
	"2" : "Show Answers"
}
var language_code={
 "1":"0"//0 for english and 1 for hindi
}
var information_text={
	"1": "Information",
	"2": "Audio"
}