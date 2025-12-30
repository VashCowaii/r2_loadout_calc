const configAbility = {
  "fileName": "Seele_Seele_Eidolon6",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Seele_Eidolon6"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Seele_Eidolon6",
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "All Hostile Entities (AOE)",
              "modifier": "Seele_Eidolon6_Flag[<span class=\"descriptionNumberColor\">Butterfly Flurry</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Attack End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Action Holder Is",
                "target": "Caster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Seele_Rank6_Listen",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Seele_Rank6_Listen",
                  "value": 5
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