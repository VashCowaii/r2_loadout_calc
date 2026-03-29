const configAbility = {
  "fileName": "4012093_Monster_W4_DawnsEyePart_03_PassiveAbilityInitiate",
  "skillTrigger": "PassiveSkillInitiate",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Default"
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"754083449\">Enemy_W4_DawnsEyePart_03_DieController</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__754083449\">Enemy_W4_DawnsEyePart_03_DieController</a>",
      "modifierFlags": [
        "MuteSpeed"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isLock": false
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelist": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelistTag": "Mask_TurnBasedAdvance"
            },
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "PartControl",
              "state": false
            },
            {
              "name": "Lock HP",
              "threshold": 0.000010000076
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Monster_W4_DawnsEyePart_03_Ability01_Part01",
              "priorityTag": "MonsterChangePhase",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "MonsterType_W4_BossPartRight"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W4_BossPartLeft"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "MonsterType_W4_BossPartRight"
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