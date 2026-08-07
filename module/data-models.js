function deepClone(value) {
    return foundry.utils.deepClone(value);
}

function mergeDefaults(...parts) {
    const result = {};
    for (const part of parts) {
        foundry.utils.mergeObject(result, deepClone(part), { inplace: true, overwrite: true });
    }
    return result;
}

function stringField(initial = "") {
    return new foundry.data.fields.StringField({ required: false, blank: true, initial });
}

function numberField(initial = 0) {
    return new foundry.data.fields.NumberField({ required: false, initial });
}

function booleanField(initial = false) {
    return new foundry.data.fields.BooleanField({ required: false, initial });
}

function objectField(initial = {}) {
    return new foundry.data.fields.ObjectField({ required: false, initial: () => deepClone(initial) });
}

function arrayField(initial = []) {
    const sample = initial.find(v => v !== null && v !== undefined);
    let elementField;
    if (typeof sample === "number") {
        elementField = new foundry.data.fields.NumberField({ required: false });
    } else if (typeof sample === "boolean") {
        elementField = new foundry.data.fields.BooleanField({ required: false });
    } else if (typeof sample === "object") {
        elementField = new foundry.data.fields.ObjectField({ required: false });
    } else {
        elementField = new foundry.data.fields.StringField({ required: false, blank: true });
    }
    return new foundry.data.fields.ArrayField(elementField, { required: false, initial: () => deepClone(initial) });
}

function fieldForValue(value) {
    if (Array.isArray(value)) return arrayField(value);
    if (typeof value === "string") return stringField(value);
    if (typeof value === "number") return numberField(value);
    if (typeof value === "boolean") return booleanField(value);
    return objectField(value);
}

function createTypeDataModelClass(defaults) {
    return class extends foundry.abstract.TypeDataModel {
        static defineSchema() {
            return Object.fromEntries(
                Object.entries(defaults).map(([key, value]) => [key, fieldForValue(value)])
            );
        }
    };
}

const ACTOR_BASE_DEFAULTS = {
    bioImage: "systems/hm3/images/svg/knight-silhouette.svg",
    species: "",
    fatigue: 0,
    sunsign: "",
    abilities: {
        strength: { base: 0 },
        stamina: { base: 0 },
        dexterity: { base: 0 },
        agility: { base: 0 },
        speed: { base: 0 },
        intelligence: { base: 0 },
        aura: { base: 0 },
        will: { base: 0 },
        eyesight: { base: 0 },
        hearing: { base: 0 },
        smell: { base: 0 },
        touch: { base: 0 },
        voice: { base: 0 },
        comeliness: { base: 0 },
        morality: { base: 0 }
    },
    move: { base: 0 },
    shockIndex: { max: 100, value: 100 },
    description: "***INIT***",
    biography: "",
    macros: {
        type: "script",
        command: ""
    }
};

const ACTOR_CHARACTER_DEFAULTS = mergeDefaults(ACTOR_BASE_DEFAULTS, {
    gender: "",
    occupation: ""
});

const ACTOR_CREATURE_DEFAULTS = mergeDefaults(ACTOR_BASE_DEFAULTS, {
    loadRating: 0
});

const ACTOR_CONTAINER_DEFAULTS = {
    bioImage: "systems/hm3/images/icons/svg/chest.svg",
    description: "",
    macros: {},
    capacity: {
        max: 0
    }
};

const ITEM_BASE_DEFAULTS = {
    notes: "",
    description: "",
    source: "",
    macros: {
        type: "script",
        command: ""
    }
};

const ITEM_GEAR_DEFAULTS = {
    quantity: 1,
    value: 0,
    weight: 0,
    isCarried: true,
    isEquipped: true,
    container: "on-person",
    arcane: {
        isArtifact: false,
        isAttuned: false,
        charges: -1,
        ego: 0
    }
};

const ITEM_WEAPON_DEFAULTS = {
    assocSkill: "None",
    weaponQuality: 0,
    attackMasteryLevel: 0
};

