const entityPageType = "lc"
const compositeAbilityObject = {
  "fullCharacterName": "Today's Good Luck",
  "trimCharacterName": "TodaysGoodLuck",
  "abilityList": [
    "TodaysGoodLuck_Ability21065"
  ],
  "fixedStats": {
    "1": {
      "CritRateBase": 0.12
    },
    "2": {
      "CritRateBase": 0.14
    },
    "3": {
      "CritRateBase": 0.16
    },
    "4": {
      "CritRateBase": 0.18
    },
    "5": {
      "CritRateBase": 0.2
    }
  },
  "abilityObject": {
    "TodaysGoodLuck_Ability21065": {
      "fileName": "TodaysGoodLuck_Ability21065",
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
          "modifier": "<a class=\"gModGreen\" id=\"-680886057\">LC_21065_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__287346796\">LC_21065_Sub</a>[<span class=\"descriptionNumberColor\">Elation Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ModifierLayers) || Variables[1] (0.12) || MUL || RETURN",
                    "displayLines": "(ModifierLayers * 0.12)",
                    "constants": [],
                    "variables": [
                      "ModifierLayers",
                      0.12
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases Elation by <span class=\"descriptionNumberColor\">#SkillEquip_P2_ElationDamageAddedRatio</span>. This effect can stack up to <span class=\"descriptionNumberColor\">#SkillEquip_P3_MaxLayer</span> time(s).",
          "type": "Buff",
          "effectName": "Elation Boost",
          "statusName": "Elation Boost",
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-680886057\">LC_21065_Main</a>",
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"287346796\">LC_21065_Sub</a>[<span class=\"descriptionNumberColor\">Elation Boost</span>]",
                      "stackLimit": {
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
      "desc": "Increases the wearer's CRIT Rate by #1[i]%. When the wearer uses an Elation Skill, increases Elation by #2[i]%, stacking up to #3[i] times.",
      "params": [
        [
          0.12,
          0.12,
          2
        ],
        [
          0.14,
          0.14,
          2
        ],
        [
          0.16,
          0.16,
          2
        ],
        [
          0.18,
          0.18,
          2
        ],
        [
          0.2,
          0.2,
          2
        ]
      ]
    }
  },
  "isLightcone": true
}