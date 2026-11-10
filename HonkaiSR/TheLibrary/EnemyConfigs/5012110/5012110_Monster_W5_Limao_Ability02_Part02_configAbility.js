const configAbility = {
  "fileName": "5012110_Monster_W5_Limao_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Ugly Close-Up"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "_MaxHp",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(_FinalDamage / _MaxHp)"
      },
      "variableName": "_RankRatio"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_RankRatio",
        "compareType": "<",
        "value2": {
          "displayLines": "{[PassiveSkillInitiate[1]]}"
        }
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_RankRatio",
            "compareType": "<",
            "value2": {
              "displayLines": "{[PassiveSkillInitiate[0]]}"
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_RankRatio",
        "compareType": "<",
        "value2": {
          "displayLines": "{[PassiveSkillInitiate[1]]}"
        }
      },
      "passed": [
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "displayLines": "{[PassiveSkillInitiate[4]]}"
          },
          "adjustment": "Add"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"873012820\">Enemy_W5_Limao_RankB</a>"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_RankRatio",
            "compareType": "<",
            "value2": {
              "displayLines": "{[PassiveSkillInitiate[0]]}"
            }
          },
          "passed": [
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "displayLines": "{[PassiveSkillInitiate[3]]}"
              },
              "adjustment": "Add"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"923345677\">Enemy_W5_Limao_RankA</a>"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1340998593\">Monster_W5_Limao_BattleScore1Count</a>"
            },
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "displayLines": "{[PassiveSkillInitiate[2]]}"
              },
              "adjustment": "Add"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"621348535\">Enemy_W5_Limao_RankS</a>"
            }
          ]
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
        "modifier": "<a class=\"gModGreen\" id=\"621348535\">Enemy_W5_Limao_RankS</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1492528010\">Enemy_W5_Limao_ElationDamageUp</a>[<span class=\"descriptionNumberColor\">Make Headlines, Please!</span>]",
          "duration": {
            "displayLines": "{[PassiveSkillInitiate[8]]}"
          },
          "valuePerStack": {
            "MDF_ElationDamageAddedRatio": {
              "displayLines": "{[PassiveSkillInitiate[5]]}"
            }
          },
          "casterAssign": "TargetSelf"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"923345677\">Enemy_W5_Limao_RankA</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1492528010\">Enemy_W5_Limao_ElationDamageUp</a>[<span class=\"descriptionNumberColor\">Make Headlines, Please!</span>]",
              "duration": {
                "displayLines": "{[PassiveSkillInitiate[8]]}"
              },
              "valuePerStack": {
                "MDF_ElationDamageAddedRatio": {
                  "displayLines": "{[PassiveSkillInitiate[6]]}"
                }
              },
              "casterAssign": "TargetSelf"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"873012820\">Enemy_W5_Limao_RankB</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1492528010\">Enemy_W5_Limao_ElationDamageUp</a>[<span class=\"descriptionNumberColor\">Make Headlines, Please!</span>]",
                  "duration": {
                    "displayLines": "{[PassiveSkillInitiate[8]]}"
                  },
                  "valuePerStack": {
                    "MDF_ElationDamageAddedRatio": {
                      "displayLines": "{[PassiveSkillInitiate[7]]}"
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}