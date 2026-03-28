const configAbility = {
  "fileName": "4032030_Monster_W2_Valkyrie01_02_Ability02_Part01",
  "childAbilityList": [
    "4032030_Monster_W2_Valkyrie01_02_Ability02_Part01",
    "4032030_Monster_W2_Valkyrie01_02_Ability02_Part02",
    "4032030_Monster_W2_Valkyrie01_02_Ability02_Camera"
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
      "ability": "Monster_W2_Valkyrie01_02_Ability02_Part02",
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