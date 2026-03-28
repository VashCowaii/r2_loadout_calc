const configAbility = {
  "fileName": "3002022_Monster_W1_Mecha01_03_Ability02_Part01",
  "childAbilityList": [
    "3002022_Monster_W1_Mecha01_03_Ability02_Part01",
    "3002022_Monster_W1_Mecha01_03_Ability02_Part02",
    "3002022_Monster_W1_Mecha01_03_Ability02_Camera"
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
      "ability": "Monster_W1_Mecha01_03_Ability02_Part02",
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