const { DownloadItemsFormat } = require("apify-client");

var house = [{Horror:{
    Titel: "Die 15 Besten Manhwa mit Leveling System",
    Beschreibung: "Manhwas mit dem beliebten Leveling System!!",
    Datum: "Datum: 02.02.2023",
    Verfasser: "Von: MaxManhwa",
Manhwas:[{
    Titel:"Dimensional Mercenary",
    Nummer: "15",
    Beschriftung:"Würden Sie gerne einen Job finden? Auch wenn es Sie Ihre Seele kostet? Dann sind Sie bei uns genau richtig. Unsere Website mit Ratschlägen für die Stellensuche, SoSe, richtet sich an Menschen, die bereit sind, sogar ihre Seele für einen Arbeitsplatz zu verkaufen; genau, Menschen wie Sie. Haben Sie es mit Engeln oder Dämonen zu tun? Der 30-jährige Schmarotzer Chul Ho Kang hat über diese zwielichtige Website einen Deal abgeschlossen und sogar seine Seele verkauft, um die Chance auf was sonst zu bekommen? Geld! Eine Einladung in die andere Welt für die Schwachen und Unterdrückten der Gesellschaft, um eine Chance zu bekommen, ihr Schicksal zu ändern! Das ist der Auftrag von Chul Ho Kang!",
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/dimensional_mercenary.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675341972571",
    status:"am Laufen",
    Link: "https://shrinke.me/Manhwas"
},
{
    Titel:"Taming Master",
    Nummer: "14",
    Beschriftung:"Jinsung mag wie ein durchschnittlicher College-Student aussehen, aber in der rauen VR-Welt von Kaillan ist er Ian, ein mächtiger Bogenschütze der Stufe 93! Als er plötzlich seinen Charakter zurücksetzt, denken alle, er sei total verrückt! Was sie nicht wissen, ist, dass Jinsung eine mächtige, neue versteckte Klasse freigeschaltet hat. Jetzt ist es schwierig, Monster zu zähmen, und das Aufleveln ist eine Plackerei. Aber als sein VR-liebender Lehrer droht, ihn im Stich zu lassen, hat Jinsung nur zwei Monate Zeit, um aufzusteigen und Ruhm als einziger Zähmungsmeister zu erlangen!",
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/tamingmaster.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675342109903",
    status:"am Laufen",
    Link: "https://shrinke.me/Manhwas"
},{
    Titel:"Worn Torn Newbie",
    Nummer: "13",
    Beschriftung:"Nachdem er gelernt hat, dass 15 miserable Jahre seines Lebens als gescheiterter Spieler ein langer Albtraum waren, ist Lee Eojin froh, wieder ein Neuling zu sein. Eojin schwört, nicht die gleichen Fehler zu wiederholen, und beginnt neu als der heiße Oldtimer. Er besiegt Monster, bekommt süße Ausrüstung und macht genug Teig, um sich für das Leben zu rüsten. Wird Eojin, der von Fans geliebt und von alten und neuen Feinden gehasst wird, das Spiel brechen und triumphieren, oder wird das Spiel ihn wieder brechen?",
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/wornantornnewbie.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675342406930",
    status:"am Laufen",
    Link: "https://shrinke.me/Manhwas"
},{
    Titel:"Murim Login",
    Nummer: "12",
    Beschriftung:"Eine große Anzahl von Monstern kommt aus dem Tor, das die Grenze der Welt ist. Nach vielen Opfern gewannen die Menschen den Kampf gegen Monster durch ihr Erwachen. Jin Taekyung lebt als F-Klasse-Jäger, was die niedrigste Stufe ist. Nachdem Jin eine schwere Zeit hat, bekommt er eine alte Kapsel und geht dann in die Kapsel, die die Welt der Kampfhelden ist. Und das Spielsystem verleiht ihm besondere Fähigkeiten, er wächst zum besten Kampfhelden heran.",
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/murimlogin.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675342324291",
    status:"am Laufen",
    Link: "https://shrinke.me/Manhwas"
},{
    Titel:"Player Who Can’t Level Up",
    Nummer: "11",
    Beschriftung:"Kim Gi-Gyu erwachte als Spieler im Alter von 18 Jahren. Er dachte, sein Leben sei auf dem Weg zum Erfolg, kletterte auf den Turm und schloss die Tore... Aber selbst nachdem er das Tutorial beendet hatte, war er Level 1.Er tötete jeden Tag einen Goblin und war immer noch Level 1. Auch nach 5 Jahren war er immer noch Level 1. Wer hätte gedacht, dass es so einen Spieler geben würde. Niemand wusste es.",
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/theplayerwhocant.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675342770100",
    status:"am Laufen",
    Link: "https://shrinke.me/Manhwas"
},{
    Titel:"The Tutorial Tower Is Too Tough",
    Nummer: "10",
    Beschriftung:"Lee Hojae hatte sein Leben als Pro-Gamer aufgegeben, bis er eines Tages eine mysteriöse Nachricht erhielt: Herzlichen Glückwunsch! Du wurdest in die Tutorial World eingeladen. Fasziniert betritt er das Spiel und wählt selbstbewusst den Schwierigkeitsgrad der Hölle, erfährt aber bald, dass er dort gefangen ist. Mit einer Überlebensrate von nur 0,01% muss Hojae irgendwie die quälenden Herausforderungen des Spiels überwinden, um den wahren Grund herauszufinden, warum er eingeladen wurde. Dieses Tutorial mag schwierig sein, aber seine Geheimnisse sind das, was wirklich höllisch ist.",
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/theturtorialis.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675342903606",
    status:"am Laufen",
    Link: "https://shrinke.me/Manhwas"
},{
    Titel:"I Am the Sorcerer King",
    Nummer: "9",
    Beschriftung:"Sunghoon Lee ist nichts anderes als ein Opfer einer sich verändernden Welt, ein machtloser Mann in einem Land, das von Bestien und Magie befallen ist. Monster aus einer anderen Welt drangen in die Erde ein und brachten eine Krankheit mit sich, die Sunghoons Mutter in einen endlosen Schlaf treibt. Um ihre Arztrechnungen zu bezahlen, trotzte er einem gefährlichen Job als Köder, der von mächtigen Übermenschen namens Awakeners benutzt wurde, um Monster zu jagen. Aber als er sich an der Tür des Todes wiederfand, blitzt das Bild seines vergangenen Lebens durch seinen Kopf. Dort fand er seine Wahrheit: Er ist die Reinkarnation des Zaubererkönigs!",
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/iamthescorrer.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675343018019",
    status:"Beendet",
    Link: "https://shrinke.me/Manhwas"
},{
    Titel:"Leveling With the Gods",
    Nummer: "8",
    Beschriftung:"Vielleicht können Innere Götter niemals Äußere Götter besiegen...so dachte Yuwon Kim, ein tapferer, hochrangiger Krieger, nach einer bitteren Niederlage. Aber Yuwon ist zu hartnäckig, um aufzugeben. Sein Verlust wird zum Beginn einer neuen Reise als Rückkehrer. Mit neuer Entschlossenheit kehrt Yuwon dort zurück, wo er angefangen hat, zerschmettert Monster um Monster und lernt seine Fähigkeiten neu, bevor er den Turm wieder übernimmt. Aber kann er sich durch die Tutorials kämpfen und noch einmal aufsteigen, oder wird seine Eroberung vor ihm zerbröckeln?",
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/levelupwith.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675343165894",
    status:"am Laufen",
    Link: "https://shrinke.me/Manhwas"
},{
    Titel:"I’m the Max-Level Newbie",
    Nummer: "7",
    Beschriftung:"Jinhyuk, ein Spiel-Nutuber, war die einzige Person, die das Ende des Spiels [Tower of Trials] sah. Als die Popularität des Spiels jedoch abnahm, wurde es schwierig für ihn, weiterhin seinen Lebensunterhalt als Spiele-Nuuber zu verdienen. Da er das Ende des Spiels bereits gesehen hatte, war er kurz davor, mit dem Spielen aufzuhören. Aber an diesem Tag wurde [Tower of Trials] Realität, und Jinhyuk, der über jede einzelne Sache im Spiel Bescheid wusste, übernahm alles schneller als irgendjemand es konnte! Ich zeige dir, wie ein echter Profi ist.",
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/iamthemaxlevel.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675343275109",
    status:"am Laufen",
    Link: "https://shrinke.me/Manhwas"
},{
    Titel:"Overgeared",
    Nummer: "6",
    Beschriftung:"Shin Youngwoo ist ein reiner Verlierer im Leben, der auch bei einer Versicherungsgesellschaft hoch verschuldet ist. Er lebt mit seinen enttäuschten Eltern und seiner brillanten jüngeren Schwester zusammen, die einer der besten Schüler an ihrer Schule ist. Selbst in Spielen, wie dem beliebten VRMMORPG-Spiel Befriedigen, ist er ein totaler Verlierer. Aber eines Tages, während er auf einer Suche ist, findet er auf wundersame Weise ein legendäres Buch, das jedem, der es liest, die nie zuvor gesehene legendäre Klasse geben kann! Er plante, es für viel Geld zu verkaufen, aber Glück war immer seine schlimmste Eigenschaft. Durch eine unglückliche Veränderung der Situation war sein Traum nur von kurzer Dauer, da er gezwungen war, den Gegenstand für sich selbst zu verwenden. Sein Leben hat sich seit diesem schicksalhaften Tag für immer verändert...",
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/overgeard.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675343434139",
    status:"Beendet",
    Link: "https://shrinke.me/Manhwas"
},{
    Titel:"The Gamer",
    Nummer: "5",
    Beschriftung:"Was ist, wenn dein Leben wie ein Spiel ist? Was ist, wenn du deinen Status verbessern und mehr Level erreichen kannst? Eine Fantasiewelt kommt direkt auf dich zu! Han Jee-Han, ein normaler Highschool-Schüler, entwickelt plötzlich eine besondere Kraft, in der seine gesamte Welt in eine spielerische Umgebung versetzt wird. Er kann die Machtlevel von Menschen sehen, sich die Werte eines scheinbar normalen Gegenstands ansehen, Fähigkeiten erhalten und sogar aufsteigen! Folge Han Jee-Han, wie er entdeckt, wie er diese Kraft nutzen kann und vielleicht sogar, woher sie kommt.",
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/thegamer.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675343577849",
    status:"Beendet",
    Link: "https://shrinke.me/Manhwas"
},{
    Titel:"Skeleton Soldier Couldn’t Protect the Dungeon",
    Nummer: "4",
    Beschriftung:"Sein einziger Zweck war es, seinen Herrn zu beschützen. Und doch war er machtlos, sie zu beschützen. Aber das Schicksal hält mehr für ihn bereit, als er eine weitere Chance bekommt, seinen Meister erneut zu beschützen und sein Schicksal zu ändern.",
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/theskeletonsoldier.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675343695110",
    status:"am Laufen",
    Link: "https://shrinke.me/Manhwas"
},{
    Titel:"Second Life Ranker",
    Nummer: "3",
    Beschriftung:"Yeon-woo hatte einen Zwillingsbruder, der vor fünf Jahren verschwand. Eines Tages kehrte eine Taschenuhr, die sein Bruder hinterlassen hatte, in seinen Besitz zurück. Im Inneren fand er ein verstecktes Tagebuch, in dem festgehalten war: Wenn du das hörst, werde ich wohl schon tot sein... Obelisk, der Turm des Sonnengottes, eine Welt, in der sich mehrere Universen und Dimensionen kreuzen. In dieser Welt war sein Bruder dem Verrat zum Opfer gefallen, als er den Turm hinaufkletterte. Nachdem Yeon-woo die Wahrheit erfahren hatte, beschloss er, den Turm zusammen mit dem Tagebuch seines Bruders zu besteigen. Yeon-woo durchläuft dann die gleichen Prüfungen und Kämpfe wie sein jüngerer Bruder als anonymer Spieler. Sein Ziel? Besiege den Obeliskturm und räche dich für seinen Bruder. ",
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/second.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523528",
    status:"am Laufen",
    Link: "https://shrinke.me/Manhwas"
},








{
    Titel:"The Legendary Moonlight Sculptor",
    Nummer: "2",
    Beschriftung:"Der Mann, der von der Welt verlassen wurde, der Mann ein Sklave des Geldes und der Mann, der als legendärer God of War im beliebten MMORPG Continent of Magic bekannt ist. Mit dem Erwachsenwerden beschließt er, sich zu verabschieden, aber der schwache Versuch, etwas für seine Zeit und Mühe zu verdienen, schlägt sich in einer Wirkung nieder, die sich niemand hätte vorstellen können. Durch eine Reihe von Zufällen wird sein legendärer Avatar für 3 Milliarden 90 Millionen Won (2,7 Millionen Dollar) verkauft, was ihm große Freude bereitet, nur um ihn in Verzweiflung zu stürzen, fast alles davon an bösartige Kredithaie zu verlieren. Mit der Enthüllung von Geld durch Spiele steigt er mit neuer Entschlossenheit aus dem Abgrund und tritt in das neue Zeitalter der Spiele ein, angeführt vom ersten Virtual Reality MMORPG, Royal Road. Dies ist die Legende von Lee Hyun auf seinem Weg, Kaiser zu werden, nur mit seinem familiären Herzen, seinem grenzenlosen Verlangen nach Geld, seinem unerwarteten Verstand, seinem fleißig geschmiedeten Körper und dem Talent harter Arbeit, das ihn unterstützt. Dies ist die Legende, dass der Niedrigste zum Stärksten wird. Dies ist die Legende von WEED.",
    Cover: "",
    status:"am Laufen",
    Link: "https://shrinke.me/Manhwas"
},






{
        Titel:"Solo Leveling",
        Nummer: "1",
        Beschriftung:"10 years ago, after “the Gate” that connected the real world with the monster world opened, some of the ordinary, everyday people received the power to hunt monsters within the Gate. They are known as “Hunters”. However, not all Hunters are powerful. My name is Sung Jin-Woo, an E-rank Hunter. I’m someone who has to risk his life in the lowliest of dungeons, the “World’s Weakest”. Having no skills whatsoever to display, I barely earned the required money by fighting in low-leveled dungeons… at least until I found a hidden dungeon with the hardest difficulty within the D-rank dungeons! In the end, as I was accepting death, I suddenly received a strange power, a quest log that only I could see, a secret to leveling up that only I know about! If I trained in accordance with my quests and hunted monsters, my level would rise. Changing from the weakest Hunter to the strongest S-rank Hunter!",
        Cover: "https://ik.imagekit.io/idrissa66/Manhwa/solo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675344063532",
        status: "Beendet",
        Link: "https://comick.app/comic/solo-leveling"

}]
}


},{ Horror: {
    Titel: "10 Horror Manhwa",
    Beschreibung: "10 Besten Horror Manhwa aller Zeiten!!",
    Datum: "Datum: 01.02.2023",
    Verfasser: "Von: MaxManhwa",
   Manhwas:[{
    Titel:"PIPGEN",
    Nummer: "10",
    Beschriftung:"Der Protagonist findet sich auf einer unbewohnten Insel wieder, wo eine mysteriöse Familie vor ihm erscheint.",
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/pipgen.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675247571077",
    Link:"",
    status: "Beendet"
   },{
    Titel:"Dead Life",Nummer: "9", Beschriftung:"Mit dem Zombie-Ausbruch beginnt das Chaos. Wenn jedoch intelligente Zombies auftauchen, wird sich die Welt zum Besseren oder zum Schlechten wenden?", Cover: "https://ik.imagekit.io/idrissa66/Manhwa/deadlife.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675247778036",Link: "",status:"Beendet",
   },{
    Titel: "One Day, Suddenly, Seoul Is", Nummer:"8", Beschriftung:"Das schreckliche Variationsvirus, das eines Tages plötzlich Seoul traf! Yeon-woo, der auf einer Klassenfahrt nach Seoul war, singt so sehr von der Idee, dass er die gleiche Klasse so-yeon kennenlernen kann, die normalerweise unerwiderte Liebe war. Unidentifizierte Zellen tauchten vor der Yeon-woo's Class während der Besichtigung von Seoul auf. Die Mathe-Trips von Klassenkameraden wie den Schauspielern werden zur Hölle wegen der Zellen, die die Infizierten in eine wilde Figur verwandeln, wenn sie in Kontakt kommen...! Kann Yeon-woo Seoul sicher entkommen?", Cover:"https://ik.imagekit.io/idrissa66/Manhwa/onedaysuddenlyinseoul.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675248069222",status:"am Laufen", Link:"",
   },{
    Titel: "L.A.G", Nummer:"7", Beschriftung:"L.A.G, ein unbekannter Raum, in dem Menschen Fähigkeiten oder Fertigkeiten durch Erwachen nutzen, Monster erscheinen auf jeder Etage und jedem Raum, und Missionen werden entsprechend gegeben.Das Ziel hier ist es, den Boden zu erreichen. Der Protagonist wiederholt Tod und Leben unzählige Male im unbekannten Raum L.A.G. In diesem Leben hat er jedoch die Fähigkeit, unbegrenzte passive Fähigkeiten zu besitzen und hat schließlich eine Chance, dorthin zu entkommen.Im Gegensatz zu dem, was er bisher durchgemacht hat, wird er jedoch keinen Zentimeter von der Zukunft wissen, da sich L.A.G weiter verändert. Dies ist eine verzweifelte Überlebensgeschichte, in der niemandem vertraut werden kann und die weiterhin das höllische L.A.G. überlebt, wo kein Ende in Sicht ist, und um die Flucht von unten kämpft.", Cover:"https://ik.imagekit.io/idrissa66/Manhwa/lag.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675248212439",status:"am Laufen", Link:"",
   },{
    Titel: "All Rounder", Nummer:"6", Beschriftung:"Eine Welt voller Zombies. Aber diese Apokalypse... Ist es einen Versuch wert?! [Fähigkeiten können von Experten 'transferiert' werden.] Mentalpflege, Holzbau, himmlische Magie, Tierkommunikation, Maschinenbau, Performance etc.. Es gibt so viel zu lernen! Der Sprint des vorbereiteten Überlebenden, der in allem gut ist, beginnt!", Cover:"https://ik.imagekit.io/idrissa66/Manhwa/allrounder.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675248317311",status:"am Laufen", Link:"",
   },{
    Titel: "Limit Breaker", Nummer:"5", Beschriftung:"Aufgrund eines unbekannten Fehlers war Kim Kibong 3000 Jahre lang im Erweckungstest gefangen. In der realen Welt sind 10 Jahre vergangen, und sie wird von Monstern und Dungeons überrannt. Der Kampf beginnt nun für Kim Kibong, der mit dem maximalen Level zurückkehrte, um die Welt wieder so zu machen, wie sie war!", Cover:"https://ik.imagekit.io/idrissa66/Manhwa/LimitBreaker.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675248440778",status:"Beendet", Link:"",
   },{
    Titel: "Zomgam", Nummer:"4", Beschriftung:"In einer Welt, in der jeder ums Leben kämpft, ist Onmirae, der einzige Junge, der den Tod will. Eines Tages erschien eine Todesschwadron, die vor ihm auftauchte und ihm einen Vorschlag machte.  Ich werde dich töten, lass uns die menschliche Gesellschaft gemeinsam wieder aufbauenStirb, du musst alle retten.", Cover:"https://ik.imagekit.io/idrissa66/Manhwa/zomgam.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675248939953",status:"am Laufen", Link:"",
   },{
    Titel: "Shotgun Boy", Nummer:"3", Beschriftung:"Während er im Wald um sein Leben rennt, stolpert das Mobbingopfer Gyuhwan über eine Schrotflinte und gerade genug Granaten für seine Klassenkameraden. Es ist ein Rezept für eine Katastrophe. Aber das Schicksal nimmt eine unerwartete Wendung, als er zurückkehrt und seine Klassenkameraden von hirnfressenden Kreaturen angegriffen sieht. Jetzt ist das einzige, was ihrem gefräßigen Festmahl im Wege steht, ein Junge mit einer Schrotflinte.", Cover:"https://ik.imagekit.io/idrissa66/Manhwa/shotgunboy.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675248816213",status:"Beendet", Link:"",
   },{
    Titel: "Return Survival", Nummer:"2", Beschriftung:"Die Welt ging unter... Vor drei Jahren! Nachdem ich meinen Tod gefunden hatte... als ich meine Augen wieder öffnete... Ich fand mich 6 Monate vor Beginn der Zombie-Apokalypse wieder!", Cover:"https://ik.imagekit.io/idrissa66/Manhwa/returnsurvival.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675248557164",status:"am Laufen", Link:"",
   },{
    Titel: "Bastard", Nummer:"1", Beschriftung:"Da lebt ein Mörder bei mir.", Cover:"https://ik.imagekit.io/idrissa66/Manhwa/Bastard.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675248635434",status:"Beendet", Link:"",
   }]

}

},

//Top 20 Manhwa

{ Horror: {
    Titel: "Die Top 15 der Besten Manhwa",
    Beschreibung: "Die Besten 15 Manhwas im Jahr 2023!!",
    Datum: "Datum: 31.01.2023",
    Verfasser: "Von: MaxManhwa",
    Manhwas:[
    {
    Titel:"How to Fight",Nummer: "15",

    Beschriftung:"Tauglauf Yoo Hobin wird immer von Schülern gemobbt, die sich ihm überlegen fühlen, aber er ignoriert sie, da sein Leben bereits allzu schwierig ist. Ein unbeabsichtigter Vorfall verändert jedoch sein Leben. Er wird berühmt durch ein virales Video, das er nicht einmal hochladen wollte! Alles ist perfekt! Er wird sofort berühmt und beginnt, Geld mit dem versehentlichen Video zu verdienen, das er hochgeladen hat.Aber da es unbeabsichtigt war, st er nicht in der Lage, es zu reproduzieren. Angetrieben von dem potenziellen Geld, das verdient werden kann, und seinem plötzlichen Anstieg der Popularität, plant er, fesselndere Videos zu machen, die die Leute interessant finden und ihm helfen, mehr Abonnenten zu gewinnen... Er kann jedoch nichts davon erreichen, wenn er nicht lernt, wie man kämpft.",
    
    
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/howtofight.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523374",Link:"https://shrinke.me/Manhwas",status:"am Laufen"
   }, {
    Titel:"Return of the Frozen Player",Nummer: "14",
   
    Beschriftung:"5 Jahre nachdem sich die Welt verändert hatte, erschien der Endboss. [Der letzte Boss für das Gebiet Erde, die Frostkönigin, ist erschienen.] Der Endboss! Wenn wir sie einfach besiegen können, wird sich unser Leben wieder normalisieren! Die fünf besten Spieler der Welt, darunter Specter Seo Jun-ho, besiegten schließlich die Frostkönigin... Aber sie fielen in einen tiefen Schlaf. 25 Jahre vergingen. Ein zweiter Stock? Es endete nicht, als die Frostkönigin starb? Spectre erwacht aus seinem Schlaf.",
    
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/thefrozenplayer.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675174589728",Link:"https://shrinke.me/Manhwas"
   },  {
    Titel:"Lookism",Nummer: "13",
    
    Beschriftung:"Park Hyung Suk, übergewichtig und unattraktiv, wird täglich gemobbt und missbraucht. Aber ein Wunder steht bevor.",
 
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/lookism.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523074",Link:"https://shrinke.me/Manhwas",status:"am Laufen"
   }, {
    Titel:"Doom Breaker",Nummer: "12",
    
    Beschriftung:"When the world was plunged into darkness by the Silent Night’, Martial Artists from all over the place gathered to form the ‘Northern Heavenly Sect. With overwhelming strength from the Northern Heavenly Sect, the Silent Night was pushed away and the people began to enjoy peace once more. However, as time passed the martial artists from the mainlands began to conspire against the Northern Heavenly Sect, and eventually caused the death of the Fourth Generation Sect Leader, Jin Kwan-Ho, destroying the sect with it. As everyone left the sect, Jin Kwan-Ho’s only son, Jin Mu-Won was left behind. Mu-Won has never learned anything about martial arts, but he eventually finds the Martial Techniques secretly left behind by his father and begins to acquire the martial arts of the Northern Heavenly Sect. Then one day, a mysterious girl appears before Mu-Won…!!",
    
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/doobreaker.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523223",Link:"https://shrinke.me/Manhwas",status:"am Laufen"
   },{
    Titel:"The Legend of the Northern Blade",Nummer: "11",
        Beschriftung:"When the world was plunged into darkness by the Silent Night’, Martial Artists from all over the place gathered to form the ‘Northern Heavenly Sect. With overwhelming strength from the Northern Heavenly Sect, the Silent Night was pushed away and the people began to enjoy peace once more. However, as time passed the martial artists from the mainlands began to conspire against the Northern Heavenly Sect, and eventually caused the death of the Fourth Generation Sect Leader, Jin Kwan-Ho, destroying the sect with it. As everyone left the sect, Jin Kwan-Ho’s only son, Jin Mu-Won was left behind. Mu-Won has never learned anything about martial arts, but he eventually finds the Martial Techniques secretly left behind by his father and begins to acquire the martial arts of the Northern Heavenly Sect. Then one day, a mysterious girl appears before Mu-Won…!!",
    
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/thelegendofnorthernblade.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523139",

Link:"https://shrinke.me/Manhwas",status:"am Laufen"
   },{
    Titel:"The Archmage Returns After 4000 Years",Nummer: "10",
    
    Beschriftung:"Lucas Trowman war der größte Erzmagier der Geschichte, bis er von Halbgott dazu verurteilt wurde, die Ewigkeit damit zu verbringen, den Verstand zu verlieren.  Aber 4.000 Jahre später wird er in diese Welt zurückgeworfen, in den Körper von Frei Blake, dem schwächsten, untalentiertesten Schüler an der renommierten Westroad Academy für Magier. Nach all dieser Zeit ist die Welt der Magie kaum vorangekommen. Könnte dies das Werk von Demigod sein? Entschlossen, es herauszufinden, versucht Lucas, erneut die höchsten Ebenen der Macht zu erreichen und sich zu rächen.",

    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/thearchmagereturnafter400yaers.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523161",Link:"https://shrinke.me/Manhwas",status:""
   },{
    Titel:"I’m the Max-Level Newbie",Nummer: "9",
    
    Beschriftung:"Jinhyuk, ein Spiel-Nutuber, war die einzige Person, die das Ende des Spiels [Tower of Trials] sah. Als die Popularität des Spiels jedoch abnahm, wurde es schwierig für ihn, weiterhin seinen Lebensunterhalt als Spiele-Nuuber zu verdienen. Da er das Ende des Spiels bereits gesehen hatte, war er kurz davor, mit dem Spielen aufzuhören. Aber an diesem Tag wurde [Tower of Trials] Realität, und Jinhyuk, der über jede einzelne Sache im Spiel Bescheid wusste, übernahm alles schneller als irgendjemand es konnte! Ich zeige dir, wie ein echter Profi ist.",
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/imthemaxlevelnewbie.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523261",Link:"https://shrinke.me/Manhwas",status:"am Laufen"
   },{
    Titel:"Nano Machine",Nummer: "8",
 
    Beschriftung:"Nachdem er verachtet und sein Leben in Gefahr gebracht wurde, hat ein Waisenkind aus dem dämonischen Kult, Cheon Yeo-Woon, unerwarteten Besuch von seinem Nachfahren aus der Zukunft, der eine Nanomaschine in Cheon Yeo-Woons Körper einführt, was Cheon Yeo-Woons Leben nach seiner Aktivierung drastisch verändert. Die Geschichte von Cheon Yeo-Woons Reise, den dämonischen Kult zu umgehen und zum besten Kampfkünstler aufzusteigen, hat gerade erst begonnen.",
  
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/nanomachine.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675161850421",Link:"https://shrinke.me/Manhwas",status:"am Laufen"
   },{
    Titel:"The Swordmaster's Son",Nummer: "7",

    Beschriftung:"Jin Runcandel war der jüngste Sohn von Runcandel, der angesehensten Schwertkämpferfamilie des Landes...  Und der größte Misserfolg in der Geschichte von Runcandel. Er, der kläglich rausgeschmissen wurde und zu einem sinnlosen Ende kam, bekam eine weitere Chance. Wie willst du diese Macht nutzen? Ich möchte es für mich nutzen. Erinnerungen an sein vergangenes Leben, überwältigendes Talent und ein Vertrag mit Gott... Die Vorbereitungen, um der Größte zu werden, sind abgeschlossen.",
    
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/theswordmasterson.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523282",Link:"https://shrinke.me/Manhwas",status:"am Laufen"
   },{
    Titel:"Player Who Returned 10,000 Years Later",Nummer: "6",Beschriftung:"Spieler, der 10 000 Jahre später zurückkehrte",Cover: "https://ik.imagekit.io/idrissa66/Manhwa/player.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523665",Link:"",status:"am Laufen"
   },{
    Titel:"Second Life Ranker",Nummer: "5",

    Beschriftung:"Yeon-woo hatte einen Zwillingsbruder, der vor fünf Jahren verschwand. Eines Tages kehrte eine Taschenuhr, die sein Bruder hinterlassen hatte, in seinen Besitz zurück. Im Inneren fand er ein verstecktes Tagebuch, in dem festgehalten war: Wenn du das hörst, werde ich wohl schon tot sein... Obelisk, der Turm des Sonnengottes, eine Welt, in der sich mehrere Universen und Dimensionen kreuzen. In dieser Welt war sein Bruder dem Verrat zum Opfer gefallen, als er den Turm hinaufkletterte. Nachdem Yeon-woo die Wahrheit erfahren hatte, beschloss er, den Turm zusammen mit dem Tagebuch seines Bruders zu besteigen. Yeon-woo durchläuft dann die gleichen Prüfungen und Kämpfe wie sein jüngerer Bruder als anonymer Spieler. Sein Ziel? Besiege den Obeliskturm und räche dich für seinen Bruder.",
 
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/second.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523528",Link:"https://shrinke.me/Manhwas",status:"am Laufen"
   }, {
    Titel:"Mercenary Enrollment",Nummer: "4",
    
    Beschriftung:"Yu Ijin war der einzige Überlebende eines Flugzeugabsturzes, als er klein war. Nachdem er ein Söldner geworden ist, um 10 Jahre zu überleben, kehrt er zu seiner Familie in seine Heimatstadt zurück. Im Alter von acht Jahren verlor Ijin Yu seine Eltern bei einem Flugzeugabsturz und strandete in einem fremden Land, gezwungen, ein Kindersöldner zu werden um am Leben zu bleiben. Zehn Jahre später kehrt er nach Hause zurück, um mit seiner Familie in Korea vereint zu werden, wo es reichlich Nahrung und Unterkunft gibt und alles friedlich erscheint. Aber Ijin wird bald lernen, dass das Leben als Teenager eine ganz andere Überlebensleistung ist. Mit nur noch einem Jahr High School muss Ijin neue Taktiken beherrschen, um sich auf dem Schlachtfeld des Schulhauses zurechtzufinden. Kann er ein Jahr High School überleben? Oder vielmehr, wird die Schule ihn überleben können?",
  
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/mercenary.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160525004",Link:"",status:"am Laufen"
   }, {
    Titel:"Omniscient Reader's Viewpoint",Nummer: "3",
    
   Beschriftung:"Dokja war ein durchschnittlicher Büroangestellter, dessen einziges Interesse darin bestand seinen Lieblings-Webroman Drei Wege, die Apokalypse zu überleben  zu lesen. Doch als der Roman plötzlich Realität wird, ist er der Einzige, der weiß, wie die Welt enden wird. Bewaffnet mit dieser Erkenntnis nutzt Dokja sein Verständnis, um den Verlauf der Geschichte und der Welt, wie er sie kennt, zu verändern.",
    
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/omniscient.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160524948",Link:"",status:"am Laufen"
   },{
    Titel:"Damn Reincarnation",Link:"https://shrinke.me/Manhwas", Nummer: "2",
    
   Beschriftung: "Der Krieger Hamel ging mit seinen Gefährten auf ein Abenteuer, um die Dämonenkönige zu besiegen, aber nachdem er kurz vor dem letzten Kampf mit den Dämonenkönigen gestorben war.... Waaah.What the fuck! Er wurde als Nachkomme seines Mitkämpfers Vermouth wiedergeboren. Hamel nein, Eugen Löwenherz wurde mit dem Blut des Großen Wermuts wiedergeboren. Mein früherer Körper hatte genug Talent, um mit einem Genie verwechselt zu werden, aber dieser ... Es gibt einfach keinen Vergleich. Mit einem Körper, der von Anfang an höhere Spezifikationen hatte, zeigte er ein explosives Wachstum, das weit über das hinausging, was er in seinem vorherigen Leben erreicht hatte. Zusammen mit den unbekannten Gründen für seine Reinkarnation kam die unbehagliche Realität, mit Dämonen koexistieren zu müssen. Er war mit einer Welt konfrontiert, die ihn alles in Frage stellen ließ, woran er geglaubt hatte. Seit seiner Geburt mit diesem außergewöhnlichen Körper begabt, beginnt er als Eugen den unvollendeten Weg aus seinem früheren Leben zu gehen.",
    

    
    Cover: "https://ik.imagekit.io/idrissa66/Manhwa/Damnr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160525162",status:"am Laufen"
   }, {Titel:"Solo Leveling",Link:"https://shrinke.me/Manhwas",Nummer: "1",
   
   Beschriftung:"Vor 10 Jahren, nachdem sich das Tor, das die reale Welt mit der Monsterwelt verband, geöffnet hatte, erhielten einige der gewöhnlichen, alltäglichen Menschen die Macht, Monster innerhalb des Tores zu jagen. Sie sind als Jäger bekannt. Allerdings sind nicht alle Jäger mächtig. Mein Name ist Sung Jin-Woo, ein E-Rang-Jäger. Ich bin jemand, der sein Leben in den niedrigsten Kerkern, den Schwächsten der Welt, riskieren muss. Da ich keinerlei Fähigkeiten zur Schau stellen konnte, verdiente ich kaum das erforderliche Geld, indem ich in niedrigstufigen Dungeons kämpfte... zumindest bis ich einen versteckten Dungeon mit dem schwierigsten Schwierigkeitsgrad innerhalb der D-Rang-Dungeons gefunden habe! Am Ende, als ich den Tod akzeptierte, erhielt ich plötzlich eine seltsame Kraft, ein Quest-Logbuch, das nur ich sehen konnte, ein Geheimnis für den Aufstieg, von dem nur ich weiß! Wenn ich gemäß meinen Quests trainierte und Monster jagte, würde mein Level steigen. Wechsel vom schwächsten Jäger zum stärksten S-Rangjäger!",
 Cover: "https://ik.imagekit.io/idrissa66/Manhwa/solo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160525331", status:"Beendet", Link: "https://shrinke.me/Manhwas"
   }]
}

},{Horror:{
    Titel:"Solo Leveling bekommt neue Chapter!!",
    Datum:"Datum: 03.02.2023",
    Verfasser:"Von MaxManhwa",
    Cover:"https://uploads.disquscdn.com/images/795fa0dfcc0a7500d9b8940a85568dd272f4a5818fdc68d399752483b17604b7.png",
    Bild: "https://meo.comick.pictures/0-XrShknaE2oYq3-m.jpg",
    Text:[{
        Beschreibung: "Fans von Solo Leveling können endlich aufatmen, denn nach einer langen Wartezeit wird die Manhwa-Serie fortgeführt.",
},{ Beschreibung:"Die Nachricht, dass neue Kapitel veröffentlicht werden, wurde von vielen begeistert aufgenommen und es ist nun offiziell bestätigt. Bereits drei Kapitel sind veröffentlicht worden und Fans können nun weiterlesen und herausfinden, wie die Geschichte weitergeht."}]
  

}},
//Business Manhwa
{Horror:{
    Titel: "Die 9 Besten Business Manhwas",
    Beschreibung: "Manhwas über Business!!",
    Datum: "Datum: 15.02.2023",
    Verfasser: "Von: MaxManhwa",
    Manhwas:[{ 
        Titel: "Coin Revenge",
        Nummer:"9",
        Beschriftung:"Yoo Beom, ein genialer College-Student, der seine Familie durch eine Organisation verlor, die Kryptowährungspreise manipulierte. Er beschließt, Rache zu nehmen, verbirgt seine Identität und infiltriert die Kryptowährungs-Gangsterorganisation ONE. Er benutzt sein geniales Gehirn, um eine blutige Rache an der Kryptowährungsorganisation zu beginnen, die sein Leben ruiniert hat. Dies ist eine neue Kryptowährungskriminalität Noir-Arbeit.",
        Cover:"https://ik.imagekit.io/idrissa66/Manhwa/coinrevenge.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676477645983",
        status:"Laufend",
        Link:"https://shrinke.me/Manhwas"
    },{ 
        Titel: "Again My Life",
        Nummer:"8",
        Beschriftung:"Ein heißblütiger Staatsanwalt, Kim Hi Wu, wurde ermordet und im Ozean versenkt, während er den Tyrannen jagte, der Korea kontrollierte. Aber Kim Hi Wu trifft einen Sensenmann, der ihm die Chance gibt, ihn wieder zu erleben und ihn zurück schickt, als er 18 Jahre alt war. Als Highschool-Schüler bereitet sich Kim Hi Wu darauf vor, den Tyrannen Jo Tae Sup zu bestrafen.",
        Cover:"https://ik.imagekit.io/idrissa66/Manhwa/againmylife.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676476576103",
        status:"Abgeschlossen",
        Link:"https://shrinke.me/Manhwas"
    },{ 
        Titel: "From the Grave and Back",
        Nummer:"7",
        Beschriftung:"Hey, lass dich nicht verwirren. Ich habe dich nie als meinen kleinen Bruder betrachtet. Du kennst nicht einmal deinen richtigen Ort. Das war der Dolch, der am meisten schmerzte. Han Myoung Woo.Ein Kind einer wohlhabenden Familie mit schnellem Verstand. Aber Gott gab ihm nicht alles. Eine fast unheilbare genetische Herzkrankheit. Er tat sein Bestes, um sich den Respekt der Menschen um ihn herum zu verdienen. Aber sein Vater, der Vorsitzende und seine Familienangehörigen nahmen ihn nie ernst. Da traf ihn plötzlich ein Unfall. Und... Er wachte im Körper der schwer verletzten Studentin Kim Cheol Min auf.",
        Cover:"https://ik.imagekit.io/idrissa66/Manhwa/fromthefraveback.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676476443875",
        status:"Laufend",
        Link:"https://shrinke.me/Manhwas"
    },{ 
        Titel: "The Strongest Manager in History",
        Nummer:"6",
        Beschriftung:"Welcher Hunter arbeitet heute noch ohne Management? 20 Jahre nach dem ersten Auftreten von Monstern brauchen Hunter heute Manager.",
        Cover:"https://ik.imagekit.io/idrissa66/Manhwa/thestrongestmanager.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676476163449",
        status:"Laufend",
        Link:"https://shrinke.me/Manhwas"
    },{ 
        Titel: "The Lord of Money",
        Nummer:"5",
        Beschriftung:"Cheon Joong Myung, der dritte Sohn des CEO des fünftreichsten Unternehmens, der Ji Gyoung Group. Und sein Assistent, der unter ihm arbeitet, Seong Chang Ook. Während Seong Chang Ook versuchte, Cheon Joong Myung zu töten und als Unfall zu vertuschen, wurde Seong Chang Ook zusammen mit seinem Chef versehentlich durch einen Stromschlag getötet. Dann finden sie sich in den Körpern des anderen gefangen ... Du willst, dass ich ein Playboy-Konglomerat werde, das die Welt noch nie zuvor gesehen hat? Ich öffne die Türen zur Hölle, wenn ich das tue. Dies ist der Beginn des endlosen Marsches von Cheon Joong Myung, dem Herrn des Geldes.",
        Cover:"https://ik.imagekit.io/idrissa66/Manhwa/thelordofmoney.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676476246484",
        status:"Laufend",
        Link:"https://shrinke.me/Manhwas"
    },{ 
        Titel: "Real Man",
        Nummer:"4",
        Beschriftung:"Yuhyeon wird der jüngste CEO von Hansung, einem erfolgreichen Elektronikunternehmen, das auf einer toxischen Arbeitskultur aufbaut, aber niemand, der ihm wichtig ist, ist da, um mit ihm zu feiern. Nach einer durchzechten Nacht und der Frage, ob er die Vergangenheit ändern könnte, wacht er am nächsten Morgen auf, 20 Jahre jünger zu Beginn seiner Karriere. Bewaffnet mit der Erfahrung und den Einsichten, die ihn zum CEO gemacht haben, beginnt Yuhyeon, zerbrochene Beziehungen zu überdenken und die Wegbereiter von Hansungs mörderischem Arbeitsumfeld zu bekämpfen. Aber er weiß noch nicht, wie sich die Veränderung der Vergangenheit auf seine Arbeit auswirken wird.",
        Cover:"https://ik.imagekit.io/idrissa66/Manhwa/realman.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676475797977",
        status:"Laufend",
        Link:"https://shrinke.me/Manhwas"
    },{ 
        Titel: "The Chaebeol's Youngest Son",
        Nummer:"3",
        Beschriftung:"Um 13 Jahre harte Arbeit durch Verrat zurückzubekommen! Yoon Hyun-woo, der Chef der Sunyang-Gruppe, der wie ein Diener lebte und verlassen wurde. Gerade als er dachte, es sei alles vorbei, wachte er als Jin Do-jun auf, der Enkel des Vorsitzenden der Sunyang Group, Jin! Jin Do-jun, der jüngste Sohn einer Chaebol-Familie, ist jedoch weit davon entfernt, das Recht zu erben. Wird er in der Lage sein, der endgültige Gewinner in einem familienpolitischen Drama zu werden? Yoon Hyun-woos berauschendes Rachedrama, um die Sunyang-Gruppe zu verschlingen, beginnt!",
        Cover:"https://ik.imagekit.io/idrissa66/Manhwa/thechaebeol.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676475647188",
        status:"Laufend",
        Link:"https://shrinke.me/Manhwas"
    },{ 
        Titel: "Return of the Legend",
        Nummer:"2",
        Beschriftung:"Aufgrund der Situation wie der zweite IWF, für die die Sicherheitsfirma Jang Taesan gearbeitet hat, geht bankrott, und er wird ein arbeitsloser Mann, der durch Noryangjin-dong wandert. Er verliert sein Leben bei der Rettung eines Grundschülers, der fast von einem Auto angefahren wurde. Doch dank seiner guten Tat geht er 14 Jahre zurück in die Vergangenheit und wird in ein neues Leben aufgenommen. Die Freude, wiederbelebt zu werden, ist jedoch nur von kurzer Dauer. Der Gedanke, wieder die Aufnahmeprüfung für das College ablegen zu müssen, macht mich schwindelig... Aber ich erinnere mich an all die CSAT-Probleme, auf die ich während des Studiums gestoßen bin, und an die Börsenkurve, die ich während meiner Arbeit als Börsenmakler gesehen habe...?! Das letzte Leben war ruiniert, aber das nächste Leben wird ein Erfolg werden!",
        Cover:"https://ik.imagekit.io/idrissa66/Manhwa/returnthelegend.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676475459255",
        status:"Laufend",
        Link:"https://shrinke.me/Manhwas"
    },{ 
        Titel: "Past Life Regressor",
        Nummer:"1",
        Beschriftung:"Möchten Sie die Zeit umkehren?] [Alle deine Fähigkeiten werden zurückgesetzt.] [Bitte wählen Sie das Datum.] 28. Februar 1985. Der Tag, an dem ich geboren wurde. Finanzkraft. Ich werde alles Glück der Welt sammeln – und schaffen ein Monopol. Ich werde alle Kerker der Welt monopolisieren. Ich werde das jetzt tun, solange die Welt noch friedlich ist... bevor alles beginnt.",
        Cover:"https://ik.imagekit.io/idrissa66/Manhwa/pastliferegressor.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676475356758",
        status:"Laufend",
        Link:"https://shrinke.me/Manhwas"
    },]

}}]

module.exports= house;