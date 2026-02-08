const compositeAbilityObject = {
  "fullCharacterName": "Worrisome, Blissful",
  "trimCharacterName": "WorrisomeBlissful",
  "abilityList": [
    "WorrisomeBlissful_Ability23016"
  ],
  "fixedStats": {
    "1": {
      "CritRateBase": 0.18
    },
    "2": {
      "CritRateBase": 0.21
    },
    "3": {
      "CritRateBase": 0.24
    },
    "4": {
      "CritRateBase": 0.27
    },
    "5": {
      "CritRateBase": 0.3
    }
  },
  "abilityObject": {
    "WorrisomeBlissful_Ability23016": {
      "fileName": "WorrisomeBlissful_Ability23016",
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
          "modifier": "<a class=\"gModGreen\" id=\"847225167\">LC_23016_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2096438896\">LC_23016_Enhance</a>[<span class=\"descriptionNumberColor\">Tame</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                          "value": "(MDF_PropertyValue * MDF_Layer)"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
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
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                }
              ]
            }
          ],
          "description": "Each stack of Tame increases CRIT DMG dealt by allies to this unit by <span class=\"descriptionNumberColor\">#SkillEquip_P3_CriticalDamage</span>, up to <span class=\"descriptionNumberColor\">#SkillEquip_P4_MaxLayer</span> stack(s).",
          "type": "Debuff",
          "effectName": "The received CRIT DMG increases",
          "statusName": "Tame",
          "stackLimit": 3,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__847225167\">LC_23016_Main</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.3"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "InsertFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "InsertFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2096438896\">LC_23016_Enhance</a>[<span class=\"descriptionNumberColor\">Tame</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.12) || RETURN",
                          "displayLines": "0.12",
                          "constants": [],
                          "variables": [
                            0.12
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "InsertFlag",
                      "value": 0
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
      "desc": "Increase the wearer's CRIT Rate by #1[i]% and increases DMG dealt by Follow-Up ATK by #2[i]%. After the wearer uses a Follow-Up ATK, inflicts the target with the \"Tame\" state, stacking up to #4[i] time(s). When allies hit enemy targets under the \"Tame\" state, each \"Tame\" stack increases the CRIT DMG dealt by #3[i]%.",
      "params": [
        [
          0.18,
          0.3,
          0.12,
          2
        ],
        [
          0.21,
          0.35,
          0.14,
          2
        ],
        [
          0.24,
          0.4,
          0.16,
          2
        ],
        [
          0.27,
          0.45,
          0.18,
          2
        ],
        [
          0.3,
          0.5,
          0.2,
          2
        ]
      ]
    }
  },
  "isLightcone": true
}