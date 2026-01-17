const configAbility = {
  "fileName": "ResolutionShinesAsPearlsofSweat_Ability21015",
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
      "modifier": "LC_21015_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21015_Sub[<span class=\"descriptionNumberColor\">Ensnarement</span>]",
      "modifierFlags": [
        "STAT_DefenceDown"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.12) || INVERT || RETURN",
                "displayLines": "-0.12",
                "constants": [],
                "variables": [
                  0.12
                ]
              }
            }
          ]
        }
      ],
      "description": "DEF -<span class=\"descriptionNumberColor\">#SkillEquip_P2_DefenceDown</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "Ensnarement"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21015_Main",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "LC_21015_Sub[<span class=\"descriptionNumberColor\">Ensnarement</span>]",
                "casterFilter": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "LC_21015_Sub[<span class=\"descriptionNumberColor\">Ensnarement</span>]",
                  "duration": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (0.6) || RETURN",
                    "displayLines": "0.6",
                    "constants": [],
                    "variables": [
                      0.6
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
  ],
  "isLightcone": true,
  "desc": "When the wearer hits an enemy and if the hit enemy is not already \"Ensnared,\" then there is a #1[i]% base chance to \"Ensnare\" the hit enemy. \"Ensnared\" enemies' DEF decreases by #2[i]% for #3[i] turn(s).",
  "params": [
    [
      0.6,
      0.12,
      1
    ],
    [
      0.7,
      0.13,
      1
    ],
    [
      0.8,
      0.14,
      1
    ],
    [
      0.9,
      0.15,
      1
    ],
    [
      1,
      0.16,
      1
    ]
  ]
}