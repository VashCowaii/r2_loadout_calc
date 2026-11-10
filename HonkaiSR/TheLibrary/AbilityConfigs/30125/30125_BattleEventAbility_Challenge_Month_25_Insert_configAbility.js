const configAbility = {
  "fileName": "30125_BattleEventAbility_Challenge_Month_25_Insert",
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
          "displayLines": "BattleEvent_P2_ADF_Set"
        },
        "BattleEvent_P3_ADF_LifeTime": {
          "displayLines": "BattleEvent_P3_ADF_Set"
        },
        "BattleEvent_P4_ADF_DamagePercentage": {
          "displayLines": "BattleEvent_P4_ADF_Set"
        },
        "BattleEvent_P5_ADF_DotTriggerRatio": {
          "displayLines": "BattleEvent_P5_ADF_Set"
        }
      },
      "casterAssign": "TargetSelf"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}