var gameState = {
    "entrances": [
      {
        "image": "entrance2.jpg",
        "key": "main",
        "name": "Main Entrance",
        "public": true,
        "room": "atrium"
      },
      {
        "image": "spiral.jpg",
        "key": "society",
        "name": "A Spiral Staircase Under the Gazeebo",
        "password": "SPIRALSTAIRCASE",
        "public": false,
        "room": "library_loop_hub",
        "unlockedPublicly": true
      }
    ],
    "rooms": {
      "abarrane_aarne_alcove": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "abarrane_practice_room",
            "requirements": "STRENGTH OR TELEPORT",
            "text": "<div>Return to the practice room</div>"
          }
        ],
        "id": "075",
        "image": "",
        "message": "",
        "recurringItems": [],
        "text": "<div>Despite the difficulty in seeing this alcove from the outside, it's actually a fairly comfortable size inside. It's very cluttered with ancient notebooks and scraps of paper and the walls are lined with scrawls of text and calculation. You can't make out very much of it but it seems like someone worked very hard here.</div>",
        "title": "A Small Alcove",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "aarne_notebook_slip",
            "location": "Folder 075",
            "name": "Research Journal Excerpt",
            "quantity": 1
          }
        ]
      },
      "abarrane_courtroom": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "abarrane_planning_chambers",
            "requirements": "DUPLICATE OR HALLUCINATE OR TELEPORT",
            "text": "<div>Climb the ladder to the door marked with two buildings connected by a road</div>"
          },
          {
            "color": "black",
            "destination": "abarrane_workshop",
            "requirements": "QUICKSAND OR SPARK OR DAZZLE OR TELEPORT",
            "text": "<div>Open the door marked with a plane and chisel</div>"
          }
        ],
        "id": "001",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>An unadorned, throne-like chair with two smaller chairs beside it sits on a dias. Before the dias are three metal cages, each large enough to hold a full-grown person. The room is light with bright white light that penetrates into every corner. Behind the dias is a mosaic depicting a stylized image of a person with one palm turned up and one turned down. The person's eyes are oversized and seem to shine.</div>",
        "title": "Courtroom",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "adept_alchemy_shimmering_shards",
            "location": "Folder 001",
            "name": "Shimmering Glass Shards",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "sumai_execution_poster",
            "location": "Folder 001",
            "name": "Notice: Public Hanging",
            "quantity": 1
          }
        ]
      },
      "abarrane_library": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "abarrane_relic_room",
            "requirements": "SYMPHONY OR  QUICKSAND OR UNDERSTAND OR TELEPORT",
            "text": "<div>Descend to the basement</div>"
          },
          {
            "color": "black",
            "destination": "abarrane_opera_house",
            "requirements": "QUICKSAND OR FRIGHTEN OR SILENCE OR TELEPORT",
            "text": "<div>Open the door marked with open-mouthed people</div>"
          }
        ],
        "id": "060",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A library whose shelves are primarily filled with large bound volumes written in a complex notation that is neither Pasiru nor any language you can identify. From the titles, these appear to be Ancient sheet music. The shelves also hold other sorts of documents. The shelves are made of glass somehow fused with wood; many of the shelves have a transparent glass bar across them, preventing you from taking down the books. The walls are decorated with vivid paintings of people engaged in dramatic action scenes (raising hands to stop towering tidal waves, fighting each other with swords, adding bricks to the top of a cloud-piercing tower, and the like).</div>",
        "title": "Archive of Symphonies",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "art_hero_painting_alchemy",
            "location": "Folder 060",
            "name": "Painting of Abarrane",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ]
      },
      "abarrane_musician_league": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "abarrane_opera_house",
            "requirements": "QUICKSAND OR TRANSFORM OR DREAM OR TELEPORT",
            "text": "<div>Open the door marked with open-mouthed people</div>"
          },
          {
            "color": "black",
            "destination": "abarrane_courtroom",
            "requirements": "CHEMICAL SPRAY OR SEARCH OR NURSE OR TELEPORT",
            "text": "<div>Open the door marked with a person kneeling at the feet of a second person who has one palm turned up and the other turned down</div>"
          }
        ],
        "id": "098",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>On one wall of this room are a set of lockers made of an unfamiliar material that has not decayed with the passing years. There are 30 cylindrical seats which appear to be growing out of the floor. You discover you can push them around the floor but not lift or overturn them. This room has great acoustics for playing music in. A large tree root runs along the seam between the floor and one of the walls; it appears to be dead, but the wood is so hard you can't damage it with any tools you have on hand.</div><div></div><div>On the walls there are various militaristic style posters describing the benefits of being in the Musicians' League. Paintings of uniformed smiling Musicians' League members posing in the pristine streets of Aaru line the walls.</div>",
        "title": "Musicians' League HQ",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "master_alchemy_ancient_tuning_fork",
            "location": "Folder 098",
            "name": "Ancient Tuning Fork",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "musician_recruitment",
            "location": "Folder 098",
            "name": "Musician's League Recruitment Poster",
            "quantity": 1
          }
        ]
      },
      "abarrane_opera_house": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "abarrane_relic_room",
            "requirements": "QUICKSAND OR DUPLICATE OR HALLUCINATE OR TELEPORT",
            "text": "<div>Descend to the basement</div>"
          },
          {
            "color": "black",
            "destination": "abarrane_ritual",
            "requirements": "ANIMAL FORM OR GRADE OR DAZZLE OR TELEPORT",
            "text": "<div>Exit through the door marked with a big person offering a scroll to a small person</div>"
          },
          {
            "color": "black",
            "destination": "abarrane_library",
            "requirements": "STRENGTH OR TRANSFORM OR SLIP OR TELEPORT",
            "text": "<div>Exit through the door marked with scrolls</div>"
          }
        ],
        "id": "096",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>In this grand hall, tiers of audience seats and three balconies face a wide, deep stage. The proscenium columns and arch are made of glass, gold and graphite, threaded through each other in a way that shouldn't be possible. There are several sets of screens that can be dropped from above the stage or moved in from the wings to make a smaller performance space or divide the stage into several areas. These appear to be controlled by a system of pulleys and levers. The acoustics of the room allow sound from the stage to be heard perfectly from any point in the audience. There are two exits at the back of the audience. A staircase backstage leads to a basement.</div>",
        "title": "Opera House",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "condemn_sumai_rebellion",
            "location": "Folder 096",
            "name": "A letter from Abarrane",
            "quantity": 1
          }
        ]
      },
      "abarrane_planning_chambers": {
        "actions": [],
        "connections": [],
        "id": "046",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "block_concrete",
            "location": "Shared bin",
            "name": "Concrete (Beige Rectangular Prism)",
            "quantity": 1
          }
        ],
        "text": "<div>This room has several small desks at one end and a glass conference table at the other. Affixed to the center of the conference table is a wooden panel with movable pieces shaped like buildings, roads, pipes, fences, trees, etc. The pieces can be rearranged or slid into a recessed bin, but you cannot move them more than a few inches away from the  panel, as though a strong magnetic force were acting on them. Near the conference table is something that looks like a chalkboard, but rather than slate, its surface is an unfamiliar hard, slick material. There are many cabinets and shelves along the walls.</div>",
        "title": "City Planning Chambers",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "a_memo",
            "location": "Folder 046",
            "name": "A Memo",
            "quantity": 1
          }
        ]
      },
      "abarrane_practice_room": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "abarrane_courtroom",
            "requirements": "SYMPHONY OR SEARCH OR SUBDUE OR TELEPORT",
            "text": "<div>Open the door marked with a person kneeling at the feet of a second person with one palm turned up and the other turned down</div>"
          },
          {
            "color": "black",
            "destination": "abarrane_workshop",
            "requirements": "DUPLICATE OR SPARK OR DAZZLE OR TELEPORT",
            "text": "<div>Open the door marked with a plane and chisel</div>"
          },
          {
            "color": "red",
            "destination": "abarrane_musician_league",
            "requirements": "SYMPHONY OR QUICKSAND OR HALLUCINATE  OR TELEPORT",
            "text": "<div>Open the door marked with a row of people playing flutes</div>"
          },
          {
            "color": "black",
            "destination": "abarrane_aarne_alcove",
            "requirements": "Someone in your group must possess the item \"smooth lens\"",
            "text": "<div>Head into a small alcove, the entrance of which is not really visible without some sort of magnification.</div>"
          }
        ],
        "id": "051",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>Around this room are distributed a dozen stools, each surrounded by a ring in the floor. If you sit on a stool, paneling rises from the ring, enclosing you. The panels appear to be soundproof. Rising from the stool causes the paneling to retract back into its recess. On one wall are racks for stacking or hanging objects; they contain a few broken musical instruments. On another wall are two large bins, one full of sand, the other full of shards of glass.</div>",
        "title": "Musical Practice Room",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "adept_life_herbal_paste",
            "location": "Folder 051",
            "name": "Jar of Herbal Paste",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "instrument_cleaning_guide",
            "location": "Folder 051",
            "name": "Care and Cleaning of Your Instrument",
            "quantity": 1
          }
        ]
      },
      "abarrane_relic_room": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "abarrane_library",
            "requirements": "DUPLICATE OR SILENCE OR HEAL OR TELEPORT",
            "text": "<div>Climb the stairs to the door marked with scrolls</div>"
          },
          {
            "color": "black",
            "destination": "abarrane_planning_chambers",
            "requirements": "SYMPHONY OR HEAL OR TELEPORT",
            "text": "<div>Climb the ladder to the door marked with two buildings connected by a road</div>"
          }
        ],
        "id": "084",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_stone",
            "location": "Shared bin",
            "name": "Stone (Grey Cube)",
            "quantity": 1
          }
        ],
        "text": "<div>You descend into a room that appears to be made entirely of glass that glows from within, filling the room with pure white light. There are several pedestals, also made of glass. They are transparent, but when you lay your hands on top of one, it splits apart, revealing a hollow space within that was not visible from the outside. You can exit this room via a staircase or a ladder.</div>",
        "title": "Basement",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "relic_alchemy_original_flute",
            "location": "Folder 084",
            "name": "Original Flute",
            "quantity": 1
          }
        ]
      },
      "abarrane_ritual": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "abarrane_practice_room",
            "requirements": "CHEMICAL SPRAY OR LOCATE OR NURSE OR TELEPORT",
            "text": "<div>Open the door marked with flutes</div>"
          },
          {
            "color": "black",
            "destination": "abarrane_opera_house",
            "requirements": "QUICKSAND OR FRIGHTEN OR OVERWHELM OR TELEPORT",
            "text": "<div>Open the door marked with open-mouthed people</div>"
          }
        ],
        "id": "089",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>In this room are rows of desks and benches sized for children. The desks face a large semicircular counter with many drawers underneath it and a tall stool behind it. Some of the drawers contain objects. On the wall behind it is something that looks like a chalkboard, but rather than slate, its surface is an unfamiliar hard, slick material. The floor is tiled in a checkerboard pattern of darker grey and lighter grey. Two doors lead out of this room. Above one is a plaque showing two flutes. Above the other is a plaque showing two figures with open mouths and gracefully raised hands. On the plaque is written the text \"[015] Tedebukit vebere es za estsub nere kapikum es za estsub nere minitra es za estsub.\"</div>",
        "title": "Education Room",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "calm_the_earth_freq",
            "location": "Folder 089",
            "name": "Canceling the earth\u2019s harmful frequencies",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "keystone",
            "location": "Folder 089",
            "name": "Keystone",
            "quantity": 1
          }
        ]
      },
      "abarrane_theme": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "abarrane_practice_room",
            "requirements": "TRANSFORM OR LOCATE OR CHITIN OR TELEPORT",
            "text": "<div>Open the door marked with flutes</div>"
          },
          {
            "color": "red",
            "destination": "abarrane_library",
            "requirements": "CHEMICAL SPRAY OR SILENCE OR OVERWHELM OR TELEPORT",
            "text": "<div>Open the door marked with scrolls</div>"
          },
          {
            "color": "yellow",
            "destination": "abarrane_ritual",
            "requirements": "TRANSFORM OR ANIMAL FORM OR HEAL OR TELEPORT",
            "text": "<div>Open the door marked with a big person offering a scroll to a small person</div>"
          }
        ],
        "id": "103",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A grandly-proportioned plaza with a fountain in the center and at each corner. The fountains are made of glass and metal that are fused together in a way that shouldn't be possible. No water runs in them. The floor is laid with stone tiles in a checkerboard pattern of dark grey and light tan. A breeze blows from unseen sources. It blows through decorations on the fountains, producing a faint harmonious whistling. From here, doors open onto three rooms.</div>",
        "title": "City Square",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          }
        ]
      },
      "abarrane_workshop": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "abarrane_opera_house",
            "requirements": "QUICKSAND OR TRANSFORM OR DREAM OR TELEPORT",
            "text": "<div>Open the door marked with open-mouthed people</div>"
          },
          {
            "color": "black",
            "destination": "abarrane_musician_league",
            "requirements": "SYMPHONY OR QUICKSAND  OR HALLUCINATE  OR TELEPORT",
            "text": "<div>Open the door marked with a row of people playing flutes</div>"
          }
        ],
        "id": "044",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_wood",
            "location": "Shared bin",
            "name": "Wood (Unpainted Plank)",
            "quantity": 1
          }
        ],
        "text": "<div>This room has many long, scarred workbenches with vises and other bits of hardware attached at intervals. There are drips and splashes of glass, metal, and other less easily identifiable substances all over. There is a small forge in one corner, with tongs for handling hot objects. You don't see any other tools here.</div><div></div><div>There is a prominant sign with text in two languages: \"[497] Ume ksebalim za rekokrisk.\" and \"Do not touch the lab equipment.\"</div>",
        "title": "Workshop",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "ore",
            "location": "Folder 044",
            "name": "Ore",
            "quantity": 2
          },
          {
            "bulkyness": 0,
            "key": "plane_drum",
            "location": "Folder 044",
            "name": "30 Gallon Drum",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "maintenance_melody",
            "location": "Folder 044",
            "name": "Oral History - ????",
            "quantity": 1
          }
        ]
      },
      "andavari_room": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "sumai_pleasure_control",
            "requirements": "STRENGTH OR DAZZLE OR TELEPORT",
            "text": "<div>Exit through the ornate door</div>"
          },
          {
            "color": "black",
            "destination": "sumai_observatory",
            "requirements": "UNDERSTAND OR CHARM OR HEAL OR TELEPORT",
            "text": "<div>Go through a round porthole</div>"
          }
        ],
        "id": "079",
        "image": "",
        "message": "",
        "recurringItems": [],
        "text": "<div>This room is a staggeringly beautiful artificial garden.  You first notice the enormous sculpted trees, carved out of black stone, which arch gracefully over the space and give an air of wooded seclusion.  There are many flowers here, crafted some semi-precious gems, and the floor is a mosaic tiled with a floral motif.  A broad bed surrounded by ornate candlesticks has been placed against the far wall.  If you examine the trees closely, you find that there is graffiti - 'PK', at the center of a daisy-like symbol.  At the base of this tree, a secret compartment has been carefully concealed between two roots.</div>",
        "title": "Chamber of the Sable Trees",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "andavari_seed",
            "location": "Folder 079",
            "name": "Andavari Seed",
            "quantity": 1
          }
        ]
      },
      "anti_fungus": {
        "actions": [
          {
            "event": "noEvent",
            "requirements": "Consume 5 Gemstones of any color(s)",
            "text": "Learn from the illustrations. If you do so, one character may acquire a copy of the \"Destroy Mushroom\" card from the Delta Mu packet if they do not already have one."
          }
        ],
        "connections": [
          {
            "color": "black",
            "destination": "itzel_theme",
            "requirements": "STRENGTH OR LIGHTNING BOLT OR TELEPORT",
            "text": "<div>Head into the cave entry</div>"
          },
          {
            "color": "black",
            "destination": "society_room",
            "requirements": "NURSE OR SILENCE OR TELEPORT",
            "text": "<div>Head into a small, well lit, room</div>"
          }
        ],
        "id": "049",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This expansive hall contains numerous large chambers, each with an illustration engraved on the door depicting the training that once took place within. Scenes show youths engaged in tasks like cleaning instruments, wrangling animals, and eliminating fungal growths. Only one chamber still hums with a trickle of energy - the room that seems to show an old woman teaching a young child how to create a ball of energy to incinerate a strangely-colored mushroom.  Though only one chamber is still active, the vast size of this facility and many illustrated doors speak to this hall's purpose.</div>",
        "title": "Youth Training Chambers",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "ashur_train_destruction",
            "location": "Folder 049",
            "name": "A Letter from Instructor Trina",
            "quantity": 1
          }
        ]
      },
      "ashur_Quintessence_vault": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "ashur_storm_spire",
            "requirements": "SCORCH OR HEAL OR TELEPORT",
            "text": "<div>Go through the door engraved with a tower topped with a crystal</div>"
          }
        ],
        "id": "093",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "block_adornment",
            "location": "Shared bin",
            "name": "Adornments (Pink Cone)",
            "quantity": 1
          }
        ],
        "text": "<div>This circular chamber's walls are lined with thick metal doors etched with mystical wards, now inactive. Peering through small viewing windows reveals most vaults stand dark and empty. Only a few hold crystalline structures flickering with the last fading embers of energy - dwindling remnants of the storm's quintessential power. Though largely inert, a rare active vault hints at the prodigious energies once harvested here.</div>",
        "title": "The Quintessence Vault",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ]
      },
      "ashur_aviary": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "ashur_Quintessence_vault",
            "requirements": "FORCEWALL OR MIRROR OR TELEPORT",
            "text": "<div>Go through the door engraved with a lightning bolt enclosed in a globe</div>"
          },
          {
            "color": "black",
            "destination": "ashur_vendrekk_conservatory",
            "requirements": "SPARK OR UNDERSTAND OR TELEPORT",
            "text": "<div>Go through the door with a mosaic pattern of scales</div>"
          }
        ],
        "id": "063",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This massive domed chamber shows signs of habitation by large, powerful creatures. Gouges and scorch marks scar the stone walls, which are carved with depictions of immense serpents. Shattered stone plinths and perches hint at enclosures for giant beasts. You surmise this aviary once providing room for legendary creatures to fly and engage in aerial sparring. Though vacant now, evidence of their epic clashes remains etched into the chamber's battered walls and statues.</div>",
        "title": "The Aviary",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "adept_spatial_ritual_leaf_cup",
            "location": "Folder 063",
            "name": "Ritual Leaf Cup",
            "quantity": 1
          }
        ]
      },
      "ashur_library": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "ashur_storm_forge",
            "requirements": "ENERVATE OR COMPEL OR FORCEWALL OR TELEPORT",
            "text": "<div>Go through the door with hammers engraved around its frame</div>"
          },
          {
            "color": "black",
            "destination": "ashur_lightning_grove",
            "requirements": "TREMOR OR HALLUCINATE OR LIGHTNING BOLT OR TELEPORT",
            "text": "<div>Go through the arch that crackles with static electricity</div>"
          }
        ],
        "id": "015",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This expansive library contains rows of stone shelves holding countless scrolls, tablets, and tomes. The rows stretch as far as you can see, the aisles twisting and turning into the vast recesses. Scanning the nearest texts, you find every document annotated with pictures of legendary feats - storms summoned, lightning wielded, sky serpents tamed. As you traverse the maze of shelves, you come across sections dedicated to particular eras and feats, each book seeming to claim superiority over its predecssor's feats.</div>",
        "title": "The Labyrinthine Archives ",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "art_hero_painting_energy",
            "location": "Folder 015",
            "name": "Painting of Ashur",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "ashur_earthquake_sensor_network",
            "location": "Folder 015",
            "name": "A Letter from Magister Thalia",
            "quantity": 1
          }
        ]
      },
      "ashur_lightning_grove": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "ashur_aviary",
            "requirements": "ENERVATE OR ANIMAL FORM OR TELEPORT",
            "text": "<div>Go through door engraved with a flying serpent</div>"
          },
          {
            "color": "black",
            "destination": "ashur_lodestone_chamber",
            "requirements": "TREMOR OR COMPEL OR HEAL OR TELEPORT",
            "text": "<div>Go through the door with a pattern of rods and coils engraved around its frame</div>"
          },
          {
            "color": "black",
            "destination": "ashur_library",
            "requirements": "FORCEWALL OR UNDERSTAND OR TELEPORT",
            "text": "<div>Go through the door engraved with a book and lightning bolt</div>"
          }
        ],
        "id": "040",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This immense sanctuary consists of rows of towering crystals interspersed with metal poles and structures. Looking up, the metal fixtures resemble elaborate lightning rods. The crystals at their bases crackle with latent energy in shades of purple, blue, and white. Reviewing the nearest inscriptions, you find records of storm types, dates, and resulting energy colors, each seeming to correspond to a different crystal structure. The chamber is vast, and latent wisps of storm clouds of different types swirl around across the distant ceiling.</div>",
        "title": "The Lightning Grove",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "adept_energy_vendrekk_scale",
            "location": "Folder 040",
            "name": "Vendrekk Scale",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "ashur_awesome_magic_weapons",
            "location": "Folder 040",
            "name": "A Letter from Master Quellen",
            "quantity": 1
          }
        ]
      },
      "ashur_lodestone_chamber": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "ashur_aviary",
            "requirements": "CHITIN OR ENERVATE OR TELEPORT",
            "text": "<div>Go through door engraved with a flying serpent</div>"
          },
          {
            "color": "black",
            "destination": "ashur_theme",
            "requirements": "SPARK OR SCORCH OR GUST OR TELEPORT",
            "text": "<div>Go through the door engraved with a person riding a flying serpent</div>"
          }
        ],
        "id": "070",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This circular chamber contains a ring of towering crystalline pillars surrounding a central raised dais. The dais holds an intricate apparatus of metal rods, coils and lodestones engraved with mystical symbols. Faded paintings on the walls depict figures manipulating the mechanisms. Reviewing the instructions etched nearby reveals placards that hint at the room's purpose - through practice here, disciples learned to attract, shape and bind magical forces.</div>",
        "title": "The Lodestone Chamber",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ]
      },
      "ashur_storm_forge": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "ashur_tempestarium",
            "requirements": "ENERVATE OR FRIGHTEN OR TELEPORT",
            "text": "<div>Go through the door with blackened edges</div>"
          },
          {
            "color": "black",
            "destination": "ashur_aviary",
            "requirements": "MIRROR OR SCORCH OR SUBDUE OR TELEPORT",
            "text": "<div>Go through door engraved with a flying serpent</div>"
          }
        ],
        "id": "057",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This chamber shows signs of intense industry. Massive forges, anvils, and shaping equipment fill the space, crafted from engraved metals that still faintly spark with traces of power. Scattered tools and molds suggest this forge was used to craft intricate objects and weaponry. Forged friezes on the walls depict figures wielding ornate swords, staves, and other imposing relics. The residual energy humming within the metal apparatus hints at the incredible forces that were once shaped and bound here through mystical craftsmanship.</div>",
        "title": "The Storm Forge",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "focusing_spike",
            "location": "Folder 057",
            "name": "Focusing Spike",
            "quantity": 1
          }
        ]
      },
      "ashur_storm_spire": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "ashur_Quintessence_vault",
            "requirements": "FORCEWALL OR HALLUCINATE OR TELEPORT",
            "text": "<div>Go through the door engraved with a lightning bolt enclosed in a globe</div>"
          }
        ],
        "id": "033",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_concrete",
            "location": "Shared bin",
            "name": "Concrete (Beige Rectangular Prism)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This colossal tower stretches skyward, its metal structure engraved with mystical conduits pulsing with power. Peering upwards reveals an immense crystal matrix at its apex. At the base, robust cabling channels a weak trickle of cascading energies down into subterranean depths. Though now dimmed, the residual thrum conveys the sheer scale of forces once commanded here.</div>",
        "title": "The Storm Spire",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "master_energy_quintessence",
            "location": "Folder 033",
            "name": "Pure Quintessence",
            "quantity": 1
          }
        ]
      },
      "ashur_tempestarium": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "ashur_storm_forge",
            "requirements": "SPARK OR SCORCH OR TELEPORT",
            "text": "<div>Go through the door with hammers engraved around its frame</div>"
          },
          {
            "color": "black",
            "destination": "ashur_storm_spire",
            "requirements": "GUST OR HALLUCINATE OR SLIP OR TELEPORT",
            "text": "<div>Go through the door engraved with a tower topped with a crystal</div>"
          }
        ],
        "id": "030",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This tall chamber shows signs of intense magical use. Scorch marks scar the stone walls, which are carved with airborne figures and serpents. Far above, you can discern metal and crystal spires built atop high stone plateaus, reachable only by flight. You surmise these served as practice targets of some sort, with the areas around them scorched with lightning and crumbling rock.</div>",
        "title": "The Tempestarium",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "relic_energy_mana_engine",
            "location": "Folder 030",
            "name": "Mana Engine",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "ashur_angry_statue_destruction",
            "location": "Folder 030",
            "name": "A Threatening Letter Posted on the Wall",
            "quantity": 1
          }
        ]
      },
      "ashur_theme": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "ashur_library",
            "requirements": "GUST OR LOCATE OR TELEPORT",
            "text": "<div>Go through the door engraved with a book and lightning bolt</div>"
          },
          {
            "color": "black",
            "destination": "ashur_vendrekk_conservatory",
            "requirements": "SCORCH OR SILENCE OR TELEPORT",
            "text": "<div>Go through the door with a mosaic pattern of scales</div>"
          },
          {
            "color": "red",
            "destination": "ashur_lightning_grove",
            "requirements": "SPARK OR OVERWHELM OR TELEPORT",
            "text": "<div>Go through the arch that crackles with static electricity</div>"
          }
        ],
        "id": "008",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This grand chamber stretches onwards, its vaulted ceilings arcing high above. Stone friezes depicting majestic storms decorate the upper walls. Lightning bolts and snarling cloud formations appear so vivid you can nearly feel the thunder's boom. The central aisle leads to a raised stone platform and immense statue of a regal, electric-eyed figure wielding a glowing lodestone. His statue crackles with barely contained power, the air humming with latent energy. Flanking the platform, floor-to-ceiling metal pillars are etched with scenes of people wielding primordial forces, lightning arcing at their command.</div>",
        "title": "The Tempest Gallery",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ]
      },
      "ashur_vendrekk_conservatory": {
        "actions": [],
        "connections": [
          {
            "color": "yellow",
            "destination": "ashur_tempestarium",
            "requirements": "TREMOR OR FORCEWALL OR SYMPHONY  OR TELEPORT",
            "text": "<div>Go through the door with blackened edges</div>"
          },
          {
            "color": "black",
            "destination": "ashur_aviary",
            "requirements": "ENERVATE OR COMPEL OR FRIGHTEN  OR TELEPORT",
            "text": "<div>Go through door engraved with a flying serpent</div>"
          }
        ],
        "id": "014",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This vast domed chamber shows signs of once housing grand enclosures, though now only remnants remain. The faded frescoes on the walls depict swirling storms and sinuous winged beasts. Scattered across the floor are broken troughs, perches, and platformed nests - equipage for housing creatures of tremendous size and power. The sheer scale of the chamber and supporting amenities speak to the formidable presence that once dwelled within these hallowed walls.</div>",
        "title": "The Vendrekk Conservatory",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "ashur_temp_humidity_control",
            "location": "Folder 014",
            "name": "A Letter with a Large Dark Stain",
            "quantity": 1
          }
        ]
      },
      "atrium": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "path_hub",
            "requirements": "STRENGTH OR TELEPORT",
            "text": "<div>Head towards the cacophany of sights, sounds and smells</div>"
          },
          {
            "color": "black",
            "destination": "corridor_1",
            "requirements": "STRENGTH OR TELEPORT",
            "text": "<div>Head down the clean and bright hallway</div>"
          }
        ],
        "id": "108",
        "image": "",
        "message": "",
        "recurringItems": [],
        "text": "<div>As you enter the delve you climb down a large stone shaft. Towards the bottom there is a lighted area with two hallways leading in different directions.</div>",
        "title": "Atrium",
        "uniqueItems": []
      },
      "bodua_alcove": {
        "actions": [],
        "connections": [
          {
            "color": "red",
            "destination": "bodua_pool_connection",
            "requirements": "MIRROR OR SPARK OR TELEPORT",
            "text": "<div>Head towards the sound of rushing water</div>"
          },
          {
            "color": "black",
            "destination": "bodua_playroom",
            "requirements": "ANIMAL FORM OR DAZZLE OR TELEPORT",
            "text": "<div>Head outside towards a colorful area</div>"
          }
        ],
        "id": "004",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>You walk into the sleeping alcove and find it remarkably well preserved. Somehow the leaves making up the bed are still green and if you sit down on it, it is very soft. Beside the bed is a very ornate chest of drawers.</div>",
        "title": "Sleeping Alcove",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "relic_spatial_perfect_stone",
            "location": "Folder 004",
            "name": "Perfect Stone",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "sumai_tricked_bodua_doc",
            "location": "Folder 004",
            "name": "A letter from Ashante",
            "quantity": 1
          }
        ]
      },
      "bodua_cave_map": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "bodua_playroom",
            "requirements": "ANIMAL FORM OR OVERWHELM OR CHARM OR TELEPORT",
            "text": "<div>Head out the side entrance</div>"
          },
          {
            "color": "black",
            "destination": "bodua_library",
            "requirements": "MIRROR OR QUICKSAND OR TELEPORT",
            "text": "<div>Return thru the open window</div>"
          }
        ],
        "id": "062",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>After wading through a small stream, you find a gap in the wall. Squeezing through the gap, you find a small cavern, damp but otherwise comfortable. On one wall you see what appears to be a carefully carved image with hollow circles in a strangely vibrant blue ink. Below the image is text in Pasiru saying \"[906] brislangat lopteltiense es za vero\".</div>",
        "title": "A Damp Cavern",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ]
      },
      "bodua_clearing": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "bodua_garden",
            "requirements": "MIRROR OR CHARM OR TELEPORT",
            "text": "<div>Head towards the manicured area</div>"
          },
          {
            "color": "yellow",
            "destination": "bodua_control",
            "requirements": "STRENGTH OR TELEPORT OR SEARCH",
            "text": "<div>Head towards a buzzing room</div>"
          },
          {
            "color": "black",
            "destination": "mushroom_shrine_3",
            "requirements": "LOCATE OR FORCEWALL OR FRIGHTEN OR TELEPORT",
            "text": "<div>Head towards the smaller manicured area</div>"
          }
        ],
        "id": "035",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>The clearing in the trees is peaceful and has comfortable stumps to sit on. One large, dead tree root is made of much harder wood than the others; you can't damage it with any tools you have on hand. While now it is quiet, you imagine at some point many animals and people would have gathered here.</div>",
        "title": "Clearing in the Trees",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "adept_energy_vendrekk_scale",
            "location": "Folder 035",
            "name": "Vendrekk Scale",
            "quantity": 1
          }
        ]
      },
      "bodua_control": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "bodua_theme",
            "requirements": "STRENGTH OR TELEPORT",
            "text": "<div>Go back to the jungle remnants</div>"
          },
          {
            "color": "black",
            "destination": "bodua_cottage",
            "requirements": "TELEPORT",
            "text": "<div>Go to the point labeled \"1\"</div>"
          },
          {
            "color": "black",
            "destination": "society_room",
            "requirements": "TELEPORT",
            "text": "<div>Go to the point labeled \"2\"</div>"
          },
          {
            "color": "black",
            "destination": "library_deep_stacks",
            "requirements": "TELEPORT",
            "text": "<div>Go to the point labeled \"3\"</div>"
          },
          {
            "color": "black",
            "destination": "museum_entrance",
            "requirements": "TELEPORT",
            "text": "<div>Go to the point labeled \"4\"</div>"
          },
          {
            "color": "black",
            "destination": "ashur_tempestarium",
            "requirements": "TELEPORT",
            "text": "<div>Go to the point labeled \"5\"</div>"
          }
        ],
        "id": "090",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This room feels intense, as if it is filled with great power. It appears to have a complicated series of lines and connections drawn all over the walls and floor, but the patterns are inexplicable to a casual observer.</div>",
        "title": "The Room of all Rooms",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "come_to_aaru_rebellion",
            "location": "Folder 090",
            "name": "Want to have some fun?",
            "quantity": 1
          }
        ]
      },
      "bodua_cottage": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "bodua_playroom",
            "requirements": "SLIP OR MIRROR OR INSIGHT OR TELEPORT",
            "text": "<div>Head out of the cottage towards a colorful area</div>"
          },
          {
            "color": "black",
            "destination": "bodua_garden",
            "requirements": "CLAIRVOYANCE OR HALLUCINATE OR TELEPORT",
            "text": "<div>Head out of the cottage towards a manicured area</div>"
          },
          {
            "color": "black",
            "destination": "mushroom_shrine_3",
            "requirements": "ANIMAL FORM OR CHEMICAL SPRAY OR TELEPORT",
            "text": "<div>Head towards a slightly smelly area</div>"
          }
        ],
        "id": "094",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "block_adornment",
            "location": "Shared bin",
            "name": "Adornments (Pink Cone)",
            "quantity": 1
          }
        ],
        "text": "<div>At the very back of the cavern there seems to be the remnants of a small village - perhaps some people once lived here. You enter into the largest of the small cottages. It is impeccably clean despite the years. There's a small sleeping alcove, a fireplace and a few old documents.</div>",
        "title": "Cottage in the Village",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "master_spatial_preserved_water_vial",
            "location": "Folder 094",
            "name": "Preserved Water Vial",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ]
      },
      "bodua_garden": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "bodua_pool_connection",
            "requirements": "MIRROR OR LOCATE OR SYMPHONY OR TELEPORT",
            "text": "<div>Head towards the sound of rushing water</div>"
          },
          {
            "color": "green",
            "destination": "bodua_control",
            "requirements": "LOCATE OR ENERVATE OR TELEPORT",
            "text": "<div>Head towards a buzzing room</div>"
          }
        ],
        "id": "011",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_wood",
            "location": "Shared bin",
            "name": "Wood (Unpainted Plank)",
            "quantity": 1
          }
        ],
        "text": "<div>Walking into the corner you find yourself feeling at peace. The light is dim here, although you can see the light from the room you left in the distance. This area appears as if at one point it were a pleasant sitting garden that would have been filled with lush plant life. Now, however, it appears to be nearly completely dead. But even in its death, it is still a comforting and calming place that makes you want to sit and rest a while.</div>",
        "title": "A Pleasant Alcove Garden",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "adept_spatial_ritual_leaf_cup",
            "location": "Folder 011",
            "name": "Ritual Leaf Cup",
            "quantity": 1
          }
        ]
      },
      "bodua_library": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "bodua_alcove",
            "requirements": "LOCATE OR HEAL OR TELEPORT",
            "text": "<div>Go into the sleeping alcove</div>"
          },
          {
            "color": "black",
            "destination": "bodua_pool_connection",
            "requirements": "ANIMAL FORM OR FRIGHTEN OR TELEPORT",
            "text": "<div>Push the large rock out of the way and look beyond it</div>"
          },
          {
            "color": "black",
            "destination": "bodua_playroom",
            "requirements": "LOCATE OR SYMPHONY OR TELEPORT",
            "text": "<div>Go into the backyard</div>"
          },
          {
            "color": "black",
            "destination": "bodua_cave_map",
            "requirements": "ANIMAL FORM OR FORCEWALL OR TELEPORT",
            "text": "<div>Climb out the window towards the stone wall</div>"
          }
        ],
        "id": "059",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>You enter the hut and it appears to grow. Inside there are log benches and a variety of documents and books. This appears to have been a library at some point, although it was not a very organized one and many of the documents seem to be written on leaves or composed only of pictures.</div>",
        "title": "A Hut Filled With Information",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "art_hero_painting_spatial",
            "location": "Folder 059",
            "name": "Painting of Bodua",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "bodua_bamboo_pipes",
            "location": "Folder 059",
            "name": "Bamboo Pipe Maintenance",
            "quantity": 1
          }
        ]
      },
      "bodua_playroom": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "bodua_alcove",
            "requirements": "ANIMAL FORM OR LIGHTNING BOLT OR SEARCH OR TELEPORT",
            "text": "<div>Head indoors</div>"
          }
        ],
        "id": "081",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_wood",
            "location": "Shared bin",
            "name": "Wood (Unpainted Plank)",
            "quantity": 1
          }
        ],
        "text": "<div>Outside there is a small clearing surrounded by fences. What look to be toys and balls are strewn about. There are benches near the edges. This seems to be an area that at one point was used for children to play.</div><div></div><div>There is also some larger equipment and what looks more like a hangout spot for older children. There are some old chests in that area, and you can rummage thru them to find objects.</div>",
        "title": "Play Area",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "bodua_joke_ashur",
            "location": "Folder 081",
            "name": "A pair of letters from Bodua followers",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "art_toy_doll",
            "location": "Folder 081",
            "name": "Ancient Doll",
            "quantity": 1
          }
        ]
      },
      "bodua_pool_connection": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "bodua_garden",
            "requirements": "SLIP OR SILENCE OR TELEPORT",
            "text": "<div>Head towards a manicured area</div>"
          },
          {
            "color": "black",
            "destination": "bodua_cottage",
            "requirements": "CLAIRVOYANCE OR NURSE OR TELEPORT",
            "text": "<div>Head down a path towards a small cottage</div>"
          },
          {
            "color": "yellow",
            "destination": "bodua_control",
            "requirements": "CLAIRVOYANCE OR SLIP OR FORCEWALL OR TELEPORT",
            "text": "<div>Head towards a buzzing room</div>"
          }
        ],
        "id": "058",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>After crawling under the rock, you find yourself in a large cavern with a perfectly circular pool of water in front of you. The water is bright blue and so transparent you can see the bottom of the pool which is remarkably smooth. Around the pool are a wide variety of smooth stones. You feel a sense of calm around yourself.</div>",
        "title": "The Pool of Connection",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "bodua_prohibit_life_from_pools",
            "location": "Folder 058",
            "name": "A letter from Bodua",
            "quantity": 1
          }
        ]
      },
      "bodua_theme": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "bodua_library",
            "requirements": "SLIP OR SILENCE",
            "text": "<div>Enter the hut</div>"
          },
          {
            "color": "red",
            "destination": "bodua_cave_map",
            "requirements": "CLAIRVOYANCE OR CLAWS OR TELEPORT",
            "text": "<div>Enter the cave behind the hut</div>"
          },
          {
            "color": "black",
            "destination": "bodua_clearing",
            "requirements": "SLIP OR DREAM OR TELEPORT",
            "text": "<div>Walk into the clearing behind the trees</div>"
          },
          {
            "color": "yellow",
            "destination": "bodua_control",
            "requirements": "CLAIRVOYANCE OR QUICKSAND OR TELEPORT",
            "text": "<div>Walk up the riverbed towards the sound of buzzing</div>"
          }
        ],
        "id": "086",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>As you walk down the hallway, you begin to feel a warm humid air and see remnants of various plant life. There are remnants of what look to be various jungle trees preserved in the walls around you. The hallway opens up into a large cavern that remarkably still contains living trees.</div><div></div><div>Running through the center of the room is a nearly dry riverbed with an anemic trickle of water opening into a pool. On one side of the river there is hut with a thatched roof, and behind the hut there is a large cave. Across the river from the hut is a clearing in the trees.</div><div></div><div>In front of the hut there is what looks like a sitting area.</div>",
        "title": "The Remnants of a Lush Jungle",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "feheds_warning_recording",
            "location": "Folder 086",
            "name": "Oral History - Fehed",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ]
      },
      "broom_closet": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "cleaning_supplies",
            "requirements": "CHEMICAL SPRAY OR SPARK OR TELEPORT",
            "text": "<div>Go thru the door at the very back</div>"
          },
          {
            "color": "yellow",
            "destination": "kitchen",
            "requirements": "NUMB OR SCORCH OR TELEPORT",
            "text": "<div>Go thru the door towards the smell of smoke</div>"
          }
        ],
        "id": "092",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A small closet filled with brooms and mops. Oddly seems to have more than one door.</div>",
        "title": "Broom Closet",
        "uniqueItems": []
      },
      "cleaning_supplies": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "sitting_room",
            "requirements": "SILENCE OR HALLUCINATE OR STRENGTH OR TELEPORT",
            "text": "<div>Crawl through the hatch</div>"
          }
        ],
        "id": "074",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A cupboard whose shelves hold some bottles of strong-smelling fluid, wire bushes, scraps of paper, and piles of dust that might be the remains of fabric. There is a low hatch you can crawl through.</div>",
        "title": "Cleaning Supply Cupboard",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "bodua_followers_river",
            "location": "Folder 074",
            "name": "Cleansing Algae strain 31-B.",
            "quantity": 1
          }
        ]
      },
      "coat_closet": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "museum_entrance",
            "requirements": "MIRROR OR SILENCE OR TELEPORT",
            "text": "<div>Go through the door at the far end of the closet</div>"
          },
          {
            "color": "black",
            "destination": "courtyard",
            "requirements": "NURSE OR TREMOR OR TELEPORT",
            "text": "<div>Go back the way you came</div>"
          }
        ],
        "id": "077",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A deep closet. Both walls are lined with pegs and hooks that look like they're meant to hang clothing on. You can go back the way you came or go through the door at the far end of the closet.</div>",
        "title": "Coat Closet",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "art_wear_cloak",
            "location": "Folder 077",
            "name": "A cloak",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "job_ad",
            "location": "Folder 077",
            "name": "A Job Advertisement",
            "quantity": 1
          }
        ]
      },
      "community_room": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "kitchen",
            "requirements": "CLAWS OR DUPLICATE OR TELEPORT",
            "text": "<div>Head towards the smell of cooking</div>"
          },
          {
            "color": "black",
            "destination": "dining_room",
            "requirements": "COMPEL OR UNDERSTAND OR TELEPORT",
            "text": "<div>Head into the large room filled with tables. A sign over this door reads \"[270] Viriosal\".</div>"
          },
          {
            "color": "black",
            "destination": "utility_room_1",
            "requirements": "SCORCH OR NURSE OR TELEPORT",
            "text": "<div>Go into what looks like a broom closet</div>"
          },
          {
            "color": "red",
            "destination": "game_room",
            "requirements": "CLAIRVOYANCE OR NUMB OR TELEPORT",
            "text": "<div>Head into a clicking room</div>"
          }
        ],
        "id": "005",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A large room with warm lighting. There is a pile of dusty folding chairs against one wall and the remains of carpet on the floor.</div>",
        "title": "Community Room",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "art_thamyris_body",
            "location": "Folder 005",
            "name": "Thamyris's Body",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "sickness_in_sk",
            "location": "Folder 005",
            "name": "A Letter from Acolyte Jolanta",
            "quantity": 1
          }
        ]
      },
      "corridor_1": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "corridor_2",
            "requirements": "STRENGTH OR TELEPORT",
            "text": "<div>Continue down the corridor</div>"
          },
          {
            "color": "black",
            "destination": "community_room",
            "requirements": "CHEMICAL SPRAY OR SUBDUE",
            "text": "<div>Head down the northern corridor.</div><div>A sign above this passageway reads \"[083] Kebatbla Finvem\" and below that \"Service to Humanity\".</div>"
          },
          {
            "color": "black",
            "destination": "courtyard",
            "requirements": "SLIP OR STRENGTH",
            "text": "<div>Head towards a sweet smelling courtyard</div>"
          },
          {
            "color": "black",
            "destination": "general_library",
            "requirements": "GRADE OR NURSE",
            "text": "<div>Head towards a large, ornate sign</div>"
          },
          {
            "color": "black",
            "destination": "itzel_theme",
            "requirements": "GUST OR NUMB",
            "text": "<div>Head down an old, pristine wooden passageway</div>"
          }
        ],
        "id": "106",
        "image": "",
        "message": "",
        "recurringItems": [],
        "text": "<div>You proceed down a long corridor with a variety of offshoots. None of the walls are labeled, but the floor has a path worn into it as if it has experienced a lot of traffic.</div>",
        "title": "A Beige Corridor",
        "uniqueItems": []
      },
      "corridor_2": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "guard_room",
            "requirements": "STRENGTH OR OVERWHELM",
            "text": "<div>Walk down a side hallway</div>"
          },
          {
            "color": "black",
            "destination": "broom_closet",
            "requirements": "SLIP OR SILENCE",
            "text": "<div>Head into a closet</div>"
          },
          {
            "color": "red",
            "destination": "kitchen",
            "requirements": "SCORCH OR TREMOR",
            "text": "<div>Head into a smoky smelling room</div>"
          }
        ],
        "hasMu": true,
        "id": "054",
        "image": "",
        "message": "",
        "recurringItems": [],
        "text": "<div>Continuing down the corridor, it looks much the same as it did before.</div>",
        "title": "Another Beige Corridor",
        "uniqueItems": []
      },
      "courtyard": {
        "actions": [],
        "connections": [
          {
            "color": "red",
            "destination": "museum_entrance",
            "requirements": "GRADE OR UNDERSTAND OR TELEPORT",
            "text": "<div>Pass through the archway</div>"
          },
          {
            "color": "black",
            "destination": "universal_transformer",
            "requirements": "TRANSFORM OR HEAL OR TELEPORT",
            "text": "<div>Go down the ramp</div>"
          },
          {
            "color": "black",
            "destination": "coat_closet",
            "requirements": "DAZZLE OR SYMPHONY OR TELEPORT",
            "text": "<div>Open the closet</div>"
          }
        ],
        "id": "047",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A courtyard whose floor is decorated in a mosaic of colorful geometric patterns. The fragments look like colored glass, but none are chipped or scratched, and they feel soft and springy underfoot.</div>",
        "title": "A Courtyard",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "keystone",
            "location": "Folder 047",
            "name": "Keystone",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "mission_inquisition_3",
            "location": "Folder 047",
            "name": "Takhana\u2019s Explanation of the Inquisition\u2019s Mission",
            "quantity": 1
          }
        ]
      },
      "decoration_fun": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "library_deep_stacks",
            "requirements": "SYMPHONY OR CHITIN OR TELEPORT",
            "text": "<div>Head into the main library</div>"
          },
          {
            "color": "black",
            "destination": "deep_ritual_corridor",
            "requirements": "HALLUCINATE OR FRIGHTEN OR SEARCH OR TELEPORT",
            "text": "<div>Head down a long, dark corridor</div>"
          }
        ],
        "id": "076",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This room is cluttered with bits and pieces of what could be party decorations, or theater scenery, or interior decoration materials. Most of it is dusty and decayed, but you can find some attractive odds and ends if you're willing to dig through the mess.</div>",
        "title": "Storage Room",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "ancient_level",
            "location": "Folder 076",
            "name": "Ancient Level",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "paper_art_founders",
            "location": "Folder 076",
            "name": "Paper Art in Honor of the Founders",
            "quantity": 1
          }
        ]
      },
      "deep_ritual_corridor": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "tuulinen_maze_flavor",
            "requirements": "ANIMAL FORM OR SILENCE OR CHITIN OR CLAWS OR TELEPORT",
            "text": "<div>Enter the easternmost room in the corridor</div>"
          },
          {
            "color": "black",
            "destination": "psyops_flavor",
            "requirements": "QUICKSAND OR TREMOR OR DREAM OR TELEPORT",
            "text": "<div>Enter the westernmost room in the corridor</div>"
          },
          {
            "color": "black",
            "destination": "library_deep_stacks",
            "requirements": "STRENGTH OR SLIP OR TELEPORT",
            "text": "<div>Go back to the stacks</div>"
          }
        ],
        "id": "024",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_adornment",
            "location": "Shared bin",
            "name": "Adornments (Pink Cone)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>It is poorly lit and dusty. There are many doors on either side of the corridor, but most of them seem to have been welded shut by molted rock. A small number are still openable. </div><div></div><div>As you wander the corridor, you feel this is an area of great power. You don't know what might have been here, but it was clearly something.</div>",
        "title": "A Long, Dark Corridor",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "focusing_spike",
            "location": "Folder 024",
            "name": "Focusing Spike",
            "quantity": 1
          }
        ]
      },
      "dining_room": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "sitting_room",
            "requirements": "GUST OR SEARCH  OR TELEPORT",
            "text": "<div>Go into the next room</div>"
          },
          {
            "color": "black",
            "destination": "kitchen",
            "requirements": "SYMPHONY OR UNDERSTAND OR SPARK OR TELEPORT",
            "text": "<div>Head back to the kitchen</div>"
          }
        ],
        "id": "039",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A large room with many large round tables, surrounded by chairs for group seating. Each table has a disc in the center that rotates when you push it, with a lamp in the center of the disc. The walls are decorated with mosaics of bowls and platters overflowing with food, some of it familiar and some of it strange but delicious-looking. </div><div></div><div>On the wall there is a plaque describing the Titertabiense Ritual and how to perform it. If you read the plaque, you may take a copy of the corresponding greensheet from the \"Tau\" packet.</div>",
        "title": "A Grand Dining Room",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "recipe_4",
            "location": "Folder 039",
            "name": "Recipe: Spicy Cabbage",
            "quantity": 1
          }
        ]
      },
      "gabor_catacombs": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "gabor_rebirth_chamber",
            "requirements": "STRENGTH OR NURSE OR OR TELEPORT",
            "text": "<div>Go through the door engraved with a plant sprouting from the carcass of a deer</div>"
          },
          {
            "color": "black",
            "destination": "gabor_petrifactum",
            "requirements": "HEAL OR FORCEWALL OR TELEPORT",
            "text": "<div>Go through the door engraved with a tree stump</div>"
          }
        ],
        "id": "097",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This dim, subterranean space contains an extensive grid of small alcoves carved into the stone walls. Most alcoves hold desiccated remains, their bones and artifacts blanketed in fungal growths of various species. One grave stands out, its nondescript alcove covered in vibrant, bioluminescent fungi unlike the others. Their colorful glow suggests the resting place of someone significant, though its lack of ornamentation provides no further specifics.</div>",
        "title": "Catacombs",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "food_cheese",
            "location": "Folder 097",
            "name": "Cheese",
            "quantity": 2
          }
        ]
      },
      "gabor_grotto": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "gabor_white_vestibule",
            "requirements": "OVERWHELM OR CHEMICAL SPRAY OR TELEPORT",
            "text": "<div>Go through the white and grey striped door</div>"
          },
          {
            "color": "black",
            "destination": "gabor_rebirth_chamber",
            "requirements": "HEAL OR STRENGTH OR TELEPORT",
            "text": "<div>Go through the door engraved with a plant sprouting from the carcass of a deer</div>"
          }
        ],
        "id": "029",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This subterranean cavern holds a large, still pool, its dark waters glimmering with bioluminescent fungal growths. The algae-like fungi cling to the stone surrounding the pool and float across its surface in glowing strands. Small streams trickle in through cracks, aerating the fungal masses. The fungal lights dotting the cavern pulse gently, hinting at the living cleansing processes still taking place in this forgotten aquatic refuge.</div>",
        "title": "A Grotto",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "gabor_pamphlet",
            "location": "Folder 029",
            "name": "A Pamphlet about Gabor",
            "quantity": 1
          }
        ]
      },
      "gabor_leyline_source": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "gabor_stone_records",
            "requirements": "HALLUCINATE OR STRENGTH OR TELEPORT",
            "text": "<div>Go through the heavy stone door</div>"
          },
          {
            "color": "black",
            "destination": "gabor_catacombs",
            "requirements": "HEAL OR CHEMICAL SPRAY OR STRENGTH OR TELEPORT",
            "text": "<div>Go through the door engraved with a skull</div>"
          }
        ],
        "id": "095",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This domed chamber contains an elaborate spiral structure made of carved stone and latticework, reminiscent of a giant fungus. Glowing fungal residues indicate this entire apparatus was once vibrant with magical energies. Now only the faintest wisps emit from a few struggling mushrooms on the outer spirals. Following the lifeless growths inward, you reach a raised platform containing a dark, cracked crystal prism. You realize this construction once harnessed the living power of special fungal strains, channeling their energies into the central prism where it focused into the city's leyline network. This magical heart that once pumped vitality through Siru Kisal now beats sluggishly, nearly expired. The towering fungal apparatus sits inert, the last traces of its power drained long ago.</div>",
        "title": "The Leyline Source",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "relic_life_lattice",
            "location": "Folder 095",
            "name": "Organic Lattice",
            "quantity": 1
          }
        ]
      },
      "gabor_library": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "gabor_leyline_source",
            "requirements": "SPORE SACKS OR CLAWS OR TELEPORT OR TELEPORT",
            "text": "<div>Go through the latticework door</div>"
          },
          {
            "color": "black",
            "destination": "gabor_lycoperdon_lab",
            "requirements": "CHITIN OR LIGHTNING BOLT OR TELEPORT",
            "text": "<div>Go through the door engraved with an alembic and a mushroom</div>"
          }
        ],
        "id": "072",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This large circular chamber contains rows upon rows of stone shelves, each holding hundreds of ceramic jars. The jars are glazed in an array of earthy tones and labeled in a script you can't decipher. Gently prying open a jar releases a puff of spores that dance and glimmer in the dim light before settling. It's clear this room housed a vast collection of magical fungal strains, a living library of microscopic spores that could be cultivated as needed. Many jars have cracked or spilled onto the shelves, leaving colorful fungal growths in their wake. You marvel at the variety that must have once existed here.</div>",
        "title": "The Spore Repository",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "art_hero_painting_life",
            "location": "Folder 072",
            "name": "Painting of Gabor",
            "quantity": 1
          }
        ]
      },
      "gabor_lichen_garden": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "gabor_grotto",
            "requirements": "HALLUCINATE OR LIGHTNING BOLT OR TELEPORT",
            "text": "<div>Go through the door dotted with faintly glowing blue splotches</div>"
          }
        ],
        "id": "043",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This peaceful courtyard is filled with artful arrangements of lichens and other fungi growing on rocks, walls, and sculptural shapes. The diversity of textures, colors, and forms is astounding. Delicate leafy growths in shades of green, gray, and yellow sprout on stone slabs. Shrub-like clumps with powdery blues and oranges climb carved columns. Tiny cups and branching filaments create living mosaics of maroon and silver on the courtyard walls. And covering it all is an ethereal glow emitted by certain strains. Wandering the meditative space, you might feel a deep appreciation for the wonders that the fungal path opened to its practitioners.</div>",
        "title": "The Lichen Garden",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "recipe_5",
            "location": "Folder 043",
            "name": "Recipe: Olive Relish",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "cleansing_algae",
            "location": "Folder 043",
            "name": "Oral History - The Cleansing River",
            "quantity": 1
          }
        ]
      },
      "gabor_lycoperdon_lab": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "gabor_white_vestibule",
            "requirements": "OVERWHELM OR DUPLICATE OR TELEPORT",
            "text": "<div>Go through the white and grey striped door</div>"
          },
          {
            "color": "green",
            "destination": "gabor_grotto",
            "requirements": "HALLUCINATE OR LOCATE OR COMPEL OR TELEPORT",
            "text": "<div>Go through the door dotted with faintly glowing blue splotches</div>"
          }
        ],
        "id": "009",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This chamber is filled with heavy stone tables carved with runic circles and grooves connecting them. Some tables hold apparatus of glass and brass, while others have dirt-filled stone basins where fungi grow in unusual shapes and vivid colors. Journals and notes are stacked on shelves along the walls. Though now in disarray, this was clearly once an organized laboratory. A few basins still emit light or release hypnotic spores, evidence of the wondrous fungal strains created here long ago through arcane means. The tables bear the scars of diligent research, their carved runes hinting at fungal mastery. You marvel at what achievements were made in this place, secrets now lost to time.</div>",
        "title": "The Lycoperdon Lab",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "adept_life_herbal_paste",
            "location": "Folder 009",
            "name": "Jar of Herbal Paste",
            "quantity": 1
          }
        ]
      },
      "gabor_petrifactum": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "gabor_rebirth_chamber",
            "requirements": "HEAL OR FRIGHTEN OR TELEPORT",
            "text": "<div>Go through the door engraved with a plant sprouting from the carcass of a deer</div>"
          }
        ],
        "id": "037",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "block_concrete",
            "location": "Shared bin",
            "name": "Concrete (Beige Rectangular Prism)",
            "quantity": 1
          }
        ],
        "text": "<div>The expansive petrified remains of a massive tree fill this space, its roots and branches entwined around stonework. The brittle, mineralized texture of the wood speaks to the gradual process of fungal consumption. At the center, you find a circular node with a seated figure embedded within, arms outstretched into branching limbs \u2013 a woman eternally trapped by her lifebound tree's stony end. Surrounding the calcified central mass, portions of the tree have splintered and toppled, leaving rubble strewn about the chamber. This bony heart stands as evidence of a legendary struggle of a vast tree consumed from within until only mineralized husk remained. Vines and srange life of all sorts grows across the petrified scene, but none seem to penetrate into the stone. Now stilled forever into monumental form, only scarce eroded fragments scattered about hint at the gradual fungal victory that transpired here eons ago.</div>",
        "title": "The Petrifactum",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "master_life_mycelium_core",
            "location": "Folder 037",
            "name": "Mycelium Core",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ]
      },
      "gabor_rebirth_chamber": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "gabor_library",
            "requirements": "CLAWS OR STRENGTH OR ENERVATE OR TELEPORT",
            "text": "<div>Go through the door engraved with a jar enclosing a cloud of speckles</div>"
          },
          {
            "color": "black",
            "destination": "gabor_petrifactum",
            "requirements": "HALLUCINATE OR FRIGHTEN OR TELEPORT",
            "text": "<div>Go through the door engraved with a tree stump</div>"
          }
        ],
        "id": "110",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>The thick, earthy smell of decay permeates this humid chamber. The floor is covered in a spongy mat of moss and fungi, squelching underfoot. Mushrooms and molds grow abundantly, feeding on the organic debris strewn about. The walls and ceilings are draped in vines and root structures. Small trees heavy with fruit push up through the decomposition, thriving in the mulch of fungal growth. Shafts of sunlight angle down from small skylights in the vaulted ceiling. You realize this chamber is part of a cycle - organic waste is allowed to rot, feeding fungal growths that in turn nourish new plant life.</div>",
        "title": "The Rebirth Chamber",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ]
      },
      "gabor_stone_records": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "gabor_leyline_source",
            "requirements": "CHITIN OR SPORE SACKS OR COMPEL OR TELEPORT",
            "text": "<div>Go through the latticework door</div>"
          },
          {
            "color": "black",
            "destination": "gabor_white_vestibule",
            "requirements": "SPORE SACKS OR STRENGTH OR TELEPORT",
            "text": "<div>Go through the white and grey striped door</div>"
          },
          {
            "color": "black",
            "destination": "gabor_catacombs",
            "requirements": "CHITIN OR STRENGTH OR TELEPORT",
            "text": "<div>Go through the door engraved with a skull</div>"
          }
        ],
        "id": "002",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_stone",
            "location": "Shared bin",
            "name": "Stone (Grey Cube)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This chamber's surfaces are covered in elaborate stone carvings blanketed by vibrant fungal growths. Intricate friezes depict figures tending to fungi - inoculating logs, cultivating mycelium, and harvesting mushrooms. Other scenes show uses of fungi - as dyes for textiles, ingredients for potions, substrates for scroll-making. One frieze captures a ritual involving dancers wearing fanciful mushroom costumes. The fungal pigments coating the carvings make them seem almost alive. There are also vivid battle scenes showing conflict with massive trees, but the brightly-colored fungi obscuring these makes it hard to interpret the details. These stone records clearly contained important teachings about fungal propagation.</div>",
        "title": "Stone Records",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "adept_alchemy_shimmering_shards",
            "location": "Folder 002",
            "name": "Shimmering Glass Shards",
            "quantity": 1
          }
        ]
      },
      "gabor_theme": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "gabor_library",
            "requirements": "NURSE OR CHARM OR TELEPORT",
            "text": "<div>Go through the door engraved with a jar enclosing a cloud of speckles</div>"
          },
          {
            "color": "red",
            "destination": "gabor_lycoperdon_lab",
            "requirements": "NURSE OR SYMPHONY OR TELEPORT",
            "text": "<div>Go through the door engraved with an alembic and a mushroom</div>"
          },
          {
            "color": "black",
            "destination": "gabor_lichen_garden",
            "requirements": "NURSE OR TREMOR OR TELEPORT",
            "text": "<div>Go through the door with roots and mushrooms engraved around its frame</div>"
          }
        ],
        "id": "067",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This humid chamber is filled with a faint blue glow emanating from rows of troughs along the walls. Each stone trough contains dirt and decomposing plant matter, all threaded through with wispy white fungal filaments extracting nutrients. The filaments slowly pulse and shift, almost like they are breathing. Scattered tools and notes suggest this was a place for cultivating mycelium strains.</div>",
        "title": "The Blighted Conservatory",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "gabor_vandalizing_itzel_art",
            "location": "Folder 067",
            "name": "A letter from the Inquisitor Prime Describing Vandalism",
            "quantity": 1
          }
        ]
      },
      "gabor_white_vestibule": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "gabor_grotto",
            "requirements": "STRENGTH OR SCORCH OR TELEPORT",
            "text": "<div>Go through the door dotted with faintly glowing blue splotches</div>"
          },
          {
            "color": "black",
            "destination": "gabor_leyline_source",
            "requirements": "CHITIN OR CLAWS OR DUPLICATE OR TELEPORT",
            "text": "<div>Go through the latticework door</div>"
          },
          {
            "color": "black",
            "destination": "gabor_stone_records",
            "requirements": "NURSE OR NUMB OR TELEPORT",
            "text": "<div>Go through the heavy stone door</div>"
          }
        ],
        "id": "107",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This brightly lit chamber contains an array of elaborate constructions made from various fungi. Strange barricades of shelf mushrooms block certain paths, while nets of tough fungal fibers obstruct others. Sections of the floor are covered in puffball powder, concealing any stable footing. You notice areas where growth patterns suggest sound, moisture or pressure triggers. In one section, certain mushroom species appear deliberately placed, perhaps meaning to be identified. Throughout the space, the fungal structures invite interaction and puzzle-solving. The constructions themselves, however, reveal little of their intended workings, their secrets as obscured as the initiates who puzzling through them lifetimes ago.</div>",
        "title": "The White Vestibule",
        "uniqueItems": []
      },
      "game_room": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "utility_room_1",
            "requirements": "CLAIRVOYANCE OR LIGHTNING BOLT OR TELEPORT",
            "text": "<div>Open a closet door and walk inside</div>"
          },
          {
            "color": "black",
            "destination": "community_room",
            "requirements": "DREAM OR MIRROR  OR TELEPORT",
            "text": "<div>Head out towards the larger area</div>"
          },
          {
            "color": "black",
            "destination": "anti_fungus",
            "requirements": "ENERVATE OR DUPLICATE OR TELEPORT",
            "text": "<div>Head thru a small hatched door on the floor</div>"
          }
        ],
        "id": "085",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 1,
            "key": "agipif_rules",
            "location": "Folder 085",
            "name": "The Rules of Agipif",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A room filled with hexagonal tables, each of which has two chairs next to it. The tables are divided into triangular grids and large heavy black and white stones lay next to each of them. There is a pouch on the wall which describes the rules of the game played here.</div>",
        "title": "Agipif Room",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "art_toy_game",
            "location": "Folder 085",
            "name": "Agipif",
            "quantity": 1
          }
        ]
      },
      "garbage_chute": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "cleaning_supplies",
            "requirements": "ANIMAL FORM OR SPORE SACKS OR TELEPORT",
            "text": "<div>Crawl into a closet</div>"
          }
        ],
        "id": "083",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_wood",
            "location": "Shared bin",
            "name": "Wood (Unpainted Plank)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>The walls and floor of this room are stained and exude unpleasant smells. Two large openings near the ceiling look like they connect to some sort of intake tunnels. The only exit leads into a closet.</div>",
        "title": "Garbage Chute",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "ore",
            "location": "Folder 083",
            "name": "Ore",
            "quantity": 2
          },
          {
            "bulkyness": 1,
            "key": "open_the_way_1",
            "location": "Folder 083",
            "name": "A Scrap of Lined Paper",
            "quantity": 1
          }
        ]
      },
      "general_library": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "library_newspaper",
            "requirements": "SLIP OR GUST OR TELEPORT",
            "text": "<div>Walk down a slick corridor</div>"
          },
          {
            "color": "black",
            "destination": "library_deep_stacks",
            "requirements": "INSIGHT OR OVERWHELM OR DREAM OR TELEPORT",
            "text": "<div>Head deeper into the library</div>"
          },
          {
            "color": "red",
            "destination": "library_play_area",
            "requirements": "ANIMAL FORM OR NURSE OR DAZZLE OR TELEPORT",
            "text": "<div>Head into a brightly colored children's room</div>"
          }
        ],
        "id": "069",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>You enter into a room that was clearly an important library or reading room.  There are many chairs and desks here, crafted of opulent materials in baroque designs.  Around the room there are bookcases with glass fronts, each displaying a handful of impressive looking tomes.  A few humbler-looking books are stacked on some of the desks.  Many of the decorations here are heavily gilded, although the centuries have worn away the leaf in places.  A graceful marble statue of a woman raising a book aloft is positioned at the center of the room, but there is no indication of what signifcance she might have had.</div>",
        "title": "An Ornate Library",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "kenati_whine_about_ashur",
            "location": "Folder 069",
            "name": "A letter from Master Atalia",
            "quantity": 1
          }
        ]
      },
      "guard_room": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "verrehaven_blessing_hq",
            "requirements": "(everyone in the group is of Verhavenese Nationality) AND (STRENGTH OR TELEPORT)",
            "text": "<div>Go thru the door behind the guard chairs</div>"
          }
        ],
        "id": "073",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A room with seats for two guards protecting the only exit. There is a map of some islands on the wall which are shaped much like modern Verrehaven.</div>",
        "title": "Guard Room",
        "uniqueItems": []
      },
      "history_hq": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "decoration_fun",
            "requirements": "ANIMAL FORM OR CHARM OR TELEPORT",
            "text": "<div>Open the hatch</div>"
          },
          {
            "color": "red",
            "destination": "mushroom_shrine_1",
            "requirements": "OVERWHELM OR GUST OR TELEPORT",
            "text": "<div>Proceed into the next archive</div>"
          }
        ],
        "id": "055",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "kisalith_plaque",
            "location": "Folder 055",
            "name": "Label Plaque",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A dimly-lit room full of fragile old documents, many of which are fragments or damaged. Some are sealed between very thin panes of glass or affixed to a sturdy backing. An archway at the far end of the room leads to what looks like another archive room. There is also a hatch in one wall that might be some kind of service exit.</div>",
        "title": "An Archive of Old Documents",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "gabor_sumai_mind_body",
            "location": "Folder 055",
            "name": "A Letter From Adept Eudokia",
            "quantity": 1
          }
        ]
      },
      "hvac_room": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "mushroom_shrine_2",
            "requirements": "STRENGTH OR COMPEL OR TELEPORT",
            "text": "<div>Head back towards the mushrooms</div>"
          }
        ],
        "id": "104",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_stone",
            "location": "Shared bin",
            "name": "Stone (Grey Cube)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This room is filled with large machines that appear to still be running, although it is not obvious how to operate them. They fill the room with a buzzing hum. The floor and air vibrate. You can feel a strong breeze.</div>",
        "title": "A Vibrating Room",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ]
      },
      "itzel_theme": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "community_room",
            "requirements": "CHARM OR TREMOR OR TELEPORT",
            "text": "<div>Head out into a brightly lit area</div>"
          },
          {
            "color": "black",
            "destination": "anti_fungus",
            "requirements": "TRANSFORM OR SUBDUE OR TELEPORT",
            "text": "<div>Head deeper into the cave</div>"
          }
        ],
        "id": "010",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This expansive cave holds row upon row of petrified fruit trees, their gnarled branches reaching upward. The cave walls are covered with fading stone frescoes showing figures watering and pruning verdant green trees. One fresco has been defaced, the images of trees covered over with mushroom shapes in bold fungal pigments. Far above, the cave ceiling is covered in more mineralized boughs from a single colossal petrified tree. Ancient platforms and ladders suggest people once harvested fruit from its lofty fossilized limbs. The towering calcified specimen speaks to tremendous age and the passage of epochs in this subterranean place.</div>",
        "title": "The Orchard",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "focusing_spike",
            "location": "Folder 010",
            "name": "Focusing Spike",
            "quantity": 1
          }
        ]
      },
      "kenati_bedroom": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "kenati_blade",
            "requirements": "SILENCE OR FORCEWALL OR HEAL OR TELEPORT",
            "text": "<div>Exit through the door enrgaved with a figure pressing one hand to its forehead and the other to its heart</div>"
          },
          {
            "color": "black",
            "destination": "kenati_lecture_hall",
            "requirements": "INSIGHT OR TRANSFORM OR TELEPORT",
            "text": "<div>Exit through the plain door</div>"
          }
        ],
        "id": "021",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_fabric",
            "location": "Shared bin",
            "name": "Fabric (Red Cylinder)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A small room with a narrow bed heaped with dust that must be the remains of the bedding. There are a plain but sturdy wooden desk and chair. The walls and floor are neutrally colored and there are no decorations.</div>",
        "title": "A Plainly Furnished Bedroom",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ]
      },
      "kenati_blade": {
        "actions": [],
        "connections": [],
        "id": "025",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "block_glass",
            "location": "Shared bin",
            "name": "Glass (White Triangular Prism)",
            "quantity": 1
          }
        ],
        "text": "<div>The walls, floor and ceiling of this room are charcoal grey. The room is dimly lit. There is no furniture. There are recesses in the walls of various shapes and sizes; each seems designed to hold a particular object. The recesses glow with intense white light. There are no exits.</div>",
        "title": "Hall of Remembered Deeds",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "master_truth_blank_stone_tablet",
            "location": "Folder 025",
            "name": "Blank Stone Tablet",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ]
      },
      "kenati_broken_truth": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "kenati_ethics_studies",
            "requirements": "INSIGHT OR DUPLICATE OR UNDERSTAND OR TELEPORT",
            "text": "<div>Head into a reading room</div>"
          },
          {
            "color": "green",
            "destination": "kenati_inquisitor_hq",
            "requirements": "INSIGHT OR COMPEL OR QUICKSAND OR TELEPORT",
            "text": "<div>Go thru the well reinforced door</div>"
          }
        ],
        "id": "045",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>On one wall of this room is a large mosaic of two eyes, one weeping a tear of blood, the other staring intently. The floor of this room is tiled; at first glance it looks like all the tiles are cracked and broken, but when you look more closely you see that they're simply crafted to look that way. One patch of tiles is actually cracked and coming up from the floor; a tree root protrudes among them. It appears to be dead, but the wood is so hard you can't damage it with any tools you have on hand. There are several large, locked chests.</div>",
        "title": "Room of Broken Truth",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "mission_inquisition_1",
            "location": "Folder 045",
            "name": "Kenati\u2019s Explanation of the Inquisition\u2019s Mission",
            "quantity": 1
          }
        ]
      },
      "kenati_ethics_studies": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "kenati_lecture_hall",
            "requirements": "SILENCE OR UNDERSTAND OR STRENGTH OR TELEPORT",
            "text": "<div>Head towards the public area</div>"
          },
          {
            "color": "black",
            "destination": "kenati_bedroom",
            "requirements": "SEARCH OR FORCEWALL OR TELEPORT",
            "text": "<div>Head down a private hallway</div>"
          }
        ],
        "id": "056",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This room is filled with many couches and chairs, arranged into small conversational circles clustered around tables.  There are many lamps about the room, still glowing faintly.  A bookshelf filled with mouldering reference scrolls covers one wall.  There was once carpet on the floor, although the remnants of it turn to dust beneath your feet.</div>",
        "title": "Chamber of Ethics Scholarship",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "adept_truth_scroll_of_truth",
            "location": "Folder 056",
            "name": "Scroll of Truth",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "notes_dont_let_sumai_into_naqrabu",
            "location": "Folder 056",
            "name": "A Pair of Informal Notes",
            "quantity": 1
          }
        ]
      },
      "kenati_inquisitor_hq": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "kenati_ethics_studies",
            "requirements": "SILENCE OR SYMPHONY OR UNDERSTAND OR TELEPORT",
            "text": "<div>Head towards the room filled with books</div>"
          },
          {
            "color": "black",
            "destination": "kenati_prison",
            "requirements": "COMPEL OR FRIGHTEN OR TELEPORT",
            "text": "<div>Head down a dark hallway towards a dungeon</div>"
          }
        ],
        "id": "031",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>Long ago, this room was divided in two by enormous curtains, of which now only the bronze hanging brackets and a few tattered scraps of crimson fabric remain.  On the near side of the curtains, there are a number of desks with comfortable chairs on both sides.  The desks still have writing supplies, pitchers, and cups on them.  Around the room there are decorative urns that might have once contained plants.  Past the curtains, the room is starkly unadorned save a frieze depicting a pair of open eyes in front of the rising sun.  A pair of imposing lecterns are placed on a raised stage, looming over the rest of the room.</div>",
        "title": "Chamber of the Inquisitors",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "letter_kenati_sumais_curse",
            "location": "Folder 031",
            "name": "A letter from Adept Shirat",
            "quantity": 1
          }
        ]
      },
      "kenati_lecture_hall": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "kenati_library",
            "requirements": "GRADE OR HALLUCINATE OR NUMB OR TELEPORT",
            "text": "<div>Exit through the door engraved with an open book</div>"
          },
          {
            "color": "black",
            "destination": "kenati_ethics_studies",
            "requirements": "INSIGHT OR SPARK OR SLIP OR TELEPORT",
            "text": "<div>Go into the reading room</div>"
          },
          {
            "color": "black",
            "destination": "kenati_broken_truth",
            "requirements": "SUBDUE OR TREMOR OR SYMPHONY OR TELEPORT",
            "text": "<div>Head down a long cracked corridor</div>"
          },
          {
            "color": "black",
            "destination": "kenati_prison",
            "requirements": "SILENCE OR COMPEL OR HALLUCINATE OR TELEPORT",
            "text": "<div>Head down a tiled hallway</div>"
          }
        ],
        "id": "034",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This room has a small raised stage; three semicircular rows of seats face the stage. The walls are decorated with charts whose meaning is not immediately obvious.</div>",
        "title": "Lecture Hall",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "relic_truth_kenatis_tear",
            "location": "Folder 034",
            "name": "Kenati's Tear",
            "quantity": 1
          }
        ]
      },
      "kenati_library": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "kenati_library_sorting",
            "requirements": "SUBDUE OR INSIGHT OR UNDERSTAND OR TELEPORT",
            "text": "<div>Open a plain wooden door</div>"
          },
          {
            "color": "black",
            "destination": "kenati_lecture_hall",
            "requirements": "SILENCE OR MIRROR OR SYMPHONY OR TELEPORT",
            "text": "<div>Open an ornate detailed door</div>"
          }
        ],
        "id": "050",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>The walls of this room are entirely covered with cubbyholes containing scrolls. Each wall has a wooden staircase set into tracks in the floor and ceiling, which can be pushed along the wall to allow access to the highest cubbyholes. The air is cool and dry, and there is a faint breeze from unknown sources. The floor tiled in dark stone; occasional tiles in no obvious pattern are made of light stone engraved with the image of the sun rising behind a pair of open eyes. In the middle of the room is a pedestal with hand-shaped depressions on its surface; its purpose is not apparent. A pile of objects in one corner looks out of place in this tidy room.</div>",
        "title": "Great Library of Known Truths",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "art_hero_painting_truth",
            "location": "Folder 050",
            "name": "Painting of Kenati",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "inquisitor_prime_intro",
            "location": "Folder 050",
            "name": "A Letter from the Inquisitor Prime",
            "quantity": 1
          }
        ]
      },
      "kenati_library_sorting": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "kenati_library",
            "requirements": "SILENCE OR UNDERSTAND OR TELEPORT",
            "text": "<div>Exit through the swinging door</div>"
          },
          {
            "color": "black",
            "destination": "kenati_lecture_hall",
            "requirements": "INSIGHT OR LIGHTING BOLT OR SILENCE OR TELEPORT",
            "text": "<div>Exit through the plain door</div>"
          }
        ],
        "id": "013",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A conveyor belt runs the length of this room; it is not operating and you see no way to turn it on. Several wheeled carts stand near the conveyor belt. Their trays have slots just the right size to hold scrolls. Counters run around the perimeter of the room with stools stationed at regular intervals. In front of each stool is a bin and three glowing circles set into the countertop. The circles can be pushed like buttons, but doing this doesn't have any noticable effect. You can exit through a plain door, or through a swinging door just the right size to push one of the carts through.</div>",
        "title": "Library Sorting Room",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "mission_inquisition_2",
            "location": "Folder 013",
            "name": "Zamar\u2019s Explanation of the Inquisition\u2019s Mission",
            "quantity": 1
          }
        ]
      },
      "kenati_prison": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "kenati_blade",
            "requirements": "SILENCE OR FRIGHTEN OR SYMPHONY OR TELEPORT",
            "text": "<div>Continue through the door with the Pasiru inscription</div>"
          },
          {
            "color": "black",
            "destination": "kenati_inquisitor_hq",
            "requirements": "GRADE OR SILENCE OR NUMB OR TELEPORT",
            "text": "<div>Head out of the dungeon along a dark hallway</div>"
          }
        ],
        "id": "017",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_stone",
            "location": "Shared bin",
            "name": "Stone (Grey Cube)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>There are three separate cells with a small hallway between them. The cell doors are made of a hard, opaque white material. When you pass a cell door, a panel at eye-level becomes transparent, letting you look into the cell. Each cell has a bed, a washstand, a shelf, and a stall that might be some sort of sanitary or bathing facility. All the furnishings are white, have rounded corners, and appear to be built into the floor and walls. One door has an inscription in Pasiru \"[821] Brissisen Za Spulk\". Another door opens onto a dark hallway.</div>",
        "title": "A Prison",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "adept_feeling_soulstone",
            "location": "Folder 017",
            "name": "Soul Stone",
            "quantity": 1
          }
        ]
      },
      "kenati_theme": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "kenati_library",
            "requirements": "GRADE OR QUICKSAND OR DREAM OR TELEPORT",
            "text": "<div>Go through the door engraved with an open book</div>"
          },
          {
            "color": "black",
            "destination": "kenati_broken_truth",
            "requirements": "SUBDUE OR ENERVATE OR CHARM OR TELEPORT",
            "text": "<div>Head thru the cracked door down a long corridor</div>"
          },
          {
            "color": "red",
            "destination": "kenati_library_sorting",
            "requirements": "GRADE OR QUICKSAND OR TREMOR OR TELEPORT",
            "text": "<div>Open the plain door</div>"
          }
        ],
        "id": "105",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A long, well-lit hall. The walls are carved with scenes of people doing things; so many it's hard to pick out the details of any specific one. There is no furniture. Many pillars support the ceiling. On each pillar is engraved the image of the sun rising behind a pair of open eyes. Three doors lead out: a plain door, a cracked door, and a door engraved with the image of an open book.</div>",
        "title": "Grand Hall",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ]
      },
      "kitchen": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "broom_closet",
            "requirements": "SILENCE OR QUICKSAND OR SUBDUE OR TELEPORT",
            "text": "<div>Go into the closet</div>"
          },
          {
            "color": "black",
            "destination": "dining_room",
            "requirements": "SPORE SACKS OR  NURSE OR TELEPORT",
            "text": "<div>Head out towards the large room. A sign over the entrance to the room reads \"[270] Viriosal\".</div>"
          }
        ],
        "id": "064",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A large room whose walls are lined with storage cabinets, lockers, and racks of cooking utensils. There are long counters in the middle of the room. One one side of the room are several machines that might be ovens, but if they have a heat source, it is not obvious. The floor seems like ordinary tile, but liquid spilled on it vanishes immediately. There is a constant breeze through the room. When you open the storage cabinets, the air inside them is cold and dry. There are two exits: one into a small closet, the other into another large room.</div>",
        "title": "A Kitchen",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "food_honey",
            "location": "Folder 064",
            "name": "Honey",
            "quantity": 3
          },
          {
            "bulkyness": 0,
            "key": "food_beans",
            "location": "Folder 064",
            "name": "Dried Beans",
            "quantity": 2
          },
          {
            "bulkyness": 0,
            "key": "food_pepper",
            "location": "Folder 064",
            "name": "Pepper",
            "quantity": 2
          },
          {
            "bulkyness": 0,
            "key": "food_vinegar",
            "location": "Folder 064",
            "name": "Vinegar",
            "quantity": 2
          },
          {
            "bulkyness": 0,
            "key": "food_flour",
            "location": "Folder 064",
            "name": "Flour",
            "quantity": 4
          },
          {
            "bulkyness": 1,
            "key": "totals_doc",
            "location": "Folder 064",
            "name": "Damaged Paper in Neat Writing",
            "quantity": 1
          }
        ]
      },
      "library_deep_stacks": {
        "actions": [],
        "connections": [
          {
            "color": "green",
            "destination": "deep_ritual_corridor",
            "requirements": "MIRROR OR COMPEL OR HALLUCINATE OR TELEPORT",
            "text": "<div>Head down a long, dark corridor</div>"
          }
        ],
        "id": "052",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>The deepest part of the stacks is given over to a convoluted labyrnith of floor-to-ceiling bookshelves, stretching as far as the eye can see.  Every shelf is overflowing with scrolls, tablets, books, and other documents.  It is clear that there is an organizational scheme - each intersection is labelled with a complex sequence of symbols - but it would take longer than you have to decipher it.  The area is left in darkness, but each corridor magically lights itself with dim lights as you approach.</div>",
        "title": "Documents as Far as the Eye Can See",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "letter_what_went_wrong",
            "location": "Folder 052",
            "name": "A Letter from Adept Neith",
            "quantity": 1
          }
        ]
      },
      "library_loop_hub": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "bodua_library",
            "requirements": "LOCATE OR TELEPORT",
            "text": "<div>Head into the emerald door</div>"
          },
          {
            "color": "black",
            "destination": "abarrane_library",
            "requirements": "QUICKSAND OR TELEPORT",
            "text": "<div>Head through the sandstone door</div>"
          },
          {
            "color": "black",
            "destination": "kenati_library",
            "requirements": "INSIGHT OR TELEPORT",
            "text": "<div>Head thru the crimson door</div>"
          },
          {
            "color": "black",
            "destination": "ashur_library",
            "requirements": "ENERVATE OR TELEPORT",
            "text": "<div>Head through the pewter door</div>"
          },
          {
            "color": "black",
            "destination": "gabor_library",
            "requirements": "CHITIN OR SPORE SACKS OR TELEPORT",
            "text": "<div>Head through the golden door</div>"
          },
          {
            "color": "black",
            "destination": "sumai_library",
            "requirements": "DREAM OR TELEPORT",
            "text": "<div>Head through the indigo door</div>"
          }
        ],
        "id": "022",
        "image": "",
        "message": "",
        "recurringItems": [],
        "text": "<div>You crawl into a small hole and find yourselve in an amazingly large and ornate hexagonal atrium. The wind whistles around you as you notice that each side of the hexagon has a unique color.</div>",
        "title": "Multi-Colored Hexagonal Room",
        "uniqueItems": []
      },
      "library_newspaper": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "deep_ritual_corridor",
            "requirements": "MIRROR OR SYMPHONY OR LIGHTNING BOLT OR TELEPORT",
            "text": "<div>Head down a long, dark corridor</div>"
          },
          {
            "color": "black",
            "destination": "general_library",
            "requirements": "SLIP OR GUST OR TELEPORT",
            "text": "<div>Walk down the slick corridor to the main library</div>"
          }
        ],
        "id": "088",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This small room was once used as a newspaper archive.  It is cool and the air feels drier than it did outside.  Cases with drawers line the room, each containing a stack of delicate sheets of paper covered with precious primary sources detailing the happenings of the ancient world.  A few sheets, more tattered than the rest, are still laid out on the large table in the center of the room.</div>",
        "title": "A Collection of Fragile Newspapers",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "aaru_destruction_by_energy",
            "location": "Folder 088",
            "name": "A newspaper clipping from Aaru",
            "quantity": 1
          }
        ]
      },
      "library_play_area": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "library_deep_stacks",
            "requirements": "UNDERSTAND OR SEARCH OR TELEPORT",
            "text": "<div>Head inside</div>"
          },
          {
            "color": "black",
            "destination": "courtyard",
            "requirements": "STRENGTH OR CHARM OR TELEPORT",
            "text": "<div>Head towards a less child-friendly area</div>"
          }
        ],
        "id": "078",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This room's ceiling is somewhat low. The walls are decorated with brightly-colored, simply-drawn images of animals, plants, musical instruments, common tools and household implements, as well as some items you don't recognize. Half the room is taken up with a climbing structure with various short ladders, rings, and tubes a child could crawl through. Several bins hold the remains of toys and games.</div>",
        "title": "Library Play Area",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "art_toy_construction",
            "location": "Folder 078",
            "name": "Anigasus Milfas",
            "quantity": 1
          }
        ]
      },
      "magic_export": {
        "actions": [],
        "connections": [],
        "id": "099",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_adornment",
            "location": "Shared bin",
            "name": "Adornments (Pink Cone)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This room is a mess.  It is furnished with three desks, a cot, and a rolling chair, and every surface except the chair is covered in a mixture of notes and ritual equipment.  You can still see faint chalk markings on the walls, diagramming something whose meaning is not obvious.  Some sort of strange jury-rigged device has been haphazardly attached to one of the walls; tracing the conduit, it seems to be wired directly into the heart of Siru Kisal in a way that, even to your entirely untrained eye, does not seem safe.</div>",
        "title": "The Ritualist's Room",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 2
          },
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "thaumaturgic_ritual",
            "location": "Folder 099",
            "name": "The Ritual of Universal Thaumaturgic Dispersion",
            "quantity": 1
          }
        ]
      },
      "mail_room": {
        "actions": [],
        "connections": [],
        "id": "028",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_fabric",
            "location": "Shared bin",
            "name": "Fabric (Red Cylinder)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This room contains several large bins full of the disintegrated remains of paper. Above each bin is an opening in the wall that looks like an intake chute. There are several long counters. In a corner is a pile of decayed fabric that might once have been sacks.</div>",
        "title": "Mail Room ",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "pegaplanin_pigment",
            "location": "Folder 028",
            "name": "Pegaplanin Reflective Pigment",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ]
      },
      "maintenance_logs": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "mushroom_shrine_2",
            "requirements": "NURSE OR NUMB OR ENERVATE OR CHITIN OR TELEPORT",
            "text": "<div>Exit into the vibrating room</div>"
          },
          {
            "color": "black",
            "destination": "mail_room",
            "requirements": "CLAIRVOYANCE OR GUST OR  DAZZLE OR TELEPORT",
            "text": "<div>Exit by the door decorated with wings</div>"
          }
        ],
        "id": "006",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_stone",
            "location": "Shared bin",
            "name": "Stone (Grey Cube)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A small room with a table against one wall and two chairs next to it. The other walls of the room are covered with shelves full of crumbling tomes, all the same size and identically bound. The ones you can open without damaging them contain logs of a mind-boggling variety of repair and maintenance jobs. It's enough to make your eyes glaze over.</div>",
        "title": "Maintenance Log Room",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "plane_drum",
            "location": "Folder 006",
            "name": "30 Gallon Drum",
            "quantity": 1
          }
        ]
      },
      "map_room": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "sk_history",
            "requirements": "TREMOR OR CLAWS OR TELEPORT",
            "text": "<div>Head west</div>"
          }
        ],
        "id": "032",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_fabric",
            "location": "Shared bin",
            "name": "Fabric (Red Cylinder)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>Maps of all colors, sizes and styles hang on the walls, encased in protective glass. A large table is topped with a map of the North and South Vorsavi continents and nearby islands; there are no obvious border markings or labels. Around the edge of the table are various buttons and small levers; their purpose is unclear and manipulating them doesn't seem to do anything.</div><div></div><div>On one wall is a large outline of a Kisalith overlain on the Voisarvi continent. On the island where Siru Kisal is, there is a shelf which is obviously meant to hold a map cartridge and looks very empty if there isn't one there. If there is one there, it should be easy enough to pick it up.</div>",
        "title": "A Room Full of Maps",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "kisalith_map_cartridge",
            "location": "Folder 032",
            "name": "Map Cartridge",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ]
      },
      "museum_entrance": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "library_play_area",
            "requirements": "DAZZLE OR SPARK OR TELEPORT",
            "text": "<div>Head towards a child-friendly area</div>"
          },
          {
            "color": "black",
            "destination": "history_hq",
            "requirements": "INSIGHT OR OVERWHELM OR TELEPORT",
            "text": "<div>Head into the exhibits</div>"
          },
          {
            "color": "yellow",
            "destination": "mushroom_shrine_1",
            "requirements": "SUBDUE OR SCORCH OR TELEPORT",
            "text": "<div>Head into a small closet</div>"
          }
        ],
        "id": "080",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>In this great vaulted hall, stairs are arranged to create a multi-level pathway through the space. On each platform, a harmonious collection of paintings, sculptures and other artworks are carefully arranged for display. Some of the display areas are filled with evocative creations of sound and light.</div>",
        "title": "A Gallery of Many Levels",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "adept_mutable",
            "location": "Folder 080",
            "name": "Mutable Flask",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "magic_ritual_explanation",
            "location": "Folder 080",
            "name": "An Experimental Ritualist's Notes",
            "quantity": 1
          }
        ]
      },
      "mushroom_shrine_1": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "palakh_archive",
            "requirements": "ENERVATE OR QUICKSAND OR TELEPORT",
            "text": "<div>Head into the western exhibit</div>"
          },
          {
            "color": "black",
            "destination": "sk_history",
            "requirements": "OVERHWHELM OR INSIGHT OR TELEPORT",
            "text": "<div>Head into the eastern exhibit</div>"
          }
        ],
        "id": "071",
        "image": "",
        "message": "",
        "phiRoom": true,
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_stone",
            "location": "Shared bin",
            "name": "Stone (Grey Cube)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This chamber's puffball-covered altar sits surrounded by an array of carved stone statues depicting a titanic battle. Massive tree figures loom over mushroom shapes and small humanoids defending a stone city. The sculptures convey a sense of arboreal creatures overcome by stubborn fungal resistance. The altar remnants suggest the puffball held significance in that forgotten struggle.</div>",
        "title": "Mushroom Altar: Puffballs",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "gabor_mushroom_farm",
            "location": "Folder 071",
            "name": "Excitement to Study",
            "quantity": 1
          }
        ]
      },
      "mushroom_shrine_2": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "hvac_room",
            "requirements": "CHEMICAL SPRAY OR NURSE OR TELEPORT",
            "text": "<div>Head towards the vibrations</div>"
          },
          {
            "color": "black",
            "destination": "garbage_chute",
            "requirements": "SUBDUE OR ANIMAL FORM OR TELEPORT",
            "text": "<div>Head towards a smelly area</div>"
          }
        ],
        "id": "087",
        "image": "",
        "message": "",
        "phiRoom": true,
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_glass",
            "location": "Shared bin",
            "name": "Glass (White Triangular Prism)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This chamber centers on an altar adorned with yellow chanterelle mushrooms. Surrounding walls are carved with imagery depicting objects, plants, animals and people in various stages of decay. As your gaze follows the artwork, you notice the decomposing forms becoming interwoven with mushroom shapes and networks of filaments and ultimately the filaments slowly morph into irridescent stones. The artistic hub seems centered around the chanterelle altar as the heart of this process.</div>",
        "title": "Mushroom Altar: Chanterelles",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "food_cheese",
            "location": "Folder 087",
            "name": "Cheese",
            "quantity": 2
          },
          {
            "bulkyness": 1,
            "key": "open_the_way_2",
            "location": "Folder 087",
            "name": "A Rubbing of Some Text",
            "quantity": 1
          }
        ]
      },
      "mushroom_shrine_3": {
        "actions": [],
        "connections": [
          {
            "color": "green",
            "destination": "bodua_control",
            "requirements": "STRENGTH OR TELEPORT",
            "text": "<div>Head towards a buzzing room</div>"
          },
          {
            "color": "black",
            "destination": "bodua_garden",
            "requirements": "MIRROR OR HEAL OR TELEPORT",
            "text": "<div>Head towards a manicured area</div>"
          }
        ],
        "id": "061",
        "image": "",
        "message": "",
        "phiRoom": true,
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This chamber features a central carved stone altar covered in bioluminescent fungi. The blue-green glow of the mushrooms, reminiscent of glowcaps, suffuses the shadowy room. The surrounding walls are carved with abstract whorls and lines that could potentially depict a vast interconnected network and seem to map roughly to the layout of the cave network, with the altar as a focal point. The prolific glowing fungi concentrated on the altar suggest a relationship to the mysterious frescoes. The glow of the mushrooms hints at secrets yearning to be illuminated in this ancient space.</div>",
        "title": "Mushroom Altar: Glowcaps",
        "uniqueItems": []
      },
      "palakh_archive": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "mushroom_shrine_1",
            "requirements": "CHEMICAL SPRAY OR CLAIRVOYANCE OR TELEPORT",
            "text": "<div>Head back towards the mushrooms</div>"
          },
          {
            "color": "black",
            "destination": "sk_history",
            "requirements": "DUPLICATE OR LIGHTNING BOLT OR TELEPORT",
            "text": "<div>Head into another exhibit</div>"
          }
        ],
        "id": "012",
        "image": "",
        "message": "Reminder for clearing subterranean passages: Apply BRUTE raw force. CRUSH with physical power. VANQUISH the debris.",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_wood",
            "location": "Shared bin",
            "name": "Wood (Unpainted Plank)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This room seems like it must have beautiful once.  A crescent-shaped bench hugs one wall, facing a stone pond, now empty.  The pond is surrounded by a deep trough of sand.  At the center of the pond stands a simple pillar inscriped with \"[953] PALAKH --- Tegasus trei es za nord og vero es batra\" and below that \"May his writings light the way.\" At the top of the pillar, you see a six-petaled bronze lotus, blackened as though a fire once burned at its heart.</div>",
        "title": "Palakh Memorial Chamber",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "food_beans",
            "location": "Folder 012",
            "name": "Dried Beans",
            "quantity": 2
          },
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ]
      },
      "path_hub": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "bodua_theme",
            "requirements": "STRENGTH OR TELEPORT",
            "text": "<div>Head towards the sound of rushing water</div>"
          },
          {
            "color": "black",
            "destination": "abarrane_theme",
            "requirements": "STRENGTH OR TELEPORT",
            "text": "<div>Head towards the sound of soft music</div>"
          },
          {
            "color": "black",
            "destination": "kenati_theme",
            "requirements": "STRENGTH OR TELEPORT",
            "text": "<div>Head down the silent corridor.</div><div></div><div>An engraving in the stone above this path reads \"[779] Makrug Kenati finvem.\" and below that \"Kenati judges all.\" Both texts are graffitted over in red paint reading \"[598] Lirnat makrug Kenati zak\".</div>"
          },
          {
            "color": "black",
            "destination": "ashur_theme",
            "requirements": "STRENGTH OR TELEPORT",
            "text": "<div>Head down the brightly lit corridor</div>"
          },
          {
            "color": "black",
            "destination": "gabor_theme",
            "requirements": "STRENGTH OR TELEPORT",
            "text": "<div>Head down the strong smelling corridor.</div><div></div><div>There are faint gouges in the stone floor along this path.</div>"
          },
          {
            "color": "black",
            "destination": "sumai_theme",
            "requirements": "STRENGTH OR TELEPORT",
            "text": "<div>Head down the ornate corridor.</div><div></div><div>An engraving in the stone above this path reads</div><div>\"[936] Kseres blaprofabrip.\"</div><div>\"Kseres blatiligrip.\"</div><div>\"Kseres blakrugrip.\"</div><div>\"Be free from fear.\"</div><div>\"Be free from hate.\"</div><div>\"Be free from judgement.\"</div>"
          }
        ],
        "id": "023",
        "image": "",
        "message": "",
        "recurringItems": [],
        "text": "<div>Following the sensory experience, you find yourself in a hexagonal room. Each side of the hexagon appears distinct and to lead down a different corridor.</div>",
        "title": "The Hexagon",
        "uniqueItems": []
      },
      "psyops_flavor": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "universal_item",
            "requirements": "SPATIAL STORAGE OR ANTIMAGIC FIELD OR APOTHEOSIS",
            "text": "<div>Head towards a humming noise</div>"
          },
          {
            "color": "black",
            "destination": "magic_export",
            "requirements": "ATTUNE OR OVERCHARGE OR PACIFY",
            "text": "<div>Head into a silent room</div>"
          },
          {
            "color": "black",
            "destination": "tuulinen_maze_flavor",
            "requirements": "QUICKSAND OR ENERVATE OR CHARM OR TELEPORT",
            "text": "<div>Head west</div>"
          }
        ],
        "id": "007",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "blessing_pendant",
            "location": "Folder 007",
            "name": "Blessing Pendant",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>On the wall is ancient text: </div><div></div><div>The Island Blessing protects those who live in the sea near the range. It is a dangrous place and The Island Blessing induces peace. The inhabitants of the lands have indicated their appreciation.</div><div></div><div>Siru Kisal has the tools to reinforce and degrade the blessing as circumstances dictate.</div>",
        "title": "The Island Blessing",
        "uniqueItems": []
      },
      "quarry": {
        "actions": [],
        "connections": [],
        "id": "018",
        "image": "",
        "message": "",
        "recurringItems": [],
        "text": "<div>You are looking down from the edge of a vast pit with walls of stone. From the shape of the hole and the piles of rock, it is clear that this was once a quarry. Several rusted metal hulks are presumably the remains of machines used to excavate and move the minerals quarried here.</div>",
        "title": "Quarry [NOT CURRENTLY A REAL ROOM]",
        "uniqueItems": []
      },
      "sitting_room": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "cleaning_supplies",
            "requirements": "FORCEWALL OR TREMOR OR STRENGTH OR TELEPORT",
            "text": "<div>Shove open the hatch and crawl through</div>"
          },
          {
            "color": "black",
            "destination": "utility_room_2",
            "requirements": "INSIGHT OR GRADE OR SPARK OR TELEPORT",
            "text": "<div>Walk through the door</div>"
          },
          {
            "color": "black",
            "destination": "utility_room_1",
            "requirements": "OVERWHELM OR ANIMAL FORM OR TELEPORT",
            "text": "<div>Head into a closet</div>"
          }
        ],
        "id": "048",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_glass",
            "location": "Shared bin",
            "name": "Glass (White Triangular Prism)",
            "quantity": 1
          }
        ],
        "text": "<div>A cozy room whose floor and walls are covered with a delightfully soft material. Comfortable chairs are arranged in small groups.</div>",
        "title": "Sitting Room",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "glowing_ashur_follower",
            "location": "Folder 048",
            "name": "Oral History - Glowing Ashur Follower",
            "quantity": 1
          }
        ]
      },
      "sk_history": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "map_room",
            "requirements": "FRIGHTEN OR TELEPORT",
            "text": "<div>Exit into a room full of maps</div>"
          }
        ],
        "id": "026",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_stone",
            "location": "Shared bin",
            "name": "Stone (Grey Cube)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>The ceiling of this room is a grand mosaic depicting a great city rising out of the sea. Its walls, towers, buildings and parks are only partially completed. Six glowing human figures surround the city. A woman with a flute in one hand stands atop the highest tower, gesturing as if to direct the work. A man with a peaceful expression raises a sparkling dome. An old man and a black panther lounge by a shining pool of water. A woman stands with hands raised among shelves of scrolls. A man with lightning-shaped scars holds back a wave rising from the ocean. A woman embraces a giant tree; this part of the mosaic is partially chipped away but the image is still recognizable.</div>",
        "title": "A Room With A Mosaic on the Ceiling",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "letter_gabor_help_itzel",
            "location": "Folder 026",
            "name": "Letter with the official seal of Siru Kisal",
            "quantity": 1
          }
        ]
      },
      "society_room": {
        "actions": [],
        "connections": [
          {
            "color": "green",
            "destination": "maintenance_logs",
            "requirements": "GRADE OR CHARM OR LOCATE OR TELEPORT",
            "text": "<div>Head towards what looks a bit like an office</div>"
          },
          {
            "color": "red",
            "destination": "mushroom_shrine_2",
            "requirements": "SUBDUE OR  MIRROR OR QUICKSAND OR TELEPORT",
            "text": "<div>Head towards the vibrating room</div>"
          },
          {
            "color": "black",
            "destination": "garbage_chute",
            "requirements": "CHEMICAL SPRAY OR CLAIRVOYANCE OR TREMOR OR TELEPORT",
            "text": "<div>Head towards a strangely smelly room</div>"
          },
          {
            "color": "black",
            "destination": "game_room",
            "requirements": "ANIMAL FORM OR SYMPHONY OR GRADE OR TELEPORT",
            "text": "<div>Head towards a room with a clicking sound</div>"
          }
        ],
        "id": "068",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>On the walls of this room are several faintly glowing panels covered with Sadru writing. These display what seem to be shift schedules with entries like \"Plumbing: Sunrise Shift: Green Team.\" There are several cabinets, mostly empty. A central table is surrounded by several chairs. The walls are decorated with framed texts in Sadru that say things like \"A Grain Of Sand Brings The Gears To A Halt\" and \"Great Works Rest On Our Service.\"</div>",
        "title": "A Room With Mottoes On the Walls",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "art_write_journal",
            "location": "Folder 068",
            "name": "A Bound Blank Journal",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "society_intro",
            "location": "Folder 068",
            "name": "Introduction",
            "quantity": 1
          }
        ]
      },
      "sumai_banquet_hall": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "sumai_equal_room",
            "requirements": "DREAM OR CHARM OR HALLUCINATE  OR TELEPORT",
            "text": "<div>Exit through the door with a blue and white circle on it</div>"
          },
          {
            "color": "black",
            "destination": "sumai_bedroom",
            "requirements": "HALLUCINATE OR DREAM OR STRENGTH OR TELEPORT",
            "text": "<div>Exit  through the plain door</div>"
          },
          {
            "color": "black",
            "destination": "sumai_pleasure_control",
            "requirements": "SYMPHONY OR DAZZLE OR NUMB OR TELEPORT",
            "text": "<div>Exit through the ornate door</div>"
          }
        ],
        "id": "065",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A grand hall with vaulted ceilings and two long tables running the length of the hall. The tables are low, as though meant for people to sit on the floor to use them. If there were cushions or something else to sit on, they have not survived. The walls are painted with surreal scenes; you can't quite tell what is being depicted, but they invite speculation. This room doesn't echo the way you would expect; sound is muted so that you can hear people speaking nearby but not not a few feet away.</div>",
        "title": "Banquet Hall",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ]
      },
      "sumai_bedroom": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "sumai_theme",
            "requirements": "STRENGTH OR FRIGHTEN OR GUST  OR TELEPORT",
            "text": "<div>Go into the grandly decorated room</div>"
          },
          {
            "color": "black",
            "destination": "sumai_library",
            "requirements": "UNDERSTAND OR SILENCE  OR TELEPORT",
            "text": "<div>Go into the library</div>"
          },
          {
            "color": "black",
            "destination": "sumai_banquet_hall",
            "requirements": "CHARM OR ENERVATE OR TELEPORT",
            "text": "<div>Go into the vaulted hall</div>"
          }
        ],
        "id": "091",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>The walls and floor of this small room are covered with a soft material that somehow has not disintigrated over the centuries. It is patterned with swirls of cream and pale blue. The effect is soothing. There is a large bedstead piled with dust that must be the remains of bedding. There is a small recess in another wall; if you put your hand it, water flows into a basin.</div>",
        "title": "Peaceful Bedroom",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "optical_focusing_device",
            "location": "Folder 091",
            "name": "Optical Focusing Device",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "sumai_muses_about_kenati",
            "location": "Folder 091",
            "name": "A Meditation on Kenati",
            "quantity": 1
          }
        ]
      },
      "sumai_courtier_quarters": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "sumai_banquet_hall",
            "requirements": "CHARM OR SPARK OR SLIP OR TELEPORT",
            "text": "<div>Go into the vaulted hall</div>"
          },
          {
            "color": "black",
            "destination": "sumai_pleasure_control",
            "requirements": "TREMOR OR CHARM OR ANIMAL FORM OR TELEPORT",
            "text": "<div>Go through the ornate door</div>"
          }
        ],
        "id": "020",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A chamber divided into several areas by delicately carved wooden latticework screens. One area has a bed, one has racks where clothing might have hung, one has what appears to be a bathtub sunken into the floor, one has a desk and chair. Mirrors in sparkly frames hang on all the walls. Another frame contains what looks like an abstract painting, but its colors keep slowly shifting into different patterns.</div>",
        "title": "Courtier's Quarters",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "adept_truth_scroll_of_truth",
            "location": "Folder 020",
            "name": "Scroll of Truth",
            "quantity": 1
          }
        ]
      },
      "sumai_equal_room": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "sumai_courtier_quarters",
            "requirements": "NUMB OR CHARM OR STRENGTH OR TELEPORT",
            "text": "<div>Enter the living quarters</div>"
          },
          {
            "color": "black",
            "destination": "sumai_tomb",
            "requirements": "FRIGHTEN OR DAZZLE OR SYMPHONY OR TELEPORT",
            "text": "<div>Enter the tomb</div>"
          },
          {
            "color": "black",
            "destination": "sumai_observatory",
            "requirements": "UNDERSTAND OR CHARM OR MIRROR OR TELEPORT",
            "text": "<div>Go through a round porthole</div>"
          }
        ],
        "id": "016",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_fabric",
            "location": "Shared bin",
            "name": "Fabric (Red Cylinder)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>In the center of this room's floor is a blue and white tiled circle. Around its rim are ten equally-spaced small circles, about big enough that a person could stand in each. In the middle is a small globe of some sort of glass-like material. It is cracked and dusty. From one corner of the room protrudes a tree root. It appears to be dead, but the wood is so hard you can't damage it with any tools you have on hand.</div>",
        "title": "The Room of Equal Standing",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "adept_feeling_soulstone",
            "location": "Folder 016",
            "name": "Soul Stone",
            "quantity": 1
          }
        ]
      },
      "sumai_library": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "sumai_bedroom",
            "requirements": "SUBDUE OR MIRROR OR DREAM  OR TELEPORT",
            "text": "<div>Enter the room labeled \"sleeping\"</div>"
          },
          {
            "color": "yellow",
            "destination": "sumai_pleasure_control",
            "requirements": "CHARM OR TREMOR OR TELEPORT",
            "text": "<div>Exit through the ornate door</div>"
          }
        ],
        "id": "036",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This room would feel airy and spacious if it were not cluttered with books, scrolls, and documents of all shapes and sizes, as well as palm-sized cubes that glow weakly in all different colors. If there is an organizational scheme here, you can't figure out what it is. The floor is made of a slightly springy material and covered in the decayed remains of what was probably a sumptuous carpet. Inscribed on the walls in Pasiru: \"[522] Za Selati Es Nordsal\" and below that in smaller lettering \"[523] Meoptit og selati kwi kolkas sikatai.\"</div>",
        "title": "The Catalog of Dreams",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "art_hero_painting_feeling",
            "location": "Folder 036",
            "name": "Painting of Sumai",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "andavari_poem",
            "location": "Folder 036",
            "name": "A Poem By Master Kandalo",
            "quantity": 1
          }
        ]
      },
      "sumai_observatory": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "sumai_equal_room",
            "requirements": "SEARCH OR UNDERSTAND OR DREAM OR TELEPORT",
            "text": "<div>Enter the chamber with the blue and white circle on the floor</div>"
          },
          {
            "color": "black",
            "destination": "sumai_tomb",
            "requirements": "FRIGHTEN OR NUMB OR FORCEWALL OR TELEPORT",
            "text": "<div>Enter the tomb</div>"
          }
        ],
        "id": "066",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_stone",
            "location": "Shared bin",
            "name": "Stone (Grey Cube)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>You enter a round chamber with a grand central pillar. The vaulted ceiling is studded with points of light that make it look like the night sky. They fill the room with soft blue-white light. Attached to opposite sides of the central pillar are what look like full-length mirrors, but which do not reflect their surroundngs. One is bordered with engravings of open eyes and stars, the other with engravings of closed eyes and smoke.</div>",
        "title": "Observatory",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "art_thamyris_wing",
            "location": "Folder 066",
            "name": "Thamyris's Wings",
            "quantity": 1
          }
        ]
      },
      "sumai_pleasure_control": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "sumai_equal_room",
            "requirements": "MIRROR OR UNDERSTAND OR TELEPORT",
            "text": "<div>Go through the door with a blue and white circle on it</div>"
          },
          {
            "color": "black",
            "destination": "sumai_courtier_quarters",
            "requirements": "LIGHTNING BOLT OR FRIGHTEN OR TELEPORT OR TELEPORT",
            "text": "<div>Enter the living quarters</div>"
          }
        ],
        "id": "027",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>The room is filled with ornate lounge furniture and various small dials. In the center is a table with a small blue dome in the center and around the dome the word pleasure is written in a variety of languages. Scrawled onto the bottom of the tabletop are instructions labeled \"Pleasure Dome Activation\". If you read the instructions, you may take a copy of the corresponding greensheet from the \"Pi Delta Alpha\" packet.</div><div></div><div>A warning sign posted on the wall reads \"[127] Ume ksepraev venalg za tab.\" and \"Ignore unusual sensations\".</div>",
        "title": "The Control Room",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "relic_feeling_sumais_staff",
            "location": "Folder 027",
            "name": "Sumai's Staff",
            "quantity": 1
          }
        ]
      },
      "sumai_theme": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "sumai_training_room",
            "requirements": "NUMB OR DAZZLE OR ANIMAL FORM OR TELEPORT",
            "text": "<div>Enter the room of couches</div>"
          },
          {
            "color": "black",
            "destination": "sumai_bedroom",
            "requirements": "NUMB OR OVERWHELM OR CHARM OR TELEPORT",
            "text": "<div>Enter the bedroom</div>"
          },
          {
            "color": "black",
            "destination": "sumai_library",
            "requirements": "DAZZLE OR CLAWS OR LOCATE OR TELEPORT",
            "text": "<div>Enter the library</div>"
          }
        ],
        "id": "042",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A grandly decorated room with comfortable chairs in small groups and little tables placed conveniently. The walls and furniture all shimmer with slowly shifting colors. On the walls hang portraits of richly dressed and jeweled people. Soft chiming music plays from a source you can't identify. Three doors open onto what looks like a library, a bedroom, and a room full of reclining couches.</div>",
        "title": "A Grand Sitting Room",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "sumai_exiled",
            "location": "Folder 042",
            "name": "A Decree from the King of Naqrabu",
            "quantity": 1
          }
        ]
      },
      "sumai_tomb": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "sumai_equal_room",
            "requirements": "DREAM OR STRENGTH OR TELEPORT",
            "text": "<div>Go through the door with a blue and white circle on it</div>"
          }
        ],
        "id": "041",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "block_glass",
            "location": "Shared bin",
            "name": "Glass (White Triangular Prism)",
            "quantity": 1
          }
        ],
        "text": "<div>You step into a room that appears to be carved from a single enormous block of the finest white marble.  A graceful swirling pattern of inlaid gems begins on the floor and ascends the walls.  The entire room is suffused with the soft glow of some ancient magic, but hundreds of crystalline candle holders are also clustered at the base of the walls, their candles extinguished coundless millennia ago. At the very center of the room sits the sarcophagus, its lid patterned with a delicate gold tracery.  A thick cushion for mourners to kneel upon has been set by the sarcophagus, its surface permanently dented by hundreds of ancient knees. The pedestal holding the sarcophagus is inscribed in Pasiru: \"[960] Argi za selati masisen za li Sumei. Za li es za selati es fust riraesin Sumei.\"</div>",
        "title": "Sumai's Tomb",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "master_geeling_geode",
            "location": "Folder 041",
            "name": "Geode",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 1,
            "key": "letter_sumai_death",
            "location": "Folder 041",
            "name": "A Letter Describing the Death of Sumai",
            "quantity": 1
          }
        ]
      },
      "sumai_training_room": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "sumai_pleasure_control",
            "requirements": "CHARM OR SYMPHONY OR TELEPORT",
            "text": "<div>Continue to the next room</div>"
          },
          {
            "color": "black",
            "destination": "andavari_room",
            "requirements": "COMPEL OR SEARCH OR TELEPORT",
            "text": "<div>Crawl beneath dark branches</div>"
          }
        ],
        "id": "053",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This room is full of reclining couches, each with a stool and a small table beside it. The tabletops have many round depressions; some of these contain traces of paste or powder, or are stained as if they once held colored liquid.</div>",
        "title": "Training Room",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ]
      },
      "tuulinen_maze_flavor": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "universal_item",
            "requirements": "RESONANCE OR ANNIHILATE OR DISTILL EMOTION",
            "text": "<div>Head towards a humming noise</div>"
          },
          {
            "color": "black",
            "destination": "magic_export",
            "requirements": "PERSONAL REALM OR VERACITY OR GENESIS",
            "text": "<div>Head into a silent room</div>"
          },
          {
            "color": "black",
            "destination": "psyops_flavor",
            "requirements": "LOCATE OR INSIGHT OR OVERWHELM OR SPORE SACKS OR TELEPORT",
            "text": "<div>Head east</div>"
          }
        ],
        "id": "019",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_wood",
            "location": "Shared bin",
            "name": "Wood (Unpainted Plank)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A room with walls covered in images of mountains. Around the top is written \"The ones of the range, Veroripiense will protect\". On one wall there is a poem entitled \"The Range Poem\":</div><div></div><div>The Range is our cradle, the Range is our home</div><div>Our mountains endure against storm and change</div><div>Our mountains shelter and hide their own</div><div>Our bones must return to the stones of the Range</div><div></div><div>The streams shape the ways that no strange feet can find</div><div>The winds shape the stones with each changing year</div><div>The lightning storms dazzle intruding eyes blind</div><div>The cliffs and the peaks strike them dizzy with fear</div><div></div><div>The stones of the earth rise up to surround us</div><div>The path bends to end in the place it began</div><div>The Monument stands in trust of the promise</div><div>The Range will protect us as long as it stands</div><div></div><div>The Range keeps our secrets and shelters our lives</div><div>Its paths ever shift and its stones tell no tales</div><div>Our hearts hold its secrets, our feet know its ways</div><div>As long as one child of the mountains survives</div>",
        "title": "Veroripiense Headquarters",
        "uniqueItems": [
          {
            "bulkyness": 1,
            "key": "attune_veroripiense",
            "location": "Folder 019",
            "name": "Attuning the Veroripiense Monument",
            "quantity": 3
          },
          {
            "bulkyness": 1,
            "key": "general_veroripiense",
            "location": "Folder 019",
            "name": "Facts of Veroripiense",
            "quantity": 3
          }
        ]
      },
      "universal_item": {
        "actions": [],
        "connections": [],
        "id": "038",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_glass",
            "location": "Shared bin",
            "name": "Glass (White Triangular Prism)",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_green",
            "location": "Shared bin",
            "name": "Green Triangle Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>At first glance, this room is underwhelming. But at the center you notice a display case. The case is ornately decorated and immaculately maintained despite its centuries of disuse. At the center of the case there is very clearly a spot meant to hold a large jug. </div><div></div><div>All around the rooms are inscriptions in Sadru about how the Universal Vessel has uncountably many uses.</div>",
        "title": "The Display Case",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "master_mutable",
            "location": "Folder 038",
            "name": "Universal Vessel",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 2
          },
          {
            "bulkyness": 0,
            "key": "gemstone_orange",
            "location": "Shared bin",
            "name": "Orange Square Gemstone",
            "quantity": 1
          },
          {
            "bulkyness": 0,
            "key": "gemstone_beige",
            "location": "Shared bin",
            "name": "Beige Diamond Gemstone",
            "quantity": 1
          }
        ]
      },
      "universal_transformer": {
        "actions": [
          {
            "event": "noEvent",
            "requirements": "Consume a Mutable Flask",
            "text": "Use the equipment to convert a Mutable Flask into a \"Ritual Leaf Cup\", \"Shimmering Glass Shards\", \"Jar of Herbal Paste\", \"Vendrekk Scale\", \"Scroll of Truth\", or \"Soul Stone\"."
          },
          {
            "event": "noEvent",
            "requirements": "Consume a Universal Vessel",
            "text": "Use the equipment to convert a Universal Vessel into a \"Preserved Water Vial\", \"Ancient Tuning Fork\", \"Mycelium Core\", \"Pure Quintessence\", \"Blank Stone Tablet\", or \"Geode\"."
          }
        ],
        "connections": [
          {
            "color": "black",
            "destination": "history_hq",
            "requirements": "UNDERSTAND OR LOCATE OR TELEPORT",
            "text": "<div>Head into the main part of the museum</div>"
          }
        ],
        "id": "082",
        "image": "",
        "message": "",
        "recurringItems": [],
        "text": "<div>A large and imposing piece of equipment that feels horribly powerful. </div><div></div><div>There is a prominant sign with text in two languages: \"[497] Ume ksebalim za rekokrisk.\" and \"Do not touch the lab equipment.\"</div><div></div><div>If you use any of the activated abilities, cross out the name on the item card and replace it with the name of the item into which you transmuted it. The player who had the consumed item gains possession of the new item.</div>",
        "title": "The Transformer",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "ore",
            "location": "Folder 082",
            "name": "Ore",
            "quantity": 2
          },
          {
            "bulkyness": 1,
            "key": "angry_at_ashur_not_doing_energy",
            "location": "Folder 082",
            "name": "A Complaint from Foreman Tibor",
            "quantity": 1
          }
        ]
      },
      "utility_room_1": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "game_room",
            "requirements": "COMPEL OR FRIGHTEN OR TELEPORT",
            "text": "<div>Head towards the sound of clicking</div>"
          },
          {
            "color": "red",
            "destination": "society_room",
            "requirements": "STRENGTH OR TRANSFORM OR TELEPORT",
            "text": "<div>Head into the quiet room</div>"
          },
          {
            "color": "black",
            "destination": "sitting_room",
            "requirements": "TREMOR OR CHEMICAL_SPRAY OR TELEPORT",
            "text": "<div>Head out into a dimly lit room</div>"
          }
        ],
        "id": "100",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_blue",
            "location": "Shared bin",
            "name": "Blue Parallelogram Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>A small room filled with pieces of equipment. There is a box on one table, and two doors - one that leads towards the sound of clicking and one that leads to a silent room.</div>",
        "title": "A Utility Room",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "temple_key",
            "location": "Folder 100",
            "name": "Key to the Temple",
            "quantity": 1
          }
        ]
      },
      "utility_room_2": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "society_room",
            "requirements": "STRENGTH OR NURSE OR NUMB OR TELEPORT",
            "text": "<div>Exit into a quiet room</div>"
          },
          {
            "color": "black",
            "destination": "garbage_chute",
            "requirements": "SPORE SACKS OR NUMB OR DREAM OR TELEPORT",
            "text": "<div>Exit into a strangely smelly room</div>"
          }
        ],
        "id": "003",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_concrete",
            "location": "Shared bin",
            "name": "Concrete (Beige Rectangular Prism)",
            "quantity": 1
          }
        ],
        "text": "<div>A small room filled with pieces of equipment. The floor is stained as though a black liquid had been spilled on it.</div>",
        "title": "A Utility Room With A Stained Floor",
        "uniqueItems": [
          {
            "bulkyness": 0,
            "key": "toolbox",
            "location": "Folder 003",
            "name": "Toolbox",
            "quantity": 1
          }
        ]
      },
      "verrehaven_blessing_hq": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "verrehaven_dial",
            "requirements": "SLIP OR TRANSFORM OR GUST OR GRADE OR NURSE OR NUMB",
            "text": "<div>Continue into the room beyond opposite the guard's chair.</div>"
          },
          {
            "color": "black",
            "destination": "verrehaven_ritual",
            "requirements": "QUICKSAND OR TREMOR OR CLAWS",
            "text": "<div>Rip up the locked floor gate and crawl in</div>"
          }
        ],
        "id": "101",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_red",
            "location": "Shared bin",
            "name": "Red Trapezoid Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>This room is decorated with wave motifs in blue and green. On the wall is ancient text: </div><div></div><div>The sea near the range is a dangerous place, and so to reduce the worries of those who live among its waters, we have created The Island Blessing. The Blessing causes those on the lands in the waters, and those who contemplate the lands in the waters, to think only peaceful thoughts. To avoid war and conflict. It affects everyone, even the sea creatures. The inhabitants of the lands have indicated their appreciation.</div><div></div><div>The Blessing does not last forever though. But it lasts a very, very long time and we can reinforce it as needed. Of course, if it proves detrimental it is also possible to accelerates its waning process. Doing either of these requires a Blessing Pendant.</div><div></div><div>There is a locked grate on the floor and a door at the end of the room opposite the guard's chair.</div>",
        "title": "The Island Blessing",
        "uniqueItems": []
      },
      "verrehaven_dial": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "verrehaven_ritual",
            "requirements": "LOCATE OR SILENCE OR DREAM",
            "text": "<div>Open the ornate door</div>"
          }
        ],
        "id": "109",
        "image": "",
        "message": "extra Blessing Pendants are available in the westernmost room off the Deep Ritual Corridor in the Ancient Library",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "gemstone_yellow",
            "location": "Shared bin",
            "name": "Yellow Hexagon Gemstone",
            "quantity": 1
          }
        ],
        "text": "<div>The room is large and at the far end there is a panel with a large dial. The dial is a logarithmic scale and has numbers from 1 month to 1 day. If you wish to read the dial, look in <location TBD, indicates 50 years left>.</div><div></div><div>On the wall is a painting of several people standing around the dial conducting a ceremony. In the painting, the dial looks like it was pointing to about 6000 years. </div><div></div><div>Near the dial is an ornate locked door labeled \"Blessing Maintenance\" which has a keyhole type slot the shape of a Blessing Pendant.</div>",
        "title": "Blessing Status Dial",
        "uniqueItems": []
      },
      "verrehaven_ritual": {
        "actions": [],
        "connections": [
          {
            "color": "black",
            "destination": "verrehaven_dial",
            "requirements": "STRENGTH OR TELEPORT",
            "text": "<div>Head back towards the dial</div>"
          }
        ],
        "id": "102",
        "image": "",
        "message": "",
        "recurringItems": [
          {
            "bulkyness": 0,
            "key": "block_concrete",
            "location": "Shared bin",
            "name": "Concrete (Beige Rectangular Prism)",
            "quantity": 1
          }
        ],
        "text": "<div>This is a small room with a desk on one side. On the desk, there is a paper plastered to the table labeled \"Blessing Maintenance Instructions\".</div><div></div><div>If you read the paper, you may take a copy of the corresponding greensheet from the \"Beta My Iota\" packet.</div>",
        "title": "Blessing Maintenance",
        "uniqueItems": []
      }
    }
  };
