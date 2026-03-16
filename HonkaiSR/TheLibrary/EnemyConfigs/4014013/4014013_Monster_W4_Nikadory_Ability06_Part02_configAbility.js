const configAbility = {
  "fileName": "4014013_Monster_W4_Nikadory_Ability06_Part02",
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
    {
      "name": "Define Custom Variable",
      "variableName": "Skill06Count",
      "value": 0
    },
    "Ability Start",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill06Count",
          "value": {
            "operator": "Variables[0] (Skill06Count) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Skill06Count + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Skill06Count"
            ]
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
          "name": "Define Custom Variable",
          "variableName": "Skill06Damage",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_157) || Variables[1] (Skill06Count) || DIV || RETURN",
            "displayLines": "(UnusedUnderThisBase_157 / Skill06Count)",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_157",
              "Skill06Count"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill06Damage",
          "value": {
            "operator": "Variables[0] ({[Skill06[0]]}) || Variables[1] (Skill06Count) || DIV || RETURN",
            "displayLines": "({[Skill06[0]]} / Skill06Count)",
            "constants": [],
            "variables": [
              "{[Skill06[0]]}",
              "Skill06Count"
            ]
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (Skill06Damage) || RETURN",
          "displayLines": "Skill06Damage",
          "constants": [],
          "variables": [
            "Skill06Damage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1011587031\">Monster_W4_Nikadory_Ability05Split</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]"
    },
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
            "operator": "Variables[0] (UnusedUnderThisBase_565) || Variables[1] (MDF_BraveLayer) || ADD || RETURN",
            "displayLines": "(UnusedUnderThisBase_565 + MDF_BraveLayer)",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_565",
              "MDF_BraveLayer"
            ]
          },
          "valuePerStack": {
            "MDF_DamageResistance": {
              "operator": "Variables[0] (UnusedUnderThisBase_566) || RETURN",
              "displayLines": "UnusedUnderThisBase_566",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_566"
              ]
            },
            "MDF_CrackedEffect": {
              "operator": "Variables[0] (UnusedUnderThisBase_567) || RETURN",
              "displayLines": "UnusedUnderThisBase_567",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_567"
              ]
            },
            "MDF_CrackedDamage": {
              "operator": "Variables[0] (UnusedUnderThisBase_568) || RETURN",
              "displayLines": "UnusedUnderThisBase_568",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_568"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (UnusedUnderThisBase_565) || Variables[1] (MDF_BraveLayer) || ADD || RETURN",
            "displayLines": "(UnusedUnderThisBase_565 + MDF_BraveLayer)",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_565",
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
  "references": []
}