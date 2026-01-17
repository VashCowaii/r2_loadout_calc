const compositeAbilityObject = {
  "fullCharacterName": "River Flows in Spring",
  "trimCharacterName": "RiverFlowsinSpring",
  "abilityList": [
    "RiverFlowsinSpring_Ability21024"
  ],
  "fixedStats": {},
  "abilityObject": {
    "RiverFlowsinSpring_Ability21024": {
      "fileName": "RiverFlowsinSpring_Ability21024",
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
          "modifier": "LC_21024_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21024_Sub[<span class=\"descriptionNumberColor\">SPD Boost, and DMG Boost</span>]",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.08) || RETURN",
                    "displayLines": "0.08",
                    "constants": [],
                    "variables": [
                      0.08
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">#SkillEquip_P1_SpeedAddedRatio</span>, and DMG dealt by <span class=\"descriptionNumberColor\">#SkillEquip_P2_DamageAddedRatio</span>.",
          "type": "Buff",
          "effectName": "SPD and DMG Boost",
          "statusName": "SPD Boost, and DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21024_Main",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "LC_21024_Sub[<span class=\"descriptionNumberColor\">SPD Boost, and DMG Boost</span>]"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "LC_21024_Sub[<span class=\"descriptionNumberColor\">SPD Boost, and DMG Boost</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "CasterHP"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
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
                      "operator": "Variables[0] (CasterHP) || RETURN",
                      "displayLines": "CasterHP",
                      "constants": [],
                      "variables": [
                        "CasterHP"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "LC_21024_Sub[<span class=\"descriptionNumberColor\">SPD Boost, and DMG Boost</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "LC_21024_Sub[<span class=\"descriptionNumberColor\">SPD Boost, and DMG Boost</span>]"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "After entering battle, increases the wearer's SPD by #1[i]% and DMG by #2[i]%. When the wearer takes DMG, this effect will disappear. This effect will resume after the end of the wearer's next turn.",
      "params": [
        [
          0.08,
          0.12
        ],
        [
          0.09,
          0.15
        ],
        [
          0.1,
          0.18
        ],
        [
          0.11,
          0.21
        ],
        [
          0.12,
          0.24
        ]
      ]
    }
  },
  "isLightcone": true
}