var socket;
var currentRoom = null;
var paused = false;
var recurringItemsTaken = {}; // recurring items taken from current room
var entrancesUnlocked = []
var inventory = [];
var modifyingMessageText = true; // TODO: Should this prevent you from moving onward?
var currentTab = "before-delve";
var roomToIndex = null;

// Clear local storage with localStorage.clear()

BUTTON_WAIT_MS = 1000;
SAVE_MS = 1000;

function updateGameState(newGameState) {
    console.log("Updating game state");
    console.log(newGameState);
    
    gameState = newGameState;
    renderEntrances();

    // Update our room names map. TODO: include in gameState?
    const roomNames = Object.keys(gameState.rooms).slice().sort();
    roomToIndex = {};
    for (let i = 0; i<roomNames.length; i++) {
        roomToIndex[roomNames[i]] = i;
    }
    
    if (currentTab == "in-delve") { renderRoom(); }
    renderResumeCode();
}


window.onload = onloadFunction;
var entranceTemplate;
function onloadFunction() {
    console.log("On load");
    // save some of the templates
    entranceTemplate = document.getElementById("entrance-template");
    
    // socket = io();
    // socket.on("state", newGameState=>updateGameState(newGameState));
    // socket.on("uniqueItemTaken", event=>processUniqueItemEvent(event));
    // socket.on("muItemTaken", event=>processMuItemTaken(event));

    setCurrentPage("before-delve");

    pauseTimer();
    renderTimer();

    // Set up the return-to-start button
    let button = $("#clock-pane");
    button.pressAndHold({holdTime: BUTTON_WAIT_MS, progressIndicatorRemoveDelay: 0,
        progressIndicatorColor: "#ff0000", progressIndicatorOpacity: 1.0});
    button.bind("complete.pressAndHold", function() {toggleTimer();});

    // Set up the return-to-start button
    button = $("#return-to-start-button");
    button.pressAndHold({holdTime: BUTTON_WAIT_MS, progressIndicatorRemoveDelay: 0,
        progressIndicatorColor: "#ff0000", progressIndicatorOpacity: 1.0});
    button.bind("complete.pressAndHold", function() {returnToStart();});

    // Set up the escape button
    button = $("#escape-button");
    button.pressAndHold({holdTime: BUTTON_WAIT_MS, progressIndicatorRemoveDelay: 0,
        progressIndicatorColor: "#ff0000", progressIndicatorOpacity: 1.0});
    button.bind("complete.pressAndHold", function() {escape();});

    // set up various buttons for the MESSAGE aspect
    button = $("#modify-message");
    button.pressAndHold({holdTime: BUTTON_WAIT_MS, progressIndicatorRemoveDelay: 0,
        progressIndicatorColor: "#ff0000", progressIndicatorOpacity: 1.0});
    button.bind("complete.pressAndHold", function() {modifyMessage();});

    button = $("#reset-message");
    button.pressAndHold({holdTime: BUTTON_WAIT_MS, progressIndicatorRemoveDelay: 0,
        progressIndicatorColor: "#ff0000", progressIndicatorOpacity: 1.0});
    button.bind("complete.pressAndHold", function() {resetMessage();});

    button = $("#save-message");
    button.pressAndHold({holdTime: BUTTON_WAIT_MS, progressIndicatorRemoveDelay: 0,
        progressIndicatorColor: "#ff0000", progressIndicatorOpacity: 1.0});
    button.bind("complete.pressAndHold", function() {saveMessage();});

    // Set up the password button to unlock new entrances
    document.getElementById("entrance-code").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("try-code").click();
        }
    });
    document.getElementById("try-code").addEventListener("click", attemptToUnlockEntrance);
    // document.getElementById("reset-passwords").addEventListener("click", resetUnlockedEntrances);

    // Set up the button to resume the delve
    document.getElementById("resume-delve-code").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("resume-delve-button").click();
        }
    });
    document.getElementById("resume-delve-button").addEventListener("click", resumeDelve);

    // Set up the button to clear brower cache
    button = $("#clear-cache");
    button.pressAndHold({holdTime: BUTTON_WAIT_MS, progressIndicatorRemoveDelay: 0,
        progressIndicatorColor: "#ff0000", progressIndicatorOpacity: 1.0});
    button.bind("complete.pressAndHold", function() {localStorage.clear(); location.reload();});
    

    // load saved game state
    if (localStorage.getItem("clientStateString") === null) {
        console.log("No game state to load.");
    } else {
        console.log("loading saved state");
        loadSessionState();
    }

    // Save the current delve.
    setInterval(saveSessionState, SAVE_MS);

    // Request an updated gameState
    // socket.emit("gameState", true);

    setupHeader();
}


