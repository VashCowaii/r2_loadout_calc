const configAbility = {
  "fileName": "DanHengIL_DanHengIL_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "EXSkill01",
      "value": {
        "operator": "Variables[0] (EXSkill01) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(EXSkill01 + 1)",
        "constants": [
          1
        ],
        "variables": [
          "EXSkill01"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "EXSkill01",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "DanHengIL_BPCost_1"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "DanHengIL_CancelAbility"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EXSkill01",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "DanHengIL_BPCost_2"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "EXSkill01",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "DanHengIL_BPCost_3"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "BPNeed",
      "value": {
        "operator": "Variables[0] (EXSkill01) || RETURN",
        "displayLines": "EXSkill01",
        "constants": [],
        "variables": [
          "EXSkill01"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "CurrentSkillPoints",
        "compareType": ">",
        "value2": {
          "operator": "Variables[0] (BPNeed) || RETURN",
          "displayLines": "BPNeed",
          "constants": [],
          "variables": [
            "BPNeed"
          ]
        }
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "DanHengIL_BPDisable"
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "DanHengIL_BPDisable"
        }
      ]
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "DanHengIL_CancelAbility",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "skillSlot": "Basic ATK",
              "enableSecondaryType": "ControlSkill04"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "abilityName": "Skill21",
              "skillSlot": "Skill",
              "enableSecondaryType": "ControlSkill04"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "DanHengIL_BPCost_3",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "abilityName": "Skill01",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Properties",
              "abilityTagList": [
                "Skill13"
              ],
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Reset to Default"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "DanHengIL_CancelAbility"
            },
            {
              "name": "Update Displayed Energy Bar"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": "Owner of this Modifier",
              "abilityTypes": null,
              "extraText": "Basic ATK has been Enhanced to its max capacity",
              "controlTypes": [
                "ControlSkill02"
              ]
            },
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "abilityName": "Skill13",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Properties",
              "abilityTagList": [
                "Skill13"
              ],
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Remove",
                  "value": 3
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "activeCount": 3
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "DanHengIL_BPCost_2",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "abilityName": "Skill01",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Properties",
              "abilityTagList": [
                "Skill12"
              ],
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Reset to Default"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "DanHengIL_CancelAbility"
            },
            {
              "name": "Update Displayed Energy Bar"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "abilityName": "Skill12",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Properties",
              "abilityTagList": [
                "Skill12"
              ],
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Remove",
                  "value": 2
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "activeCount": 2
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "DanHengIL_BPCost_1",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "abilityName": "Skill01",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Properties",
              "abilityTagList": [
                "Skill11"
              ],
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Reset to Default"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "DanHengIL_CancelAbility"
            },
            {
              "name": "Update Displayed Energy Bar"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "abilityName": "Skill11",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Properties",
              "abilityTagList": [
                "Skill11"
              ],
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Remove",
                  "value": 1
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "activeCount": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}