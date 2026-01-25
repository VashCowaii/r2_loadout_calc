const configAbility = {
  "fileName": "LittleIca_Servant_HyacineServant_BattleCry",
  "childAbilityList": [
    "LittleIca_Servant_HyacineServant_BattleCry"
  ],
  "skillTrigger": "SkillP03",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_HyacineServant_BattleCry"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Memosprite_HyacineServant_BattleCry",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "_FirstTimeSummon",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "value": {
                    "operator": "Variables[0] (15) || Variables[1] (30) || ADD || RETURN",
                    "displayLines": "(15 + 30)",
                    "constants": [],
                    "variables": [
                      15,
                      30
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variableName": "_FirstTimeSummon",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "value": {
                    "operator": "Variables[0] (15) || RETURN",
                    "displayLines": "15",
                    "constants": [],
                    "variables": [
                      15
                    ]
                  },
                  "isFixed": "* ERR"
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