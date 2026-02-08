const configAbility = {
  "fileName": "-1954781239_Modifier_FantasticStory_BaseAbility_0010_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "DV_plus5_get",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "valueType": "Layer",
          "variableName": "Plus5_Layer",
          "modifierName": "<a class=\"gModGreen\" id=\"-749953922\">Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp</a>[<span class=\"descriptionNumberColor\">Scalded</span>]",
          "multiplier": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Plus5_Bomb_Damage",
          "value": {
            "operator": "Variables[0] (Bomb_Damage_get) || Constants[0] (1) || Variables[1] (Plus5_Layer) || Variables[2] (DV_plus5_ADF_1_get) || MUL || ADD || MUL || RETURN",
            "displayLines": "(Bomb_Damage_get * (1 + (Plus5_Layer * DV_plus5_ADF_1_get)))",
            "constants": [
              1
            ],
            "variables": [
              "Bomb_Damage_get",
              "Plus5_Layer",
              "DV_plus5_ADF_1_get"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "DamageFlat": {
              "operator": "Variables[0] (Plus5_Bomb_Damage) || RETURN",
              "displayLines": "Plus5_Bomb_Damage",
              "constants": [],
              "variables": [
                "Plus5_Bomb_Damage"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "DOT"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-749953922\">Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp</a>[<span class=\"descriptionNumberColor\">Scalded</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Plus5_Layer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-749953922\">Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp</a>[<span class=\"descriptionNumberColor\">Scalded</span>]",
                  "multiplier": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Plus5_Layer",
                  "value": 0
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Plus5_Bomb_Damage",
              "value": {
                "operator": "Variables[0] (Bomb_Damage_get) || Constants[0] (1) || Variables[1] (Plus5_Layer) || Variables[2] (DV_plus5_ADF_1_get) || MUL || ADD || MUL || RETURN",
                "displayLines": "(Bomb_Damage_get * (1 + (Plus5_Layer * DV_plus5_ADF_1_get)))",
                "constants": [
                  1
                ],
                "variables": [
                  "Bomb_Damage_get",
                  "Plus5_Layer",
                  "DV_plus5_ADF_1_get"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "operator": "Variables[0] (Plus5_Bomb_Damage) || RETURN",
                  "displayLines": "Plus5_Bomb_Damage",
                  "constants": [],
                  "variables": [
                    "Plus5_Bomb_Damage"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_plus7_get",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{ST and Blast}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "operator": "Variables[0] (Bomb_Damage_get) || Constants[0] (1) || Variables[1] (DV_plus7_ADF_1_get) || ADD || MUL || RETURN",
                  "displayLines": "(Bomb_Damage_get * (1 + DV_plus7_ADF_1_get))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "Bomb_Damage_get",
                    "DV_plus7_ADF_1_get"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{ST and Blast}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "operator": "Variables[0] (Bomb_Damage_get) || RETURN",
                  "displayLines": "Bomb_Damage_get",
                  "constants": [],
                  "variables": [
                    "Bomb_Damage_get"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "references": []
}