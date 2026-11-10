const configAbility = {
  "fileName": "Castorice_Castorice_Ability21_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Consume",
      "consumeFrom": "CurrentHP",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}} - {{Caster's Memosprite}}"
      },
      "consumePercent": {
        "displayLines": "0.4"
      },
      "consumeFloor": 1,
      "attackType": "Unknown"
    },
    {
      "name": "UI Display Event",
      "popUpText": "Boneclaw, Doomdrake's Embrace"
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-815210421\">Castorice_SetDamageRatio</a>"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "(0.3 * Avatar_Castorice_Rank01_DamageRatio)"
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "displayLines": "(AOE Toughness Value * 0.5)"
                },
                "instanceTag": "CastoricePairsDamage",
                "Tags": [
                  "Joint-Attack"
                ],
                "attackType": "Skill",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "0.3"
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "displayLines": "(AOE Toughness Value * 0.5)"
            },
            "instanceTag": "CastoricePairsDamage",
            "Tags": [
              "Joint-Attack"
            ],
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Trigger: Attack End",
      "skipDeathSettle": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"176252830\">Castorice_Eidolon2_Check</a>"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "Castorice_Rank02_MaxSpecialSP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1401999190\">Castorice_AddSpecialSP</a>",
          "variables": {
            "_FixedAddValue": {
              "displayLines": "(Castorice_Rank02_MaxSpecialSP * 0.3)"
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"176252830\">Castorice_Eidolon2_Check</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}