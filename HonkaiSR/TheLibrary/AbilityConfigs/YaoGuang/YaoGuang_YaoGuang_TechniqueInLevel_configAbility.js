const configAbility = {
  "fileName": "YaoGuang_YaoGuang_TechniqueInLevel",
  "childAbilityList": [
    "YaoGuang_YaoGuang_TechniqueInLevel"
  ],
  "skillTrigger": "SkillMaze",
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
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-645397461\">YaoGuang_TechniqueUsage</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-645397461\">YaoGuang_TechniqueUsage</a>",
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
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}