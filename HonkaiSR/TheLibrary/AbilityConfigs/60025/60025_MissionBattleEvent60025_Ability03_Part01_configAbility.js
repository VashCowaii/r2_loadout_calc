const configAbility = {
  "fileName": "60025_MissionBattleEvent60025_Ability03_Part01",
  "childAbilityList": [
    "60025_MissionBattleEvent60025_Ability03_Part01"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    "Show BattleEvent Button",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Character ID",
        "ID": 1408,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": "Phainon"
      },
      "ifTargetFound": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "ability": "Phainon_Ability21_Insert_Part01_MainStory",
          "isTrigger": true
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "whenAdded": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Character ID",
        "ID": 1408,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": "Phainon"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1942635871\">MissionBattleEvent60025_AddAbility</a>"
        }
      ]
    },
    {
      "name": "Automatically use Ultimate",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": 100,
      "isFixed": "* ERR"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1942635871\">MissionBattleEvent60025_AddAbility</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "Phainon_Ability21_Insert_Part01_MainStory"
            },
            {
              "name": "Add Ability",
              "abilityName": "Phainon_Ability21_Insert_Part02_MainStory"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "All Enemy Team"
  }
}