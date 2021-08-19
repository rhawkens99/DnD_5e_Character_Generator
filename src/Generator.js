// lists to contain info from each book to allow user to choose which source materials to use
// 1
const phb = {
    "races": ["Hill Dwarf", "Mountain Dwarf", "High Elf", "Wood Elf", "Dark Elf", "Lightfoot Halfling",
        "Stout Halfling", "Human", "Variant Human", "Dragonborn", "Forest Gnome", "Rock Gnome", "Half Elf", "Half Orc", "Tiefling"],
    "classes": ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"],
    "backgrounds": ["Acolyte", "Charlatan", "Criminal", "Enertainer", "Folk Hero", "Guild Artisan",
        "Hermit", "Noble", "Outlander", "Sage", "Sailor", "Soldier", "Urchin"],
    "subclasses": {
        "Barbarian": ["Path of the Beserker", "Path of the Totem Warrrior"],
        "Bard": ["College of Lore", "College of Valor"],
        "Cleric": ["Knowledge Domain", "Life Domain", "Light Domain", "Nature Domain", "Tempest Domain", "Trickery Domain", "War Domain"],
        "Druid": ["Circle of the Land", "Circle of the Moon"],
        "Fighter": ["Champion", "Battle Master", "Eldritch Knight"],
        "Monk": ["Way of the Open Hand", "Way of Shadow", "Way of the Four Elements"],
        "Paladin": ["Oath of Devotion", "Oath of the Ancients", "Oath of Vegenance"],
        "Ranger": ["Hunter", "Beast Master"],
        "Rogue": ["Thief", "Assassin", "Arcane Trickster"],
        "Sorcerer": ["Draconic Bloodline", "Wild Magic"],
        "Warlock": ["The Archfey", "The Fiend", "The Great Old One"],
        "Wizard": ["School of Abjuration", "School of Conjuration", "School of Divination", "School of Enchantment",
            "School of Evocation", "School of Illusion", "School of Necromancy", "School of Transmutation"]
    }
}

// 2
const xanathar = {
    "subclasses": {
        "Barbarian": ["Path of the Ancestral Guardian", "Path of the Storm Herald", "Path of the Zealot"],
        "Bard": ["College of Glamour", "College of Swords", "College of Whispers"],
        "Cleric": ["Forge Domain", "Grave Domain"],
        "Druid": ["Circle of Dreams", "Circle of the Sheperd"],
        "Fighter": ["Arcane Archer", "Cavalier", "Samurai"],
        "Monk": ["Way of Shadow", "Way of the Drunken Master", "Way of the Sun Soul"],
        "Paladin": ["Oath of Conquest", "Oath of Redemption"],
        "Ranger": ["Gloom Stalker", "Horizon Walker", "Monster Slayer"],
        "Rogue": ["Inquisitive", "Mastermind", "Scout", "Swashbuckler"],
        "Sorcerer": ["Divine Soul", "Shadow Magic", "Storm Sorcery"],
        "Warlock": ["The Celestial", "The Hexblade"],
        "Wizard": ["War Magic"]
    }
}

// 3
const volo = {
    "races": ["Fallen Aasimar", "Protector Aasimar", "Scourge Aasimar", "Bugbear", "Firbolg", "Goblin", "Goliath", "Hobgoblin", "Kenku", "Kobold",
        "Lizardfolk", "Orc", "Tabaxi", "Triton", "Yuan-ti Pureblood"]
}

// 4
const tasha = {
    "classes": ["Artificer"],
    "subclasses": {
        "Artificer": ["Alchemist", "Armorer", "Artillerist", "Battle Smith"],
        "Barbarian": ["Path of the Beast", "Path of Wild Magic"],
        "Bard": ["College of Creation", "College of Eloquence"],
        "Cleric": ["Order Domain", "Peace Domain", "Twilight Domain"],
        "Druid": ["Circle of Spores", "Circle of Stars", "Circle of Wildfire"],
        "Fighter": ["Psi Warrior", "Rune Knight"],
        "Monk": ["Way of Mercy", "Way of Astral Self"],
        "Paladin": ["Oath of Glory", "Oath of the Watchers"],
        "Ranger": ["Fey Wanderer", "Swarmkeeper"],
        "Rogue": ["Phantom", "Soulknife"],
        "Sorcerer": ["Abberant Mind", "Clockwork Soul"],
        "Warlock": ["The Fathomless", "The Genie"],
        "Wizard": ["Bladesinging", "Order of Scribes"]
    }
}

