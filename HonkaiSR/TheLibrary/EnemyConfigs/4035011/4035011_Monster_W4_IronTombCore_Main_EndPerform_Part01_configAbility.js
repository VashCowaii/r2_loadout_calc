const configAbility = {
  "fileName": "4035011_Monster_W4_IronTombCore_Main_EndPerform_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"144377800\">W4_IronTombCore_RemoveBreakEffect</a>"
    },
    {
      "name": "IF",
      "conditions": "Yapping is over"
    },
    {
      "name": "Inject Ability Use",
      "abilityName": "Monster_W4_IronTombCore_Main_Ability08_Part01",
      "priorityTag": "LevelPerformMonster",
      "ownerState": "Mask_AliveOrLimbo",
      "targetState": "Mask_AliveOrLimbo",
      "canHitNonTargets": true,
      "allowAbilityTriggers": false
    }
  ],
  "references": []
}