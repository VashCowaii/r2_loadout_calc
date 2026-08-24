const configAbility = {
  "fileName": "8015050_Monster_W5_AsatPramad_Ability08_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Joint-Attack Ability",
      "abilityList": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ability": "Monster_W5_AsatPramad_Ability08_Assist_00"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "abortFlags": [
            "STAT_CTRL",
            "Break",
            "DisableAction"
          ],
          "ability": "Monster_W5_AsatPramad_Ability08_Assist_01"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 1}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "abortFlags": [
            "STAT_CTRL",
            "Break",
            "DisableAction"
          ],
          "ability": "Monster_W5_AsatPramad_Ability08_Assist_01"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Asat Pramad: 0}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
      },
      "passed": [
        {
          "name": "Inject Ability Use",
          "condition": {
            "name": "Insert Ability Condition",
            "type": "AbilityOwnerInsertUnusedCount",
            "typeValue": 1
          },
          "abilityName": "Monster_W5_AsatPramad_MainSpecialWin",
          "abilityTarget": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "priorityTag": "STAGE_Enemy",
          "allowAbilityTriggers": false
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}