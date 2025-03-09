// Namespace Configuration Values
export const HM3 = {};

// ASCII Artwork
HM3.ASCII = `_   _ ___  ___ _____ 
| | | ||  \\/  ||____ |
| |_| || .  . |    / /
|  _  || |\\/| |    \\ \\
| | | || |  | |.___/ /
\\_| |_/\\_|  |_/\\____/`;

// When the system is fully ready, set this to true
HM3.ready = false;

HM3.allowedActorFlags = [];

HM3.allowedAspects = ['Edged', 'Piercing', 'Blunt'];

HM3.allowedRanges = ['Short', 'Medium', 'Long', 'Extreme'];

HM3.skillTypes = ["Craft", "Physical", "Communication", "Combat", "Magic", "Ritual"];

HM3.traitTypes = ["Physical", "Psyche"];

HM3.ITEM_TYPE_LABEL = {
    skill: { singular: 'Skill', plural: 'Skills' },
    spell: { singular: 'Spell', plural: 'Spells' },
    weapongear: { singular: 'Melee Weapon', plural: 'Melee Weapons' },
    missilegear: { singular: 'Missile', plural: 'Missiles' },
    armorgear: { singular: 'Armor', plural: 'Armor' },
    miscgear: { singular: 'Misc Item', plural: 'Misc Items' },
    containergear: { singular: 'Container', plural: 'Containers' },
    injury: { singular: 'Injury', plural: 'Injuries' },
    armorlocation: { singular: 'Armor Location', plural: 'Armor Locations' },
    trait: { singular: 'Trait', plural: 'Traits' },
    psionic: { singular: 'Psionic', plural: 'Psionics' },
    incantation: { singular: 'Ritual Incantation', plural: 'Ritual Incantations' },
};

HM3.sunsigns = ['Tollan', 'Tollan-Dorma', 'Dorma', 'Dorma-Ariala', 'Ariala', 'Ariala-Caelaz',
    'Caelaz', 'Caelaz-Torka', 'Torka', 'Torka-Anzor', 'Anzor', 'Anzor-Quindor',
    'Quindor', 'Quindor-Zhone', 'Zhone', 'Zhone-Syrada', 'Syrada', 'Syrada-Izballa', 'Izballa',
    'Izballa-Gordol', 'Gordol', 'Gordol-Aramos', 'Aramos', 'Aramos-Tollan',
    'Chuán', 'Chuán-Shushi', 'Shushi', 'Shushi-Boru', 'Boru', 'Boru-Sanyang',
    'Sanyang', 'Sanyang-Yari', 'Yari', 'Yari-Shirdun', 'Shirdun', 
    'Shirdun-Feniku', 'Feniku', 'Feniku-Yong', 'Yong', 'Yong-Jig-won', 'Jig-won', 'Jig-won-Zosan-shi',
    'Zosan-shi', 'Zosan-shi-Ying', 'Ying', 'Ying-Lengjing', 'Lengjing', 'Lengjing-Chuán',];

HM3.defaultCharacterSkills = [
    'Climbing', 'Jumping', 'Stealth', 'Throwing', 'Awareness', 'Intrigue', 'Oratory', 'Rhetoric', 'Singing',
    'Initiative', 'Unarmed', 'Dodge'];

HM3.defaultCreatureSkills = ['Awareness', 'Initiative', 'Unarmed', 'Dodge'];

HM3.injuryLocations = {
    "Custom": { impactType: "custom", probWeight: { "high": 1, "mid": 1, "low": 1 }, isStumble: false, isFumble: false, isAmputate: false, effectiveImpact: { ei1: "M1", ei5: "S2", ei9: "S3", ei13: "G4", ei17: "G5" } },
    "Skull": { impactType: "skull", probWeight: { "high": 150, "mid": 50, "low": 0 }, isStumble: false, isFumble: false, isAmputate: false, effectiveImpact: { ei1: "M1", ei5: "S2", ei9: "S3", ei13: "K4", ei17: "K5" } },
    "Face": { impactType: "face", probWeight: { "high": 150, "mid": 50, "low": 0 }, isStumble: false, isFumble: false, isAmputate: false, effectiveImpact: { ei1: "M1", ei5: "S2", ei9: "S3", ei13: "G4", ei17: "K5" } },
    "Neck": { impactType: "neck", probWeight: { "high": 150, "mid": 50, "low": 0 }, isStumble: false, isFumble: false, isAmputate: true, effectiveImpact: { ei1: "M1", ei5: "S2", ei9: "S3", ei13: "K4", ei17: "K5" } },
    "Shoulder": { impactType: "shoulder", probWeight: { "high": 60, "mid": 60, "low": 0 }, isStumble: false, isFumble: true, isAmputate: false, effectiveImpact: { ei1: "M1", ei5: "S2", ei9: "S3", ei13: "G4", ei17: "K4" } },
    "Upper Arm": { impactType: "upperarm", probWeight: { "high": 60, "mid": 30, "low": 0 }, isStumble: false, isFumble: true, isAmputate: true, effectiveImpact: { ei1: "M1", ei5: "M1", ei9: "S2", ei13: "S3", ei17: "G4" } },
    "Elbow": { impactType: "elbow", probWeight: { "high": 20, "mid": 10, "low": 0 }, isStumble: false, isFumble: true, isAmputate: true, effectiveImpact: { ei1: "M1", ei5: "S2", ei9: "S3", ei13: "G4", ei17: "G5" } },
    "Forearm": { impactType: "forearm", probWeight: { "high": 40, "mid": 20, "low": 30 }, isStumble: false, isFumble: true, isAmputate: true, effectiveImpact: { ei1: "M1", ei5: "M1", ei9: "S2", ei13: "S3", ei17: "G4" } },
    "Hand": { impactType: "hand", probWeight: { "high": 20, "mid": 20, "low": 30 }, isStumble: false, isFumble: true, isAmputate: true, effectiveImpact: { ei1: "M1", ei5: "S2", ei9: "S3", ei13: "G4", ei17: "G5" } },
    "Thorax": { impactType: "thorax", probWeight: { "high": 100, "mid": 170, "low": 70 }, isStumble: false, isFumble: false, isAmputate: false, effectiveImpact: { ei1: "M1", ei5: "S2", ei9: "S3", ei13: "G4", ei17: "K5" } },
    "Abdomen": { impactType: "abdomen", probWeight: { "high": 60, "mid": 100, "low": 100 }, isStumble: false, isFumble: false, isAmputate: false, effectiveImpact: { ei1: "M1", ei5: "S2", ei9: "S3", ei13: "K4", ei17: "K5" } },
    "Groin": { impactType: "groin", probWeight: { "high": 0, "mid": 40, "low": 60 }, isStumble: false, isFumble: false, isAmputate: true, effectiveImpact: { ei1: "M1", ei5: "S2", ei9: "S3", ei13: "G4", ei17: "G5" } },
    "Hip": { impactType: "hip", probWeight: { "high": 0, "mid": 30, "low": 70 }, isStumble: true, isFumble: false, isAmputate: false, effectiveImpact: { ei1: "M1", ei5: "S2", ei9: "S3", ei13: "G4", ei17: "K4" } },
    "Thigh": { impactType: "thigh", probWeight: { "high": 0, "mid": 40, "low": 100 }, isStumble: true, isFumble: false, isAmputate: true, effectiveImpact: { ei1: "M1", ei5: "S2", ei9: "S3", ei13: "G4", ei17: "K4" } },
    "Knee": { impactType: "knee", probWeight: { "high": 0, "mid": 10, "low": 40 }, isStumble: true, isFumble: false, isAmputate: true, effectiveImpact: { ei1: "M1", ei5: "S2", ei9: "S3", ei13: "G4", ei17: "G5" } },
    "Calf": { impactType: "calf", probWeight: { "high": 0, "mid": 30, "low": 70 }, isStumble: true, isFumble: false, isAmputate: true, effectiveImpact: { ei1: "M1", ei5: "M1", ei9: "S2", ei13: "S3", ei17: "G4" } },
    "Foot": { impactType: "foot", probWeight: { "high": 0, "mid": 20, "low": 40 }, isStumble: true, isFumble: false, isAmputate: true, effectiveImpact: { ei1: "M1", ei5: "S2", ei9: "S3", ei13: "G4", ei17: "G5" } },
    "Wing": { impactType: "wing", probWeight: { "high": 150, "mid": 50, "low": 0 }, isStumble: false, isFumble: true, isAmputate: true, effectiveImpact: { ei1: "M1", ei5: "S2", ei9: "S3", ei13: "G4", ei17: "G5" } },
    "Tentacle": { impactType: "tentacle", probWeight: { "high": 50, "mid": 150, "low": 0 }, isStumble: false, isFumble: true, isAmputate: true, effectiveImpact: { ei1: "M1", ei5: "M1", ei9: "S2", ei13: "S3", ei17: "G4" } },
    "Tail": { impactType: "tail", probWeight: { "high": 0, "mid": 50, "low": 100 }, isStumble: true, isFumble: false, isAmputate: true, effectiveImpact: { ei1: "M1", ei5: "M1", ei9: "S2", ei13: "S3", ei17: "G4" } }
};

