const configAbility = {
  "fileName": "3024013_Monster_W2_Argenti_Ability22_IF_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Modifier"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff01_Modifier"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff02_Modifier"
    },
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[0]]}) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "({[Skill10[0]]} * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "{[Skill10[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "20%"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Shake_Small"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (2) || DIV || RETURN",
          "displayLines": "({[Skill10[1]]} / 2)",
          "constants": [
            2
          ],
          "variables": [
            "{[Skill10[1]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Shake_Small"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (2) || DIV || RETURN",
          "displayLines": "({[Skill10[1]]} / 2)",
          "constants": [
            2
          ],
          "variables": [
            "{[Skill10[1]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Shake_Small"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (2) || DIV || RETURN",
          "displayLines": "({[Skill10[1]]} / 2)",
          "constants": [
            2
          ],
          "variables": [
            "{[Skill10[1]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Shake_Small"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (2) || DIV || RETURN",
          "displayLines": "({[Skill10[1]]} / 2)",
          "constants": [
            2
          ],
          "variables": [
            "{[Skill10[1]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Shake_Small"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Shake_Big"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[0]]}) || Constants[0] (0.8) || MUL || RETURN",
          "displayLines": "({[Skill10[0]]} * 0.8)",
          "constants": [
            0.8
          ],
          "variables": [
            "{[Skill10[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "80%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "variableName": "FlowerPower",
      "value": 0
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W2_Argenti_IF_FlowerPower[<span class=\"descriptionNumberColor\">Wreath</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}