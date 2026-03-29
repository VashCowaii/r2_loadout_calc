const configAbility = {
  "fileName": "2034014_Monster_W2_LycanKing_IF_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "UsedShieldFlag",
      "value": 1
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
          "displayLines": "{[Skill04[2]]}",
          "constants": [],
          "variables": [
            "{[Skill04[2]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"924072592\">Enemy_W2_LycanKing_IF_AbilityEX01</a>"
      },
      "passed": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
              "displayLines": "{[Skill04[3]]}",
              "constants": [],
              "variables": [
                "{[Skill04[3]]}"
              ]
            },
            "cantKill": true,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "WolfBoss_BloodRageCount",
        "compareType": "<",
        "value2": {
          "operator": "Variables[0] (WolfBoss_BloodRageMaxCount) || Constants[0] (3) || SUB || RETURN",
          "displayLines": "(WolfBoss_BloodRageMaxCount - 3)",
          "constants": [
            3
          ],
          "variables": [
            "WolfBoss_BloodRageMaxCount"
          ]
        }
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-149187790\">Lycanking_SummonLycan</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}