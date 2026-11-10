const configAbility = {
  "fileName": "4014022_Monster_Fuyan_Hit_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_Fuyan_Hit_Part02"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "ADF_MaxHPValue",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "operator": "Constants[0] (1) || Variables[0] (MonsterCount) || DIV || Constants[1] (0.000010000076) || ADD || RETURN",
        "displayLines": "((1 / MonsterCount) + 0.000010000076)",
        "constants": [
          1,
          0.000010000076
        ],
        "variables": [
          "MonsterCount"
        ]
      },
      "variableName": "ADF_HPDamageRatioValue"
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (DeathCount) || RETURN",
        "displayLines": "DeathCount",
        "constants": [],
        "variables": [
          "DeathCount"
        ]
      },
      "execute": [
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "ADF_CurrentHPValue",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ADF_CurrentHPValue",
            "compareType": "<=",
            "value2": {
              "operator": "Variables[0] (ADF_MaxHPValue) || Variables[1] (ADF_HPDamageRatioValue) || MUL || RETURN",
              "displayLines": "(ADF_MaxHPValue * ADF_HPDamageRatioValue)",
              "constants": [],
              "variables": [
                "ADF_MaxHPValue",
                "ADF_HPDamageRatioValue"
              ]
            }
          },
          "passed": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ],
          "failed": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (ADF_HPDamageRatioValue) || RETURN",
                "displayLines": "ADF_HPDamageRatioValue",
                "constants": [],
                "variables": [
                  "ADF_HPDamageRatioValue"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<",
                    "value2": 0.1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MonsterCount",
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "value": 0,
      "variableName": "DeathCount"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}