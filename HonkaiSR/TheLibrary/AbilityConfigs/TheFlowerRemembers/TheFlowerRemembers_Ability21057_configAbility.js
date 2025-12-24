const configAbility = {
  "fileName": "TheFlowerRemembers_Ability21057",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_21057_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21057_Sub",
      "execute": [
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.24) || RETURN",
                "displayLines": "0.24",
                "constants": [],
                "variables": [
                  0.24
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21057_Main",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": "Use Prior Target(s) Defined",
                    "type": "Memosprite"
                  },
                  {
                    "name": "Is Part Of",
                    "of": "Use [SUMMONER OF] Prior Target(s) Defined",
                    "target": "Caster",
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster's Memosprite",
                  "modifier": "LC_21057_Sub"
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
                "name": "Compare: Target Count",
                "target": "Caster's Memosprite",
                "compareType": ">=",
                "value2": 1,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster's Memosprite",
                  "modifier": "LC_21057_Sub"
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's CRIT DMG by #1[i]%. The CRIT DMG dealt by the wearer's memosprite increases by #2[i]%.",
  "params": [
    [
      0.24,
      0.24
    ],
    [
      0.28,
      0.3
    ],
    [
      0.32,
      0.36
    ],
    [
      0.36,
      0.42
    ],
    [
      0.4,
      0.48
    ]
  ]
}