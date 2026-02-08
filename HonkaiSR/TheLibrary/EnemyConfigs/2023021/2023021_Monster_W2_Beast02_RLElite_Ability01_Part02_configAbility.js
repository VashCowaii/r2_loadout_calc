const configAbility = {
  "fileName": "2023021_Monster_W2_Beast02_RLElite_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Bullet_Count",
        "compareType": "=",
        "value2": 3,
        "contextScope": "TargetEntity"
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Bullet_Count",
            "compareType": "=",
            "value2": 2,
            "contextScope": "TargetEntity"
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || Variables[1] ({[Skill01[1]]}) || Variables[2] (Bullet_Count) || MUL || ADD || RETURN",
          "displayLines": "({[Skill01[0]]} + ({[Skill01[1]]} * Bullet_Count))",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}",
            "{[Skill01[1]]}",
            "Bullet_Count"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Define Modifier Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifierName": "<a class=\"gModGreen\" id=\"296260861\">Monster_W2_Beast02_RLElite_Bullet</a>",
      "value": 0
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Bullet_Count"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"329970269\">Enemy_W2_Beast02_RLElite_GennkiMark</a>[<span class=\"descriptionNumberColor\">Gather Courage</span>]"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (Bullet_Count) || RETURN",
        "displayLines": "Bullet_Count",
        "constants": [],
        "variables": [
          "Bullet_Count"
        ]
      },
      "entityClass": "Enemy",
      "maximum": 3,
      "assignState": "False"
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}