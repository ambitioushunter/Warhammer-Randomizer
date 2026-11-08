// ==========================================
// TOTAL WAR: WARHAMMER III RANDOMIZER
// RACE AND LEGENDARY LORD DATABASE
// ==========================================

const raceData = {
    "The Empire": [
        "Karl Franz",
        "Balthasar Gelt",
        "Volkmar the Grim",
        "Markus Wulfhart",
        "Elspeth von Draken",
        "Boris Todbringer"
    ],

    "Dwarfs": [
        "Thorgrim Grudgebearer",
        "Ungrim Ironfist",
        "Belegar Ironhammer",
        "Grombrindal",
        "Thorek Ironbrow",
        "Malakai Makaisson"
    ],

    "Greenskins": [
        "Grimgor Ironhide",
        "Azhag the Slaughterer",
        "Wurrzag",
        "Skarsnik",
        "Grom the Paunch",
        "Gorbad Ironclaw"
    ],

    "Vampire Counts": [
        "Mannfred von Carstein",
        "Heinrich Kemmler",
        "Vlad von Carstein",
        "Isabella von Carstein",
        "Helman Ghorst",
        "Neferata"
    ],

    "Warriors of Chaos": [
        "Archaon the Everchosen",
        "Kholek Suneater",
        "Sigvald the Magnificent",
        "Be'lakor",
        "Azazel",
        "Festus the Leechlord",
        "Vilitch the Curseling",
        "Valkia the Bloody",
        "The Glottkin"
    ],

    "Beastmen": [
        "Khazrak the One-Eye",
        "Malagor the Dark Omen",
        "Morghur the Shadowgave",
        "Taurox the Brass Bull"
    ],

    "Wood Elves": [
        "Orion",
        "Durthu",
        "Sisters of Twilight",
        "Drycha"
    ],

    "Bretonnia": [
        "Louen Leoncoeur",
        "Fay Enchantress",
        "Alberic de Bordeleaux",
        "Repanse de Lyonesse"
    ],

    "Norsca": [
        "Wulfrik the Wanderer",
        "Throgg",
        "Sayl the Faithless"
    ],

    "High Elves": [
        "Tyrion",
        "Teclis",
        "Alarielle the Radiant",
        "Alith Anar",
        "Eltharion",
        "Imrik",
        "Aislinn"
    ],

    "Dark Elves": [
        "Malekith",
        "Morathi",
        "Crone Hellebron",
        "Lokhir Fellheart",
        "Malus Darkblade",
        "Rakarth"
    ],

    "Lizardmen": [
        "Lord Mazdamundi",
        "Kroq-Gar",
        "Tiktaq'to",
        "Tehenhauin",
        "Gor-Rok",
        "Nakai the Wanderer",
        "Oxyotl"
    ],

    "Skaven": [
        "Queek Headtaker",
        "Lord Skrolk",
        "Tretch Craventail",
        "Ikit Claw",
        "Deathmaster Snikch",
        "Throt the Unclean",
        "Thanquol"
    ],

    "Tomb Kings": [
        "Settra the Imperishable",
        "High Queen Khalida",
        "Grand Hierophant Khatep",
        "Arkhan the Black"
    ],

    "Vampire Coast": [
        "Luthor Harkon",
        "Count Noctilus",
        "Aranessa Saltspite",
        "Cylostra Direfin"
    ],

    "Kislev": [
        "Tzarina Katarin",
        "Kostaltyn",
        "Boris Ursus",
        "Mother Ostankya"
    ],

    "Grand Cathay": [
        "Miao Ying",
        "Zhao Ming",
        "Yuan Bo",
        "Bhashiva"
    ],

    "Ogre Kingdoms": [
        "Greasus Goldtooth",
        "Skrag the Slaughterer",
        "Golgfag Maneater"
    ],

    "Khorne": [
        "Skarbrand",
        "Skulltaker",
        "Arbaal the Undefeated"
    ],

    "Nurgle": [
        "Ku'gath Plaguefather",
        "Tamurkhan",
        "Epidemius"
    ],

    "Slaanesh": [
        "N'Kari",
        "Dechala",
        "The Masque"
    ],

    "Tzeentch": [
        "Kairos Fateweaver",
        "The Changeling"
    ],

    "Daemons of Chaos": [
        "The Daemon Prince"
    ],

    "Chaos Dwarfs": [
        "Astragoth Ironhand",
        "Drazhoath the Ashen",
        "Zhatan the Black"
    ],

    "Undead Legions": [
        "Nagash"
    ]
};

