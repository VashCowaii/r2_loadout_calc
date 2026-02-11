const configAbility = {
  "fileName": "8003031_Monster_XP_Elite02_AbilityP02_Part02",
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
      "variableName": "Monster_XP_Elite02_00_Achievement",
      "value": 1
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-2041430190\">Monster_XP_Elite02_Ability07_Mark</a>"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Monster_XP_Elite02_00_Achievement_02",
          "context": "TargetEntity",
          "value": 1,
          "max": 4
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Monster_XP_Elite02_00_Achievement_02",
        "compareType": "=",
        "value2": 4,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Achievement",
          "matchTags": true,
          "relatedAchievements": [
            {
              "title": "\"I Don't Get No Respect!\"",
              "desc": "Enrage the Guardian Shadow with #1[i] character(s) in your team",
              "rarity": "Mid",
              "type": "Hidden until Completion",
              "params": [
                4
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Monster_XP_Elite02_00_Achievement_02"
        }
      ]
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
          "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
          "displayLines": "{[Skill07[0]]}",
          "constants": [],
          "variables": [
            "{[Skill07[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End"
  ],
  "references": []
}