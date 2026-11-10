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
      "modifier": "<a class=\"gModGreen\" id=\"-1922337227\">RuanMei_DelayHint</a>",
      "referenceModifier": "<a class=\"gModGreen\" id=\"1832901043\">MReference_Empty</a>"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "DV_Ultra_Damage_MaxStance",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "warningType": "MaxToughness",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
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
      },
      "variableName": "Skill03_FinalBreakDamagePercentage"
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
      "multiAdd": "MDF_BreakAttackToDelay"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "scope": "TargetEntity",
      "value": 1,
      "variableName": "DV_NeedDettachEffect"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1922337227\">RuanMei_DelayHint</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}