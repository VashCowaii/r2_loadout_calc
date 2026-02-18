const configAbility = {
  "fileName": "2024011_Monster_W2_Xuanlu_10_Ability08_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill08_BonusCount",
      "value": {
        "operator": "Variables[0] (MinionCount) || RETURN",
        "displayLines": "MinionCount",
        "constants": [],
        "variables": [
          "MinionCount"
        ]
      }
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
          "operator": "Variables[0] ({[Skill08[0]]}) || Constants[0] (1) || Variables[1] (Skill08_BonusCount) || Variables[2] ({[Skill08[1]]}) || MUL || ADD || MUL || RETURN",
          "displayLines": "({[Skill08[0]]} * (1 + (Skill08_BonusCount * {[Skill08[1]]})))",
          "constants": [
            1
          ],
          "variables": [
            "{[Skill08[0]]}",
            "Skill08_BonusCount",
            "{[Skill08[1]]}"
          ]
        },
        "HitSplit": 0.15,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": 5,
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill08[0]]}) || Constants[0] (1) || Variables[1] (Skill08_BonusCount) || Variables[2] ({[Skill08[1]]}) || MUL || ADD || MUL || RETURN",
              "displayLines": "({[Skill08[0]]} * (1 + (Skill08_BonusCount * {[Skill08[1]]})))",
              "constants": [
                1
              ],
              "variables": [
                "{[Skill08[0]]}",
                "Skill08_BonusCount",
                "{[Skill08[1]]}"
              ]
            },
            "HitSplit": 0.17,
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
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "searchRandom": true,
      "maxTargets": 2,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1305390378\">Enemy_W2_Xuanlu_04_Charge</a>[<span class=\"descriptionNumberColor\">Lavish Fruit</span>]"
      },
      "ifTargetFound": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}