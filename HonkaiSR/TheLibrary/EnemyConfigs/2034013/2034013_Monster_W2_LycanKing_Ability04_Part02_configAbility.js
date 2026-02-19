const configAbility = {
  "fileName": "2034013_Monster_W2_LycanKing_Ability04_Part02",
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
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "advanceType": "Set",
      "multiAdd": "{[Skill04[0]]}"
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "advanceType": "Set",
      "multiAdd": "{[Skill04[1]]}"
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
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "popUpText": "Action Delayed",
      "living": true
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "popUpText": "Action Delayed",
      "living": true
    },
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
    "Trigger: Ability End"
  ],
  "references": []
}