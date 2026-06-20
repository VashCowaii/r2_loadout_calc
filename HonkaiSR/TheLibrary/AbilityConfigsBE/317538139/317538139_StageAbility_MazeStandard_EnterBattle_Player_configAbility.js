const configAbility = {
  "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_Player",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1551694313\">StageAbility_MazeStandard_EnterBattle_Player_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1551694313\">StageAbility_MazeStandard_EnterBattle_Player_Modifier</a>",
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
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "multiBase": 0.5
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}