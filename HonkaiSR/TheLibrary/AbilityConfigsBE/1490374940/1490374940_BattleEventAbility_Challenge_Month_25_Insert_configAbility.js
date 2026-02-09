const configAbility = {
  "fileName": "1490374940_BattleEventAbility_Challenge_Month_25_Insert",
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
    "Deleted bullshit",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Monthly Challenge Battle Event}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-691475768\">Modifier_BattleEventAbility_Challenge_Month_25_Insert_pre</a>",
      "valuePerStack": {
        "BattleEvent_P2_ADF_Chance": {
          "operator": "Variables[0] (BattleEvent_P2_ADF_Set) || RETURN",
          "displayLines": "BattleEvent_P2_ADF_Set",
          "constants": [],
          "variables": [
            "BattleEvent_P2_ADF_Set"
          ]
        },
        "BattleEvent_P3_ADF_LifeTime": {
          "operator": "Variables[0] (BattleEvent_P3_ADF_Set) || RETURN",
          "displayLines": "BattleEvent_P3_ADF_Set",
          "constants": [],
          "variables": [
            "BattleEvent_P3_ADF_Set"
          ]
        },
        "BattleEvent_P4_ADF_DamagePercentage": {
          "operator": "Variables[0] (BattleEvent_P4_ADF_Set) || RETURN",
          "displayLines": "BattleEvent_P4_ADF_Set",
          "constants": [],
          "variables": [
            "BattleEvent_P4_ADF_Set"
          ]
        },
        "BattleEvent_P5_ADF_DotTriggerRatio": {
          "operator": "Variables[0] (BattleEvent_P5_ADF_Set) || RETURN",
          "displayLines": "BattleEvent_P5_ADF_Set",
          "constants": [],
          "variables": [
            "BattleEvent_P5_ADF_Set"
          ]
        }
      },
      "casterAssign": "TargetSelf"
    }
  ],
  "references": []
}