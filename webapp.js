// JavaScript Document
var name=prompt("what is your name");

var score = 0;

var difficulty=1;

function changeDifficulty(x){
	difficulty=x;
	console.log("Setting difficulty to... " + difficulty);
	changeMeme();
}

window.onload = function() {
	// load cookies
	// pick a random meme to start
	changeMeme();
};

function changeMeme(){
	document.getElementById("a").removeEventListener("click", rightAnswer);
	document.getElementById("a").removeEventListener("click", wrongAnswer);
	document.getElementById("b").removeEventListener("click", rightAnswer);
	document.getElementById("b").removeEventListener("click", wrongAnswer);
	document.getElementById("c").removeEventListener("click", rightAnswer);
	document.getElementById("c").removeEventListener("click", wrongAnswer);
	document.getElementById("d").removeEventListener("click", rightAnswer);
	document.getElementById("d").removeEventListener("click", wrongAnswer);
	
	var rand;
	
	console.log("Current difficulty is... " + difficulty);
	
	if (difficulty===1){
	rand = Math.ceil(Math.random() * 18);
	//alert("choosing meme #" + rand);
	switch(rand) {
		case 1: //Ugandan Knuckles
			document.body.style.backgroundImage = "url('images/do_you_know_da_wae.jpg')";
			document.getElementById("b").innerHTML = "Sonic";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("a").innerHTML = "Ugandan Knuckles";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "Wakandan Knuckles";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Pepe the Frog";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 2: //Your Next
			document.body.style.backgroundImage = "url('images/yourenext.jpg')";
			document.getElementById("a").innerHTML = "Physco Kid";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "You're Next";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "Bowl Cut Billy";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Pepe the Frog";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 3://You Don't Say
			document.body.style.backgroundImage = "url('images/youdontsay.png')";
			document.getElementById("a").innerHTML = "Condescending Willy Wonka";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "No Really?";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Captain Obvious";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "You Don't Say";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
		case 4: // Ben Swolo
			document.body.style.backgroundImage = "url('images/ben_swolo.jpg')";
			document.getElementById("a").innerHTML = "Ben Swolo";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "Star Wars";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Shirtless Guy";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Shirts are for Losers";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;

		case 5: //Condesending Willy Wonka
			document.body.style.backgroundImage = "url('images/condescending_willy_wonka.jpg')";
			document.body.style.backgroundImage = "url('images/condescending_willy_wonka.jpg')";
			document.getElementById("a").innerHTML = "Condesending Willy Wonka";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").addEventListener("click", wrongAnswer);

			document.getElementById("b").innerHTML = "Hate Mondays";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "You Don't Say";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Go On";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			document.getElementById("a").innerHTML = "Condesending Willy Wonka";
			document.getElementById("a").addEventListener("click", rightAnswer);
			break;
		case 6: //Confused Mr. Krabbs
			document.body.style.backgroundImage = "url('images/confused_Mr.krabbs.jpg')";
			document.getElementById("b").innerHTML = "Spongegar";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Stolen the Krabby Patty Recipe";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("a").innerHTML = "Confused Mr. Krabbs";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "Rusty Krabbs";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 7: //Evil Kermit
			document.body.style.backgroundImage = "url('images/evil-kermit.png')";
			document.getElementById("a").innerHTML = "Evil Kermit";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "Evil Muppets";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Kermit's Dark Side";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Kermit's Imagination";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 8: //Grumpy Cat
			document.body.style.backgroundImage = "url('images/grumpy_cat.jpg')";
			document.getElementById("a").innerHTML = "Bad Kitty";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Frowning Cat";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Grumpy Cat";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "Mr.Cat Disapproves";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 9: //Epic Sax Guy
			document.body.style.backgroundImage = "url('images/epicsaxguy.jpg')";
			document.getElementById("a").innerHTML = "Lit Saxophone";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Epic Sax Guy";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "Saxophone Dave";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Stuck in the 80's";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 10: //Forest Gump
			document.body.style.backgroundImage = "url('images/forestgump.jpeg')";
			document.getElementById("a").innerHTML = "What???";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Box of Chocalates";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Tom Hanks";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Forest Gump";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
		case 11: //Expanding Brain
			document.body.style.backgroundImage = "url('images/expanding_brain.jpg')";
			document.getElementById("a").innerHTML = "Big Brain";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Evolution";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Radioactive";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Expanding Brain";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
		case 12: //Hipster Ariel
			document.body.style.backgroundImage = "url('images/hipster_ariel.jpeg')";
			document.getElementById("a").innerHTML = "The Little Mermaid";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Hipster Ariel";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "Cardigan Mom";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "White Ariel";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 13: //Mocking Spongebob
			document.body.style.backgroundImage = "url('images/mocking_spongebob.jpg')";
			document.getElementById("a").innerHTML = "Mocking Spongebob";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "Beaky Bob";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Spongebob the Bird";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Birdy Boi";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 14: //Pepe the Frog
			document.body.style.backgroundImage = "url('images/pepe_the_frog.jpg')";
			document.getElementById("a").innerHTML = "Kermit";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Pepe the Frog";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "Greeny Boi";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Pepe the Toad";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 15: //Philosoraptor
			document.body.style.backgroundImage = "url('images/philosoraptor.jpg')";
			document.getElementById("b").innerHTML = "Philosayoraptorasaurus";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Thinking T-rex";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("a").innerHTML = "Philosoraptor";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "Smarty Stegosauraus";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 16: //Scumbag Steve
			document.body.style.backgroundImage = "url('images/scumbag_steve.jpg')";
			document.getElementById("a").innerHTML = "First Impressions";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Dumb Dave";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Scumbag Steve";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "Bad Boy Bob";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 17: //Robbie Rotten
			document.body.style.backgroundImage = "url('images/robbie_rotten.png')";
			document.getElementById("a").innerHTML = "We are #1";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Everything is MIIIIINE";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Robbie Rotten";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "Lazy Town";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 18: //Success Kid
			document.body.style.backgroundImage = "url('images/success_kid.jpg')";
			document.getElementById("a").innerHTML = "Fist Kid";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Success Kid";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "Legend Baby";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Boss Baby";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;

	} // end switch
} // end if



if (difficulty===2){

rand = Math.ceil(Math.random() * 10);

	//alert("choosing meme #" + rand);
	switch(rand) {

	
	case 1: //Disaster Girl
			document.body.style.backgroundImage = "url('images/disaster_girl.jpg')";
			document.getElementById("a").innerHTML = "Disaster Girl";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Smiling Girl";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Burning House";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "The Evil of Christmas";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
	case 2: //Yo Dawg
			document.body.style.backgroundImage = "url('images/yo_dawg.jpg')";
			document.getElementById("a").innerHTML = "Condescending Willy Wonka";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Assah dude";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "yo dawg";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "Bruh";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			
				case 3: //Salt Bae
			document.body.style.backgroundImage = "url('images/salt_bae.jpg')";
			document.getElementById("a").innerHTML = "Salt Bae";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "Sprinke da Salt";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Salty Guy";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Cheat Sheet";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			
				case 4: //Good Guy Greg
			document.body.style.backgroundImage = "url('images/good_guy_greg.jpg')";
			document.getElementById("a").innerHTML = "White Kids";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Good Guy Greg";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "Canadien Gangsters";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Thug Life";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			
				case 5: //Joseph D
			document.body.style.backgroundImage = "url('images/joseph_ducreux.png')";
			document.getElementById("a").innerHTML = "Abraham the Rapper";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "George Rappington";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Joseph D";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "Savage Bartholomew";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			
					case 6: //Me Gusta
			document.body.style.backgroundImage = "url('images/me_gusta.jpg')";
			document.getElementById("a").innerHTML = "Potato Head";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Baldy";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Bald Head Bill";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Me Gusta";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
			
					case 7: //Billy Mays
			document.body.style.backgroundImage = "url('images/billy_mays.jpg')";
			document.getElementById("a").innerHTML = "Arm & Hammer";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Billy Mays";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "OxiClean";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Jimmy Vranic";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			
				case 8: //Sudden clarity clarence
			document.body.style.backgroundImage = "url('images/sudden_clarity_clarence.jpg')";
			document.getElementById("a").innerHTML = "Sudden Clarity Clarence";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "So I am Confusion";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Brighty Wighty";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Suddenly Smart Steve";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			
				case 9: //Prison Mike
			document.body.style.backgroundImage = "url('images/prisonmike.png')";
			document.getElementById("a").innerHTML = "In the clink";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Prison Mike";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "The Office";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Meetings with Michael";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			
				case 10: //Hipster Ariel
			document.body.style.backgroundImage = "url('images/hipster_ariel.jpeg')";
			document.getElementById("a").innerHTML = "The Little Mermaid";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Hipster Ariel";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "Cardigan Mom";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "White Ariel";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
	
			
	}//end switch
}//end if


if (difficulty===3){

	rand = Math.ceil(Math.random() * 10);
	//alert("choosing meme #" + rand);
	switch(rand) {
	
		case 1: //Phil Swift
			document.body.style.backgroundImage = "url('images/philswift.jpg')";
			document.getElementById("a").innerHTML = "Phil Swift";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "Seal the Deal";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Flex Tape";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "He Protec";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;	
			
				case 2: //Be Like Bill
			document.body.style.backgroundImage = "url('images/be_like_bill.png')";
			document.getElementById("a").innerHTML = "Billy";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Chill Bill";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Be like Bill";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "Chill like Bill";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			
					case 3: //Dolan
			document.body.style.backgroundImage = "url('images/dolan.png')";
			document.getElementById("a").innerHTML = "Beaky";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Mr. Clucks";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Donald Duck";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Dolan";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
			
					case 4: //Ken Bone
			document.body.style.backgroundImage = "url('images/ken_bone.jpg')";
			document.getElementById("a").innerHTML = "Ken Bone";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "Large Guy in a Little Coat";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Awkward Interview";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Four Eyed Ken";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			
				case 5: //Yee
			document.body.style.backgroundImage = "url('images/yee.jpg')";
			document.getElementById("a").innerHTML = "Dinosaurus";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Mohawk Velociraptor";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Jurrasic Park Relived";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Yee";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
			
				case 6: //Ten Guy
			document.body.style.backgroundImage = "url('images/ten_guy.png')";
			document.getElementById("a").innerHTML = "Plant Nachos";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Hi, Nice to Meet You";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Marilize Leguana";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Ten Guy";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
			
				case 7: //Crasher Squirrel
			document.body.style.backgroundImage = "url('images/Crasher_squirrel.jpg')";
			document.getElementById("a").innerHTML = "Crasher Squirrel";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "Too Cute to Blame";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Photobomb Phil";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Squirelly Boi";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			
				case 8: //Sponge Gar
			document.body.style.backgroundImage = "url('images/spongegar.jpg')";
			document.getElementById("a").innerHTML = "Big Mouth Bob";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Sponge gar";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "Caveman Spongebob";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Prehistoric Bobby Boi";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			
			  case 9: //Robbie Rotten
			document.body.style.backgroundImage = "url('images/robbie_rotten.png')";
			document.getElementById("a").innerHTML = "We are #1";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Everything is MIIIIINE";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Robbie Rotten";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "Lazy Town";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;

			
			case 10: //Isopod Hour
		document.body.style.backgroundImage = "url('images/isopod_hour.jpg')";
		document.getElementById("a").innerHTML = "Shrimp n' Chips";
		document.getElementById("a").addEventListener("click", wrongAnswer);
		document.getElementById("b").innerHTML = "Isopod Hour";
		document.getElementById("b").addEventListener("click", rightAnswer);
		document.getElementById("c").innerHTML = "Lobstah";
		document.getElementById("c").addEventListener("click", wrongAnswer);
		document.getElementById("d").innerHTML = "Doritos Commercials";
		document.getElementById("d").addEventListener("click", wrongAnswer);
		break;
			
	}//end switch
}//end if
if (difficulty===4){
	rand = Math.ceil(Math.random() * 7);
	//alert("choosing meme #" + rand);
	switch(rand) {
		
	case 1: //Bert is evil
		document.body.style.backgroundImage = "url('images/Bert_is_evil.jpg')";
		document.getElementById("a").innerHTML = "Bert is Evil";
		document.getElementById("a").addEventListener("click", rightAnswer);
		document.getElementById("b").innerHTML = "Osama Bert Laden";
		document.getElementById("b").addEventListener("click", wrongAnswer);
		document.getElementById("c").innerHTML = "Sesame Hood";
		document.getElementById("c").addEventListener("click", wrongAnswer);
		document.getElementById("d").innerHTML = "Bad Boi Bert";
		document.getElementById("d").addEventListener("click", wrongAnswer);
		break;
	case 2: //All Your Base Belong To Us
		document.body.style.backgroundImage = "url('images/all_your_base_belong_to_us')";
		document.getElementById("a").addEventListener("click", rightAnswer);
		document.getElementById("a").innerHTML = "All Your Base Are Belong To Us";
		document.getElementById("a").addEventListener("click", wrongAnswer);
		document.getElementById("b").innerHTML = "Broken Engrish";
		document.getElementById("b").addEventListener("click", wrongAnswer);
		document.getElementById("c").innerHTML = "God of Anime";
		document.getElementById("c").addEventListener("click", rightAnswer);
		document.getElementById("d").innerHTML = "Zero WIng";
		document.getElementById("d").addEventListener("click", wrongAnswer);
		break;

 case 3: //coral
			document.body.style.backgroundImage = "url('images/coral.jpg')";
			document.getElementById("a").innerHTML = "Coral";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "The Walking Dead";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Well Armed";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "TWD";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
 case 4: //coral
			document.body.style.backgroundImage = "url('images/inhaling_seagull.jpg')";
			document.getElementById("a").innerHTML = "BOI Seagull";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Exhaling Seagull";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "Seagull BOI";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Inhaling Seagull";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
 case 5: //lamb sauce
			document.body.style.backgroundImage = "url('images/lamb_sauce.jpg')";
			document.getElementById("a").innerHTML = "Gordan Ramsay";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Donkay";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Lamb Sauce";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "Inner Ramsay Released";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
 case 6: //coral
			document.body.style.backgroundImage = "url('images/coral.jpg')";
			document.getElementById("a").innerHTML = "Coral";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "The Walking Dead";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "Well Armed";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "TWD";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		}//end switch
}//end if
}//end changememe()


