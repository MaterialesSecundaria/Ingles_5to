var introLock=0;
var videoInterval;
var targetSub=0;
var projectName="Full Blast Plus 4 Greek";
//version 2.1


var Subs=[
// {id:1,SubsArray :[{Start:9541,End:11791,Text:"Hi! My name is Joanna. "},{Start:12958,End:16041,Text:"This month, I’m taking part in a creativity challenge.  "},{Start:17625,End:20583,Text:"Every week, I get an email with a different challenge. "},{Start:22208,End:23791,Text:"I try to do it and then "},{Start:23791,End:25500,Text:"post pictures of my work online."},{Start:27333,End:29333,Text:"The first challenge was to make something "},{Start:29333,End:31166,Text:"using an old piece of clothing. "},{Start:32833,End:36125,Text:"I used an old pair of jeans to make a pencil holder. "},{Start:38041,End:39583,Text:"I was amazed when I saw "},{Start:39583,End:41333,Text:"what other people had made. "},{Start:41333,End:43250,Text:"Their ideas were so unique! "},{Start:44458,End:46083,Text:"I’m used to writing stories, "},{Start:46083,End:47916,Text:"but the second challenge was more difficult "},{Start:47916,End:49250,Text:"than I had expected."},{Start:50416,End:53041,Text:"We had to write a one hundred-word story "},{Start:53041,End:55875,Text:"including ten objects of the same colour."},{Start:56833,End:58458,Text:"I chose white, "},{Start:58458,End:61250,Text:"and I’m quite proud of how my story turned out "},{Start:61250,End:63416,Text:"– it included a table tennis ball,"},{Start:63416,End:66458,Text:"a cloud and vanilla ice cream! "},{Start:67625,End:69875,Text:"This week’s challenge, the third one, "},{Start:69875,End:71916,Text:"is the hardest one so far: "},{Start:72750,End:75750,Text:"you have to think of twenty different uses "},{Start:75750,End:77208,Text:"for a paper clip. "},{Start:77583,End:80208,Text:"Aargh! How many can you think of?"}]},
// {id:2,SubsArray :[{Start:9541,End:11333,Text:"Hi, I’m Jason."},{Start:12000,End:13791,Text:" Yesterday my brother and I watched"},{Start:13791,End:15208,Text:"lots of videos about people"},{Start:15208,End:17375,Text:"who have achieved amazing feats."},{Start:18958,End:20708,Text:"Like the teenage boy from China"},{Start:20708,End:23000,Text:"who managed to solve three Rubik’s cubes"},{Start:23000,End:25916,Text:" at the same time using his hands and feet!"},{Start:25916,End:28708,Text:"However, this is not a video about him."},{Start:29541,End:31500,Text:"While we were watching the videos,"},{Start:31500,End:33166,Text:" I was thinking about my friends"},{Start:33166,End:34250,Text:" and people I know."},{Start:34666,End:37375,Text:"Have any of them ever achieved an amazing feat?"},{Start:39125,End:41250,Text:"Then I remembered my PE teacher."},{Start:41250,End:42833,Text:" He once climbed Mount Everest,  "},{Start:42833,End:45125,Text:" which is pretty incredible if you think about it!"},{Start:45750,End:47916,Text:"And then I started thinking about myself."},{Start:48625,End:49833,Text:"What amazing feats have I "},{Start:49833,End:51500,Text:" achieved in my lifetime?"},{Start:52583,End:53625,Text:"I couldn’t think of any…. "},{Start:54083,End:55333,Text:" Quite disappointing, huh?"},{Start:56458,End:57291,Text:"This morning,"},{Start:57291,End:59708,Text:"I decided to make breakfast for the whole family. "},{Start:60250,End:62458,Text:" And I managed to flip a pancake!"},{Start:63000,End:65416,Text:" Well, that’s my amazing feat of the day!"},{Start:65875,End:66708,Text:"What's yours?"}]},
// {id:3,SubsArray :[{Start:9708,End:11416,Text:"This month at my school,"},{Start:11416,End:12791,Text:" we have been discussing nature"},{Start:12791,End:14500,Text:"and environmental issues,"},{Start:14500,End:16750,Text:" and we’ve been visiting different places. "},{Start:17708,End:19458,Text:"We’ve been to a nearby forest,"},{Start:19458,End:20375,Text:"where we went hiking"},{Start:20375,End:22375,Text:"and saw different kinds of trees, "},{Start:24291,End:28958,Text:"a river and a cave. "},{Start:29916,End:31666,Text:"We also talked about the animals "},{Start:31666,End:33083,Text:" that live in all these places…"},{Start:36916,End:38958,Text:"We’ve visited a recycling centre"},{Start:38958,End:39875,Text:"where they showed us "},{Start:39875,End:42208,Text:"what they do with all the things we recycle…."},{Start:44833,End:47291,Text:"We’ve also taken part in a beach clean-up…."},{Start:48416,End:51041,Text:"You can’t imagine how much rubbish we found! "},{Start:51833,End:53250,Text:" It’s a real shame!"},{Start:54000,End:55375,Text:" People have to understand that they "},{Start:55375,End:57041,Text:"shouldn’t leave their rubbish behind."},{Start:59500,End:61291,Text:"This week, we’re working in groups."},{Start:62500,End:64374,Text:" Each group has to do a project."},{Start:65708,End:68375,Text:" My group has decided to make a butterfly garden!"},{Start:69833,End:72458,Text:"We’ve already done research on flowers and plants "},{Start:72458,End:74041,Text:"that can attract butterflies,"},{Start:74041,End:75458,Text:" and yesterday we bought "},{Start:75458,End:76916,Text:"some seeds and planted them."},{Start:80791,End:82666,Text:" We still need to do a lot of work,"},{Start:82666,End:83916,Text:" but I’m sure we’ll make"},{Start:83916,End:85541,Text:"a beautiful butterfly garden!"},{Start:88166,End:89666,Text:"Our planet is our home,"},{Start:89666,End:92083,Text:"and we should all respect and protect it!"}]},
// {id:4,SubsArray :[{Start:9666,End:12750,Text:"Hi! My name’s Brandon, and I’m fifteen."},{Start:13708,End:14875,Text:" When I turn twenty, "},{Start:14875,End:17166,Text:" I plan on going on a long holiday"},{Start:17166,End:19291,Text:"—maybe travel for a month or two. "},{Start:20583,End:21666,Text:"The destination?"},{Start:22375,End:25375,Text:" Well, there are so many places I want to visit."},{Start:27333,End:29166,Text:" I’m going to visit Egypt for sure"},{Start:29166,End:30750,Text:"so that I can see the Pyramids "},{Start:31791,End:33958,Text:"— it’s been a dream of mine since I was young. "},{Start:35250,End:36250,Text:" Then who knows?"},{Start:36750,End:38166,Text:"Maybe China…"},{Start:39041,End:41125,Text:" Niagara Falls in Canada…"},{Start:42083,End:43291,Text:"or even the moon! "},{Start:45541,End:47500,Text:" Yes, if I had the chance,"},{Start:47500,End:49083,Text:"I would travel to space. "},{Start:50375,End:55333,Text:" I’m not scared! "},{Start:55333,End:58125,Text:"Although five years from now isn’t a long time,"},{Start:58125,End:60000,Text:"things will probably have changed"},{Start:60000,End:61375,Text:"by the time I’m twenty. "},{Start:63000,End:64666,Text:"Scientists say that trips to space"},{Start:64666,End:67000,Text:" will be available for people like you and me."},{Start:69583,End:70708,Text:" Can you imagine?"},{Start:72958,End:75000,Text:"There’s only one thing that’s worrying me."},{Start:75833,End:77791,Text:" I won’t be able to make my dreams come true"},{Start:77791,End:79500,Text:" unless I find the money."},{Start:81375,End:83625,Text:" So, I’ve already started saving up "},{Start:83625,End:84916,Text:" for this long holiday. "},{Start:85666,End:88125,Text:" Plus, I’ll be working part-time at my aunt’s"},{Start:88125,End:89666,Text:"travel agency this summer. "},{Start:90458,End:91625,Text:"Let’s hope I make it!"}]},
// {id:5,SubsArray :[{Start:9666,End:11750,Text:" Today I’m looking for some inspiration"},{Start:11750,End:13750,Text:" on how to spend my free time."},{Start:14791,End:16458,Text:"That’s why I’m interviewing my friends"},{Start:16458,End:18291,Text:"about how they spent the weekend!"},{Start:19750,End:20416,Text:"Margaret,"},{Start:20416,End:21166,Text:"did you do anything"},{Start:21166,End:22791,Text:"interesting at the weekend? "},{Start:24708,End:26875,Text:"My friends had organised a bowling night,"},{Start:26875,End:28333,Text:"so I spent my Saturday evening"},{Start:28333,End:29541,Text:"at the bowling alley."},{Start:30708,End:31625,Text:"What a night!"},{Start:32333,End:33291,Text:"It was so exciting"},{Start:33291,End:35291,Text:"and we had so much fun!"},{Start:38291,End:39500,Text:"What about you, Logan?"},{Start:40125,End:41791,Text:"I spent my Saturday afternoon"},{Start:41791,End:42916,Text:"playing video games."},{Start:43708,End:45125,Text:"Actually, my brother asked me"},{Start:45125,End:46625,Text:"to help him with a new video game"},{Start:46625,End:47375,Text:"he’d bought."},{Start:48500,End:49625,Text:"He had difficulty getting"},{Start:49625,End:51000,Text:"to the next level…"},{Start:51000,End:52208,Text:"and I didn’t mind helping him,"},{Start:52208,End:52791,Text:"of course!"},{Start:55791,End:56833,Text:"And you, Emma?"},{Start:57916,End:59416,Text:"I had booked tickets weeks before"},{Start:59416,End:61041,Text:"and I finally saw my favourite"},{Start:61041,End:63375,Text:"band perform live on Sunday."},{Start:64333,End:65249,Text:"I had been looking forward to"},{Start:65249,End:67250,Text:"this concert for such a long time!"},{Start:67875,End:68708,Text:"I even managed to get"},{Start:68708,End:70291,Text:"the lead singer’s autograph."},{Start:71250,End:73208,Text:"It was such a cool experience!"}]},
// {id:6,SubsArray :[{Start:9458,End:11041,Text:"Hi, I’m Katy. "},{Start:11708,End:13083,Text:"Today I’m going to talk to you "},{Start:13083,End:15166,Text:"about my family’s shopping habits."},{Start:16166,End:18208,Text:"I’ve got a brother and a sister."},{Start:18208,End:20125,Text:"They’re both crazy about shopping."},{Start:21166,End:22791,Text:"When they are given their pocket money,"},{Start:22791,End:24375,Text:"they immediately start thinking of "},{Start:24375,End:26083,Text:"what to spend it on "},{Start:26083,End:27416,Text:"and that’s usually things like"},{Start:27416,End:28791,Text:"clothes and gadgets."},{Start:30166,End:32124,Text:"They can spend hours and hours"},{Start:32124,End:33750,Text:"at our local shopping centre!"},{Start:34958,End:36375,Text:"Neither of them understands what"},{Start:36375,End:37958,Text:"‘saving up’ means."},{Start:39166,End:40166,Text:"As for me,"},{Start:40166,End:41125,Text:"I go shopping only"},{Start:41125,End:43250,Text:"when I really want to buy something."},{Start:43750,End:44666,Text:"At the moment,"},{Start:44666,End:45625,Text:"I’m saving up to buy"},{Start:45625,End:47333,Text:"a new pair of rollerblades!"},{Start:47833,End:48750,Text:"My old ones are too"},{Start:48750,End:49916,Text:"small for me."},{Start:51291,End:53125,Text:"I was given my first rollerblades"},{Start:53125,End:54333,Text:"when I was seven."},{Start:54708,End:56291,Text:"I was so happy that day."},{Start:57083,End:58833,Text:"And, as you can imagine,"},{Start:58833,End:60833,Text:"I have been rollerblading since then!"},{Start:64874,End:67625,Text:"Anyway, I try to be a clever shopper,"},{Start:67625,End:69041,Text:"so I’m waiting for the sales to get"},{Start:69041,End:70375,Text:"my new ones, when prices"},{Start:70375,End:71541,Text:"will have gone down."},{Start:72750,End:74333,Text:"I still haven’t decided on the colour,"},{Start:74333,End:75333,Text:"though…."},{Start:75333,End:76708,Text:"Green,"},{Start:76708,End:78000,Text:"blue"},{Start:78000,End:79208,Text:"or the red ones?"},{Start:80000,End:80958,Text:"Now that I think of it,"},{Start:80958,End:82333,Text:"it’s definitely either the blue"},{Start:82333,End:83500,Text:"or the red ones."},{Start:84208,End:85375,Text:"I can’t wait!"}]},
// {id:7,SubsArray :[{Start:9416,End:10125,Text:"Hello!"},{Start:10125,End:10958,Text:"I’m Julian"},{Start:11916,End:13916,Text:" and this is my great-grandfather, Liam."},{Start:15125,End:17208,Text:"I’m a typical teenager, I guess, "},{Start:17208,End:18208,Text:"who loves keeping up-to-date"},{Start:18208,End:20041,Text:"with the latest technology!"},{Start:20875,End:21791,Text:"But my great-grandfather"},{Start:21791,End:24125,Text:"is not the typical eighty-five-year old."},{Start:24125,End:24958,Text:"Lately,"},{Start:24958,End:27250,Text:"he’s really interested in technology"},{Start:27250,End:29333,Text:"and he won’t stop asking questions:"},{Start:30500,End:32583,Text:"‘What is Artificial Intelligence?"},{Start:34916,End:36333,Text:"How can I have my supermarket"},{Start:36333,End:38291,Text:"shopping delivered to my house?"},{Start:40333,End:41541,Text:"What is a drone?"},{Start:44250,End:45333,Text:"Can you help me set up a"},{Start:45333,End:47125,Text:"profile on social media?’"},{Start:49541,End:50958,Text:"So, I did,       "},{Start:50958,End:53083,Text:"but the questions didn’t stop."},{Start:53083,End:54000,Text:"The other day,"},{Start:54000,End:55500,Text:"he saw me using my mobile"},{Start:55500,End:57083,Text:"and asked me what I was doing."},{Start:58666,End:61375,Text:"I told him that I was updating my status,"},{Start:61375,End:63125,Text:"and that I did it every day,"},{Start:63125,End:64583,Text:"as social media were an important"},{Start:64583,End:65833,Text:"part of my life."},{Start:69083,End:70916,Text:"He said he would try it too…"},{Start:70916,End:72333,Text:"and he started updating his"},{Start:72333,End:74208,Text:"status every two hours!"}]},
// {id:8,SubsArray :[{Start:9458,End:11500,Text:"I’m so sleepy…. "},{Start:11500,End:13000,Text:"I’m so tired that I "},{Start:13000,End:14833,Text:"can’t concentrate on the test!"},{Start:15541,End:16875,Text:"I shouldn’t have stayed up so"},{Start:16875,End:19166,Text:"late last night watching TV."},{Start:19708,End:21916,Text:"But I just couldn’t fall asleep."},{Start:22833,End:25625,Text:"Perhaps if I hadn’t eaten all that junk food,"},{Start:25625,End:27750,Text:"it would have been easier to fall asleep."},{Start:28541,End:30833,Text:"Maybe I should change my lifestyle."},{Start:32875,End:34791,Text:"That’s me six months ago. "},{Start:36500,End:38583,Text:"I had become a couch potato."},{Start:40291,End:43166,Text:"I would spend my afternoons watching TV"},{Start:44250,End:45958,Text:"and eating crisps and sweets."},{Start:48291,End:50416,Text:"I discussed the issue with my parents,"},{Start:50416,End:51541,Text:"and we all decided to change"},{Start:51541,End:53333,Text:"our diet to a healthier one."},{Start:53916,End:55333,Text:"And of course, we made sure "},{Start:55333,End:57625,Text:"we didn’t buy any more junk food."},{Start:59458,End:60583,Text:"At school, coach Marley "},{Start:60583,End:62458,Text:"helped me make a fitness plan."},{Start:64749,End:66041,Text:"Now, six months later,"},{Start:66041,End:67625,Text:"I’m feeling healthier and"},{Start:67625,End:68750,Text:"more confident."},{Start:69791,End:71708,Text:"You may not really see the difference, "},{Start:71708,End:72916,Text:"but I can feel it."},{Start:74500,End:77083,Text:"Sometimes, I wish I had realised it sooner…"},{Start:77666,End:80166,Text:"but then again, it’s never too late, is it?"}]},

// /*Portal to Real Life*/
// {id:9,Parts:[{time:10000},{time:64000}],SubsArray : [{Start:13708,End:16916,Text:"Watch and listen."},{Start:19916,End:22416,Text:"fold (v.)"},{Start:25833,End:28750,Text:"scissors"},{Start:31833,End:34541,Text:"dry (v.) "},{Start:37791,End:40666,Text:"brush (n.)"},{Start:43625,End:46291,Text:"tear (v.) "},{Start:49750,End:52791,Text:"crane"},{Start:55791,End:58541,Text:"complex"},{Start:71625,End:74083,Text:"Origami is a Japanese word "},{Start:74083,End:76083,Text:"which means ‘folding paper’, "},{Start:76083,End:80250,Text:"and today it is an international art form."},{Start:80250,End:82958,Text:" Paper models can be simple designs,"},{Start:82958,End:84916,Text:"like a boat or flower, "},{Start:84916,End:87583,Text:" or more complex and detailed designs,"},{Start:87583,End:90333,Text:" like the skeleton of a dinosaur. "},{Start:90875,End:92583,Text:"Modern origami artists"},{Start:92583,End:95541,Text:"almost never use scissors to cut the paper,"},{Start:95541,End:99208,Text:" or glue to hold pieces together. "},{Start:99208,End:102375,Text:" Instead, they produce impressive works of art"},{Start:102375,End:105625,Text:"simply by folding the paper in various ways"},{Start:105625,End:110541,Text:" and some designs may require hundreds of folds! "},{Start:111000,End:113625,Text:"Some artists prefer to wet the paper a little"},{Start:113625,End:115583,Text:" by spraying it with water "},{Start:115583,End:118833,Text:"or by using a wet brush."},{Start:118833,End:122083,Text:"This technique is known as ‘wet folding’ "},{Start:122083,End:124333,Text:"and was invented by one of the greatest "},{Start:124333,End:127666,Text:"Japanese origami artists of the 20th century, "},{Start:127666,End:130833,Text:" the late Akira Yoshizawa. "},{Start:130833,End:133875,Text:"The biggest advantage of the wet-folding method "},{Start:133875,End:136250,Text:" is that you can make origami models"},{Start:136250,End:138708,Text:" that look a lot more lifelike."},{Start:138708,End:140958,Text:"And of course, the other advantage is"},{Start:140958,End:142750,Text:"that when the paper dries,"},{Start:142750,End:144375,Text:"it becomes hard, "},{Start:144375,End:147166,Text:"so the model doesn’t lose its shape."},{Start:147166,End:148833,Text:"You just need to make sure"},{Start:148833,End:151541,Text:" that the paper you’re using isn’t very thin"},{Start:151541,End:153666,Text:"and that you don’t get it too wet;"},{Start:153666,End:156500,Text:"otherwise, it just tears. "},{Start:157250,End:158458,Text:"Over the years,"},{Start:158458,End:161833,Text:"artists have developed many origami techniques,"},{Start:161833,End:165583,Text:"along with thousands of origami designs. "},{Start:166500,End:169791,Text:"They use paper of all shapes, sizes and colours,"},{Start:169791,End:173416,Text:"with patterned paper being a popular choice. "},{Start:174125,End:175208,Text:"There are artists"},{Start:175208,End:178583,Text:" who even use banknotes to make their models! "},{Start:179000,End:182583,Text:"Origami traditions exist today in many cultures,"},{Start:182583,End:184708,Text:" but exactly when and where"},{Start:184708,End:189000,Text:"the art of paper folding first started is unclear. "},{Start:189791,End:190875,Text:"Most people believe "},{Start:190875,End:193416,Text:"that origami comes from Japan,"},{Start:193416,End:197416,Text:"but we can’t actually be certain of that. "},{Start:197416,End:200000,Text:" It is thought that paper was invented in China "},{Start:200000,End:203000,Text:"sometime around the end of the 1st century, "},{Start:203000,End:204791,Text:" so it is possible that"},{Start:204791,End:208666,Text:" the oldest paper-folding models were made there."},{Start:208666,End:210750,Text:" Paper probably arrived in Japan"},{Start:210750,End:213333,Text:" from China during the 6th century, "},{Start:213333,End:214750,Text:"but who had the idea "},{Start:214750,End:216958,Text:" of folding it to create models first "},{Start:216958,End:220375,Text:" is something which experts argue over. "},{Start:220708,End:221625,Text:"Nevertheless,"},{Start:221625,End:224291,Text:"origami has a long history in both China "},{Start:224291,End:225541,Text:"and Japan,"},{Start:225541,End:227791,Text:"and has always been much more than just   "},{Start:227791,End:229666,Text:"artwork. "},{Start:230291,End:232041,Text:"We know that in China,"},{Start:232041,End:233791,Text:"it used to be the custom at funerals"},{Start:233791,End:235833,Text:" for people to burn golden nuggets "},{Start:235833,End:238250,Text:"made from folded paper. "},{Start:238250,End:240458,Text:" In Japan, the origami crane"},{Start:240458,End:242541,Text:" has always had a very special place"},{Start:242541,End:244125,Text:"in the culture."},{Start:244125,End:246583,Text:"According to ancient Japanese stories, "},{Start:246583,End:249416,Text:"anyone who folds one thousand cranes"},{Start:249416,End:251958,Text:"will have their wish come true."},{Start:251958,End:253083,Text:"Even now, "},{Start:253083,End:254875,Text:"children in Japan are taught"},{Start:254875,End:256416,Text:"how to make an origami crane"},{Start:256416,End:258791,Text:" at school or at home. "},{Start:259749,End:261958,Text:"Today, this ancient art form"},{Start:261958,End:264083,Text:"is practised all over the world"},{Start:264083,End:266791,Text:" and is a very popular free-time activity"},{Start:266791,End:270000,Text:"among people of all ages. "}]},
// {id:10,Parts:[{time:10000},{time:70000}],SubsArray : [{Start:13791,End:17125,Text:"Watch and listen."},{Start:19791,End:22458,Text:"octopus"},{Start:25708,End:27875,Text:"nest"},{Start:31708,End:34541,Text:"chimpanzee"},{Start:37666,End:40000,Text:"knot"},{Start:43500,End:45625,Text:"tools"},{Start:49666,End:51708,Text:"beak"},{Start:55791,End:57958,Text:"hole"},{Start:61708,End:64458,Text:"leader"},{Start:77583,End:80083,Text:"Intelligence is something which human beings"},{Start:80083,End:83166,Text:"are credited with having an awful lot of — "},{Start:83166,End:83666,Text:"after all,"},{Start:83666,End:86583,Text:" it’s a main characteristic of being human."},{Start:86583,End:88250,Text:"But there are plenty of examples"},{Start:88250,End:90916,Text:"of intelligence in the animal kingdom too."},{Start:90916,End:92916,Text:"In fact, you’ll be amazed"},{Start:92916,End:95833,Text:"by what some animals can do!"},{Start:95833,End:97416,Text:"In the underwater world,"},{Start:97416,End:99916,Text:"the octopus is easily one of the cleverest "},{Start:99916,End:101541,Text:"creatures out there."},{Start:101541,End:103125,Text:"Among its many talents,"},{Start:103125,End:105041,Text:"it has the most brilliant way to avoid"},{Start:105041,End:107375,Text:"becoming another animal’s dinner!"},{Start:107375,End:110458,Text:"Just watch as this octopus moves across a reef,"},{Start:110458,End:113875,Text:"changing colour to blend into its environment"},{Start:113875,End:115041,Text:"and make it more difficult"},{Start:115041,End:117208,Text:"for other creatures to spot it."},{Start:117208,End:118750,Text:"Pretty clever, hey?"},{Start:119583,End:122375,Text:"An octopus’s soft body and long arms"},{Start:122375,End:125125,Text:"allow it to easily change shape and make itself"},{Start:125125,End:128666,Text:"look like all kinds of different sea creatures."},{Start:128666,End:131500,Text:"This octopus is quite a talented little actor,"},{Start:131500,End:133166,Text:"as it sits at the bottom of the sea"},{Start:133166,End:135708,Text:"pretending to be a sea snake."},{Start:135708,End:137666,Text:"Octopuses have also been seen"},{Start:137666,End:139000,Text:"‘changing’ into rocks!"},{Start:140791,End:142333,Text:"Now, apart from being"},{Start:142333,End:144708,Text:"one of the most beautiful animals in the world,"},{Start:144708,End:146833,Text:"the dolphin also has one of the best"},{Start:146833,End:149041,Text:"and longest memories."},{Start:149041,End:151833,Text:"Scientists studying the bottlenose dolphin"},{Start:151833,End:153208,Text:"found that these dolphins"},{Start:153208,End:155041,Text:"can still remember one another"},{Start:155041,End:157041,Text:"even after not having seen each other"},{Start:157041,End:159041,Text:"for twenty years!"},{Start:159041,End:161000,Text:"Some scientists say that dolphins"},{Start:161000,End:163416,Text:"even have their very own ‘language’"},{Start:163416,End:165583,Text:"and communicate through a variety of different "},{Start:165583,End:169833,Text:"sounds including clicks, whistles and squeaks."},{Start:169833,End:171541,Text:"What these different sounds mean"},{Start:171541,End:173666,Text:"remains a mystery to us,"},{Start:173666,End:176416,Text:"but scientists think dolphins could be ‘talking’"},{Start:176416,End:178208,Text:"about all kinds of stuff,"},{Start:178208,End:180083,Text:"like where the best fish are!"},{Start:181833,End:182708,Text:"It would be impossible"},{Start:182708,End:184625,Text:"to talk about animal intelligence"},{Start:184625,End:186958,Text:"and not mention the chimpanzee,"},{Start:186958,End:188583,Text:"an animal that has a reputation"},{Start:188583,End:190166,Text:"for being the most intelligent"},{Start:190166,End:192041,Text:"non-human on the planet —"},{Start:192041,End:194125,Text:"and for good reason too!"},{Start:195041,End:197000,Text:"Chimpanzees are very sociable"},{Start:197000,End:198708,Text:"and live together in communities"},{Start:198708,End:199500,Text:"which can sometimes"},{Start:199500,End:203083,Text:"include as many as 150 chimps!"},{Start:203083,End:206333,Text:"And there is always a leader — the alpha male!"},{Start:206333,End:209291,Text:"One of their more impressive intellectual feats"},{Start:209291,End:211000,Text:"is their use of tools,"},{Start:211000,End:213208,Text:"something which only a few animal species"},{Start:213208,End:214500,Text:"are known to do"},{Start:214500,End:217791,Text:"and is a clear sign of their mighty brain."},{Start:217791,End:220083,Text:"This hungry chimp is getting creative"},{Start:220083,End:222208,Text:"and using a stick to take out insects"},{Start:222208,End:225708,Text:"from a hole in the ground to eat as a tasty snack."},{Start:226958,End:229125,Text:"The animal kingdom is also full of examples"},{Start:229125,End:231875,Text:"of incredible animal architecture."},{Start:231875,End:234000,Text:"Take the weaver bird and its nest."},{Start:235208,End:237291,Text:"There are many species of weavers,"},{Start:237291,End:239250,Text:"with each building complex homes"},{Start:239250,End:241083,Text:"by ‘weaving’ together materials"},{Start:241083,End:243791,Text:"like grass and torn leaves."},{Start:243791,End:246625,Text:"The male is the one responsible for nest building,"},{Start:246625,End:249208,Text:"and his skills don’t stop at weaving."},{Start:249208,End:250750,Text:"To build its nest,"},{Start:250750,End:252333,Text:"a weaver also ties the grass"},{Start:252333,End:254625,Text:"into knots using its beak!"},{Start:254625,End:255583,Text:"When finished,"},{Start:255583,End:258374,Text:"the nest hangs beautifully from a branch."},{Start:258374,End:261208,Text:"A true work of art, I’m sure you’ll agree."},{Start:262541,End:263833,Text:"Some even have a long,"},{Start:263833,End:266125,Text:"thin entrance at the bottom like this one."},{Start:266791,End:267958,Text:"Thanks to this,"},{Start:267958,End:271708,Text:"other animals are unable to get into the nest."}]},
// {id:11,Parts:[{time:10000},{time:57000}],SubsArray : [{Start:13750,End:16958,Text:"Watch and listen."},{Start:19875,End:22416,Text:"branch"},{Start:25791,End:28041,Text:"roots"},{Start:31458,End:34250,Text:"bark (n.)"},{Start:37708,End:40166,Text:"dense"},{Start:43666,End:46541,Text:"canopy"},{Start:49958,End:52791,Text:"forest floor"},{Start:63833,End:66666,Text:"The trees around us, whether they are in cities,"},{Start:66666,End:67625,Text:" in forests, "},{Start:67625,End:69250,Text:"on mountains or elsewhere,"},{Start:69250,End:71375,Text:"are extremely important. "},{Start:72291,End:73958,Text:"Trees promote life. "},{Start:73958,End:74666,Text:"Without them, "},{Start:74666,End:78625,Text:"wildlife and human life on Earth would not exist. "},{Start:80250,End:82125,Text:"One of the main benefits of trees"},{Start:82125,End:83916,Text:"which helps us survive "},{Start:83916,End:86458,Text:"is that they provide us with oxygen. "},{Start:86458,End:87791,Text:"We breathe in oxygen"},{Start:87791,End:90583,Text:"and we breathe out carbon dioxide. "},{Start:90583,End:92666,Text:" Trees do the opposite."},{Start:92666,End:94458,Text:" They take in carbon dioxide"},{Start:94458,End:96750,Text:" and release oxygen."},{Start:96750,End:99250,Text:" Two mature trees can provide a year’s supply"},{Start:99250,End:101500,Text:"  of oxygen for four people. "},{Start:103208,End:104916,Text:"There are many different species of trees,"},{Start:104916,End:107125,Text:"displaying a great variety of shapes,"},{Start:107125,End:109291,Text:"forms and colours."},{Start:110333,End:111958,Text:"Trees can be enormous."},{Start:111958,End:113375,Text:"The tallest tree"},{Start:113375,End:116791,Text:"is the coniferous California coast redwood."},{Start:116791,End:119375,Text:"Redwoods live for thousands of years, "},{Start:119375,End:121041,Text:"and some have been known to reach over "},{Start:121041,End:123375,Text:"heights of 100 metres."},{Start:124333,End:126416,Text:"What about the smallest tree?"},{Start:126416,End:128458,Text:"We’ve all heard about bonsai trees,"},{Start:128458,End:130541,Text:"which the Japanese create by regularly"},{Start:130541,End:132000,Text:"cutting their branches and roots"},{Start:132000,End:133875,Text:"so that they stay small."},{Start:133875,End:136333,Text:"But that’s man-made."},{Start:136333,End:139625,Text:"The smallest tree in the world is the dwarf willow."},{Start:139625,End:142125,Text:"It is found in the harsh Arctic environments"},{Start:142125,End:144708,Text:"around the North Atlantic Ocean."},{Start:144708,End:146875,Text:"It looks more like a small plant"},{Start:146875,End:148541,Text:"and grows to between one and six"},{Start:148541,End:150375,Text:"centimetres in height. "},{Start:151750,End:153583,Text:"The oldest trees in the world can be found"},{Start:153583,End:156416,Text:"in the southwest of the United States, "},{Start:156416,End:159083,Text:"and are called bristlecone pines."},{Start:159083,End:162458,Text:"Some are about 5,000 years old."},{Start:162458,End:164791,Text:"You can calculate the age of a tree"},{Start:164791,End:166541,Text:"if it has been cut down,"},{Start:166541,End:168041,Text:"by counting the rings from the bark"},{Start:168041,End:169958,Text:"to the centre of the tree."},{Start:172791,End:174583,Text:"The largest forest in the world is a"},{Start:174583,End:176750,Text:"coniferous forest which is located"},{Start:176750,End:179583,Text:"in several countries near the North Pole."},{Start:180958,End:182958,Text:"It is called the Taiga Forest"},{Start:182958,End:185875,Text:"and it contains an incredible one third of"},{Start:185875,End:187791,Text:"all the trees in the world."},{Start:189708,End:192000,Text:"The largest tropical rainforest in the world"},{Start:192000,End:193541,Text:"is the Amazon."},{Start:193541,End:196000,Text:"Because it is a very dense rainforest,"},{Start:196000,End:198291,Text:"little sunlight reaches the ground."},{Start:198291,End:200500,Text:"The trees compete for sunlight,"},{Start:200500,End:203458,Text:"and grow higher quickly to get more light."},{Start:205958,End:208416,Text:"The tops of the trees are called the canopy,"},{Start:208416,End:210375,Text:"and between seventy and ninety per cent"},{Start:210375,End:212125,Text:"of all plant and animal life"},{Start:212125,End:213791,Text:"in the rainforest lives there,"},{Start:213791,End:215958,Text:"thirty metres above the forest floor."},{Start:218166,End:220083,Text:"Trees are amazing and we should do"},{Start:220083,End:222166,Text:"all we can to protect them."},{Start:222166,End:225208,Text:"And we mustn’t forget that we need them"},{Start:225208,End:227583,Text:"more than they need us."}]},
// {id:12,Parts:[{time:10000},{time:57000}],SubsArray : [{Start:13791,End:16708,Text:"Watch and listen."},{Start:20875,End:23541,Text:"architecture"},{Start:27291,End:30000,Text:"sculpture"},{Start:32875,End:35958,Text:"discover"},{Start:38583,End:42000,Text:"civilisation"},{Start:44625,End:47500,Text:"iron"},{Start:50916,End:53625,Text:"stone"},{Start:66291,End:67541,Text:"The ancient Greeks"},{Start:67541,End:70541,Text:" usually built part of a city on a hill"},{Start:70541,End:73250,Text:"  so that they could go there to protect themselves"},{Start:73250,End:76041,Text:"when their city was attacked. "},{Start:76041,End:78333,Text:"This is called an acropolis"},{Start:78333,End:82333,Text:" and the most famous is in Athens, Greece. "},{Start:82333,End:84833,Text:" Most of the buildings on the Acropolis,"},{Start:84833,End:87291,Text:"including the famous Parthenon,"},{Start:87291,End:90250,Text:"were built during the golden age of Athens, "},{Start:90250,End:94041,Text:" about 2,500 years ago.  "},{Start:94916,End:98041,Text:"The Parthenon is about seventy metres long"},{Start:98041,End:100541,Text:"and thirty metres wide"},{Start:100541,End:102375,Text:"and is an excellent example "},{Start:102375,End:105750,Text:"of ancient Greek architecture. "},{Start:105750,End:108416,Text:" Also, the sculptures of the Parthenon"},{Start:108416,End:112250,Text:"are considered to be some of the best in the world."},{Start:112708,End:115791,Text:"The fact that the buildings are still standing"},{Start:115791,End:117958,Text:" several thousand years later"},{Start:117958,End:121125,Text:" is nothing less than amazing."},{Start:122208,End:123708,Text:"In 1911,"},{Start:123708,End:126458,Text:" the American academic and explorer "},{Start:126458,End:127708,Text:"Hiram Bingham"},{Start:127708,End:130208,Text:" was exploring the mountains of Peru"},{Start:130208,End:134166,Text:" when he discovered an ancient Inca city. "},{Start:135333,End:137416,Text:" It was Machu Picchu,"},{Start:137416,End:139541,Text:"an amazing group of buildings"},{Start:139541,End:144708,Text:"2,430 metres above sea level. "},{Start:144708,End:146500,Text:"This mysterious place "},{Start:146500,End:149291,Text:"was built about 500 years ago"},{Start:149291,End:152916,Text:" by a civilisation that had no written language,"},{Start:152916,End:156500,Text:" no iron and no wheels."},{Start:156500,End:157791,Text:"The city, however,"},{Start:157791,End:158791,Text:" had a water system"},{Start:158791,End:161250,Text:"which provided water for farms,"},{Start:161250,End:162583,Text:" and all the buildings "},{Start:162583,End:166208,Text:"were built in relation to the stars and planets."},{Start:166791,End:167750,Text:"At one time"},{Start:167750,End:169500,Text:"the city had a population"},{Start:169500,End:171875,Text:"of about one thousand people, "},{Start:171875,End:174166,Text:"but early in the 16th century,"},{Start:174166,End:178666,Text:" all the people left and nobody knows why."},{Start:181791,End:184875,Text:"One of the world’s oldest standing structures"},{Start:184875,End:188541,Text:" is the Great Pyramid of Giza in Egypt."},{Start:192041,End:193166,Text:"It is considered to be"},{Start:193166,End:197291,Text:" one of the Seven Wonders of the Ancient World."},{Start:197291,End:201041,Text:" It was built about 4,500 years ago"},{Start:201041,End:204375,Text:"and it took about 20 years to build."},{Start:205083,End:207875,Text:" At 147 metres tall,"},{Start:207875,End:210375,Text:" it was the tallest man-made structure "},{Start:210375,End:213791,Text:" for 3,800 years."},{Start:214500,End:215583,Text:" It is believed "},{Start:215583,End:220541,Text:"that about 2.3 million stones were used, "},{Start:220541,End:225625,Text:"and 800 tonnes of stones were moved every day."},{Start:229666,End:231125,Text:" The sides of the pyramid "},{Start:231125,End:233000,Text:" face exactly in the directions"},{Start:233000,End:235666,Text:"of the points of a compass."}]},
// {id:13,Parts:[{time:10000},{time:51000}],SubsArray : [{Start:13750,End:16875,Text:"Watch and listen."},{Start:20041,End:22708,Text:"snowboard (n.)"},{Start:25875,End:28500,Text:"slope"},{Start:31875,End:34583,Text:"wilderness"},{Start:38000,End:40541,Text:"stunt"},{Start:43750,End:46458,Text:"pipe"},{Start:58875,End:60708,Text:"The thrill and excitement you feel "},{Start:60708,End:63000,Text:" when snowboarding down the side of a mountain"},{Start:63000,End:65333,Text:"really is unlike anything else."},{Start:65333,End:66750,Text:" So, it’s little wonder"},{Start:66750,End:67708,Text:" that snowboarding"},{Start:67708,End:71750,Text:"is one of the most popular snow sports around."},{Start:71750,End:73833,Text:"Yet, it’s quite a young sport."},{Start:73833,End:76125,Text:" It was only invented in the 1960s, "},{Start:76125,End:77666,Text:"in the United States,"},{Start:77666,End:79625,Text:"and was first included as a sport"},{Start:79625,End:83625,Text:" in the Winter Olympic Games in 1998. "},{Start:84791,End:86166,Text:"For new snowboarders,"},{Start:86166,End:88333,Text:"one of the most important things to remember"},{Start:88333,End:91708,Text:" is to buy a snowboard that is the right size."},{Start:91708,End:93958,Text:"Some people say that if a snowboard comes up"},{Start:93958,End:96208,Text:" to just below your nose when you stand"},{Start:96208,End:99500,Text:"it on its end, it’s the perfect size. "},{Start:99500,End:102333,Text:" However, a more accurate way to work this out"},{Start:102333,End:105708,Text:"is to base it on your weight and height."},{Start:105708,End:107458,Text:" If a board is too long for you,"},{Start:107458,End:109833,Text:" it will be more difficult to handle on the snow"},{Start:109833,End:112875,Text:"and make learning more of a challenge."},{Start:112875,End:114333,Text:" Before buying a board, "},{Start:114333,End:117250,Text:"you also need to know if you’re a ‘regular’ rider"},{Start:117250,End:118916,Text:" or a ‘goofy’ rider,"},{Start:118916,End:122333,Text:" in other words, what your riding stance is."},{Start:122333,End:123708,Text:"A regular rider is someone"},{Start:123708,End:125208,Text:" who stands on the snowboard "},{Start:125208,End:126666,Text:"with his or her left foot"},{Start:126666,End:127958,Text:"at the front of the board "},{Start:127958,End:130041,Text:"and right foot at the back. "},{Start:130041,End:131416,Text:"When it’s the other way round,"},{Start:131416,End:133166,Text:"you’re a goofy rider."},{Start:133166,End:134291,Text:" How do you know? "},{Start:134291,End:137416,Text:"Well, here’s what you can do to discover this."},{Start:137416,End:139208,Text:"Get someone to stand behind you"},{Start:139208,End:140833,Text:" and push you forward. "},{Start:140833,End:142875,Text:"See which foot you naturally step forward "},{Start:142875,End:146250,Text:"with first, and you’ve found your riding stance! "},{Start:146916,End:148250,Text:"For many snowboarders,"},{Start:148250,End:150416,Text:" one of the most exciting things to do"},{Start:150416,End:152875,Text:" is to go backcountry snowboarding."},{Start:152875,End:153875,Text:" But don’t forget, "},{Start:153875,End:156916,Text:"you need pretty good snowboarding skills for this."},{Start:156916,End:159958,Text:" That’s because it involves riding off the ski slopes"},{Start:159958,End:161791,Text:"and into the unknown wilderness,"},{Start:161791,End:164625,Text:" through forests and over tougher terrain."},{Start:164625,End:166000,Text:"It’s lots of fun"},{Start:166000,End:168583,Text:"and the perfect way to explore a mountain,"},{Start:168583,End:171125,Text:"but being away from the safety of the ski resort"},{Start:171125,End:172708,Text:" has its risks."},{Start:173041,End:175208,Text:" Just a few of the dangers to watch out for"},{Start:175208,End:177583,Text:"are holes in the ground you might fall into, "},{Start:177583,End:179166,Text:" rocks you could crash into,"},{Start:179166,End:181375,Text:" and even wild animals!"},{Start:181375,End:184541,Text:"But probably the biggest danger is avalanches! "},{Start:184541,End:186291,Text:"And if a snowboarder gets into trouble "},{Start:186291,End:187458,Text:"or gets lost,"},{Start:187458,End:190083,Text:"there’s nobody around to help. "},{Start:191708,End:193708,Text:"Freestyle snowboarding is considered the most"},{Start:193708,End:196541,Text:"spectacular form of the sport."},{Start:197458,End:200333,Text:"The focus is on performing tricks and stunts,"},{Start:200333,End:202583,Text:"often high up in the air. "},{Start:202583,End:204125,Text:"There are many famous competitions"},{Start:204125,End:207125,Text:" for freestyle snowboarding."},{Start:207125,End:209875,Text:"Here’s a snowboarder at one of these competitions"},{Start:209875,End:212750,Text:" doing some incredible stunts on the halfpipe, "},{Start:212750,End:215375,Text:"which is a long pipe in the shape of a semicircle  "},{Start:215375,End:217166,Text:" made of snow."},{Start:217166,End:217958,Text:" The halfpipe "},{Start:217958,End:220125,Text:"is one of the most interesting events to watch"},{Start:220125,End:222375,Text:" in snowboarding competitions."},{Start:222375,End:224416,Text:" It drives the crowd wild,"},{Start:224416,End:226708,Text:"and it’s easy to see why!"},{Start:227833,End:230166,Text:"Snowboarders do mind-blowing jumps,"},{Start:230166,End:231833,Text:"spins and even flips "},{Start:231833,End:234708,Text:"as they speed up the side of the halfpipe. "},{Start:234708,End:237125,Text:"And as any snowboarder will tell you, "},{Start:237125,End:238291,Text:" stunts such as these"},{Start:238291,End:241125,Text:"can only be performed by the fearless!"},{Start:241125,End:242500,Text:"Do you think you might have "},{Start:242500,End:244541,Text:"what it takes to try them?"}]},
// {id:14,Parts:[{time:10000},{time:57000}],SubsArray : [{Start:13791,End:16750,Text:"Watch and listen."},{Start:19916,End:22750,Text:"divide"},{Start:25875,End:28958,Text:"section"},{Start:31916,End:35291,Text:"farmer"},{Start:37791,End:41041,Text:"merchant"},{Start:43625,End:46583,Text:"goods"},{Start:49791,End:53083,Text:"stall"},{Start:65041,End:65833,Text:"A market "},{Start:65833,End:68708,Text:" is a place where people buy and sell goods, "},{Start:68708,End:70125,Text:" but it is also a place"},{Start:70125,End:73166,Text:"where you can get a feel for local culture. "},{Start:73166,End:74333,Text:"People go to markets "},{Start:74333,End:77125,Text:"to find fresh food and cheap items, "},{Start:77125,End:78708,Text:"but it is important to remember"},{Start:78708,End:81333,Text:"that markets have a long history."},{Start:82875,End:86166,Text:"Markets have existed since ancient times."},{Start:86166,End:87291,Text:"In ancient Greece,"},{Start:87291,End:89750,Text:" markets were known as ‘Agora’ "},{Start:89750,End:93083,Text:"while in Rome, it was the ‘Forum’."},{Start:93791,End:96333,Text:"The oldest continuously working market "},{Start:96333,End:99583,Text:"is the Grand Bazaar in Istanbul,"},{Start:99583,End:103125,Text:"which has been operating since the 15th century"},{Start:103125,End:106875,Text:"and has over 26,000 people working there."},{Start:111208,End:112000,Text:"Borough Market "},{Start:112000,End:114250,Text:"is the oldest and most popular food market"},{Start:114250,End:115541,Text:" in London."},{Start:115541,End:118666,Text:" It dates back to the 13th century."},{Start:118666,End:122041,Text:"The original market was closed in 1754"},{Start:122041,End:124583,Text:"only to be reopened two years later"},{Start:124583,End:129708,Text:" at a new location covering 18,500 square metres. "},{Start:129708,End:131583,Text:"Today, it is still one of the largest "},{Start:131583,End:134583,Text:" and oldest markets in the world."},{Start:135291,End:136833,Text:" Another famous market "},{Start:136833,End:140125,Text:"is the Jatujak Weekend Market in Bangkok,"},{Start:140125,End:142791,Text:"which is divided into twenty-seven sections"},{Start:142791,End:146166,Text:" and has over 8,000 market stalls."},{Start:148750,End:152416,Text:"The traditional Street Market or Farmers’ Market"},{Start:152416,End:154750,Text:" is a market where farmers set up stalls "},{Start:154750,End:157625,Text:" to sell their products on certain days. "},{Start:157625,End:159958,Text:" This type of market is called a ‘souk’ "},{Start:159958,End:162291,Text:"in Arabic-speaking countries"},{Start:162291,End:166041,Text:"and a ‘mercado’ in Spanish-speaking countries."},{Start:169291,End:171875,Text:"There are also floating markets in Thailand, "},{Start:171875,End:173458,Text:" Indonesia and Vietnam"},{Start:173458,End:177000,Text:"where merchants sell their products off boats."},{Start:178625,End:179791,Text:"One example"},{Start:179791,End:183750,Text:"is the Wat Sai Floating Market in Bangkok."},{Start:189875,End:190791,Text:"Nowadays, "},{Start:190791,End:191791,Text:" the supermarket "},{Start:191791,End:194750,Text:"has come to meet all the needs of a family. "},{Start:194750,End:195916,Text:"This type of market "},{Start:195916,End:197666,Text:"has grown to sell more than just food"},{Start:197666,End:199333,Text:"and household products. "},{Start:199333,End:202333,Text:" Electronic goods, clothing, furniture"},{Start:202333,End:203500,Text:"and gardening supplies "},{Start:203500,End:205666,Text:"are also commonly available."},{Start:205666,End:207750,Text:" Many had predicted that supermarkets"},{Start:207750,End:210500,Text:"would bring an end to the traditional market,"},{Start:210500,End:212041,Text:"but supermarkets have been around "},{Start:212041,End:213625,Text:"for over fifty years"},{Start:213625,End:215958,Text:"and markets are still going strong."},{Start:215958,End:217833,Text:" Perhaps people feel a connection"},{Start:217833,End:220625,Text:"to this ancient form of trading."}]},
// {id:15,Parts:[{time:10000},{time:69000}],SubsArray : [{Start:13791,End:16333,Text:"Watch and listen."},{Start:19791,End:22041,Text:"cassette tape"},{Start:25750,End:27541,Text:"pixel"},{Start:31875,End:34250,Text:"megapixel"},{Start:38416,End:40541,Text:"image"},{Start:44583,End:47083,Text:"eyewitness"},{Start:50583,End:53416,Text:"QR code"},{Start:56458,End:60000,Text:"compact camera"},{Start:62333,End:65083,Text:"connect"},{Start:77125,End:80250,Text:"Camera phones don’t exist."},{Start:80250,End:81875,Text:"Well, that’s to say,"},{Start:81875,End:84583,Text:"as all phones have cameras nowadays,"},{Start:84583,End:86125,Text:"we just call them phones."},{Start:87291,End:89000,Text:"The mobile phone was invented"},{Start:89000,End:92750,Text:"by Dr Martin Cooper in 1973."},{Start:92750,End:96000,Text:"It was big and heavy, weighing about a kilo,"},{Start:96000,End:98333,Text:"and appeared in shops ten years later."},{Start:99166,End:100375,Text:"The digital camera,"},{Start:100375,End:103958,Text:"which was invented by Steven Sasson in 1975,"},{Start:103958,End:105916,Text:"weighed 3.6 kilos."},{Start:106541,End:109875,Text:"This camera had 0.01 megapixels"},{Start:109875,End:111958,Text:"and recorded black and white images"},{Start:111958,End:115000,Text:"in 23 seconds onto a cassette tape."},{Start:115791,End:118250,Text:"Digital cameras didn’t become common in shops"},{Start:118250,End:119666,Text:"until the 1990s."},{Start:120666,End:123166,Text:"The first mobile phone with a digital camera"},{Start:123166,End:125791,Text:"was produced in Japan in late 2000."},{Start:126875,End:129624,Text:"The quality of the pictures wasn’t very good,"},{Start:129624,End:132208,Text:"but it became an instant success."},{Start:132958,End:135666,Text:"Digital cameras became smaller and smaller,"},{Start:135666,End:137333,Text:"and even more powerful."},{Start:138083,End:141666,Text:"By 2010 compact cameras with ten megapixels"},{Start:141666,End:142791,Text:"were very popular."},{Start:144416,End:145375,Text:"However,"},{Start:145375,End:147958,Text:"cameras on phones also improved,"},{Start:147958,End:151291,Text:"and they turned out to be much more convenient."},{Start:151291,End:153583,Text:"Today, sales of small digital cameras"},{Start:153583,End:156000,Text:"have fallen greatly because most people"},{Start:156000,End:158333,Text:"prefer using their phones to take pictures."},{Start:160000,End:161250,Text:"An important advantage"},{Start:161250,End:163875,Text:"camera phones have over digital cameras"},{Start:163875,End:165791,Text:"is that they can connect to the Internet."},{Start:166791,End:168416,Text:"This means that social media sites"},{Start:168416,End:171458,Text:"are full of shared photos and selfies,"},{Start:171458,End:173000,Text:"by people who are all too happy"},{Start:173000,End:175333,Text:"to show the world what their life is like,"},{Start:175333,End:178208,Text:"or what they want people to think their life is like."},{Start:179041,End:180958,Text:"But more importantly, camera phones"},{Start:180958,End:182666,Text:"have changed the world of journalism."},{Start:183583,End:186500,Text:"Nowadays, anyone can be a ‘journalist’."},{Start:187458,End:189041,Text:"Eyewitnesses to news events"},{Start:189041,End:191125,Text:"are able to record what they see"},{Start:191125,End:192500,Text:"and upload it instantly."},{Start:193250,End:194916,Text:"This means news organisations"},{Start:194916,End:197250,Text:"rely more and more on citizen journalism"},{Start:197250,End:198750,Text:"for photos and video."},{Start:199958,End:202708,Text:"Camera phones can be used in a variety of ways."},{Start:203500,End:206291,Text:"Many people take photos of items in shops"},{Start:206291,End:207916,Text:"to show others later,"},{Start:207916,End:210041,Text:"or look for better prices on the Internet"},{Start:210041,End:211916,Text:"while in the shop."},{Start:211916,End:214250,Text:"Others take pictures of shopping lists,"},{Start:214250,End:216166,Text:"or important documents"},{Start:216166,End:218208,Text:"so that they can look at them later."},{Start:219416,End:223041,Text:"A successful use in advertising is the QR code."},{Start:224291,End:226625,Text:"This black-and-white image with pixels"},{Start:226625,End:228083,Text:"can be read by a phone"},{Start:228083,End:230250,Text:"and instantly link you to a website."},{Start:232333,End:234541,Text:"Camera phones will continue improving,"},{Start:234541,End:237500,Text:"and people will find more ways to use them."}]},
// {id:16,Parts:[{time:10000},{time:51000}],SubsArray : [{Start:13708,End:16625,Text:"Watch and listen."},{Start:19791,End:21833,Text:"cacao beans"},{Start:25625,End:27708,Text:"pod"},{Start:31708,End:34375,Text:"cocoa powder"},{Start:37583,End:40166,Text:"cocoa butter"},{Start:43458,End:46166,Text:"milk powder"},{Start:58833,End:59958,Text:"For many of us,"},{Start:59958,End:61875,Text:"chocolate is one of the most delicious"},{Start:61875,End:64374,Text:"food products on the planet."},{Start:64374,End:66583,Text:"Actually, it’s difficult to find anyone"},{Start:66583,End:69166,Text:"who doesn’t like the taste of it!"},{Start:69166,End:71791,Text:"Billions of chocolate bars are sold each year,"},{Start:71791,End:73125,Text:"all over the world."},{Start:74041,End:75750,Text:"But how many people have ever stopped"},{Start:75750,End:78041,Text:"to think about how their favourite chocolate bar"},{Start:78041,End:80541,Text:"is made and how healthy it is?"},{Start:82250,End:83541,Text:"The journey of chocolate"},{Start:83541,End:85416,Text:"begins with the cacao bean,"},{Start:85416,End:88750,Text:"the main ingredient needed to make chocolate."},{Start:88750,End:90750,Text:"Cacao beans grow on the cacao tree"},{Start:90750,End:94541,Text:"in hot places like South America and West Africa."},{Start:95208,End:97833,Text:"This is a cacao tree with some pods on it."},{Start:98541,End:100916,Text:"After the pods have been carefully removed"},{Start:100916,End:102041,Text:"from the tree,"},{Start:102041,End:102708,Text:"they are opened"},{Start:102708,End:105250,Text:"to reveal the cacao beans inside."},{Start:105916,End:108375,Text:"In a single pod, a farmer might find"},{Start:108375,End:111208,Text:"between 30 to 50 of these beans."},{Start:112083,End:114333,Text:"The beans are covered in a white pulp"},{Start:114333,End:115833,Text:"and, as you can see,"},{Start:115833,End:118750,Text:"they don’t look anything like chocolate just yet."},{Start:119958,End:122500,Text:"Once they are dried, they become brown –"},{Start:122500,End:125083,Text:"the colour most associated with chocolate."},{Start:126416,End:127333,Text:"Some farmers"},{Start:127333,End:129958,Text:"use special equipment to dry the beans,"},{Start:129958,End:133125,Text:"while others simply let them dry out in the sun."},{Start:134291,End:135375,Text:"Some chocolate makers"},{Start:135375,End:138500,Text:"use up to 12 different types of cacao beans,"},{Start:138500,End:141125,Text:"just to achieve the perfect chocolate flavour."},{Start:142583,End:145875,Text:"After the drying stage, the beans are roasted."},{Start:145875,End:147375,Text:"Then, a special machine"},{Start:147375,End:150291,Text:"breaks them into small pieces called nibs,"},{Start:150291,End:152250,Text:"which then go through another machine"},{Start:152250,End:153916,Text:"to produce cocoa powder,"},{Start:153916,End:156916,Text:"which is often used in cooking or to make drinks,"},{Start:156916,End:158083,Text:"and cocoa butter,"},{Start:158083,End:160375,Text:"the natural fat found in the bean."},{Start:161583,End:164125,Text:"And now it’s time to make chocolate!"},{Start:164833,End:166666,Text:"Cocoa butter has a light colour"},{Start:166666,End:169416,Text:"and can be mixed with sugar and milk powder"},{Start:169416,End:171583,Text:"to make white chocolate products."},{Start:171583,End:173166,Text:"Milk chocolate contains both"},{Start:173166,End:175541,Text:"cocoa butter and cocoa powder,"},{Start:175541,End:178125,Text:"as well as sugar and milk powder."},{Start:178125,End:179041,Text:"The cocoa powder"},{Start:179041,End:181041,Text:"gives the chocolate its brown colour."},{Start:181541,End:184208,Text:"And why is dark chocolate so dark?"},{Start:184208,End:184375,Text:"Well,"},{Start:184375,End:187541,Text:"because, it contains a lot more cocoa powder"},{Start:187541,End:190541,Text:"compared to milk chocolate, and no milk at all."},{Start:191458,End:193958,Text:"You can even find dark chocolate products"},{Start:193958,End:196916,Text:"which have 99% cocoa content!"},{Start:198083,End:200291,Text:"Did you know that cacao beans are rich"},{Start:200291,End:203416,Text:"in many important vitamins and nutrients?"},{Start:203416,End:205333,Text:"Many of these vitamins and nutrients"},{Start:205333,End:207791,Text:"are also present in cocoa powder,"},{Start:207791,End:210500,Text:"so the more cocoa powder chocolate contains,"},{Start:210500,End:212833,Text:"the more nutritious it is."},{Start:212833,End:215708,Text:"Some research has shown that eating chocolate,"},{Start:215708,End:217500,Text:"especially the dark kind,"},{Start:217500,End:220583,Text:"may even have positive health benefits."},{Start:220583,End:221750,Text:"Just a few of these"},{Start:221750,End:223208,Text:"include reducing the risk"},{Start:223208,End:225125,Text:"of developing heart disease,"},{Start:225125,End:228458,Text:"improving your brain health and reducing stress."},{Start:228458,End:230166,Text:"Pretty impressive, huh?"},{Start:231291,End:232791,Text:"The number of chocolate products"},{Start:232791,End:235166,Text:"available is endless:"},{Start:235166,End:238083,Text:"chocolate bars of all shapes and sizes,"},{Start:238083,End:240833,Text:"biscuits, ice cream, cakes,"},{Start:240833,End:243875,Text:"hot chocolate drinks, and many more!"},{Start:243875,End:245416,Text:"And while there are health benefits"},{Start:245416,End:247791,Text:"associated with eating chocolate,"},{Start:247791,End:250666,Text:"we shouldn’t forget that chocolate also contains"},{Start:250666,End:254833,Text:"a lot of fat and sugar and is high in calories."},{Start:254833,End:257333,Text:"So, it’s good to eat a little chocolate,"},{Start:257333,End:259624,Text:"but make sure you don’t overdo it!"},{Start:260208,End:261666,Text:"Chocolate anyone?"},{Start:261666,End:262458,Text:"Mmm…"},{Start:262458,End:264166,Text:"delicious!"}]},
{id:1,SubsArray : [{Start:10083,End:11041,Text:"I’m at Heathrow,"},{Start:11041,End:15083,Text:" and this is BA’s new A380-800, "},{Start:15083,End:16083,Text:"and as you can see,"},{Start:16083,End:17833,Text:"it’s enormous. "},{Start:17833,End:19500,Text:" It’s got a wingspan of eighty metres"},{Start:19500,End:20875,Text:"and it’s twenty-four metres from"},{Start:20875,End:22291,Text:" the ground to the top of the tail. "},{Start:22291,End:23875,Text:"So we’re going to hop on board "},{Start:23875,End:25083,Text:" and take a look. "},{Start:29083,End:30875,Text:"I have to say, that was one of the quietest "},{Start:30875,End:32208,Text:" take-offs I think I’ve heard. "},{Start:32208,End:33500,Text:" They’ve just turned the seat belt "},{Start:33500,End:36416,Text:"  light signs off, so I’m going to go upstairs"},{Start:36416,End:37750,Text:"  and take a look around. "},{Start:37750,End:40041,Text:" So we’re in World Traveller at the moment. "},{Start:40041,End:42375,Text:" That’s what BA call their economy class, "},{Start:42375,End:43458,Text:"and as you’d expect, "},{Start:43458,End:45000,Text:"you’ve got a fairly respectable"},{Start:45000,End:46541,Text:" amount of leg room. "},{Start:46541,End:48541,Text:" Also, in the upper deck, "},{Start:48541,End:51208,Text:"you have this side storage, "},{Start:51208,End:52750,Text:"and you’ve also got an in-flight "},{Start:52750,End:53666,Text:" entertainment system, "},{Start:53666,End:56500,Text:"which BA assures me runs from gate to gate,"},{Start:56500,End:58833,Text:" which is a bonus for being in economy "},{Start:58833,End:61750,Text:" because you don’t get that in business and first. "},{Start:62750,End:64333,Text:" One thing that’s really worth knowing  "},{Start:64333,End:66791,Text:" is downstairs in economy you’ve got "},{Start:66791,End:68916,Text:"the best seat on the plane –"},{Start:68916,End:70125,Text:" well in economy anyway. "},{Start:70125,End:72375,Text:"It’s this one – 25D. "},{Start:72375,End:74166,Text:" And the reason it’s the best is this "},{Start:74166,End:77125,Text:"enormous amount of leg room that you’ve got. "},{Start:77125,End:80083,Text:"Next we come through to World Traveller Plus,"},{Start:80083,End:82083,Text:" which is basically premium economy. "},{Start:82083,End:83833,Text:"So you get a bit more for your money."},{Start:83833,End:88375,Text:"You get larger seats with more leg room –"},{Start:88375,End:90000,Text:"20% more leg room apparently. "},{Start:90000,End:91208,Text:"You’ve got two USB ports, "},{Start:91208,End:93000,Text:"you get a full power socket."},{Start:93000,End:95416,Text:"So you come through into Club World, "},{Start:95416,End:97666,Text:" which is essentially business class, "},{Start:97666,End:99083,Text:"and obviously, you get"},{Start:99083,End:100416,Text:" a whole bunch more room. "},{Start:100416,End:103291,Text:" You’ve got a selection of seat positions"},{Start:103291,End:105083,Text:"all electronically controlled."},{Start:105083,End:107666,Text:" It will fold down completely into a horizontal bed"},{Start:107666,End:108833,Text:" if you want it."},{Start:108833,End:111000,Text:"You’ve also got this little handy divider screen"},{Start:111000,End:113208,Text:" which goes up and down that can separate you "},{Start:113208,End:114208,Text:" from the person next to you "},{Start:114208,End:115958,Text:"  if you don’t fancy looking at them."},{Start:115958,End:118333,Text:"The A380 is the only full-length "},{Start:118333,End:120916,Text:"double-decker plane in operation "},{Start:120916,End:122333,Text:"at the moment, and as such,"},{Start:122333,End:125416,Text:"you get these really rather impressive stairs, "},{Start:125416,End:127125,Text:" which are the kind of thing you’d expect to see "},{Start:127125,End:129624,Text:"on a cruise liner rather than on a plane.  "},{Start:129624,End:133708,Text:"Conveniently, they also lead us to first class. "},{Start:133708,End:136083,Text:"So you’ve got these lovely big suites "},{Start:136083,End:138583,Text:" with two windows each. "},{Start:138583,End:141125,Text:"Touch of a button and your shutters"},{Start:141125,End:143625,Text:" come down if you want to go to sleep and, "},{Start:143625,End:144708,Text:" you’ve got enough space "},{Start:144708,End:146833,Text:" that you can sit two people head-to-head –"},{Start:146833,End:148541,Text:"so you can have a chat mid-flight. "},{Start:148541,End:150166,Text:"Now you might expect first class "},{Start:150166,End:151958,Text:"to be upstairs, "},{Start:151958,End:154041,Text:"but BA have chosen to put their first"},{Start:154041,End:156291,Text:"on the lower deck at the front of the plane"},{Start:156291,End:158208,Text:" because that’s the widest point. "},{Start:158208,End:159791,Text:"That means that these suites "},{Start:159791,End:162583,Text:" are about 30% bigger than a traditional "},{Start:162583,End:164083,Text:" BA first-class suite. "},{Start:164083,End:166291,Text:"They’ve also got 60% more storage "},{Start:166291,End:167875,Text:" with a handy wardrobe actually "},{Start:167875,End:169541,Text:" built into the side here. "},{Start:169541,End:171041,Text:"Now obviously this is first class, "},{Start:171041,End:172166,Text:"so you do have all the trimmings. "},{Start:172166,End:175166,Text:" You’ve got a fifteen and a half inch TV screen"},{Start:175166,End:176916,Text:"to watch your in-flight entertainment on, "},{Start:176916,End:178708,Text:"you’ve got a fully reclining seat "},{Start:178708,End:180541,Text:" that goes all the way down into "},{Start:180541,End:182458,Text:"a fully flat bed. "},{Start:182458,End:184125,Text:"The real difference in the A380"},{Start:184125,End:185500,Text:" comes in the engineering, "},{Start:185500,End:187750,Text:" in the quietness and the fuel efficiency, "},{Start:187750,End:189750,Text:" and of course, how many passengers "},{Start:189750,End:192125,Text:" airlines can transport in one go. "},{Start:192125,End:193208,Text:"And it’s that, more than"},{Start:193208,End:195041,Text:" anything else I think, that means "},{Start:195041,End:196458,Text:" if you’re going to be flying to a popular"},{Start:196458,End:199083,Text:" long-haul destination in the near future, "},{Start:199083,End:202166,Text:" it’s increasingly likely you’ll be on one of these."}]},
{id:2,SubsArray : [{Start:16124,End:18166,Text:"‘Mr Watson, come here.’ "},{Start:18166,End:21041,Text:" Supposedly the very first telephone call. "},{Start:21041,End:25041,Text:"It was made by Alexander Graham Bell in 1876, "},{Start:25041,End:26250,Text:"but the year before"},{Start:26250,End:28166,Text:" he made the crucial breakthrough, "},{Start:28166,End:29458,Text:" namely that you could transmit "},{Start:29458,End:32666,Text:" more than just a single note electromagnetically, "},{Start:32666,End:35166,Text:" you could transmit whole sounds.  "},{Start:35166,End:36291,Text:" And he did it using "},{Start:36291,End:38583,Text:"this gallows frame telephone –"},{Start:38583,End:42083,Text:"a vibrating reed against a diaphragm. "},{Start:42083,End:44166,Text:"The telephone was born. "},{Start:44166,End:47083,Text:"Up until as recently as the 1970s, "},{Start:47083,End:48875,Text:" telephone calls were connected by "},{Start:48875,End:52458,Text:" a copper wire from your house all the way "},{Start:52458,End:54916,Text:"to a local telephone exchange like this, manned"},{Start:54916,End:56833,Text:" by invariably women, "},{Start:56833,End:59208,Text:" who would connect your call into"},{Start:59208,End:61291,Text:"the socket of another household. "},{Start:61291,End:63458,Text:" Hey presto, you could chat. "},{Start:63458,End:65499,Text:" But the post office believed correctly "},{Start:65499,End:66791,Text:"that people couldn’t remember"},{Start:66791,End:69291,Text:" long telephone numbers, so instead, "},{Start:69291,End:71583,Text:"everyone had a code. "},{Start:71583,End:72791,Text:"There were hundreds in London,"},{Start:72791,End:75708,Text:" and my one in north London was Canonbury –"},{Start:75708,End:79791,Text:"C-A-N. And to this day,"},{Start:79791,End:81375,Text:" I still have 2-2-6"},{Start:81375,End:83583,Text:" in my telephone number."},{Start:84125,End:85833,Text:"This can lay claim to being the"},{Start:85833,End:87958,Text:" very first mobile phone."},{Start:87958,End:89750,Text:" It was used in the 1930s by"},{Start:89750,End:91333,Text:" a Brighton police station to "},{Start:91333,End:93125,Text:" speak to bobbies on the beat, "},{Start:93125,End:94166,Text:"though it was one way. "},{Start:94166,End:97125,Text:"If the policemen wanted to speak to the station "},{Start:97125,End:98875,Text:"they had to go and find a pay phone. "},{Start:98875,End:101250,Text:"But hey, it was a start, and it led"},{Start:101250,End:104458,Text:" to this beauty, which is Britain’s"},{Start:104458,End:106416,Text:" very first mobile phone –"},{Start:106416,End:108000,Text:"not using radio waves,"},{Start:108000,End:111041,Text:" using an analogue cellular network, "},{Start:111041,End:114125,Text:" and it was launched in 1985. "},{Start:114125,End:116333,Text:"Maggie Thatcher liberalised the telephone market"},{Start:116333,End:119041,Text:" in the 1980s, and that allowed, "},{Start:119041,End:120750,Text:"for the first time, competition. "},{Start:120750,End:122833,Text:"And on the first of January 1985,"},{Start:122833,End:125333,Text:" Vodafone made the first call. "},{Start:125333,End:128999,Text:" I particularly love this 1986 Excell model, "},{Start:128999,End:130791,Text:"designed for the first time to fit  "},{Start:130791,End:132625,Text:"into a shirt pocket. "},{Start:132625,End:134083,Text:"Don’t laugh. It’s not much bigger "},{Start:134083,End:135666,Text:"than an iPhone 6."},{Start:135666,End:137583,Text:"The story ends, for now at least, "},{Start:137583,End:139916,Text:" with the smartphone – little mini"},{Start:139916,End:141500,Text:" computers in your pocket. "},{Start:141500,End:142791,Text:"And to make a telephone call "},{Start:142791,End:145291,Text:"you use a digital network. "},{Start:145291,End:147333,Text:"Though ironically, not many people use"},{Start:147333,End:149166,Text:" these things to speak to one another, "},{Start:149166,End:151250,Text:" they mostly use them to send messages, "},{Start:151250,End:152541,Text:"search for information or "},{Start:152541,End:155166,Text:" watch little videos, like this one."}]},
{id:3,SubsArray : [{Start:18708,End:19500,Text:"I’m Steve Zack."},{Start:19500,End:21041,Text:"I’m a conservation scientist"},{Start:21041,End:23166,Text:"for the Wildlife Conservation Society. "},{Start:23166,End:26041,Text:" I currently work in the North America Programme."},{Start:26041,End:27666,Text:"The tundra of Arctic Alaska"},{Start:27666,End:30625,Text:" is a plain by general description, "},{Start:30625,End:32249,Text:" but anything but. "},{Start:32249,End:34125,Text:" It is there that you see polar bear,"},{Start:34125,End:35500,Text:" we see musk ox,"},{Start:35500,End:36833,Text:" we see Arctic fox, "},{Start:36833,End:38458,Text:"and in the early parts of the year, "},{Start:38458,End:40875,Text:"when the snow is just receding from the landscape,"},{Start:40875,End:41625,Text:" all of a sudden,"},{Start:41625,End:43458,Text:"you’re in a very lively place"},{Start:43458,End:45291,Text:" because birds are literally coming "},{Start:45291,End:46166,Text:"from every continent, "},{Start:46166,End:48333,Text:"every ocean to breed in the Arctic. "},{Start:48333,End:50166,Text:"So whether it’s Antarctica, "},{Start:50166,End:51583,Text:"or southern South America, "},{Start:51583,End:53250,Text:"or Australia, or New Zealand,"},{Start:53250,End:54500,Text:" or the Indian Ocean, "},{Start:54500,End:57458,Text:"we have birds that have come from there to breed."},{Start:57458,End:61666,Text:"We have shorebirds with spectacular displays, "},{Start:61666,End:63125,Text:" we also see waterfowl "},{Start:63125,End:64166,Text:"from everywhere in the world. "},{Start:64166,End:67083,Text:"We have big goose populations, swans,"},{Start:67083,End:69625,Text:" Arctic ducks that many people have never seen. "},{Start:69625,End:72666,Text:"The reason why so many waterfowl, "},{Start:72666,End:73500,Text:" so many shorebirds, "},{Start:73500,End:74791,Text:"so many migratory birds"},{Start:74791,End:77375,Text:"end up there is because it’s remote."},{Start:77375,End:79458,Text:" There’s a very short growing season there "},{Start:79458,End:80541,Text:"for the birds to be in, "},{Start:80541,End:83041,Text:"just long enough for them to raise their young."},{Start:83041,End:86208,Text:" And those very forces of short season and "},{Start:86208,End:88291,Text:"far north mean that there are naturally "},{Start:88291,End:90375,Text:"very few predators there."},{Start:90375,End:91541,Text:"And in this day and age, "},{Start:91541,End:93458,Text:"climate change is bringing earlier"},{Start:93458,End:95541,Text:"and earlier seasons to the Arctic."},{Start:95541,End:97333,Text:"The birds are arriving earlier, "},{Start:97333,End:99083,Text:"putting their young out earlier,"},{Start:99083,End:100250,Text:" almost like a day "},{Start:100250,End:102833,Text:"earlier every year on the average. "},{Start:102833,End:105041,Text:"And what we’re trying to understand is: "},{Start:105041,End:107291,Text:" are their young coming out at a time"},{Start:107291,End:108875,Text:" when the insects are still peak "},{Start:108875,End:110916,Text:" that they can feed on them, and"},{Start:110916,End:113083,Text:"does that earlier arrival mean that"},{Start:113083,End:114000,Text:"they have to leave "},{Start:114000,End:115541,Text:"other wetlands in the world "},{Start:115541,End:118125,Text:" earlier than they can get enough resources "},{Start:118125,End:120750,Text:"to fuel their migration?"},{Start:120750,End:123750,Text:"Well, one of the changes in the Arctic is"},{Start:123750,End:126791,Text:"shoreline erosion because of climate change. "},{Start:126791,End:128583,Text:" Permafrost is melting,"},{Start:128583,End:130208,Text:" so one effect is the shorelines"},{Start:130208,End:132583,Text:" are really falling apart in the Arctic."},{Start:132583,End:133416,Text:"A year ago, "},{Start:133416,End:134458,Text:"we wanted to see "},{Start:134458,End:136416,Text:"if that mattered to the shorebirds "},{Start:136416,End:138708,Text:" that need those shorelines after breeding."},{Start:138708,End:140291,Text:" So we were in a new position."},{Start:140291,End:142791,Text:"Also new to the shorelines were polar bear. "},{Start:142791,End:143291,Text:" Polar bear"},{Start:143291,End:146666,Text:" that had been unable to get out onto the sea ice"},{Start:146666,End:148250,Text:"because of climate change, "},{Start:148250,End:150166,Text:"and that put us in harm’s way."},{Start:150166,End:152166,Text:"So we had to evacuate the camp. "},{Start:152166,End:152833,Text:"And so, "},{Start:152833,End:156041,Text:"the paradox is that we were trying to understand "},{Start:156041,End:157125,Text:" the effects of climate change, "},{Start:157125,End:158291,Text:"we couldn’t do so"},{Start:158291,End:160291,Text:" because of the effects of climate change. "},{Start:160291,End:161875,Text:" And for us in the conservation world,"},{Start:161875,End:164333,Text:"this is a really interesting and new challenge."},{Start:164333,End:165916,Text:" As somebody working in the Arctic "},{Start:165916,End:167708,Text:"and seeing real changes here,"},{Start:167708,End:169958,Text:"in many ways, the cat is out of the bag."},{Start:169958,End:171750,Text:" Climate change is a real,"},{Start:171750,End:173916,Text:"and will be a real dominant force."},{Start:173916,End:175375,Text:"And everybody has a stake"},{Start:175375,End:177333,Text:"in what happens in Arctic Alaska"},{Start:177333,End:178708,Text:" because at some level,"},{Start:178708,End:181333,Text:"their birds are there as well."},{Start:181333,End:184458,Text:"So I think the Arctic offers a unique possibility"},{Start:184458,End:187083,Text:" to reach across all kinds of peoples"},{Start:187083,End:189291,Text:"because it’s their wildlife too, "},{Start:189291,End:191000,Text:" bound by migration,"},{Start:191000,End:192708,Text:" for these birds that literally touch "},{Start:192708,End:194875,Text:"every place on the planet. "}]},
{id:4,SubsArray : [{Start:13291,End:14666,Text:"The next five to ten years"},{Start:14666,End:16750,Text:" is going to be a fascinating time"},{Start:16750,End:18250,Text:" in the way that work evolves "},{Start:18250,End:20958,Text:"and work changes in almost all industries,"},{Start:20958,End:23208,Text:" but particularly in the white-collar space. "},{Start:23208,End:25708,Text:"So we saw a huge disruption to blue-collar jobs"},{Start:25708,End:27375,Text:" in the seventies and eighties. "},{Start:27375,End:28708,Text:"The same thing is about to happen "},{Start:28708,End:30000,Text:"to white-collar jobs. "},{Start:30000,End:31666,Text:" It doesn’t matter which industry, "},{Start:31666,End:33583,Text:" it’s really about the nature of the roles "},{Start:33583,End:34625,Text:"that people do."},{Start:34625,End:35791,Text:"Anything that can be automated, "},{Start:35791,End:36958,Text:" anything that’s standardised,"},{Start:36958,End:38250,Text:"anything that’s a procedure, "},{Start:38250,End:40791,Text:"will be replaced by a machine that learns. "},{Start:40791,End:42083,Text:" We’ve seen changes"},{Start:42083,End:44166,Text:" to the workplace happen before. "},{Start:44750,End:46041,Text:"When I started work"},{Start:46041,End:46750,Text:"thirty years ago, "},{Start:46750,End:49166,Text:"we had a typing pool – that’s been replaced."},{Start:49166,End:51333,Text:"We used to have tellers in banks –"},{Start:51333,End:51916,Text:"they’ve been replaced"},{Start:51916,End:53416,Text:" by automated teller machines."},{Start:53416,End:55291,Text:" And then we’ve seen changes like spreadsheets, "},{Start:55291,End:56250,Text:" which didn’t replace accountants, "},{Start:56250,End:58291,Text:"but made them do their job differently."},{Start:58291,End:60208,Text:"So this isn’t the first time this has happened."},{Start:60208,End:62208,Text:" What we’ve learnt every time it’s happened"},{Start:62208,End:62750,Text:" in the past  "},{Start:62750,End:65833,Text:" is that you need to focus on being flexible "},{Start:65833,End:66875,Text:"and agile."},{Start:66875,End:68583,Text:"So there are a couple of industries"},{Start:68583,End:70041,Text:" that are going to be severely disrupted "},{Start:70041,End:72041,Text:"by new ways of working. "},{Start:72041,End:73833,Text:"So the legal profession,"},{Start:73833,End:75000,Text:" the accounting profession,"},{Start:75000,End:78291,Text:"the tax profession, medicine, doctors. "},{Start:78291,End:79708,Text:"What will be fascinating will be,"},{Start:79708,End:81875,Text:"each of those professions is based on a model"},{Start:81875,End:83458,Text:" of lots of junior people"},{Start:83458,End:84875,Text:" and a few senior people "},{Start:84875,End:86958,Text:"who are chosen from the ranks of the juniors. "},{Start:86958,End:89208,Text:"Well, we no longer need the juniors. "},{Start:89208,End:90750,Text:"So how do you choose the senior folk"},{Start:90750,End:92416,Text:"when there are no juniors to choose them from?"},{Start:92416,End:93416,Text:"So the whole, "},{Start:93416,End:95250,Text:" those whole industries are going to be disrupted"},{Start:95250,End:96833,Text:"and changed while some of the jobs "},{Start:96833,End:97833,Text:" disappear at the same time."},{Start:97833,End:100208,Text:"I think there are two waves of this future."},{Start:100208,End:102791,Text:" There’s an Australian shortage of STEM workers, "},{Start:102791,End:103958,Text:"but there isn’t a global one."},{Start:103958,End:105291,Text:"There are lots of STEM workers around the globe, "},{Start:105291,End:107708,Text:"and much of that work can be offshored."},{Start:107708,End:108625,Text:" Unfortunately,"},{Start:108625,End:110625,Text:" many of those tasks can be done by robots "},{Start:110625,End:111333,Text:" and computers better "},{Start:111333,End:112208,Text:"than they can be done by us. "},{Start:112208,End:115291,Text:" The second wave is people finding jobs that"},{Start:115291,End:117000,Text:"require the human skills: "},{Start:117000,End:117833,Text:"empathy,"},{Start:117833,End:118875,Text:" intuition,"},{Start:118875,End:120666,Text:" innovation, compassion."},{Start:120666,End:123458,Text:"So organisations and people need to focus on: "},{Start:123458,End:125291,Text:" how do I use those skills"},{Start:125291,End:126833,Text:"which already exist within the workforce, "},{Start:126833,End:128208,Text:"already exist within me, "},{Start:128208,End:129874,Text:"to create new and better jobs? "},{Start:129874,End:130916,Text:"This is a business problem, "},{Start:130916,End:132416,Text:"all of society problem  "},{Start:132416,End:134875,Text:" rather than being just pinned down to HR."},{Start:134875,End:137458,Text:"However, HR needs to find a way "},{Start:137458,End:139541,Text:"to be the ones that drive that change."},{Start:139541,End:141916,Text:"There are two diverging theories "},{Start:141916,End:143375,Text:"about what the future looks like. "},{Start:143375,End:145333,Text:"There’s a dystopian future "},{Start:145333,End:146666,Text:"where people won’t have jobs "},{Start:146666,End:148416,Text:"and that everyone will be paid a living wage"},{Start:148416,End:149666,Text:"just for being a human,"},{Start:149666,End:151041,Text:" and robots will create value"},{Start:151041,End:153500,Text:" that we use to fund that system,"},{Start:153500,End:155541,Text:"and a small number of people who will have jobs,"},{Start:155541,End:156541,Text:" and an even smaller number "},{Start:156541,End:157416,Text:"will be hyper-wealthy because  "},{Start:157416,End:159541,Text:"they own the robots that create the value. "},{Start:159541,End:161375,Text:" That’s the science-fiction future. "},{Start:161375,End:163500,Text:"There’s another future that says, actually,  "},{Start:163500,End:165125,Text:" if a robot can do your job "},{Start:165125,End:166458,Text:"then you shouldn’t be doing it. "},{Start:166458,End:167500,Text:" It should be allowed to do it"},{Start:167500,End:168916,Text:"and you should do something more creative,"},{Start:168916,End:171333,Text:" more interesting that adds more value. "},{Start:171333,End:172333,Text:"Those are the two ends of, "},{Start:172333,End:173916,Text:" those are the two extremes. "},{Start:173916,End:176625,Text:"The likely outcome is somewhere between the two. "},{Start:176625,End:180041,Text:"We are struggling to predict or forecast"},{Start:180041,End:181541,Text:"what the future jobs will be."},{Start:181541,End:182708,Text:"That doesn’t mean they won’t exist,"},{Start:182708,End:184625,Text:" it just means we don’t know what they are."}]},

];





