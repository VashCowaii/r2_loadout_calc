const configAbility = {
  "fileName": "4014021_Monster_W4_Nikadory_IF_PassiveAbility_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "<=",
            "value2": 2
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1085270043\">Enemy_W4_HearsePart_IF_Passive</a>"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        }
      ]
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
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
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"261985089\">Monster_W4_Nikadory_Energy</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Nikador - The Giver: Self}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1597888221\">Enemy_W4_Hearse_IF_BreakState</a>"
    },
    "Deleted bullshit",
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "multiBase": 0
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "=",
        "value2": 4
      },
      "ifTargetFound": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "scope": "TargetEntity",
          "variableName": "ChangePhase_MaxHPValue"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "ChangePhase_MaxHPValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Set HP Value",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "setPercent": 1
        },
        {
          "name": "Set Enemy Phase",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "mode": "Inc"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"55627111\">Monster_W4_Nikadory_Part2EffectWithHearse</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Nikador - The Giver: Self}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Nikador - The Giver: Self}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1810020186\">Monster_W4_Hearse_Part2Effect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Nikador - The Giver: Self}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-778914885\">Monster_W4_Hearse_Part2EffectMaterial</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
      "valuePerStack": {
        "MDF_DamageUpRatio_PerLayer": {
          "operator": "Variables[0] (UnusedUnderThisBase_542) || RETURN",
          "displayLines": "UnusedUnderThisBase_542",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_542"
          ]
        }
      },
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1417850551\">Enemy_W4_Nikadory_IF_Ability06Charge</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1262027013\">Enemy_W4_Nikadory_IF_AbilityEX03</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
          "stackLimit": {
            "operator": "Variables[0] (UnusedUnderThisBase_530) || RETURN",
            "displayLines": "UnusedUnderThisBase_530",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_530"
            ]
          },
          "valuePerStack": {
            "MDF_AllDamageReduce": {
              "operator": "Variables[0] (UnusedUnderThisBase_527) || RETURN",
              "displayLines": "UnusedUnderThisBase_527",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_527"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (UnusedUnderThisBase_530) || RETURN",
            "displayLines": "UnusedUnderThisBase_530",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_530"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
          "stackLimit": {
            "operator": "Variables[0] (UnusedUnderThisBase_576) || RETURN",
            "displayLines": "UnusedUnderThisBase_576",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_576"
            ]
          },
          "valuePerStack": {
            "MDF_AllDamageReduce": {
              "operator": "Variables[0] (UnusedUnderThisBase_527) || RETURN",
              "displayLines": "UnusedUnderThisBase_527",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_527"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (UnusedUnderThisBase_576) || RETURN",
            "displayLines": "UnusedUnderThisBase_576",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_576"
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
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-907515616\">MoreOneMorePerTurn_4</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Nikador - The Giver: Self}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1324450026\">Enemy_W4_Hearse_IF_LockHP</a>"
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "W4_Hearse_00"
    },
    {
      "name": "Force-Sync AV Link",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "to": {
        "name": "Target Name",
        "target": "{{Nikador - The Giver: Self}}"
      }
    },
    {
      "name": "Create AV Link",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "to": {
        "name": "Target Name",
        "target": "{{Nikador - The Giver: Self}}"
      },
      "linkOrder": 1,
      "isStart": true,
      "linkFollowerModifications": {
        "OnBreak": "Bit_AutoForceSync"
      },
      "linkOwnerModifications": {
        "OnBreak": "Bit_AutoForceSync"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-482936145\">Enemy_W4_Nikadory_IF_Endurance</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 1
    }
  ],
  "references": []
}