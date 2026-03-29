const configAbility = {
  "fileName": "4023012_Monster_W4_Griffin_LocalLegend_PassiveAbilityInitiate",
  "skillTrigger": "PassiveSkill01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-757280196\">W4_Griffin_LocalLegend_BattleScore1</a>",
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"203272356\">Enemy_W4_Griffin_Status</a>"
    },
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "display": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
    },
    {
      "name": "Set Enemy Phase"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 4023011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Earthshaker Leo: Solblaze Winged Beast"
          },
          {
            "name": "Enemy ID",
            "ID": 402301100,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
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
          "modifier": "<a class=\"gModGreen\" id=\"1763194403\">Monster_W4_Griffin_LocalLegend_PartController_LockHP</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_MaxDamageReduce",
      "value": {
        "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
        "displayLines": "{[PassiveSkill02[5]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill02[5]]}"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Stage ID",
        "ID": 426007,
        "compareType": "=",
        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_FactorK",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[7]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[7]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[7]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Phase1Sums",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[1]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Phase2Sums",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[2]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_BonusInit",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[3]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_BonusSums",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[4]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Bonus2Init",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[8]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[8]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[8]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Bonus2Sums",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[9]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[9]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[9]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_BonusLimit",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[10]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[10]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[10]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Bonus2Limit",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[11]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[11]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[11]]}"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_FactorK",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[6]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[6]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[6]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Phase1Sums",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Phase2Sums",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[1]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_BonusInit",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[2]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_BonusSums",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[3]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Bonus2Init",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[4]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Bonus2Sums",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[5]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_BonusLimit",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[6]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[6]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[6]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Bonus2Limit",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[7]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[7]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[7]]}"
            ]
          }
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": 4,
      "Event": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1587865992\">W4_Griffin_LocalLegend_Summon</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"364693111\">Enemy_W4_Griffin_LocalLegend_Status</a>"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "set": 0
    }
  ],
  "whenAdded": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__203272356\">Enemy_W4_Griffin_Status</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Mascot}}"
              },
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "_ListenCorrectInteract",
                "compareType": "=",
                "value2": 0
              },
              "ifTargetFound": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W4_Mascot_Ability04_LocalLegend_Part03"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-71309847\">Enemy_W4_Mascot_LocalLegend_DeathRattle</a>"
                }
              ]
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
              "onlyRemoveOwnersInstance": true
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "AIFlag",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 20
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 5,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1209574560\">Enemy_W4_Griffin_UltraReady</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Stage ID",
                    "ID": 426007,
                    "compareType": "=",
                    "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"35393434\">Standard_FastAction</a>[<span class=\"descriptionNumberColor\">Stormride</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-191889698\">MModifier_W4_Griffin_LocalLegend_Revenge</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "valuePerStack": {
                    "MDF_AddedDamageRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[0]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}