// 5
const sword_coast = {
    "races": ["Deep Gnome", "Aquatic Descent Half-Elf", "Drow Descent Half-Elf", "Moon Elf Descent Half-Elf", "Sun Elf Descent Half-Elf", "Wood Elf Descent Half-Elf",
        "Ghostwise Halfling", "Devil's Tongue Tiefling", "Hellfire Tiefling", "Infernal Legacy Tiefling", "Winged Tiefling"],
    "backgrounds": ["City Watch", "City Watch (Investigator)", "Clan Crafter", "Cloistered Scholar", "Courtier", "Faction Agent", "Far Traveler", "Inheritor",
        "Knight of the Order", "Mercenary Veteran", "Urban Bounty Hunter", "Uthgardt Tribe Member", "Waterdhavian Noble"],
    "subclasses": {
        "Barbarian": ["Path of the Battlerager"],
        "Cleric": ["Arcana Domain"],
        "Fighter": ["Purple Dragon Knight (Banneret)"],
        "Monk": ["Way of the Long Death", "Way of the Sun Soul"],
        "Paladin": ["Oath of the Crown"],
        "Rogue": ["Mastermind", "Swashbuckler"],
        "Sorceror": ["Storm Sorcery"],
        "Warlock": ["The Undying"],
        "Wizard": ["Bladesinging"]
    }
}

// 6
const wildemount = {
    "races": ["Pallid Elf", "Sea Elf", "Orc", "Lotusden Halfling", "Draconblood Dragonborn", "Ravenite Dragonborn", "Aarakocra", "Protector Aasimar",
        "Scourge Aasimar", "Fallen Aasimar", "Firbolg", "Air Genasi", "Earth Genasi", "Fire Genasi", "Water Genasi", "Goblin", "Hobgoblin", "Bugbear", "Goliath",
        "Kenku", "Tabaxi", "Tortle", "Hollow One"],
    "backgrounds": ["Augen Trust (Spy)", "Cobalt Scholar (Sage)", "Grinner", "Luxonborn (Acolyte)", "Myriad Operative (Criminal)", "Revelry Pirate (Sailor)",
        "Volstrucker Agent"],
    "subclasses": {
        "Fighter": ["Echo Knight"],
        "Wizard": ["Chronurgy Magic", "Graviturgy Magic"]
    }
}

// 7
const eberron = {
    "races": ["Bugbear", "Changelings", "Mark of Warding Dwarf", "Mark of Shadow Elf", "Mark of Scribing Gnome", "Goblin", "Mark of Detection Half-Elf",
        "Mark of Storm Half-Elf", "Mark of Finding Half-Orc", "Mark of Healing Halfling", "Mark of Hospitality Halfling", "Hobgoblin", "Mark of Finding Human",
        "Mark of Handling Human", "Mark of Making Human", "Mark of Passage Human", "Mark of Sentinel Human", "Kalashtar", "Orc", "Beasthide Shifter", "Longtooth Shifter",
        "Swiftstride Shifter", "Wildhunt Shifter", "Warforged"],
    "classes": ["Artificer"],
    "backgrounds": ["House Agent"],
    "subclasses": {
        "Artificer": ["Alchemist", "Artillerist", "Battle Smith"]
    }
}

// 8
const elemental_evil = {
    "races": ["Aarakocra", "Air Genasi", "Earth Genasi", "Fire Genasi", "Water Genasi", "Deep Gnome", "Goliath"]
}

// 9
const acquisitions_inc = {
    "backgrounds": ["Celebrity Adventurer's Scion", "Failed Merchant", "Gambler", "Plaintiff", "Rival Intern"],
    "races": ["Verdan"]
}

// 10
const ravinca = {
    "races": ["Centaur", "Goblin", "Loxodon", "Minotaur", "Simic Hybrid", "Vedalken"],
    "backgrounds": ["Azorius Functionary", "Boros Legionnaire", "Dimir Operative", "Golgari Agent", "Gruul Anarch", "Izzet Engineer", "Orzhov Representative",
        "Rakdos Cultist", "Selesnya Initiate", "Simic Scientist"],
    "subclasses": {
        "Cleric": ["Order Domain"],
        "Druid": ["Circle of Spores"]
    }
}

