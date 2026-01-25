const configAbility = {
  "fileName": "Aventurine_Aventurine_TechniqueInLevel_01",
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
      "modifier": "Aventurine_Maze_Modifier_01"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Aventurine_Maze_Modifier_01",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Aventurine_Maze_Defence[<span class=\"descriptionNumberColor\">The Red or the Black</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.36) || RETURN",
                  "displayLines": "0.36",
                  "constants": [],
                  "variables": [
                    0.36
                  ]
                }
              }
            },
            "Modifier Deletes Itself"
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}