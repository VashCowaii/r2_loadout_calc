const configAbility = {
  "fileName": "Kafka_Advanced_Kafka_Eidolon2",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Advanced_Kafka_Eidolon2"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Advanced_Kafka_Eidolon2",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "Kafka_Eidolon2_Sub[<span class=\"descriptionNumberColor\">Fortississimo</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Allied Team",
              "modifier": "Kafka_Eidolon2_Sub[<span class=\"descriptionNumberColor\">Fortississimo</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.33) || RETURN",
                  "displayLines": "0.33",
                  "constants": [],
                  "variables": [
                    0.33
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Allied Team",
              "modifier": "Kafka_Eidolon2_Sub[<span class=\"descriptionNumberColor\">Fortississimo</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.33) || RETURN",
                  "displayLines": "0.33",
                  "constants": [],
                  "variables": [
                    0.33
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}