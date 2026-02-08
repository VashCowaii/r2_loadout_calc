const configAbility = {
  "fileName": "DanHengIL_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-807307973\">DanHengIL_CancelCamera</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Active Ability Chosen [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-345032011\">DanHengIL_CancelCameraFlag</a>"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-330148584\">DanHengIL_Eidolon6_ImaginaryPenetrate</a>[<span class=\"descriptionNumberColor\">Reign, Returned</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill13"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceImaginaryPEN</span>&nbsp;",
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
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill13"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "description": "Increase Imaginary RES PEN by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> for this character's next Fulgurant Leap attack.",
      "type": "Buff",
      "effectName": "Imaginary RES PEN",
      "statusName": "Reign, Returned",
      "stackLimit": 3,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1339168225\">DanHengIL_Eidolon6</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "mustBeAlive2": true,
                    "invertCondition": true
                  },
                  {
                    "name": "Is Teammate",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-330148584\">DanHengIL_Eidolon6_ImaginaryPenetrate</a>[<span class=\"descriptionNumberColor\">Reign, Returned</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1468527103\">DanHengIL_BPDisable</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": null,
              "extraText": "Insufficient Skill Points. Cannot Enhance",
              "controlTypes": [
                "ControlSkill02"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Skill Point Changes",
          "execute": [
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
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start ",
          "execute": [
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
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1955464894\">DanHengIL_Ability02_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Outroar</span>]",
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
              "variableName": "CurrentLayer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AddCriticalDamage) || Variables[1] (CurrentLayer) || MUL || RETURN",
                "displayLines": "(MDF_AddCriticalDamage * CurrentLayer)",
                "constants": [],
                "variables": [
                  "MDF_AddCriticalDamage",
                  "CurrentLayer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AddCriticalDamage",
        "MDF_MaxLayer"
      ],
      "latentQueue": [],
      "description": "Each stack increases CRIT DMG dealt by <span class=\"descriptionNumberColor\">MDF_AddCriticalDamage</span>, up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> stack(s).",
      "type": "Buff",
      "statusName": "Outroar",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__115521753\">DanHengIL_BPCostChange</a>[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [
        "MDF_BPExChange",
        "MDF_MaxLayer"
      ],
      "latentQueue": [],
      "description": "Can be used to offset Dan Heng • Imbibitor Lunae's consumption of skill points. A maximum of <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> Squama Sacrosancta can be possessed at any given time. Consuming Squama Sacrosancta is considered equivalent to consuming Skill Points.",
      "type": "Other",
      "statusName": "Squama Sacrosancta"
    }
  ],
  "references": []
}