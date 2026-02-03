const configAbility = {
  "fileName": "8015011_Monster_AML_Boss_Die_Camera",
  "skillTrigger": "PassiveSkill05",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_AML_Boss_Die_Camera"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_Die_Camera",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_AML_Boss_Die_Camera"
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