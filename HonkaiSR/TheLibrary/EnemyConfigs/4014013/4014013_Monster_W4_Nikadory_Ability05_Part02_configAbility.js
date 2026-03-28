const configAbility = {
  "fileName": "4014013_Monster_W4_Nikadory_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "Tutorial_Flag",
            "compareType": "=",
            "value2": 0
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1803940540\">Monster_W4_Nikadory_Main</a>"
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2109179973\">Monster_W4_Nikadory_Main_DisableAction</a>"
        }
      ]
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
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"318155284\">Monster_W4_Nikadory_Shield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
      "stackLimit": {
        "operator": "Variables[0] ({[Skill05[1]]}) || Variables[1] (MDF_BraveLayer) || ADD || RETURN",
        "displayLines": "({[Skill05[1]]} + MDF_BraveLayer)",
        "constants": [],
        "variables": [
          "{[Skill05[1]]}",
          "MDF_BraveLayer"
        ]
      },
      "valuePerStack": {
        "MDF_DamageResistance_PerLayer": {
          "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
          "displayLines": "{[Skill05[2]]}",
          "constants": [],
          "variables": [
            "{[Skill05[2]]}"
          ]
        },
        "MDF_ActionDelayRatio": {
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
        },
        "MDF_CrackedDamageAfter": {
          "operator": "Variables[0] (UnusedUnderThisBase_572) || RETURN",
          "displayLines": "UnusedUnderThisBase_572",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_572"
          ]
        },
        "MDF_SPAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_571) || RETURN",
          "displayLines": "UnusedUnderThisBase_571",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_571"
          ]
        },
        "MDF_DamageUpRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_574) || RETURN",
          "displayLines": "UnusedUnderThisBase_574",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_574"
          ]
        }
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] ({[Skill05[1]]}) || Variables[1] (MDF_BraveLayer) || ADD || RETURN",
        "displayLines": "({[Skill05[1]]} + MDF_BraveLayer)",
        "constants": [],
        "variables": [
          "{[Skill05[1]]}",
          "MDF_BraveLayer"
        ]
      }
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_313) || RETURN",
              "displayLines": "UnusedUnderThisBase_313",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_313"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
      "stackLimit": {
        "operator": "Variables[0] (UnusedUnderThisBase_310) || RETURN",
        "displayLines": "UnusedUnderThisBase_310",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_310"
        ]
      },
      "valuePerStack": {
        "MDF_DamageUpRatio_PerLayer": {
          "operator": "Variables[0] (UnusedUnderThisBase_308) || RETURN",
          "displayLines": "UnusedUnderThisBase_308",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_308"
          ]
        },
        "MDF_EnergyAddRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_309) || RETURN",
          "displayLines": "UnusedUnderThisBase_309",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_309"
          ]
        },
        "MDF_MaxLayer": {
          "operator": "Variables[0] (UnusedUnderThisBase_310) || RETURN",
          "displayLines": "UnusedUnderThisBase_310",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_310"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Currency Wars Full OffFieldList}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Currency Wars Full OffFieldList}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
          "stackLimit": {
            "operator": "Variables[0] (UnusedUnderThisBase_310) || RETURN",
            "displayLines": "UnusedUnderThisBase_310",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_310"
            ]
          },
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_308) || RETURN",
              "displayLines": "UnusedUnderThisBase_308",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_308"
              ]
            },
            "MDF_EnergyAddRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_309) || RETURN",
              "displayLines": "UnusedUnderThisBase_309",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_309"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_310) || RETURN",
              "displayLines": "UnusedUnderThisBase_310",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_310"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 4014015,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Savage God, Mad King, Incarnation of Strife (Complete)",
        "isBaseCompare": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1462384175\">Monster_W4_Nikadory_Brave_Judge</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1307575812\">Monster_W4_Nikadory_ChargeEffect</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": ">=",
            "value2": 2
          },
          {
            "name": "Enemy ID",
            "ID": 4014014,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Savage God, Mad King, Incarnation of Strife",
            "isBaseCompare": true
          },
          {
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
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1717699504\">Monster_W4_Nikadory_UltraPrepare</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1849683412\">Monster_W4_Nikadory_WeaponEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1011587031\">Monster_W4_Nikadory_Ability05Split</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 4014016,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Victor, Acropolis, and Lord of Strife",
        "isBaseCompare": true
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1471859507\">Monster_W4_Nikadory_Charge</a>",
      "valuePerStack": {
        "MDF_DamageUpRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_574) || RETURN",
          "displayLines": "UnusedUnderThisBase_574",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_574"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "Tutorial_Flag",
            "compareType": "=",
            "value2": 0
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1803940540\">Monster_W4_Nikadory_Main</a>"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Tutorial_Flag",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2109179973\">Monster_W4_Nikadory_Main_DisableAction</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}