const configAbility = {
  "fileName": "1005013_BattleEventAbility_IF_BOSS_Standard_BeingBreak",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "value1": "Target__Toughness",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"842410926\">Monster_IF_BOSS_Standard_Defence</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"338689764\">Monster_IF_BOSS_Standard_BreakBonus_Show</a>[<span class=\"descriptionNumberColor\">Mind Shadow</span>]"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Set",
          "multiAdd": "BOSS_BreakDelay"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1386398687\">Monster_IF_BOSS_Standard_Weakness</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "valuePerStack": {
            "MDF_IF_BOSS_WeaknessDMGUpRatio": 1
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": 120,
          "isFixed": "(Fixed)"
        },
        {
          "name": "Skill Points Modification",
          "adjustmentValue": 3,
          "adjustmentType": "+"
        }
      ]
    }
  ],
  "references": []
}