const configAbility = {
  "fileName": "8015040_Monster_W5_AsatPramad_MainStory02ChangePhaseTo02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": [
          "Break"
        ]
      },
      "passed": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ]
    },
    {
      "name": "Inject Ability Use",
      "abilityName": "Monster_W5_AsatPramad_PassiveAbility_Part01toPhase02",
      "priorityTag": "EnemyPhaseChange",
      "ownerState": "Mask_AliveOrLimbo",
      "targetState": "Mask_AliveOrLimbo",
      "showInActionOrder": true,
      "allowAbilityTriggers": false
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}