const configAbility = {
  "fileName": "3003054_Monster_W3_Figure_01_Ability02_Part01_FateRin",
  "childAbilityList": [
    "3003054_Monster_W3_Figure_01_Ability02_Camera",
    "3003054_Monster_W3_Figure_01_Ability02_Part01_FateRin",
    "3003054_Monster_W3_Figure_01_Ability02_Part02_FateRin"
  ],
  "skillTrigger": "Skill02",
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
      "ability": "Monster_W3_Figure_01_Ability02_Part02_FateRin",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}