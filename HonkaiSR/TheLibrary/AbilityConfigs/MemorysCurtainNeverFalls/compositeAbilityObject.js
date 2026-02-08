const compositeAbilityObject = {
  "fullCharacterName": "Memory's Curtain Never Falls",
  "trimCharacterName": "MemorysCurtainNeverFalls",
  "abilityList": [
    "MemorysCurtainNeverFalls_Ability24005"
  ],
  "fixedStats": {
    "1": {
      "SPD%": 0.06
    },
    "2": {
      "SPD%": 0.075
    },
    "3": {
      "SPD%": 0.09
    },
    "4": {
      "SPD%": 0.105
    },
    "5": {
      "SPD%": 0.12
    }
  },
  "abilityObject": {
    "MemorysCurtainNeverFalls_Ability24005": {
      "fileName": "MemorysCurtainNeverFalls_Ability24005",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1017267638\">LC_24005_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1344178785\">LC_24005_Sub</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.08) || RETURN",
                    "displayLines": "0.08",
                    "constants": [],
                    "variables": [
                      0.08
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">#SkillEquip_P2_DamageAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1017267638\">LC_24005_Main</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1344178785\">LC_24005_Sub</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
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
      "desc": "Increases the wearer's SPD by #1[f1]%. After the wearer uses Skill, increases the DMG dealt by all allies by #2[i]%, lasting for #3[i] turn(s).",
      "params": [
        [
          0.06,
          0.08,
          3
        ],
        [
          0.075,
          0.1,
          3
        ],
        [
          0.09,
          0.12,
          3
        ],
        [
          0.105,
          0.14,
          3
        ],
        [
          0.12,
          0.16,
          3
        ]
      ]
    }
  },
  "isLightcone": true
}