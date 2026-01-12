const configAbility = {
  "fileName": "Arlan_Arlan_PassiveAbility01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Arlan_Passive"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Arlan_Ability02_LoseHPPreShow"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Arlan_Eidolon1"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Arlan_Eidolon6"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Arlan_PassiveAbility_UnDead[<span class=\"descriptionNumberColor\">Turn the Tables</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Arlan_Ability02_LoseHPPreShow",
      "execute": [
        {
          "eventTrigger": "Update Target Selected(UI) [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": "Use Prior Target(s) Defined",
                "target2": "Caster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Caster",
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Update UI Preview",
                  "show": "Show",
                  "skillType": [
                    "Skill"
                  ],
                  "target": "Caster",
                  "previewType": null,
                  "previewValue": {
                    "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.15) || MUL || RETURN",
                    "displayLines": "(MDF_MaxHP * 0.15)",
                    "constants": [],
                    "variables": [
                      "MDF_MaxHP",
                      0.15
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
    },
    {
      "name": "Modifier Construction",
      "for": "Arlan_PassiveAbility_UnDead[<span class=\"descriptionNumberColor\">Turn the Tables</span>]",
      "counter": 1,
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": "Owner of this Modifier",
              "scope": "TargetEntity",
              "variableName": "_Arlan_00_PassiveSkill03_InsertController"
            },
            {
              "name": "Declare Custom Variable",
              "target": "Owner of this Modifier",
              "scope": "TargetEntity",
              "variableName": "Arlan_00_PassiveSkill03Success"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Modifier_Arlan_00_P03_Ratio",
              "value": {
                "operator": "Variables[0] (0.25) || RETURN",
                "displayLines": "0.25",
                "constants": [],
                "variables": [
                  0.25
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "_Arlan_00_PassiveSkill03_InsertController",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Owner of this Modifier",
                      "scope": "TargetEntity",
                      "variableName": "Arlan_00_PassiveSkill03Success",
                      "value": 1
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": "Owner of this Modifier"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Arlan_ReviveCount",
                      "value": 0
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Arlan_PassiveAbility03_Insert",
                      "priorityTag": "AvatarReviveSelf",
                      "ownerState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": "Owner of this Modifier",
                      "scope": "TargetEntity",
                      "variableName": "_Arlan_00_PassiveSkill03_InsertController",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "When struck with a killing blow, instead of becoming downed, the character immediately restores HP equal to <span class=\"descriptionNumberColor\">Modifier_Arlan_00_P03_Ratio</span> of Max HP.",
      "type": "Buff",
      "statusName": "Turn the Tables"
    },
    {
      "name": "Modifier Construction",
      "for": "M_Arlan_Passive",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "CurrentHP%",
                "compareType": "=",
                "value2": 1
              },
              "failed": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": "Owner of this Modifier",
                  "variableName": "_HPRatio"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Arlan_Passive_DamageUp[<span class=\"descriptionNumberColor\">Pain and Anger</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.72) || Constants[0] (1) || Variables[1] (_HPRatio) || SUB || MUL || RETURN",
                      "displayLines": "(0.72 * (1 - _HPRatio))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        0.72,
                        "_HPRatio"
                      ]
                    }
                  }
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
                "target": "Owner of this Modifier",
                "value1": "CurrentHP%",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Arlan_Passive_DamageUp[<span class=\"descriptionNumberColor\">Pain and Anger</span>]"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": "Owner of this Modifier",
                  "variableName": "_HPRatio"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Arlan_Passive_DamageUp[<span class=\"descriptionNumberColor\">Pain and Anger</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.72) || Constants[0] (1) || Variables[1] (_HPRatio) || SUB || MUL || RETURN",
                      "displayLines": "(0.72 * (1 - _HPRatio))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        0.72,
                        "_HPRatio"
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
      "for": "Arlan_Eidolon1",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.5
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.1) || RETURN",
                    "displayLines": "0.1",
                    "constants": [],
                    "variables": [
                      0.1
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
    },
    {
      "name": "Modifier Construction",
      "for": "Arlan_Eidolon6",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": "Caster",
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.5
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.2) || RETURN",
                    "displayLines": "0.2",
                    "constants": [],
                    "variables": [
                      0.2
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
  ]
}