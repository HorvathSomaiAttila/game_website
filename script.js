const filterBtns = document.querySelectorAll(".filtergombs button");
const cards = document.querySelectorAll(".card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const tipus = btn.dataset.filter;

        cards.forEach(card => {
            if(tipus === "all" || card.dataset.type === tipus) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    })
});

const beatdownDesc = `
🎮 <strong>Hogyan működik a Beatdown?</strong><br><br>
A beatdown deckek magas elixírköltségű egységekre, erős tankokra, és támogató csapatokra épülnek.<br>
A cél, hogy:<br>
- Előnyt szerezz elixírben (tower trade, king activation, pozitív trade-ek).<br>
- Kivárd a Double/Triple Elixirt, amikor a deck igazán felgyorsul.<br>
- Létrehozz egy masszív pushot egyetlen lane-ben.<br>
- Túlterheld a védelmet, és bedaráld a tornyot.<br><br>
A tank (pl. Golem, Giant, Lava Hound) elszívja a sebzést, miközben mögötte a support egységek szabadon sebzik az ellenfél egységeit és tornyát.<br><br>
🧠 <strong>Beatdown alaptaktikák</strong><br><br>
✔ <strong>1. Tower Trade teljesen elfogadható</strong><br>
Ha az ellenfél gyorsan viszi a toweredet, sokszor jobban jársz, ha:<br>
→ Átnyomod a másik oldalát, és 3-csillaggal nyersz.<br>
Beatdown deckek nagyon erősek tower race-ben.<br><br>
✔ <strong>2. Lane Control</strong><br>
Beatdown deckkel általában ugyanabban a lane-ben támadsz, mint ahol az ellenfél támad.<br>
Miért?<br>
Mindkét push összeér → Te jobban jössz ki, mert a tankod tovább él.<br><br>
✔ <strong>3. Építs meg mindent egy lane-be</strong><br>
Beatdown = koncentrált nyomás.<br>
Split push NEM működik.<br><br>
💪 <strong>Erősségek</strong><br>
Erősség	Miért?<br>
Nagyon erős double/triple elixirben - felgyorsul a támadásépítés<br>
Masszív egy oldali nyomás - nehéz kivédeni, könnyű túlterhelni<br>
Tower trade-ben gyakran jobb - tankok több sebzést visznek be<br>
Jó nagyobb pályákon (tournament standard) - tanknak több ideje van épülni<br>
Sok meta deck ellen stabil - különösen cycle, bait és control ellen<br><br>
❌ <strong>Gyengeségek</strong><br>
Early game-ben gyenge - drága egységek, lassú reakció<br>
Inferno Tower / Inferno Dragon - gyorsan elégetik a tankot<br>
Tornado + splash (Baby D / Wizard / Executioner) - szétszedik a supportot<br>
Két lane-es támadás ellen gyenge - nehéz egyszerre mindkét oldalt fogni<br>
Nagyon gyors cycle deckek - outradelik, mielőtt felépül a push<br>
`;

const baitDesc = `
🎯 <strong>Hogyan működik a Bait?</strong><br><br>
A bait deckek célja, hogy <strong>rászedd az ellenfelet</strong> a rossz időben elhasznált varázslatokra (log, arrows, zap), majd <strong>büntesd</strong> azt egy másik egységgel.<br>
A bait a folyamatos nyomásról, apró sebzésekről és az ellenfél hibáinak kihasználásáról szól.<br><br>
A legismertebb példák:<br>
- Log Bait (Goblin Barrel, Princess, Goblin Gang)<br>
- Arrows Bait (Minion Horde, Skarmy)<br>
- Spell Cycle + Chip Damage variánsok<br><br>
🧠 <strong>Bait alaptaktikák</strong><br><br>
✔ <strong>1. Kényszerítsd ki a spelljeit</strong><br>
Használj több olyan egységet, amire ugyanazt a spell-t játszaná ki.<br>
Pl.: Ha Log-ot használ a Goblin Gang ellen, mehet utána Goblin Barrel – biztos sebzés.<br><br>
✔ <strong>2. Folyamatos chip damage</strong><br>
A bait deck <strong>nem nagy pushokra épül</strong>, hanem apró sebzésekre.<br>
Barrel, Princess, vagy egy gyors counterpush szépen összeadódik.<br><br>
✔ <strong>3. Kontrolláld a tempót</strong><br>
Bait deckkel <strong>te diktálod a ritmust</strong>: gyorsan forog, sok kis egységgel támadsz.<br>
Ha az ellenfél túldrágázza magát – azonnal büntetni kell.<br><br>
💪 <strong>Erősségek</strong><br>
Erősség - Miért?<br>
Gyors sebzés chipből - a Barrel/Princess nagyon állandó damage-et biztosít<br>
Olcsó cycle - könnyű kontrollálni a meccs ütemét<br>
Sok helyzetet büntet - ha elhasználja a varázslatát, azonnal sebzel<br>
Erős tiltott spell matchupokban - ha kettő spell kellene, de csak egy van nála<br>
Jól működik ladderen és tourney-ben is - stabil stratégia<br><br>
❌ <strong>Gyengeségek</strong><br>
Két spell ellen gyengül - pl.: Log + Arrows<br>
Heavy splash deckek ellen nehezebb (Valkyrie, Wizard, Bomber)<br>
Gyors tower race-ben hátrányban lehet Giant/Lava ellen<br>
Precizitást igényel – rossz Barrel helyre könnyen reagálnak<br>
Predictive spell-ek megfoghatják a kulcskártyákat<br>
`;

