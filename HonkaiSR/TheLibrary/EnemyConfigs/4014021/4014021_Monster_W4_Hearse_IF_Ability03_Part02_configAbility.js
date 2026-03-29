const configAbility = {
  "fileName": "4014021_Monster_W4_Hearse_IF_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2003197831\">Monster_W4_Hearse_ChargeEffect</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1968202244\">Monster_W4_Hearse_ChargeEffectDelay</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(Left to Right)}}.[[removeMemosprite]]"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(Left to Right)}}.[[removeMemosprite]]"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(Left to Right)}}.[[removeMemosprite]]"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(Left to Right)}}.[[removeMemosprite]]"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
    },
    "Ability Start",
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "variableName": "Skill03ExtraCount",
      "livingTargets": true,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "=",
            "value2": 2
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]"
          },
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
            "compareType": ">",
            "value2": 0,
            "valueType": "Layer"
          }
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill03TotalDamage",
      "value": {
        "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Skill03ExtraCount) || Variables[2] ({[Skill03[1]]}) || MUL || ADD || RETURN",
        "displayLines": "({[Skill03[0]]} + (Skill03ExtraCount * {[Skill03[1]]}))",
        "constants": [],
        "variables": [
          "{[Skill03[0]]}",
          "Skill03ExtraCount",
          "{[Skill03[1]]}"
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (Skill03TotalDamage) || RETURN",
          "displayLines": "Skill03TotalDamage",
          "constants": [],
          "variables": [
            "Skill03TotalDamage"
          ]
        },
        "HitSplit": 0.1,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (Skill03TotalDamage) || RETURN",
          "displayLines": "Skill03TotalDamage",
          "constants": [],
          "variables": [
            "Skill03TotalDamage"
          ]
        },
        "HitSplit": 0.1,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (Skill03TotalDamage) || RETURN",
          "displayLines": "Skill03TotalDamage",
          "constants": [],
          "variables": [
            "Skill03TotalDamage"
          ]
        },
        "HitSplit": 0.1,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (Skill03TotalDamage) || RETURN",
          "displayLines": "Skill03TotalDamage",
          "constants": [],
          "variables": [
            "Skill03TotalDamage"
          ]
        },
        "HitSplit": 0.7,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-200542532\">Monster_APShow_OneMore</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-689985018\">Monster_W4_Hearse_ActionBarHint</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Nikador: Self}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"837336870\">Enemy_W4_Nikadory_IF_UltraChargeP2</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2003197831\">Monster_W4_Hearse_ChargeEffect</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1968202244\">Monster_W4_Hearse_ChargeEffectDelay</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1810020186\">Monster_W4_Hearse_Part2Effect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-778914885\">Monster_W4_Hearse_Part2EffectMaterial</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Nikador: Self}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"55627111\">Monster_W4_Nikadory_Part2EffectWithHearse</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}