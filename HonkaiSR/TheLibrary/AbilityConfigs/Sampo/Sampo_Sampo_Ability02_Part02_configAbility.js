const configAbility = {
  "fileName": "Sampo_Sampo_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_has_poison_layer_greaterequal_5",
              "value": 0
            },
            {
              "name": "Reconstruct Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Projectile's Target}}"
              },
              "counter": 99,
              "flagFilter": [
                "STAT_DOT_Poison"
              ],
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Modifier_Callback_Value",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (5) || RETURN",
                      "displayLines": "5",
                      "constants": [],
                      "variables": [
                        5
                      ]
                    },
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_has_poison_layer_greaterequal_5",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_has_poison_layer_greaterequal_5",
                "compareType": ">=",
                "value2": 1,
                "contextScope": "ContextAbility"
              },
              "passed": [
                {
                  "name": "Trigger Modifier Event",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Projectile's Target}}"
                  },
                  "variableName": "DOT_TriggerRatio",
                  "eventType": "DOT_Poison",
                  "value": {
                    "operator": "Variables[0] (0.08) || RETURN",
                    "displayLines": "0.08",
                    "constants": [],
                    "variables": [
                      0.08
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.56) || RETURN",
              "displayLines": "0.56",
              "constants": [],
              "variables": [
                0.56
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "FireBullet_Ability",
          "isTrigger": true
        }
      ]
    }
  ],
  "references": []
}