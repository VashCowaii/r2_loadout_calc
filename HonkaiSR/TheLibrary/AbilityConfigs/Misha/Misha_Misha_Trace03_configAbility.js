const configAbility = {
  "fileName": "Misha_Misha_Trace03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Misha_Tree03"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Misha_Tree03",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamDark"
                  },
                  {
                    "name": "Has Flag",
                    "target": "Use Prior Target(s) Defined",
                    "flagName": "STAT_CTRL_Frozen"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.3) || RETURN",
                    "displayLines": "0.3",
                    "constants": [],
                    "variables": [
                      0.3
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}