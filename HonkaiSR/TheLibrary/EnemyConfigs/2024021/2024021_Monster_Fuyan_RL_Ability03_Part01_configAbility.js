const configAbility = {
  "fileName": "2024021_Monster_Fuyan_RL_Ability03_Part01",
  "childAbilityList": [
    "2024021_Monster_Fuyan_RL_Ability03_Part01",
    "2024021_Monster_Fuyan_RL_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_Fuyan_RL_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}