HM3.stdSkills = {
    "Sword": { "source": "HM3 Skills 19", "skillBase": { "formula": "@str, @dex, @dex, Aramos:3, Lengjing:3, Izballa, Zosan-shi, Caelaz, Sanyang" }, "type": "Combat" },
    "Axe": { "source": "HM3 Skills 19", "skillBase": { "formula": "@str, @str, @dex, Izballa, Zosan-shi, Anzor, Shirdun, Aramos, Lengjing" }, "type": "Combat" },
    "Bow": { "source": "HM3 Skills 19", "skillBase": { "formula": "@str, @dex, @eye, Gordol, Ying, Torka, Yari, Caelaz, Sanyang" }, "type": "Combat" },
    "Crossbow": { "source": "HM3 Skills 19", "skillBase": { "formula": "@dex, @eye, @tch, Gordol, Ying, Caelaz, Sanyang, Anzor, Shirdun" }, "type": "Combat" },
    "Shield": { "source": "HM3 Skills 19", "skillBase": { "formula": "@str, @dex, @dex, Syrada, Jig-won, Tollan, Chuán, Dorma, Shuchi" }, "type": "Combat" },
    "Flail": { "source": "HM3 Skills 19", "skillBase": { "formula": "@dex, @dex, @dex, Gordol, Ying, Torka, Yari, Caelaz, Sanyang" }, "type": "Combat" },
    "Sling": { "source": "HM3 Skills 19", "skillBase": { "formula": "@dex, @dex, @eye, Gordol, Ying, Torka, Yari, Caelaz, Sanyang" }, "type": "Combat" },
    "Riding": { "source": "HM3 Skills 18", "skillBase": { "formula": "@dex, @agl, @wil, Syrada, Jig-won, Ariala, Boru" }, "type": "Combat" },
    "Initiative": { "source": "HM3 Skills 18", "skillBase": { "formula": "@agl, @spd, @wil, Zhone, Yong, Quindor, Feniku, Syrada, Jig-won" }, "type": "Combat" },
    "Unarmed": { "source": "HM3 Skills 18", "skillBase": { "formula": "@str, @dex, @agl, Dorma:2, Shuchi:2, Tollan:2, Chuán:2, Syrada:2, Jig-won:2" }, "type": "Combat" },
    "Polearm": { "source": "HM3 Skills 19", "skillBase": { "formula": "@str, @str, @dex, Aramos, Lengjing, Ariala, Boru" }, "type": "Combat" },
    "Dagger": { "source": "HM3 Skills 19", "skillBase": { "formula": "@dex, @dex, @eye, Aramos:2, Lengjing:2, Caelaz:2, Sanyang:2" }, "type": "Combat" },
    "Blowgun": { "source": "HM3 Skills 19", "skillBase": { "formula": "@sta, @dex, @eye, Gordol:2, Ying:2, Torka, Yari, Caelaz, Sanyang" }, "type": "Combat" },
    "Spear": { "source": "HM3 Skills 19", "skillBase": { "formula": "@str, @str, @dex, Ariala, Boru, Anzor, Shirdun, Syrada, Jig-won" }, "type": "Combat" },
    "Net": { "source": "HM3 Skills 19", "skillBase": { "formula": "@dex, @dex, @eye, Dorma, Shuchi, Quindor, Feniku, Tollan, Chuán" }, "type": "Combat" },
    "Club": { "source": "HM3 Skills 19", "skillBase": { "formula": "@str, @str, @dex, Syrada, Jig-won, Ariala, Boru" }, "type": "Combat" },
    "Whip": { "source": "HM3 Skills 19", "skillBase": { "formula": "@dex, @dex, @eye, Gordol, Ying, Caelaz, Sanyang" }, "type": "Combat" },
    "Dodge": { "source": "HM3 Skills 21", "skillBase": { "formula": "@agl, @agl, @spd, Ariala, Boru, Gordol, Ying, Izballa, Zosan-shi" }, "type": "Combat" },
    "Acting": { "source": "HM3 Skills 11", "skillBase": { "formula": "@agl, @voi, @int, Torka, Yari, Zhone, Yong" }, "type": "Communication" },
    "Intrigue": { "source": "HM3 Skills 11", "skillBase": { "formula": "@int, @aur, @wil, Zhone, Yong, Torka, Yari, Quindor, Feniku" }, "type": "Communication" },
    "Awareness": { "source": "HM3 Skills 11", "skillBase": { "formula": "@eye, @hrg, @sml, Gordol:2, Ying:2, Torka:2, Yari:2" }, "type": "Communication" },
    "Oratory": { "source": "HM3 Skills 12", "skillBase": { "formula": "@cml, @voi, @int, Torka, Yari" }, "type": "Communication" },
    "Script": { "source": "HM3 Skills 11", "skillBase": { "formula": "@dex, @eye, @int, Torka, Yari, Zhone, Yong" }, "type": "Communication" },
    "Rhetoric": { "source": "HM3 Skills 12", "skillBase": { "formula": "@voi, @int, @wil, Zhone, Yong, Torka, Yari, Quindor, Feniku" }, "type": "Communication" },
    "Language": { "source": "HM3 Skills 10", "skillBase": { "formula": "@voi, @int, @wil, Zhone, Yong" }, "type": "Communication" },
    "Musician": { "source": "HM3 Skills 12", "skillBase": { "formula": "@dex, @hrg, @tch, Dorma, Shuchi, Aramos, Lengjing" }, "type": "Communication" },
    "Mental Conflict": { "source": "HM3 Skills 12", "skillBase": { "formula": "@aur, @wil, @wil" }, "type": "Communication" },
    "Singing": { "source": "HM3 Skills 12", "skillBase": { "formula": "@hrg, @voi, @voi, Dorma, Shuchi" }, "type": "Communication" },
    "Lovecraft": { "source": "HM3 Skills 11", "skillBase": { "formula": "@cml, @tch, @voi, Dorma, Shuchi, Aramos, Lengjing" }, "type": "Communication" },
    "Physician": { "source": "HM3 Skills 17", "skillBase": { "formula": "@tch, @eye, @int, Dorma:2, Shuchi:2, Quindor, Feniku, Zhone, Yong" }, "type": "Craft" },
    "Fishing": { "source": "HM3 Skills 14", "skillBase": { "formula": "@dex, @tch, @wil, Dorma:2, Shuchi:2, Tollan:2, Chuán:2" }, "type": "Craft" },
    "Survival": { "source": "HM3 Skills 17", "skillBase": { "formula": "@str, @dex, @int, Syrada:2, Jig-won:2, Ariala, Boru" }, "type": "Craft" },
    "Foraging": { "source": "HM3 Skills 15", "skillBase": { "formula": "@dex, @sml, @int, Syrada:2, Jig-won:2, Ariala:2, Boru:2" }, "type": "Craft" },
    "Mathematics": { "source": "HM3 Skills 16", "skillBase": { "formula": "@int, @int, @wil, Zhone:3, Yong:3, Torka, Yari, Quindor, Feniku" }, "type": "Craft" },
    "Folklore": { "source": "HM3 Skills 15", "skillBase": { "formula": "@voi, @int, @int, Zhone:2, Yong:2" }, "type": "Craft" },
    "Jewelcraft": { "source": "HM3 Skills 16", "skillBase": { "formula": "@tch, @eye, @wil, Anzor:3, Shirdun:3, Torka, Yari, Ariala, Boru" }, "type": "Craft" },
    "Tracking": { "source": "HM3 Skills 17", "skillBase": { "formula": "@eye, @sml, @hrg, Syrada:3, Jig-won:3, Ariala:3, Boru:3" }, "type": "Craft" },
    "Hunting": { "source": "HM3 Skills 16", "skillBase": { "formula": "@agl, @sml, @int, Syrada:2, Jig-won:2, Ariala:2, Boru:2" }, "type": "Craft" },
    "Law": { "source": "HM3 Skills 16", "skillBase": { "formula": "@voi, @int, @wil, Torka, Yari, Zhone, Yong" }, "type": "Craft" },
    "Weaponcraft": { "source": "HM3 Skills 17", "skillBase": { "formula": "@str, @dex, @tch, Anzor:3, Shirdun:3, Izballa, Zosan-shi, Aramos, Lengjing" }, "type": "Craft" },
    "Mining": { "source": "HM3 Skills 16", "skillBase": { "formula": "@str, @eye, @int, Syrada:2, Jig-won:2, Ariala:2, Boru:2, Anzor, Shirdun" }, "type": "Craft" },
    "Metalcraft": { "source": "HM3 Skills 16", "skillBase": { "formula": "@str, @dex, @tch, Anzor:3, Shirdun:3, Izballa, Zosan-shi, Aramos, Lengjing" }, "type": "Craft" },
    "Ceramics": { "source": "HM3 Skills 13", "skillBase": { "formula": "@dex, @tch, @tch, Syrada:2, Jig-won:2, Ariala:2, Boru:2" }, "type": "Craft" },
    "Carpentry": { "source": "HM3 Skills 13", "skillBase": { "formula": "@str, @dex, @tch, Caelaz:2, Sanyang:2, Torka, Tollan" }, "type": "Craft" },
    "Carving": { "source": "HM3 Skills 13", "skillBase": { "formula": "@dex, @tch, @wil, Caelaz:3, Sanyang:3, Torka, Tollan" }, "type": "Craft" },
    "Runecraft": { "source": "HM3 Skills 17", "skillBase": { "formula": "@int, @aur, @aur, Zhone:2, Yong:2, Quindor, Feniku" }, "type": "Craft" },
    "Tarotry": { "source": "HM3 Skills 17", "skillBase": { "formula": "@int, @aur, @wil, Torka:2, Yari:2, Zhone:2, Yong:2, Quindor, Feniku, Gordol, Ying" }, "type": "Craft" },
    "Perfumery": { "source": "HM3 Skills 16", "skillBase": { "formula": "@sml, @sml, @int, Gordol, Ying, Quindor, Feniku, Torka, Yari" }, "type": "Craft" },
    "Fletching": { "source": "HM3 Skills 15", "skillBase": { "formula": "@dex, @tch, @tch, Gordol:2, Ying:2, Torka, Yari, Caelaz, Sanyang" }, "type": "Craft" },
    "Piloting": { "source": "HM3 Skills 17", "skillBase": { "formula": "@tch, @eye, @int, Tollan:3, Chuán:3, Dorma, Shuchi" }, "type": "Craft" },
    "Weatherlore": { "source": "HM3 Skills 17", "skillBase": { "formula": "@int, @eye, @sml, Gordol, Ying, Torka, Yari, Dorma, Shuchi, Tollan, Chuán" }, "type": "Craft" },
    "Engineering": { "source": "HM3 Skills 14", "skillBase": { "formula": "@dex, @int, @int, Syrada:2, Jig-won:2, Ariala:2, Boru:2, Anzor, Shirdun" }, "type": "Craft" },
    "Embalming": { "source": "HM3 Skills 14", "skillBase": { "formula": "@dex, @tch, @sml, Quindor, Feniku, Syrada, Jig-won" }, "type": "Craft" },
    "Brewing": { "source": "HM3 Skills 13", "skillBase": { "formula": "@tch, @sml, @sml, Quindor:3, Feniku:3, Zhone:2, Yong:2, Dorma:2, Shuchi:2" }, "type": "Craft" },
    "Lockcraft": { "source": "HM3 Skills 16", "skillBase": { "formula": "@dex, @tch, @wil, Anzor, Shirdun" }, "type": "Craft" },
    "Masonry": { "source": "HM3 Skills 16", "skillBase": { "formula": "@str, @dex, @tch, Syrada:2, Jig-won:2, Ariala:2, Boru:2" }, "type": "Craft" },
    "Textilecraft": { "source": "HM3 Skills 17", "skillBase": { "formula": "@tch, @dex, @eye, Syrada, Jig-won, Ariala, Boru" }, "type": "Craft" },
    "Cookery": { "source": "HM3 Skills 13", "skillBase": { "formula": "@tch, @sml, @sml, Quindor, Feniku" }, "type": "Craft" },
    "Lore": { "source": "HM3 Skills 16", "skillBase": { "formula": "@eye, @int, @int, Zhone:2, Yong:2" }, "type": "Craft" },
    "Drawing": { "source": "HM3 Skills 13", "skillBase": { "formula": "@tch, @eye, @eye, Quindor, Feniku, Zhone, Yong" }, "type": "Craft" },
    "Alchemy": { "source": "HM3 Skills 13", "skillBase": { "formula": "@sml, @int, @aur, Quindor:3, Feniku:3, Zhone:2, Yong:2, Dorma:2, Shuchi:2" }, "type": "Craft" },
    "Milling": { "source": "HM3 Skills 16", "skillBase": { "formula": "@str, @tch, @sml, Syrada, Jig-won" }, "type": "Craft" },
    "Timbercraft": { "source": "HM3 Skills 17", "skillBase": { "formula": "@str, @dex, @agl, Syrada:3, Jig-won:3, Ariala, Boru" }, "type": "Craft" },
    "Hidework": { "source": "HM3 Skills 15", "skillBase": { "formula": "@dex, @sml, @tch, Syrada, Jig-won, Ariala, Boru" }, "type": "Craft" },
    "Shipwright": { "source": "HM3 Skills 17", "skillBase": { "formula": "@str, @dex, @int, Tollan:3, Chuán:3, Dorma, Shuchi" }, "type": "Craft" },
    "Astrology": { "source": "HM3 Skills 13", "skillBase": { "formula": "@eye, @int, @aur, Ariala, Boru" }, "type": "Craft" },
    "Woodcraft": { "source": "HM3 Skills 17", "skillBase": { "formula": "@dex, @dex, @wil, Syrada:2, Jig-won:2, Ariala, Boru, Tollan, Chuán" }, "type": "Craft" },
    "Herblore": { "source": "HM3 Skills 15", "skillBase": { "formula": "@eye, @sml, @int, Syrada:3, Jig-won:3, Ariala:2, Boru:2" }, "type": "Craft" },
    "Inkcraft": { "source": "HM3 Skills 16", "skillBase": { "formula": "@eye, @sml, @int, Quindor:2, Feniku:2, Zhone, Yong" }, "type": "Craft" },
    "Heraldry": { "source": "HM3 Skills 15", "skillBase": { "formula": "@tch, @eye, @wil, Quindor, Feniku, Zhone, Yong" }, "type": "Craft" },
    "Animalcraft": { "source": "HM3 Skills 13", "skillBase": { "formula": "@agl, @voi, @wil, Syrada, Jig-won, Ariala, Boru" }, "type": "Craft" },
    "Seamanship": { "source": "HM3 Skills 17", "skillBase": { "formula": "@str, @dex, @agl, Tollan:3, Chuán:3, Dorma, Shuchi, Quindor, Feniku" }, "type": "Craft" },
    "Glassworking": { "source": "HM3 Skills 15", "skillBase": { "formula": "@dex, @dex, @tch, Anzor:2, Shirdun:2" }, "type": "Craft" },
    "Agriculture": { "source": "HM3 Skills 13", "skillBase": { "formula": "@str, @sta, @wil, Syrada:2, Jig-won:2, Ariala:2, Boru:2" }, "type": "Craft" },
    "Vularu": { "source": "HM Magic, Shek-Pvar 6", "skillBase": { "formula": "@aur, @aur, @eye, Syrada:-3, Jig-won:-3, Ariala:-2, Boru:-2, Anzor:-1, Shirdun-1, Aramos, Lengjing, Caelaz:2, Sanyang:2, Gordol:3, Ying:3, Torka:2, Yari:2, Zhone, Yong, Dorma:-1, Shuchi:-1, Tollan:-2, Chuán:-2" }, "type": "Magic" },
    "Xavar’na": { "source": "HM Magic, Shek-pvar 6", "skillBase": { "formula": "@aur, @aur, @int, Syrada:-1, Jig-won:-1, Ariala:-2, Boru:-2, Anzor:-3, Shirdun:-3, Izballa:-2, Zosan-shi:-2, Aramos:-1, Lengjing:-1, Gordol:1, Torka:2, Yari:2, Zhone:3, Yong:3, Quindor:2, Feniku:2, Dorma, Shuchi" }, "type": "Magic" },
    "Yalva": { "source": "HM Magic, Shek-pvar 6", "skillBase": { "formula": "@aur, @aur, @agl, Syrada:-1, Jig-won:-1, Anzor, Shirdun, Izballa:2, Zosan-shi:2, Aramos:3, Lengjing:3, Caelaz:2, Sanyang:2, Gordol, Ying, Zhone:-1, Yong:-1, Quindor:-2, Feniku:-2, Dorma:-3, Shuchi:-3, Tollan:-2, Chuán:-2" }, "type": "Magic" },
    "Tykizu": { "source": "HM Magic, Shek-pvar 6", "skillBase": { "formula": "@aur, @aur, @str, Syrada, Jig-won, Ariala:2, Boru:2, Anzor:3, Shirdun:3, Izballa:2, Zosan-shi:2, Aramos:1, Gordol:-1, Ying:-1, Torka:-2, Yari:-2, Zhone:-3, Quindor:-2, Feniku:-2, Dorma:-1, Shuchi:-1" }, "type": "Magic" },
    "Avikor": { "source": "HM Magic, Shek-pvar 6", "skillBase": { "formula": "@aur, @aur, @dex, Syrada, Jig-won, Anzor:-1, Shirdun-1, Izballa:-2, Zosan-shi:-2, Aramos:-3, Lengjing:-3, Caelaz:-2, Sanyang:-2, Gordol:-1, Ying:-1, Zhone:1, Quindor:2, Feniku:2, Dorma:3, Shuchi:3, Tollan:2, Chuán:2" }, "type": "Magic" },
    "Neutral": { "source": "HM Magic, Shek-pvar 6", "skillBase": { "formula": "@aur, @aur, @wil" }, "type": "Magic" },
    "Toraz": { "source": "HM Magic, Shek-pvar 6", "skillBase": { "formula": "@aur, @aur, @sml, Syrada:3, Jig-won:3, Ariala:2, Boru:2, Anzor, Shirdun, Aramos:-1, Lengjing:-1, Caelaz:-2, Sanyang:-2, Gordol:-3, Ying:-3, Torka:-2, Yari:-2, Zhone:-1, Yong:-1, Dorma, Shuchi, Tollan:2, Chuán:2" }, "type": "Magic" },
    "Climbing": { "source": "HM3 Skills 8", "skillBase": { "formula": "@str, @dex, @agl, Syrada:2, Jig-won:2, Ariala:2, Boru:2" }, "type": "Physical" },
    "Swimming": { "source": "HM3 Skills 9", "skillBase": { "formula": "@sta, @dex, @agl, Quindor, Feniku, Dorma:3, Shuchi:3, Tollan:3, Chuán:3" }, "type": "Physical" },
    "Skiing": { "source": "HM3 Skills 9", "skillBase": { "formula": "@str, @dex, @agl, Dorma:2, Shuchi:2, Quindor, Feniku, Tollan, Chuán" }, "type": "Physical" },
    "Stealth": { "source": "HM3 Skills 9", "skillBase": { "formula": "@agl, @tch, @wil, Gordol:2, Ying:2, Torka:2, Yari:2, Zhone:2, Yong:2" }, "type": "Physical" },
    "Jumping": { "source": "HM3 Skills 9", "skillBase": { "formula": "@str, @agl, @agl, Syrada:2, Jig-won:2, Gordol:2, Ying:2" }, "type": "Physical" },
    "Condition": { "source": "HM3 Skills 9", "skillBase": { "formula": "@str, @sta, @wil, Syrada, Jig-won, Tollan, Chuán" }, "type": "Physical" },
    "Dancing": { "source": "HM3 Skills 9", "skillBase": { "formula": "@Dex, @agl, @agl, Torka:2, Yari:2, Gordol, Ying, Zhone, Yong" }, "type": "Physical" },
    "Acrobatics": { "source": "HM3 Skills 8", "skillBase": { "formula": "@str, @agl, @agl, Caelaz:2, Sanyang:2, Gordol, Ying" }, "type": "Physical" },
    "Throwing": { "source": "HM3 Skills 10", "skillBase": { "formula": "@str, @dex, @eye, Gordol:2, Ying:2, Torka, Yari, Caelaz, Sanyang" }, "type": "Physical" },
    "Legerdemain": { "source": "HM3 Skills 9", "skillBase": { "formula": "@dex, @dex, @wil, Quindor:2, Feniku:2, Zhone:2, Yong:2, Torka:2, Yari:2" }, "type": "Physical" },
    "Alea": { "source": "HM Religion, Alea 1", "skillBase": { "formula": "@voi, @int, @dex, Ariala:2, Boru:2, Aramos, Lengjing, Syrada, Jig-won" }, "type": "Ritual" },
    "Alyin": { "source": "HM Religion, Alyin 1", "skillBase": { "formula": "@voi, @int, @dex, Ariala:2, Boru:2, Aramos, Lengjing, Syrada, Jig-won" }, "type": "Ritual" },
    "Korön": { "source": "HM Religion, Korön 1", "skillBase": { "formula": "@voi, @int, @str, Zhone:2, Yong:2, Quindor, Feniku, Syrada, Jig-won" }, "type": "Ritual" },
    "Zhojin": { "source": "HM Religion, Zhojin 1", "skillBase": { "formula": "@voi, @int, @str, Zhone:2, Yong:2, Quindor, Feniku, Syrada, Jig-won" }, "type": "Ritual" },
    "Kalos": { "source": "HM Religion, Kalos 1", "skillBase": { "formula": "@voi, @int, @aur, Quindor, Feniku, Zhone, Yong, Syrada:2, Jig-won:2" }, "type": "Ritual" },
    "Hurong-oni": { "source": "HM Religion, Hurong-oni 1", "skillBase": { "formula": "@voi, @int, @aur, Quindor, Feniku, Zhone, Yong, Syrada:2, Jig-won:2" }, "type": "Ritual" },
    "Arial": { "source": "HM Religion, Arial 1", "skillBase": { "formula": "@voi, @int, @aur, Gordol:2, Ying:2, Anzor, Syrada, Jig-won" }, "type": "Ritual" },
    "Aramai": { "source": "HM Religion, Aramai 1", "skillBase": { "formula": "@voi, @int, @aur, Gordol:2, Ying:2, Anzor, Syrada, Jig-won" }, "type": "Ritual" },
    "Tyvos": { "source": "HM Religion, Tyvos 1", "skillBase": { "formula": "@voi, @int, @wil, Anzor:2, Shirdu:2, Ariala, Boru, Tollan, Chuán" }, "type": "Ritual" },
    "Mazong": { "source": "HM Religion, Mazong 1", "skillBase": { "formula": "@voi, @int, @wil, Anzor:2, Shirdu:2, Ariala, Boru, Tollan, Chuán" }, "type": "Ritual" },
    "Zelist": { "source": "HM Religion, Zelist 1", "skillBase": { "formula": "@voi, @int, @aur, Tollan:2, Chuán:2, Izballa, Zosan-shi, Dorma, Shuchi" }, "type": "Ritual" },
    "Hai'yongi": { "source": "HM Religion, Hai'yongi 1", "skillBase": { "formula": "@voi, @int, @aur, Tollan:2, Chuán:2, Izballa, Zosan-shi, Dorma, Shuchi" }, "type": "Ritual" },
    "Kalura": { "source": "HM Religion, Kalura 1", "skillBase": { "formula": "@voi, @int, @cml, Torka:2, Yari:2, Gordol, Ying, Dorma, Shuchi" }, "type": "Ritual" },
    "Mien-jai": { "source": "HM Religion, Mien-jai 1", "skillBase": { "formula": "@voi, @int, @cml, Torka:2, Yari:2, Gordol, Ying, Dorma, Shuchi" }, "type": "Ritual" },
    "Naventhül": { "source": "HM Religion, Naventhül 1", "skillBase": { "formula": "@voi, @int, @wil, Dorma:2, Shuchi:2, Quindor, Feniku, Torka, Yari" }, "type": "Ritual" },
    "Navong kui": { "source": "HM Religion, Navong kui 1", "skillBase": { "formula": "@voi, @int, @wil, Dorma:2, Shuchi:2, Quindor, Feniku, Torka, Yari" }, "type": "Ritual" },
    "Cael": { "source": "HM Religion, Cael 1", "skillBase": { "formula": "@voi, @int, @wil, Caelaz:2, Sanyang:2, Torka, Yari, Anzor, Shirdun" }, "type": "Ritual" },
    "Kai yi": { "source": "HM Religion, Kai yi 1", "skillBase": { "formula": "@voi, @int, @wil, Caelaz:2, Sanyang:2, Torka, Yari, Anzor, Shirdun" }, "type": "Ritual" },
    "Shala": { "source": "HM Religion, Shala 1", "skillBase": { "formula": "@voi, @int, @int, Zhone:2, Yong:2, Torka, Yari, Quindor, Feniku" }, "type": "Craft" },
    "Wanüa": { "source": "HM Religion, Wanüa 1", "skillBase": { "formula": "@voi, @int, @int, Zhone:2, Yong:2, Torka, Yari, Quindor, Feniku" }, "type": "Craft" },
    "Agara": { "source": "HM Religion, Agara 1", "skillBase": { "formula": "@voi, @int, @wil, Quindor:2, Feniku:2, Gordol, Ying, Anzor, Shirdun" }, "type": "Craft" },
    "Quontai": { "source": "HM Religion, Quontai 1", "skillBase": { "formula": "@voi, @int, @wil, Quindor:2, Feniku:2, Gordol, Ying, Anzor, Shirdun" }, "type": "Craft" },
    "Brindar": { "source": "HM Religion, Brindar 1", "skillBase": { "formula": "@voi, @int, @cml, Torka:2, Yari:2, Gordol:3, Ying:3, Dorma, Shuchi, Zhone:2, Yong:2" }, "type": "Craft" },
    "Byan'gon": { "source": "HM Religion, Byan'gon 1", "skillBase": { "formula": "@voi, @int, @cml, Torka:2, Yari:2, Gordol:3, Ying:3, Dorma, Shuchi, Zhone:2, Yong:2" }, "type": "Craft" },
    "Drina": { "source": "HM Religion, Drina 1", "skillBase": { "formula": "@voi, @int, @wil Caelaz, Sanyang, Torka:3, Yari:3, Anzor:2, Shirdun:2" }, "type": "Craft" },
    "Izira": { "source": "HM Religion, Izira 1", "skillBase": { "formula": "@voi, @int, @wil Caelaz, Sanyang, Torka:3, Yari:3, Anzor:2, Shirdun:2" }, "type": "Craft" },
    "Gheas": { "source": "HM Religion, Gheas 1", "skillBase": { "formula": "@voi, @int, @str, Torka:3, Yari:3, Zhone:2, Yong:2, Dorma, Shuchi" }, "type": "Craft" },
    "Quaynagu": { "source": "HM Religion, Quaynagu 1", "skillBase": { "formula": "@voi, @int, @str, Torka:3, Yari:3, Zhone:2, Yong:2, Dorma, Shuchi" }, "type": "Craft" },
    "Kasira": { "source": "HM Religion, Kasira 1", "skillBase": { "formula": "@voi, @int, @aur, Ariala, Boru, Zhone, Yong, Syrada:2, Jig-won:2" }, "type": "Craft" },
    "Kaya kwen": { "source": "HM Religion, Kaya kwen 1", "skillBase": { "formula": "@voi, @int, @aur, Ariala, Boru, Zhone, Yong, Syrada:2, Jig-won:2" }, "type": "Craft" },
    "Liska": { "source": "HM Religion, Liska 1", "skillBase": { "formula": "@voi, @int, @int, Torka:2, Yari:2, Quindor, Feniku, Dorma:3, Shuchi:3" }, "type": "Craft" },
    "Okami": { "source": "HM Religion, Okami 1", "skillBase": { "formula": "@voi, @int, @int, Torka:2, Yari:2, Quindor, Feniku, Dorma:3, Shuchi:3" }, "type": "Craft" },
    "Mara": { "source": "HM Religion, Mara 1", "skillBase": { "formula": "@voi, @int, @dex, Ariala:2, Boru:2, Aramos, Lengjing, Syrada, Jig-won" }, "type": "Craft" },
    "Inarima": { "source": "HM Religion, Inarima 1", "skillBase": { "formula": "@voi, @int, @dex, Ariala:2, Boru:2, Aramos, Lengjing, Syrada, Jig-won" }, "type": "Craft" },
    "Tanar": { "source": "HM Religion, Tanar 1", "skillBase": { "formula": "@voi, @int, @str Zhone:3, Yong:3, Torka, Yari, Anzor:2, Shirdun:2" }, "type": "Craft" },
    "Minachi": { "source": "HM Religion, Minachi 1", "skillBase": { "formula": "@voi, @int, @str Zhone:3, Yong:3, Torka, Yari, Anzor:2, Shirdun:2" }, "type": "Craft" },
    "Vandor": { "source": "HM Religion, Vandor 1", "skillBase": { "formula": "@voi, @int, @int, Izballa:2, Zosan-shi:2, Ariala, Boru, Aramos, Lengjing" }, "type": "Craft" },
    "Mikoto-sai": { "source": "HM Religion, Mikoto-sai 1", "skillBase": { "formula": "@voi, @int, @int, Izballa:2, Zosan-shi:2, Ariala, Boru, Aramos, Lengjing" }, "type": "Craft" },
    "Xydona": { "source": "HM Religion, Xydona 1", "skillBase": { "formula": "@voi, @int, @wil, Quindor, Feniku, Gordol:2, Ying:2, Anzor, Shirdun" }, "type": "Craft" },
    "Raijin-no": { "source": "HM Religion, Raijin-no 1", "skillBase": { "formula": "@voi, @int, @wil, Quindor, Feniku, Gordol:2, Ying:2, Anzor, Shirdun" }, "type": "Craft" },
    "Xydonus": { "source": "HM Religion, Xydonus 1", "skillBase": { "formula": "@voi, @int, @aur, Gordol, Ying, Anzor, Shirdun, Syrada:2, Jig-won:2" }, "type": "Craft" },
    "Garasu": { "source": "HM Religion, Garasu 1", "skillBase": { "formula": "@voi, @int, @aur, Gordol, Ying, Anzor, Shirdun, Syrada:2, Jig-won:2" }, "type": "Craft" }

};

