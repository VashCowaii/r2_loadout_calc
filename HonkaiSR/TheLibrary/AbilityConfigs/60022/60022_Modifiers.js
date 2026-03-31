const configAbility = {
  "fileName": "60022_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-762642255\">MLevel_MissionBattleEvent60022_MydeimosListener</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_TalkCount",
              "value": 0
            },
            {
              "name": "Add Ability",
              "abilityName": "MissionBattleEvent60022_Insert_Part01"
            },
            {
              "name": "Add Ability",
              "abilityName": "MissionBattleEvent60022_Ability03_Camera"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_FirstSkillTalk",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_TalkCount",
                    "compareType": "=",
                    "value2": 0
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_TalkCount",
                        "compareType": "=",
                        "value2": 1
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_TalkCount",
                  "value": {
                    "operator": "Variables[0] (_TalkCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_TalkCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_TalkCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_FirstSkillTalk",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_FirstSkillTalk",
              "value": 0
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "MissionBattleEvent60022_Insert_Part01",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "LevelPerformAvatar",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__999661832\">M_MissionBattleEvent60022_AddDamage</a>[<span class=\"descriptionNumberColor\">Blood of \"Strife\"</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageRatio",
              "value": {
                "operator": "Variables[0] (_Layer) || Constants[0] (0.5) || MUL || RETURN",
                "displayLines": "(_Layer * 0.5)",
                "constants": [
                  0.5
                ],
                "variables": [
                  "_Layer"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (_DamageRatio) || RETURN",
                "displayLines": "_DamageRatio",
                "constants": [],
                "variables": [
                  "_DamageRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
              "value": 0.5
            },
            {
              "name": "Lock HP",
              "threshold": {
                "operator": "Constants[0] (0.000010000076) || RETURN",
                "displayLines": "0.000010000076",
                "constants": [
                  0.000010000076
                ],
                "variables": []
              },
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "lockHolder": "<a class=\"gModGreen\" id=\"-630268816\">MydeimosNeverDie</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">_DamageRatio</span>.",
      "type": "Buff",
      "effectName": "Blood of \"Strife\"",
      "statusName": "Blood of \"Strife\""
    }
  ],
  "references": []
}