const configAbility = {
  "fileName": "3003051_Monster_W3_Figure_01_Ability05_Part01",
  "childAbilityList": [
    "3003051_Monster_W3_Figure_01_Ability05_Camera",
    "3003051_Monster_W3_Figure_01_Ability05_Part01",
    "3003051_Monster_W3_Figure_01_Ability05_Part02"
  ],
  "skillTrigger": "Skill05",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W3_Figure_01_Ability05_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}