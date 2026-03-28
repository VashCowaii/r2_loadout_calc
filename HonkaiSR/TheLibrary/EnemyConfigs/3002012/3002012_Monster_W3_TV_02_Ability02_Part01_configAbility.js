const configAbility = {
  "fileName": "3002012_Monster_W3_TV_02_Ability02_Part01",
  "childAbilityList": [
    "3002012_Monster_W3_TV_02_Ability02_Part01",
    "3002012_Monster_W3_TV_02_Ability02_Part02",
    "3002012_Monster_W3_TV_Ability02_Camera"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W3_TV_02_Ability02_Part02",
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