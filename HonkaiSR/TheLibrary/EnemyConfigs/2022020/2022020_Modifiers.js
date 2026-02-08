const configAbility = {
  "fileName": "2022020_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1599810700\">Monster_W2_Abomi02_EffectControl</a>",
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MarkRemainCount",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 0,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 2,
              "maxValue": 2,
              "includeMaxValueInRange": true
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AttackCount",
        "IsInDeathRattle"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1875575825\">Monster_W2_Abomi02_Mark</a>[<span class=\"descriptionNumberColor\">Spur of Thunderwoe</span>]",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "IsInDeathRattle",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MarkRemainCount",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 2
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Upon receiving a killing blow, the Disciples of Sanctus Medicus: Internal Alchemist deals DMG 1 time to targets that are inflicted with Spur of Thunderwoe by them.",
      "type": "Debuff",
      "effectName": "Thunderwoe Strike",
      "statusName": "Spur of Thunderwoe"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1723051927\">Monster_W2_Abomi02_TargetList</a>[<span class=\"descriptionNumberColor\">Core Formation</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MarkRemainCount",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": 99,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Set Target Parameter",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "paramTarget": {
                    "name": "Target Name",
                    "target": "{{No Target}}"
                  },
                  "variableName": "Monster_W2_Abomi02_00_TargetList_DynamicTarget"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "LightTeam_Count"
                },
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "variableName": "LightTeam_Count",
                  "livingTargets": true
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": {
                    "operator": "Variables[0] (LightTeam_Count) || RETURN",
                    "displayLines": "LightTeam_Count",
                    "constants": [],
                    "variables": [
                      "LightTeam_Count"
                    ]
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1875575825\">Monster_W2_Abomi02_Mark</a>[<span class=\"descriptionNumberColor\">Spur of Thunderwoe</span>]",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Set Target Parameter",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "paramTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "Monster_W2_Abomi02_00_TargetList_DynamicTarget"
                    }
                  ]
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Set Target Parameter",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "paramTarget": {
                    "name": "Target Name",
                    "target": "{{No Target}}"
                  },
                  "variableName": "Monster_W2_Abomi02_00_TargetList_DynamicTarget"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "LightTeam_Count"
                },
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "variableName": "LightTeam_Count",
                  "livingTargets": true
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": {
                    "operator": "Variables[0] (LightTeam_Count) || RETURN",
                    "displayLines": "LightTeam_Count",
                    "constants": [],
                    "variables": [
                      "LightTeam_Count"
                    ]
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1875575825\">Monster_W2_Abomi02_Mark</a>[<span class=\"descriptionNumberColor\">Spur of Thunderwoe</span>]",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Set Target Parameter",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "paramTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "Monster_W2_Abomi02_00_TargetList_DynamicTarget"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 0,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1723051927\">Monster_W2_Abomi02_TargetList</a>[<span class=\"descriptionNumberColor\">Core Formation</span>]"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AttackCount"
      ],
      "description": "Upon receiving a killing blow, the unit deals DMG 1 time to targets that are afflicted with Spur of Thunderwoe by them.<br>The current targets who have Spur of Thunderwoe on them are: %DynamicTargetName.",
      "type": "Buff",
      "effectName": "Core Formation",
      "statusName": "Core Formation"
    }
  ],
  "references": []
}