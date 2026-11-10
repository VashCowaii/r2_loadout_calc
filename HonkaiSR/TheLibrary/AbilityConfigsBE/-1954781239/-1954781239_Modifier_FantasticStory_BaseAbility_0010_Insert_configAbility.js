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
          "value": {
            "displayLines": "(Bomb_Damage_get * (1 + (Plus5_Layer * DV_plus5_ADF_1_get)))"
          },
          "variableName": "Plus5_Bomb_Damage"
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
              "displayLines": "Plus5_Bomb_Damage"
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
                  "value": 0,
                  "variableName": "Plus5_Layer"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Bomb_Damage_get * (1 + (Plus5_Layer * DV_plus5_ADF_1_get)))"
              },
              "variableName": "Plus5_Bomb_Damage"
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
                  "displayLines": "Plus5_Bomb_Damage"
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
                  "displayLines": "(Bomb_Damage_get * (1 + DV_plus7_ADF_1_get))"
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
                  "displayLines": "Bomb_Damage_get"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}