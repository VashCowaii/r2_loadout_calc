const configAbility = {
  "fileName": "4015011_Monster_W4_DawnsEye_PassiveAbility_InsertMainStory",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "silent": true
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
    },
    {
      "name": "Inject Ability Use",
      "abilityName": "Monster_W4_DawnsEye_PassiveAbility_Insert",
      "priorityTag": "EnemyPhaseChange",
      "ownerState": "Mask_AliveOrLimbo",
      "targetState": "Mask_AliveOrLimbo",
      "canHitNonTargets": true,
      "showInActionOrder": true,
      "allowAbilityTriggers": false
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}