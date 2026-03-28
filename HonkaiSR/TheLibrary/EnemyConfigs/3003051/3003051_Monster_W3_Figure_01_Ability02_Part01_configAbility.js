const configAbility = {
  "fileName": "3003051_Monster_W3_Figure_01_Ability02_Part01",
  "childAbilityList": [
    "3003051_Monster_W3_Figure_01_Ability02_Camera",
    "3003051_Monster_W3_Figure_01_Ability02_Part01",
    "3003051_Monster_W3_Figure_01_Ability02_Part02"
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
      "ability": "Monster_W3_Figure_01_Ability02_Part02",
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