const cycleDesc = `
⚡ <strong>Hogyan működik a Cycle deck?</strong><br><br>
A cycle deck lényege, hogy <strong>nagyon gyorsan körbeforog</strong> a pakli (2.6 Hog, Miner Cycle stb.), így szinte mindig te irányítod a meccs ritmusát.<br>
Olcsó egységekkel védekezel, majd gyorsan indítasz egy újabb támadást.<br><br>
Fő koncepció: <strong>olcsó lapok → gyors körforgás → állandó nyomás</strong><br><br>
🧠 <strong>Cycle alaptaktikák</strong><br><br>
✔ <strong>1. Kontrolláld az elixírt</strong><br>
Olcsó lapokkal mindig +elixir trade-re törekszel.<br>
Ha az ellenfél tankot tesz le, te már kétszer megtámadtad közben.<br><br>
✔ <strong>2. Chip damage a fő sebzésforrás</strong><br>
Hog hit, Miner hit, Spear Goblin csípés – ezek összeadódnak.<br>
A cycle deck nem egy nagy push-ból nyer, hanem 8–12 kisebbből.<br><br>
✔ <strong>3. Tempó és döntéshozás</strong><br>
Cycle deckkel te döntöd el, mikor van játék.<br>
Ha visszafogod a tempót → kontroll mód.<br>
Ha gyorsítasz → az ellenfél nem tud lépést tartani.<br><br>
💪 <strong>Erősségek</strong><br>
Erősség - Miért?<br>
Nagyon olcsó átlagköltség - gyorsabb körforgás minden más decknél<br>
Állandó nyomás a pályán - az ellenfél ritkán indíthat nagy támadást<br>
Erős chip damage-ről szól - biztonságos, kevés kockázattal jár<br>
Jó a nagy és lassú deckek ellen - Golem, Lava, Giant<br>
Megtanítja a game sense-t - a legjobb tanuló deck típus<br><br>
❌ <strong>Gyengeségek</strong><br>
Sérülékeny splash ellen (Valkyrie, Wizard, Bomber)<br>
Ha az ellenfél countereli a win conditiont (pl. Tornado + Hog) nehéz áttörni<br>
Kevesebb nyers erő – ha hátrányba kerülsz, nehéz visszajönni<br>
Pontos mikrotudást igényel – rossz helyezés = counterpush veszély<br>
Két lane-es nyomás ellen néha kifut az elixírből<br>
`;

