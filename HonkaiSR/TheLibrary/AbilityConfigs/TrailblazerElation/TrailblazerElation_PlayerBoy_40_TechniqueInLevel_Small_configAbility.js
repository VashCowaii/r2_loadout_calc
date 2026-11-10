const configAbility = {
  "fileName": "TrailblazerElation_PlayerBoy_40_TechniqueInLevel_Small",
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
      "modifier": "<a class=\"gModGreen\" id=\"25490076\">StageAbility_Maze_PlayerBoy_40_Modifier_Small</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__25490076\">StageAbility_Maze_PlayerBoy_40_Modifier_Small</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1521577078\">PlayerBoy_40_Maze_ElationRatio</a>[<span class=\"descriptionNumberColor\">We Are So Back!</span>]",
              "duration": {
                "displayLines": "3"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.2"
                }
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}