var subs;
var videoCurrent=1;
var scale=1;

//Scroll bars: variables
var bottom;
var thumbRows;
var totalWidth;
var scrollTimes=0;
var position=0;
var totalHeight=0;
var firstLine = 0;
//Scroll bars: variables end

if(window.name=="First"){
introLock=1	;

}

	 try{if(localStorage.getItem("project")){
		var root=JSON.parse(localStorage.getItem("project"));
		var flag=1;
		 $.each(root.Projects, function( index, value ) {
			if(value.Project==projectName){flag=0;return false;}

		});
		if(flag==1){
			root.Projects.push({"Project":  projectName});
			localStorage.setItem("project", JSON.stringify(root));
		}
	}
	else{
		localStorage.setItem("project", '{"Projects":[{"Project": "'+ projectName +'"}]}');
	 }
	 }catch(err){}




function coords(e,rel){
	var IWB= $(".IWB").offset();
	var click={};
	var box={};
	var str={};
	try{
		if(e.originalEvent){
			click.top=e.originalEvent.changedTouches[0].clientY;
			click.left=e.originalEvent.changedTouches[0].clientX;
		}
		else{
			click.top=e.changedTouches[0].clientY;
			click.left=e.changedTouches[0].clientX;

		}
	}
	catch(err){
		click.top=e.clientY;
		click.left=e.clientX;
	}
	box.top  = $(rel).offset().top;
	box.left = $(rel).offset().left;

	str.top=(click.top-box.top)/scale;
	str.left=(click.left-box.left)/scale;

	return str;
}


