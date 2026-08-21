const configAbility = {
  "fileName": "5012092_Monster_W3_Clock_03_Ability03_Part02_FateRin",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "#PassiveSkill01_P1_Mark",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"756663200\">Enemy_W3_Clock_03_TargetSelect_ToFriend</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-481047812\">Enemy_W3_Clock_03_TargetSelect</a>",
          "valuePerStack": {
            "TargetMark": 0
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1241100156\">Enemy_W3_Clock_03_TargetSelect_ToEnemy</a>"
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase_normal"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}