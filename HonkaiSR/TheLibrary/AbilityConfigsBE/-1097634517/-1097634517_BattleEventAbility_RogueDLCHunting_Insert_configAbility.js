const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_RogueDLCHunting_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "UI Display Event"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Target Has Lowest/Highest Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "partOf": {
          "name": "Target Name",
          "target": "{{Enemy Team All}}"
        },
        "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;",
        "minOrMax": "Max"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_MaxAttack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_MaxDamageAddRatio",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1048241132\">MDF_RogueDLCHunting_DamageRatio</a>"
    },
    {
      "name": "Looped Event",
      "maxLoops": 7,
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "DamageFlat": {
              "operator": "Variables[0] (_MaxAttack) || Variables[1] (DamagePercentage) || MUL || Constants[0] (8) || DIV || RETURN",
              "displayLines": "((_MaxAttack * DamagePercentage) / 8)",
              "constants": [
                8
              ],
              "variables": [
                "_MaxAttack",
                "DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Level"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": 0.625,
          "isFixed": "* ERR"
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": 1,
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "DamageFlat": {
              "operator": "Variables[0] (_MaxAttack) || Variables[1] (DamagePercentage) || MUL || Constants[0] (8) || DIV || RETURN",
              "displayLines": "((_MaxAttack * DamagePercentage) / 8)",
              "constants": [
                8
              ],
              "variables": [
                "_MaxAttack",
                "DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Level"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": 0.625,
          "isFixed": "* ERR"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1048241132\">MDF_RogueDLCHunting_DamageRatio</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1048241132\">MDF_RogueDLCHunting_DamageRatio</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_DamageAddRatio",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;"
            },
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": "(_MaxDamageAddRatio - _DamageAddRatio)"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}