const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 8003060,
  "trimCharacterName": 8003060,
  "abilityList": [
    "8003060_Monster_XP_MonsterGroup_PassiveAbilityInitiate",
    "8003060_Handling"
  ],
  "abilityObject": {
    "8003060_Monster_XP_MonsterGroup_PassiveAbilityInitiate": {
      "fileName": "8003060_Monster_XP_MonsterGroup_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "PartControl",
          "state": false
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "stayInTeam": false
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1482083906\">Enemy_XP_MonsterGroup_PassiveAbilityInitiate</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-888439943\">Enemy_XP_MonsterGroup_PassiveOnMonster</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__85) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__85",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__85"
                    ]
                  },
                  "DamageType": {
                    "name": "Damage Type Source",
                    "sourceType": "AllType"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1482083906\">Enemy_XP_MonsterGroup_PassiveAbilityInitiate</a>",
          "modifierFlags": [
            "MuteSpeed"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)",
                {
                  "name": "Override Enemy Rank",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Max Wave Count",
                  "add": -99
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  }
                },
                {
                  "name": "Override Enemy Rank",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "revert": true
                }
              ]
            }
          ]
        }
      ]
    },
    "8003060_Handling": {
      "fileName": "8003060_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler String",
              "variableName": "CurrentPhase",
              "value": "Common_SequenceThree_Phase01"
            },
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "option": "UseSequenceSkill",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Use Sequence Ability Option"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Sequence Ability Use Value",
                  "valueCheck": 1
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}