$( document ).ready(function() {

//intro fix
if(typeof year === 'undefined' || year === null){window.location.href = "Intro.html";}
var today = new Date();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(yyyy>year||(yyyy==year&&mm>12)){
	window.location.href = "Intro.html";
}

var version ="2.1"
$(".IWBVersion").append(version);

$("body").append('<audio class="clickSound"><source src="Audio/Click.mp3" type="audio/mpeg"></audio>');


if($(window).width()<1280 || $(window).height()<960){
	if($(window).height()/$(window).width()>0.75){
		scale=$(window).width()/1280;
	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': '0px'});
	$('.IWB').css({'top': ($(window).height()-(scale*960))/2+ 'px'});

	}
	else{
		scale=$(window).height()/960;
	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': ($(window).width()-(scale*1280))/2+ 'px'});
	$('.IWB').css({'top':'0px'});

		}
}
else{
$('.IWB').css({'left': ($(window).width()-1280)/2+ 'px'});
$('.IWB').css({'top': ($(window).height()-960)/2+ 'px'});
}

function showSpreadU(obj,objTwo,objThree){

 	z =obj;
	p= objTwo;
	x= objThree;

	var io;
	var j;
	var count = 0;

	var thumbs = eval(objTwo);

	for (io= 0; io < thumbs.length; io++)
	{

		count++;
		if(x==thumbs[io].Module)
		{
			var imgContainer ='<div class="secondImages imgs-lvl-' + parseInt(io + 1) + ' ">' ;
			$('[data-second="' + objTwo + '"] [data-secondtargetmodule="' +thumbs[io].Module + '"]').append(imgContainer);




			var keep = thumbs[io].Propeties;

			for (j= 0; j< keep.length; j++)
			{

				if(z==keep[j].Unit) {

						if(keep[j].Pages.includes(","))
						{
							var res = keep[j].Pages.split(",");
							var spread =   '<div class="spr-lvl-' + parseInt(io + 1) +'-'+ parseInt(j + 1) + '"><img src="' +keep[j].src + '">'  + '<span>' +'p. '+ res[0] + '</span>'+'<span>' +'p. '+ res[1] + '</span>'+'</div>' ;

							$('[data-second="' + objTwo + '"] .imgs-lvl-'+ parseInt(io + 1)).append(spread);
						}
						else{
							var spread =   '<div class="spr-lvl-' + parseInt(io + 1) +'-'+ parseInt(j + 1) + '"><img src="' +keep[j].src + '">'  + '<span>' +'p. '+ keep[j].Pages + '</span>'+'</div>' ;
							$('[data-second="' + objTwo + '"] .imgs-lvl-'+ parseInt(io + 1)).append(spread);
						}
					}
			}
		}


	}

	$("img").each( function()
	{
			this.onload = function () {
			if(count === thumbs.length ){

				$(".IWB").removeClass("loading");
				scrollMenu();
			}
		}

	});
}


function showSpread(obj,objTwo){

 	z = obj;
	var io;
	var j;
	var count = 0;


	var thumbs = eval(objTwo);

	for (io= 0; io < thumbs.length; io++)
	{

		count++;
		if(z==thumbs[io].Module)
		{
			// console.log(thumbs[io].Module);
			var imgContainer ='<div class="secondImages imgs-lvl-' + parseInt(io + 1) + ' ">' ;
			$('[data-second="' + objTwo + '"] [data-secondmodule="' +thumbs[io].Module + '"]').append(imgContainer);
			$('[data-second="' + objTwo + '"] [data-secondtargetmodule="' +thumbs[io].Module + '"]').append(imgContainer);



			var keep = thumbs[io].Propeties;


			for (j= 0; j< keep.length; j++)
			{

				if(keep[j].Pages.includes(","))
	 			{
	 				var res = keep[j].Pages.split(",");
	 				var spread =   '<div class="spr-lvl-' + parseInt(j + 1) + '"><img src="' +keep[j].src + '">'  + '<span>' +'p. '+ res[0] + '</span>'+'<span>' +'p. '+ res[1] + '</span>'+'</div>' ;
	 				$('[data-second="' + objTwo + '"] .imgs-lvl-'+ parseInt(io + 1)).append(spread);
	 			}
	 			else{
		 	 		var spread =   '<div class="spr-lvl-' + parseInt(j + 1) + '"><img src="' +keep[j].src + '">'  + '<span>' +'p. '+ keep[j].Pages + '</span>'+'</div>' ;
		 			$('[data-second="' + objTwo + '"] .imgs-lvl-'+ parseInt(io + 1)).append(spread);
	 			}
			}
		}


	}

	$("img").each( function()
	{
			this.onload = function () {
			if(count ===thumbs.length ){

				$(".IWB").removeClass("loading");
				scrollMenu();
			}
		}

	});
}

 $('[data-secondmodule]:not([data-gotoframe])').one("click", function()
 {

 	 if($(this).find("div.secondImages").length==0)
 	{
 		//$(".IWB").addClass("loading");

	 	var typ = this.getAttribute('data-secondmodule');
	 	var sec = $(this).closest("div.secondVisible").attr("data-second");

		showSpread(typ,sec);
	}

});

$(document).on("click", "[data-secondunit]", function () {

		var typ = this.getAttribute('data-secondunit');
		var mod = $(this).closest("div.secondMore").attr("data-secondtargetmodule");
		var sec = $(this).closest("div.secondVisible").attr("data-second");

		$(".secondButtonHidden").removeClass("secondButtonHidden");
		$(this).addClass("secondButtonHidden");
		$(".secondMoreU").html($(this).parent().html());
		// console.log($(this).parent().html());

		$(".secondMoreU").attr("data-secondtargetmodule",mod);
		$(".secondMoreU").fadeIn(0);
		$(".secondImages").fadeOut(0);
		$(".secondButtonWrapper").fadeOut(0);
		$(".secondMore").fadeOut(0);

 	// if($(".secondVisible [data-secondtargetmodule]").find(".secondImages div").length==0)
 	// {
		$(".IWB").addClass("loading");
		showSpreadU(typ,sec,mod);
	// }
});

	var imgs = document.images,
	    len = imgs.length,
	    counter = 0;

$("img").each( function( ) {
	$(this).on('load', incrementCounter ).on('error',incrementCounter).attr("src", $(this).attr("src")+ "?" + new Date().getTime());
});//fix







function incrementCounter() {

    counter++;
    if ( counter === len ) {
        $(".IWB").removeClass("loading");
		try{
			if(JSON.parse(window.name)){

			var cor=JSON.parse(window.name);
			console.log(cor);
			scrollMenu();
				if(cor.Type=="SB"||cor.Type=="WB"||cor.Type=="CN"||cor.Type=="PG" ||cor.Type=="GB"||cor.Type=="GA"||cor.Type=="GT"||cor.Type=="TS"){
					$(".f11Txt").css("right","0");
				}
				if(cor.Type=="PC"||cor.Type=="PG"||cor.Type=="PR"||cor.Type=="PM"||cor.Module=="Revision"||cor.Type=="TE"||cor.Type=="VW"){
						console.log(cor.Type);
						$(".f11Txt").css("right","105px;");
						$(".secondVisible").removeClass("secondVisible");
						$("[data-second]").fadeOut(0);
						$("[data-second="+ cor.Type +"],.secondButtonWrapper").fadeIn(0);
						$("[data-second="+ cor.Type +"]").addClass("secondVisible");
						$(".mainBgEx").addClass('hidden');
						showSecondLevel();
					}


					else{
						if(cor.Type!="GA"){
							$(".mainBgEx").toggleClass('hidden');
						}
						else {
							$(".mainBgEx").addClass('hidden');

						}

						if(cor.Type=="GB"){
							showLessonU(cor.Type,cor.Module,cor.Unit);
							showSpreadU(cor.Unit,cor.Type,cor.Module);
						}
						else{
							showLesson(cor.Type,cor.Module);
							showSpread(cor.Module,cor.Type);
						}
					}


				}

		}
		catch(err){}
		window.name = null;

		 if(introLock==1)
		{
			$(".intro").append("<div class='playIntroSound'>Let's start</div>");
			$(".IWB").addClass("IntroActive");
		}
    }
}



 $(document).on("click", ".playIntroSound", function (e) {
	e.stopPropagation();
	$(this).remove();
	$(".intro audio")[0].addEventListener("ended", function(){
		$(".IntroActive").removeClass("IntroActive");
	});
	$(".intro").addClass("introNext");
	$(".intro audio")[0].play();
});




$(document).on("click", ".introNext", function () {
	$(".IntroActive").removeClass("IntroActive");
	$(".intro audio")[0].pause();
});



$(document).on("click", "[data-moduletarget]", function () {
	$(".mainModules,[data-module]").fadeOut(0);
	$(".mainLessons,[data-module="+ $(this).attr("data-moduletarget") +"]").fadeIn(0);
});

$(document).on("click", ".lessonBack", function () {
	$(".mainLessons").fadeOut(0);
	$(".mainModules").fadeIn(0);
});

$(document).on("click", ".lessonBack", function () {
	$(".mainLessons").fadeOut(0);
	$(".mainModules").fadeIn(0);
});

$(document).on("click", "[data-game]", function () {

	window.name = '{"GameModule":"'+$(this).closest("[data-gamemodule]").attr("data-gamemodule")+'","GameLesson":"'+$(this).attr("data-gamelesson")+'"}';	//game lesson
	window.open("Games/"+ $(this).attr("data-game") +"/"+$(this).attr("data-game")+".html",'_self')
});

$(document).on("click", ".slideshowButtonWrapper>span", function () {

	$(".slideshowButtonActive").removeClass("slideshowButtonActive");
	$(this).addClass("slideshowButtonActive");
	$(".slideshow img:first-child").css("margin-left",-$(this).index()*1280+"px")
});



$(document).on("click", "[data-extramodule]>span", function () {
	if($(this).parent().hasClass("modulesExtraExp")){
		$(".modulesExtraExp .modulesExtraSub").slideUp();
		$(".modulesExtraExp").removeClass("modulesExtraExp");
	}
	else{$(".modulesExtraExp .modulesExtraSub").slideUp();
		$(".modulesExtraExp").removeClass("modulesExtraExp");
		$(this).parent().addClass("modulesExtraExp");
		$(this).siblings(".modulesExtraSub").slideDown();

	}
});

$(document).on("click", ".modulesTrigger", function () {
	$(".modulesExtra").slideToggle();
	$(".modulesExtraExp .modulesExtraSub").slideToggle();
	$(".modulesExtraExp").removeClass("modulesExtraExp");
});

//Modules and more close
$(document).mouseup(function (e) {
   if (!$(".modulesMore").is(e.target) // if the target of the click isn't the container...
   && $(".modulesMore").has(e.target).length === 0) // nor a descendant of the container
   {
     $(".modulesExtra").slideUp();
  }
});
$(document).on("mousedown", ".topBar,.bottomBar,[data-secondtarget],[data-game],[data-second]:not([data-second=PG]) .secondCustomTiles>div>div,.mainBtn,.helpBtn,.helpExit,.instr-Btn,[data-second]:not([data-second=VW]):not([data-second=PM]) .secondButton:not(.demoButton),[data-extramodule]>span,.modulesExtraSub>span,.secondImages:not(.secondImagesCM) div,[data-secondmodule][data-gotoframe],[data-video],.demoGrammar svg,.demoButton svg,.secondBackbtn,.primaryBtns>g,.homeBtn.mainActive,.exitBtn.mainActive,.videoPlayBtn svg,.audioPause ~ .stopBtn svg,.videoPause ~ .videostopBtn svg,.closeVideo ", function (e) {
	$(".clickSound")[0].play();
	e.preventDefault();
	$('.pressed').attr('class', function(index, classNames) {return classNames.replace('pressed', '');});

	$(this).attr('class', function(index, classNames) {return classNames + ' pressed';});
});



$(document).on("mouseenter touchstart", ".topBar,.bottomBar,[data-secondtarget],[data-game],[data-second]:not([data-second=PG]) .secondCustomTiles>div>div,.mainBtn,.helpBtn,.helpExit,.instr-Btn,[data-second]:not([data-second=VW]):not([data-second=PM]) .secondButton:not(.demoButton),[data-extramodule]>span,.modulesExtraSub>span,.secondImages:not(.secondImagesCM) div,[data-secondmodule][data-gotoframe],[data-video],.demoButton svg,.secondBackbtn,.primaryBtns>g,.homeBtn.mainActive,.exitBtn.mainActive,.videoPlayBtn svg,.audioPause ~ .stopBtn svg,.videoPause ~ .videostopBtn svg,.closeVideo ", function (e) {
	e.preventDefault();
	$('.pressed').attr('class', function(index, classNames) {return classNames.replace('pressed', '');});

	$(this).attr('class', function(index, classNames) {return classNames + ' pressed';});
});

$(document).on("mouseup", function () {
	$('.pressed').attr('class', function(index, classNames) {return classNames.replace('pressed', '');});
});
$(document).on("mouseleave touchend", ".topBar,.bottomBar,[data-secondtarget],[data-game],[data-second]:not([data-second=PG]) .secondCustomTiles>div>div,.mainBtn,.helpBtn,.helpExit,.instr-Btn,[data-second]:not([data-second=VW]):not([data-second=PM]) .secondButton:not(.demoButton),[data-extramodule]>span,.modulesExtraSub>span,.secondImages:not(.secondImagesCM) div,[data-secondmodule][data-gotoframe],[data-video],.demoGrammar svg,.demoButton svg,.secondBackbtn,.primaryBtns>g,.homeBtn.mainActive,.exitBtn.mainActive,.videoPlayBtn svg,.audioPause ~ .stopBtn svg,.videoPause ~ .videostopBtn svg,.closeVideo ", function (e) {
	$('.pressed').attr('class', function(index, classNames) {return classNames.replace('pressed', '');});

});


$(document).on("click", "[data-secondtarget]", function () {
	$(".f11Txt").css("right","105px;");//change
	$(".secondVisible").removeClass("secondVisible");
	$("[data-second]").fadeOut(0);
	$("[data-second="+ $(this).attr("data-secondtarget") +"],.secondButtonWrapper").fadeIn(0);
	$("[data-second="+ $(this).attr("data-secondtarget") +"]").addClass("secondVisible");
	showSecondLevel();
	if($(this).attr("data-secondtarget")=="PC" || $(this).attr("data-secondtarget")=="PG" || $(this).attr("data-secondtarget")=="PR" || $(this).attr("data-secondtarget")=="PM" || $(this).attr("data-secondtarget")=="PV" || $(this).attr("data-secondtarget")=="VW" || $(this).attr("data-secondtarget")=="TS" || $(this).attr("data-secondtarget")=="GT")
	{
		$(".mainBgEx").addClass('hidden');
	}
	else {
		$(".mainBgEx").toggleClass('hidden');
	}
	if($(this).attr("data-secondtarget")=="PG" || $(this).attr("data-secondtarget")=="GA" || $(this).attr("data-secondtarget")=="PC")
	{
		$(".f11Txt").css("right","0");//change
	}
});


$(document).on("click", "[data-goto]", function () {

	var splitTxt=$(this).attr("data-goto").split(";");
	if(splitTxt[1]){window.name = '{"Frame":"'+splitTxt[1]+'"}';}
	setTimeout(function(){
		window.open(splitTxt[0] +".html",'_self');
		window.location.href = splitTxt[0] +".html";
		}, 200);
});

$(document).on("click", "[data-video]", function () {
	$(".IWB").addClass("loading");
	$(".videoWrapper source").attr("src","Video/"+ $(this).attr("data-video") +".mp4");
	$(".videoWrapper").css("display","block");
	vFlag=1;
	targetSub=$(this).attr("data-targetsub");
	$(".videoWrapper video")[0].load();
	$(".videoWrapper video")[0].play();

	videoCurrent=1;
});

$('.videoWrapper video').on('canplay', function(){
	if(vFlag==1){
	$(".playBtn").removeClass("playBtn").addClass("pauseBtn");
	$(".subsOn").addClass("subsOff");
	$(".subsSpan").html("");
	$(".subsSpan").fadeOut(0);
	$("[data-videopart]").remove();


	if(targetSub){
		$.each(Subs, function( index, value ) {
			if(value.id==targetSub){
				subs=value.SubsArray;
				if(value.Parts){
					$.each(value.Parts, function( index2, value2 ) {
						if(value2.time==0){}//No Part2 fix
						else{
							var left=value2.time/1000/$(".videoWrapper video")[0].duration*265+"px";
							$(".videoBar").append("<div data-videopart="+ value2.time +" style='left:"+ left +"'>"+ (index2+1) +"</div>");
						}
					});
				}


			return false;}

		});




	};
	vFlag=0;
	videoInterval=setInterval(videoBar,20);
		$(".IWB").removeClass("loading");
}

});

$(document).on("click", ".videoPause", function () {


	$(".videoWrapper video")[0].pause();
	$(".videoPause").removeClass("videoPause");

	clearInterval(videoInterval);

});

 $(document).on("click", ".videoPlayBtn:not(.videoPause)", function () {
	$(".videoWrapper video")[0].play();
	$(this).addClass("videoPause");
	videoInterval=setInterval(videoBar,20);
});

$(document).on("click", ".closeVideo", function () {
	clearVideo();
	$(".videoWrapper").fadeOut(0);
});

$(document).on("click", ".subsOff", function () {
	$(".subsOff").removeClass("subsOff");
	$(".subsSpan").fadeIn(0);
});

$(document).on("click", ".subsOn:not(.subsOff)", function () {
	$(".subsOn").addClass("subsOff");
	$(".subsSpan").fadeOut(0);
	});

$(document).on("click", ".videoBar", function (e) {
	$(".subsSpan").html("");
	if(!$(e.target).is("[data-videopart]")){
    clearInterval(videoInterval);
	var left=coords(e,".videoBar").left;
	var percentage = (left)/$(this).width();
	var crTime=percentage*$(".videoContainer video")[0].duration*1000;
	$(".videoContainer video")[0].currentTime=percentage*$(".videoContainer video")[0].duration;

	$.each(subs, function( index, value ) {
		if(index==0&&value.Start>crTime){
			$(".subsSpan").html("");videoCurrent=1;return false;
			}
		try{
			if(value.Start<crTime){
				videoCurrent=index+1;
				if(value.End>crTime){
					$(".subsSpan").html(subs[videoCurrent-2].Text);
				}
				return false;
			}
		}catch(err){}
	});
	videoInterval=setInterval(videoBar,20);
	}
});

$(document).on("click", "[data-videopart]", function (e) {
	$(".subsSpan").html("");
    clearInterval(videoInterval);

	$(".videoContainer video")[0].currentTime=$(this).attr("data-videopart")/1000;
	var crTime=$(".videoContainer video")[0].currentTime;
	$.each(subs, function( index, value ) {
		if(index==0&&value.Start>crTime){$(".subsSpan").html("");videoCurrent=1;return false;}
		try{if(value.Start<crTime){videoCurrent=index+1;if(value.End>crTime){$(".subsSpan").html(subs[videoCurrent-2].Text);}return false;}
		}catch(err){}
	});
	videoInterval=setInterval(videoBar,20);
});

$(document).on("click", ".videoPause ~ .videostopBtn svg", function () {


		clearVideo();
		$(".videoPlayBtn").removeClass("videoPause");
});

$('.videoContainer video').on('ended', function() {
   clearVideo();
	$(".pauseBtn").removeClass("pauseBtn").addClass("playBtn");
	$(".videoWrapper").fadeOut(0);

});

//$(".topBar,.bottomBar").css("cssText","min-width:882px!important;");

//Scroll bars: function
function scrollMenu(){
	thumbRows = 1;
	totalWidth = 0;
	scrollTimes = 0;
	position = 0;
	firstLine = 0;
	bottom = 0;
	$(".topBar,.bottomBar").hide().fadeIn(0);
	$(".secondVisible [data-secondtargetmodule]").find(".secondImages div").each(function( index, value ) {
			totalWidth=totalWidth+($(this).find("img").width());
			if(totalWidth <= 882){
				firstLine=firstLine+($(this).width())+29;
			}
	});
	thumbRows = Math.floor(totalWidth/882) + 1;

	//$(".topBar,.bottomBar").css("width",firstLine+"px");
	 $(".topBar,.bottomBar").css("width",$(".secondImages").width() + "px");

	bottom = $(".secondVisible [data-secondtargetmodule]").find(".secondImages").prop("scrollHeight");
	$(".topBar").fadeTo(0,0);
	$(".topBar").addClass("disabledBar");
	$(".bottomBar").addClass("disabledBar");
	if (bottom > 482){
		$(".bottomBar").fadeTo(0,1);
		$(".bottomBar").removeClass("disabledBar");
	}
	else{$(".bottomBar").fadeTo(0,0);}
}
//Scroll bars: function end

$(document).on("click", "[data-secondmodule]:not([data-gotoframe])", function () {
	$(".secondButtonHidden").removeClass("secondButtonHidden");
	$(this).addClass("secondButtonHidden");
	$(".secondMore").html($(this).html());

	//$(".logoImg img").attr("src","");//change
	$(".f11Txt").css("right","0");//change

	$(".secondMore").attr("data-secondtargetmodule",$(this).attr("data-secondmodule"));
	$(".secondMore").fadeIn(0);
	$(".secondButtonWrapper").fadeOut(0);

	if($(this).closest("[data-second]").data("second") == "GB"){
		$(".secondImages").fadeOut(0); //new
	}
	else{
		scrollMenu(); //Scroll bars: function call
	}
	console.log($(this).closest("[data-second]").data("second"));
});


//Scroll bars: Top-Bottom bars buttons
$(document).on("click", ".topBar:not(.disabledBar)", function () {
	scrollTimes = scrollTimes - 241;
    $(".secondImages").animate({scrollTop:(scrollTimes)}, 600);
	console.log(scrollTimes+482);
	if(scrollTimes == 0){$(".topBar").fadeTo(0,0);$(".topBar").addClass("disabledBar");}
	$(".bottomBar").fadeTo(0,1);
	$(".bottomBar").removeClass("disabledBar");
});

$(document).on("click", ".bottomBar:not(.disabledBar)", function () {
	scrollTimes = scrollTimes + 241;
    $(".secondImages").animate({scrollTop:(scrollTimes)}, 600);
	console.log(scrollTimes+482);
	if(bottom <= (scrollTimes+482)){$(".bottomBar").fadeTo(0,0);$(".bottomBar").addClass("disabledBar");}
	$(".topBar").fadeTo(0,1);
	$(".topBar").removeClass("disabledBar");
});
//Scroll bars: Top-Bottom bars buttons end

//Scroll bars: wheel function
$(document).on( 'mousewheel DOMMouseScroll', '.secondImages', function(e){
	var delta;
	if (e.originalEvent)
	{
		if (e.originalEvent.wheelDelta) delta = e.originalEvent.wheelDelta / -40;
		if (e.originalEvent.deltaY) delta = e.originalEvent.deltaY;
		if (e.originalEvent.detail) delta = e.originalEvent.detail;
	}
	delta = (delta<0 ? -1 : 1);

	//console.log(delta, e);

	console.log($(".secondImages").scrollTop());
	console.log($(".secondImages").scrollTop() + 100 * delta);

	position = $(".secondVisible").find(".secondImages").scrollTop() + 100 * delta;
	totalHeight = $(".secondVisible").find(".secondImages").prop("scrollHeight");

	if ( position > 0 && bottom > 482)  // eimaste endiamesa
	{
		$(".topBar").fadeTo(0,1);
		$(".topBar").removeClass("disabledBar");
	}
	else // eimaste terma panw
	{
		$(".topBar").fadeTo(0,0);
		$(".topBar").addClass("disabledBar");
	}
	if ( (position+482) >= totalHeight ) // eimaste terma katw
	{
		$(".bottomBar").fadeTo(0,0);
		$(".bottomBar").addClass("disabledBar");
	}
	else{
		if(bottom > 482)   // eimaste endiamesa
		{
			$(".bottomBar").fadeTo(0,1);
			$(".bottomBar").removeClass("disabledBar");
		}
	}
	console.log(totalHeight);
});
//Scroll bars: wheel function end

/* $(document).on('mousewheel',function (e) {
      var delta = e.originalEvent.wheelDelta;
      console.log('scroll ' + delta, e);
	  if ( delta >= 120 ){
		$(".bottomBar").fadeIn(0);
	  }
	  else if ( delta <= -120 ){
		$(".topBar").fadeIn(0);
	  }
}); */

$(document).on("click", "[data-secondmodule][data-gotoframe]", function () {
	var pre="Module";
	window.name = '{"Frame":"'+ $(this).attr("data-gotoframe")+'"}';
	if($(this).closest("data-second")=="GB"){pre="Module"}
	var loc="EX/"+pre + $(this).attr("data-secondmodule") +".html";
	setTimeout(function(){
		window.open(loc,'_self');
		window.location.href = loc;
		}, 200);


});

$(document).on("click", "[data-type='VC']:not([data-disabled])", function () {
	let modRedirect = $(this).closest("[data-extramodule]").attr("data-extramodule");

	if($(this).parents("[data-extramodule]").length>0){
		window.name = '{"GlossaryModule":"'+ modRedirect +'","Return":"menu"}';
	}
	setTimeout(function(){
		window.open("EX/Vocabulary.html",'_self');
		window.location.href = "EX/Vocabulary.html";
		}, 200);
});

$(document).on("click", "[data-type='ABC']:not([data-disabled])", function () {

	setTimeout(function(){
		window.open("EX/ABCBook.html",'_self');
		window.location.href = "EX/ABCBook.html";
		}, 200);
});


$(document).on("click", "[data-extra]", function () {
	console.log($(this).data("extra"));
	//new way showSpreads
	if ($(this) == "GB") {
		showFirstLevel();
	}
	else{
		showLesson($(this).attr("data-extra"),$(this).closest("[data-extramodule]").attr("data-extramodule"));
	}

	if(!$('.mainBgEx').hasClass('hidden'))
	{
		$(".mainBgEx").toggleClass('hidden');
	}
	// checks if images already exist;
 	if($(".secondVisible [data-secondtargetmodule]").find(".secondImages div").length==0 && $(this).data("extra") != "GA" && $(this).data("extra") != "GB")
 	{
 		$(".IWB").addClass("loading");
		showSpread($(this).closest("[data-extramodule]").attr("data-extramodule"),this.getAttribute('data-extra'));
	}
	$(".f11Txt").css("right","0");
});

$(document).on("click", ".modulesExtraSub span", function () {
$(".modulesExtra").fadeOut(0);

});


$(document).on("click", ".secondImages:not(.secondImagesCM) div", function () {
	var type=$(this).closest("[data-second]").attr("data-second");
	var mod=$(this).closest("[data-secondtargetmodule]").attr("data-secondtargetmodule");
	var img=$(this).children("img").attr("src").replace("Images/Spreads/","");//fix
	window.name = '{"Image":"'+img.substr(0,img.indexOf("_thumb"))+'"}';//fix



	console.log(window.name);
	if($(this).closest("[data-second]").attr("data-second")=="ABC"){setTimeout(function(){
		window.open("EX/ABCBook.html","_self");
		window.location.href = "EX/ABCBook.html";}, 200);}
	else{

	if(mod=="0"){
		setTimeout(function(){window.location.href = type+"/Hello.html"}, 200);}
	else{
		setTimeout(function(){
			window.open(type+"/Module"+ mod +".html","_self");
			window.location.href = type+"/Module"+ mod +".html";}, 200);
		}
	}
});








$(document).on("click", ".secondBackbtn", function () {
	//Scroll bars: hide bars
	position=0;
	$(".secondMore").fadeOut(0);
	$(".topBar,.bottomBar").fadeOut(0);
    //Scroll bars: hide bars end
	var inp=$(".secondVisible").attr("data-second");
	$(".f11Txt").css("right","105px");

	try
	{
		if (inp == "GB"){
			if($('.secondMoreU:visible').length == 0){

				if($('.secondButtonWrapper:visible').length == 0){
					showSecondLevel();

				}
				else{
					showFirstLevel();
				}

				console.log("bbbb");
				$(".secondVisible .secondButtonWrapper").fadeIn(0);
				$(".secondVisible .secondMore").fadeOut(0).html("");
				$(".secondButtonHidden").removeClass("secondButtonHidden");


			}

			else {
				console.log("Module");

				 $(".secondModuleButton").removeClass("secondButtonHidden");
				 $(".secondModuleButton").addClass("secondButtonVisible");
				 $(this).removeClass("secondButtonHidden");
				 $(".secondImages").fadeOut(0);
				 $(".secondMore").fadeIn(0);
				 $(".secondMoreU").fadeOut(0);
				 $(".topBar,.bottomBar").fadeIn(0);
				//$(".secondVisible .secondButtonWrapper").fadeIn(0);
				//$(".secondVisible .secondMore").fadeOut(0).html("");
				//$(".secondButtonHidden").removeClass("secondButtonHidden");




			}
		}
		else{
			if($('.secondMore').css('display') == 'none')
				{
					$(".topBar,.bottomBar").fadeOut(0);
				}

			if($(".secondVisible .secondMore").html().length>20){
				console.log("bbbb");
				$(".secondVisible .secondButtonWrapper").fadeIn(0);
				$(".secondMore").fadeOut(0).html("");
				$(".secondButtonHidden").removeClass("secondButtonHidden");
				$(".topBar,.bottomBar").fadeOut(0);
			}
			else{
				console.log("cccc");
				$(".mainBgEx").toggleClass('hidden');
				if(inp=="TS" || inp=="GT"){
					console.log(inp);
					$(".mainBgEx").addClass('hidden');
					$(".secondButtonWrapper").fadeIn(0);;
				}

				$("[data-second]").fadeOut(0);
				showFirstLevel();
				$(".main [data-secondtarget]").each(function( index, value ) {
					if($(this).attr("data-secondtarget")==inp){
						if($(this).closest("[data-second]").length>0){$(this).closest("[data-second]").fadeIn(0);
						showSecondLevel();}
						return false;}
				});
			}
		}
	}

	catch(err){

		console.log(inp);
		$("[data-second]").fadeOut(0);
		showFirstLevel();
		$(".main [data-secondtarget]").each(function( index, value ) {
		if($(this).attr("data-secondtarget")==inp){
			if($(this).closest("[data-second]").length>0){$(this).closest("[data-second]").fadeIn(0);
			showSecondLevel();}
			return false;
			}
	});
		if(inp!="PC" && inp!="PG" && inp!="PR" && inp!="PM" && inp!="PV" && inp!="TS" && inp!="GT"){$(".mainBgEx").removeClass('hidden');}
		else{$(".mainBgEx").addClass('hidden');}

	}

	//$('.modulesMore').css('display','block');
});



$(document).on("click", ".homeBtn", function () {
	showFirstLevel();
});


$(document).on("click", ".helpBtn", function () {
	$(".help").fadeIn(0);
	$(".helpBtn").fadeOut(0);
	$("#main").fadeOut(0);
});

$(document).on("click", ".helpExit svg", function () {
	$(".help").fadeOut(0);
	$(".helpBtn").fadeIn(0);
	$("#main").fadeIn(0);
});

$(document).on("click", ".instr-Btn", function () {
	window.open('Instructions_Brochure.pdf');
});

function showSecondLevel(){
	$(".firstLevel").fadeOut(0);
	$(".secondLevel").fadeIn(0);
	$(".homeBtn").attr("class","homeBtn mainActive");

}

function showFirstLevel(){
	$(".secondButtonHidden").removeClass("secondButtonHidden");
	$(".secondMore").html("");
	$(".secondMoreU").html("");
	$(".secondLevel").fadeOut(0);
	$(".firstLevel").fadeIn(0);
	$(".homeBtn").attr("class","homeBtn mainInactive");
	$(".secondVisible").removeClass("secondVisible");
}

function showLesson(second,module){
	$(".secondVisible").removeClass("secondVisible");
	$("[data-second]").fadeOut(0);
	$("[data-second="+ second +"]").fadeIn(0).addClass("secondVisible");


	var inp=$("[data-second="+ second +"] [data-secondmodule="+ module +"]>div:first-child");
	$(".secondButtonHidden").removeClass("secondButtonHidden");
	inp.parent().addClass("secondButtonHidden");
	$(".secondMore").html(inp.closest(".secondButton").html()).attr("data-secondtargetmodule",module);
	$(".secondMore").slideDown(0);
	$(".secondButtonWrapper").fadeOut(0);

	showSecondLevel();
	$(".modulesExtra").slideUp(0);
	$(".modulesExtraExp .modulesExtraSub").slideUp(0);
	$(".modulesExtraExp").removeClass("modulesExtraExp");

    scrollMenu();//Scroll bars: function call
}

function showLessonU(second,module,unit){
	console.log(unit);
	$(".secondVisible").removeClass("secondVisible");
	$("[data-second]").fadeOut(0);


	$("[data-second="+ second +"]").fadeIn(0).addClass("secondVisible");


	var inp=$("[data-second="+ second +"] [data-secondunit="+ unit +"]>div:first-child");
	$(".secondButtonHidden").removeClass("secondButtonHidden");
	inp.parent().addClass("secondButtonHidden");
	$(".secondMore").html(inp.parents("[data-secondmodule]").html()).attr("data-secondtargetmodule",module);
	$(".secondMoreU").html(inp.closest(".secondButton").html()).attr("data-secondtargetmodule",module);
	$(".secondMoreU").slideDown(0);
	$(".secondButtonWrapper").fadeOut(0);

	showSecondLevel();
	$(".modulesExtra").slideUp(0);
	$(".modulesExtraExp .modulesExtraSub").slideUp(0);
	$(".modulesExtraExp").removeClass("modulesExtraExp");

}

function clearVideo(){
try{
clearInterval(videoInterval);
}
	catch(err){}
$(".videoContainer video")[0].pause();
try{$(".videoContainer video")[0].currentTime=0;}catch(err){}
$(".videoPlayBtn").addClass("videoPause");
$(".videoTimer").html("00:00");
$(".videobarRed").css("width","0px");
videoCurrent=1;

}

function videoBar(){
var percentage=$(".videoContainer video")[0].currentTime/$(".videoContainer video")[0].duration;
var phrTime=$(".videoContainer video")[0].currentTime*1000;
if(percentage>1){percentage=1;}
var soundBarWidth=$(".videoBar").width();
var bWidth=percentage*soundBarWidth;
$(".videoBar .videobarRed").css("width",bWidth+"px");
$(".videoBar .barRed").css("width",bWidth+"px");
$(".barRedBall").css("left",(bWidth-7)+"px");

var tr = minTwoDigits(Math.floor(($(".videoContainer video")[0].currentTime + 1) / 60)) + ":" + minTwoDigits(Math.ceil($(".videoContainer video")[0].currentTime) % 60);
$(".videoTimer").html(tr);

	$('.barRedBall').each(function() {
	var left = parseFloat($(this).css("left").replace("px"));
	  if (left > 255) {
		$(this).css("left","255px");
	  }
	});
if(subs){
	try{if(phrTime>=subs[videoCurrent-1].Start){
			$(".subsSpan").html(subs[videoCurrent-1].Text);
		}
	}catch(err){}

	try{if(phrTime>=subs[videoCurrent-1].End){
			$(".subsSpan").html("");
			videoCurrent++;
		}
	}catch(err){}
}
}

function minTwoDigits(n) {
		return (n < 10 ? '0' : '') + n;
	}



$(window).resize(function() {



  if($(window).width()<1280 || $(window).height()<960){
	if($(window).height()/$(window).width()>0.75){
		scale=$(window).width()/1280;

	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': '0px'});
	$('.IWB').css({'top': ($(window).height()-(scale*960))/2+ 'px'});

	}
	else{
		scale=$(window).height()/960;
	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': ($(window).width()-(scale*1280))/2+ 'px'});
	$('.IWB').css({'top':'0px'});

		}
}

else{
$('.IWB').css({'-webkit-transform': 'scale(1)'});
	$('.IWB').css({'-ms-transform': 'scale(1)'});
	$('.IWB').css({'transform': 'scale(1)'});
$('.IWB').css({'left': ($(window).width()-1280)/2+ 'px'});
$('.IWB').css({'top': ($(window).height()-960)/2+ 'px'});
}

});


});