function saveSessionState() {
    // I'm sure we should pause actions mid save, but...
    let clientState = {
        "currentRoom": currentRoom,
        "paused": paused,
        "recurringItemsTaken": recurringItemsTaken,
        "entrancesUnlocked": entrancesUnlocked,
        "inventory": inventory,
        "modifyingMessageText": modifyingMessageText,
        "currentPage": currentPage,
        "gameState": gameState,
        "timerMS":timerMS,
        "timerRunning":timerRunning,
        "uniqueItemsInitial":uniqueItemsInitial,
        "recurringItemsInitial":recurringItemsInitial,
        "deltaEnabled":deltaEnabled,
        "clairvoyanceEnabled":clairvoyanceEnabled,
        "phiEnabled":phiEnabled,
    };
    let clientStateString = JSON.stringify(clientState);
    localStorage.setItem("clientStateString", clientStateString);
    // localStorage.clear();
    console.log("Saved game state");
}

function loadSessionState() {
    clientState = JSON.parse(localStorage.getItem("clientStateString"));
    console.log(clientState);
    currentRoom = clientState.currentRoom;
    paused = clientState.paused;
    recurringItemsTaken = clientState.recurringItemsTaken;
    entrancesUnlocked = clientState.entrancesUnlocked;
    inventory = clientState.inventory;
    modifyingMessageText = clientState.modifyingMessageText;
    currentPage = clientState.currentPage;
    timerMS = clientState.timerMS;
    timerRunning = clientState.timerRunning;
    uniqueItemsInitial = clientState.uniqueItemsInitial;
    recurringItemsInitial = clientState.recurringItemsInitial;
    deltaEnabled = clientState.deltaEnabled;
    phiEnabled = clientState.phiEnabled;
    clairvoyanceEnabled = clientState.clairvoyanceEnabled;
 
    updateGameState(clientState.gameState);
    renderPage();
    renderEntrances();
    renderRoom();
    renderResumeCode();
}

