const configAbility = {
  "fileName": "4032021_Monster_W4_FireProwler_IF_AbilityP01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"587526798\">Enemy_W4_FireProwler_IF_Limit_Controller</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1932074311\">Enemy_W4_FireProwler_IF_LockStance</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 4034018,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "???",
        "isBaseCompare": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1846248943\">Enemy_W4_FireProwler_IF_Limit_Controller_Main03</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2038871933\">Enemy_W4_FireProwler_IF_RemoveOneMore</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"948149510\">Enemy_W4_FireProwler_IF_NormalState</a>",
      "valuePerStack": {
        "MDF_CurrentStance": {
          "operator": "Variables[0] (UnusedUnderThisBase_348) || RETURN",
          "displayLines": "UnusedUnderThisBase_348",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_348"
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
      "modifier": "<a class=\"gModGreen\" id=\"1177521295\">Enemy_W4_FireProwler_IF_ListenPartDieLoseHP</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"165682162\">Enemy_W4_FireProwler_IF_HintToastController</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1953314331\">Enemy_W4_FireProwler_IF_AbilityEX01</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1587187705\">Enemy_W2_Cocolia_IF_SuperArmorController</a>",
          "valuePerStack": {
            "MDF_IF_BOSS_BreakDelay": {
              "operator": "Variables[0] (UnusedUnderThisBase_98) || RETURN",
              "displayLines": "UnusedUnderThisBase_98",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_98"
              ]
            },
            "MDF_IF_BOSS_WeaknessDMGUpRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_97) || RETURN",
              "displayLines": "UnusedUnderThisBase_97",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_97"
              ]
            },
            "MDF_IF_BOSS_Standard_Defence": {
              "operator": "Variables[0] (UnusedUnderThisBase_96) || RETURN",
              "displayLines": "UnusedUnderThisBase_96",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_96"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1246789467\">Enemy_W2_Cocolia_IF_SoftFrenzyController</a>",
          "valuePerStack": {
            "MDF_FrenzyStartDelay": {
              "operator": "Variables[0] (UnusedUnderThisBase_92) || RETURN",
              "displayLines": "UnusedUnderThisBase_92",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_92"
              ]
            },
            "MDF_FrenzyIntervalDelay": {
              "operator": "Variables[0] (UnusedUnderThisBase_93) || RETURN",
              "displayLines": "UnusedUnderThisBase_93",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_93"
              ]
            },
            "MDF_MaxFrenzyLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_94) || RETURN",
              "displayLines": "UnusedUnderThisBase_94",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_94"
              ]
            },
            "MDF_TokenDMGAddRatioPerLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_95) || RETURN",
              "displayLines": "UnusedUnderThisBase_95",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_95"
              ]
            }
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}