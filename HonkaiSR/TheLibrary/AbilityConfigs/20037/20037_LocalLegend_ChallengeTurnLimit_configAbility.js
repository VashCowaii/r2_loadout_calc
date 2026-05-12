const configAbility = {
  "fileName": "20037_LocalLegend_ChallengeTurnLimit",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "scope": "TargetEntity",
      "variableName": "_MonsterChangeCnt"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "scope": "TargetEntity",
      "variableName": "_MonsterChangeCnt02"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1170521213\">LocalLegend_LevelEntity_Modifier</a>",
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1183129629\">LocalLegend_ChallengeTurnLimit_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1170521213\">LocalLegend_LevelEntity_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Leave Battle"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1183129629\">LocalLegend_ChallengeTurnLimit_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle"
        }
      ]
    }
  ]
}