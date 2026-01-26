const configAbility = {
  "fileName": "Bailu_Bailu_PassiveAbility01",
  "childAbilityList": [
    "Bailu_Bailu_PassiveAbility01",
    "Bailu_Bailu_PassiveAbility_Camera"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_ReviveTime",
          "value": {
            "operator": "Variables[0] (1) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(1 + 1)",
            "constants": [
              1
            ],
            "variables": [
              1
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_ReviveTime",
          "value": 1
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_ReviveTime2",
      "value": {
        "operator": "Variables[0] (MDF_ReviveTime) || RETURN",
        "displayLines": "MDF_ReviveTime",
        "constants": [],
        "variables": [
          "MDF_ReviveTime"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Bailu_DieEvent"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Bailu_ReviveEvent",
      "counter": {
        "operator": "Variables[0] (MDF_ReviveTime) || RETURN",
        "displayLines": "MDF_ReviveTime",
        "constants": [],
        "variables": [
          "MDF_ReviveTime"
        ]
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Bailu_ReviveEvent",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Bailu_DieEvent",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}.[[removeMemosprite]]"
              },
              "modifier": "Bailu_Revive_Ready"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_ReviveTime2) || RETURN",
                "displayLines": "MDF_ReviveTime2",
                "constants": [],
                "variables": [
                  "MDF_ReviveTime2"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (MDF_ReviveTime) || RETURN",
                "displayLines": "MDF_ReviveTime",
                "constants": [],
                "variables": [
                  "MDF_ReviveTime"
                ]
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3
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
                    "target": "{{All Team Members(Exclude Self)}}.[[removeMemosprite]]"
                  },
                  "modifier": "Bailu_Revive_Ready"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "Bailu_Revive_Ready"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "Bailu_Revive_Mark"
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "Bailu_Revive_Mark"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Bailu_ReviveEvent",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "Bailu_Revive_Ready",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Join Targets",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets}}"
                      }
                    ]
                  },
                  "modifier": "Bailu_Revive_Mark"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}