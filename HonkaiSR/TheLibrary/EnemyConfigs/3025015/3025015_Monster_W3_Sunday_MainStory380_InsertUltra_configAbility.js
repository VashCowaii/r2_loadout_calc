const configAbility = {
  "fileName": "3025015_Monster_W3_Sunday_MainStory380_InsertUltra",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1733765355\">Enemy_W3_Sunday_MainStory380_LockHP</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Gender is",
        "gender": "GENDER_MAN"
      }
    },
    {
      "name": "WAIT FOR",
      "condition": {
        "name": "Has Queued Ult"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"98028781\">Enemy_W3_Sunday_MainStory380_UltraReady</a>"
    }
  ],
  "references": []
}