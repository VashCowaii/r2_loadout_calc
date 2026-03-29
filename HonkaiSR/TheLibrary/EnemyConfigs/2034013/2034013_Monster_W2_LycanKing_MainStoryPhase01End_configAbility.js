const configAbility = {
  "fileName": "2034013_Monster_W2_LycanKing_MainStoryPhase01End",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "flagName": "Break"
      },
      "passed": [
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          }
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "flagName": "STAT_CTRL"
      },
      "passed": [
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "flagNames": []
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1344172938\">Enemy_W2_LycanKing_Part1End</a>"
    },
    {
      "name": "Inject Ability Use",
      "abilityName": "Monster_W2_LycanKing_Ability05_Insert_Part01",
      "abilitySource": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "abilityTarget": {
        "name": "Target Name",
        "target": "{{Enemies by Aggro}}"
      },
      "priorityTag": "MonsterChangeState",
      "canHitNonTargets": true,
      "showInActionOrder": true,
      "abortFlags": [
        "STAT_CTRL",
        "Break",
        "DisableAction"
      ],
      "allowAbilityTriggers": false
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-571680589\">Enemy_W2_LycanKing_HPListener</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1344172938\">Enemy_W2_LycanKing_Part1End</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.0009999999
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}