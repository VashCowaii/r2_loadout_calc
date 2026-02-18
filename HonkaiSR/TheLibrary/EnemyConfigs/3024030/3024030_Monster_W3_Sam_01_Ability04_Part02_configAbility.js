const configAbility = {
  "fileName": "3024030_Monster_W3_Sam_01_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1466483299\">Enemy_W3_Sam_01_MuteUltra</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1435923301\">Enemy_W3_Sam_01_Locking</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]",
      "immediateEffect": true,
      "valuePerStack": {
        "MDF_SpeedUpRatio": {
          "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
          "displayLines": "{[Skill04[0]]}",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}"
          ]
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MinionDelay",
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
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] (MinionDelay) || RETURN",
        "displayLines": "MinionDelay",
        "constants": [],
        "variables": [
          "MinionDelay"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
            "displayLines": "SummonList_ADF_1",
            "constants": [],
            "variables": [
              "SummonList_ADF_1"
            ]
          },
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MinionDelay",
      "value": {
        "operator": "Variables[0] (MinionDelay) || Variables[1] ({[PassiveSkill03[3]]}) || ADD || RETURN",
        "displayLines": "(MinionDelay + {[PassiveSkill03[3]]})",
        "constants": [],
        "variables": [
          "MinionDelay",
          "{[PassiveSkill03[3]]}"
        ]
      }
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] (MinionDelay) || RETURN",
        "displayLines": "MinionDelay",
        "constants": [],
        "variables": [
          "MinionDelay"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
            "displayLines": "SummonList_ADF_1",
            "constants": [],
            "variables": [
              "SummonList_ADF_1"
            ]
          },
          "locationType": "AfterCaster"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MinionDelay",
      "value": {
        "operator": "Variables[0] (MinionDelay) || Variables[1] ({[PassiveSkill03[3]]}) || ADD || RETURN",
        "displayLines": "(MinionDelay + {[PassiveSkill03[3]]})",
        "constants": [],
        "variables": [
          "MinionDelay",
          "{[PassiveSkill03[3]]}"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 3024031,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Harbinger of Death: Swarm Nightmare",
                "isBaseCompare": true
              },
              {
                "name": "Enemy ID",
                "ID": 3024032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Harbinger of Death: Swarm Nightmare",
                "isBaseCompare": true
              }
            ]
          }
        ]
      },
      "failed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (MinionDelay) || RETURN",
            "displayLines": "MinionDelay",
            "constants": [],
            "variables": [
              "MinionDelay"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                "displayLines": "SummonList_ADF_1",
                "constants": [],
                "variables": [
                  "SummonList_ADF_1"
                ]
              },
              "locationType": "First"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MinionDelay",
          "value": {
            "operator": "Variables[0] (MinionDelay) || Variables[1] ({[PassiveSkill03[3]]}) || ADD || RETURN",
            "displayLines": "(MinionDelay + {[PassiveSkill03[3]]})",
            "constants": [],
            "variables": [
              "MinionDelay",
              "{[PassiveSkill03[3]]}"
            ]
          }
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (MinionDelay) || RETURN",
            "displayLines": "MinionDelay",
            "constants": [],
            "variables": [
              "MinionDelay"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                "displayLines": "SummonList_ADF_1",
                "constants": [],
                "variables": [
                  "SummonList_ADF_1"
                ]
              },
              "locationType": "Last"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MinionDelay",
          "value": {
            "operator": "Variables[0] (MinionDelay) || Variables[1] ({[PassiveSkill03[3]]}) || ADD || RETURN",
            "displayLines": "(MinionDelay + {[PassiveSkill03[3]]})",
            "constants": [],
            "variables": [
              "MinionDelay",
              "{[PassiveSkill03[3]]}"
            ]
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2138788815\">Enemy_W3_Sam_01_Ability04UnselectableMark</a>[<span class=\"descriptionNumberColor\">Rapid Evolution</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1438369584\">Enemy_W3_Sam_01_Ability04Unselectable</a>"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Inject Extra-Turn",
      "actionTag": null,
      "skillType": "ControlSkill03",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "SelectTarget"
      },
      "afterInjection": []
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1435923301\">Enemy_W3_Sam_01_Locking</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1466483299\">Enemy_W3_Sam_01_MuteUltra</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Ultimate"
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