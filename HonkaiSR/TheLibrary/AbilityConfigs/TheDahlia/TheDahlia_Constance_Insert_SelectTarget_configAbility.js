const configAbility = {
  "fileName": "TheDahlia_Constance_Insert_SelectTarget",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Enemies Still Alive",
        "target": "Caster"
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "inherentTarget": "All Hostile Entities (AOE)",
          "ability": "Constance_Insert_Part01",
          "isTrigger": true
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "_M_Constance_InsertCheck"
        }
      ]
    }
  ],
  "onAbort": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "_M_Constance_InsertCheck"
    }
  ],
  "references": []
}