function popupWarning(warning) {
    alert("warning", warning);
}

ALERT_DURATION_MS = 5000;
function alert(type, message) {
    console.warn(message); // TODO: make this a popup
    const alertPlaceholder = document.getElementById('alerts')
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">x</button>',
        '</div>'
    ].join('');
    alertPlaceholder.append(wrapper);

    // automatically remove the warning.
    setTimeout(()=>{wrapper.remove();}, ALERT_DURATION_MS); 
}

function renderResumeCode() {
    // console.log("resumeCode", currentRoom);
    if (gameState === undefined || gameState === null) return;
    if (roomToIndex === undefined || roomToIndex === null) return;
    if (currentRoom === undefined || currentRoom === null) return;
    const room = gameState.rooms[currentRoom].id.toString().padStart(2, "0");
    const time = Math.max(0, Math.floor(timerMS / 1000)).toString().padStart(3,"0");
    const resumeCode = room + time;
    document.getElementById("in-delve-resume-code-code").innerHTML = resumeCode;
}

function renderEntrances() {
    let i=0;
    for (const entrance of gameState.entrances) {
        if (entrance.public || entrancesUnlocked.includes(entrance.key)) {
            addEntrance(entrance, i);
            i+=1;
        }
    }
    const list = document.getElementById("entrance-buttons");
    while (list.childElementCount > i) {
      list.removeChild(list.lastChild);
    }
}

