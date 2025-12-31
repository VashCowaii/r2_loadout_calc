const configAbility = {
  "fileName": "RuanMei_RuanMei_TechniqueInLevel",
  "abilityType": "Technique",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "RuanMei_Maze_Modifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "RuanMei_Maze_Modifier",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Update Ability Properties",
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Multiply(by 0 if undefined)"
                }
              ]
            },
            {
              "name": "Inject Extra-Turn",
              "actionTag": null,
              "skillType": "ControlSkill02",
              "forceAction": true,
              "afterInjection": [],
              "runsAfterBattleEnd": true
            }
          ],
          "priorityLevel": -55
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}