var storyContent = ﻿{"inkVersion":19,"root":[["^You are the king of a small village. You need to expand your village by gaining population and gold. You win by getting to 100 population or 1000 gold","\n",["ev",{"^->":"0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^Start",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.2.s"},[{"#n":"$r2"}],{"->":"random"},"\n",{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"lose":[{"temp=":"amount"},{"temp=":"x"},"ev",{"VAR?":"x"},{"VAR?":"amount"},"-","/ev",{"temp=":"x","re":true},{"#f":1}],"gain":[{"temp=":"amount"},{"temp=":"x"},"ev",{"VAR?":"x"},{"VAR?":"amount"},"+","/ev",{"temp=":"x","re":true},{"#f":1}],"next":[["^Population: ","ev",{"VAR?":"pop"},"out","/ev","\n","^Gold: ","ev",{"VAR?":"gold"},"out","/ev","\n",["ev",{"^->":"next.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Next",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"next.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n",{"->":"random"},{"#f":5}]}],{"#f":1}],"random":[["ev",{"VAR?":"gold"},999,">",{"VAR?":"pop"},99,">","||","/ev",{"->":".^.b","c":true},{"b":["\n",{"->":"win"},{"->":"random.2"},null]}],[{"->":".^.b"},{"b":["\n","ev",1,53,"rnd","/ev",{"VAR=":"choice","re":true},"\n",["ev",{"VAR?":"choice"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A prince ",{"->":"prince"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},2,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^Some random pretty rich dude ",{"->":"prince"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},3,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A duke ",{"->":"prince"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},4,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A retired banker ",{"->":"prince"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},5,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^Your grandma ",{"->":"elderly"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},6,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^An old woman ",{"->":"elderly"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},7,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^An elderly woman ",{"->":"elderly"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},8,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A sweet old lady ",{"->":"elderly"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},9,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^Your great aunt ",{"->":"elderly"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},10,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^An old hag ",{"->":"elderly"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},11,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^One of your enemy's prisoners ",{"->":"peasant"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},12,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A lost blacksmith ",{"->":"peasant"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},13,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A peasant ",{"->":"peasant"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},14,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A normal person ",{"->":"peasant"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},15,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A random peon ",{"->":"peasant"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},16,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A lowlife serf ",{"->":"peasant"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},17,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A brick mason ",{"->":"peasant"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},18,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A tractor driver ",{"->":"peasant"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},19,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A rustic countryman ",{"->":"peasant"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},20,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A robber ",{"->":"robber"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},21,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A thief ",{"->":"robber"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},22,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A burglar ",{"->":"robber"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},23,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A shoplifter ",{"->":"robber"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},24,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A farmer ",{"->":"farmer"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},25,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A breadmaker ",{"->":"farmer"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},26,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^An agricultural worker ",{"->":"farmer"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},27,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A cook ",{"->":"farmer"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},28,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A cow milker ",{"->":"farmer"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},29,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A chef ",{"->":"farmer"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},30,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A pizza topping designer ",{"->":"farmer"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},31,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A weird purple fuzzball randomly appears! ",{"->":"fuzzball"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},32,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^An average looking fuzzball randomly appears! ",{"->":"fuzzball"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},33,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^An alchemist ",{"->":"alchemist"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},34,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A scientist ",{"->":"alchemist"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},35,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A nerd ",{"->":"alchemist"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},36,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^Someone majoring in a gold-duplicating ",{"->":"alchemist"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},37,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^An alchemist ",{"->":"alchemist"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},38,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A mad genius ",{"->":"alchemist"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},39,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A dragon ",{"->":"dragon"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},40,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A group of peasants ",{"->":"village"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},41,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A bunch of lowsy peasants ",{"->":"village"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},42,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A bunch of citizens ",{"->":"village"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},43,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A group of helots ",{"->":"village"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},44,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A hoard of tiny gnomes ",{"->":"village"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},45,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A tribe of elves ",{"->":"village"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},46,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A family of bird-people ",{"->":"village"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},47,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A sophisticated group of dogs ",{"->":"village"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},48,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A group of soldiers ",{"->":"knights"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},49,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A group of knights ",{"->":"knights"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},50,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A group of warriors ",{"->":"knights"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},51,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A huge rainstorm comes! ",{"->":"disaster"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},52,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A giant earthquake happens! ",{"->":"disaster"},"\n",{"->":".^.^.^.61"},null]}],["ev",{"VAR?":"choice"},53,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^A tornado blasts through your village! ",{"->":"disaster"},"\n",{"->":".^.^.^.61"},null]}],"nop","\n",{"->":"random.2"},null]}],"nop","\n",{"#f":1}],"village":[["^appears!","\n","^\"Our entire village was destroyed and we are the only survivors. We need a new place to stay. Will you let us live in your village?\"","\n",["ev",{"^->":"village.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Sure",{"->":"$r","var":true},null]}],["ev",{"^->":"village.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^No way!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"village.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^You let them live in your village and buy them houses","\n","ev",5,15,"rnd","/ev",{"VAR=":"stuff","re":true},"\n","ev",{"^var":"pop","ci":-1},{"VAR?":"stuff"},{"f()":"gain"},"pop","/ev","\n","ev",5,{"VAR?":"stuff"},"*","/ev",{"VAR=":"stuff","re":true},"ev",{"^var":"gold","ci":-1},{"VAR?":"stuff"},{"f()":"lose"},"pop","/ev","\n","ev",{"^var":"niceness","ci":-1},3,{"f()":"gain"},"pop","/ev","\n","^You lost ","ev",{"VAR?":"stuff"},"out","/ev","^ gold, but gained ","ev",{"VAR?":"stuff"},5,"/","out","/ev","^ population!","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"village.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","^They walk away very sadly. One of them is even crying loudly","\n","ev",{"^var":"niceness","ci":-1},6,{"f()":"lose"},"pop","/ev","\n","^You didn't gain anything. Not even friendship.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"next"},{"#f":5}]}],{"#f":1}],"peasant":[["^who wants to live in your village appears!","\n",["ev",{"^->":"peasant.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Let him stay",{"->":"$r","var":true},null]}],["ev",{"^->":"peasant.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Kill him and take his gold",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"peasant.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^You let him stay. He brought his wife and kids along too!","\n","ev",3,5,"rnd","/ev",{"VAR=":"stuff","re":true},"\n","ev",{"^var":"pop","ci":-1},{"VAR?":"stuff"},{"f()":"gain"},"pop","/ev","\n","ev",{"^var":"niceness","ci":-1},2,{"f()":"gain"},"pop","/ev","\n","^You gained ","ev",{"VAR?":"stuff"},"out","/ev","^ population!","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"peasant.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^You rudely kill him and take his gold.","\n","ev",3,10,"rnd","/ev",{"VAR=":"stuff","re":true},"\n","ev",{"^var":"gold","ci":-1},{"VAR?":"stuff"},{"f()":"gain"},"pop","/ev","\n","ev",{"^var":"niceness","ci":-1},3,{"f()":"lose"},"pop","/ev","\n","^You gained ","ev",{"VAR?":"stuff"},"out","/ev","^ gold!","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"next"},{"#f":5}]}],{"#f":1}],"prince":[["^who wants to live in your castle appears!","\n",["ev",{"^->":"prince.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Let him stay",{"->":"$r","var":true},null]}],["ev",{"^->":"prince.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Kill him and take his gold",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"prince.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^You let him stay. He brought his wife and kids along too!","\n","ev",5,10,"rnd","/ev",{"VAR=":"stuff","re":true},"\n","ev",{"^var":"pop","ci":-1},{"VAR?":"stuff"},{"f()":"gain"},"pop","/ev","\n","ev",{"^var":"niceness","ci":-1},{"VAR?":"stuff"},{"f()":"gain"},"pop","/ev","\n","^You gained ","ev",{"VAR?":"stuff"},"out","/ev","^ population, but lost ","ev",2,{"VAR?":"stuff"},"*","out","/ev","^ gold!","\n","ev",2,{"VAR?":"stuff"},"*","/ev",{"VAR=":"stuff","re":true},"ev",{"^var":"gold","ci":-1},{"VAR?":"stuff"},{"f()":"lose"},"pop","/ev","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"prince.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^You rudely kill him and take his gold.","\n","ev",10,5,10,"rnd","*","/ev",{"VAR=":"stuff","re":true},"\n","ev",{"^var":"gold","ci":-1},{"VAR?":"stuff"},{"f()":"gain"},"pop","/ev","\n","ev",{"^var":"niceness","ci":-1},5,{"f()":"lose"},"pop","/ev","\n","^You gained ","ev",{"VAR?":"stuff"},"out","/ev","^ gold!","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"next"},{"#f":5}]}],{"#f":1}],"robber":[["^appears out of nowhere!","\n","^\"Mwehehehe! I'm gunna steal some a yer gold! Hehehehehe!\"","\n",["ev",{"^->":"robber.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Yes!",{"->":"$r","var":true},null]}],["ev",{"^->":"robber.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^No!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"robber.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^\"Uh... Ok I will!\"","\n","ev",10,1,3,"rnd","*","/ev",{"VAR=":"stuff","re":true},"\n","ev",{"^var":"gold","ci":-1},{"VAR?":"stuff"},{"f()":"lose"},"pop","/ev","\n","ev",{"^var":"niceness","ci":-1},3,{"f()":"gain"},"pop","/ev","\n","^You lost ","ev",{"VAR?":"stuff"},"out","/ev","^ gold!","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"robber.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","^\"Well too bad! I'm going to anyway! Haha!\"","\n","ev",10,5,10,"rnd","*","/ev",{"VAR=":"stuff","re":true},"\n","ev",{"^var":"gold","ci":-1},{"VAR?":"stuff"},{"f()":"lose"},"pop","/ev","\n","^You lost ","ev",{"VAR?":"stuff"},"out","/ev","^ gold!","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"next"},{"#f":5}]}],{"#f":1}],"dragon":[["^appears and politely asks, \"please choose if I shall take half of your gold, or eat half of your people. No need to argue.\"","\n",["ev",{"^->":"dragon.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Lose half of your gold!",{"->":"$r","var":true},null]}],["ev",{"^->":"dragon.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Lose half of your population!",{"->":"$r","var":true},null]}],["ev",{"^->":"dragon.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Say, \"Niether!\", and attempt to slay the dragon",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"dragon.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"gold"},2,"/","/ev",{"VAR=":"stuff","re":true},"ev",{"^var":"gold","ci":-1},{"VAR?":"stuff"},{"f()":"lose"},"pop","/ev","\n","^You lost ","ev",{"VAR?":"gold"},2,"/","out","/ev","^ gold!","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"dragon.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"pop"},2,"/","/ev",{"VAR=":"stuff","re":true},"ev",{"^var":"pop","ci":-1},{"VAR?":"stuff"},{"f()":"lose"},"pop","/ev","\n","^You lost ","ev",{"VAR?":"pop"},2,"/","out","/ev","^ people!","\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"dragon.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","ev",1,3,"rnd","/ev",{"VAR=":"dragonluck","re":true},"\n",["ev",{"VAR?":"dragonluck"},3,"<","/ev",{"->":".^.b","c":true},{"b":["\n","^You fail miserably!","\n","^\"You brought this upon yourself you know\"","\n","ev",{"VAR?":"gold"},2,"/","/ev",{"VAR=":"stuff","re":true},"ev",{"^var":"gold","ci":-1},{"VAR?":"stuff"},{"f()":"lose"},"pop","/ev","\n","ev",{"VAR?":"pop"},2,"/","/ev",{"VAR=":"stuff","re":true},"ev",{"^var":"pop","ci":-1},{"VAR?":"stuff"},{"f()":"lose"},"pop","/ev","\n","^You lost ","ev",{"VAR?":"gold"},2,"/","out","/ev","^ gold and ","ev",{"VAR?":"pop"},2,"/","out","/ev","^ people! Sheesh!","\n",{"->":"next"},{"->":".^.^.^.16"},null]}],["ev",{"VAR?":"dragonluck"},3,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^You somehow manage to defeat the dragon!","\n","^\"Ouch dude\"","\n","ev",500,"/ev",{"VAR=":"stuff","re":true},"ev",{"^var":"gold","ci":-1},{"VAR?":"stuff"},{"f()":"gain"},"pop","/ev","\n","^You gained ","ev",{"VAR?":"stuff"},"out","/ev","^ gold!","\n",{"->":"next"},{"->":".^.^.^.16"},null]}],"nop","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"next"},{"#f":5}]}],{"#f":1}],"fuzzball":[[["ev",{"^->":"fuzzball.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Say hello",{"->":"$r","var":true},null]}],["ev",{"^->":"fuzzball.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Tell it to go away",{"->":"$r","var":true},null]}],["ev",{"^->":"fuzzball.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Ignore it",{"->":"$r","var":true},null]}],["ev",{"^->":"fuzzball.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^Attack it!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"fuzzball.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^The fuzzball looks at you...somehow.","\n","^But it stays where it is","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["ev",{"^->":"fuzzball.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^The fuzzball grins menacingly but does not go away","\n",{"->":".^.^.^"},{"#f":5}],"c-2":["ev",{"^->":"fuzzball.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^The fuzzball stays there for a couple minutes","\n","^but then got bored so it left","\n",{"->":"next"},{"#f":5}],"c-3":["ev",{"^->":"fuzzball.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^You try to attack the fuzzball!","\n","^The fuzzball kills some people with its ferocious claws somehow!","\n","ev",{"VAR?":"pop"},4,"/","/ev",{"VAR=":"stuff","re":true},"ev",{"^var":"pop","ci":-1},{"VAR?":"stuff"},{"f()":"lose"},"pop","/ev","\n","ev",{"^var":"niceness","ci":-1},3,{"f()":"lose"},"pop","/ev","\n","^You lost ","ev",{"VAR?":"stuff"},"out","/ev","^ people!","\n",{"->":"next"},{"#f":5}]}],{"#f":1}],"knights":[["^who are looking to be hired appear!","\n",["ev",{"^->":"knights.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Hire them",{"->":"$r","var":true},null]}],["ev",{"^->":"knights.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Don't hire them",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"knights.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev",5,15,"rnd","/ev",{"VAR=":"stuff","re":true},"\n","ev",{"^var":"pop","ci":-1},{"VAR?":"stuff"},{"f()":"gain"},"pop","/ev","\n","ev",{"^var":"gold","ci":-1},{"VAR?":"stuff"},{"f()":"lose"},"pop","/ev","\n","ev",{"^var":"niceness","ci":-1},3,{"f()":"gain"},"pop","/ev","\n","^You gain ","ev",{"VAR?":"stuff"},2,"/","out","/ev","^ people, but lost ","ev",{"VAR?":"stuff"},"out","/ev","^ gold!","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"knights.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^You didn't lose anything, except friendship","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"next"},{"#f":5}]}],{"#f":1}],"disaster":[["^You need to repair it or people will leave!","\n",["ev",{"^->":"disaster.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Pay ","ev",{"VAR?":"pop"},"out","/ev","^ gold",{"->":"$r","var":true},null]}],["ev",{"^->":"disaster.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Don't pay",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"disaster.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev",{"^var":"gold","ci":-1},{"VAR?":"pop"},{"f()":"lose"},"pop","/ev","\n","^You lost ","ev",{"VAR?":"pop"},"out","/ev","^ gold, but didn't lose any population!","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"disaster.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^A lot of people are unhappy","\n","ev",{"VAR?":"pop"},4,"/","/ev",{"VAR=":"stuff","re":true},"ev",{"^var":"pop","ci":-1},{"VAR?":"stuff"},{"f()":"lose"},"pop","/ev","\n","ev",{"^var":"niceness","ci":-1},10,{"f()":"lose"},"pop","/ev","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"next"},{"#f":5}]}],{"#f":1}],"alchemist":[["^appears!","\n","^\"I might double any amount of gold you give me, or I might lose it\"","\n","ev",1,2,"rnd","/ev",{"VAR=":"stuff","re":true},"\n",["ev",{"^->":"alchemist.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Give none",{"->":"$r","var":true},null]}],["ev",{"^->":"alchemist.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Give him ","ev",{"VAR?":"gold"},2,"/","out","/ev",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"alchemist.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n","^He is very offended","\n","ev",{"^var":"niceness","ci":-1},2,{"f()":"lose"},"pop","/ev","\n","^You gain nothing. Including friendship","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"alchemist.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n","^You pay him half your gold","\n","^He's happy","\n",["ev",{"VAR?":"stuff"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"gold"},2,"/","/ev",{"VAR=":"stuff","re":true},"ev",{"^var":"gold","ci":-1},{"VAR?":"stuff"},{"f()":"lose"},"pop","/ev","\n","^You lost your gold. Sorry.","\n",{"->":".^.^.^.13"},null]}],["ev",{"VAR?":"stuff"},2,"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"gold"},2,"/","/ev",{"VAR=":"stuff","re":true},"ev",{"^var":"gold","ci":-1},{"VAR?":"stuff"},{"f()":"gain"},"pop","/ev","\n","^You gained ","ev",{"VAR?":"stuff"},"out","/ev","^ gold!","\n",{"->":".^.^.^.13"},null]}],"nop","\n","ev",{"^var":"niceness","ci":-1},3,{"f()":"gain"},"pop","/ev","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"next"},{"#f":5}]}],{"#f":1}],"farmer":[["^appears!","\n","^\"I'll feed yer people, but it'll cost ya!\"","\n",["ev",{"^->":"farmer.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^No. Go away you ugly idiot!",{"->":"$r","var":true},null]}],["ev",{"^->":"farmer.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Pay ","ev",{"VAR?":"pop"},"out","/ev","^ gold for ","ev",{"VAR?":"pop"},"out","/ev","^ population",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"farmer.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^He scowls at you.","\n","^You gain nothing. Except hate","\n","ev",{"^var":"niceness","ci":-1},5,{"f()":"lose"},"pop","/ev","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"farmer.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","^You lost ","ev",{"VAR?":"pop"},"out","/ev","^ gold, but gained ","ev",{"VAR?":"pop"},"out","/ev","^ people!","\n","ev",{"^var":"gold","ci":-1},{"VAR?":"pop"},{"f()":"lose"},"pop","/ev","\n","ev",{"^var":"pop","ci":-1},{"VAR?":"pop"},{"f()":"gain"},"pop","/ev","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"next"},{"#f":5}]}],{"#f":1}],"elderly":[["^wobbles in!","\n","^\"I'm a ","ev",70,100,"rnd","out","/ev","^ year old woman,\"","\n","^\"How are you today?\"","\n",["ev",{"^->":"elderly.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^I'm fine",{"->":"$r","var":true},null]}],["ev",{"^->":"elderly.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^I'm not fine",{"->":"$r","var":true},null]}],["ev",{"^->":"elderly.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Go away!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"elderly.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],"\n","^\"Oh that's great!\"","\n",[["ev",{"^->":"elderly.0.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^How are you?",{"->":"$r","var":true},null]}],["ev",{"^->":"elderly.0.c-0.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Yeah, now can you please leave me alone?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"elderly.0.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^\"Oh I'm just fine, thanks. Say, you look like a fine young one, here, take a gold coin\"","\n",[["ev",{"^->":"elderly.0.c-0.9.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^No, that's ok, you can keep it.",{"->":"$r","var":true},null]}],["ev",{"^->":"elderly.0.c-0.9.c-0.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Why thank you!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"elderly.0.c-0.9.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^\"REALLY? Oh you're such a sweetie\"","\n","ev",{"^var":"niceness","ci":-1},5,{"f()":"gain"},"pop","/ev","\n",[["ev",{"^->":"elderly.0.c-0.9.c-0.9.c-0.16.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Thank you very much!",{"->":"$r","var":true},null]}],["ev",{"^->":"elderly.0.c-0.9.c-0.9.c-0.16.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Yeah I know. Now go away",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"elderly.0.c-0.9.c-0.9.c-0.16.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^\"I should be going now, shouldn't I?\"","\n",[["ev",{"^->":"elderly.0.c-0.9.c-0.9.c-0.16.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^I guess so. Goodbye!",{"->":"$r","var":true},null]}],["ev",{"^->":"elderly.0.c-0.9.c-0.9.c-0.16.c-0.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^YES! YOU SHOULD BE! Why are you even here in the first place?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"elderly.0.c-0.9.c-0.9.c-0.16.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^\"It was very nice talking to you\"","\n","^She staggers away very happily","\n","ev",{"^var":"niceness","ci":-1},10,{"f()":"gain"},"pop","/ev","\n",{"->":"elderly.0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"elderly.0.c-0.9.c-0.9.c-0.16.c-0.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^\"Oh dear oh dear!\"","\n","^She staggers away very sadly","\n","ev",{"^var":"niceness","ci":-1},10,{"f()":"lose"},"pop","/ev","\n",{"->":"elderly.0.g-0"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"elderly.0.c-0.9.c-0.9.c-0.16.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^\"Oh dear oh dear!\"","\n","^She staggers away very sadly","\n","ev",{"^var":"niceness","ci":-1},10,{"f()":"lose"},"pop","/ev","\n",{"->":"elderly.0.g-0"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"elderly.0.c-0.9.c-0.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","ev",{"^var":"gold","ci":-1},1,{"f()":"gain"},"pop","/ev","\n","ev",{"^var":"niceness","ci":-1},3,{"f()":"lose"},"pop","/ev","\n","^You gained one gold coin!","\n","^\"I should be going now, shouldn't I?\"","\n",[["ev",{"^->":"elderly.0.c-0.9.c-0.9.c-1.25.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^YES! YOU SHOULD BE! Why are you even here in the first place?",{"->":"$r","var":true},null]}],["ev",{"^->":"elderly.0.c-0.9.c-0.9.c-1.25.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^I guess so. Goodbye!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"elderly.0.c-0.9.c-0.9.c-1.25.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^\"Oh dear oh dear!\"","\n","^She staggers away very sadly","\n","ev",{"^var":"niceness","ci":-1},10,{"f()":"lose"},"pop","/ev","\n",{"->":"elderly.0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"elderly.0.c-0.9.c-0.9.c-1.25.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^\"It was nice talking to you!\"","\n","^She staggers away sorta happily","\n","ev",{"^var":"niceness","ci":-1},6,{"f()":"gain"},"pop","/ev","\n",{"->":"elderly.0.g-0"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"elderly.0.c-0.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^\"Oh I guess so...\"","\n","^She staggers away very sadly","\n","ev",{"^var":"niceness","ci":-1},10,{"f()":"lose"},"pop","/ev","\n",{"->":".^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"elderly.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"\n","^\"Oh deary tell me what's the matter?\"","\n",[["ev",{"^->":"elderly.0.c-1.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^I'm about to lose this game",{"->":"$r","var":true},null]}],["ev",{"^->":"elderly.0.c-1.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^NONE OF YOUR BUSINESS!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"elderly.0.c-1.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^\"Wha.. what game?\"","\n",[["ev",{"^->":"elderly.0.c-1.9.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Oh it's a game where you have to... uh...get money and population and stuff",{"->":"$r","var":true},null]}],["ev",{"^->":"elderly.0.c-1.9.c-0.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Nothing! You old HAG!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"elderly.0.c-1.9.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^\"Oh, that sounds very nice\"","\n",[["ev",{"^->":"elderly.0.c-1.9.c-0.9.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Yes, it sure does.",{"->":"$r","var":true},null]}],["ev",{"^->":"elderly.0.c-1.9.c-0.9.c-0.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^No it doesn't. Idiot.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"elderly.0.c-1.9.c-0.9.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^\"Well I hope you have a nice day!\"","\n",[["ev",{"^->":"elderly.0.c-1.9.c-0.9.c-0.9.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^I hope you do too!",{"->":"$r","var":true},null]}],["ev",{"^->":"elderly.0.c-1.9.c-0.9.c-0.9.c-0.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^MY GOSH WHEN WILL THIS CONVERSATION END?!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"elderly.0.c-1.9.c-0.9.c-0.9.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^\"Goodbye!\"","\n","^She staggers away very happily","\n","ev",{"^var":"niceness","ci":-1},10,{"f()":"gain"},"pop","/ev","\n",{"->":"elderly.0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"elderly.0.c-1.9.c-0.9.c-0.9.c-0.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^\"Oh dear oh dear!\"","\n","^She staggers away very sadly","\n","ev",{"^var":"niceness","ci":-1},10,{"f()":"lose"},"pop","/ev","\n",{"->":"elderly.0.g-0"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"elderly.0.c-1.9.c-0.9.c-0.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^\"Oh dear oh dear!\"","\n","^She staggers away very sadly","\n","ev",{"^var":"niceness","ci":-1},10,{"f()":"lose"},"pop","/ev","\n",{"->":"elderly.0.g-0"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"elderly.0.c-1.9.c-0.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^\"Oh dear oh dear!\"","\n","^She staggers away very sadly","\n","ev",{"^var":"niceness","ci":-1},10,{"f()":"lose"},"pop","/ev","\n",{"->":"elderly.0.g-0"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"elderly.0.c-1.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^\"Oh dear oh dear!\"","\n","^She staggers away very sadly","\n","ev",{"^var":"niceness","ci":-1},10,{"f()":"lose"},"pop","/ev","\n",{"->":".^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"c-2":["ev",{"^->":"elderly.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],"\n","^\"Oh dear oh dear!\"","\n","^She staggers away very sadly","\n","ev",{"^var":"niceness","ci":-1},10,{"f()":"lose"},"pop","/ev","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"next"},{"#f":5}]}],{"#f":1}],"win":["^You win!","\n","^Your population was: ","ev",{"VAR?":"pop"},"out","/ev","\n","^Your gold was: ","ev",{"VAR?":"gold"},"out","/ev","\n","^Your niceness was: ","ev",{"VAR?":"niceness"},"out","/ev","\n","done",{"#f":1}],"global decl":["ev",10,{"VAR=":"pop"},100,{"VAR=":"gold"},10,{"VAR=":"choicerange"},1,{"VAR=":"choice"},0,{"VAR=":"niceness"},0,{"VAR=":"stuff"},0,{"VAR=":"dragonluck"},"/ev","end",null],"#f":1}],"listDefs":{}};