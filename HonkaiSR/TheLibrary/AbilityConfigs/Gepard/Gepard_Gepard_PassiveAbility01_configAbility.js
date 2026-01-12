const configAbility = {
  "fileName": "Gepard_Gepard_PassiveAbility01",
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
      "modifier": "Gepard_PassiveAbility_UnDead[<span class=\"descriptionNumberColor\">Unyielding Will</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_Rank01_P1_Chance",
          "value": {
            "operator": "Variables[0] (0.35) || RETURN",
            "displayLines": "0.35",
            "constants": [],
            "variables": [
              0.35
            ]
          }
        }
      ]
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
          "modifier": "Gepard_Eidolon4"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Gepard_PassiveAbility_UnDead[<span class=\"descriptionNumberColor\">Unyielding Will</span>]",
      "counter": 1,
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 1,
              "maximum": 1,
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3
            },
            {
              "name": "Declare Custom Variable",
              "target": "Owner of this Modifier",
              "scope": "TargetEntity",
              "variableName": "_Gepard_00_PassiveSkill_InsertController"
            },
            {
              "name": "Declare Custom Variable",
              "target": "Owner of this Modifier",
              "scope": "TargetEntity",
              "variableName": "Gepard_00_PassiveSkillSuccess"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Modifier_Gepard_00_Ratio",
              "value": {
                "operator": "Variables[0] (0.5) || RETURN",
                "displayLines": "0.5",
                "constants": [],
                "variables": [
                  0.5
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
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "_Gepard_00_PassiveSkill_InsertController",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
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
                      "variableName": "Gepard_00_PassiveSkillSuccess",
                      "value": 1
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": "Owner of this Modifier"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Gepard_PassiveAbility_1_Insert",
                      "priorityTag": "AvatarReviveSelf",
                      "ownerState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": "Owner of this Modifier",
                      "scope": "TargetEntity",
                      "variableName": "_Gepard_00_PassiveSkill_InsertController",
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
      "description": "When struck with a killing blow, instead of becoming downed, Gepard immediately restores HP equal to <span class=\"descriptionNumberColor\">Modifier_Gepard_00_Ratio</span> of his Max HP.",
      "type": "Buff",
      "statusName": "Unyielding Will"
    },
    {
      "name": "Modifier Construction",
      "for": "Gepard_Eidolon4",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Team Members(In Context)",
              "modifier": "Gepard_Eidolon4_AddStatusResistance[<span class=\"descriptionNumberColor\">Effect RES Boost</span>]",
              "valuePerStack": {
                "MDF_AddStatusResistance": {
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
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Teammate",
                "target": "Use Prior Target(s) Defined"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Gepard_Eidolon4_AddStatusResistance[<span class=\"descriptionNumberColor\">Effect RES Boost</span>]",
                  "valuePerStack": {
                    "MDF_AddStatusResistance": {
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
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "Gepard_Eidolon4_AddStatusResistance[<span class=\"descriptionNumberColor\">Effect RES Boost</span>]",
              "onlyRemoveOwnersInstance": true
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}