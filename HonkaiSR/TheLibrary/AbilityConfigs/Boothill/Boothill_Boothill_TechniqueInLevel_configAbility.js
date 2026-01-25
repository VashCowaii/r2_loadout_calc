const configAbility = {
  "fileName": "Boothill_Boothill_TechniqueInLevel",
  "childAbilityList": [
    "Boothill_Boothill_TechniqueInLevel"
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
      "modifier": "M_Boothill_Maze"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Boothill_TechniqueUsage_Ability02[<span class=\"descriptionNumberColor\">3-9× Smile</span>]",
      "description": "The first time the Skill is used in a battle, applies the same Physical Weakness to one designated enemy target as the one induced by the Ultimate, lasting for <span class=\"descriptionNumberColor\">MDF_Lifetime</span> turn(s).",
      "type": "Other",
      "statusName": "3-9× Smile",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Skill",
        "addedDisplayWeakness": {
          "DamageType": "Physical"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "M_Boothill_Maze",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Boothill_TechniqueUsage_Ability02[<span class=\"descriptionNumberColor\">3-9× Smile</span>]",
                  "valuePerStack": {
                    "MDF_Lifetime": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}