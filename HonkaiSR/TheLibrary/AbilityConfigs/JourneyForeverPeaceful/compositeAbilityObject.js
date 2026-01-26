const compositeAbilityObject = {
  "fullCharacterName": "Journey, Forever Peaceful",
  "trimCharacterName": "JourneyForeverPeaceful",
  "abilityList": [
    "JourneyForeverPeaceful_Ability21053"
  ],
  "fixedStats": {},
  "abilityObject": {
    "JourneyForeverPeaceful_Ability21053": {
      "fileName": "JourneyForeverPeaceful_Ability21053",
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
          "modifier": "LC_21053_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21053_Sub2[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">#SkillEquip_P2_DamageAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21053_Sub",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "LC_21053_Sub2[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "maxValue": 0,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "LC_21053_Sub2[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "onlyRemoveOwnersInstance": true
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "LC_21053_Sub2[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21053_Main",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Shield%</span>&nbsp;",
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
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "LC_21053_Sub"
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
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "LC_21053_Sub"
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
      "desc": "Increases the wearer's provided Shield Effect by #1[i]% and while any ally target has a Shield, the wearer's DMG dealt increases by #2[i]%.",
      "params": [
        [
          0.12,
          0.12
        ],
        [
          0.15,
          0.14
        ],
        [
          0.18,
          0.16
        ],
        [
          0.21,
          0.18
        ],
        [
          0.24,
          0.2
        ]
      ]
    }
  },
  "isLightcone": true
}