HM3.injuryLevels = ["NA", "M1", "S2", "S3", "G4", "G5", "K4", "K5"];

HM3.activeEffectKey = {
    'system.eph.meleeAMLMod': 'Melee Attacks',
    'system.eph.meleeDMLMod': 'Melee Defenses',
    'system.eph.missileAMLMod': 'Missile Attacks',
    'system.eph.outnumbered': 'Outnumbered',
    'system.eph.itemAMLMod': 'Weapon Attack ML',
    'system.eph.itemDMLMod': 'Weapon Defense ML',
    'system.eph.itemEMLMod': 'Skill EML',
    'system.eph.commSkillsMod': 'Communication Skills EML',
    'system.eph.physicalSkillsMod': 'Physical Skills EML',
    'system.eph.combatSkillsMod': 'Combat Skills EML',
    'system.eph.craftSkillsMod': 'Craft Skills EML',
    'system.eph.ritualSkillsMod': 'Ritual Skills EML',
    'system.eph.magicSkillsMod': 'Magic Skills EML',
    'system.eph.psionicTalentsMod': 'Psionic Talents EML',
    'system.universalPenalty': 'Universal Penalty',
    'system.physicalPenalty': 'Physical Penalty',
    'system.eph.fatigue': 'Fatigue',
    'system.encumbrance': 'Encumbrance',
    'system.endurance': 'Endurance',
    'system.eph.totalInjuryLevels': 'Injury Level',
    'system.eph.move': 'Move',
    'system.eph.strength': 'Strength',
    'system.eph.stamina': 'Stamina',
    'system.eph.dexterity': 'Dexterity',
    'system.eph.agility': 'Agility',
    'system.eph.speed': 'Speed',
    'system.eph.eyesight': 'Eyesight',
    'system.eph.hearing': 'Hearing',
    'system.eph.touch': 'Touch',
    'system.eph.smell': 'Smell',
    'system.eph.voice': 'Voice',
    'system.eph.intelligence': 'Intelligence',
    'system.eph.will': 'Will',
    'system.eph.aura': 'Aura',
    'system.eph.morality': 'Morality',
    'system.eph.comeliness': 'Comeliness'
};

