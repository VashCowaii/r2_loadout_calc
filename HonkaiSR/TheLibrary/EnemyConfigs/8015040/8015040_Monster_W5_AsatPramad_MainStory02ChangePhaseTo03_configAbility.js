const configAbility = {
  "fileName": "8015040_Monster_W5_AsatPramad_MainStory02ChangePhaseTo03",
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
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1822389273\">W5_AsatPramad_Part02ChangeTo01</a>",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Inject Ability Use",
      "abilityName": "Monster_W5_AsatPramad_PassiveAbility_Part02toPhase03",
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