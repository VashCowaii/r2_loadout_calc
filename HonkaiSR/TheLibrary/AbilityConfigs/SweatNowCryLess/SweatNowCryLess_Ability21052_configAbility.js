const configAbility = {
  "fileName": "SweatNowCryLess_Ability21052",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_21052_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21052_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "execute": [
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">#SkillEquip_P2_DamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21052_Main",
      "execute": [
        {
          "eventTrigger": "Entity Death",
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
                  "name": "Remove Events/Bonuses",
                  "to": "Caster's Memosprite",
                  "modifier": "LC_21052_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_21052_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                }
              ]
            }
          ]
        },
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
                  "modifier": "LC_21052_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_21052_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
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
                  "modifier": "LC_21052_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_21052_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
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
  "desc": "Increases the wearer's CRIT Rate by #1[i]%. When the wearer's memosprite is on the field, increases the DMG dealt by the wearer and their memosprite by #2[i]%.",
  "params": [
    [
      0.12,
      0.24
    ],
    [
      0.14,
      0.27
    ],
    [
      0.16,
      0.3
    ],
    [
      0.18,
      0.33
    ],
    [
      0.2,
      0.36
    ]
  ]
}