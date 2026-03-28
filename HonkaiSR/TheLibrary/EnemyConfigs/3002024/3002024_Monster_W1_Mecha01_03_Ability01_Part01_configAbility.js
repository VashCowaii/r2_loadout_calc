const configAbility = {
  "fileName": "3002024_Monster_W1_Mecha01_03_Ability01_Part01",
  "childAbilityList": [
    "3002024_Monster_W1_Mecha01_03_Ability01_Part01",
    "3002024_Monster_W1_Mecha01_03_Ability01_Part02",
    "3002024_Monster_W1_Mecha01_03_Ability01_Camera"
  ],
  "skillTrigger": "Skill01",
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
      "ability": "Monster_W1_Mecha01_03_Ability01_Part02",
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