HM3.defaultMagicIconName = 'pentacle';
HM3.defaultRitualIconName = 'circle';
HM3.defaultMiscItemIconName = 'miscgear';
HM3.defaultPsionicsIconName = 'psionics';
HM3.defaultArmorGearIconName = 'armor';
HM3.defaultContainerIconName = 'sack';

HM3.magicIcons = [
    ['pentacle', 'systems/hm3/images/icons/svg/pentacle.svg'],
    ['vularu', 'systems/hm3/images/icons/png/vularu.png'],
    ['yalva', 'systems/hm3/images/icons/png/yalva.png'],
    ['tykizu', 'systems/hm3/images/icons/png/tykizu.png'],
    ['toraz', 'systems/hm3/images/icons/png/toraz.png'],
    ['avikor', 'systems/hm3/images/icons/png/avikor.png'],
    ["Xavar’na", 'systems/hm3/images/icons/png/xavarna.png'],
    ["xavar'na", 'systems/hm3/images/icons/png/xavarna.png'],
    ["xavarna", 'systems/hm3/images/icons/png/xavarna.png'],
    ['kaze', 'systems/hm3/images/icons/png/vularu.png'],
    ['hono', 'systems/hm3/images/icons/png/yalva.png'],
    ['kinzoku', 'systems/hm3/images/icons/png/tykizu.png'],
    ['tinjei', 'systems/hm3/images/icons/png/toraz.png'],
    ['shui', 'systems/hm3/images/icons/png/avikor.png'],
    ['tuano', 'systems/hm3/images/icons/png/xavarna.png'],
    ['neutral', 'systems/hm3/images/icons/png/neutral.png']
];

