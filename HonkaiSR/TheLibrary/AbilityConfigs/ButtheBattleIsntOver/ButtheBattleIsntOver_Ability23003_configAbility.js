const configAbility = {
  "fileName": "ButtheBattleIsntOver_Ability23003",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_23003_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23003_TriggerCD[<span class=\"descriptionNumberColor\">Heir</span>]",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CDFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
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
                    "name": "Compare: Variable",
                    "value1": "_CDFlag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "description": "Heir's Skill Point regeneration effect cannot be triggered.",
      "type": "Other",
      "statusName": "Heir"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23003_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.3) || RETURN",
                "displayLines": "0.3",
                "constants": [],
                "variables": [
                  0.3
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">#SkillEquip_P2_DamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23003_Main",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
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
                    "of": "Skill Target List",
                    "target": "All Team Members(In Context)",
                    "mustBeAlive2": true
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": "Owner of this Modifier",
                      "modifier": "LC_23003_TriggerCD[<span class=\"descriptionNumberColor\">Heir</span>]"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": 1,
                  "adjustmentType": "+"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "LC_23003_TriggerCD[<span class=\"descriptionNumberColor\">Heir</span>]"
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
                  "name": "Find New Target",
                  "from": "All Team Members(Excluding Owner, in Context)",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target is Next Turn",
                    "target": "Use Prior Target(s) Defined",
                    "partOf": "All Team Members(Excluding Owner, in Context)",
                    "exclude": "Owner of this Modifier"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "LC_23003_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
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
  "desc": "Increases the wearer's Energy Regeneration Rate by #1[i]% and regenerates 1 Skill Point when the wearer uses their Ultimate on an ally. This effect can be triggered once after every 2 uses of the wearer's Ultimate. When the wearer uses their Skill, the next ally taking action (except the wearer) deals #2[i]% more DMG for #3[i] turn(s).",
  "params": [
    [
      0.1,
      0.3,
      1
    ],
    [
      0.12,
      0.35,
      1
    ],
    [
      0.14,
      0.4,
      1
    ],
    [
      0.16,
      0.45,
      1
    ],
    [
      0.18,
      0.5,
      1
    ]
  ]
}