const configAbility = {
  "fileName": "4015021_Monster_W4_DawnsEye_01_MainStoryUseBE",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-633741031\">Enemy_W4_DawnsEye_01_HyacineStun</a>"
    },
    {
      "name": "Inject Ability Use",
      "condition": {
        "name": "Insert Ability Condition",
        "type": "AbilityOwnerInsertUnusedCount",
        "typeValue": 1
      },
      "abilityName": "MissionBattleEvent60024_Ability03_Insert_Part01",
      "abilitySource": {
        "name": "Add Target by Unique Identifier",
        "identifier": "HealBattleEvent"
      },
      "priorityTag": "LevelPerformMonster",
      "canHitNonTargets": true,
      "allowAbilityTriggers": false
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}