const configAbility = {
  "fileName": "3002030_Monster_W2_Beast01_03_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "Current_Layer",
      "modifierName": "<a class=\"gModGreen\" id=\"-210849987\">Monster_W2_Beast01_03_LayerCount</a>[<span class=\"descriptionNumberColor\">SoulGlad Revel</span>]",
      "multiplier": 1
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || Variables[1] ({[Skill01[1]]}) || Variables[2] (Current_Layer) || MUL || ADD || RETURN",
          "displayLines": "({[Skill01[0]]} + ({[Skill01[1]]} * Current_Layer))",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}",
            "{[Skill01[1]]}",
            "Current_Layer"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}