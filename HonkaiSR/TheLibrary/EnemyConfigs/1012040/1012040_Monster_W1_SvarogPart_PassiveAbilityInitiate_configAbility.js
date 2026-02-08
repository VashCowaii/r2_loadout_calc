const configAbility = {
  "fileName": "1012040_Monster_W1_SvarogPart_PassiveAbilityInitiate",
  "skillTrigger": "PassiveSkillInitiate",
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
      "modifier": "<a class=\"gModGreen\" id=\"-770745937\">Monster_W1_SvarogPart_CountDown</a>[<span class=\"descriptionNumberColor\">Overload Countdown</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "({[Skill06[0]]} + 1)",
        "constants": [
          1
        ],
        "variables": [
          "{[Skill06[0]]}"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2122508331\">Monster_W1_SvarogPart_Break</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"272812978\">Monster_W1_SvarogPart_Die</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"968585055\">Monster_W1_SvarogPart_BattleScore1</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__272812978\">Monster_W1_SvarogPart_Die</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2115356635\">Monster_W1_SvarogPart_CD</a>",
              "duration": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2122508331\">Monster_W1_SvarogPart_Break</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Delay",
              "multiAdd": 0.5
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}