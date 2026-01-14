const configAbility = {
  "fileName": "Mem_Servant_PlayerBoyServant_30_BattleCry",
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
      "to": "Caster",
      "modifier": "Memosprite_PlayerBoyServant_30_BattleCry"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Memosprite_PlayerBoyServant_30_BattleCry",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": "Caster",
              "variableName": "CurEnergy",
              "value": {
                "operator": "Variables[0] (0.5) || Constants[0] (100) || MUL || RETURN",
                "displayLines": "(0.5 * 100)",
                "constants": [
                  100
                ],
                "variables": [
                  0.5
                ]
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