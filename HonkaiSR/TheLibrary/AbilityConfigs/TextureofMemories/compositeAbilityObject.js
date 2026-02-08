const compositeAbilityObject = {
  "fullCharacterName": "Texture of Memories",
  "trimCharacterName": "TextureofMemories",
  "abilityList": [
    "TextureofMemories_Ability24002"
  ],
  "fixedStats": {
    "1": {
      "EffectRES": 0.08
    },
    "2": {
      "EffectRES": 0.1
    },
    "3": {
      "EffectRES": 0.12
    },
    "4": {
      "EffectRES": 0.14
    },
    "5": {
      "EffectRES": 0.16
    }
  },
  "abilityObject": {
    "TextureofMemories_Ability24002": {
      "fileName": "TextureofMemories_Ability24002",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1534751779\">LC_24002_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1590345463\">LC_24002_CD</a>",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1791888969\">LC_24002_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Shield"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Create Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (_MaxHP) || Variables[1] (MDF_ShieldRatio) || MUL || RETURN",
                    "displayLines": "(_MaxHP * MDF_ShieldRatio)",
                    "constants": [],
                    "variables": [
                      "_MaxHP",
                      "MDF_ShieldRatio"
                    ]
                  }
                },
                {
                  "name": "Set Hit-Class"
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
          "type": "Buff",
          "effectName": "Shield",
          "statusName": "Shield"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1534751779\">LC_24002_Main</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Shield"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                          "value": "0.12"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "flagName": "Shield"
                        }
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1590345463\">LC_24002_CD</a>"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ShieldValue",
                      "value": {
                        "operator": "Variables[0] (_MaxHP) || Variables[1] (0.16) || MUL || RETURN",
                        "displayLines": "(_MaxHP * 0.16)",
                        "constants": [],
                        "variables": [
                          "_MaxHP",
                          0.16
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1791888969\">LC_24002_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_ShieldRatio": {
                          "operator": "Variables[0] (0.16) || RETURN",
                          "displayLines": "0.16",
                          "constants": [],
                          "variables": [
                            0.16
                          ]
                        },
                        "MDF_ShieldValue": {
                          "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                          "displayLines": "MDF_ShieldValue",
                          "constants": [],
                          "variables": [
                            "MDF_ShieldValue"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1590345463\">LC_24002_CD</a>",
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
      "desc": "Increases the wearer's Effect RES by #1[i]%. If the wearer is attacked and has no Shield, they gain a Shield equal to #2[i]% of their Max HP for #3[i] turn(s). This effect can only be triggered once every #4[i] turn(s). If the wearer has a Shield when attacked, the DMG they receive decreases by #5[i]%.",
      "params": [
        [
          0.08,
          0.16,
          2,
          3,
          0.12
        ],
        [
          0.1,
          0.2,
          2,
          3,
          0.15
        ],
        [
          0.12,
          0.24,
          2,
          3,
          0.18
        ],
        [
          0.14,
          0.28,
          2,
          3,
          0.21
        ],
        [
          0.16,
          0.32,
          2,
          3,
          0.24
        ]
      ]
    }
  },
  "isLightcone": true
}