function attemptToUnlockEntrance() {
    const password = document.getElementById('entrance-code').value;
    for (let entrance of gameState.entrances) {
        if (entrance.password != password) continue;
        if (entrance.public) {
            popupWarning("The entrance corresponding to this password, "+entrance.name+", has already been unlocked permanently.");
            return;
        }
        if (entrancesUnlocked.includes(entrance.key)) {
            popupWarning("The entrance corresponding to this password, "+entrance.name+", has already been temporarily unlocked.");
            return
        }

        // unlock the entrance.
        if (entrance.unlockedPublicly) {
            // Communicate with the server to figure out whether we can actually take the item.
            socket.emit("publiclyUnlockEntrance", entrance.key);
            console.log("sent publiclyUnlockEntrance");
            console.log(entrance);
            entrance.public = true;
            console.log(entrance);
        }
        entrancesUnlocked.push(entrance.key); // even if it's public, this let's us avoid possible issues with unsynced gamestate
        console.log("Unlocked " + entrance.key);
        renderEntrances();
        return;
    }
    popupWarning("Incorrect password. Note that the password is case-sensitive.");
}

function resetUnlockedEntrances() {
    entrancesUnlocked = [];
    renderEntrances();
}

function addEntrance(entrance, index) {
    let newNode = entranceTemplate.cloneNode(true);
    let id = "entrance-"+entrance.key.replace(" ","-");
    newNode.id = id;
    newNode.getElementsByClassName("entrance-picture")[0].src="./images/"+entrance.image;
    newNode.getElementsByClassName("entrance-name")[0].innerHTML=entrance.name;
    const list = document.getElementById("entrance-buttons");
    list.insertBefore(newNode, list.children[index]);

    // set up the button
    // let button = $("#"+newNode.id+" .entrance-button");
    let button = $("#"+newNode.id);
    button.pressAndHold({
        holdTime: BUTTON_WAIT_MS, progressIndicatorRemoveDelay: 0,
        progressIndicatorColor: "#ff0000", progressIndicatorOpacity: 1.0
    });
    button.bind("complete.pressAndHold", function() {startDelve(entrance.room);});
}