const siegeDesc = `
🏰 <strong>Hogyan működik a Siege?</strong><br><br>
A Siege deckek (pl. X-Bow, Mortar) lényege, hogy <strong>távolról támadják a tornyot</strong> anélkül, hogy az ellenfél elérné őket.<br>
A cél, hogy a win condition-öd (X-Bow vagy Mortar) addig éljen, amíg <strong>több sebzést visz be, mint amennyit meg tudnának állítani</strong>.<br><br>
A Siege játékstílus inkább <strong>türelem, kontroll, és precíz elixírkezelés</strong> – nem masszív pushra épít, hanem pozícióharcra.<br><br>
🧠 <strong>Siege alaptaktikák</strong><br><br>
✔ <strong>1. Helyezkedés és időzítés</strong><br>
X-Bow-t akkor rakd le, amikor:<br>
- Előnyöd van elixírben<br>
- Az ellenfél tankja épp nem kézben van<br>
- A pálya másik oldalára nyomást gyakoroltál<br><br>
✔ <strong>2. Védő X-Bow / Mortar</strong><br>
Ha hátrányban vagy, Siege deckkel gyakori a <strong>defenzív win condition</strong> használat.<br>
Az X-Bow védi a tornyodat, miközben te újra cycle-ölsz a támadó verzióra.<br><br>
✔ <strong>3. Chip damage és spell cycle</strong><br>
Nincs mindig szükség arra, hogy a siege épület eltalálja a tornyot.<br>
Ha sokszor kivéded az ellenfél pushait → előnyöd lesz.<br><br>
💪 <strong>Erősségek</strong><br>
Erősség - Miért?<br>
Erős kontroll meccsekben - az ellenfél pushai folyamatosan falba ütköznek<br>
Biztonságos játékmód - ritkán kell kockáztatni<br>
Spell cycle-lal megnyerhető - fireball/log gyakran eldönti<br>
Sok meta deck ellen counter - Giant/Lava túl lassú ellene<br>
Kiváló tornamenten - kiszámítható, precíz játékstílus<br><br>
❌ <strong>Gyengeségek</strong><br>
Gyenge két lane-es támadás ellen<br>
Gyors Cycle deckek át tudják pörgetni a tankot<br>
Erős splash + tank kombinációk (Valkyrie, Bowler, Knight)<br>
Predictive fireball/log ellene játszható<br>
Nagy nyomást nehezen kezel double elixirben<br>
`;

const bridgeSpamDesc = `
⚔️ <strong>Hogyan működik a Bridge Spam?</strong><br><br>
A Bridge Spam deckek (pl. Bandit, Battle Ram, Dark Prince, Ghost) lényege, hogy <strong>azonnal a hídnál indítasz támadásokat</strong>, így az ellenfélnek nincs ideje felkészülni.<br>
A cél: <strong>meglepetésszerű nyomás</strong> + gyors counterpush + folyamatos kényszerítés a hídnál.<br><br>
A deck tempója magas, sok 3–4 elixír költségű egységet használ, és erős a pályakontrollban.<br><br>
🧠 <strong>Bridge Spam alaptaktikák</strong><br><br>
✔ <strong>1. Kényszerítsd hibára az ellenfelet</strong><br>
A folyamatos hídnál indított támadások miatt az ellenfél:<br>
- gyakran túlköltekezik,<br>
- rosszul időzíti a védelmét,<br>
- counterpush nélkül marad.<br><br>
✔ <strong>2. Counterpush a kulcs</strong><br>
A Bridge Spam deckek igazi ereje abból jön, amikor <strong>megvéded az egységedet</strong>, majd azonnal visszatámadsz a hídnál.<br><br>
✔ <strong>3. Pressure két lane-ben</strong><br>
Bridge spam deckek kiválóak <strong>két lane-es támadásban</strong>, mivel olcsók és mobilisak.<br>
Ez különösen hatékony beatdown ellen.<br><br>
💪 <strong>Erősségek</strong><br>
Erősség - Miért?<br>
Gyors tempó - az ellenfél nem tud kényelmesen pusholni<br>
Counterpush orientált - megvédett egységek hatalmas értéket teremtenek<br>
Erős két lane-es nyomás - jól alkalmazkodik minden helyzethez<br>
Mobilitás és sok utility - Bandit dodge, Ghost stealth, Battle Ram charge<br>
Jól countereli a lassú deckeket - Golem, Lava, Giant<br><br>
❌ <strong>Gyengeségek</strong><br>
Splash damage (Valkyrie, Bowler, Wizard) erős ellenük<br>
Olcsó Cycle deckek kivédik és visszaforgatják<br>
Ha hátrányba kerülsz, nehéz visszajönni<br>
Predictive spells megfogják a Bandit/Ghost értékét<br>
Nincs erős win condition – chip damage + counterpush kell<br>
`;

const deckscriptions = {
  beatdown: {
    title: "Beatdown Deck",
    desc: beatdownDesc
  },
  bait: {
    title: "Bait Deck",
    desc: baitDesc
  },
  cycle: {
    title: "Cycle Deck",
    desc: cycleDesc
  },
  siege: {
    title: "Siege Deck",
    desc: siegeDesc
  },
  "bridge-spam": {
    title: "Bridge Spam",
    desc: bridgeSpamDesc
  }
};

const decks = document.querySelectorAll(".deck");

decks.forEach(deck => {
    deck.addEventListener("click", () => {
        const type = deck.dataset.type;
        const data = deckscriptions[type];

        document.getElementById("deck-title").textContent = data.title;
        document.getElementById("deckscription").innerHTML = data.desc;
    })
})