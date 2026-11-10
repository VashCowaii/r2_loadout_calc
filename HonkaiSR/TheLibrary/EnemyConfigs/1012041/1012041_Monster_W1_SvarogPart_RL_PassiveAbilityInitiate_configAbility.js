const configAbility = {
  "fileName": "1012041_Monster_W1_SvarogPart_RL_PassiveAbilityInitiate",
  "skillTrigger": "PassiveSkillInitiate",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1119505279\">Monster_W1_Svarog_RL_AttackUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "valueType": "Layer",
          "variableName": "AttackUpLayer",
          "modifierName": "<a class=\"gModGreen\" id=\"-1119505279\">Monster_W1_Svarog_RL_AttackUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "multiplier": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1119505279\">Monster_W1_Svarog_RL_AttackUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "displayLines": "{[PassiveSkill02[0]]}"
            }
          },
          "addStacksPerTrigger": {
            "displayLines": "AttackUpLayer"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value1": "CurrentHP%",
        "compareType": "<=",
        "value2": {
          "displayLines": "LowHPRatio"
        }
      },
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"764270214\">Monster_W1_SvarogPart_RL_CountDown</a>[<span class=\"descriptionNumberColor\">Overload Countdown</span>]",
          "duration": {
            "displayLines": "({[Skill06[0]]} + 1)"
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2117333561\">Monster_W1_SvarogPart_RL_LowHP</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"968585055\">Monster_W1_SvarogPart_BattleScore1</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2117333561\">Monster_W1_SvarogPart_RL_LowHP</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Summoner of Modifier Holder}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": {
                  "displayLines": "{[Skill06[1]]}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PartDecisionFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "PartDecisionFlag",
                      "resetValue": 2,
                      "scope": "TargetEntity"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}