HM3.ritualIcons = [
    ['circle', 'systems/hm3/images/icons/svg/circle.svg'],
    ['korön', 'systems/hm3/images/icons/png/korön.png'],
    ['zhojin', 'systems/hm3/images/icons/png/korön.png'],
    ['kalura', 'systems/hm3/images/icons/png/kalura.png'],
    ['mien-jai', 'systems/hm3/images/icons/png/kalura.png'],
    ['kalos', 'systems/hm3/images/icons/png/kalos.png'],
    ['hurong-oni', 'systems/hm3/images/icons/png/kalos.png'],
    ['cael', 'systems/hm3/images/icons/png/cael.png'],
    ['kai yi', 'systems/hm3/images/icons/png/cael.png'],
    ['zelist', 'systems/hm3/images/icons/png/zelist.png'],
    ["hai'yongi", 'systems/hm3/images/icons/png/zelist.png'],
    ['naventhül', 'systems/hm3/images/icons/png/naventhul.png'],
    ['navong kui', 'systems/hm3/images/icons/png/naventhul.png'],
    ['alea', 'systems/hm3/images/icons/png/alea.png'],
    ['alyin', 'systems/hm3/images/icons/png/alea.png'],
    ['tyvos', 'systems/hm3/images/icons/png/tyvos.png'],
    ['mazong', 'systems/hm3/images/icons/png/tyvos.png'],
    ["shala", 'systems/hm3/images/icons/png/shala.png'],
    ['wanüa', 'systems/hm3/images/icons/png/shala.png'],
    ['arial', 'systems/hm3/images/icons/png/arial.png'],
    ['aramai', 'systems/hm3/images/icons/png/arial.png'],
    ['agara', 'systems/hm3/images/icons/png/agara.png'],
    ['quontai', 'systems/hm3/images/icons/png/agara.png'],
    ['brindar', 'systems/hm3/images/icons/png/brindar.png'],
    ["byan’gon", 'systems/hm3/images/icons/png/brindar.png'],
    ["byan'gon", 'systems/hm3/images/icons/png/brindar.png'],
    ["byangon", 'systems/hm3/images/icons/png/brindar.png'],
    ['drina', 'systems/hm3/images/icons/png/drina.png'],
    ['izira', 'systems/hm3/images/icons/png/drina.png'],
    ['gheas', 'systems/hm3/images/icons/png/gheas.png'],
    ['quaynagu', 'systems/hm3/images/icons/png/gheas.png'],
    ['kasira', 'systems/hm3/images/icons/png/kasira.png'],
    ['kaya kwen', 'systems/hm3/images/icons/png/kasira.png'],
    ['liska', 'systems/hm3/images/icons/png/liska.png'],
    ['okami', 'systems/hm3/images/icons/png/liska.png'],
    ['mara', 'systems/hm3/images/icons/png/mara.png'],
    ['inarima', 'systems/hm3/images/icons/png/mara.png'],
    ['tanar', 'systems/hm3/images/icons/png/tanar.png'],
    ['minachi', 'systems/hm3/images/icons/png/tanar.png'],
    ['vandor', 'systems/hm3/images/icons/png/vandor.png'],
    ['mikoto-sai', 'systems/hm3/images/icons/png/vandor.png'],
    ['xydona', 'systems/hm3/images/icons/png/xydona.png'],
    ['raijin-no', 'systems/hm3/images/icons/png/xydona.png'],
    ['xydonus', 'systems/hm3/images/icons/png/xydonus.png'],
    ['garasu', 'systems/hm3/images/icons/png/xydonus.png']
];

