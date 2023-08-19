// Zealan Tanner 
// 9/30/20
// The program is a game where you want to get 1000 gold or 100 people. In the game, a character appears, and might change how much gold or people you have.

/*
1. Purpose (10 points): Your program should have a clear purpose for the user.  (What should a user hope to get from using your program?) Your name, the date, and this purpose should be clearly stated in a "comment" at the top of your source code.

2. Scope/Quality of Content (30 points): Your program should generate at least five minutes (about the equivalent of a 2 page, double-spaced essay) of meaningful narrative or game play.

3. Scope of Interaction (20 points): Your user should be able to make several choices throughout the story/game that significantly influence the narrative.  Here is a rubric:
    "missing" no interaction (0 points)
    "low" allows user to control the rate at which the story is reveals (5 points)
    "mediocre" multiple story outcomes possible (10 points)
    "target" ability for the user to make several choices throughout the story/game that significantly influence the narrative (20 points)
    
4. Programming Elements (40 points): you must make use of two examples of at least four of the following elements (10 points for each):

    variables-------------------------------------(check)
    knots/diverts---------------------------------(check)
    functions-------------------------------------(check)
    assertions for automated testing--------------(not yet)
    conditionals----------------------------------(I think?)
    randomness or other built-in functions--------(check)
    looping---------------------------------------(check, I think?)
*/

// Zealan Tanner
// 
// 
// 

// The population and gold start
VAR pop = 10       //1
VAR gold = 100     //10

VAR choicerange = 10
VAR choice = 1
VAR niceness = 0
VAR stuff = 0
VAR dragonluck = 0

//Numbers


You are the king of a small village. You need to expand your village by gaining population and gold. You win by getting to 100 population or 1000 gold
*Start-> random

=== function lose(ref x, amount) ===
    ~ x = x - amount
=== function gain(ref x, amount) ===
    ~ x = x + amount

===next===


Population: {pop}
Gold: {gold}

+Next
-> random

===random===

{
    - gold > 999||pop > 99:
    -> win
    
    - else:

        ~choice = RANDOM(1,53) //(1,53)
//prince elderly peasant robber farmer fuzzball alchemist dragon village knights disaster
//(1,4)  (5,10) (11,19) (20,23) (24,30) (31,32) (33,38)  (39,39) (40,47) (48,50) (51,53)
        
        {
        -choice == 1:   A prince                                            ->  prince
        -choice == 2:   Some random pretty rich dude                        ->  prince
        -choice == 3:   A duke                                              ->  prince
        -choice == 4:   A retired banker                                    ->  prince
        
        -choice == 5:   Your grandma                                        ->  elderly
        -choice == 6:   An old woman                                        ->  elderly
        -choice == 7:   An elderly woman                                    ->  elderly
        -choice == 8:   A sweet old lady                                    ->  elderly
        -choice == 9:   Your great aunt                                     ->  elderly
        -choice == 10:  An old hag                                          ->  elderly
        
        -choice == 11:  One of your enemy's prisoners                       ->  peasant
        -choice == 12:  A lost blacksmith                                   ->  peasant
        -choice == 13:  A peasant                                           ->  peasant
        -choice == 14:  A normal person                                     ->  peasant
        -choice == 15:  A random peon                                       ->  peasant
        -choice == 16:  A lowlife serf                                      ->  peasant
        -choice == 17:  A brick mason                                       ->  peasant
        -choice == 18:  A tractor driver                                    ->  peasant
        -choice == 19:  A rustic countryman                                 ->  peasant
        
        -choice == 20:  A robber                                            ->  robber
        -choice == 21:  A thief                                             ->  robber
        -choice == 22:  A burglar                                           ->  robber
        -choice == 23:  A shoplifter                                        ->  robber
        
        -choice == 24:  A farmer                                            ->  farmer
        -choice == 25:  A breadmaker                                        ->  farmer
        -choice == 26:  An agricultural worker                              ->  farmer
        -choice == 27:  A cook                                              ->  farmer
        -choice == 28:  A cow milker                                        ->  farmer
        -choice == 29:  A chef                                              ->  farmer
        -choice == 30:  A pizza topping designer                            ->  farmer
        
        -choice == 31:  A weird purple fuzzball randomly appears!           ->  fuzzball
        -choice == 32:  An average looking fuzzball randomly appears!       ->  fuzzball
        
        -choice == 33:  An alchemist                                        ->  alchemist
        -choice == 34:  A scientist                                         ->  alchemist
        -choice == 35:  A nerd                                              ->  alchemist
        -choice == 36:  Someone majoring in a gold-duplicating              ->  alchemist
        -choice == 37:  An alchemist                                        ->  alchemist
        -choice == 38:  A mad genius                                        ->  alchemist
        
        -choice == 39:  A dragon                                            ->  dragon
        
        -choice == 40:  A group of peasants                                 ->  village
        -choice == 41:  A bunch of lowsy peasants                           ->  village
        -choice == 42:  A bunch of citizens                                 ->  village
        -choice == 43:  A group of helots                                   ->  village
        -choice == 44:  A hoard of tiny gnomes                              ->  village
        -choice == 45:  A tribe of elves                                    ->  village
        -choice == 46:  A family of bird-people                             ->  village
        -choice == 47:  A sophisticated group of dogs                       ->  village
        
        -choice == 48:  A group of soldiers                                 ->  knights
        -choice == 49:  A group of knights                                  ->  knights
        -choice == 50:  A group of warriors                                 ->  knights
        
        -choice == 51:  A huge rainstorm comes!                             ->  disaster
        -choice == 52:  A giant earthquake happens!                         ->  disaster
        -choice == 53:  A tornado blasts through your village!              ->  disaster
        }
}

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//=========================================================================================
=== village ===
appears!
"Our entire village was destroyed and we are the only survivors. We need a new place to stay. Will you let us live in your village?"

