const configAbility = {
  "fileName": "2012010_Monster_W2_Mecha02_AbilityP01_Initiate",
  "childAbilityList": [
    "2012010_Monster_W2_Mecha02_AbilityP01_Initiate",
    "2012010_Monster_W2_Mecha02_AbilityP01_Insert"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1333978286\">Enemy_W2_Mecha02_Initiate</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "W2_Mecha02_00_BoomTimes"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1333978286\">Enemy_W2_Mecha02_Initiate</a>",
      "modifierFlags": [
        "Deathrattle",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "silent": true
            },
            {
              "name": "Mark Entity For Immediate Death"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W2_Mecha02_AbilityP01_Insert",
              "priorityTag": "MonsterDeathRattle",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}