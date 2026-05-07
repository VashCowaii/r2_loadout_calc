const configAbility = {
  "fileName": "60005_Monster_BattleEvent_W1_Colossus_PassiveAbility01",
  "skillTrigger": "PassiveSkillInitiate",
  "abilityType": "Talent",
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2137008278\">Enemy_BattleEvent_W1_Colossus_BlockDamage</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1765138594\">Monster_BattleEvent_W1_Colossus_Ability08_Show_Modifier</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1397498818\">Monster_BattleEvent_W1_Colossus_Ability08_Show_Modifier_1</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1765138594\">Monster_BattleEvent_W1_Colossus_Ability08_Show_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Skill_UseTime",
              "context": "TargetEntity",
              "value": 1,
              "max": 2
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "Skill_UseTime",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Skill_UseTime",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1397498818\">Monster_BattleEvent_W1_Colossus_Ability08_Show_Modifier_1</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            "Modifier Deletes Itself",
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1397498818\">Monster_BattleEvent_W1_Colossus_Ability08_Show_Modifier_1</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2137008278\">Enemy_BattleEvent_W1_Colossus_BlockDamage</a>",
      "modifierFlags": [
        "BlockDamage"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)"
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}