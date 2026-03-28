const configAbility = {
  "fileName": "4035010_Monster_W4_IronTombCore_Ability02_Part01",
  "childAbilityList": [
    "4035010_Monster_W4_IronTombCore_Ability02_Part01",
    "4035010_Monster_W4_IronTombCore_Ability02_Part02",
    "4035010_Monster_W4_IronTombCore_Ability02_Camera"
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
      "ability": "Monster_W4_IronTombCore_Ability02_Part02",
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