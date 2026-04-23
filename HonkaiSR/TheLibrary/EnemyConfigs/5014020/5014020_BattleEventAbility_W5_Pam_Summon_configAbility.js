const configAbility = {
  "fileName": "5014020_BattleEventAbility_W5_Pam_Summon",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Stage Ability",
      "abilityName": "BattleEventAbility_W5_Pam_SummonMonster",
      "parameters": {}
    },
    {
      "name": "Add Stage Ability",
      "abilityName": "Monster_W5_Pam_PassiveAbility01_Camera_2",
      "parameters": {}
    },
    {
      "name": "Add Stage Ability",
      "abilityName": "Monster_W5_Pam_PassiveAbility01_Camera_3",
      "parameters": {}
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "multiBase": {
        "operator": "Variables[0] (PassiveAbility01_P2_DelayPercentage) || RETURN",
        "displayLines": "PassiveAbility01_P2_DelayPercentage",
        "constants": [],
        "variables": [
          "PassiveAbility01_P2_DelayPercentage"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value": "GridFightBoss"
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "CurrentSpeed"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "CurrentSpeed",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1803941679\">Modifier_W5_Pam_BattleEvent_BaseSpeed</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"746359205\">Modifier_BattleEventAbility_SummonMonster</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1216093576\">Modifier_W5_Pam_BattleEvent_ForceKill</a>"
    },
    {
      "name": "Assign Unique Name",
      "uniqueName": "PamuSummon",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1803941679\">Modifier_W5_Pam_BattleEvent_BaseSpeed</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedOverride</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (CurrentSpeed) || Variables[1] (PassiveSkill01_P6_SpeedRatio) || MUL || RETURN",
                "displayLines": "(CurrentSpeed * PassiveSkill01_P6_SpeedRatio)",
                "constants": [],
                "variables": [
                  "CurrentSpeed",
                  "PassiveSkill01_P6_SpeedRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__746359205\">Modifier_BattleEventAbility_SummonMonster</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "Pam_MainBoss"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "BattleEventAbility_W5_Pam_SummonMonster",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "EnemyChangeState",
                  "allowAbilityTriggers": false
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