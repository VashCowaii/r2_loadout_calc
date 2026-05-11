const configAbility = {
  "fileName": "4034016_Monster_W4_FireProwler_IF_AbilityP01",
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
          "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
          "displayLines": "{[SkillP01[5]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[5]]}"
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
              "operator": "Variables[0] (UnusedUnderThisBase_12612) || RETURN",
              "displayLines": "UnusedUnderThisBase_12612",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_12612"
              ]
            },
            "MDF_IF_BOSS_WeaknessDMGUpRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_12617) || RETURN",
              "displayLines": "UnusedUnderThisBase_12617",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_12617"
              ]
            },
            "MDF_IF_BOSS_Standard_Defence": {
              "operator": "Variables[0] (UnusedUnderThisBase_12651) || RETURN",
              "displayLines": "UnusedUnderThisBase_12651",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_12651"
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
              "operator": "Variables[0] (UnusedUnderThisBase_12654) || RETURN",
              "displayLines": "UnusedUnderThisBase_12654",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_12654"
              ]
            },
            "MDF_FrenzyIntervalDelay": {
              "operator": "Variables[0] (UnusedUnderThisBase_12655) || RETURN",
              "displayLines": "UnusedUnderThisBase_12655",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_12655"
              ]
            },
            "MDF_MaxFrenzyLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_12656) || RETURN",
              "displayLines": "UnusedUnderThisBase_12656",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_12656"
              ]
            },
            "MDF_TokenDMGAddRatioPerLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_12657) || RETURN",
              "displayLines": "UnusedUnderThisBase_12657",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_12657"
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