function wrongAnswer(){
	changeMeme();
	score=0;
	document.getElementById("score").value=score;	
	rand = Math.ceil(Math.random() * 4);
	switch(rand) {
	case 1:
	alert("You are so trash! I can't believe you could get that wrong. You are an absolute donkey");
	break;
	case 2:
	alert("pepe can answer more questions than you");
	break;
	case 3:
	alert("Ur granny tranny");
	break;
	case 4:
	alert("more like bad luck "+name);
	break;
	} 
	}
	

function rightAnswer(){
	changeMeme(); 
	score++;
	document.getElementById("score").value=score;	
	rand = Math.ceil(Math.random() * 4);
	switch(rand) {
	case 1:
	alert("pretty smexy my dude");
	break;
	case 2:
	alert("The GOAT of meme guessing");
	break;
	case 3:
	alert("You know more memes than evil kermit himself");
	break;
	case 4:
	alert("The king of memes..."+name+" !!!");
	break;
}//end rand
}//end rightAn
function saveCookies(){
	document.getElementById("highscore").value=highscore;
	var expirationdate=76543489876543;
	var date=new Date();
	date.setTime(date.getTime()+(expirationdate*24*60*60*1000));
	var expires="expires="+date.toUTCString();
	document.cookie="highscore="+highscore+";"+expires;
}

