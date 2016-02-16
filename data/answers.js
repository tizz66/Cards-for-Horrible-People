/* Thanks to https://raw.githubusercontent.com/samurailink3/hangouts-against-humanity/master/source/data/cards.js */
const answers = {
	1: {
        "text":"Flying sex snakes.",
        "expansion": "Base"
    },
    2: {
        "text":"Michelle Obama's arms.",
        "expansion": "Base"
    },
    3: {
        "text":"German dungeon porn.",
        "expansion": "Base"
    },
    4: {
        "text":"White people.",
        "expansion": "Base"
    },
    5: {
        "text":"Getting so angry that you pop a boner.",
        "expansion": "Base"
    },
    6: {
        "text":"Tasteful sideboob.",
        "expansion": "Base"
    },
    7: {
        "text":"Praying the gay away.",
        "expansion": "Base"
    },
    8: {
        "text":"Two midgets shitting into a bucket.",
        "expansion": "Base"
    },
    9: {
        "text":"MechaHitler.",
        "expansion": "Base"
    },
    10: {
        "text":"Being a motherfucking sorcerer.",
        "expansion": "Base"
    },
    11: {
        "text":"A disappointing birthday party.",
        "expansion": "Base"
    },
    12: {
        "text":"Puppies!",
        "expansion": "Base"
    },
    13: {
        "text":"A windmill full of corpses.",
        "expansion": "Base"
    },
    14: {
        "text":"Guys who don't call.",
        "expansion": "Base"
    },
    15: {
        "text":"Racially-biased SAT questions.",
        "expansion": "Base"
    },
    16: {
        "text":"Dying.",
        "expansion": "Base"
    },
    17: {
        "text":"Steven Hawking talking dirty.",
        "expansion": "Base"
    },
    18: {
        "text":"Being on fire.",
        "expansion": "Base"
    },
    19: {
        "text":"A lifetime of sadness.",
        "expansion": "Base"
    },
    20: {
        "text":"An erection that lasts longer than four hours.",
        "expansion": "Base"
    },
    21: {
        "text":"AIDS",
        "expansion": "Base"
    },
    22: {
        "text":"Same-sex ice dancing.",
        "expansion": "Base"
    },
    23: {
        "text":"Glenn Beck catching his scrotum on a curtain hook.",
        "expansion": "Base"
    },
    24: {
        "text":"The Rapture.",
        "expansion": "Base"
    },
    25: {
        "text":"Pterodactyl eggs.",
        "expansion": "Base"
    },
    26: {
        "text":"Crippling debt.",
        "expansion": "Base"
    },
    27: {
        "text":"Eugenics.",
        "expansion": "Base"
    },
    28: {
        "text":"Exchanging pleasantries.",
        "expansion": "Base"
    },
    29: {
        "text":"Dying of dysentery.",
        "expansion": "Base"
    },
    30: {
        "text":"Roofies.",
        "expansion": "Base"
    },
    31: {
        "text":"Getting naked and watching Nickelodeon.",
        "expansion": "Base"
    },
    32: {
        "text":"The forbidden fruit.",
        "expansion": "Base"
    },
    33: {
        "text":"Republicans.",
        "expansion": "Base"
    },
    34: {
        "text":"The Big Bang.",
        "expansion": "Base"
    },
    35: {
        "text":"Anal beads.",
        "expansion": "Base"
    },
    36: {
        "text":"Amputees.",
        "expansion": "Base"
    },
    37: {
        "text":"Men.",
        "expansion": "Base"
    },
    38: {
        "text":"Surprise sex!",
        "expansion": "Base"
    },
    39: {
        "text":"Kim Jong-il.",
        "expansion": "Base"
    },
    40: {
        "text":"Concealing a boner",
        "expansion": "Base"
    },
    41: {
        "text":"Agriculture.",
        "expansion": "Base"
    },
    42: {
        "text":"Glenn Beck being harried by a swarm of buzzards.",
        "expansion": "Base"
    },
    43: {
        "text":"Making a pouty face.",
        "expansion": "Base"
    },
    44: {
        "text":"A salty surprise.",
        "expansion": "Base"
    },
    45: {
        "text":"The Jews.",
        "expansion": "Base"
    },
    46: {
        "text":"Charisma.",
        "expansion": "Base"
    },
    47: {
        "text":"YOU MUST CONSTRUCT ADDITIONAL PYLONS.",
        "expansion": "Base"
    },
    48: {
        "text":"Panda sex.",
        "expansion": "Base"
    },
    49: {
        "text":"Taking off your shirt.",
        "expansion": "Base"
    },
    50: {
        "text":"A drive-by shooting.",
        "expansion": "Base"
    },
    51: {
        "text":"Ronald Reagan.",
        "expansion": "Base"
    },
    52: {
        "text":"Morgan Freeman's voice.",
        "expansion": "Base"
    },
    53: {
        "text":"Breaking out into song and dance.",
        "expansion": "Base"
    },
    54: {
        "text":"Jewish fraternities.",
        "expansion": "Base"
    },
    55: {
        "text":"Dead babies.",
        "expansion": "Base"
    },
    56: {
        "text":"Masturbation.",
        "expansion": "Base"
    },
    57: {
        "text":"Hormone injections.",
        "expansion": "Base"
    },
    58: {
        "text":"All-you-can-eat shrimp for $4.99.",
        "expansion": "Base"
    },
    59: {
        "text":"Incest.",
        "expansion": "Base"
    },
    60: {
        "text":"Scalping.",
        "expansion": "Base"
    },
    61: {
        "text":"Soup that is too hot.",
        "expansion": "Base"
    },
    62: {
        "text":"The &Uuml;bermensch.",
        "expansion": "Base"
    },
    63: {
        "text":"Nazis.",
        "expansion": "Base"
    },
    64: {
        "text":"Tom Cruise.",
        "expansion": "Base"
    },
    65: {
        "text":"Stifling a giggle at the mention of Hutus and Tutsis.",
        "expansion": "Base"
    },
    66: {
        "text":"Edible underpants.",
        "expansion": "Base"
    },
    67: {
        "text":"The Hustle.",
        "expansion": "Base"
    },
    68: {
        "text":"A Super Soaker&trade; full of cat pee.",
        "expansion": "Base"
    },
    69: {
        "text":"Figgy pudding.",
        "expansion": "Base"
    },
    70: {
        "text":"Object permanence.",
        "expansion": "Base"
    },
    71: {
        "text":"Consultants.",
        "expansion": "Base"
    },
    72: {
        "text":"Intelligent design.",
        "expansion": "Base"
    },
    73: {
        "text":"Nocturnal emissions.",
        "expansion": "Base"
    },
    74: {
        "text":"Uppercuts.",
        "expansion": "Base"
    },
    75: {
        "text":"Being marginalized.",
        "expansion": "Base"
    },
    76: {
        "text":"The profoundly handicapped.",
        "expansion": "Base"
    },
    77: {
        "text":"Obesity.",
        "expansion": "Base"
    },
    78: {
        "text":"Chutzpah.",
        "expansion": "Base"
    },
    79: {
        "text":"Unfathomable stupidity.",
        "expansion": "Base"
    },
    80: {
        "text":"Repression.",
        "expansion": "Base"
    },
    81: {
        "text":"Attitude.",
        "expansion": "Base"
    },
    82: {
        "text":"Passable transvestites.",
        "expansion": "Base"
    },
    83: {
        "text":"Party poopers.",
        "expansion": "Base"
    },
    84: {
        "text":"The American Dream",
        "expansion": "Base"
    },
    85: {
        "text":"Child beauty pageants.",
        "expansion": "Base"
    },
    86: {
        "text":"Puberty.",
        "expansion": "Base"
    },
    87: {
        "text":"Testicular torsion.",
        "expansion": "Base"
    },
    88: {
        "text":"The folly of man.",
        "expansion": "Base"
    },
    89: {
        "text":"Nickelback.",
        "expansion": "Base"
    },
    90: {
        "text":"Swooping.",
        "expansion": "Base"
    },
    91: {
        "text":"Goats eating cans.",
        "expansion": "Base"
    },
    92: {
        "text":"The KKK.",
        "expansion": "Base"
    },
    93: {
        "text":"Kamikaze pilots.",
        "expansion": "Base"
    },
    94: {
        "text":"Horrifying laser hair removal accidents.",
        "expansion": "Base"
    },
    95: {
        "text":"Adderall&trade;.",
        "expansion": "Base"
    },
    96: {
        "text":"A look-see.",
        "expansion": "Base"
    },
    97: {
        "text":"Doing the right thing.",
        "expansion": "Base"
    },
    98: {
        "text":"The taint; the grundle; the fleshy fun-bridge.",
        "expansion": "Base"
    },
    99: {
        "text":"Lactation.",
        "expansion": "Base"
    },
    100: {
        "text":"Pabst Blue Ribbon.",
        "expansion": "Base"
    },
    101: {
        "text":"Powerful thighs.",
        "expansion": "Base"
    },
    102: {
        "text":"Saxophone solos.",
        "expansion": "Base"
    },
    103: {
        "text":"The gays.",
        "expansion": "Base"
    },
    104: {
        "text":"A middle-aged man on roller skates.",
        "expansion": "Base"
    },
    105: {
        "text":"A foul mouth.",
        "expansion": "Base"
    },
    106: {
        "text":"The thing that electrocutes your abs.",
        "expansion": "Base"
    },
    107: {
        "text":"Heteronormativity.",
        "expansion": "Base"
    },
    108: {
        "text":"Cuddling.",
        "expansion": "Base"
    },
    109: {
        "text":"Coat hanger abortions.",
        "expansion": "Base"
    },
    110: {
        "text":"A big hoopla about nothing.",
        "expansion": "Base"
    },
    111: {
        "text":"Boogers.",
        "expansion": "Base"
    },
    112: {
        "text":"A hot mess.",
        "expansion": "Base"
    },
    113: {
        "text":"Raptor attacks.",
        "expansion": "Base"
    },
    114: {
        "text":"My collection of high-tech sex toys.",
        "expansion": "Base"
    },
    115: {
        "text":"Fear itself.",
        "expansion": "Base"
    },
    116: {
        "text":"Bees?",
        "expansion": "Base"
    },
    117: {
        "text":"Getting drunk on mouthwash.",
        "expansion": "Base"
    },
    118: {
        "text":"Sniffing glue.",
        "expansion": "Base"
    },
    119: {
        "text":"Oversized lollipops.",
        "expansion": "Base"
    },
    120: {
        "text":"An icepick lobotomy.",
        "expansion": "Base"
    },
    121: {
        "text":"Being rich.",
        "expansion": "Base"
    },
    122: {
        "text":"Friends with benefits.",
        "expansion": "Base"
    },
    123: {
        "text":"Teaching a robot to love.",
        "expansion": "Base"
    },
    124: {
        "text":"Women's suffrage.",
        "expansion": "Base"
    },
    125: {
        "text":"Me time.",
        "expansion": "Base"
    },
    126: {
        "text":"The heart of a child.",
        "expansion": "Base"
    },
    127: {
        "text":"Smallpox blankets.",
        "expansion": "Base"
    },
    128: {
        "text":"The clitoris.",
        "expansion": "Base"
    },
    129: {
        "text":"John Wilkes Booth.",
        "expansion": "Base"
    },
    130: {
        "text":"The glass ceiling.",
        "expansion": "Base"
    },
    131: {
        "text":"Sarah Palin.",
        "expansion": "Base"
    },
    132: {
        "text":"Sexy pillow fights.",
        "expansion": "Base"
    },
    133: {
        "text":"Yeast.",
        "expansion": "Base"
    },
    134: {
        "text":"Full frontal nudity.",
        "expansion": "Base"
    },
    135: {
        "text":"Parting the Red Sea.",
        "expansion": "Base"
    },
    136: {
        "text":"A Bop It&trade;.",
        "expansion": "Base"
    },
    137: {
        "text":"Michael Jackson.",
        "expansion": "Base"
    },
    138: {
        "text":"Team-building exercises.",
        "expansion": "Base"
    },
    139: {
        "text":"Harry Potter erotica.",
        "expansion": "Base"
    },
    140: {
        "text":"Authentic Mexican cuisine.",
        "expansion": "Base"
    },
    141: {
        "text":"Frolicking.",
        "expansion": "Base"
    },
    142: {
        "text":"Sexting.",
        "expansion": "Base"
    },
    143: {
        "text":"Grandma.",
        "expansion": "Base"
    },
    144: {
        "text":"Not giving a shit about the Third World.",
        "expansion": "Base"
    },
    145: {
        "text":"Licking things to claim them as your own.",
        "expansion": "Base"
    },
    146: {
        "text":"Genghis Khan.",
        "expansion": "Base"
    },
    147: {
        "text":"The hardworking Mexican.",
        "expansion": "Base"
    },
    148: {
        "text":"RoboCop.",
        "expansion": "Base"
    },
    149: {
        "text":"My relationship status.",
        "expansion": "Base"
    },
    150: {
        "text":"Scrubbing under the folds.",
        "expansion": "Base"
    },
    151: {
        "text":"Porn Stars.",
        "expansion": "Base"
    },
    152: {
        "text":"Horse meat.",
        "expansion": "Base"
    },
    153: {
        "text":"Sunshine and rainbows.",
        "expansion": "Base"
    },
    154: {
        "text":"Expecting a burp and vomiting on the floor.",
        "expansion": "Base"
    },
    155: {
        "text":"Barack Obama.",
        "expansion": "Base"
    },
    156: {
        "text":"Spontaneous human combustion.",
        "expansion": "Base"
    },
    157: {
        "text":"Natural selection.",
        "expansion": "Base"
    },
    158: {
        "text":"Mouth herpes.",
        "expansion": "Base"
    },
    159: {
        "text":"Flash flooding.",
        "expansion": "Base"
    },
    160: {
        "text":"Goblins.",
        "expansion": "Base"
    },
    161: {
        "text":"A monkey smoking a cigar.",
        "expansion": "Base"
    },
    162: {
        "text":"Spectacular abs.",
        "expansion": "Base"
    },
    163: {
        "text":"A good sniff.",
        "expansion": "Base"
    },
    164: {
        "text":"Wiping her butt.",
        "expansion": "Base"
    },
    165: {
        "text":"The Three-Fifths compromise.",
        "expansion": "Base"
    },
    166: {
        "text":"Pedophiles.",
        "expansion": "Base"
    },
    167: {
        "text":"Doin' it in the butt.",
        "expansion": "Base"
    },
    168: {
        "text":"Being fabulous.",
        "expansion": "Base"
    },
    169: {
        "text":"Mathletes.",
        "expansion": "Base"
    },
    170: {
        "text":"Wearing underwear inside-out to avoid doing laundry.",
        "expansion": "Base"
    },
    171: {
        "text":"Nipple blades.",
        "expansion": "Base"
    },
    172: {
        "text":"An M. Night Shyamalan plot twist.",
        "expansion": "Base"
    },
    173: {
        "text":"A bag of magic beans.",
        "expansion": "Base"
    },
    174: {
        "text":"Vigorous jazz hands.",
        "expansion": "Base"
    },
    175: {
        "text":"A defective condom.",
        "expansion": "Base"
    },
    176: {
        "text":"Skeletor.",
        "expansion": "Base"
    },
    177: {
        "text":"Vikings.",
        "expansion": "Base"
    },
    178: {
        "text":"Leaving an awkward voicemail.",
        "expansion": "Base"
    },
    179: {
        "text":"Teenage pregnancy.",
        "expansion": "Base"
    },
    180: {
        "text":"Dead parents.",
        "expansion": "Base"
    },
    181: {
        "text":"Hot cheese.",
        "expansion": "Base"
    },
    182: {
        "text":"My sex life.",
        "expansion": "Base"
    },
    183: {
        "text":"A mopey zoo lion.",
        "expansion": "Base"
    },
    184: {
        "text":"Assless chaps.",
        "expansion": "Base"
    },
    185: {
        "text":"Riding off into the sunset.",
        "expansion": "Base"
    },
    186: {
        "text":"Lance Armstrong's missing testicle.",
        "expansion": "Base"
    },
    187: {
        "text":"Sweet, sweet vengeance.",
        "expansion": "Base"
    },
    188: {
        "text":"Genital piercings.",
        "expansion": "Base"
    },
    189: {
        "text":"Keg stands.",
        "expansion": "Base"
    },
    190: {
        "text":"Darth Vader.",
        "expansion": "Base"
    },
    191: {
        "text":"Viagra&reg;.",
        "expansion": "Base"
    },
    192: {
        "text":"Necrophilia.",
        "expansion": "Base"
    },
    193: {
        "text":"A really cool hat.",
        "expansion": "Base"
    },
    194: {
        "text":"Toni Morrison's vagina.",
        "expansion": "Base"
    },
    195: {
        "text":"An Oedipus complex.",
        "expansion": "Base"
    },
    196: {
        "text":"The Tempur-Pedic&reg; Swedish Sleep System&trade;.",
        "expansion": "Base"
    },
    197: {
        "text":"Preteens.",
        "expansion": "Base"
    },
    198: {
        "text":"Dick fingers.",
        "expansion": "Base"
    },
    199: {
        "text":"A cooler full of organs.",
        "expansion": "Base"
    },
    200: {
        "text":"Shapeshifters.",
        "expansion": "Base"
    },
    201: {
        "text":"The Care Bear Stare.",
        "expansion": "Base"
    },
    202: {
        "text":"Erectile dysfunction.",
        "expansion": "Base"
    },
    203: {
        "text":"Keanu Reeves.",
        "expansion": "Base"
    },
    204: {
        "text":"The Virginia Tech Massacre.",
        "expansion": "Base"
    },
    205: {
        "text":"The Underground Railroad.",
        "expansion": "Base"
    },
    206: {
        "text":"The chronic.",
        "expansion": "Base"
    },
    207: {
        "text":"Queefing.",
        "expansion": "Base"
    },
    208: {
        "text":"Heartwarming orphans.",
        "expansion": "Base"
    },
    209: {
        "text":"A thermonuclear detonation.",
        "expansion": "Base"
    },
    210: {
        "text":"Cheating in the Special Olympics.",
        "expansion": "Base"
    },
    211: {
        "text":"Tangled Slinkys.",
        "expansion": "Base"
    },
    212: {
        "text":"A moment of silence.",
        "expansion": "Base"
    },
    213: {
        "text":"Civilian casualties.",
        "expansion": "Base"
    },
    214: {
        "text":"Catapults.",
        "expansion": "Base"
    },
    215: {
        "text":"Sharing needles.",
        "expansion": "Base"
    },
    216: {
        "text":"Ethnic cleansing.",
        "expansion": "Base"
    },
    217: {
        "text":"Emotions.",
        "expansion": "Base"
    },
    218: {
        "text":"Children on leashes.",
        "expansion": "Base"
    },
    219: {
        "text":"Balls.",
        "expansion": "Base"
    },
    220: {
        "text":"Homeless people.",
        "expansion": "Base"
    },
    221: {
        "text":"Eating all of the cookies before the AIDS bake-sale.",
        "expansion": "Base"
    },
    222: {
        "text":"Old-people smell.",
        "expansion": "Base"
    },
    223: {
        "text":"Farting and walking away.",
        "expansion": "Base"
    },
    224: {
        "text":"The inevitable heat death of the universe.",
        "expansion": "Base"
    },
    225: {
        "text":"The violation of our most basic human rights.",
        "expansion": "Base"
    },
    226: {
        "text":"Fingering.",
        "expansion": "Base"
    },
    227: {
        "text":"The placenta.",
        "expansion": "Base"
    },
    228: {
        "text":"The Rev. Dr. Martin Luther King, Jr.",
        "expansion": "Base"
    },
    229: {
        "text":"Leprosy.",
        "expansion": "Base"
    },
    230: {
        "text":"Sperm whales.",
        "expansion": "Base"
    },
    231: {
        "text":"Multiple stab wounds.",
        "expansion": "Base"
    },
    232: {
        "text":"Flightless birds.",
        "expansion": "Base"
    },
    233: {
        "text":"Grave robbing.",
        "expansion": "Base"
    },
    234: {
        "text":"Home video of Oprah sobbing into a Lean Cuisine&reg;.",
        "expansion": "Base"
    },
    235: {
        "text":"Oompa-Loompas.",
        "expansion": "Base"
    },
    236: {
        "text":"A murder most foul.",
        "expansion": "Base"
    },
    237: {
        "text":"Tentacle porn.",
        "expansion": "Base"
    },
    238: {
        "text":"Daddy issues.",
        "expansion": "Base"
    },
    239: {
        "text":"Bill Nye the Science Guy.",
        "expansion": "Base"
    },
    240: {
        "text":"Peeing a little bit.",
        "expansion": "Base"
    },
    241: {
        "text":"The miracle of childbirth.",
        "expansion": "Base"
    },
    242: {
        "text":"Tweeting.",
        "expansion": "Base"
    },
    243: {
        "text":"Another goddamn vampire movie.",
        "expansion": "Base"
    },
    244: {
        "text":"Britney Spears at 55.",
        "expansion": "Base"
    },
    245: {
        "text":"New Age music.",
        "expansion": "Base"
    },
    246: {
        "text":"The Make-A-Wish&reg; Foundation.",
        "expansion": "Base"
    },
    247: {
        "text":"Firing a rifle into the air while balls deep in a squealing hog.",
        "expansion": "Base"
    },
    248: {
        "text":"Active listening.",
        "expansion": "Base"
    },
    249: {
        "text":"Nicolas Cage.",
        "expansion": "Base"
    },
    250: {
        "text":"72 virgins.",
        "expansion": "Base"
    },
    251: {
        "text":"Stranger danger.",
        "expansion": "Base"
    },
    252: {
        "text":"Hope.",
        "expansion": "Base"
    },
    253: {
        "text":"A gassy antelope.",
        "expansion": "Base"
    },
    254: {
        "text":"BATMAN!!!",
        "expansion": "Base"
    },
    255: {
        "text":"Chivalry.",
        "expansion": "Base"
    },
    256: {
        "text":"Passing a kidney stone.",
        "expansion": "Base"
    },
    257: {
        "text":"Black people.",
        "expansion": "Base"
    },
    258: {
        "text":"Natalie Portman.",
        "expansion": "Base"
    },
    259: {
        "text":"A mime having a stroke.",
        "expansion": "Base"
    },
    260: {
        "text":"Classist undertones.",
        "expansion": "Base"
    },
    261: {
        "text":"Sean Penn.",
        "expansion": "Base"
    },
    262: {
        "text":"A mating display.",
        "expansion": "Base"
    },
    263: {
        "text":"The Holy Bible.",
        "expansion": "Base"
    },
    264: {
        "text":"Hot Pockets&reg;.",
        "expansion": "Base"
    },
    265: {
        "text":"A sad handjob.",
        "expansion": "Base"
    },
    266: {
        "text":"Pulling out.",
        "expansion": "Base"
    },
    267: {
        "text":"Serfdom.",
        "expansion": "Base"
    },
    268: {
        "text":"Pixelated bukkake.",
        "expansion": "Base"
    },
    269: {
        "text":"Dropping a chandelier on your enemies and riding the rope up.",
        "expansion": "Base"
    },
    270: {
        "text":"Jew-fros.",
        "expansion": "Base"
    },
    271: {
        "text":"Waiting 'til marriage.",
        "expansion": "Base"
    },
    272: {
        "text":"Euphoria&trade; by Calvin Klein.",
        "expansion": "Base"
    },
    273: {
        "text":"The World of Warcraft.",
        "expansion": "Base"
    },
    274: {
        "text":"Lunchables&trade;.",
        "expansion": "Base"
    },
    275: {
        "text":"The Kool-Aid Man.",
        "expansion": "Base"
    },
    276: {
        "text":"The Trail of Tears.",
        "expansion": "Base"
    },
    277: {
        "text":"Self-loathing.",
        "expansion": "Base"
    },
    278: {
        "text":"A falcon with a cap on its head.",
        "expansion": "Base"
    },
    279: {
        "text":"Historically black colleges.",
        "expansion": "Base"
    },
    280: {
        "text":"Not reciprocating oral sex.",
        "expansion": "Base"
    },
    281: {
        "text":"Global warming.",
        "expansion": "Base"
    },
    282: {
        "text":"Ghosts.",
        "expansion": "Base"
    },
    283: {
        "text":"World peace.",
        "expansion": "Base"
    },
    284: {
        "text":"A can of whoop-ass.",
        "expansion": "Base"
    },
    285: {
        "text":"The Dance of the Sugar Plum Fairy.",
        "expansion": "Base"
    },
    286: {
        "text":"A zesty breakfast burrito.",
        "expansion": "Base"
    },
    287: {
        "text":"Switching to Geico&reg;.",
        "expansion": "Base"
    },
    288: {
        "text":"Aaron Burr.",
        "expansion": "Base"
    },
    289: {
        "text":"Picking up girls at the abortion clinic.",
        "expansion": "Base"
    },
    290: {
        "text":"Land mines.",
        "expansion": "Base"
    },
    291: {
        "text":"Former President George W. Bush.",
        "expansion": "Base"
    },
    292: {
        "text":"Geese.",
        "expansion": "Base"
    },
    293: {
        "text":"Mutually-assured destruction.",
        "expansion": "Base"
    },
    294: {
        "text":"College.",
        "expansion": "Base"
    },
    295: {
        "text":"Date rape.",
        "expansion": "Base"
    },
    296: {
        "text":"Bling.",
        "expansion": "Base"
    },
    297: {
        "text":"A gentle caress of the inner thigh.",
        "expansion": "Base"
    },
    298: {
        "text":"A time travel paradox.",
        "expansion": "Base"
    },
    299: {
        "text":"Seppuku.",
        "expansion": "Base"
    },
    300: {
        "text":"Poor life choices.",
        "expansion": "Base"
    },
    301: {
        "text":"Waking up half-naked in a Denny's parking lot.",
        "expansion": "Base"
    },
    302: {
        "text":"Italians.",
        "expansion": "Base"
    },
    303: {
        "text":"GoGurt&reg;.",
        "expansion": "Base"
    },
    304: {
        "text":"Finger painting.",
        "expansion": "Base"
    },
    305: {
        "text":"Robert Downey, Jr.",
        "expansion": "Base"
    },
    306: {
        "text":"My soul.",
        "expansion": "Base"
    },
    307: {
        "text":"Smegma.",
        "expansion": "Base"
    },
    308: {
        "text":"Embryonic stem cells.",
        "expansion": "Base"
    },
    309: {
        "text":"The South.",
        "expansion": "Base"
    },
    310: {
        "text":"Christopher Walken.",
        "expansion": "Base"
    },
    311: {
        "text":"Gloryholes.",
        "expansion": "Base"
    },
    312: {
        "text":"Pretending to care.",
        "expansion": "Base"
    },
    313: {
        "text":"Public ridicule.",
        "expansion": "Base"
    },
    314: {
        "text":"A tiny horse.",
        "expansion": "Base"
    },
    315: {
        "text":"Arnold Schwarzenegger.",
        "expansion": "Base"
    },
    316: {
        "text":"A stray pube.",
        "expansion": "Base"
    },
    317: {
        "text":"Jerking off into a pool of children's tears.",
        "expansion": "Base"
    },
    318: {
        "text":"Child abuse.",
        "expansion": "Base"
    },
    319: {
        "text":"Glenn Beck convulsively vomiting as a brood of crab spiders hatches in his brain and erupts from his tear ducts.",
        "expansion": "Base"
    },
    320: {
        "text":"Menstruation.",
        "expansion": "Base"
    },
    321: {
        "text":"A sassy black woman.",
        "expansion": "Base"
    },
    322: {
        "text":"Re-gifting.",
        "expansion": "Base"
    },
    323: {
        "text":"Penis envy.",
        "expansion": "Base"
    },
    324: {
        "text":"A sausage festival.",
        "expansion": "Base"
    },
    325: {
        "text":"Getting really high.",
        "expansion": "Base"
    },
    326: {
        "text":"Drinking alone.",
        "expansion": "Base"
    },
    327: {
        "text":"Too much hair gel.",
        "expansion": "Base"
    },
    328: {
        "text":"Hulk Hogan.",
        "expansion": "Base"
    },
    329: {
        "text":"Overcompensation.",
        "expansion": "Base"
    },
    330: {
        "text":"Foreskin.",
        "expansion": "Base"
    },
    331: {
        "text":"Free samples.",
        "expansion": "Base"
    },
    332: {
        "text":"Shaquille O'Neal's acting career.",
        "expansion": "Base"
    },
    333: {
        "text":"Five-Dollar Footlongs&trade;.",
        "expansion": "Base"
    },
    334: {
        "text":"Whipping it out.",
        "expansion": "Base"
    },
    335: {
        "text":"A snapping turtle biting the tip of your penis.",
        "expansion": "Base"
    },
    336: {
        "text":"Muhammad (Praise Be Unto Him).",
        "expansion": "Base"
    },
    337: {
        "text":"Half-assed foreplay.",
        "expansion": "Base"
    },
    338: {
        "text":"Dental dams.",
        "expansion": "Base"
    },
    339: {
        "text":"Being a dick to children.",
        "expansion": "Base"
    },
    340: {
        "text":"Famine.",
        "expansion": "Base"
    },
    341: {
        "text":"Chainsaws for hands.",
        "expansion": "Base"
    },
    342: {
        "text":"A gypsy curse.",
        "expansion": "Base"
    },
    343: {
        "text":"AXE Body Spray.",
        "expansion": "Base"
    },
    344: {
        "text":"The Force.",
        "expansion": "Base"
    },
    345: {
        "text":"Explosions.",
        "expansion": "Base"
    },
    346: {
        "text":"Cybernetic enhancements.",
        "expansion": "Base"
    },
    347: {
        "text":"Customer service representatives.",
        "expansion": "Base"
    },
    348: {
        "text":"White privilege.",
        "expansion": "Base"
    },
    349: {
        "text":"Gandhi.",
        "expansion": "Base"
    },
    350: {
        "text":"Road head.",
        "expansion": "Base"
    },
    351: {
        "text":"God.",
        "expansion": "Base"
    },
    352: {
        "text":"Poorly-timed Holocaust jokes.",
        "expansion": "Base"
    },
    353: {
        "text":"8 oz. of sweet Mexican black-tar heroin.",
        "expansion": "Base"
    },
    354: {
        "text":"Judge Judy.",
        "expansion": "Base"
    },
    355: {
        "text":"The Little Engine That Could.",
        "expansion": "Base"
    },
    356: {
        "text":"Altar boys.",
        "expansion": "Base"
    },
    357: {
        "text":"Mr. Clean, right behind you.",
        "expansion": "Base"
    },
    358: {
        "text":"Vehicular manslaughter.",
        "expansion": "Base"
    },
    359: {
        "text":"Dwarf tossing.",
        "expansion": "Base"
    },
    360: {
        "text":"Friction.",
        "expansion": "Base"
    },
    361: {
        "text":"Lady Gaga.",
        "expansion": "Base"
    },
    362: {
        "text":"Scientology.",
        "expansion": "Base"
    },
    363: {
        "text":"Justin Bieber.",
        "expansion": "Base"
    },
    364: {
        "text":"A death ray.",
        "expansion": "Base"
    },
    365: {
        "text":"Vigilante justice.",
        "expansion": "Base"
    },
    366: {
        "text":"The Pope.",
        "expansion": "Base"
    },
    367: {
        "text":"A sea of troubles.",
        "expansion": "Base"
    },
    368: {
        "text":"Alcoholism.",
        "expansion": "Base"
    },
    369: {
        "text":"Poor people.",
        "expansion": "Base"
    },
    370: {
        "text":"A fetus.",
        "expansion": "Base"
    },
    371: {
        "text":"Women in yogurt commercials.",
        "expansion": "Base"
    },
    372: {
        "text":"Exactly what you'd expect.",
        "expansion": "Base"
    },
    373: {
        "text":"Flesh-eating bacteria.",
        "expansion": "Base"
    },
    374: {
        "text":"My genitals.",
        "expansion": "Base"
    },
    375: {
        "text":"A balanced breakfast.",
        "expansion": "Base"
    },
    376: {
        "text":"Dick Cheney.",
        "expansion": "Base"
    },
    377: {
        "text":"Lockjaw.",
        "expansion": "Base"
    },
    378: {
        "text":"Natural male enhancement.",
        "expansion": "Base"
    },
    379: {
        "text":"Take-backsies.",
        "expansion": "Base"
    },
    380: {
        "text":"Winking at old people.",
        "expansion": "Base"
    },
    381: {
        "text":"Opposable thumbs.",
        "expansion": "Base"
    },
    382: {
        "text":"Flying sex snakes.",
        "expansion": "Base"
    },
    383: {
        "text":"Passive-aggressive Post-it notes.",
        "expansion": "Base"
    },
    384: {
        "text":"Inappropriate yodeling.",
        "expansion": "Base"
    },
    385: {
        "text":"Golden showers.",
        "expansion": "Base"
    },
    386: {
        "text":"Racism.",
        "expansion": "Base"
    },
    387: {
        "text":"Copping a feel.",
        "expansion": "Base"
    },
    388: {
        "text":"Auschwitz.",
        "expansion": "Base"
    },
    389: {
        "text":"Elderly Japanese men.",
        "expansion": "Base"
    },
    390: {
        "text":"Raping and pillaging.",
        "expansion": "Base"
    },
    391: {
        "text":"Kids with ass cancer.",
        "expansion": "Base"
    },
    392: {
        "text":"Pictures of boobs.",
        "expansion": "Base"
    },
    393: {
        "text":"The homosexual agenda.",
        "expansion": "Base"
    },
    394: {
        "text":"A homoerotic volleyball montage.",
        "expansion": "Base"
    },
    395: {
        "text":"Sexual tension.",
        "expansion": "Base"
    },
    396: {
        "text":"Hurricane Katrina.",
        "expansion": "Base"
    },
    397: {
        "text":"Fiery poops.",
        "expansion": "Base"
    },
    398: {
        "text":"Science.",
        "expansion": "Base"
    },
    399: {
        "text":"Dry heaving.",
        "expansion": "Base"
    },
    400: {
        "text":"Cards Against Humanity.",
        "expansion": "Base"
    },
    401: {
        "text":"Fancy Feast&reg;.",
        "expansion": "Base"
    },
    402: {
        "text":"A bleached asshole.",
        "expansion": "Base"
    },
    403: {
        "text":"Lumberjack fantasies.",
        "expansion": "Base"
    },
    404: {
        "text":"American Gladiators.",
        "expansion": "Base"
    },
    405: {
        "text":"Autocannibalism.",
        "expansion": "Base"
    },
    406: {
        "text":"Sean Connery.",
        "expansion": "Base"
    },
    407: {
        "text":"William Shatner.",
        "expansion": "Base"
    },
    408: {
        "text":"Domino's&trade; Oreo&trade; Dessert Pizza.",
        "expansion": "Base"
    },
    409: {
        "text":"An asymmetric boob job.",
        "expansion": "Base"
    },
    410: {
        "text":"Centaurs.",
        "expansion": "Base"
    },
    411: {
        "text":"A micropenis.",
        "expansion": "Base"
    },
    412: {
        "text":"Asians who aren't good at math.",
        "expansion": "Base"
    },
    413: {
        "text":"The milk man.",
        "expansion": "Base"
    },
    414: {
        "text":"Waterboarding.",
        "expansion": "Base"
    },
    415: {
        "text":"Wifely duties.",
        "expansion": "Base"
    },
    416: {
        "text":"Loose lips.",
        "expansion": "Base"
    },
    417: {
        "text":"The Blood of Christ.",
        "expansion": "Base"
    },
    418: {
        "text":"Actually taking candy from a baby.",
        "expansion": "Base"
    },
    419: {
        "text":"The token minority.",
        "expansion": "Base"
    },
    420: {
        "text":"Jibber-jabber.",
        "expansion": "Base"
    },
    421: {
        "text":"A brain tumor.",
        "expansion": "Base"
    },
    422: {
        "text":"Bingeing and purging.",
        "expansion": "Base"
    },
    423: {
        "text":"A clandestine butt scratch.",
        "expansion": "Base"
    },
    424: {
        "text":"The Chinese gymnastics team.",
        "expansion": "Base"
    },
    425: {
        "text":"Prancing.",
        "expansion": "Base"
    },
    426: {
        "text":"The Hamburglar.",
        "expansion": "Base"
    },
    427: {
        "text":"Police brutality.",
        "expansion": "Base"
    },
    428: {
        "text":"Man meat.",
        "expansion": "Base"
    },
    429: {
        "text":"Forgetting the Alamo.",
        "expansion": "Base"
    },
    430: {
        "text":"Eating the last known bison.",
        "expansion": "Base"
    },
    431: {
        "text":"Crystal meth.",
        "expansion": "Base"
    },
    432: {
        "text":"Booby-trapping the house to foil burglars.",
        "expansion": "Base"
    },
    433: {
        "text":"My inner demons.",
        "expansion": "Base"
    },
    434: {
        "text":"Third base.",
        "expansion": "Base"
    },
    435: {
        "text":"Soiling oneself.",
        "expansion": "Base"
    },
    436: {
        "text":"Laying an egg.",
        "expansion": "Base"
    },
    437: {
        "text":"Giving 110%.",
        "expansion": "Base"
    },
    438: {
        "text":"Hot people.",
        "expansion": "Base"
    },
    439: {
        "text":"Friendly fire.",
        "expansion": "Base"
    },
    440: {
        "text":"Count Chocula.",
        "expansion": "Base"
    },
    441: {
        "text":"Pac-Man uncontrollably guzzling cum.",
        "expansion": "Base"
    },
    442: {
        "text":"Estrogen.",
        "expansion": "Base"
    },
    443: {
        "text":"My vagina.",
        "expansion": "Base"
    },
    444: {
        "text":"Kanye West.",
        "expansion": "Base"
    },
    445: {
        "text":"A robust mongoloid.",
        "expansion": "Base"
    },
    446: {
        "text":"The Donald Trump Seal of Approval&trade;.",
        "expansion": "Base"
    },
    447: {
        "text":"The true meaning of Christmas.",
        "expansion": "Base"
    },
    448: {
        "text":"Her Royal Highness, Queen Elizabeth II.",
        "expansion": "Base"
    },
    449: {
        "text":"An honest cop with nothing left to lose.",
        "expansion": "Base"
    },
    450: {
        "text":"Feeding Rosie O'Donnell.",
        "expansion": "Base"
    },
    451: {
        "text":"The Amish.",
        "expansion": "Base"
    },
    452: {
        "text":"The terrorists.",
        "expansion": "Base"
    },
    453: {
        "text":"When you fart and a little bit comes out.",
        "expansion": "Base"
    },
    454: {
        "text":"Pooping back and forth. Forever.",
        "expansion": "Base"
    },
    455: {
        "text":"Friends who eat all the snacks.",
        "expansion": "Base"
    },
    456: {
        "text":"Cockfights.",
        "expansion": "Base"
    },
    457: {
        "text":"Bitches.",
        "expansion": "Base"
    },
    458: {
        "text":"Seduction.",
        "expansion": "Base"
    },
	549: {
        "text":"A big black dick.",
        "expansion": "CAHe1"
    },
    550: {
        "text":"A beached whale.",
        "expansion": "CAHe1"
    },
    551: {
        "text":"A bloody pacifier.",
        "expansion": "CAHe1"
    },
    552: {
        "text":"A crappy little hand.",
        "expansion": "CAHe1"
    },
    553: {
        "text":"A low standard of living.",
        "expansion": "CAHe1"
    },
    554: {
        "text":"A nuanced critique.",
        "expansion": "CAHe1"
    },
    555: {
        "text":"Panty raids.",
        "expansion": "CAHe1"
    },
    556: {
        "text":"A passionate Latino lover.",
        "expansion": "CAHe1"
    },
    557: {
        "text":"A rival dojo.",
        "expansion": "CAHe1"
    },
    558: {
        "text":"A web of lies.",
        "expansion": "CAHe1"
    },
    559: {
        "text":"A woman scorned.",
        "expansion": "CAHe1"
    },
    560: {
        "text":"Clams.",
        "expansion": "CAHe1"
    },
    561: {
        "text":"Apologizing.",
        "expansion": "CAHe1"
    },
    562: {
        "text":"A plunger to the face.",
        "expansion": "CAHe1"
    },
    563: {
        "text":"Neil Patrick Harris.",
        "expansion": "CAHe1"
    },
    564: {
        "text":"Beating your wives.",
        "expansion": "CAHe1"
    },
    565: {
        "text":"Being a dinosaur.",
        "expansion": "CAHe1"
    },
    566: {
        "text":"Shaft.",
        "expansion": "CAHe1"
    },
    567: {
        "text":"Bosnian chicken farmers.",
        "expansion": "CAHe1"
    },
    568: {
        "text":"Nubile slave boys.",
        "expansion": "CAHe1"
    },
    569: {
        "text":"Carnies.",
        "expansion": "CAHe1"
    },
    570: {
        "text":"Coughing into a vagina.",
        "expansion": "CAHe1"
    },
    571: {
        "text":"Suicidal thoughts.",
        "expansion": "CAHe1"
    },
    572: {
        "text":"The ooze.",
        "expansion": "CAHe1"
    },
    573: {
        "text":"Deflowering the princess.",
        "expansion": "CAHe1"
    },
    574: {
        "text":"Dorito breath.",
        "expansion": "CAHe1"
    },
    575: {
        "text":"Eating an albino.",
        "expansion": "CAHe1"
    },
    576: {
        "text":"Enormous Scandinavian women.",
        "expansion": "CAHe1"
    },
    577: {
        "text":"Fabricating statistics.",
        "expansion": "CAHe1"
    },
    578: {
        "text":"Finding a skeleton.",
        "expansion": "CAHe1"
    },
    579: {
        "text":"Gandalf.",
        "expansion": "CAHe1"
    },
    580: {
        "text":"Genetically engineered super-soldiers.",
        "expansion": "CAHe1"
    },
    581: {
        "text":"George Clooney's musk.",
        "expansion": "CAHe1"
    },
    582: {
        "text":"Getting abducted by Peter Pan.",
        "expansion": "CAHe1"
    },
    583: {
        "text":"Getting in her pants, politely.",
        "expansion": "CAHe1"
    },
    584: {
        "text":"Gladiatorial combat.",
        "expansion": "CAHe1"
    },
    585: {
        "text":"Clenched butt cheeks.",
        "expansion": "CAHe1"
    },
    586: {
        "text":"Hipsters.",
        "expansion": "CAHe1"
    },
    587: {
        "text":"Historical revisionism.",
        "expansion": "CAHe1"
    },
    588: {
        "text":"Insatiable bloodlust.",
        "expansion": "CAHe1"
    },
    589: {
        "text":"Jafar.",
        "expansion": "CAHe1"
    },
    590: {
        "text":"Jean-Claude Van Damme.",
        "expansion": "CAHe1"
    },
    591: {
        "text":"Just the tip.",
        "expansion": "CAHe1"
    },
    592: {
        "text":"Mad hacky-sack skills.",
        "expansion": "CAHe1"
    },
    593: {
        "text":"Leveling up.",
        "expansion": "CAHe1"
    },
    594: {
        "text":"Literally eating shit.",
        "expansion": "CAHe1"
    },
    595: {
        "text":"Making the penises kiss.",
        "expansion": "CAHe1"
    },
    596: {
        "text":"24-hour media coverage.",
        "expansion": "CAHe1"
    },
    597: {
        "text":"Medieval Times&copy; Dinner & Tournament.",
        "expansion": "CAHe1"
    },
    598: {
        "text":"Moral ambiguity.",
        "expansion": "CAHe1"
    },
    599: {
        "text":"My machete.",
        "expansion": "CAHe1"
    },
    600: {
        "text":"One thousand Slim Jims.",
        "expansion": "CAHe1"
    },
    601: {
        "text":"Ominous background music.",
        "expansion": "CAHe1"
    },
    602: {
        "text":"Overpowering your father.",
        "expansion": "CAHe1"
    },
    603: {
        "text":"Stockholm Syndrome.",
        "expansion": "CAHe1"
    },
    604: {
        "text":"Quiche.",
        "expansion": "CAHe1"
    },
    605: {
        "text":"Quivering jowls.",
        "expansion": "CAHe1"
    },
    606: {
        "text":"Revenge fucking.",
        "expansion": "CAHe1"
    },
    607: {
        "text":"Ripping into a man's chest and pulling out his still-beating heart.",
        "expansion": "CAHe1"
    },
    608: {
        "text":"Ryan Gosling riding in on a white horse.",
        "expansion": "CAHe1"
    },
    609: {
        "text":"Santa Claus.",
        "expansion": "CAHe1"
    },
    610: {
        "text":"Scrotum tickling.",
        "expansion": "CAHe1"
    },
    611: {
        "text":"Sexual humiliation.",
        "expansion": "CAHe1"
    },
    612: {
        "text":"Sexy Siamese twins.",
        "expansion": "CAHe1"
    },
    613: {
        "text":"Saliva.",
        "expansion": "CAHe1"
    },
    614: {
        "text":"Space muffins.",
        "expansion": "CAHe1"
    },
    615: {
        "text":"Statistically validated stereotypes.",
        "expansion": "CAHe1"
    },
    616: {
        "text":"Sudden Poop Explosion Disease.",
        "expansion": "CAHe1"
    },
    617: {
        "text":"The boners of the elderly.",
        "expansion": "CAHe1"
    },
    618: {
        "text":"The economy.",
        "expansion": "CAHe1"
    },
    619: {
        "text":"Syphilitic insanity.",
        "expansion": "CAHe1"
    },
    620: {
        "text":"The Gulags.",
        "expansion": "CAHe1"
    },
    621: {
        "text":"The harsh light of day.",
        "expansion": "CAHe1"
    },
    622: {
        "text":"The hiccups.",
        "expansion": "CAHe1"
    },
    623: {
        "text":"The shambling corpse of Larry King.",
        "expansion": "CAHe1"
    },
    624: {
        "text":"The four arms of Vishnu.",
        "expansion": "CAHe1"
    },
    625: {
        "text":"Being a busy adult with many important things to do.",
        "expansion": "CAHe1"
    },
    626: {
        "text":"Tripping balls.",
        "expansion": "CAHe1"
    },
    627: {
        "text":"Words, words, words.",
        "expansion": "CAHe1"
    },
    628: {
        "text":"Zeus's sexual appetites.",
        "expansion": "CAHe1"
    },
	649: {
        "text":"A bigger, blacker dick.",
        "expansion": "CAHe2"
    },
    650: {
        "text":"The mere concept of Applebee's&reg;.",
        "expansion": "CAHe2"
    },
    651: {
        "text":"A sad fat dragon with no friends.",
        "expansion": "CAHe2"
    },
    652: {
        "text":"Catastrophic urethral trauma.",
        "expansion": "CAHe2"
    },
    653: {
        "text":"Hillary Clinton's death stare.",
        "expansion": "CAHe2"
    },
    654: {
        "text":"Existing.",
        "expansion": "CAHe2"
    },
    655: {
        "text":"A pinata full of scorpions.",
        "expansion": "CAHe2"
    },
    656: {
        "text":"Mooing.",
        "expansion": "CAHe2"
    },
    657: {
        "text":"Swiftly achieving orgasm.",
        "expansion": "CAHe2"
    },
    658: {
        "text":"Daddy's belt.",
        "expansion": "CAHe2"
    },
    659: {
        "text":"Double penetration.",
        "expansion": "CAHe2"
    },
    660: {
        "text":"Weapons-grade plutonium.",
        "expansion": "CAHe2"
    },
    661: {
        "text":"Some really fucked-up shit.",
        "expansion": "CAHe2"
    },
    662: {
        "text":"Subduing a grizzly bear and making her your wife.",
        "expansion": "CAHe2"
    },
    663: {
        "text":"Rising from the grave.",
        "expansion": "CAHe2"
    },
    664: {
        "text":"The mixing of the races.",
        "expansion": "CAHe2"
    },
    665: {
        "text":"Taking a man's eyes and balls out and putting his eyes where his balls go and then his balls in the eye holes.",
        "expansion": "CAHe2"
    },
    666: {
        "text":"Scrotal frostbite.",
        "expansion": "CAHe2"
    },
    667: {
        "text":"All of this blood.",
        "expansion": "CAHe2"
    },
    668: {
        "text":"Loki, the trickster god.",
        "expansion": "CAHe2"
    },
    669: {
        "text":"Whining like a little bitch.",
        "expansion": "CAHe2"
    },
    670: {
        "text":"Pumping out a baby every nine months.",
        "expansion": "CAHe2"
    },
    671: {
        "text":"Tongue.",
        "expansion": "CAHe2"
    },
    672: {
        "text":"Finding Waldo.",
        "expansion": "CAHe2"
    },
    673: {
        "text":"Upgrading homeless people to mobile hotspots.",
        "expansion": "CAHe2"
    },
    674: {
        "text":"Wearing an octopus for a hat.",
        "expansion": "CAHe2"
    },
    675: {
        "text":"An unhinged ferris wheel rolling toward the sea.",
        "expansion": "CAHe2"
    },
    676: {
        "text":"Living in a trashcan.",
        "expansion": "CAHe2"
    },
    677: {
        "text":"The corporations.",
        "expansion": "CAHe2"
    },
    678: {
        "text":"A magic hippie love cloud.",
        "expansion": "CAHe2"
    },
    679: {
        "text":"Fuck Mountain.",
        "expansion": "CAHe2"
    },
    680: {
        "text":"Survivor's guilt.",
        "expansion": "CAHe2"
    },
    681: {
        "text":"Me.",
        "expansion": "CAHe2"
    },
    682: {
        "text":"Getting hilariously gang-banged by the Blue Man Group.",
        "expansion": "CAHe2"
    },
    683: {
        "text":"Jeff Goldblum.",
        "expansion": "CAHe2"
    },
    684: {
        "text":"Making a friend.",
        "expansion": "CAHe2"
    },
    685: {
        "text":"A soulful rendition of &#34;Ol' Man River.&#34;",
        "expansion": "CAHe2"
    },
    686: {
        "text":"Intimacy problems.",
        "expansion": "CAHe2"
    },
    687: {
        "text":"A sweaty, panting leather daddy.",
        "expansion": "CAHe2"
    },
    688: {
        "text":"Spring break!",
        "expansion": "CAHe2"
    },
    689: {
        "text":"Being awesome at sex.",
        "expansion": "CAHe2"
    },
    690: {
        "text":"Dining with cardboard cutouts of the cast of &#34;Friends.&#34;",
        "expansion": "CAHe2"
    },
    691: {
        "text":"Another shot of morphine.",
        "expansion": "CAHe2"
    },
    692: {
        "text":"Beefin' over turf.",
        "expansion": "CAHe2"
    },
    693: {
        "text":"A squadron of moles wearing aviator goggles.",
        "expansion": "CAHe2"
    },
    694: {
        "text":"Bullshit.",
        "expansion": "CAHe2"
    },
    695: {
        "text":"The Google.",
        "expansion": "CAHe2"
    },
    696: {
        "text":"Pretty Pretty Princess Dress-Up Board Game&#174;.",
        "expansion": "CAHe2"
    },
    697: {
        "text":"The new Radiohead album.",
        "expansion": "CAHe2"
    },
    698: {
        "text":"An army of skeletons.",
        "expansion": "CAHe2"
    },
    699: {
        "text":"A man in yoga pants with a ponytail and feather earrings.",
        "expansion": "CAHe2"
    },
    700: {
        "text":"Mild autism.",
        "expansion": "CAHe2"
    },
    701: {
        "text":"Nunchuck moves.",
        "expansion": "CAHe2"
    },
    702: {
        "text":"Whipping a disobedient slave.",
        "expansion": "CAHe2"
    },
    703: {
        "text":"An ether-soaked rag.",
        "expansion": "CAHe2"
    },
    704: {
        "text":"A sweet spaceship.",
        "expansion": "CAHe2"
    },
    705: {
        "text":"A 55-gallon drum of lube.",
        "expansion": "CAHe2"
    },
    706: {
        "text":"Special musical guest, Cher.",
        "expansion": "CAHe2"
    },
    707: {
        "text":"The human body.",
        "expansion": "CAHe2"
    },
    708: {
        "text":"Boris the Soviet Love Hammer.",
        "expansion": "CAHe2"
    },
    709: {
        "text":"The grey nutrient broth that sustains Mitt Romney.",
        "expansion": "CAHe2"
    },
    710: {
        "text":"Tiny nipples.",
        "expansion": "CAHe2"
    },
    711: {
        "text":"Power.",
        "expansion": "CAHe2"
    },
    712: {
        "text":"Oncoming traffic.",
        "expansion": "CAHe2"
    },
    713: {
        "text":"A dollop of sour cream.",
        "expansion": "CAHe2"
    },
    714: {
        "text":"A slightly shittier parallel universe.",
        "expansion": "CAHe2"
    },
    715: {
        "text":"My first kill.",
        "expansion": "CAHe2"
    },
    716: {
        "text":"Graphic violence, adult language, and some sexual content.",
        "expansion": "CAHe2"
    },
    717: {
        "text":"Fetal alcohol syndrome.",
        "expansion": "CAHe2"
    },
    718: {
        "text":"The day the birds attacked.",
        "expansion": "CAHe2"
    },
    719: {
        "text":"One Ring to rule them all.",
        "expansion": "CAHe2"
    },
    720: {
        "text":"Grandpa's ashes.",
        "expansion": "CAHe2"
    },
    721: {
        "text":"Basic human decency.",
        "expansion": "CAHe2"
    },
    722: {
        "text":"A Burmese tiger pit.",
        "expansion": "CAHe2"
    },
    723: {
        "text":"Death by Steven Seagal",
        "expansion": "CAHe2"
    },
	973: {
        "text":"Santa's heavy sack.",
        "expansion":"CAHxmas"
    },
    974: {
        "text":"Clearing a bloody path through Walmart with a scimitar.",
        "expansion":"CAHxmas"
    },
    975: {
        "text":"Another shitty year.",
        "expansion":"CAHxmas"
    },
    976: {
        "text":"Whatever Kwanzaa is supposed to be about.",
        "expansion":"CAHxmas"
    },
    977: {
        "text":"A Christmas stocking full of coleslaw.",
        "expansion":"CAHxmas"
    },
    978: {
        "text":"Elf cum.",
        "expansion":"CAHxmas"
    },
    979: {
        "text":"The tiny, calloused hands of the Chinese children that made this card.",
        "expansion":"CAHxmas"
    },
    980: {
        "text":"Taking down Santa with a surface-to-air missile.",
        "expansion":"CAHxmas"
    },
    981: {
        "text":"Socks.",
        "expansion":"CAHxmas"
    },
    982: {
        "text":"Pretending to be happy.",
        "expansion":"CAHxmas"
    },
    983: {
        "text":"Krampus, the Austrian Christmas monster.",
        "expansion":"CAHxmas"
    },
    984: {
        "text":"The Star Wars Holiday Special.",
        "expansion":"CAHxmas"
    },
    985: {
        "text":"My hot cousin.",
        "expansion":"CAHxmas"
    },
    986: {
        "text":"Mall Santa.",
        "expansion":"CAHxmas"
    },
    987: {
        "text":"Several intertwining love stories featuring Hugh Grant.",
        "expansion":"CAHxmas"
    },
    988: {
        "text":"A Hungry-Man&trade; Frozen Christmas Dinner for one.",
        "expansion":"CAHxmas"
    },
    989: {
        "text":"Gift-wrapping a live hamster.",
        "expansion":"CAHxmas"
    },
    990: {
        "text":"Space Jam on VHS.",
        "expansion":"CAHxmas"
    },
    991: {
        "text":"Immaculate conception.",
        "expansion":"CAHxmas"
    },
    992: {
        "text":"Fucking up 'Silent Night' in front of 300 parents.",
        "expansion":"CAHxmas"
    },
    993: {
        "text":"A visually arresting turtleneck.",
        "expansion":"CAHxmas"
    },
    994: {
        "text":"A toxic family environment.",
        "expansion":"CAHxmas"
    },
    995: {
        "text":"Eating an entire snowman.",
        "expansion":"CAHxmas"
    },
	1042: {
        "text":"A breath of fresh air.",
        "expansion":"NSFH"
    },
    1043: {
        "text":"A great big floppy donkey dick.",
        "expansion":"NSFH"
    },
    1044: {
        "text":"A pyramid scheme.",
        "expansion":"NSFH"
    },
    1045: {
        "text":"A school bus surrounded by cop cars.",
        "expansion":"NSFH"
    },
    1046: {
        "text":"A short walk in the desert with shovels.",
        "expansion":"NSFH"
    },
    1047: {
        "text":"All the boys staring at your chest.",
        "expansion":"NSFH"
    },
    1048: {
        "text":"An amorous stallion.",
        "expansion":"NSFH"
    },
    1049: {
        "text":"Being so wet it just slides out of you.",
        "expansion":"NSFH"
    },
    1050: {
        "text":"Being tarred and feathered.",
        "expansion":"NSFH"
    },
    1051: {
        "text":"Catching 'em all.",
        "expansion":"NSFH"
    },
    1052: {
        "text":"Chained to the bed and whipped to orgasmic bliss by a leather-clad woman.",
        "expansion":"NSFH"
    },
    1053: {
        "text":"Child-bearing hips.",
        "expansion":"NSFH"
    },
    1054: {
        "text":"Defenestration.",
        "expansion":"NSFH"
    },
    1055: {
        "text":"Dungeons and/or dragons.",
        "expansion":"NSFH"
    },
    1056: {
        "text":"Ecco the Dolphin.",
        "expansion":"NSFH"
    },
    1057: {
        "text":"George Washington riding on a giant eagle.",
        "expansion":"NSFH"
    },
    1058: {
        "text":"Getting abducted and probed by aliens.",
        "expansion":"NSFH"
    },
    1059: {
        "text":"Going viral on YouTube.",
        "expansion":"NSFH"
    },
    1060: {
        "text":"Gushing.",
        "expansion":"NSFH"
    },
    1061: {
        "text":"Making the baby Jesus cry.",
        "expansion":"NSFH"
    },
    1062: {
        "text":"More than you can chew.",
        "expansion":"NSFH"
    },
    1063: {
        "text":"Napalm.",
        "expansion":"NSFH"
    },
    1064: {
        "text":"Pancake bitches.",
        "expansion":"NSFH"
    },
    1065: {
        "text":"Playing God with the power of lightning.",
        "expansion":"NSFH"
    },
    1066: {
        "text":"Playing tonsil-hockey.",
        "expansion":"NSFH"
    },
    1067: {
        "text":"Racing cheese wheels downhill.",
        "expansion":"NSFH"
    },
    1068: {
        "text":"Riding the bomb.",
        "expansion":"NSFH"
    },
    1069: {
        "text":"Settling arguments with dance-offs.",
        "expansion":"NSFH"
    },
    1070: {
        "text":"Sheer spite.",
        "expansion":"NSFH"
    },
    1071: {
        "text":"Sinister laughter.",
        "expansion":"NSFH"
    },
    1072: {
        "text":"SS Girls.",
        "expansion":"NSFH"
    },
    1073: {
        "text":"Stealing your sister's underwear.",
        "expansion":"NSFH"
    },
    1074: {
        "text":"Stroking a cat the wrong way.",
        "expansion":"NSFH"
    },
    1075: {
        "text":"Sucking and blowing.",
        "expansion":"NSFH"
    },
    1076: {
        "text":"The bullet with your name on it.",
        "expansion":"NSFH"
    },
    1077: {
        "text":"The entire rest of eternity, spent in fucking Bruges.",
        "expansion":"NSFH"
    },
    1078: {
        "text":"The oceans rising to reclaim the land.",
        "expansion":"NSFH"
    },
    1079: {
        "text":"A cocained-fuelled sex orgy heart attack.",
        "expansion":"NSFH"
    },
    1080: {
        "text":"A cocktail umbrella ",
        "expansion":"NSFH"
    },
    1081: {
        "text":"A murder/suicide pact.",
        "expansion":"NSFH"
    },
    1082: {
        "text":"A squirming mass of kittens.",
        "expansion":"NSFH"
    },
    1083: {
        "text":"An angry mob with torches and pitchforks.",
        "expansion":"NSFH"
    },
    1084: {
        "text":"Biting my girlfriend like a vampire during sex.",
        "expansion":"NSFH"
    },
    1085: {
        "text":"Dropping your pants and saluting.",
        "expansion":"NSFH"
    },
    1086: {
        "text":"Frankenstein's Monster",
        "expansion":"NSFH"
    },
    1087: {
        "text":"Getting a blowjob in a theater.",
        "expansion":"NSFH"
    },
    1088: {
        "text":"Going full retard.",
        "expansion":"NSFH"
    },
    1089: {
        "text":"Going slob-slob-slob all over that knob.",
        "expansion":"NSFH"
    },
    1090: {
        "text":"Leaking implants.",
        "expansion":"NSFH"
    },
    1091: {
        "text":"Low-flying planes.",
        "expansion":"NSFH"
    },
    1092: {
        "text":"Monkies flinging their own shit.",
        "expansion":"NSFH"
    },
    1093: {
        "text":"My robot duplicate.",
        "expansion":"NSFH"
    },
    1094: {
        "text":"Other people’s children.",
        "expansion":"NSFH"
    },
    1095: {
        "text":"People who can't take a joke. Seriously.",
        "expansion":"NSFH"
    },
    1096: {
        "text":"Popping a boner during Sex Ed class.",
        "expansion":"NSFH"
    },
    1097: {
        "text":"Projectile vomiting.",
        "expansion":"NSFH"
    },
    1098: {
        "text":"Pulling down panties with your teeth.",
        "expansion":"NSFH"
    },
    1099: {
        "text":"Saying ",
        "expansion":"NSFH"
    },
    1100: {
        "text":"Shedding skin like a snake.",
        "expansion":"NSFH"
    },
    1101: {
        "text":"Shooting Valley Girls for like, saying like all the time. Really.",
        "expansion":"NSFH"
    },
    1102: {
        "text":"Slow seductive tentacle rape.",
        "expansion":"NSFH"
    },
    1103: {
        "text":"Talking like a pirate, y’arr!",
        "expansion":"NSFH"
    },
    1104: {
        "text":"Tenderly kissing a unicorn's horn.",
        "expansion":"NSFH"
    },
    1105: {
        "text":"That bastard Jesus!",
        "expansion":"NSFH"
    },
    1106: {
        "text":"The last shreads of dignity.",
        "expansion":"NSFH"
    },
    1107: {
        "text":"The power of friendship.",
        "expansion":"NSFH"
    },
    1108: {
        "text":"This card intentionally left blank.",
        "expansion":"NSFH"
    },
    1109: {
        "text":"Throwing water on a braless woman in a white t-shirt",
        "expansion":"NSFH"
    },
    1110: {
        "text":"Upskirts.",
        "expansion":"NSFH"
    },
    1111: {
        "text":"Wasting all your money on hookers and booze.",
        "expansion":"NSFH"
    },
    1112: {
        "text":"Winning.",
        "expansion":"NSFH"
    },
    1113: {
        "text":"A foot fetish.",
        "expansion":"NSFH"
    },
    1114: {
        "text":"A powerful gag reflex.",
        "expansion":"NSFH"
    },
    1115: {
        "text":"A tight, Asian pussy.",
        "expansion":"NSFH"
    },
    1116: {
        "text":"Explosive decompression.",
        "expansion":"NSFH"
    },
    1117: {
        "text":"Extraordinary Rendition.",
        "expansion":"NSFH"
    },
    1118: {
        "text":"Forgetting the safety word.",
        "expansion":"NSFH"
    },
    1119: {
        "text":"Greeting Christmas carollers naked.",
        "expansion":"NSFH"
    },
    1120: {
        "text":"Handcuffs, without the key.",
        "expansion":"NSFH"
    },
    1121: {
        "text":"Having a drill for a penis.",
        "expansion":"NSFH"
    },
    1122: {
        "text":"Hot Jailbait Ass.",
        "expansion":"NSFH"
    },
    1123: {
        "text":"Liposuction gone horrible wrong.",
        "expansion":"NSFH"
    },
    1124: {
        "text":"My harem of scantily clad women.",
        "expansion":"NSFH"
    },
    1125: {
        "text":"Nazi Zombie Robot Ninjas.",
        "expansion":"NSFH"
    },
    1126: {
        "text":"Redneck gypsies.",
        "expansion":"NSFH"
    },
    1127: {
        "text":"Scissoring.",
        "expansion":"NSFH"
    },
    1128: {
        "text":"A guy and two robots who won’t shut up.",
        "expansion":"NSFH"
    },
    1129: {
        "text":"A shotgun wedding.",
        "expansion":"NSFH"
    },
    1130: {
        "text":"Anne Frank's diary",
        "expansion":"NSFH"
    },
    1131: {
        "text":"Autoerotic asphyxiation.",
        "expansion":"NSFH"
    },
    1132: {
        "text":"Blow Up Bianca the Latex Lovedoll.",
        "expansion":"NSFH"
    },
    1133: {
        "text":"Endlessly tumbling down an up escalator.",
        "expansion":"NSFH"
    },
    1134: {
        "text":"Fun with nuns.",
        "expansion":"NSFH"
    },
    1135: {
        "text":"Getting it all over the walls.",
        "expansion":"NSFH"
    },
    1136: {
        "text":"Holiday Dinner by Jack Daniels.",
        "expansion":"NSFH"
    },
    1137: {
        "text":"Nailgun fights.",
        "expansion":"NSFH"
    },
    1138: {
        "text":"Teaching the bitch a lesson.",
        "expansion":"NSFH"
    },
    1139: {
        "text":"Nazi super science.",
        "expansion":"NSFH"
    },
    1140: {
        "text":"Making a human centipede.",
        "expansion":"NSFH"
    },
	1173: {
        "text":"The primal, ball-slapping sex your parents are having right now.",
        "expansion":"CAHe3"
    },
	1174: {
		"text":"A cat video so cute that your eyes roll back and your spine slides out of your anus.",
		"expansion":"CAHe3"
	},
	1175: {
		"text":"Cock.",
		"expansion":"CAHe3"
	},
	1176: {
		"text":"A cop who is also a dog.",
		"expansion":"CAHe3"
	},
	1177: {
		"text":"Dying alone and in pain.",
		"expansion":"CAHe3"
	},
	1178: {
		"text":"Gay aliens.",
		"expansion":"CAHe3"
	},
	1179: {
		"text":"The way white people is.",
		"expansion":"CAHe3"
	},
	1180: {
		"text":"Reverse cowgirl.",
		"expansion":"CAHe3"
	},
	1181: {
		"text":"The Quesadilla Explosion Salad&trade; from Chili's&copy;.",
		"expansion":"CAHe3"
	},
	1182: {
		"text":"Actually getting shot, for real.",
		"expansion":"CAHe3"
	},
	1183: {
		"text":"Not having sex.",
		"expansion":"CAHe3"
	},
	1184: {
		"text":"Vietnam flashbacks.",
		"expansion":"CAHe3"
	},
	1185: {
		"text":"Running naked through a mall, pissing and shitting everywhere.",
		"expansion":"CAHe3"
	},
	1186: {
		"text":"Nothing.",
		"expansion":"CAHe3"
	},
	1187: {
		"text":"Warm, velvety muppet sex.",
		"expansion":"CAHe3"
	},
	1188: {
		"text":"Self-flagellation.",
		"expansion":"CAHe3"
	},
	1189: {
		"text":"The systematic destruction of an entire people and their way of life.",
		"expansion":"CAHe3"
	},
	1190: {
		"text":"Samuel L. Jackson.",
		"expansion":"CAHe3"
	},
	1191: {
		"text":"A boo-boo.",
		"expansion":"CAHe3"
	},
	1192: {
		"text":"Going around punching people.",
		"expansion":"CAHe3"
	},
	1193: {
		"text":"The entire Internet.",
		"expansion":"CAHe3"
	},
	1194: {
		"text":"Some kind of bird-man.",
		"expansion":"CAHe3"
	},
	1195: {
		"text":"Chugging a lava lamp.",
		"expansion":"CAHe3"
	},
	1196: {
		"text":"Having sex on top of a pizza.",
		"expansion":"CAHe3"
	},
	1197: {
		"text":"Indescribable loneliness.",
		"expansion":"CAHe3"
	},
	1198: {
		"text":"An ass disaster.",
		"expansion":"CAHe3"
	},
	1199: {
		"text":"Shutting the fuck up.",
		"expansion":"CAHe3"
	},
	1200: {
		"text":"All my friends dying.",
		"expansion":"CAHe3"
	},
	1201: {
		"text":"Putting an entire peanut butter and jelly sandwich into the VCR.",
		"expansion":"CAHe3"
	},
	1202: {
		"text":"Spending lots of money.",
		"expansion":"CAHe3"
	},
	1203: {
		"text":"Some douche with an acoustic guitar.",
		"expansion":"CAHe3"
	},
	1204: {
		"text":"Flying robots that kill people.",
		"expansion":"CAHe3"
	},
	1205: {
		"text":"A greased-up Matthew McConaughey.",
		"expansion":"CAHe3"
	},
	1206: {
		"text":"An unstoppable wave of fire ants.",
		"expansion":"CAHe3"
	},
	1207: {
		"text":"Not contributing to society in any meaningful way.",
		"expansion":"CAHe3"
	},
	1208: {
		"text":"An all-midget production of Shakespeare's <i>Richard III</i>.",
		"expansion":"CAHe3"
	},
	1209: {
		"text":"Screaming like a maniac.",
		"expansion":"CAHe3"
	},
	1210: {
		"text":"The moist, demanding chasm of his mouth.",
		"expansion":"CAHe3"
	},
	1211: {
		"text":"Filling every orifice with butterscotch pudding.",
		"expansion":"CAHe3"
	},
	1212: {
		"text":"Unlimited soup, salad, and breadsticks.",
		"expansion":"CAHe3"
	},
	1213: {
		"text":"Crying into the pages of Sylvia Plath.",
		"expansion":"CAHe3"
	},
	1214: {
		"text":"Velcro&trade;.",
		"expansion":"CAHe3"
	},
	1215: {
		"text":"A PowerPoint presentation.",
		"expansion":"CAHe3"
	},
	1216: {
		"text":"A surprising amount of hair.",
		"expansion":"CAHe3"
	},
	1217: {
		"text":"Eating Tom Selleck's mustache to gain his powers.",
		"expansion":"CAHe3"
	},
	1218: {
		"text":"Roland the Farter, flatulist to the king.",
		"expansion":"CAHe3"
	},
	1219: {
		"text":"That ass.",
		"expansion":"CAHe3"
	},
	1220: {
		"text":"A pile of squirming bodies.",
		"expansion":"CAHe3"
	},
	1221: {
		"text":"Buying the right pants to be cool.",
		"expansion":"CAHe3"
	},
	1222: {
		"text":"Blood farts.",
		"expansion":"CAHe3"
	},
	1223: {
		"text":"Three months in the hole.",
		"expansion":"CAHe3"
	},
	1224: {
		"text":"A botched circumcision.",
		"expansion":"CAHe3"
	},
	1225: {
		"text":"The Land of Chocolate.",
		"expansion":"CAHe3"
	},
	1226: {
		"text":"Slapping a racist old lady.",
		"expansion":"CAHe3"
	},
	1227: {
		"text":"A lamprey swimming up the toilet and latching onto your taint.",
		"expansion":"CAHe3"
	},
	1228: {
		"text":"Jumping out at people.",
		"expansion":"CAHe3"
	},
	1229: {
		"text":"A black male in his early 20s, last seen wearing a hoodie.",
		"expansion":"CAHe3"
	},
	1230: {
		"text":"Mufasa's death scene.",
		"expansion":"CAHe3"
	},
	1231: {
		"text":"Bill Clinton, naked on a bearskin rug with a saxophone.",
		"expansion":"CAHe3"
	},
	1232: {
		"text":"Demonic possession.",
		"expansion":"CAHe3"
	},
	1233: {
		"text":"The Harlem Globetrotters.",
		"expansion":"CAHe3"
	},
	1234: {
		"text":"Vomiting mid-blowjob.",
		"expansion":"CAHe3"
	},
	1235: {
		"text":"My manservant, Claude.",
		"expansion":"CAHe3"
	},
	1236: {
		"text":"Having shotguns for legs.",
		"expansion":"CAHe3"
	},
	1237: {
		"text":"Letting everyone down.",
		"expansion":"CAHe3"
	},
	1238: {
		"text":"A spontaneous conga line.",
		"expansion":"CAHe3"
	},
	1239: {
		"text":"A vagina that leads to another dimension.",
		"expansion":"CAHe3"
	},
	1240: {
		"text":"Disco fever.",
		"expansion":"CAHe3"
	},
	1241: {
		"text":"Getting your dick stuck in a Chinese finger trap with another dick.",
		"expansion":"CAHe3"
	},
	1242: {
		"text":"Fisting.",
		"expansion":"CAHe3"
	},
	1243: {
		"text":"The thin veneer of situational causality that underlies porn.",
		"expansion":"CAHe3"
	},
	1244: {
		"text":"Girls that always be textin'.",
		"expansion":"CAHe3"
	},
	1245: {
		"text":"Blowing some dudes in an alley.",
		"expansion":"CAHe3"
	},
   	1246: {
    	"text":"Drinking ten 5-hour ENERGYs&reg; to get fifty continuous hours of energy.",
    	"expansion":"CAHe3"
	},
   	1247: {
    	"text":"Sneezing, farting, and coming at the same time.",
    	"expansion":"CAHe3"
	},
   	1273: {
    	"text":"A freshly-filled diaper",
    	"expansion":"Image1"
	},
    1274: {
        "text":"Glue",
        "expansion":"Image1"
    },
    1275: {
        "text":"An unusually-attractive transvestite",
        "expansion":"Image1"
    },
    1276: {
        "text":"Hand-me-down adult diapers",
        "expansion":"Image1"
    },
    1277: {
        "text":"A stillborn fetus",
        "expansion":"Image1"
    },
    1278: {
        "text":"A disgraced pelican",
        "expansion":"Image1"
    },
    1279: {
        "text":"Three buckets of urine, free for 2 nights, with no late fee",
        "expansion":"Image1"
    },
    1280: {
        "text":"My testicles",
        "expansion":"Image1"
    },
    1281: {
        "text":"A black woman's vagina",
        "expansion":"Image1"
    },
    1282: {
        "text":"My asshole",
        "expansion":"Image1"
    },
    1283: {
        "text":"A whale's blowhole",
        "expansion":"Image1"
    },
    1284: {
        "text":"2 Girls 1 Cup",
        "expansion":"Image1"
    },
    1285: {
        "text":"The Big Bang Theory (TV)",
        "expansion":"Image1"
    },
    1286: {
        "text":"Teen pregnancy",
        "expansion":"Image1"
    },
    1287: {
        "text":"Ass hair",
        "expansion":"Image1"
    },
    1288: {
        "text":"Vaginal warts",
        "expansion":"Image1"
    },
    1289: {
        "text":"Ellen Degeneres",
        "expansion":"Image1"
    },
    1290: {
        "text":"Jews Against Humanity",
        "expansion":"Image1"
    },
    1291: {
        "text":"Indy wrestling",
        "expansion":"Image1"
    },
    1292: {
        "text":"Cunt",
        "expansion":"Image1"
    },
    1293: {
        "text":"Beating a crowd of delightful parents to death with a steel dildo",
        "expansion":"Image1"
    },
    1294: {
        "text":"Beating a crowd of delightful parents to death with a steel dildo while dressed as Ru Paul's brother, Ron.",
        "expansion":"Image1"
    },
    1295: {
        "text":"A roll in the hay",
        "expansion":"Image1"
    },
    1296: {
        "text":"\"Get 'em, Steve-Dave!\"",
        "expansion":"Image1"
    },
    1297: {
        "text":"God Hates You",
        "expansion":"Image1"
    },
    1298: {
        "text":"Manboobs.",
        "expansion":"Image1"
    },
    1299: {
        "text":"Daniel Benoit",
        "expansion":"Image1"
    },
    1300: {
        "text":"Vomiting in the shower",
        "expansion":"Image1"
    },
	1312: {
        "text":"Dwight Schrute",
        "expansion":"Image1"
    },
   1313: {
    "text":"Casey Anthony",
    "expansion":"Image1"
},
   1314: {
    "text":"Clubbin seals",
    "expansion":"Image1"
},
   1315: {
    "text":"Stunt cock",
    "expansion":"Image1"
},
   1854: {
    "text":"10 Incredible Facts About the Anus.",
    "expansion":"CAHe4"
},
    1855: {
        "text":"A Native American who solves crimes by going into the spirit world.",
        "expansion":"CAHe4"
    },
    1856: {
        "text":"A Ugandan warlord.",
        "expansion":"CAHe4"
    },
    1857: {
        "text":"A bunch of idiots playing a card game instead of interacting like normal humans.",
        "expansion":"CAHe4"
    },
    1858: {
        "text":"A dance move that's just sex.",
        "expansion":"CAHe4"
    },
    1859: {
        "text":"A fart.",
        "expansion":"CAHe4"
    },
    1860: {
        "text":"A for-real lizard that spits blood from its eyes.",
        "expansion":"CAHe4"
    },
    1861: {
        "text":"A gender identity that can only be conveyed through slam poetry.",
        "expansion":"CAHe4"
    },
    1862: {
        "text":"A hopeless amount of spiders.",
        "expansion":"CAHe4"
    },
    1863: {
        "text":"A horse with no legs.",
        "expansion":"CAHe4"
    },
    1864: {
        "text":"A kiss on the lips.",
        "expansion":"CAHe4"
    },
    1865: {
        "text":"A manhole.",
        "expansion":"CAHe4"
    },
    1866: {
        "text":"A sex comet from Neptune that plunges the Earth into eternal sexiness.",
        "expansion":"CAHe4"
    },
    1867: {
        "text":"A sex goblin with a carnival penis.",
        "expansion":"CAHe4"
    },
    1868: {
        "text":"A shiny rock that proves I love you.",
        "expansion":"CAHe4"
    },
    1869: {
        "text":"Actual mutants with medical conditions and no superpowers.",
        "expansion":"CAHe4"
    },
    1870: {
        "text":"Africa.",
        "expansion":"CAHe4"
    },
    1871: {
        "text":"All the single ladies.",
        "expansion":"CAHe4"
    },
    1872: {
        "text":"Almost giving money to a homeless person.",
        "expansion":"CAHe4"
    },
    1873: {
        "text":"Ambiguous sarcasm.",
        "expansion":"CAHe4"
    },
    1874: {
        "text":"An interracial handshake.",
        "expansion":"CAHe4"
    },
    1875: {
        "text":"Angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of night.",
        "expansion":"CAHe4"
    },
    1876: {
        "text":"Ass to mouth.",
        "expansion":"CAHe4"
    },
    1877: {
        "text":"Blackula.",
        "expansion":"CAHe4"
    },
    1878: {
        "text":"Bouncing up and down.",
        "expansion":"CAHe4"
    },
    1879: {
        "text":"Calculating every mannerism so as not to suggest homosexuality.",
        "expansion":"CAHe4"
    },
    1880: {
        "text":"Child Protective Services.",
        "expansion":"CAHe4"
    },
    1881: {
        "text":"Crazy opium eyes.",
        "expansion":"CAHe4"
    },
    1882: {
        "text":"Dem titties.",
        "expansion":"CAHe4"
    },
    1883: {
        "text":"Depression.",
        "expansion":"CAHe4"
    },
    1884: {
        "text":"Doo-doo.",
        "expansion":"CAHe4"
    },
    1885: {
        "text":"Drinking responsibly.",
        "expansion":"CAHe4"
    },
    1886: {
        "text":"Exploding pigeons.",
        "expansion":"CAHe4"
    },
    1887: {
        "text":"Falling into the toilet.",
        "expansion":"CAHe4"
    },
    1888: {
        "text":"Finally finishing off the Indians.",
        "expansion":"CAHe4"
    },
    1889: {
        "text":"Fucking a corpse back to life.",
        "expansion":"CAHe4"
    },
    1890: {
        "text":"Grammar nazis who are also regular Nazis.",
        "expansion":"CAHe4"
    },
    1891: {
        "text":"How awesome I am.",
        "expansion":"CAHe4"
    },
    1892: {
        "text":"Injecting speed into one arm and horse tranquilizer into the other.",
        "expansion":"CAHe4"
    },
    1893: {
        "text":"Interspecies marriage.",
        "expansion":"CAHe4"
    },
    1894: {
        "text":"Jizz.",
        "expansion":"CAHe4"
    },
    1895: {
        "text":"Khakis.",
        "expansion":"CAHe4"
    },
    1896: {
        "text":"Lots and lots of abortions.",
        "expansion":"CAHe4"
    },
    1897: {
        "text":"Moderate-to-severe joint pain.",
        "expansion":"CAHe4"
    },
    1898: {
        "text":"My dad's dumb fucking face.",
        "expansion":"CAHe4"
    },
    1899: {
        "text":"My sex dungeon.",
        "expansion":"CAHe4"
    },
    1900: {
        "text":"My worthless son.",
        "expansion":"CAHe4"
    },
    1901: {
        "text":"Neil Diamond's Greatest Hits.",
        "expansion":"CAHe4"
    },
    1902: {
        "text":"No clothes on, penis in vagina.",
        "expansion":"CAHe4"
    },
    1903: {
        "text":"Party Mexicans.",
        "expansion":"CAHe4"
    },
    1904: {
        "text":"Prince Ali, fabulous he, Ali Ababwa.",
        "expansion":"CAHe4"
    },
    1905: {
        "text":"Sharks with legs.",
        "expansion":"CAHe4"
    },
    1906: {
        "text":"Smoking crack, for instance.",
        "expansion":"CAHe4"
    },
    1907: {
        "text":"Snorting coke off a clown's boner.",
        "expansion":"CAHe4"
    },
    1908: {
        "text":"Some sort of Asian.",
        "expansion":"CAHe4"
    },
    1909: {
        "text":"Sports.",
        "expansion":"CAHe4"
    },
    1910: {
        "text":"Stuffing a child's face with Fun Dip® until he starts having fun.",
        "expansion":"CAHe4"
    },
    1911: {
        "text":"Sugar madness.",
        "expansion":"CAHe4"
    },
    1912: {
        "text":"The complex geopolitical quagmire that is the Middle East.",
        "expansion":"CAHe4"
    },
    1913: {
        "text":"The euphoric rush of strangling a drifter.",
        "expansion":"CAHe4"
    },
    1914: {
        "text":"The peaceful and nonthreatening rise of China.",
        "expansion":"CAHe4"
    },
    1915: {
        "text":"The safe word.",
        "expansion":"CAHe4"
    },
    1916: {
        "text":"The secret formula for ultimate female satisfaction.",
        "expansion":"CAHe4"
    },
    1917: {
        "text":"The size of my penis.",
        "expansion":"CAHe4"
    },
    1918: {
        "text":"The tiniest shred of evidence that God is real.",
        "expansion":"CAHe4"
    },
    1919: {
        "text":"Three consecutive seconds of happiness.",
        "expansion":"CAHe4"
    },
    1920: {
        "text":"Unquestioning obedience.",
        "expansion":"CAHe4"
    },
    1921: {
        "text":"What Jesus would do.",
        "expansion":"CAHe4"
    },
    1922: {
        "text":"Whatever a McRib® is made of.",
        "expansion":"CAHe4"
    },
    1923: {
        "text":"Whispering all sexy.",
        "expansion":"CAHe4"
    },
	1954: {
        "text":"The biggest, blackest dick.",
        "expansion":"Box"
    },
    1955: {
        "text":"A box.",
        "expansion":"Box"
    },
    1956: {
        "text":"A box within a box.",
        "expansion":"Box"
    },
    1957: {
        "text":"A boxing match with a giant box.",
        "expansion":"Box"
    },
    1958: {
        "text":"A box of biscuits, a box of mixed biscuits, and a biscuit mixer.",
        "expansion":"Box"
    },
    1959: {
        "text":"An outbreak of smallbox.",
        "expansion":"Box"
    },
    1960: {
        "text":"The Boxcar Children.",
        "expansion":"Box"
    },
    1961: {
        "text":"A world without boxes.",
        "expansion":"Box"
    },
    1962: {
        "text":"Boxing up my feelings.",
        "expansion":"Box"
    },
    1963: {
        "text":"A box-shaped man.",
        "expansion":"Box"
    },
    1964: {
        "text":"A man-shaped box.",
        "expansion":"Box"
    },
    1965: {
        "text":"Something that looks like a box but turns out to be a crate.",
        "expansion":"Box"
    },
    1966: {
        "text":"A box that is conscious and wishes it weren't a box.",
        "expansion":"Box"
    },
    1967: {
        "text":"An alternate universe in which boxes store things inside of people.",
        "expansion":"Box"
    },
    1968: {
        "text":"The J15 Patriot Assault Box.",
        "expansion":"Box"
    },
    1969: {
        "text":"A box without hinges, key, or lid, yet golden treasure inside is hid.",
        "expansion":"Box"
    },
    1970: {
        "text":"Two midgets shitting into a box.",
        "expansion":"Box"
    },
    1971: {
        "text":"A falcon with a box on its head.",
        "expansion":"Box"
    },
    1972: {
        "text":"Being a motherfucking box.",
        "expansion":"Box"
    },
    1973: {
        "text":"Former President George W. Box.",
        "expansion":"Box"
    },
    1974: {
        "text":"Pandora's vagina.",
        "expansion":"Box"
    },
	2696: {
        "text":"Making up for 10 years of shitty parenting with a PlayStation.",
        "expansion":"christmas2013"
    },
    2697: {
        "text":"Giving money and personal information to strangers on the Internet.",
        "expansion":"christmas2013"
    },
    2698: {
        "text":"A magical tablet containing a world of unlimited pornography.",
        "expansion":"christmas2013"
    },
    2699: {
        "text":"These low, low prices!",
        "expansion":"christmas2013"
    },
    2700: {
        "text":"Piece of shit Christmas cards with no money in them.",
        "expansion":"christmas2013"
    },
    2701: {
        "text":"Moses gargling Jesus\'s balls while Shiva and the Buddha penetrate his divine hand holes.",
        "expansion":"christmas2013"
    },
    2702: {
        "text":"The Hawaiian goddess Kapo and her flying detachable vagina.",
        "expansion":"christmas2013"
    },
    2703: {
        "text":"The shittier, Jewish version of Christmas.",
        "expansion":"christmas2013"
    },
    2704: {
        "text":"Swapping bodies with mom for a day.",
        "expansion":"christmas2013"
    },
    2705: {
        "text":"Finding out that Santa isn't real.",
        "expansion":"christmas2013"
    },
    2706: {
        "text":"Slicing a ham in icy silence.",
        "expansion":"christmas2013"
    },
    2707: {
        "text":"The Grinch\'s musty, cum-stained pelt.",
        "expansion":"christmas2013"
    },
    2708: {
        "text":"Rudolph's bright red balls.",
        "expansion":"christmas2013"
    },
    2709: {
        "text":"Jizzing into Santa\'s beard.",
        "expansion":"christmas2013"
    },
    2710: {
        "text":"Breeding elves for their priceless semen.",
        "expansion":"christmas2013"
    },
    2711: {
        "text":"The royal afterbirth.",
        "expansion":"christmas2013"
    },
    2712: {
        "text":"Congress\'s flaccid penises withering away beneath their suit pants.",
        "expansion":"christmas2013"
    },
    2713: {
        "text":"Having a strong opinion about Obamacare.",
        "expansion":"christmas2013"
    },
    2714: {
        "text":"A simultaneous nightmare and wet dream starring Sigourney Weaver.",
        "expansion":"christmas2013"
    },
    2715: {
        "text":"Being blind and deaf and having no limbs.",
        "expansion":"christmas2013"
    },
    2716: {
        "text":"People with cake in their mouths talking about how good cake is.",
        "expansion":"christmas2013"
    },
	2726: {
        "text":"Sucking the President\'s dick.",
        "expansion":"90s"
    },
    2727: {
        "text":"Sunny D! Alright!",
        "expansion":"90s"
    },
    2728: {
        "text":"A mulatoo, an albino, a mosquito, and my libido.",
        "expansion":"90s"
    },
    2729: {
        "text":"Log.&trade;",
        "expansion":"90s"
    },
    2730: {
        "text":"Jerking off to a 10-second RealMedia clip.",
        "expansion":"90s"
    },
    2731: {
        "text":"Deregulating the mortgage market.",
        "expansion":"90s"
    },
    2732: {
        "text":"The Y2K bug.",
        "expansion":"90s"
    },
    2733: {
        "text":"Wearing Nicolas Cage\'s face.",
        "expansion":"90s"
    },
    2734: {
        "text":"Stabbing the shit out a Capri Sun.",
        "expansion":"90s"
    },
    2735: {
        "text":"Kurt Cobain\'s death.",
        "expansion":"90s"
    },
    2736: {
        "text":"Freeing Willy.",
        "expansion":"90s"
    },
    2737: {
        "text":"Liking big butts and not being able to lie about it.",
        "expansion":"90s"
    },
    2738: {
        "text":"The Great Cornholio.",
        "expansion":"90s"
    },
    2739: {
        "text":"Pure Moods, Vol. 1.",
        "expansion":"90s"
    },
    2740: {
        "text":"Yelling \”girl power!\” and doing a high kick.",
        "expansion":"90s"
    },
    2741: {
        "text":"Pamela Anderson\'s boobs running in slow motion.",
        "expansion":"90s"
    },
    2742: {
        "text":"Pizza in the morning, pizza in the evening, pizza at supper time.",
        "expansion":"90s"
    },
    2743: {
        "text":"Angels interfering in an otherwise fair baseball game.",
        "expansion":"90s"
    },
    2744: {
        "text":"Getting caught up in the CROSSFIRE.&trade;",
        "expansion":"90s"
    },
    2745: {
        "text":"Patti Mayonnaise.",
        "expansion":"90s"
    },
    2746: {
        "text":"Cool 90s up-in-the-front hair.",
        "expansion":"90s"
    },
    2747: {
        "text":"Several Michael Keatons.",
        "expansion":"90s"
    },
    2748: {
        "text":"A bus that will explode if it goes under 50 miles per hour.",
        "expansion":"90s"
    },
	2756: {
        "text":"The black half of Barack Obama.",
        "expansion":"CAHe5"
    },
    2757: {
        "text":"The white half of Barack Obama.",
        "expansion":"CAHe5"
    },
    2758: {
        "text":"Free ice cream, yo.",
        "expansion":"CAHe5"
    },
    2759: {
        "text":"A face full of horse cum.",
        "expansion":"CAHe5"
    },
    2760: {
        "text":"Getting caught by the police and going to jail.",
        "expansion":"CAHe5"
    },
    2761: {
        "text":"My dead son's baseball glove.",
        "expansion":"CAHe5"
    },
    2762: {
        "text":"Ejaculating live bees and the bees are angry.",
        "expansion":"CAHe5"
    },
    2763: {
        "text":"Western standards of beauty.",
        "expansion":"CAHe5"
    },
    2764: {
        "text":"Getting eaten alive by Guy Fieri.",
        "expansion":"CAHe5"
    },
    2765: {
        "text":"Blowjobs for everyone.",
        "expansion":"CAHe5"
    },
    2766: {
        "text":"Blackface.",
        "expansion":"CAHe5"
    },
    2767: {
        "text":"Butt stuff.",
        "expansion":"CAHe5"
    },
    2768: {
        "text":"Some shit-hot guitar licks.",
        "expansion":"CAHe5"
    },
    2769: {
        "text":"Social justice warriors with flamethrowers of compassion.",
        "expansion":"CAHe5"
    },
    2770: {
        "text":"Deez nuts.",
        "expansion":"CAHe5"
    },
    2771: {
        "text":"An unforgettable quinceañera.",
        "expansion":"CAHe5"
    },
    2772: {
        "text":"September 11th, 2001.",
        "expansion":"CAHe5"
    },
    2773: {
        "text":"Daddy's credit card.",
        "expansion":"CAHe5"
    },
    2774: {
        "text":"A one-way ticket to Gary, Indiana.",
        "expansion":"CAHe5"
    },
    2775: {
        "text":"An uninterrupted history of imperialism and exploitation.",
        "expansion":"CAHe5"
    },
    2776: {
        "text":"P.F. Change himself.",
        "expansion":"CAHe5"
    },
    2777: {
        "text":"Cutting off a flamingo\'s legs with garden shears.",
        "expansion":"CAHe5"
    },
    2778: {
        "text":"A giant powdery manbaby.",
        "expansion":"CAHe5"
    },
    2779: {
        "text":"Anal fissures like you wouldn\'t believe.",
        "expansion":"CAHe5"
    },
    2780: {
        "text":"Not believing in giraffes.",
        "expansion":"CAHe5"
    },
    2781: {
        "text":"Getting drive-by shot.",
        "expansion":"CAHe5"
    },
    2782: {
        "text":"A team of lawyers.",
        "expansion":"CAHe5"
    },
    2783: {
        "text":"AIDS monkeys.",
        "expansion":"CAHe5"
    },
    2784: {
        "text":"Wearing glasses and sounding smart.",
        "expansion":"CAHe5"
    },
    2785: {
        "text":"Slowly easing down onto a cucumber.",
        "expansion":"CAHe5"
    },
    2786: {
        "text":"A whole new kind of porn.",
        "expansion":"CAHe5"
    },
    2787: {
        "text":"40 acres and a mule.",
        "expansion":"CAHe5"
    },
    2788: {
        "text":"Boring vaginal sex.",
        "expansion":"CAHe5"
    },
    2789: {
        "text":"Genghis Khan\'s DNA.",
        "expansion":"CAHe5"
    },
    2790: {
        "text":"The tiger that killed my father.",
        "expansion":"CAHe5"
    },
    2791: {
        "text":"My boyfriend\'s stupid penis.",
        "expansion":"CAHe5"
    },
    2792: {
        "text":"Changing a person\'s mind with logic and facts.",
        "expansion":"CAHe5"
    },
    2793: {
        "text":"Child support payments.",
        "expansion":"CAHe5"
    },
    2794: {
        "text":"The passage of time.",
        "expansion":"CAHe5"
    },
    2795: {
        "text":"Going to a high school reunion on ketamine.",
        "expansion":"CAHe5"
    },
    2796: {
        "text":"A reason not to commit suicide.",
        "expansion":"CAHe5"
    },
    2797: {
        "text":"Russian super-tuberculosis.",
        "expansion":"CAHe5"
    },
    2798: {
        "text":"A mouthful of potato salad.",
        "expansion":"CAHe5"
    },
    2799: {
        "text":"All these decorative pillows.",
        "expansion":"CAHe5"
    },
    2800: {
        "text":"Figuring out how to have sex with a dolphin.",
        "expansion":"CAHe5"
    },
    2801: {
        "text":"Being worshipped as the one true God.",
        "expansion":"CAHe5"
    },
    2802: {
        "text":"The basic suffering that pervades all of existence.",
        "expansion":"CAHe5"
    },
    2803: {
        "text":"The ghost of Marlon Brando.",
        "expansion":"CAHe5"
    },
    2804: {
        "text":"Out-of-this-world bazongas.",
        "expansion":"CAHe5"
    },
    2805: {
        "text":"Ancient Athenian boy-fucking",
        "expansion":"CAHe5"
    },
    2806: {
        "text":"A crazy little thing called love.",
        "expansion":"CAHe5"
    },
    2807: {
        "text":"A zero-risk way to make $2,000 from home.",
        "expansion":"CAHe5"
    },
    2808: {
        "text":"Seeing my village burned and my family slaughtered before my eyes.",
        "expansion":"CAHe5"
    },
    2809: {
        "text":"Being paralyzed from the neck down.",
        "expansion":"CAHe5"
    },
    2810: {
        "text":"Backwards knees.",
        "expansion":"CAHe5"
    },
    2811: {
        "text":"Having been dead for a while.",
        "expansion":"CAHe5"
    },
    2812: {
        "text":"My first period.",
        "expansion":"CAHe5"
    },
    2813: {
        "text":"Vegetarian options.",
        "expansion":"CAHe5"
    },
    2814: {
        "text":"The Abercrombie & Fitch lifestyle.",
        "expansion":"CAHe5"
    },
    2815: {
        "text":"The unbelievable world of mushrooms.",
        "expansion":"CAHe5"
    },
    2816: {
        "text":"Being nine years old.",
        "expansion":"CAHe5"
    },
    2817: {
        "text":"The eight gay warlocks who dictate the rules of fashion.",
        "expansion":"CAHe5"
    },
    2818: {
        "text":"The swim team, all at once.",
        "expansion":"CAHe5"
    },
    2819: {
        "text":"Denzel.",
        "expansion":"CAHe5"
    },
    2820: {
        "text":"Unrelenting genital punishment.",
        "expansion":"CAHe5"
    },
    2821: {
        "text":"Mom\'s new boyfriend.",
        "expansion":"CAHe5"
    },
    2822: {
        "text":"A disappointing salad.",
        "expansion":"CAHe5"
    },
    2823: {
        "text":"A powered exoskeleton.",
        "expansion":"CAHe5"
    },
    2824: {
        "text":"Ennui.",
        "expansion":"CAHe5"
    },
    2825: {
        "text":"Oil!",
        "expansion":"CAHe5"
    },
    2826: {
        "text":"Giant sperm from outer space.",
        "expansion":"CAHe5"
    },
    2827: {
        "text":"Doing the right stuff to her nipples.",
        "expansion":"CAHe5"
    },
    2828: {
        "text":"Too much cocaine.",
        "expansion":"CAHe5"
    },
    2829: {
        "text":"Seeing things from Hitler\'s perspective",
        "expansion":"CAHe5"
    },
	2855: {
        "text":"A bass drop so huge it tears the starry vault asunder to reveal the face of God.",
        "expansion":"CAHe6"
    },
    2856: {
        "text":"Growing up chained to a radiator in perpetual darkness.",
        "expansion":"CAHe6"
    },
    2857: {
        "text":"Shitting all over the floor like a bad, bad girl.",
        "expansion":"CAHe6"
    },
    2858: {
        "text":"A buttload of candy.",
        "expansion":"CAHe6"
    },
    2859: {
        "text":"Sucking all the milk out of a yak.",
        "expansion":"CAHe6"
    },
    2860: {
        "text":"Bullets.",
        "expansion":"CAHe6"
    },
    2861: {
        "text":"A man who is so cool that he rides on a motorcycle.",
        "expansion":"CAHe6"
    },
    2862: {
        "text":"Sudden penis loss.",
        "expansion":"CAHe6"
    },
    2863: {
        "text":"Getting all offended.",
        "expansion":"CAHe6"
    },
    2864: {
        "text":"Crying and shitting and eating spaghetti.",
        "expansion":"CAHe6"
    },
    2865: {
        "text":"One unforgettable night of passion.",
        "expansion":"CAHe6"
    },
    2866: {
        "text":"Being popular and good at sports.",
        "expansion":"CAHe6"
    },
    2867: {
        "text":"Filling a man\'s anus with concrete.",
        "expansion":"CAHe6"
    },
    2868: {
        "text":"Two whales fucking the shit out of eachother.",
        "expansion":"CAHe6"
    },
    2869: {
        "text":"Cool, releatable cancer teens.",
        "expansion":"CAHe6"
    },
    2870: {
        "text":"The amount of gay I am.",
        "expansion":"CAHe6"
    },
    2871: {
        "text":"A possible Muslim.",
        "expansion":"CAHe6"
    },
    2872: {
        "text":"Unsheathing my massive horse cock.",
        "expansion":"CAHe6"
    },
    2873: {
        "text":"A bowl of gourds.",
        "expansion":"CAHe6"
    },
    2874: {
        "text":"The male gaze.",
        "expansion":"CAHe6"
    },
    2875: {
        "text":"The power of the Dark Side.",
        "expansion":"CAHe6"
    },
    2876: {
        "text":"Ripping a dog in half.",
        "expansion":"CAHe6"
    },
    2877: {
        "text":"A constant need for validation.",
        "expansion":"CAHe6"
    },
    2878: {
        "text":"Meaningless sex.",
        "expansion":"CAHe6"
    },
    2879: {
        "text":"Such a big boy.",
        "expansion":"CAHe6"
    },
    2880: {
        "text":"Throwing stones at a man until he dies.",
        "expansion":"CAHe6"
    },
    2881: {
        "text":"Cancer.",
        "expansion":"CAHe6"
    },
    2882: {
        "text":"Like a million alligators.",
        "expansion":"CAHe6"
    },
    2883: {
        "text":"Eating together like a god damn family for once.",
        "expansion":"CAHe6"
    },
    2884: {
        "text":"Cute boys.",
        "expansion":"CAHe6"
    },
    2885: {
        "text":"Pussy.",
        "expansion":"CAHe6"
    },
    2886: {
        "text":"Being a terrible mother.",
        "expansion":"CAHe6"
    },
    2887: {
        "text":"Never having sex again.",
        "expansion":"CAHe6"
    },
    2888: {
        "text":"A pizza guy who fucked up.",
        "expansion":"CAHe6"
    },
    2889: {
        "text":"A whole lotta woman.",
        "expansion":"CAHe6"
    },
    2890: {
        "text":"The all-new Nissan Pathfinder with 0.9% APR financing!",
        "expansion":"CAHe6"
    },
    2891: {
        "text":"A peyote-fueled vision quest.",
        "expansion":"CAHe6"
    },
    2892: {
        "text":"Kale.",
        "expansion":"CAHe6"
    },
    2893: {
        "text":"Breastfeeding a ten year old.",
        "expansion":"CAHe6"
    },
    2894: {
        "text":"Crippling social anxiety.",
        "expansion":"CAHe6"
    },
    2895: {
        "text":"Immortality cream.",
        "expansion":"CAHe6"
    },
    2896: {
        "text":"Texas.",
        "expansion":"CAHe6"
    },
    2897: {
        "text":"Teaching a girl how to handjob the penis.",
        "expansion":"CAHe6"
    },
    2898: {
        "text":"A turd.",
        "expansion":"CAHe6"
    },
    2899: {
        "text":"Shapes and colors.",
        "expansion":"CAHe6"
    },
    2900: {
        "text":"Whatever you wish, mother.",
        "expansion":"CAHe6"
    },
    2901: {
        "text":"The haunting stare of an Iraqi child.",
        "expansion":"CAHe6"
    },
    2902: {
        "text":"Robots who just want to party.",
        "expansion":"CAHe6"
    },
    2903: {
        "text":"A self-microwaving burrito.",
        "expansion":"CAHe6"
    },
    2904: {
        "text":"Forgetting grandma\'s first name.",
        "expansion":"CAHe6"
    },
    2905: {
        "text":"Our new Buffalo Chicken Dippers&reg;!",
        "expansion":"CAHe6"
    },
    2906: {
        "text":"Treasures beyond your wildest dreams.",
        "expansion":"CAHe6"
    },
    2907: {
        "text":"Getting shot out of a cannon.",
        "expansion":"CAHe6"
    },
    2908: {
        "text":"The sweet song of sword against and the braying of mighty war beasts.",
        "expansion":"CAHe6"
    },
    2909: {
        "text":"Walking into a glass door.",
        "expansion":"CAHe6"
    },
    2910: {
        "text":"The color \"puce\".",
        "expansion":"CAHe6"
    },
    2911: {
        "text":"Every ounce of charisma left in Mick Jagger\'s tired body.",
        "expansion":"CAHe6"
    },
    2912: {
        "text":"The eighth graders.",
        "expansion":"CAHe6"
    },
    2913: {
        "text":"Setting my balls on fire and cartwheeling to Ohio.",
        "expansion":"CAHe6"
    },
    2914: {
        "text":"The dentist.",
        "expansion":"CAHe6"
    },
    2915: {
        "text":"Gwyneth Paltrow\'s opinions.",
        "expansion":"CAHe6"
    },
    2916: {
        "text":"Turning the rivers red with the blood of infidels.",
        "expansion":"CAHe6"
    },
    2917: {
        "text":"Rabies.",
        "expansion":"CAHe6"
    },
    2918: {
        "text":"Important news about Taylor Swift.",
        "expansion":"CAHe6"
    },
    2919: {
        "text":"Ejaculating inside another man\'s wife.",
        "expansion":"CAHe6"
    },
    2920: {
        "text":"Owls, the perfect predator.",
        "expansion":"CAHe6"
    },
    2921: {
        "text":"Being John Malkovich.",
        "expansion":"CAHe6"
    },
    2922: {
        "text":"Bathing in moonsblood and dancing around the ancient oak.",
        "expansion":"CAHe6"
    },
    2923: {
        "text":"An oppressed people with a vibrant culture.",
        "expansion":"CAHe6"
    },
    2924: {
        "text":"An overwhelming variety of cheeses.",
        "expansion":"CAHe6"
    },
    2925: {
        "text":"Reading the entire End-User License Agreement.",
        "expansion":"CAHe6"
    },
    2926: {
        "text":"Morpheus.",
        "expansion":"CAHe6"
    },
    2927: {
        "text":"Peeing into a girl\'s butt to make a baby.",
        "expansion":"CAHe6"
    },
    2928: {
        "text":"Generally having no idea of what\'s going on.",
        "expansion":"CAHe6"
    },
    2929: {
        "text":"No longer finding any Cards Against Humanity card funny.",
        "expansion":"CAHe6"
    }
};

export default answers;