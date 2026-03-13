const configAbility = {
  "fileName": "MushyShroomysAdventures_Ability21064",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1266064006\">LC_21064_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1545116875\">LC_21064_Sub</a>[<span class=\"descriptionNumberColor\">Elation DMG Vulnerability</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Elation DMG"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "0.06"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Elation DMG taken increases by <span class=\"descriptionNumberColor\">#SkillEquip_P2_ElationDamageTakenRatio</span>.",
      "type": "Debuff",
      "effectName": "Elation DMG Vulnerability",
      "statusName": "Elation DMG Vulnerability"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1266064006\">LC_21064_Main</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Elation"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1545116875\">LC_21064_Sub</a>[<span class=\"descriptionNumberColor\">Elation DMG Vulnerability</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's Elation by #1[i]%. When the wearer uses an Elation Skill, increases Elation DMG taken by all enemies by #2[i]% for #3[i] turn(s).",
  "params": [
    [
      0.12,
      0.06,
      2
    ],
    [
      0.14,
      0.07,
      2
    ],
    [
      0.16,
      0.08,
      2
    ],
    [
      0.18,
      0.09,
      2
    ],
    [
      0.2,
      0.1,
      2
    ]
  ]
}