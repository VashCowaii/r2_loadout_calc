const configAbility = {
  "fileName": "RuanMei_RuanMei_TriggerImprintEffect",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Next Injected Action Is Owned",
        "invertCondition": true
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Single Target (Primary)",
      "modifier": "RuanMei_DelayHint",
      "referenceModifier": "MReference_Empty"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": "Single Target (Primary)",
      "variableName": "DV_Ultra_Damage_MaxStance",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
      "warningType": "MaxToughness"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill03_FinalBreakDamagePercentage",
      "value": {
        "operator": "Variables[0] (DV_Ultra_Damage_MaxStance) || Constants[0] (30) || DIV || Constants[1] (2) || ADD || Constants[2] (4) || DIV || Variables[1] (0.5) || MUL || RETURN",
        "displayLines": "((((DV_Ultra_Damage_MaxStance / 30) + 2) / 4) * 0.5)",
        "constants": [
          30,
          2,
          4
        ],
        "variables": [
          "DV_Ultra_Damage_MaxStance",
          0.5
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "DamageBreak": {
          "operator": "Variables[0] (Skill03_FinalBreakDamagePercentage) || RETURN",
          "displayLines": "Skill03_FinalBreakDamagePercentage",
          "constants": [],
          "variables": [
            "Skill03_FinalBreakDamagePercentage"
          ]
        },
        "dmgFormula": "Break DMG Scaling",
        "dmgFormulaFinal": "Pure (No DMG%)",
        "Toughness": null,
        "Tags": null,
        "attackType": "Break DMG"
      }
    },
    {
      "name": "Action Advance/Delay",
      "target": "Single Target (Primary)",
      "advanceType": "Set",
      "value": "MDF_BreakAttackToDelay"
    },
    {
      "name": "Define Custom Variable",
      "target": "Single Target (Primary)",
      "scope": "TargetEntity",
      "variableName": "DV_NeedDettachEffect",
      "value": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Single Target (Primary)",
      "modifier": "RuanMei_DelayHint"
    }
  ],
  "references": []
}