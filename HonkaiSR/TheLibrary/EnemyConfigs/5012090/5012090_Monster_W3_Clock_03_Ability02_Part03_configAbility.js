const configAbility = {
  "fileName": "5012090_Monster_W3_Clock_03_Ability02_Part03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[0]]}"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "Toughness": {
          "displayLines": 30
        },
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Adjust Team Punchline Value",
      "value": {
        "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[1]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[1]]}"
        ]
      },
      "adjustment": "Add"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Is_Charge",
      "value": 0
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1466426252\">Monster_W3_Clock_03_Charge</a>[<span class=\"descriptionNumberColor\">Strength Boost!</span>]"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Is_BeingAttacked",
      "value": 0
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase_normal"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}