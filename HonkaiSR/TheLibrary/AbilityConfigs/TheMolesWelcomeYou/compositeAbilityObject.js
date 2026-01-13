const compositeAbilityObject = {
  "fullCharacterName": "The Moles Welcome You",
  "trimCharacterName": "TheMolesWelcomeYou",
  "abilityList": [
    "TheMolesWelcomeYou_Ability21005"
  ],
  "fixedStats": {},
  "abilityObject": {
    "TheMolesWelcomeYou_Ability21005": {
      "fileName": "TheMolesWelcomeYou_Ability21005",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21005_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21005_AttackAddedRatio[<span class=\"descriptionNumberColor\">Mischievous</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Normal",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Skill",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Ultra",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": "Owner of this Modifier",
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * _Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, up to 3 stacks.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Mischievous",
          "stackLimit": 3,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21005_Main",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Normal",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Skill",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Ultra",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "LC_21005_AttackAddedRatio[<span class=\"descriptionNumberColor\">Mischievous</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Layer",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (_Normal) || Variables[1] (_Skill) || ADD || Variables[2] (_Ultra) || ADD || RETURN",
                          "displayLines": "((_Normal + _Skill) + _Ultra)",
                          "constants": [],
                          "variables": [
                            "_Normal",
                            "_Skill",
                            "_Ultra"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "LC_21005_AttackAddedRatio[<span class=\"descriptionNumberColor\">Mischievous</span>]",
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
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "_Normal",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_Skill",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_Ultra",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "LC_21005_AttackAddedRatio[<span class=\"descriptionNumberColor\">Mischievous</span>]",
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
                        }
                      ]
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
      "desc": "When the wearer uses Basic ATK, Skill, or Ultimate to attack enemies, the wearer gains one stack of Mischievous. Each stack increases the wearer's ATK by #1[i]%.",
      "params": [
        [
          0.12
        ],
        [
          0.15
        ],
        [
          0.18
        ],
        [
          0.21
        ],
        [
          0.24
        ]
      ]
    }
  },
  "isLightcone": true
}