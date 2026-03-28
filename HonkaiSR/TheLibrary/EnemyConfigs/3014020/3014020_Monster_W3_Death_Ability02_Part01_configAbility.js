const configAbility = {
  "fileName": "3014020_Monster_W3_Death_Ability02_Part01",
  "childAbilityList": [
    "3014020_Monster_W3_Death_Ability02_Part01",
    "3014020_Monster_W3_Death_Ability02_Part02",
    "3014020_Monster_W3_Death_Ability02_Camera"
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
      "ability": "Monster_W3_Death_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}