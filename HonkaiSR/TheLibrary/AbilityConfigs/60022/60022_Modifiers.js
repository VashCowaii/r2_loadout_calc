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
              "value": 0,
              "variableName": "_TalkCount"
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
                  "value": {
                    "displayLines": "(_TalkCount + 1)"
                  },
                  "variableName": "_TalkCount"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "_FirstSkillTalk"
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
              "value": 0,
              "variableName": "_FirstSkillTalk"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "MissionBattleEvent60022_Insert_Part01",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "STAGE_Character",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__999661832\">M_MissionBattleEvent60022_AddDamage</a>[<span class=\"descriptionNumberColor\">Blood of \"Strife\"</span>]",
      "stackType": "Replace",
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">_DamageRatio</span>.",
      "type": "Buff",
      "effectName": "Blood of \"Strife\"",
      "statusName": "Blood of \"Strife\"",
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
              "value": {
                "displayLines": "(_Layer * 0.5)"
              },
              "variableName": "_DamageRatio"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "_DamageRatio"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
              "statValue": 0.5
            },
            {
              "name": "Lock HP",
              "threshold": {
                "displayLines": "0.000010000076"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "lockHolder": "<a class=\"gModGreen\" id=\"-630268816\">MydeimosNeverDie</a>"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}