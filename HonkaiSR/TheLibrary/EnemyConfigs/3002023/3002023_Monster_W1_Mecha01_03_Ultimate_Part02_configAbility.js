const configAbility = {
  "fileName": "3002023_Monster_W1_Mecha01_03_Ultimate_Part02",
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
        "displayLines": "(0 - {[Skill08[0]]})"
      },
      "adjustmentType": "+"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "tag": "DOT",
  "references": []
}