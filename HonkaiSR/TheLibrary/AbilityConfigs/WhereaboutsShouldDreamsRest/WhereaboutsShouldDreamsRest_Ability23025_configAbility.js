const configAbility = {
  "fileName": "WhereaboutsShouldDreamsRest_Ability23025",
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
      "modifier": "LC_23025_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23025_Sub[<span class=\"descriptionNumberColor\">Routed</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "STAT_SpeedDown"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.2) || INVERT || RETURN",
                "displayLines": "-0.2",
                "constants": [],
                "variables": [
                  0.2
                ]
              }
            }
          ]
        }
      ],
      "description": "Increase Break DMG dealt by the wearer by <span class=\"descriptionNumberColor\">#SkillEquip_P2_BreakDamageAddedRatio</span> and decrease SPD by <span class=\"descriptionNumberColor\">#SkillEquip_P3_SpeedDownRatio</span>.",
      "type": "Debuff",
      "effectName": "Routed",
      "statusName": "Routed"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23025_Main",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Break DMG"
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "LC_23025_Sub[<span class=\"descriptionNumberColor\">Routed</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "LC_23025_Sub[<span class=\"descriptionNumberColor\">Routed</span>]",
                    "justAddedOrActive": true,
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "0.24"
                        }
                      ]
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
  "desc": "Increases the wearer's Break Effect by #1[i]%. When the wearer deals Break DMG to an enemy target, inflicts Routed on the enemy, lasting for #4[i] turn(s). Targets afflicted with Routed receive #2[f1]% increased Break DMG from the wearer, and their SPD is lowered by #3[i]%. Effects of the same type cannot be stacked.",
  "params": [
    [
      0.6,
      0.24,
      0.2,
      2
    ],
    [
      0.7,
      0.28,
      0.2,
      2
    ],
    [
      0.8,
      0.32,
      0.2,
      2
    ],
    [
      0.9,
      0.36,
      0.2,
      2
    ],
    [
      1,
      0.4,
      0.2,
      2
    ]
  ]
}