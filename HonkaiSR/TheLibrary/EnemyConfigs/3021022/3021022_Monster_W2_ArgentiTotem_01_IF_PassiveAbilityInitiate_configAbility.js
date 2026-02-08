const configAbility = {
  "fileName": "3021022_Monster_W2_ArgentiTotem_01_IF_PassiveAbilityInitiate",
  "skillTrigger": "SkillP01",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
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
      "modifier": "<a class=\"gModGreen\" id=\"-1851629784\">Enemy_W2_ArgentiTotem_01_IF_Initiate</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1914692042\">Enemy_W2_Argenti_IF_Power_Mute</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1851629784\">Enemy_W2_ArgentiTotem_01_IF_Initiate</a>",
      "modifierFlags": [
        "Deathrattle",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "silent": true
            },
            {
              "name": "Mark Entity For Immediate Death"
            },
            {
              "name": "Inject Ability Use",
              "checkOverride": {
                "name": "Condition Priority",
                "overridePriority": "MonsterForceKill",
                "condition": {
                  "name": "Compare: Ability Value",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Check Boolean Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": "PowerFlag"
                        }
                      }
                    ]
                  },
                  "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                  "compareType": "<=",
                  "value2": 0
                }
              },
              "abilityName": "Monster_W2_ArgentiTotem_01_IF_AbilityP01_Insert",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target's Source Owner}}"
              },
              "priorityTag": "MonsterDeathRattle",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_MonsterChangePhase"
              ],
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
              }
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
                "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}