// ==========================================
// WHEEL SETTINGS
// ==========================================

const races = Object.keys(raceData);

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const spinButton = document.getElementById("spin-button");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

const result = document.getElementById("result");
const stageTitle = document.getElementById("stage-title");
const stageDescription = document.getElementById("stage-description");

const colors = [
    "#71352b",
    "#344a40",
    "#67502e",
    "#343c59",
    "#65442d",
    "#49365b",
    "#6c3030",
    "#36505b"
];

let currentItems = races;
let selectedRace = null;
let selectedLord = null;

let wheelRotation = 0;
let spinning = false;
let stage = "race";

// ==========================================
// WHEEL DRAWING
// ==========================================

function normalizeAngle(angle) {
    return ((angle % (Math.PI * 2)) + Math.PI * 2)
        % (Math.PI * 2);
}

function drawWheel() {
    const center = 300;
    const radius = 285;
    const arc = (Math.PI * 2) / currentItems.length;

    const raceColors = {
        "The Empire": "#8b2929",
        "Dwarfs": "#80602c",
        "Greenskins": "#42652d",
        "Vampire Counts": "#54213b",
        "Warriors of Chaos": "#492d50",
        "Beastmen": "#65452b",
        "Wood Elves": "#315d43",
        "Bretonnia": "#31527a",
        "Norsca": "#52616a",
        "High Elves": "#647c9a",
        "Dark Elves": "#482c60",
        "Lizardmen": "#28766c",
        "Skaven": "#65513a",
        "Tomb Kings": "#b18b3e",
        "Vampire Coast": "#315b68",
        "Kislev": "#426b91",
        "Grand Cathay": "#a33e32",
        "Ogre Kingdoms": "#79543c",
        "Khorne": "#941e20",
        "Nurgle": "#65713b",
        "Slaanesh": "#844d78",
        "Tzeentch": "#315a91",
        "Daemons of Chaos": "#553d72",
        "Chaos Dwarfs": "#743c2c",
        "Undead Legions": "#77613d"
    };

    const raceEmblems = {
        "The Empire": "EMP",
        "Dwarfs": "DWF",
        "Greenskins": "GRN",
        "Vampire Counts": "VC",
        "Warriors of Chaos": "WOC",
        "Beastmen": "BST",
        "Wood Elves": "WE",
        "Bretonnia": "BR",
        "Norsca": "NOR",
        "High Elves": "HE",
        "Dark Elves": "DE",
        "Lizardmen": "LIZ",
        "Skaven": "SKV",
        "Tomb Kings": "TK",
        "Vampire Coast": "VCO",
        "Kislev": "KIS",
        "Grand Cathay": "GC",
        "Ogre Kingdoms": "OG",
        "Khorne": "KHR",
        "Nurgle": "NUR",
        "Slaanesh": "SLA",
        "Tzeentch": "TZE",
        "Daemons of Chaos": "DOC",
        "Chaos Dwarfs": "CD",
        "Undead Legions": "UL"
    };

    ctx.clearRect(0, 0, 600, 600);

    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(wheelRotation);

    currentItems.forEach((item, i) => {
        const start = -Math.PI / 2 - arc / 2 + i * arc;
        const end = start + arc;

        // Draw segment
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, start, end);
        ctx.closePath();

        ctx.fillStyle =
            stage === "race"
                ? raceColors[item] || colors[i % colors.length]
                : colors[i % colors.length];

        ctx.fill();

        // Gold segment borders
        ctx.strokeStyle = "#c4a15c";
        ctx.lineWidth = 3;
        ctx.stroke();

        // Decorative inner border
        ctx.beginPath();
        ctx.arc(0, 0, radius - 9, start, end);
        ctx.strokeStyle = "rgba(235, 199, 125, 0.35)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Segment label
        ctx.save();
        ctx.rotate(start + arc / 2);

        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#fff0d0";

        let fontSize =
            currentItems.length > 20 ? 16 :
                currentItems.length > 12 ? 15 : 18;
                    item.length > 22 ? 11 :
                        item.length > 16 ? 13 : 15;

        ctx.font = `bold ${fontSize}px Georgia`;
        ctx.shadowColor = "#000";
        ctx.shadowBlur = 5;

        ctx.fillText(item, radius - 12, 0);

       

        ctx.restore();
    });

    // Outer decorative ring
    ctx.beginPath();
    ctx.arc(0, 0, radius - 2, 0, Math.PI * 2);
    ctx.strokeStyle = "#e0bd76";
    ctx.lineWidth = 4;
    ctx.stroke();

    // Center medallion
    ctx.beginPath();
    ctx.arc(0, 0, 48, 0, Math.PI * 2);

    const centerGradient = ctx.createRadialGradient(
        -12, -12, 5,
        0, 0, 48
    );

    centerGradient.addColorStop(0, "#76542b");
    centerGradient.addColorStop(0.65, "#352315");
    centerGradient.addColorStop(1, "#100b08");

    ctx.fillStyle = centerGradient;
    ctx.fill();

    ctx.strokeStyle = "#d4ae60";
    ctx.lineWidth = 5;
    ctx.stroke();

    // Center symbol
    const centerSymbol =
        stage === "lord"
            ? raceEmblems[selectedRace] || "✦"
            : "✦";

    ctx.fillStyle = "#e6c477";
    ctx.font = "bold 42px Georgia";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "#e0a83c";
    ctx.shadowBlur = 12;

    ctx.fillText(centerSymbol, 0, 1);

    ctx.restore();
}