HM3.psionicTalentIcons = [
    ['psionics', 'systems/hm3/images/icons/svg/psionics.svg']
];

HM3.physicalSkillIcons = [
    ['acrobatics', 'systems/hm3/images/icons/svg/acrobatics.svg'],
    ['climbing', 'systems/hm3/images/icons/svg/climbing.svg'],
    ['condition', 'systems/hm3/images/icons/svg/muscle.svg'],
    ['dancing', 'systems/hm3/images/icons/svg/dance.svg'],
    ['jumping', 'systems/hm3/images/icons/svg/jump.svg'],
    ['legerdemain', 'systems/hm3/images/icons/svg/juggler.svg'],
    ['skiing', 'systems/hm3/images/icons/svg/ski.svg'],
    ['stealth', 'systems/hm3/images/icons/svg/stealth.svg'],
    ['swimming', 'systems/hm3/images/icons/svg/swimming.svg'],
    ['throwing', 'systems/hm3/images/icons/svg/throw.svg']
];

HM3.commSkillIcons = [
    ['acting', 'systems/hm3/images/icons/svg/acting.svg'],
    ['awareness', 'systems/hm3/images/icons/svg/awareness.svg'],
    ['intrigue', 'systems/hm3/images/icons/svg/cloak-dagger.svg'],
    ['lovecraft', 'systems/hm3/images/icons/svg/love.svg'],
    ['mental conflict', 'systems/hm3/images/icons/svg/mental.svg'],
    ['musician', 'systems/hm3/images/icons/svg/harp.svg'],
    ['oratory', 'systems/hm3/images/icons/svg/oratory.svg'],
    ['rhetoric', 'systems/hm3/images/icons/svg/rhetoric.svg'],
    ['command', 'systems/hm3/images/icons/svg/rhetoric.svg'],
    ['diplomacy', 'systems/hm3/images/icons/svg/rhetoric.svg'],
    ['intimidation', 'systems/hm3/images/icons/svg/rhetoric.svg'],
    ['singing', 'systems/hm3/images/icons/svg/musician-singing.svg'],
    ['language', 'systems/hm3/images/icons/svg/speaking.svg'],
    ['script', 'systems/hm3/images/icons/svg/scroll.svg']
];

HM3.combatSkillIcons = [
    ['unarmed', 'systems/hm3/images/icons/svg/punch.svg'],
    ['brawling', 'systems/hm3/images/icons/svg/punch.svg'],
    ['wrestling', 'systems/hm3/images/icons/svg/punch.svg'],
    ['martial arts', 'systems/hm3/images/icons/svg/punch.svg'],
    ['dodge', 'systems/hm3/images/icons/svg/dodge.svg'],
    ['initiative', 'systems/hm3/images/icons/svg/initiative.svg'],
    ['riding', 'systems/hm3/images/icons/svg/horse-riding.svg']
];

HM3.weaponSkillIcons = [
    ['axe', 'systems/hm3/images/icons/svg/axe.svg'],
    ['battleaxe', 'systems/hm3/images/icons/svg/axe.svg'],
    ['handaxe', 'systems/hm3/images/icons/svg/axe.svg'],
    ['shorkana', 'systems/hm3/images/icons/svg/axe.svg'],
    ['pickaxe', 'systems/hm3/images/icons/svg/axe.svg'],
    ['sickle', 'systems/hm3/images/icons/svg/axe.svg'],
    ['hatchet', 'systems/hm3/images/icons/svg/axe.svg'],
    ['warhammer', 'systems/hm3/images/icons/svg/warhammer.svg'],
    ['war hammer', 'systems/hm3/images/icons/svg/warhammer.svg'],
    ['bow', 'systems/hm3/images/icons/svg/longbow.svg'],
    ['longbow', 'systems/hm3/images/icons/svg/longbow.svg'],
    ['long bow', 'systems/hm3/images/icons/svg/longbow.svg'],
    ['shortbow', 'systems/hm3/images/icons/svg/longbow.svg'],
    ['short bow', 'systems/hm3/images/icons/svg/longbow.svg'],
    ['hart bow', 'systems/hm3/images/icons/svg/longbow.svg'],
    ['hartbow', 'systems/hm3/images/icons/svg/longbow.svg'],
    ['crossbow', 'systems/hm3/images/icons/svg/crossbow.svg'],
    ['club', 'systems/hm3/images/icons/svg/club.svg'],
    ['stick', 'systems/hm3/images/icons/svg/club.svg'],
    ['mace', 'systems/hm3/images/icons/svg/mace.svg'],
    ['maul', 'systems/hm3/images/icons/svg/hammer.svg'],
    ['morningstar', 'systems/hm3/images/icons/svg/mace.svg'],
    ['dagger', 'systems/hm3/images/icons/svg/dagger.svg'],
    ['taburi', 'systems/hm3/images/icons/svg/dagger.svg'],
    ['keltan', 'systems/hm3/images/icons/svg/dagger.svg'],
    ['knife', 'systems/hm3/images/icons/svg/dagger.svg'],
    ['toburi', 'systems/hm3/images/icons/svg/dagger.svg'],
    ['flail', 'systems/hm3/images/icons/svg/flail.svg'],
    ['warflail', 'systems/hm3/images/icons/svg/flail.svg'],
    ['nachakas', 'systems/hm3/images/icons/svg/flail.svg'],
    ['grainflail', 'systems/hm3/images/icons/svg/flail.svg'],
    ['net', 'systems/hm3/images/icons/svg/net.svg'],
    ['polearm', 'systems/hm3/images/icons/svg/polearm.svg'],
    ['trident', 'systems/hm3/images/icons/svg/trident.svg'],
    ['lance', 'systems/hm3/images/icons/svg/lance.svg'],
    ['glaive', 'systems/hm3/images/icons/svg/polearm.svg'],
    ['pike', 'systems/hm3/images/icons/svg/polearm.svg'],
    ['poleaxe', 'systems/hm3/images/icons/svg/polearm.svg'],
    ['jousting pole', 'systems/hm3/images/icons/svg/lance.svg'],
    ['bill', 'systems/hm3/images/icons/svg/polearm.svg'],
    ['shield', 'systems/hm3/images/icons/svg/shield.svg'],
    ['round shield', 'systems/hm3/images/icons/svg/round-shield.svg'],
    ['buckler', 'systems/hm3/images/icons/svg/round-shield.svg'],
    ['knight shield', 'systems/hm3/images/icons/svg/shield.svg'],
    ['kite shield', 'systems/hm3/images/icons/svg/shield.svg'],
    ['tower shield', 'systems/hm3/images/icons/svg/shield.svg'],
    ['spear', 'systems/hm3/images/icons/svg/spear.svg'],
    ['javelin', 'systems/hm3/images/icons/svg/spear.svg'],
    ['staff', 'systems/hm3/images/icons/svg/staff.svg'],
    ['sword', 'systems/hm3/images/icons/svg/sword.svg'],
    ['falchion', 'systems/hm3/images/icons/svg/sword.svg'],
    ['broadsword', 'systems/hm3/images/icons/svg/sword.svg'],
    ['battlesword', 'systems/hm3/images/icons/svg/sword.svg'],
    ['estoc', 'systems/hm3/images/icons/svg/sword.svg'],
    ['mang', 'systems/hm3/images/icons/svg/sword.svg'],
    ['mankar', 'systems/hm3/images/icons/svg/sword.svg'],
    ['longknife', 'systems/hm3/images/icons/svg/sword.svg'],
    ['battle sword', 'systems/hm3/images/icons/svg/sword.svg'],
    ['longsword', 'systems/hm3/images/icons/svg/sword.svg'],
    ['shortsword', 'systems/hm3/images/icons/svg/sword.svg'],
    ['long sword', 'systems/hm3/images/icons/svg/sword.svg'],
    ['short sword', 'systems/hm3/images/icons/svg/sword.svg'],
    ['bastard sword', 'systems/hm3/images/icons/svg/sword.svg'],
    ['long knife', 'systems/hm3/images/icons/svg/sword.svg'],
    ['whip', 'systems/hm3/images/icons/svg/whip.svg'],
    ['hammer', 'systems/hm3/images/icons/svg/hammer.svg'],
    ['arrow', 'systems/hm3/images/icons/svg/arrow.svg'],
    ['sling', 'systems/hm3/images/icons/svg/sling.svg'],
    ['bolt', 'systems/hm3/images/icons/svg/arrow.svg'],
    ['stone', 'systems/hm3/images/icons/svg/stones.svg'],
    ['bullet', 'systems/hm3/images/icons/svg/stones.svg'],
    ['fangs', 'systems/hm3/images/icons/svg/fangs.svg'],
    ['claw', 'systems/hm3/images/icons/svg/claw.svg'],
    ['hoof', 'systems/hm3/images/icons/svg/hoof.svg'],
    ['horns', 'systems/hm3/images/icons/svg/horns.svg']
];

