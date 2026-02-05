const configAbility = {
  "fileName": "4014036_Monster_W4_Pollux_Stun_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 4014032,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
          },
          {
            "name": "Compare: Variable",
            "value1": "_WorldLevel",
            "compareType": "<",
            "value2": 6
          }
        ]
      },
      "passed": [
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_66) || RETURN",
            "displayLines": "UnusedUnderThisBase_66",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_66"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_83) || RETURN",
            "displayLines": "UnusedUnderThisBase_83",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_83"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 4014032,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
          },
          {
            "name": "Compare: Variable",
            "value1": "_WorldLevel",
            "compareType": "<",
            "value2": 6
          }
        ]
      },
      "passed": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "healPercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_85) || RETURN",
            "displayLines": "UnusedUnderThisBase_85",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_85"
            ]
          },
          "formula": "Heal from Target MaxHP"
        }
      ],
      "failed": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "healPercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_84) || RETURN",
            "displayLines": "UnusedUnderThisBase_84",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_84"
            ]
          },
          "formula": "Heal from Target MaxHP"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value1": "CurrentHP%",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Current Turn Is",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": {
                "operator": "Variables[0] (_WorldLevel) || RETURN",
                "displayLines": "_WorldLevel",
                "constants": [],
                "variables": [
                  "_WorldLevel"
                ]
              },
              "adjustmentType": "Advance"
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "advanceType": "Set",
              "multiAdd": "_WorldLevel"
            }
          ],
          "failed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "advanceType": "Set",
              "multiAdd": "_WorldLevel"
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W4_Pollux_Strengthen_Break"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W4_Pollux_DisableAction"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "HeiShengBei_PreAddBEModifier"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Current Turn Owner has Pending",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "variableName": "AI_HeiShengBei_SpecialAI",
              "value": 0
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "AI_HeiShengBei_Need",
          "value": 1
        }
      ]
    }
  ],
  "references": []
}