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
      "modifier": "Monster_W1_SvarogPart_CountDown[<span class=\"descriptionNumberColor\">Overload Countdown</span>]",
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
      "modifier": "Monster_W1_SvarogPart_Break"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W1_SvarogPart_Die"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W1_SvarogPart_BattleScore1"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_SvarogPart_Die",
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
              "modifier": "Monster_W1_SvarogPart_CD",
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
      "for": "Monster_W1_SvarogPart_Break",
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