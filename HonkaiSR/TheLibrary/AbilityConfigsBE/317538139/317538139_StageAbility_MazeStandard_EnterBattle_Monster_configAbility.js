const configAbility = {
  "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_Monster",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1904238030\">StageAbility_MazeStandard_EnterBattle_Monster_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1904238030\">StageAbility_MazeStandard_EnterBattle_Monster_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "advanceType": "Set",
                  "add": 2
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}