function getCookie(cname){
	"use strict";
	var name =cname+"=";
	var decodedCookie=decodeURIComponent(document.cookie);
	var ca=decodedCookie.split(';');
	for(var i=0; i<ca/length; i++){
		var c=ca[i];
		while (c.charAt(0) ===0){
			c=c.substring(1);
		}
		if (c.indexOf(name)===0){
			return c.substring(name.length, c.length);
		}
	}
	return"";
	}
	
	function loadCookies(){
		"use strict";
		if( getCookie('score')!==""){
			score=Number(getCookie('score'));
		}
	}
	function saveCookies(){
	var expirationdate=76543489876543;
	var date=new Date();
	date.setTime(date.getTime()+(expirationdate*24*60*60*1000));
	var expires="expires="+date.toUTCString();
	document.cookie="score="+score+";"+expires;
}
function getCookie(cname){
	"use strict";
	var name =cname+"=";
	var decodedCookie=decodeURIComponent(document.cookie);
	var ca=decodedCookie.split(';');
	for(var i=0; i<ca/length; i++){
		var c=ca[i];
		while (c.charAt(0) ===0){
			c=c.substring(1);
		}
		if (c.indexOf(name)===0){
			return c.substring(name.length, c.length);
		}
	}
	return"";
	}
	
	function loadCookies(){
		"use strict";
		if( getCookie('score')!==""){
			score=Number(getCookie('score'));
		}
	}
	




	








	







