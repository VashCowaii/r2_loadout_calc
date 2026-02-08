const compositeAbilityObject = {
  "fullCharacterName": "Mutual Demise",
  "trimCharacterName": "MutualDemise",
  "abilityList": [
    "MutualDemise_Ability20016"
  ],
  "fixedStats": {},
  "abilityObject": {
    "MutualDemise_Ability20016": {
      "fileName": "MutualDemise_Ability20016",
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
          "modifier": "<a class=\"gModGreen\" id=\"-629817458\">LC_20016_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1690247274\">LC_20016_CriticalChance</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.12) || RETURN",
                    "displayLines": "0.12",
                    "constants": [],
                    "variables": [
                      0.12
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT Rate +<span class=\"descriptionNumberColor\">#SkillEquip_P2_CriticalChance</span>.",
          "type": "Buff",
          "effectName": "CRIT Rate Boost",
          "statusName": "CRIT Rate Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-629817458\">LC_20016_Main</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (0.8) || RETURN",
                      "displayLines": "0.8",
                      "constants": [],
                      "variables": [
                        0.8
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1690247274\">LC_20016_CriticalChance</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (0.8) || RETURN",
                      "displayLines": "0.8",
                      "constants": [],
                      "variables": [
                        0.8
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1690247274\">LC_20016_CriticalChance</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1690247274\">LC_20016_CriticalChance</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]"
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
      "desc": "If the wearer's current HP percentage is lower than #1[i]%, CRIT Rate increases by #2[i]%.",
      "params": [
        [
          0.8,
          0.12
        ],
        [
          0.8,
          0.15
        ],
        [
          0.8,
          0.18
        ],
        [
          0.8,
          0.21
        ],
        [
          0.8,
          0.24
        ]
      ]
    }
  },
  "isLightcone": true
}