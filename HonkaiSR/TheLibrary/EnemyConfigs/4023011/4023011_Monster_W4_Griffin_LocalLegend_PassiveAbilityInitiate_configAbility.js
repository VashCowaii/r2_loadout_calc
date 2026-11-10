const configAbility = {
  "fileName": "4023011_Monster_W4_Griffin_LocalLegend_PassiveAbilityInitiate",
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
      "show": true
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
      "value": {
        "displayLines": "{[PassiveSkill02[5]]}"
      },
      "variableName": "_MaxDamageReduce"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Stage ID",
        "compareType": "=",
        "stageID": "426007 (Greatsword Guardian: Vanguard Wallbreaker)"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[7]]}"
          },
          "variableName": "_FactorK"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[1]]}"
          },
          "variableName": "_Phase1Sums"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[2]]}"
          },
          "variableName": "_Phase2Sums"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[3]]}"
          },
          "variableName": "_BonusInit"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[4]]}"
          },
          "variableName": "_BonusSums"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[8]]}"
          },
          "variableName": "_Bonus2Init"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[9]]}"
          },
          "variableName": "_Bonus2Sums"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[10]]}"
          },
          "variableName": "_BonusLimit"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[11]]}"
          },
          "variableName": "_Bonus2Limit"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[6]]}"
          },
          "variableName": "_FactorK"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[0]]}"
          },
          "variableName": "_Phase1Sums"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[1]]}"
          },
          "variableName": "_Phase2Sums"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[2]]}"
          },
          "variableName": "_BonusInit"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[3]]}"
          },
          "variableName": "_BonusSums"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[4]]}"
          },
          "variableName": "_Bonus2Init"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[5]]}"
          },
          "variableName": "_Bonus2Sums"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[6]]}"
          },
          "variableName": "_BonusLimit"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[7]]}"
          },
          "variableName": "_Bonus2Limit"
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": 4,
      "execute": [
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
                  "value": 1,
                  "variableName": "AIFlag"
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
                    "compareType": "=",
                    "stageID": "426007 (Greatsword Guardian: Vanguard Wallbreaker)"
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
                      "displayLines": "{[PassiveSkill02[0]]}"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}