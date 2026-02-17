const configAbility = {
  "fileName": "3002022_Monster_W1_Mecha01_03_Ultimate_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "ability": "Monster_W1_Mecha01_03_Ultimate_Part01",
      "isTrigger": true
    },
    {
      "name": "Skill Points Modification",
      "adjustmentValue": {
        "operator": "Constants[0] (0) || Variables[0] ({[Skill08[0]]}) || SUB || RETURN",
        "displayLines": "(0 - {[Skill08[0]]})",
        "constants": [
          0
        ],
        "variables": [
          "{[Skill08[0]]}"
        ]
      },
      "adjustmentType": "+"
    }
  ],
  "tag": "DOT",
  "references": []
}