function setCurrentPage(x) {
    currentPage = x;
    renderPage();
}
function renderPage() {
    document.getElementById("before-delve").style.display = (currentPage=="before-delve")?"block":"none";
    document.getElementById("in-delve").style.display = (currentPage=="in-delve")?"block":"none";
    document.getElementById("split").style.display = (currentPage=="split")?"block":"none";
}

function startDelve(room) {
    moveToRoom(room);
    setCurrentPage("in-delve");
    resetTimer();
    startTimer();
    resetUnlockedEntrances();
    renderResumeCode();
}

function resumeDelve() {
    const code =  document.getElementById("resume-delve-code").value;
    console.log(code);
    
    let room;
    for (room in gameState.rooms) {
        console.log(room, gameState.rooms[room].id, code, gameState.rooms[room].id == Math.floor(code/1000));
        if (gameState.rooms[room].id == Math.floor(code/1000)) {
            console.log("found", room);
            break;
        }
    }
    // TODO
    // const room = 'entrance'; // TODO
    moveToRoom(room);
    setCurrentPage("in-delve");
    resetTimer();
    timerMS = 1000 * (code % 1000); // Set the timer to the last 3 digits.
    startTimer();
    resetUnlockedEntrances();
}

function moveToRoom(room) {
    currentRoom = room;
    recurringItemsTaken = {};
    modifyingMessageText = false;
    clairvoyanceEnabled = false;
    renderResumeCode();
    initializeItemsForRoom();
    renderRoom();
}

