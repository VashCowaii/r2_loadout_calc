const configAbility = {
  "fileName": "2024020_Monster_Fuyan_Ability01_Part01",
  "childAbilityList": [
    "2024020_Monster_Fuyan_Ability01_Part01",
    "2024020_Monster_Fuyan_Ability01_Part02",
    "2024020_Monster_Fuyan_Ability01_Camera"
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
      "ability": "Monster_Fuyan_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{All Team Members}}"
  },
  "references": []
}