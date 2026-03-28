const configAbility = {
  "fileName": "4014016_Monster_W4_Nikadory_Ability06_B_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_IsStoryTri",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1329925524\">Modifier_Monster_W4_Nikadory_B_HardLockHp</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill06Count",
      "value": 0
    },
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
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_IsStoryTri",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Show BattleEvent Button",
          "show": true
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Has Queued Ult"
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
        "Trigger: Attack End"
      ]
    },
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
        "value1": "_IsStoryTri",
        "compareType": "=",
        "value2": 1
      },
      "failed": [
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
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "whenAdded": [
    {
      "name": "Preload Battle Event(s)",
      "eventID": [
        60025
      ]
    },
    {
      "name": "Add Battle Event",
      "teamName": "Player Team",
      "eventID": 60025,
      "variables": null,
      "whenCreated": [
        "Show BattleEvent Button"
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1174103224\">Modifier_Monster_W4_Nikadory_B_HardLockHp_BFAbility02</a>",
      "valuePerStack": {
        "MDF_LockHp": {
          "operator": "Variables[0] (MIN) || Constants[0] (0.9) || Variables[1] ({[Skill06[1]]}) || Constants[1] (1.2) || MUL || PARAM_2 || FUNCTION || RETURN",
          "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(0.9, ({[Skill06[1]]} * 1.2))",
          "constants": [
            0.9,
            1.2
          ],
          "variables": [
            "MIN",
            "{[Skill06[1]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1329925524\">Modifier_Monster_W4_Nikadory_B_HardLockHp</a>",
      "valuePerStack": {
        "MDF_LockHp": {
          "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
          "displayLines": "{[Skill06[1]]}",
          "constants": [],
          "variables": [
            "{[Skill06[1]]}"
          ]
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}