const configAbility = {
  "fileName": "60028_MissionBattleEvent60028_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_Trigger",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Trigger",
          "value": 1
        }
      ],
      "failed": [
        "Show BattleEvent Button"
      ]
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "valuePercent": 1,
      "isFixed": "(Fixed)"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1300476012\">Modifier_StageSpecialAbility_10441217_Sub</a>[<span class=\"descriptionNumberColor\">Command Spell</span>]",
      "duration": 1,
      "immediateEffect": true
    },
    {
      "name": "Lock HP",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "lockHolder": "<a class=\"gModGreen\" id=\"-487712043\">1044121lock</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Tutorial",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"121064899\">Modifier_StageSpecialAbility_10441217_BanUltra</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Tutorial",
          "value": 1
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}