// 11
const theros = {
    "races": ["Centaur", "Leonin", "Minotaur", "Satyr", "Triton"],
    "backgrounds": ["Athlete"],
    "subclasses": {
        "bard": ["College of Eloquence"],
        "paladin": ["Oath of Glory"]
    }
}

// 12
const ravenloft = {
    "races": ["Dhampir", "Hexblood", "Reborn"],
    "backgrounds": ["Haunted One", "Investigator", "Inheritor"],
    "subclasses": {
        "bard": ["College of Spirits"],
        "warlock": ["The Undead"]
    }
}

// 13
const descent_into_avernus = {
    "backgrounds": ["Baldur's Gate Acolyte", "Baldur's Gate Charlatan", "Baldur's Gate Criminal", "Baldur's Gate Enertainer", "Baldur's Gate Folk Hero",
        "Baldur's Gate Guild Artisan", "Baldur's Gate Hermit", "Baldur's Gate Noble", "Baldur's Gate Outlander", "Baldur's Gate Sage",
        "Baldur's Gate Sailor", "Baldur's Gate Soldier", "Baldur's Gate Urchin", "Faceless"]
}

// 14
const curse_of_strahd = {
    "backgrounds": ["Haunted One"]
}

// 15
const ghosts_of_saltmarsh = {
    "backgrounds": ["Fisher", "Marine", "Shipwright", "Smuggler"]
}

// 16
const tomb_of_annhilation = {
    "backgrounds": ["Anthropologist", "Archaeologist"]
}

// only PHB atm
export function generateCharacter() {

    // grab elements
    let randRace = phb.races[Math.floor(Math.random() * phb.races.length)];
    let randClass = phb.classes[Math.floor(Math.random() * phb.classes.length)];
    let randBackground = phb.backgrounds[Math.floor(Math.random() * phb.backgrounds.length)];
    let randSubclass = '';

    // find subclass
    if (randClass === 'Barbarian') {
        randSubclass = phb.subclasses.Barbarian[Math.floor(Math.random() * phb.subclasses.Barbarian.length)];
    }

    else if (randClass === 'Bard') {
        randSubclass = phb.subclasses.Bard[Math.floor(Math.random() * phb.subclasses.Bard.length)];
    }

    else if (randClass === 'Cleric') {
        randSubclass = phb.subclasses.Cleric[Math.floor(Math.random() * phb.subclasses.Cleric.length)];
    }

    else if (randClass === 'Druid') {
        randSubclass = phb.subclasses.Druid[Math.floor(Math.random() * phb.subclasses.Druid.length)];
    }

    else if (randClass === 'Fighter') {
        randSubclass = phb.subclasses.Fighter[Math.floor(Math.random() * phb.subclasses.Fighter.length)];
    }

    else if (randClass === 'Monk') {
        randSubclass = phb.subclasses.Monk[Math.floor(Math.random() * phb.subclasses.Monk.length)];
    }

    else if (randClass === 'Paladin') {
        randSubclass = phb.subclasses.Paladin[Math.floor(Math.random() * phb.subclasses.Paladin.length)];
    }

    else if (randClass === 'Ranger') {
        randSubclass = phb.subclasses.Ranger[Math.floor(Math.random() * phb.subclasses.Ranger.length)];
    }

    else if (randClass === 'Sorcerer') {
        randSubclass = phb.subclasses.Sorcerer[Math.floor(Math.random() * phb.subclasses.Sorcerer.length)];
    }

    else if (randClass === 'Warlock') {
        randSubclass = phb.subclasses.Warlock[Math.floor(Math.random() * phb.subclasses.Warlock.length)];
    }

    else if (randClass === 'Wizard') {
        randSubclass = phb.subclasses.Wizard[Math.floor(Math.random() * phb.subclasses.Wizard.length)];
    }

    // print to screen
    console.log("Race: " + randRace);
    console.log("Class: " + randClass);
    console.log("Background: " + randBackground);
    console.log("Subclass: " + randSubclass);
}