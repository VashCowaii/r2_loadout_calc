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
        "operator": "Variables[0] (0.4) || RETURN",
        "displayLines": "0.4",
        "constants": [],
        "variables": [
          0.4
        ]
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
              "functionName": "Castorice_SetDamageRatio"
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
                  "operator": "Variables[0] (0.3) || Variables[1] (Avatar_Castorice_Rank01_DamageRatio) || MUL || RETURN",
                  "displayLines": "(0.3 * Avatar_Castorice_Rank01_DamageRatio)",
                  "constants": [],
                  "variables": [
                    0.3,
                    "Avatar_Castorice_Rank01_DamageRatio"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
                  "displayLines": "(AOE Toughness Value * 0.5)",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "AOE Toughness Value"
                  ]
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
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(AOE Toughness Value * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "AOE Toughness Value"
              ]
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
            "modifier": "Castorice_Eidolon2_Check"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Castorice_Rank02_MaxSpecialSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Castorice_AddSpecialSP",
          "variables": {
            "_FixedAddValue": {
              "operator": "Variables[0] (Castorice_Rank02_MaxSpecialSP) || Variables[1] (0.3) || MUL || RETURN",
              "displayLines": "(Castorice_Rank02_MaxSpecialSP * 0.3)",
              "constants": [],
              "variables": [
                "Castorice_Rank02_MaxSpecialSP",
                0.3
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Castorice_Eidolon2_Check"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}