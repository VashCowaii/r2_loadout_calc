const configAbility = {
  "fileName": "4014034_Monster_W4_Pollux_Ability05_Part01_FateRin",
  "childAbilityList": [
    "4014034_Monster_W4_Pollux_Ability05_Part01_FateRin",
    "4014034_Monster_W4_Pollux_Ability05_Part02_FateRin",
    "4014034_Monster_W4_Pollux_Ability05_Camera"
  ],
  "skillTrigger": "Skill05",
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
      "ability": "Monster_W4_Pollux_Ability05_Part02_FateRin",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}