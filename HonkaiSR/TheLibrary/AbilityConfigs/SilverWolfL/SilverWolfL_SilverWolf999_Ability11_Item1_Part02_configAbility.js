const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Ability11_Item1_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"773036968\">_M_SilverWolf999_DuringAbility11_DisableControlSkillForUI</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1388281283\">_M_SilverWolf999_Item1_Listener</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "#CL_ADF_Index"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "((ENEMIES_OBJECT_UNUSED__307 - ENEMIES_OBJECT_UNUSED__308) / (UNKNOWN_SW999_OBJECT[5] - 1))"
      },
      "variableName": "#CL_ADF_DeltaFrame"
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "(UNKNOWN_SW999_OBJECT[5] - 1)"
      },
      "execute": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}.[[living]]"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageElation": {
                  "displayLines": "0.9"
                },
                "dmgFormula": "Elation Scaling",
                "HitSplit": {
                  "displayLines": "(1 / UNKNOWN_SW999_OBJECT[5])"
                },
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
                },
                "ToughnessDMGType": {
                  "DamageType": "Imaginary"
                },
                "instanceTag": "SilverWolf999_00_Item_Damage",
                "Tags": null,
                "attackType": "Elation DMG"
              },
              "distributeEqually": true
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageElation": {
                  "displayLines": "0.9"
                },
                "dmgFormula": "Elation Scaling",
                "HitSplit": {
                  "displayLines": "(1 / UNKNOWN_SW999_OBJECT[5])"
                },
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
                },
                "ToughnessDMGType": {
                  "DamageType": "Imaginary"
                },
                "instanceTag": "SilverWolf999_00_Item_Damage",
                "Tags": null,
                "attackType": "Elation DMG"
              },
              "distributeEqually": true
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(#CL_ADF_Index + 1)"
          },
          "variableName": "#CL_ADF_Index"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemies Still Alive",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}.[[living]]"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "DamageElation": {
              "displayLines": "0.9"
            },
            "dmgFormula": "Elation Scaling",
            "HitSplit": {
              "displayLines": "(1 - ((UNKNOWN_SW999_OBJECT[5] - 1) / UNKNOWN_SW999_OBJECT[5]))"
            },
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "instanceTag": "SilverWolf999_00_Item_Damage",
            "Tags": null,
            "attackType": "Elation DMG"
          },
          "distributeEqually": true
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "DamageElation": {
              "displayLines": "0.9"
            },
            "dmgFormula": "Elation Scaling",
            "HitSplit": {
              "displayLines": "(1 - ((UNKNOWN_SW999_OBJECT[5] - 1) / UNKNOWN_SW999_OBJECT[5]))"
            },
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "instanceTag": "SilverWolf999_00_Item_Damage",
            "Tags": null,
            "attackType": "Elation DMG"
          },
          "distributeEqually": true
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1388281283\">_M_SilverWolf999_Item1_Listener</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1713096413\">SilverWolf999_Ability11_ItemDamagePerformfinish</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Hostile Entities(AOE)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">",
        "value2": 0,
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"637823618\">Standard_LockHPThresholdReached_Mark</a>",
          "invertCondition": true
        }
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill11_Item_LeftCount",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1468343614\">SilverWolf999_Ability11_Shoot</a>"
            }
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "SilverWolf999_Ability11_End_Part01",
              "isTrigger": true
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"872770640\">SilverWolf999_Ability11_QuitOnKillAll</a>"
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}