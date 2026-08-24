const configAbility = {
  "fileName": "5012111_Monster_W5_Limao_Passive",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "UI Display Event",
      "popUpText": "Find a way to make the corrupt thief Furbulitzer turn over a new leaf!"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1484589918\">Monster_W5_Limao_Passive_Insert</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1484589918\">Monster_W5_Limao_Passive_Insert</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W5_Limao_Ability01_Part01_FateRin",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Add Target by Unique Identifier",
                "identifier": "Activity_FateRin_MasterAvatar"
              },
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    }
  ]
}