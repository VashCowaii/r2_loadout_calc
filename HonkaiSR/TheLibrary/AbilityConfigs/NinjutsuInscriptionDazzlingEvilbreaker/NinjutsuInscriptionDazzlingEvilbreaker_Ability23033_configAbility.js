const configAbility = {
  "fileName": "NinjutsuInscriptionDazzlingEvilbreaker_Ability23033",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": "Caster",
      "scope": "TargetEntity",
      "variableName": "DV_CastSkill01Count"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_23033_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23033_Sub2",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": "Owner of this Modifier",
              "advanceType": "Advance",
              "value": "-0.5"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "PreShowModifier_Fixed_23033",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Owner of this Modifier",
        "skillType": [
          "Basic ATK"
        ],
        "conditions": {
          "name": "Compare: Variable",
          "value1": "DV_CastSkill01Count",
          "compareType": "=",
          "value2": 1
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (0.5) || INVERT || RETURN",
            "displayLines": "-0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23033_Sub[<span class=\"descriptionNumberColor\">Raiton</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_CastSkill01Count",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DV_CastSkill01CountLeft",
              "value": 2
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
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
                  "variableName": "DV_CastSkill01Count",
                  "value": {
                    "operator": "Variables[0] (DV_CastSkill01Count) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(DV_CastSkill01Count + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "DV_CastSkill01Count"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_CastSkill01CountLeft",
                  "value": {
                    "operator": "Variables[0] (DV_CastSkill01CountLeft) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(DV_CastSkill01CountLeft - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "DV_CastSkill01CountLeft"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_CastSkill01Count",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": "Owner of this Modifier",
                      "advanceType": "Advance",
                      "value": "-0.5"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn Is",
                        "target": "Owner of this Modifier"
                      },
                      "passed": [
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": {
                            "operator": "Variables[0] (0.5) || INVERT || RETURN",
                            "displayLines": "-0.5",
                            "constants": [],
                            "variables": [
                              0.5
                            ]
                          },
                          "adjustmentType": "Advance"
                        }
                      ]
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "After using Basic Attacks <span class=\"descriptionNumberColor\">DV_CastSkill01CountLeft</span> time(s), advances the next action by <span class=\"descriptionNumberColor\">#SkillEquip_P3_ActionDelayAdv</span>.",
      "type": "Other",
      "statusName": "Raiton"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23033_Main",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_23033_Sub[<span class=\"descriptionNumberColor\">Raiton</span>]"
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
                  "name": "Update Energy",
                  "on": "Owner of this Modifier",
                  "value": {
                    "operator": "Variables[0] (30) || RETURN",
                    "displayLines": "30",
                    "constants": [],
                    "variables": [
                      30
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "PreShowModifier_Fixed_23033"
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DV_CastSkill01Count"
      ]
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's Break Effect by #1[i]%. When entering battle, immediately regenerates #2[f1] Energy. After the wearer uses Ultimate, obtains \"Raiton.\" After using 2 Basic ATKs, advances the wearer's action by #3[i]% and removes \"Raiton.\" After the wearer uses Ultimate, resets \"Raiton.\"",
  "params": [
    [
      0.6,
      30,
      0.5
    ],
    [
      0.7,
      32.5,
      0.55
    ],
    [
      0.8,
      35,
      0.6
    ],
    [
      0.9,
      37.5,
      0.65
    ],
    [
      1,
      40,
      0.7
    ]
  ]
}