function escape() {
    // Leave the delve back to the end-of-delve screen
    setCurrentPage("before-delve");
    pauseTimer();
    currentRoom = null;
}

function renderRoom() {
    if (currentRoom === null) return;
    let room = gameState.rooms[currentRoom];
    console.log("Rendering room "+currentRoom)
    // No room images :(
    // document.getElementById("room-picture").src="/images/"+room.image;
    document.getElementById("room-text").innerHTML = room.text;
    document.getElementById("room-title").innerHTML = room.title + " (" + room.id + ")";
    if (room.message.trim() == "" ) {
      document.getElementById("room-message").style.display = "none";
    } else {
        document.getElementById("room-message").style.display = "block";
    }
    document.getElementById("room-message-text").innerHTML = room.message.trim();

    renderHeader();

    // Inventory
    renderRoomInventory();

    // Display the message
    if (modifyingMessageText) {
        document.getElementById("modify-message").style.display = "none";
        document.getElementById("reset-message").style.display = "block";
        document.getElementById("save-message").style.display = "block";
        document.getElementById("message-text").readOnly = false;
    } else {
        document.getElementById("message-text").value = room.message;
        document.getElementById("modify-message").style.display = "block";
        document.getElementById("reset-message").style.display = "none";
        document.getElementById("save-message").style.display = "none";
        document.getElementById("message-text").readOnly = true;
    }
    renderRoomConnections();
    renderRoomActions();

    // Render the mu tab
    renderResumeCode();
}

