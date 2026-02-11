const configAbility = {
  "fileName": "8015021_Monster_W2_Huanlong_Part3Start_Camera1_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Inject Ability Use",
      "abilityName": "Monster_W2_Huanlong_AbilityP12_Part01",
      "priorityTag": "MonsterChangePhase",
      "ownerState": "Mask_AliveOrLimbo",
      "targetState": "Mask_AliveOrLimbo",
      "canHitNonTargets": true,
      "showInActionOrder": true,
      "allowAbilityTriggers": false
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1084194912\">Monster_W2_Huanlong_Part3Start</a>"
    }
  ],
  "references": []
}