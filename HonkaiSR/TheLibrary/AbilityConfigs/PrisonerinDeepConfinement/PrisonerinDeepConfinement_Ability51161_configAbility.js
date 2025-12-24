const configAbility = {
  "fileName": "PrisonerinDeepConfinement_Ability51161",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Relic_116_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Relic_116_DamageUp_Dot",
      "execute": [
        {
          "eventTrigger": "Deal Damage [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable with Flag Count",
              "target": "Use Prior Target(s) Defined",
              "variableName": "_DotCount",
              "flagName": "STAT_DOT"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_DotCount",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                  "displayLines": "MDF_MaxCount",
                  "constants": [],
                  "variables": [
                    "MDF_MaxCount"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DotCount",
                  "value": {
                    "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                    "displayLines": "MDF_MaxCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Adjust Target Stats",
              "on": "Defender",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (_DotCount) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue * _DotCount)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "_DotCount"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Relic_116_Main",
      "execute": [
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Relic_116_DamageUp_Dot",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.06) || RETURN",
                  "displayLines": "0.06",
                  "constants": [],
                  "variables": [
                    0.06
                  ]
                },
                "MDF_MaxCount": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "isRelic": true,
  "desc": [
    "Increases ATK by 12%.",
    "For every DoT the enemy target is afflicted with, the wearer will ignore 6% of its DEF when dealing DMG to it. This effect is valid for a max of 3 DoTs."
  ],
  "params": [
    [
      0.12
    ],
    [
      0.06,
      3
    ]
  ]
}