function renderRoomConnections() {
    let room = gameState.rooms[currentRoom];

    // Render the room connections
    let roomConnections = document.getElementById("room-connections");
    roomConnections.innerHTML = "";

    // Add the exit.
    let connectionsArray = room.connections.slice()
    connectionsArray.push({"destination":"exit", "text": "Escape the Delve", "requirements":"", "color":"black"});

    for (const connection of connectionsArray) {
        let newConnection = document.getElementById("connection-container-template").cloneNode(true);
        newConnection.id = undefined;
        if (connection.color == "black") {
            newConnection.style.backgroundColor = "rgb(64,64,64)";
            newConnection.style.color = "white";
        } else if (connection.color == "red") {
            newConnection.style.backgroundColor = "darkred";
            newConnection.style.color = "white";
        } else if (connection.color == "green") {
            newConnection.style.backgroundColor = "darkgreen";
            newConnection.style.color = "white";
        } else if (connection.color == "yellow") {
            newConnection.style.backgroundColor = "yellow";
            newConnection.style.color = "black";
        } else {
            newConnection.style.backgroundColor = "white";
            newConnection.style.color = "black";
        }
        roomConnections.appendChild(newConnection);
        newConnection.getElementsByClassName("connection-text")[0].innerHTML = connection.text;
        if (connection.requirements != "") {
            newConnection.getElementsByClassName("connection-requirements")[0].appendChild(renderRequirement(connection.requirements));
        } else {
            // No requirements
            newConnection.getElementsByClassName("room-header-div")[0].innerHTML = "";
        }
        if (clairvoyanceEnabled) {
            let destination = connection.destination == "exit" ? "Exit" : gameState.rooms[connection.destination].title;
            newConnection.getElementsByClassName("connection-destination")[0].innerHTML = "Destination: "+destination;
        }
        let button = $(newConnection);
        button.pressAndHold({
            holdTime: BUTTON_WAIT_MS, progressIndicatorRemoveDelay: 0,
            progressIndicatorColor: "#ff0000", progressIndicatorOpacity: 1.0
        });
        if (connection.destination == "exit") {
            button.bind("complete.pressAndHold", function() {escape();});
        } else {
            button.bind("complete.pressAndHold", function() {moveToRoom(connection.destination);});
        }
    }
}

function renderRoomActions() {
    // Render the room actions
    let room = gameState.rooms[currentRoom];

    // Add the phi rooms.
    let actionsArray = room.actions.slice();
    
    if (room.phiRoom && phiEnabled && room.phi==0) {
        actionsArray.push({"event":"setPhi1", "text":"Empower the mushroom altar", "requirements":"Place a mushroom into the mushroom storage box"});
    }
    if (room.phiRoom && phiEnabled && room.phi==1) {
        actionsArray.push({"event":"setPhi0", "text":"Drain the mushroom altar", "requirements":"DESTROY MUSHROOM"});
    }

    let roomActions = document.getElementById("room-actions");
    roomActions.innerHTML = "";
    for (const action of actionsArray) {
        if (action.requiresphi && !phiEnabled) continue; // Some actions are only visible if phi is set.
        let newAction = document.getElementById("connection-container-template").cloneNode(true);
        newAction.id = undefined;
        roomActions.appendChild(newAction);
        newAction.getElementsByClassName("connection-text")[0].innerHTML = action.text;
        if (action.requirements != "") {
            newAction.getElementsByClassName("connection-requirements")[0].appendChild(renderRequirement(action.requirements));
        } else {
            // No requirements
            newAction.getElementsByClassName("room-header-div")[0].innerHTML = "";
        }
        let button = $(newAction);
        button.pressAndHold({
            holdTime: BUTTON_WAIT_MS, progressIndicatorRemoveDelay: 0,
            progressIndicatorColor: "#ff0000", progressIndicatorOpacity: 1.0
        });

        button.bind("complete.pressAndHold", function() {triggerAction(action.event);});
    }
}

function triggerAction(event) {
    // TODO: figure out a better strategy than hardcoding triggers
    if (event == "setPhi1") {
        gameState.rooms[currentRoom].phi = 1;
        socket.emit("setPhi", {"room":currentRoom, "value":1});
    } else if (event == "setPhi0") {
        gameState.rooms[currentRoom].phi = 0;
        socket.emit("setPhi", {"room":currentRoom, "value":0});
    } else {
        // popupWarning("Unrecognized action: "+event);
    }

    renderRoom();
}

function splitResumeDelve() {
    console.log("splitResume");
    setCurrentPage("in-delve");
}
function splitParty() {
    console.log("split");
    setCurrentPage("split");
}

// Use the MESSAGE keyword to change the text in a room.
function modifyMessage() {
    modifyingMessageText = true;
    renderRoom();
}

// Undo MESSAGE changes
function resetMessage() {
    modifyingMessageText = false;
    renderRoom(); //renderRoom will reset the text value for you.
}

// Commit MESSAGE changes
function saveMessage() {
    modifyingMessageText = false;
    const newText = document.getElementById("message-text").value;
    gameState.rooms[currentRoom].message = newText;
    socket.emit("modifyMessage", {"room":currentRoom, "message":newText});
    renderRoom();
}