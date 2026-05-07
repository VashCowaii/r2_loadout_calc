const configAbility = {
  "fileName": "60004_Colossus_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
        "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
        "minOrMax": "Max"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "Colossus_EnemyBoss_MaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "DamageFlat": {
          "operator": "Variables[0] (Colossus_EnemyBoss_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || RETURN",
          "displayLines": "(Colossus_EnemyBoss_MaxHP * {[Skill03[0]]})",
          "constants": [],
          "variables": [
            "Colossus_EnemyBoss_MaxHP",
            "{[Skill03[0]]}"
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Fire"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 0,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}