// ==========================================
// SPINNING FUNCTION
// ==========================================

function spinWheel() {
    if (spinning) return;

    spinning = true;

    spinButton.disabled = true;
    nextButton.disabled = true;

    result.textContent = "FATE IS DECIDING...";

    const arc = (Math.PI * 2) / currentItems.length;

    const randomIndex = Math.floor(
        Math.random() * currentItems.length
    );

    const extraSpins = 6 + Math.random() * 3;

    const targetRotation =
        wheelRotation +
        extraSpins * Math.PI * 2 +
        normalizeAngle(-randomIndex * arc - wheelRotation);

    const startRotation = wheelRotation;
    const totalRotation = targetRotation - startRotation;

    const duration = 5500;
    const startTime = performance.now();

    function animate(time) {
        const progress = Math.min(
            (time - startTime) / duration,
            1
        );

        const eased = 1 - Math.pow(1 - progress, 4);

        wheelRotation =
            startRotation + totalRotation * eased;

        drawWheel();

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            wheelRotation = normalizeAngle(targetRotation);

            drawWheel();

            spinning = false;
            spinButton.disabled = false;

            const winnerIndex = Math.floor(
                normalizeAngle(-wheelRotation + arc / 2) / arc
            ) % currentItems.length;

            const winner = currentItems[winnerIndex];

            // Race selection
            if (stage === "race") {
                selectedRace = winner;

                result.textContent =
                    "YOUR RACE: " + winner;

                nextButton.disabled = false;
            }

            // Legendary Lord selection
            else {
                selectedLord = winner;

                result.textContent =
                    "YOUR LEGENDARY LORD: " + winner;

                stageTitle.textContent =
                    "YOUR CAMPAIGN AWAITS";

                stageDescription.textContent =
                    selectedRace + " - " + selectedLord;

                spinButton.disabled = false;
                nextButton.disabled = true;
            }
        }
    }

    requestAnimationFrame(animate);
}

// ==========================================
// NEXT BUTTON
// ==========================================

spinButton.addEventListener("click", spinWheel);

nextButton.addEventListener("click", () => {
    if (stage !== "race" || !selectedRace) return;

    stage = "lord";

    currentItems = raceData[selectedRace];

    wheelRotation = 0;

    stageTitle.textContent =
        "CHOOSE YOUR LEGENDARY LORD";

    stageDescription.textContent =
        "YOUR SELECTED RACE: " + selectedRace;

    result.textContent =
        "Ready to choose your Legendary Lord?";

    spinButton.disabled = false;
    nextButton.disabled = true;

    drawWheel();
});

// ==========================================
// START OVER BUTTON
// ==========================================

restartButton.addEventListener("click", () => {
    if (spinning) return;

    stage = "race";

    currentItems = races;

    selectedRace = null;
    selectedLord = null;

    wheelRotation = 0;

    stageTitle.textContent =
        "CHOOSE YOUR RACE";

    stageDescription.textContent =
        "Let fate decide your next campaign.";

    result.textContent =
        "Awaiting the spin...";

    spinButton.disabled = false;
    nextButton.disabled = true;

    drawWheel();
});

// ==========================================
// INITIALIZE
// ==========================================

drawWheel();