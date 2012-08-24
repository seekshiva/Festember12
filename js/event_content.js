(function(){
	
var Event = function (){
	       
	      if(!(this instanceof Event))
			  return new Event();
	    
        }; 
		
 Event.fn = Event.prototype={ 
 "Arts" : [ { "description" : "Individual event. Establish your command over your memory power through this event! Observe an image for a couple of minutes and unveil your flair to replicate it after the image is taken away.",
        "title" : "Blindfold"
      },
      { "description" : "Let the paint and brushes do the magic on the faces! Thematic and imaginative be it!  Material will be provided to the participants.",
        "title" : "Face Painting"
      },
      { "description" : "Get ready to astound the audience with the smooth flow of your dominoes, to end up with a spectacular, colourful image.  Participants should bring their own material.",
        "title" : "Dominoes"
      },
      { "description" : "Adorn the walls of NITT and pitch in your part for this Festember by painting in accordance with the ‘Retro’ theme! Paints and brushes will be provided.",
        "title" : "Wall Painting"
      },
      { "description" : "Add some more artistry to your model by showing us what its shadow can depict! Use the myriad of materials we’ll provide you with, (includes thermocol, paper cups, newspapers, wires, thread) and let the shadows do the talking!",
        "title" : "Shadow art"
      }
    ],
  "Choreo" : [ {
         "description" : "Coming Up Soon!",
	     "title" : ""
	  }
	],
  "Lits" : { "English" : [ { "description" : "The life of a quizzer can get lonely, very lonely. Social interaction is kept at a minimum to maximize perfomance. Well now you can turn this to your advantage, for once; it pays to be forever alone.",
            "title" : "Lone Wolf"
          },
          { "description" : "Here’s a chance to prove your mother wrong. A chance to finally make something out of a whole childhood wasted in front of the idiot box. This is a quiz that tests your knowledge of the world of sports and entertainment.",
            "title" : "Spent Quiz"
          },
          { "description" : "Always found quizzes to be a total buzz-kill? Kill the buzzer in this one and redeem yourself. Teams of two each, struggle to press the right buttons at the right time.",
            "title" : "Buzzer Quiz"
          },
          { "description" : "Are there things that remain that you still don’t know about India? You’re bound to turn up with gold or end up realizing how little you know of where you stay.",
            "title" : "India Quiz"
          },
          { "description" : "Actions speak louder than words. Silence is golden. Yes, you get the idea... make sure you keep your mouth shut and express yourself all the same at Dumb Charades this year.",
            "title" : "Dumb-C"
          },
          { "description" : "No, we aren’t going to give you a cryptic clue the answer to which is ‘crossword’. One of the mainstays of any English Lits fest, the crossword returns this Festember in its finest form. Try and solve the cryptic clues and have a whale of a time doing so.",
            "title" : "Crossword"
          },
          { "description" : "Calling all brainiacs! Here’s an event that’ll give MENSA’S IQ tests a run for their money. Puzzle Champ is an out-and-out battle of brains that makes you wrack that big brain of yours trying to solve complex puzzles before your competitors.",
            "title" : "Puzzle Champ"
          },
          { "description" : "If you think you’re a Jack of all trades, try your hand at potpourri, an eclectic mix of various events. It includes word games, miming, twenty questions and many other events. Come have a blast!",
            "title" : "Potpourri"
          },
          { "description" : "This Festember, use your annoying habit of interrupting and correcting people to get some fame and fortune.  Speak on wacky topics, as long as you do so in Queen’s English. An individual speaking event.",
            "title" : "JAM"
          },
          { "description" : "Scrabble is the board game that needs no introduction, but here’s one anyway. Use wit and vocabulary to steadily assert your dominance in this game of tiles. Bamboozle your opponents with words whose existence even you aren’t sure of. If you play your tiles right, you might get an elusive bonus!",
            "title" : "Scrabble"
          },
          { "description" : "Do such things as bad words exist? Perhaps, but unless you know what the good word is, it’s quite impossible a task, this event. Watch as English devolves into something you’ve never seen before, and try to make sense of it all and turn up with the word everyone’s looking for.",
            "title" : "What's The Good Word(WTGW)"
          },
          { "description" : "Here’s a platform to air your views and go down dying defending them. Battle it out with other teams in a parliamentary style debate. Try to break your opponent’s argument down while defending your own.",
            "title" : "Debate"
          },
          { "description" : "We’re as clueless as you are. Just drop in and take a peak. It ought to be fun.",
            "title" : "What it eEs"
          }
        ],
      "Hindi" : [ { "description" : "इस प्रतियोगिता में हिन्दी फिल्में, गाने और बॉलीवुड के कुछ सामान्य ज्ञान का परीक्षण किया जायेगा ।",
            "title" : "जश्न ए मौसिकी (हिन्दी अन्ताक्षरी)"
          },
          { "description" : "प्रतियोगिता मूल रुप से सामान्य जागरुकता ,हि्दी साहित्य ,पौराणिक कथाओं और हिन्दी व्याकरण के बारे मे ज्ञान परीक्षण करेगा।",
            "title" : "हल्का फुल्का (हिन्दी व्याकरण ज्ञान प्रशनोत्तरी)"
          },
          { "description" : "प्रतियोगिता मूलतः लेखन कौशल,रचनात्मता, प्रस्तुति और भाषा का परीक्षण करेगा। जैसा कि ईवेंट के नाम से ही स्पष्ट हैं कि यह प्रतियोगिता आपकी त्वरित रचनात्मक लेखन में निखार लाएगा ।",
            "title" : "त्वरित सृजनात्मक लेखन (रचनात्मक लेखन)"
          },
          { "description" : "प्रतियोगिता मूल रुप से हिन्दी शब्दावली का  परीक्षण करेगा।",
            "title" : "शब्दजाल हिन्दी वर्ग पहेली"
          },
          { "description" : "इस प्रतियोगिता में प्रतिभागी किसी बिषय वस्तु पर पक्ष या विपक्ष पर में वाद प्रतिवाद  करते है, ।",
            "title" : "वाद -विवाद"
          },
          { "description" : "विषय सामान्य सहजता एवं रचनात्मकता को परखना हैं।",
            "title" : "तात्कालिक भाषण"
          },
          { "description" : "इस प्रतियोगिता में प्रतिभागी के भारत से संबंधित सामान्य प्रश्नो को परखा जाता हैं ।",
            "title" : "अतुल्य भारत (इंडिया क्विज)"
          },
          { "description" : "किसी भी व्यक्तित्व,फिल्म,जगह,या किसी भी अनजान वस्तु को इशारो मे अपने सहयोगी को बताना होता हैं ।",
            "title" : "कुछ ना कहो (डम्ब सी)"
          },
          { "description" : "इस प्रतियोगिता में मूलतः सामान्य ज्ञान और एप्टीटुयड पर प्रश्न होंगे। ",
            "title" : "साँपसीढी"
          },
          { "description" : "रोचक प्रश्नों के रोचक उत्तर ही रोचक मंत्रणा का मूल मंत्र हैं ।",
            "title" : "रोचक मंत्रणा"
          },
          { "description" : "इस प्रतियोगिता में आप और आपके सहयोगी में समानता का परीक्षण किया जाता हैं ।",
            "title" : "हम - तुम"
          },
          { "description" : "इस प्रतियोगिता में प्रतियोगिता को मूर्ख होने बचना होता हैं ।",
            "title" : "ब्लफ मास्टर"
          }
        ],
      "Tamil" : [ { "description" : "அகத்தியர் பாடம்சொல்லி தொல்காப்பியர் விதிவிளக்கி தேவன் முப்பால் வகுத்து சித்தர்கள் அறிவியல் புகுட்டி மேல்கீழ்  18 ஆக இயற்றி சிறியதுபெரியது 5 ஆக அணிந்து பல்சுவை கலந்து மறுமலர்ந்து வீற்றுள்ளது உயர்தனிச்செம்மொழியாம் தமிழ்மொழி!",
            "title" : " உயர்தனிச்செம்மொழி  "
          },
          { "description" : "சமுதாய பொறுப்புணர்வு கொண்ட கருத்துகளை நகையுணர்வு மிகுதியான  முறையில் சிரிக்கவும் வைத்து சிந்திக்கவும் செய்வது கேலிச்சித்திரம்.. இப்போட்டி உங்கள் படைப்பாற்றல், கற்பனைத்திறன், நகையுணர்வு முதலியவற்றுக்கு ஒரு சவால்..",
            "title" : " கேலிச்சித்திரம் "
          },
          { "description" : "வலமும் இடமும் மேலும் கீழும் எழுத்தும் சொல்லும் பெயரும் பொருளும் கண்முன் மறைந்தும் திரிந்தும் தெளிந்தும் இருந்தால் அங்கே குறுக்கெழுத்து பிறந்திடுமே! ",
            "title" : " குறுக்கெழுத்து"
          },
          { "description" : "விழிகொண்டு பாவித்து மதிகொண்டு யோசித்து சதி ஏதும்  செய்யாமல் சைகையால் சாதிக்கும் ஊமை விளையாட்டு.. ",
            "title" : " காற்றோடு கதை பேசவா "
          },
          { "description" : "தமிழ் கமழும் சோலை தனில் கவி முழங்கும் கைத் திறத்தால் மணம் பரப்பும் மாந்தர் தனை அறியும் ஒரு அவா உற்று வழித்தடம் பற்றி கவித்தடம் பதிக்க அழைப்பிதழ் அளிக்கின்றோம் !!! ",
            "title" : " கவித்திடல் "
          },
          { "description" : "கூட்டு முயற்சி, சமயோசித புத்தி, அறிவுக்கூர்மை ஆகிய திறன்கள் சங்கமிக்கும் இடம்.. விறுவிறுப்பான சுற்றுகளில் நீங்கள் சந்திக்கும் பல்வேறு சுவைமிகு சவால்களைத் தில்லாக எதிர் கொண்டு நீங்கள் 'சகல கலா வல்லவன்' என்பதை நிருபியுங்கள்.. ",
            "title" : " சகல கலா வல்லவன் "
          },
          { "description" : "புள்ளி வைத்து இணைக்கும் வினோதம்  வண்ணங்கள்  தீட்ட வெளிவரும் நாகரிகம் மண்ணை அலங்கரிக்கும் கோலம் நற்செயலின் அடையாளம் ! ‘கூர்மாசன உத்கடாசனம்’ என்னும் இக்கலையில் சிறந்த ராதைகளுக்கு எம் கல்லூரி வாசல் காத்துக் கொண்டிருக்கிறது! ",
            "title" : " கோலம் "
          },
          { "description" : "ஒரு சில மணித்  துளிகளால் வெற்றி தவறிப்போனதுண்டு அதை தவிர்க்க நேரம் அதிகமாக கிடைத்தால்? அதுவும் ஒரு நாள் முழுதும் கிடைத்தால்!? அறுசுவையும் எழுவண்ணமும் நவரசமும் மிகுதியாய் இருக்க, பல்துறை சார்ந்த கேள்விகளுக்கு பதில் அளித்து பரிசுகளைத் தட்டிச் செல்லுங்கள்  !!",
            "title" : " தினந்தோறும்"
          },
          { "description" : "' ஒரே ஒரு ஊருல ஒரே ஒரு ராஜாவாம்!' என்னும் பாட்டி கதைகளில் தொடங்கி சுஜாதாவின் அறிவியல் புனை கதைகள் வரை நாம் பார்த்து விட்டோம். இப்போட்டி நம்முள் ஒளிந்திருக்கும் புதுமைபித்தன், ஜெயகாந்தன், சுஜாதாக்களை வெளிக்கொணர ஓர் அரிய வாய்ப்பு.. நம்மிடையே உலவும் இளம் சிறுகதை மன்னர்களைத் தட்டிக்கொடுத்து ஊக்குவிக்கும் அடித்தளமாய் இது அமையும்.",
            "title" : " சிறுகதை மன்னன் "
          },
          { "description" : " ஒருவர் தரும் துணுக்குகளைக் கொண்டு அதன் விடையாகவோ அதனோடு தொடர்புடையதாகவோ உள்ள சொல்லைக் கண்டுபிடிப்பது..  பங்கேற்பவரின் அறிவைவிடவும் தமிழ் வார்த்தைவளமே காலத்தின் கட்டாயமாக இருக்கிறது.  'புலவர்களையும் புத்திசாலிகள் வெல்லும் போட்டி இது !!'",
            "title" : " வார்த்தை விளையாட்டு "
          },
          { "description" : "' போர்வாளினது  கூர்மையினையும் விஞ்சியது நல்வாதத்தின் மொழியாம்! ' சொல் நயமும் குரல் நயமும் ஒருங்கே பெற்றவர்கள் உலகவரலாற்றையே மாற்றி அமைத்து இருக்கின்றனர்.  உங்களுக்கு இந்த திறமை இருந்தால் உங்கள் குரலினால் ஓவியம் தீட்ட வாரீர்!!",
            "title" : " குரலோவியம் "
          },
          { "description" : " உங்கள் கல்லூரியில் நீங்கள் கலாய்ப்பதில் கில்லாடியா? நகைச்சுவை நாயகனா?  பலகுரல் மன்னனா?? வாருங்கள்! பெஃஸ்டம்பரில்  உங்களுக்காகக் காத்திருக்கிறது எங்களின் கலக்கல் கலாட்டா மேடை.. 'வந்து கலக்குங்க, கலாட்டா பண்ணுங்க!'   ",
            "title" : " கலக்கல் கலாட்டா "
          },
          { "description" : "சட்டென்று கருத்துகளை கூறிட பட்டென்று பாமரனை அது சேர்ந்திட  நம்தமிழருக்கு முத்தமிழ் தந்த ஊடகம் நற்கலையாம் கூத்தம்பலம்  குழுவொன்று கூடியமைத்து குறையில்லா  தமிழ் கலையை புதுப்பிக்க வாரீர்!! ",
            "title" : " கூத்தம்பலம் "
          },
          { "description" : "எ.வி.எமின் உருவாக்கம்  கோடம்பாக்கத்தின் மறுபக்கம்  'சினிமா' அதுவே கலைகளின் ஒளியகம்! உங்கள் திறமையைக் கொண்டு எங்கள் திரைதாகத்தை தீர்த்திடுங்கள்!! ",
            "title" : "கோடம்பாக்கம் "
          }
        ]
    },
  "Music" : [ { "description" : "The western semi-pro event, GIG-A-Hertz, conducted at NIT-Trichy is a prominent event in the Indian music circuit. Drawing in teams from all around south India with its lucrative prizes and intense competition, this has become one of the stellar events of Festember. This event also provides a stage for all the fans of the Metal genre to enthrall the audience with some action packed music. ",
        "title" : "GIG-A-HERTZ"
      },
      { "description" : "Tarangini is the eastern music group event organized by NIT Trichy, during Tamil Nadu’s celebrated national level inters collegiate cultural festival – Festember.",
        "title" : "Tarangini"
      },
      { "description" : "Theatrix '12, a battleground for dramatic troupes from colleges all over the country. Encompassing and encouraging all genres from mystery and drama to satire, farce and comedy, Theatrix '12, provides drama enthusiasts the ultimate stage to entertain, captivate and thrill audiences with their theatrical talents whilst fighting it out against their worthy counterparts from other colleges.",
        "title" : "THEATRIX"
      }
    ]
};

window.Event = Event;
})();	