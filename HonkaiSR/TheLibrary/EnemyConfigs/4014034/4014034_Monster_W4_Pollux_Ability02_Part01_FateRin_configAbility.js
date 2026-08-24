const configAbility = {
  "fileName": "4014034_Monster_W4_Pollux_Ability02_Part01_FateRin",
  "childAbilityList": [
    "4014034_Monster_W4_Pollux_Ability02_Part01_FateRin",
    "4014034_Monster_W4_Pollux_Ability02_Part02_FateRin",
    "4014034_Monster_W4_Pollux_Ability02_Camera"
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
      "ability": "Monster_W4_Pollux_Ability02_Part02_FateRin",
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