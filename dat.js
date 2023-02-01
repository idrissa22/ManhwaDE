const { DownloadItemsFormat } = require("apify-client");

var house = [{Horror:{
    Titel: "10 Horror Manhwa",
    Beschreibung: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    Datum: "Datum: 10.04.2022",
    Verfasser: "Von: MaxManhwa",
Manhwas:[{
        Titel:"Solo Leveling",
        Nummer: "1",
        Beschriftung:"Solo Leveling handelt von",
        Cover: "https://ik.imagekit.io/idrissa66/Manhwa/PIGPEN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674833949650",
        Link: "https://comick.app/comic/solo-leveling"

},{
    Titel:"Solo Leveling",
    Nummer: "1",
    Beschriftung:"Solo Leveling handelt von",
    Cover: "Nike Air Jordan 1 Mid Linen Sneakers Mens Sz 10 Grey White 554724-082.jpg",
    Link: "https://comick.app/comic/solo-leveling"
}]
}


},{ Horror: {
    Titel: "10 Horror Manhwa",
    Beschreibung: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    Datum: "Datum: 10.04.2022",
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
    Titel: "Die Top 20 der Besten Manhwa",
    Beschreibung: "loremebd dhdjd dhdnd ddmd dhdnd djdnd ddjd",
    Datum: "Datum: 31.01.2023",
    Verfasser: "Von: MaxManhwa",
   Manhwas:[{Titel:"Solo Leveling",Link:"https://comick.app/comic/solo-leveling",Nummer: "1",Beschriftung:"Vor 10 Jahren, nachdem sich das Tor, das die reale Welt mit der Monsterwelt verband, geöffnet hatte, erhielten einige der gewöhnlichen, alltäglichen Menschen die Macht, Monster innerhalb des Tores zu jagen. Sie sind als Jäger bekannt. Allerdings sind nicht alle Jäger mächtig. Mein Name ist Sung Jin-Woo, ein E-Rang-Jäger. Ich bin jemand, der sein Leben in den niedrigsten Kerkern, den Schwächsten der Welt, riskieren muss. Da ich keinerlei Fähigkeiten zur Schau stellen konnte, verdiente ich kaum das erforderliche Geld, indem ich in niedrigstufigen Dungeons kämpfte... zumindest bis ich einen versteckten Dungeon mit dem schwierigsten Schwierigkeitsgrad innerhalb der D-Rang-Dungeons gefunden habe! Am Ende, als ich den Tod akzeptierte, erhielt ich plötzlich eine seltsame Kraft, ein Quest-Logbuch, das nur ich sehen konnte, ein Geheimnis für den Aufstieg, von dem nur ich weiß! Wenn ich gemäß meinen Quests trainierte und Monster jagte, würde mein Level steigen. Wechsel vom schwächsten Jäger zum stärksten S-Rangjäger!" ,Cover: "https://ik.imagekit.io/idrissa66/Manhwa/solo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160525331", status:"Beendet"
   },{
    Titel:"Damn Reincarnation",Link:"", Nummer: "2",Beschriftung:"Der Krieger Hamel ging mit seinen Gefährten auf ein Abenteuer, um die Dämonenkönige zu besiegen, aber nachdem er kurz vor dem letzten Kampf mit den Dämonenkönigen gestorben war.... Waaah. What the fuck! Er wurde als Nachkomme seines Mitkämpfers Vermouth wiedergeboren. Hamel nein, Eugen Löwenherz wurde mit dem Blut des Großen Wermuts wiedergeboren. Mein früherer Körper hatte genug Talent, um mit einem Genie verwechselt zu werden, aber dieser ... Es gibt einfach keinen Vergleich. Mit einem Körper, der von Anfang an höhere Spezifikationen hatte, zeigte er ein explosives Wachstum, das weit über das hinausging, was er in seinem vorherigen Leben erreicht hatte. Zusammen mit den unbekannten Gründen für seine Reinkarnation kam die unbehagliche Realität, mit Dämonen koexistieren zu müssen. Er war mit einer Welt konfrontiert, die ihn alles in Frage stellen ließ, woran er geglaubt hatte. Seit seiner Geburt mit diesem außergewöhnlichen Körper begabt, beginnt er als Eugen den unvollendeten Weg aus seinem früheren Leben zu gehen.",Cover: "https://ik.imagekit.io/idrissa66/Manhwa/Damnr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160525162",status:"am Laufen"
   },{
    Titel:"Omniscient Reader's Viewpoint",Nummer: "3",Beschriftung:"Dokja war ein durchschnittlicher Büroangestellter, dessen einziges Interesse darin bestand, seinen Lieblings-Webroman Drei Wege, die Apokalypse zu überleben  zu lesen. Doch als der Roman plötzlich Realität wird, ist er der Einzige, der weiß, wie die Welt enden wird. Bewaffnet mit dieser Erkenntnis nutzt Dokja sein Verständnis, um den Verlauf der Geschichte und der Welt, wie er sie kennt, zu verändern.",Cover: "https://ik.imagekit.io/idrissa66/Manhwa/omniscient.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160524948",Link:"",status:"am Laufen"
   },{
    Titel:"Mercenary Enrollment",Nummer: "4",Beschriftung:"Yu Ijin war der einzige Überlebende eines Flugzeugabsturzes, als er klein war. Nachdem er ein Söldner geworden ist, um 10 Jahre zu überleben, kehrt er zu seiner Familie in seine Heimatstadt zurück. Im Alter von acht Jahren verlor Ijin Yu seine Eltern bei einem Flugzeugabsturz und strandete in einem fremden Land, gezwungen, ein Kindersöldner zu werden, um am Leben zu bleiben. Zehn Jahre später kehrt er nach Hause zurück, um mit seiner Familie in Korea vereint zu werden, wo es reichlich Nahrung und Unterkunft gibt und alles friedlich erscheint. Aber Ijin wird bald lernen, dass das Leben als Teenager eine ganz andere Überlebensleistung ist. Mit nur noch einem Jahr High School muss Ijin neue Taktiken beherrschen, um sich auf dem Schlachtfeld des Schulhauses zurechtzufinden. Kann er ein Jahr High School überleben? Oder vielmehr, wird die Schule ihn überleben können?",Cover: "https://ik.imagekit.io/idrissa66/Manhwa/mercenary.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160525004",Link:"",status:"am Laufen"
   },{
    Titel:"Second Life Ranker",Nummer: "5",Beschriftung:"Yeon-woo hatte einen Zwillingsbruder, der vor fünf Jahren verschwand. Eines Tages kehrte eine Taschenuhr, die sein Bruder hinterlassen hatte, in seinen Besitz zurück. Im Inneren fand er ein verstecktes Tagebuch, in dem festgehalten war: Wenn du das hörst, werde ich wohl schon tot sein... Obelisk, der Turm des Sonnengottes, eine Welt, in der sich mehrere Universen und Dimensionen kreuzen. In dieser Welt war sein Bruder dem Verrat zum Opfer gefallen, als er den Turm hinaufkletterte. Nachdem Yeon-woo die Wahrheit erfahren hatte, beschloss er, den Turm zusammen mit dem Tagebuch seines Bruders zu besteigen. Yeon-woo durchläuft dann die gleichen Prüfungen und Kämpfe wie sein jüngerer Bruder als anonymer Spieler. Sein Ziel? Besiege den Obeliskturm und räche dich für seinen Bruder.",Cover: "https://ik.imagekit.io/idrissa66/Manhwa/second.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523528",Link:"",status:"am Laufen"
   },{
    Titel:"Player Who Returned 10,000 Years Later",Nummer: "6",Beschriftung:"Spieler, der 10 000 Jahre später zurückkehrte",Cover: "https://ik.imagekit.io/idrissa66/Manhwa/player.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523665",Link:"",status:"am Laufen"
   },{
    Titel:"The Swordmaster's Son",Nummer: "7",Beschriftung:"Jin Runcandel war der jüngste Sohn von Runcandel, der angesehensten Schwertkämpferfamilie des Landes... Und der größte Misserfolg in der Geschichte von Runcandel. Er, der kläglich rausgeschmissen wurde und zu einem sinnlosen Ende kam, bekam eine weitere Chance. Wie willst du diese Macht nutzen? Ich möchte es für mich nutzen. Erinnerungen an sein vergangenes Leben, überwältigendes Talent und ein Vertrag mit Gott... Die Vorbereitungen, um der Größte zu werden, sind abgeschlossen.",Cover: "https://ik.imagekit.io/idrissa66/Manhwa/theswordmasterson.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523282",Link:"",status:"am Laufen"
   },{
    Titel:"Nano Machine",Nummer: "8",Beschriftung:"Nachdem er verachtet und sein Leben in Gefahr gebracht wurde, hat ein Waisenkind aus dem dämonischen Kult, Cheon Yeo-Woon, unerwarteten Besuch von seinem Nachfahren aus der Zukunft, der eine Nanomaschine in Cheon Yeo-Woons Körper einführt, was Cheon Yeo-Woons Leben nach seiner Aktivierung drastisch verändert. Die Geschichte von Cheon Yeo-Woons Reise, den dämonischen Kult zu umgehen und zum besten Kampfkünstler aufzusteigen, hat gerade erst begonnen.",Cover: "https://ik.imagekit.io/idrissa66/Manhwa/nanomachine.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675161850421",Link:"",status:"am Laufen"
   },{
    Titel:"I’m the Max-Level Newbie",Nummer: "9",Beschriftung:"Jinhyuk, ein Spiel-Nutuber, war die einzige Person, die das Ende des Spiels [Tower of Trials] sah. Als die Popularität des Spiels jedoch abnahm, wurde es schwierig für ihn, weiterhin seinen Lebensunterhalt als Spiele-Nuuber zu verdienen. Da er das Ende des Spiels bereits gesehen hatte, war er kurz davor, mit dem Spielen aufzuhören. Aber an diesem Tag wurde [Tower of Trials] Realität, und Jinhyuk, der über jede einzelne Sache im Spiel Bescheid wusste, übernahm alles schneller als irgendjemand es konnte! Ich zeige dir, wie ein echter Profi ist.",Cover: "https://ik.imagekit.io/idrissa66/Manhwa/imthemaxlevelnewbie.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523261",Link:"",status:""
   },{
    Titel:"The Archmage Returns After 4000 Years",Nummer: "10",Beschriftung:"Lucas Trowman war der größte Erzmagier der Geschichte, bis er von Halbgott dazu verurteilt wurde, die Ewigkeit damit zu verbringen, den Verstand zu verlieren. Aber 4.000 Jahre später wird er in diese Welt zurückgeworfen, in den Körper von Frei Blake, dem schwächsten, untalentiertesten Schüler an der renommierten Westroad Academy für Magier. Nach all dieser Zeit ist die Welt der Magie kaum vorangekommen. Könnte dies das Werk von Demigod sein? Entschlossen, es herauszufinden, versucht Lucas, erneut die höchsten Ebenen der Macht zu erreichen und sich zu rächen.",Cover: "https://ik.imagekit.io/idrissa66/Manhwa/thearchmagereturnafter400yaers.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523161",Link:"",status:""
   },{
    Titel:"The Legend of the Northern Blade",Nummer: "11",Beschriftung:"When the world was plunged into darkness by the Silent Night’, Martial Artists from all over the place gathered to form the ‘Northern Heavenly Sect. With overwhelming strength from the Northern Heavenly Sect, the Silent Night was pushed away and the people began to enjoy peace once more. However, as time passed the martial artists from the mainlands began to conspire against the Northern Heavenly Sect, and eventually caused the death of the Fourth Generation Sect Leader, Jin Kwan-Ho, destroying the sect with it. As everyone left the sect, Jin Kwan-Ho’s only son, Jin Mu-Won was left behind. Mu-Won has never learned anything about martial arts, but he eventually finds the Martial Techniques secretly left behind by his father and begins to acquire the martial arts of the Northern Heavenly Sect. Then one day, a mysterious girl appears before Mu-Won…!!",Cover: "https://ik.imagekit.io/idrissa66/Manhwa/thelegendofnorthernblade.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523139",Link:"",status:""
   },{
    Titel:"Doom Breaker",Nummer: "12",Beschriftung:"When the world was plunged into darkness by the Silent Night’, Martial Artists from all over the place gathered to form the ‘Northern Heavenly Sect. With overwhelming strength from the Northern Heavenly Sect, the Silent Night was pushed away and the people began to enjoy peace once more. However, as time passed the martial artists from the mainlands began to conspire against the Northern Heavenly Sect, and eventually caused the death of the Fourth Generation Sect Leader, Jin Kwan-Ho, destroying the sect with it. As everyone left the sect, Jin Kwan-Ho’s only son, Jin Mu-Won was left behind. Mu-Won has never learned anything about martial arts, but he eventually finds the Martial Techniques secretly left behind by his father and begins to acquire the martial arts of the Northern Heavenly Sect. Then one day, a mysterious girl appears before Mu-Won…!!",Cover: "https://ik.imagekit.io/idrissa66/Manhwa/doobreaker.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523223",Link:"",status:""
   },{
    Titel:"Lookism",Nummer: "13",Beschriftung:"Park Hyung Suk, übergewichtig und unattraktiv, wird täglich gemobbt und missbraucht. Aber ein Wunder steht bevor.",Cover: "https://ik.imagekit.io/idrissa66/Manhwa/lookism.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523074",Link:"",status:""
   },{
    Titel:"Return of the Frozen Player",Nummer: "14",Beschriftung:"5 Jahre nachdem sich die Welt verändert hatte, erschien der Endboss. [Der letzte Boss für das Gebiet Erde, die Frostkönigin, ist erschienen.] Der Endboss! Wenn wir sie einfach besiegen können, wird sich unser Leben wieder normalisieren! Die fünf besten Spieler der Welt, darunter Specter Seo Jun-ho, besiegten schließlich die Frostkönigin... Aber sie fielen in einen tiefen Schlaf. 25 Jahre vergingen. Ein zweiter Stock? Es endete nicht, als die Frostkönigin starb? Spectre erwacht aus seinem Schlaf.",Cover: "https://ik.imagekit.io/idrissa66/Manhwa/thefrozenplayer.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675174589728",Link:""
   },{
    Titel:"How to Fight",Nummer: "15",Beschriftung:"Tauglauf Yoo Hobin wird immer von Schülern gemobbt, die sich ihm überlegen fühlen, aber er ignoriert sie, da sein Leben bereits allzu schwierig ist. Ein unbeabsichtigter Vorfall verändert jedoch sein Leben. Er wird berühmt durch ein virales Video, das er nicht einmal hochladen wollte! Alles ist perfekt! Er wird sofort berühmt und beginnt, Geld mit dem versehentlichen Video zu verdienen, das er hochgeladen hat.Aber da es unbeabsichtigt war, ist er nicht in der Lage, es zu reproduzieren. Angetrieben von dem potenziellen Geld, das verdient werden kann, und seinem plötzlichen Anstieg der Popularität, plant er, fesselndere Videos zu machen, die die Leute interessant finden und ihm helfen, mehr Abonnenten zu gewinnen... Er kann jedoch nichts davon erreichen, wenn er nicht lernt, wie man kämpft.",Cover: "https://ik.imagekit.io/idrissa66/Manhwa/howtofight.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675160523374",Link:"",status:"am Laufen"
   }]
}

}]
module.exports= house;