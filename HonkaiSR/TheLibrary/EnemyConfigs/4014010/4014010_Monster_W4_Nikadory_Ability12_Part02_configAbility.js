const configAbility = {
  "fileName": "4014010_Monster_W4_Nikadory_Ability12_Part02",
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
          "target": "{{Enemy Team All(with Unselectable)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 1,
        "conditions": {
          "name": "Enemy ID",
          "ID": 401402,
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "characterName": null,
          "isCompareUniqueID": true
        }
      }
    },
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1947729446\">Enemy_W4_Nikadory_FT_SpecialAction</a>"
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_314) || RETURN",
              "displayLines": "UnusedUnderThisBase_314",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_314"
              ]
            },
            "HitSplit": 0.4,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill12[0]]}) || RETURN",
              "displayLines": "{[Skill12[0]]}",
              "constants": [],
              "variables": [
                "{[Skill12[0]]}"
              ]
            },
            "HitSplit": 0.4,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1947729446\">Enemy_W4_Nikadory_FT_SpecialAction</a>"
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_314) || RETURN",
              "displayLines": "UnusedUnderThisBase_314",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_314"
              ]
            },
            "HitSplit": 0.6,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill12[0]]}) || RETURN",
              "displayLines": "{[Skill12[0]]}",
              "constants": [],
              "variables": [
                "{[Skill12[0]]}"
              ]
            },
            "HitSplit": 0.6,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Currency Wars Full OffFieldList}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2087329841\">Monster_W4_Nikadory_Charge_UnselectableCheck</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1664389231\">Monster_W4_Nikadory_BattleScore1Count</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
          "stackLimit": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || Variables[1] (MDF_BraveLayer) || ADD || RETURN",
            "displayLines": "({[PassiveSkill01[0]]} + MDF_BraveLayer)",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}",
              "MDF_BraveLayer"
            ]
          },
          "valuePerStack": {
            "MDF_DamageResistance": {
              "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[4]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[4]]}"
              ]
            },
            "MDF_CrackedEffect": {
              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[1]]}"
              ]
            },
            "MDF_CrackedDamage": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || Variables[1] (MDF_BraveLayer) || ADD || RETURN",
            "displayLines": "({[PassiveSkill01[0]]} + MDF_BraveLayer)",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}",
              "MDF_BraveLayer"
            ]
          }
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1471859507\">Monster_W4_Nikadory_Charge</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1307575812\">Monster_W4_Nikadory_ChargeEffect</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1849683412\">Monster_W4_Nikadory_WeaponEffect</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Enemy Team All(with Unselectable)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 1,
        "conditions": {
          "name": "Enemy ID",
          "ID": 401402,
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "characterName": null,
          "isCompareUniqueID": true
        }
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}