HM3.craftSkillIcons = [
    ['agriculture', 'systems/hm3/images/icons/svg/agriculture.svg'],
    ['alchemy', 'systems/hm3/images/icons/svg/caduceus.svg'],
    ['animalcraft', 'systems/hm3/images/icons/svg/animalcraft.svg'],
    ['astrology', 'systems/hm3/images/icons/svg/astrology.svg'],
    ['brewing', 'systems/hm3/images/icons/svg/brewing.svg'],
    ['ceramics', 'systems/hm3/images/icons/svg/ceramics.svg'],
    ['cookery', 'systems/hm3/images/icons/svg/cookery.svg'],
    ['cooking', 'systems/hm3/images/icons/svg/cookery.svg'],
    ['drawing', 'systems/hm3/images/icons/svg/drawing.svg'],
    ['embalming', 'systems/hm3/images/icons/svg/embalming.svg'],
    ['engineering', 'systems/hm3/images/icons/svg/engineering.svg'],
    ['fishing', 'systems/hm3/images/icons/svg/fishing.svg'],
    ['fletching', 'systems/hm3/images/icons/svg/arrow.svg'],
    ['folklore', 'systems/hm3/images/icons/svg/unicorn.svg'],
    ['foraging', 'systems/hm3/images/icons/svg/foraging.svg'],
    ['glassworking', 'systems/hm3/images/icons/svg/glassworking.svg'],
    ['glasscraft', 'systems/hm3/images/icons/svg/glassworking.svg'],
    ['heraldry', 'systems/hm3/images/icons/svg/heraldry.svg'],
    ['herblore', 'systems/hm3/images/icons/svg/herblore.svg'],
    ['hunting', 'systems/hm3/images/icons/svg/hunting.svg'],
    ['hidework', 'systems/hm3/images/icons/svg/hidework.svg'],
    ['inkcraft', 'systems/hm3/images/icons/svg/ink.svg'],
    ['jewelcraft', 'systems/hm3/images/icons/svg/jewel.svg'],
    ['law', 'systems/hm3/images/icons/svg/law.svg'],
    ['lockcraft', 'systems/hm3/images/icons/svg/lock.svg'],
    ['lore', 'systems/hm3/images/icons/svg/lore.svg'],
    ['masonry', 'systems/hm3/images/icons/svg/masonry.svg'],
    ['mathematics', 'systems/hm3/images/icons/svg/mathematics.svg'],
    ['metalcraft', 'systems/hm3/images/icons/svg/anvil.svg'],
    ['milling', 'systems/hm3/images/icons/svg/water-mill.svg'],
    ['mining', 'systems/hm3/images/icons/svg/mining.svg'],
    ['perfumery', 'systems/hm3/images/icons/svg/perfume.svg'],
    ['physician', 'systems/hm3/images/icons/svg/caduceus.svg'],
    ['piloting', 'systems/hm3/images/icons/svg/piloting.svg'],
    ['pilot', 'systems/hm3/images/icons/svg/piloting.svg'],
    ['runecraft', 'systems/hm3/images/icons/svg/runecraft.svg'],
    ['seamanship', 'systems/hm3/images/icons/svg/anchor.svg'],
    ['shipwright', 'systems/hm3/images/icons/svg/ship.svg'],
    ['survival', 'systems/hm3/images/icons/svg/survival.svg'],
    ['tarotry', 'systems/hm3/images/icons/svg/tarotry.svg'],
    ['textilecraft', 'systems/hm3/images/icons/svg/textilecraft.svg'],
    ['timbercraft', 'systems/hm3/images/icons/svg/timber.svg'],
    ['tracking', 'systems/hm3/images/icons/svg/tracking.svg'],
    ['weaponcraft', 'systems/hm3/images/icons/svg/sword.svg'],
    ['weatherlore', 'systems/hm3/images/icons/svg/weather.svg'],
    ['woodcraft', 'systems/hm3/images/icons/svg/woodcraft.svg']
];

HM3.armorGearIcons = [
    ['armorgear', 'systems/hm3/images/icons/svg/armor.svg'],
    ['abdominal armor', 'systems/hm3/images/icons/svg/abdominal-armor.svg'],
    ['armor vest', 'systems/hm3/images/icons/svg/armor-vest.svg'],
    ['barbute', 'systems/hm3/images/icons/svg/barbute.svg'],
    ['black knight helm', 'systems/hm3/images/icons/svg/black-knight-helm.svg'],
    ['bracer', 'systems/hm3/images/icons/svg/bracer.svg'],
    ['breastplate', 'systems/hm3/images/icons/svg/breastplate.svg'],
    ['cap', 'systems/hm3/images/icons/svg/cap.svg'],
    ['chainmail', 'systems/hm3/images/icons/svg/chain-mail.svg'],
    ['chest armor', 'systems/hm3/images/icons/svg/chest-armor.svg'],
    ['closed barbute', 'systems/hm3/images/icons/svg/closed-barbute.svg'],
    ['crested helm', 'systems/hm3/images/icons/svg/crested-helm.svg'],
    ['dorsal scales', 'systems/hm3/images/icons/svg/dorsal-scales.svg'],
    ['elbow pad', 'systems/hm3/images/icons/svg/elbow-pad.svg'],
    ['fish scales', 'systems/hm3/images/icons/svg/fish-scales.svg'],
    ['gloves', 'systems/hm3/images/icons/svg/gloves.svg'],
    ['greaves', 'systems/hm3/images/icons/svg/greaves.svg'],
    ['guantlet', 'systems/hm3/images/icons/svg/gauntlet.svg'],
    ['heavy helm', 'systems/hm3/images/icons/svg/heavy-helm.svg'],
    ['helm', 'systems/hm3/images/icons/svg/helm.svg'],
    ['hood', 'systems/hm3/images/icons/svg/hood.svg'],
    ['knee pad', 'systems/hm3/images/icons/svg/knee-pad.svg'],
    ['lamellar', 'systems/hm3/images/icons/svg/lamellar.svg'],
    ['leather armor', 'systems/hm3/images/icons/svg/leather-armor.svg'],
    ['leather boot', 'systems/hm3/images/icons/svg/leather-boot.svg'],
    ['leather vest', 'systems/hm3/images/icons/svg/leather-vest.svg'],
    ['leg armor', 'systems/hm3/images/icons/svg/leg-armor.svg'],
    ['leggings', 'systems/hm3/images/icons/svg/leggings.svg'],
    ['light helm', 'systems/hm3/images/icons/svg/light-helm.svg'],
    ['mail shirt', 'systems/hm3/images/icons/svg/mail-shirt.svg'],
    ['mailed fist', 'systems/hm3/images/icons/svg/mailed-fist.svg'],
    ['metal skirt', 'systems/hm3/images/icons/svg/metal-skirt.svg'],
    ['pauldrons', 'systems/hm3/images/icons/svg/pauldrons.svg'],
    ['robe', 'systems/hm3/images/icons/svg/robe.svg'],
    ['scale mail', 'systems/hm3/images/icons/svg/scale-mail.svg'],
    ['scales', 'systems/hm3/images/icons/svg/scales.svg'],
    ['shirt', 'systems/hm3/images/icons/svg/shirt.svg'],
    ['shoe', 'systems/hm3/images/icons/svg/shoe.svg'],
    ['shoulder scales', 'systems/hm3/images/icons/svg/shoulder-scales.svg'],
    ['steeltoe boots', 'systems/hm3/images/icons/svg/steeltoe-boots.svg'],
    ['trousers', 'systems/hm3/images/icons/svg/trousers.svg'],
    ['tunic', 'systems/hm3/images/icons/svg/tunic.svg'],
    ['visored helm', 'systems/hm3/images/icons/svg/visored-helm.svg']
];

