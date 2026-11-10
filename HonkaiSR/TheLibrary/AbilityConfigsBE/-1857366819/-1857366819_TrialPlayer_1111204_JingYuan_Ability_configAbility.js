const configAbility = {
  "fileName": "-1857366819_TrialPlayer_1111204_JingYuan_Ability",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1319822710\">MTrialPlayer_1111204_JingYuan</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1815357366\">MTrialPlayer_1111204_JingYuan_LevelAllDamageAddedRatio</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
              "statValue": 1.5
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1319822710\">MTrialPlayer_1111204_JingYuan</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2081826421\">JingYuan_BattleEvent_ATKCount</a>[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
              "stackLimit": {
                "displayLines": "UnusedUnderThisBase_5679"
              },
              "addStacksPerTrigger": 7
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1815357366\">MTrialPlayer_1111204_JingYuan_LevelAllDamageAddedRatio</a>"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "10"
              },
              "maximum": {
                "displayLines": "UnusedUnderThisBase_5679"
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 4,
              "cooldown": 0
            },
            {
              "name": "Show Attack Count",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Self-Made Battle-Events}}"
              },
              "attackCount": 10,
              "attackCountEnhanced": 0,
              "show": true
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Self-Made Battle-Events}}"
              },
              "set": 0
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Flag",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": 200,
                  "isFixed": "* ERR"
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": null,
                  "skillType": "ControlSkill03",
                  "afterInjection": []
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "Flag"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}