const configAbility = {
  "fileName": "2024021_Monster_Fuyan_RL_Ability01_Part01",
  "childAbilityList": [
    "2024021_Monster_Fuyan_RL_Ability01_Part01",
    "2024021_Monster_Fuyan_RL_Ability01_Part02",
    "2024021_Monster_Fuyan_RL_Ability01_Camera"
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
      "ability": "Monster_Fuyan_RL_Ability01_Part02",
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