+Sure
You let them live in your village and buy them houses
~stuff = RANDOM(5,15)
~gain(pop, stuff)
~stuff = 5*stuff
~lose(gold, stuff)
~gain(niceness, 3)
You lost {stuff} gold, but gained {stuff/5} population!

+No way!
They walk away very sadly. One of them is even crying loudly
~lose(niceness, 6)
You didn't gain anything. Not even friendship.
-
->next
//=========================================================================================
=== peasant ===
who wants to live in your village appears!

+Let him stay
You let him stay. He brought his wife and kids along too!
~stuff = RANDOM(3, 5)
~gain(pop, stuff)
~gain(niceness, 2)
You gained {stuff} population!

+Kill him and take his gold
You rudely kill him and take his gold.
~stuff = RANDOM(3, 10)
~gain(gold, stuff)
~lose(niceness, 3)
You gained {stuff} gold!
-
->next
//=========================================================================================
=== prince ===
who wants to live in your castle appears!

+Let him stay
You let him stay. He brought his wife and kids along too!
~stuff = RANDOM(5, 10)
~gain(pop, stuff)
~gain(niceness, stuff)
You gained {stuff} population, but lost {2*stuff} gold!
~stuff = 2*stuff
~lose(gold, stuff)

+Kill him and take his gold
You rudely kill him and take his gold.
~stuff = 10*RANDOM(5, 10)
~gain(gold, stuff)
~lose(niceness, 5)
You gained {stuff} gold!
-
->next
//=========================================================================================
=== robber ===
appears out of nowhere!
"Mwehehehe! I'm gunna steal some a yer gold! Hehehehehe!"

+Yes!
"Uh... Ok I will!"
~stuff = 10*RANDOM(1, 3)
~lose(gold, stuff)
~gain(niceness, 3)
You lost {stuff} gold!

+No!
"Well too bad! I'm going to anyway! Haha!"
~stuff = 10*RANDOM(5, 10)
~lose(gold, stuff)
You lost {stuff} gold!
-
-> next
//=========================================================================================
=== dragon ===
appears and politely asks, "please choose if I shall take half of your gold, or eat half of your people. No need to argue."

+Lose half of your gold!
~stuff = gold/2
~lose(gold, stuff)
You lost {gold/2} gold!

+Lose half of your population!
~stuff = pop/2
~lose(pop, stuff)
You lost {pop/2} people!

+Say, "Niether!", and attempt to slay the dragon
~dragonluck = RANDOM(1,3)
{
-dragonluck < 3: You fail miserably!
"You brought this upon yourself you know"
~stuff = gold/2
~lose(gold, stuff)
~stuff = pop/2
~lose(pop, stuff)
You lost {gold/2} gold and {pop/2} people! Sheesh!
-> next

-dragonluck == 3: You somehow manage to defeat the dragon!
"Ouch dude"
~stuff = 500
~gain(gold, stuff)
You gained {stuff} gold!
-> next
}
-
-> next
//=========================================================================================
=== fuzzball ===

+Say hello
The fuzzball looks at you...somehow.
But it stays where it is
-> fuzzball

+Tell it to go away
The fuzzball grins menacingly but does not go away
-> fuzzball

+Ignore it
The fuzzball stays there for a couple minutes
but then got bored so it left
-> next

