const configAbility = {
  "fileName": "3014021_Monster_W3_Death_Ability06_Part01",
  "childAbilityList": [
    "3014021_Monster_W3_Death_Ability06_Part01",
    "3014021_Monster_W3_Death_Ability06_Part02",
    "3014021_Monster_W3_Death_Ability06_Camera"
  ],
  "skillTrigger": "Skill06",
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
      "ability": "Monster_W3_Death_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}