const ITEM_TYPE_DEFAULTS = {
    skill: mergeDefaults(ITEM_BASE_DEFAULTS, {
        type: "Craft",
        skillBase: {
            value: 0,
            formula: "",
            isFormulaValid: true
        },
        masteryLevel: 0,
        effectiveMasteryLevel: 0,
        ritual: {
            piety: 0
        },
        improveFlag: false
    }),
    spell: mergeDefaults(ITEM_BASE_DEFAULTS, {
        convocation: "",
        level: 1,
        effectiveMasteryLevel: 0
    }),
    invocation: mergeDefaults(ITEM_BASE_DEFAULTS, {
        deity: "",
        circle: 1,
        effectiveMasteryLevel: 0
    }),
    psionic: mergeDefaults(ITEM_BASE_DEFAULTS, {
        skillBase: {
            value: 0,
            formula: "",
            isFormulaValid: true
        },
        masteryLevel: 0,
        effectiveMasteryLevel: 0,
        improveFlag: false,
        fatigue: 0
    }),
    weapongear: mergeDefaults(ITEM_BASE_DEFAULTS, ITEM_GEAR_DEFAULTS, ITEM_WEAPON_DEFAULTS, {
        attack: 0,
        defense: 0,
        attackModifier: 0,
        blunt: 0,
        edged: 0,
        piercing: 0,
        defenseMasteryLevel: 0
    }),
    missilegear: mergeDefaults(ITEM_BASE_DEFAULTS, ITEM_GEAR_DEFAULTS, ITEM_WEAPON_DEFAULTS, {
        weaponAspect: "Piercing",
        attackModifier: 0,
        range: {
            short: 0,
            medium: 0,
            long: 0,
            extreme: 0
        },
        impact: {
            short: 0,
            medium: 0,
            long: 0,
            extreme: 0
        }
    }),
    armorgear: mergeDefaults(ITEM_BASE_DEFAULTS, ITEM_GEAR_DEFAULTS, {
        material: "",
        armorQuality: 0,
        locations: [],
        protection: {
            blunt: 0,
            edged: 0,
            piercing: 0,
            fire: 0
        },
        size: 6
    }),
    miscgear: mergeDefaults(ITEM_BASE_DEFAULTS, ITEM_GEAR_DEFAULTS),
    containergear: mergeDefaults(ITEM_BASE_DEFAULTS, ITEM_GEAR_DEFAULTS, {
        capacity: {
            max: 1,
            value: 0
        }
    }),
    injury: mergeDefaults(ITEM_BASE_DEFAULTS, {
        healRate: 0,
        injuryLevel: 0,
        severity: ""
    }),
    armorlocation: {
        layers: "",
        armorQuality: 0,
        blunt: 0,
        edged: 0,
        piercing: 0,
        fire: 0,
        isFumble: false,
        isStumble: false,
        isAmputate: false,
        impactType: "custom",
        effectiveImpact: {
            ei1: "M1",
            ei5: "S2",
            ei9: "S3",
            ei13: "G4",
            ei17: "G5"
        },
        probWeight: {
            high: 1,
            mid: 1,
            low: 1
        }
    },
    trait: mergeDefaults(ITEM_BASE_DEFAULTS, {
        type: "Physical"
    })
};

const HM3ActorCharacterData = createTypeDataModelClass(ACTOR_CHARACTER_DEFAULTS);
const HM3ActorCreatureData = createTypeDataModelClass(ACTOR_CREATURE_DEFAULTS);
const HM3ActorContainerData = createTypeDataModelClass(ACTOR_CONTAINER_DEFAULTS);

const HM3ItemSkillData = createTypeDataModelClass(ITEM_TYPE_DEFAULTS.skill);
const HM3ItemSpellData = createTypeDataModelClass(ITEM_TYPE_DEFAULTS.spell);
const HM3ItemInvocationData = createTypeDataModelClass(ITEM_TYPE_DEFAULTS.invocation);
const HM3ItemPsionicData = createTypeDataModelClass(ITEM_TYPE_DEFAULTS.psionic);
const HM3ItemWeaponGearData = createTypeDataModelClass(ITEM_TYPE_DEFAULTS.weapongear);
const HM3ItemMissileGearData = createTypeDataModelClass(ITEM_TYPE_DEFAULTS.missilegear);
const HM3ItemArmorGearData = createTypeDataModelClass(ITEM_TYPE_DEFAULTS.armorgear);
const HM3ItemMiscGearData = createTypeDataModelClass(ITEM_TYPE_DEFAULTS.miscgear);
const HM3ItemContainerGearData = createTypeDataModelClass(ITEM_TYPE_DEFAULTS.containergear);
const HM3ItemInjuryData = createTypeDataModelClass(ITEM_TYPE_DEFAULTS.injury);
const HM3ItemArmorLocationData = createTypeDataModelClass(ITEM_TYPE_DEFAULTS.armorlocation);
const HM3ItemTraitData = createTypeDataModelClass(ITEM_TYPE_DEFAULTS.trait);

export function registerHM3DataModels() {
    if (!foundry?.abstract?.TypeDataModel || !foundry?.data?.fields) {
        console.warn("HM3 | TypeDataModel APIs unavailable; skipping data model registration.");
        return;
    }

    CONFIG.Actor.dataModels ??= {};
    CONFIG.Item.dataModels ??= {};

    CONFIG.Actor.dataModels.character = HM3ActorCharacterData;
    CONFIG.Actor.dataModels.creature = HM3ActorCreatureData;
    CONFIG.Actor.dataModels.container = HM3ActorContainerData;

    CONFIG.Item.dataModels.skill = HM3ItemSkillData;
    CONFIG.Item.dataModels.spell = HM3ItemSpellData;
    CONFIG.Item.dataModels.invocation = HM3ItemInvocationData;
    CONFIG.Item.dataModels.psionic = HM3ItemPsionicData;
    CONFIG.Item.dataModels.weapongear = HM3ItemWeaponGearData;
    CONFIG.Item.dataModels.containergear = HM3ItemContainerGearData;
    CONFIG.Item.dataModels.missilegear = HM3ItemMissileGearData;
    CONFIG.Item.dataModels.armorgear = HM3ItemArmorGearData;
    CONFIG.Item.dataModels.miscgear = HM3ItemMiscGearData;
    CONFIG.Item.dataModels.injury = HM3ItemInjuryData;
    CONFIG.Item.dataModels.armorlocation = HM3ItemArmorLocationData;
    CONFIG.Item.dataModels.trait = HM3ItemTraitData;
}