const configAbility = {
  "fileName": "4015020_Monster_W4_DawnsEye_01_MainStoryUnlockBE",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Character ID",
              "ID": 1409,
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterName": "Hyacine",
              "invertCondition": true
            }
          }
        ]
      },
      "modifier": "<a class=\"gModGreen\" id=\"-508563078\">Enemy_W4_DawnsEye_01_MainStoryDisableAction</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Character ID",
              "ID": 1409,
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterName": "Hyacine"
            }
          }
        ]
      },
      "modifier": "<a class=\"gModGreen\" id=\"-633741031\">Enemy_W4_DawnsEye_01_HyacineStun</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-539111731\">Enemy_W4_DawnsEye_BEAdd</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1194820093\">Enemy_W4_DawnsEye_HyacineLockHP</a>"
    },
    {
      "name": "Add Battle Event",
      "teamName": "Player Team",
      "eventID": 60029,
      "variables": {
        "BaseAttack": {
          "operator": "Variables[0] (BaseAttack) || RETURN",
          "displayLines": "BaseAttack",
          "constants": [],
          "variables": [
            "BaseAttack"
          ]
        }
      },
      "whenCreated": [
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": -200,
          "isFixed": "* ERR"
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "HealBattleEvent",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": 100,
          "isFixed": "* ERR",
          "isSetToValue": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1028939151\">Enemy_W4_DawnsEye_StateGroupChange</a>"
        }
      ]
    },
    {
      "name": "Inject Ability Use",
      "condition": {
        "name": "Insert Ability Condition",
        "type": "AbilityOwnerInsertUnusedCount",
        "typeValue": 1
      },
      "abilityName": "Monster_W4_DawnsEye_01_MainStoryUseBE",
      "abilitySource": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "abilityTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "priorityTag": "LevelPerformMonster",
      "canHitNonTargets": true,
      "allowAbilityTriggers": false
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1028939151\">Enemy_W4_DawnsEye_StateGroupChange</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}