+Attack it!
You try to attack the fuzzball!
The fuzzball kills some people with its ferocious claws somehow!
~stuff = pop/4
~lose(pop, stuff)
~lose(niceness, 3)
You lost {stuff} people!
-> next
//=========================================================================================
=== knights ===
who are looking to be hired appear!
    
+Hire them
~stuff = RANDOM(5, 15)
~gain(pop, stuff)
~lose(gold, stuff)
~gain(niceness, 3)
You gain {stuff/2} people, but lost {stuff} gold!

+Don't hire them
You didn't lose anything, except friendship
-
-> next
//=========================================================================================
=== disaster ===
You need to repair it or people will leave!

+Pay {pop} gold
~lose(gold, pop)
You lost {pop} gold, but didn't lose any population!

+Don't pay
A lot of people are unhappy
~stuff = pop/4
~lose(pop, stuff)
~lose(niceness, 10)
-
-> next
//=========================================================================================
=== alchemist ===
appears!
"I might double any amount of gold you give me, or I might lose it"
~stuff = RANDOM(1,2)

+Give none
He is very offended
~lose(niceness, 2)
You gain nothing. Including friendship

+Give him {gold/2}
You pay him half your gold
He's happy
{
-stuff == 1:
    ~stuff = gold/2
    ~lose(gold, stuff)
    You lost your gold. Sorry.
-stuff == 2:
    ~stuff = gold/2
    ~gain(gold, stuff)
    You gained {stuff} gold!
}
~gain(niceness, 3)
-
-> next
//=========================================================================================
=== farmer ===
appears!
"I'll feed yer people, but it'll cost ya!"

+No. Go away you ugly idiot!
He scowls at you.
You gain nothing. Except hate
~lose(niceness, 5)

+Pay {pop} gold for {pop} population
You lost {pop} gold, but gained {pop} people!

~lose(gold, pop)
~gain(pop, pop)
-
-> next
//=========================================================================================
===elderly===
wobbles in!

"I'm a {RANDOM(70,100)} year old woman,"
"How are you today?"

+I'm fine
    "Oh that's great!"
    ++How are you?
        "Oh I'm just fine, thanks. Say, you look like a fine young one, here, take a gold coin"
        +++No, that's ok, you can keep it.
            "REALLY? Oh you're such a sweetie"
            ~gain(niceness, 5)
            ++++Thank you very much!
                "I should be going now, shouldn't I?"
                +++++I guess so. Goodbye!
                    "It was very nice talking to you"
                    She staggers away very happily
                    ~gain(niceness, 10)
                +++++YES! YOU SHOULD BE! Why are you even here in the first place?
                    "Oh dear oh dear!"
                    She staggers away very sadly
                    ~lose(niceness, 10)
            ++++Yeah I know. Now go away
                "Oh dear oh dear!"
                She staggers away very sadly
                ~lose(niceness, 10)
        +++Why thank you!
            ~gain(gold, 1)
            ~lose(niceness, 3)
            You gained one gold coin!
            "I should be going now, shouldn't I?"
            ++++YES! YOU SHOULD BE! Why are you even here in the first place?
                "Oh dear oh dear!"
                She staggers away very sadly
                ~lose(niceness, 10)
            ++++I guess so. Goodbye!
                "It was nice talking to you!"
                She staggers away sorta happily
                ~gain(niceness, 6)
    ++Yeah, now can you please leave me alone?
        "Oh I guess so..."
        She staggers away very sadly
        ~lose(niceness, 10)
+I'm not fine
    "Oh deary tell me what's the matter?"
    ++I'm about to lose this game
        "Wha.. what game?"
        +++Oh it's a game where you have to... uh...get money and population and stuff
            "Oh, that sounds very nice"
            ++++Yes, it sure does.
                "Well I hope you have a nice day!"
                +++++I hope you do too!
                    "Goodbye!"
                     She staggers away very happily
                    ~gain(niceness, 10)
                +++++MY GOSH WHEN WILL THIS CONVERSATION END?!
                    "Oh dear oh dear!"
                    She staggers away very sadly
                    ~lose(niceness, 10)
            ++++No it doesn't. Idiot.
                "Oh dear oh dear!"
                She staggers away very sadly
                ~lose(niceness, 10)
        +++Nothing! You old HAG!
            "Oh dear oh dear!"
            She staggers away very sadly
            ~lose(niceness, 10)
    ++NONE OF YOUR BUSINESS!
        "Oh dear oh dear!"
        She staggers away very sadly
        ~lose(niceness, 10)
+Go away!
    "Oh dear oh dear!"
    She staggers away very sadly
    ~lose(niceness, 10)
    -
    -> next
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
=== win ===
You win!
Your population was: {pop}
Your gold was: {gold}
Your niceness was: {niceness}
-> DONE