HM3.miscGearIcons = [
    ['miscgear', 'systems/hm3/images/icons/svg/miscgear.svg'],
    ['coin', 'systems/hm3/images/icons/svg/coins.svg'],
    ['farthing', 'systems/hm3/images/icons/svg/coins.svg'],
    ['pence', 'systems/hm3/images/icons/svg/coins.svg'],
    ['pennies', 'systems/hm3/images/icons/svg/coins.svg'],
    ['penny', 'systems/hm3/images/icons/svg/coins.svg'],
    ['silver coins', 'systems/hm3/images/icons/svg/coins.svg'],
    ['silver pieces', 'systems/hm3/images/icons/svg/coins.svg'],
    ['silver pennies', 'systems/hm3/images/icons/svg/coins.svg'],
    ['silver penny', 'systems/hm3/images/icons/svg/coins.svg'],
    ['shilling', 'systems/hm3/images/icons/svg/coins.svg'],
    ['gold crown', 'systems/hm3/images/icons/svg/coins.svg'],
    ['gold piece', 'systems/hm3/images/icons/svg/coins.svg'],
    ['khuzan gold crown', 'systems/hm3/images/icons/svg/coins.svg'],
    ['khuzan crown', 'systems/hm3/images/icons/svg/coins.svg'],
    ['sack', 'systems/hm3/images/icons/svg/sack.svg'],
    ['backpack', 'systems/hm3/images/icons/svg/sack.svg'],
    ['pouch', 'systems/hm3/images/icons/svg/sack.svg'],
    ['belt pouch', 'systems/hm3/images/icons/svg/sack.svg'],
    ['torch', 'systems/hm3/images/icons/svg/torch.svg'],
    ['candle', 'systems/hm3/images/icons/svg/candle.svg'],
    ['pence', 'systems/hm3/images/icons/svg/coins.svg'],
    ['pence', 'systems/hm3/images/icons/svg/coins.svg'],
    ['pence', 'systems/hm3/images/icons/svg/coins.svg'],
    ['helm', 'systems/hm3/images/icons/svg/helm.svg'],
    ['steel helm', 'systems/hm3/images/icons/svg/helm.svg']
];

HM3.defaultItemIcons = new Map(
    HM3.physicalSkillIcons
        .concat(HM3.commSkillIcons)
        .concat(HM3.combatSkillIcons)
        .concat(HM3.weaponSkillIcons)
        .concat(HM3.craftSkillIcons)
        .concat(HM3.miscGearIcons)
        .concat(HM3.armorGearIcons)
        .concat(HM3.ritualIcons)
        .concat(HM3.magicIcons)
        .concat(HM3.psionicTalentIcons)
);

HM3.meleeCombatTable = {
    'block': {
        'cf:cf': { atkFumble: true, defFumble: true, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 0, defDice: 0 },
        'mf:cf': { atkFumble: false, defFumble: true, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 0, defDice: 0 },
        'ms:cf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 2, defDice: 0 },
        'cs:cf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 3, defDice: 0 },

        'cf:mf': { atkFumble: true, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 0, defDice: 0 },
        'mf:mf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: true, atkDice: 0, defDice: 0 },
        'ms:mf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 1, defDice: 0 },
        'cs:mf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 2, defDice: 0 },

        'cf:ms': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: true, block: false, miss: false, atkDice: 0, defDice: 0 },
        'mf:ms': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: true, block: false, miss: false, atkDice: 0, defDice: 0 },
        'ms:ms': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: true, atkDice: 0, defDice: 0 },
        'cs:ms': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 1, defDice: 0 },

        'cf:cs': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: true, block: false, miss: false, atkDice: 0, defDice: 0 },
        'mf:cs': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: true, block: false, miss: false, atkDice: 0, defDice: 0 },
        'ms:cs': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: true, block: false, miss: false, atkDice: 0, defDice: 0 },
        'cs:cs': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: true, atkDice: 0, defDice: 0 }
    },
    'counterstrike': {
        'cf:cf': { atkFumble: true, defFumble: true, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 0, defDice: 0 },
        'mf:cf': { atkFumble: false, defFumble: true, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 0, defDice: 0 },
        'ms:cf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 3, defDice: 0 },
        'cs:cf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 4, defDice: 0 },

        'cf:mf': { atkFumble: true, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 0, defDice: 0 },
        'mf:mf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: true, atkDice: 0, defDice: 0 },
        'ms:mf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 2, defDice: 0 },
        'cs:mf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 3, defDice: 0 },

        'cf:ms': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 0, defDice: 2 },
        'mf:ms': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 0, defDice: 1 },
        'ms:ms': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 1, defDice: 1 },
        'cs:ms': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 1, defDice: 0 },

        'cf:cs': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 0, defDice: 3 },
        'mf:cs': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 0, defDice: 2 },
        'ms:cs': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 0, defDice: 1 },
        'cs:cs': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 2, defDice: 2 }
    },
    'dodge': {
        'cf:cf': { atkFumble: false, defFumble: false, atkStumble: true, defStumble: true, dta: false, block: false, miss: false, atkDice: 0, defDice: 0 },
        'mf:cf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: true, dta: false, block: false, miss: false, atkDice: 0, defDice: 0 },
        'ms:cf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 2, defDice: 0 },
        'cs:cf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 3, defDice: 0 },

        'cf:mf': { atkFumble: false, defFumble: false, atkStumble: true, defStumble: false, dta: false, block: false, miss: false, atkDice: 0, defDice: 0 },
        'mf:mf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: true, atkDice: 0, defDice: 0 },
        'ms:mf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 1, defDice: 0 },
        'cs:mf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 2, defDice: 0 },

        'cf:ms': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: true, block: false, miss: false, atkDice: 0, defDice: 0 },
        'mf:ms': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: true, atkDice: 0, defDice: 0 },
        'ms:ms': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: true, atkDice: 0, defDice: 0 },
        'cs:ms': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 1, defDice: 0 },

        'cf:cs': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: true, block: false, miss: false, atkDice: 0, defDice: 0 },
        'mf:cs': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: true, block: false, miss: false, atkDice: 0, defDice: 0 },
        'ms:cs': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: true, atkDice: 0, defDice: 0 },
        'cs:cs': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: true, atkDice: 0, defDice: 0 }
    },
    'ignore': {
        'cf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: true, block: false, miss: false, atkDice: 0, defDice: 0 },
        'mf': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 1, defDice: 0 },
        'ms': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 3, defDice: 0 },
        'cs': { atkFumble: false, defFumble: false, atkStumble: false, defStumble: false, dta: false, block: false, miss: false, atkDice: 4, defDice: 0 }
    }
};

HM3.missileCombatTable = {
    'block': {
        'cf:cf': { wild: true, block: false, miss: false, atkDice: 0 },
        'mf:cf': { wild: false, block: false, miss: true, atkDice: 0 },
        'ms:cf': { wild: false, block: false, miss: false, atkDice: 2 },
        'cs:cf': { wild: false, block: false, miss: false, atkDice: 3 },

        'cf:mf': { wild: true, block: false, miss: false, atkDice: 0 },
        'mf:mf': { wild: false, block: false, miss: true, atkDice: 0 },
        'ms:mf': { wild: false, block: false, miss: false, atkDice: 1 },
        'cs:mf': { wild: false, block: false, miss: false, atkDice: 2 },

        'cf:ms': { wild: true, block: false, miss: false, atkDice: 0 },
        'mf:ms': { wild: false, block: false, miss: true, atkDice: 0 },
        'ms:ms': { wild: false, block: true, miss: false, atkDice: 0 },
        'cs:ms': { wild: false, block: false, miss: false, atkDice: 1 },

        'cf:cs': { wild: true, block: false, miss: false, atkDice: 0 },
        'mf:cs': { wild: false, block: false, miss: true, atkDice: 0 },
        'ms:cs': { wild: false, block: true, miss: false, atkDice: 0 },
        'cs:cs': { wild: false, block: true, miss: false, atkDice: 0 }
    },
    'dodge': {
        'cf:cf': { wild: true, block: false, miss: false, atkDice: 0 },
        'mf:cf': { wild: false, block: false, miss: true, atkDice: 0 },
        'ms:cf': { wild: false, block: false, miss: false, atkDice: 2 },
        'cs:cf': { wild: false, block: false, miss: false, atkDice: 3 },

        'cf:mf': { wild: true, block: false, miss: false, atkDice: 0 },
        'mf:mf': { wild: false, block: false, miss: true, atkDice: 0 },
        'ms:mf': { wild: false, block: false, miss: false, atkDice: 1 },
        'cs:mf': { wild: false, block: false, miss: false, atkDice: 2 },

        'cf:ms': { wild: true, block: false, miss: false, atkDice: 0 },
        'mf:ms': { wild: false, block: false, miss: true, atkDice: 0 },
        'ms:ms': { wild: false, block: false, miss: true, atkDice: 0 },
        'cs:ms': { wild: false, block: false, miss: false, atkDice: 1 },

        'cf:cs': { wild: true, block: false, miss: false, atkDice: 0 },
        'mf:cs': { wild: false, block: false, miss: true, atkDice: 0 },
        'ms:cs': { wild: false, block: false, miss: true, atkDice: 0 },
        'cs:cs': { wild: false, block: false, miss: true, atkDice: 0 }
    },
    'ignore': {
        'cf': { wild: true, block: false, miss: false, atkDice: 0 },
        'mf': { wild: false, block: false, miss: true, atkDice: 0 },
        'ms': { wild: false, block: false, miss: false, atkDice: 2 },
        'cs': { wild: false, block: false, miss: false, atkDice: 3 },
    }
}

HM3.actorLabels = {
    character: "Character",
    creature: "Creature",
    container: "Container",
}

HM3.itemLabels = {
    skill: "Skill",
    spell: "Spell",
    invocation: "Invocation",
    psionic: "Psionic",
    weapongear: "Melee Weapon",
    containergear: "Container",
    missilegear: "Missile Weapon",
    armorgear: "Armor",
    miscgear: "Misc. Gear",
    injury: "Injury",
    armorlocation: "Armor Location",
    trait: "Trait"
}