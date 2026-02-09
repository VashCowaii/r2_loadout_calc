const configAbility = {
  "fileName": "1490374940_BattleEventAbility_Challenge_Month_27_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "_Trigger_Effect_Flag",
      "value": 0
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "ability": "BattleEventAbility_Camear_AllLightTeamWithoutDither",
      "isTrigger": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)v2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1483417654\">Modifier_BattleEventAbility_Challenge_Month_27_Sub3</a>",
      "valuePerStack": {
        "_SP_Ratio_get": {
          "operator": "Variables[0] (_SP_Ratio) || RETURN",
          "displayLines": "_SP_Ratio",
          "constants": [],
          "variables": [
            "_SP_Ratio"
          ]
        }
      },
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}.[[removeMemosprite]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1567305749\">Modifier_BattleEventAbility_Challenge_Month_27_Sub4</a>",
      "casterAssign": "TargetSelf"
    }
  ],
  "references": []
}