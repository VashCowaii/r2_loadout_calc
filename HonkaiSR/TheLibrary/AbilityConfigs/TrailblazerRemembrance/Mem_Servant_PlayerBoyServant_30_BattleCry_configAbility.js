const configAbility = {
  "fileName": "Mem_Servant_PlayerBoyServant_30_BattleCry",
  "childAbilityList": [
    "Mem_Servant_PlayerBoyServant_30_BattleCry"
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
      "modifier": "<a class=\"gModGreen\" id=\"1428217171\">Memosprite_PlayerBoyServant_30_BattleCry</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1428217171\">Memosprite_PlayerBoyServant_30_BattleCry</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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