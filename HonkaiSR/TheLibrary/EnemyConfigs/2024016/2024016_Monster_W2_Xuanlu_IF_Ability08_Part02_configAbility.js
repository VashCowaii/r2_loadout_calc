const configAbility = {
  "fileName": "2024016_Monster_W2_Xuanlu_IF_Ability08_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
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
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "variableName": "Skill08_BonusCount",
      "livingTargets": true,
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "=",
        "value2": 2
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
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}