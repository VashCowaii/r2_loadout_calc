const configAbility = {
  "fileName": "Mem_Servant_PlayerBoyServant_30_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "PointB2"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CurEnergy",
          "value": {
            "displayLines": "(0.05 * 100)"
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_index"
    },
    {
      "name": "Looped Event",
      "maxLoops": 4,
      "execute": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_index + 1)"
          },
          "variableName": "_index"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target Group}}"
          },
          "paramSequence": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "0.36"
                },
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": null,
                "attackType": "Memosprite",
                "EnergyGainPercent": "(1 / (4 + 1))* 100%"
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
        "target": "{{Ability Target Group}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "displayLines": "0.9"
        },
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": null,
        "attackType": "Memosprite",
        "EnergyGainPercent": "(1 / (4 + 1))* 100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}