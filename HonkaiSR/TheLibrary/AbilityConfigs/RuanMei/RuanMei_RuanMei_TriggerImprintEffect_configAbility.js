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
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "RuanMei_DelayHint",
      "referenceModifier": "MReference_Empty"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
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
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
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
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "advanceType": "Set",
      "multi": "MDF_BreakAttackToDelay"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "scope": "TargetEntity",
      "variableName": "DV_NeedDettachEffect",
      "value": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "RuanMei_DelayHint"
    }
  ],
  "references": []
}