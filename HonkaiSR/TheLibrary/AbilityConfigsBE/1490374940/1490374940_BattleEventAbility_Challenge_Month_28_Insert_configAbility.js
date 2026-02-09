const configAbility = {
  "fileName": "1490374940_BattleEventAbility_Challenge_Month_28_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"701462759\">Modifier_BattleEventAbility_Challenge_Month_28_Insert</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
      "stackLimit": {
        "operator": "Variables[0] (DV_MaxLayer_Set) || RETURN",
        "displayLines": "DV_MaxLayer_Set",
        "constants": [],
        "variables": [
          "DV_MaxLayer_Set"
        ]
      },
      "valuePerStack": {
        "DV_DmgUpRatio_Get": {
          "operator": "Variables[0] (DV_DmgUpRatio_Set) || RETURN",
          "displayLines": "DV_DmgUpRatio_Set",
          "constants": [],
          "variables": [
            "DV_DmgUpRatio_Set"
          ]
        },
        "DV_AtkUpRatio_Get": {
          "operator": "Variables[0] (DV_AtkUpRatio_Set) || RETURN",
          "displayLines": "DV_AtkUpRatio_Set",
          "constants": [],
          "variables": [
            "DV_AtkUpRatio_Set"
          ]
        }
      },
      "addStacksPerTrigger": 1,
      "casterAssign": "TargetSelf"
    }
  ],
  "references": []
}