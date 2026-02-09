const configAbility = {
  "fileName": "8003030_Monster_XP_Elite02_Ability01_Part01",
  "childAbilityList": [
    "8003030_Monster_XP_Elite02_Ability01_Camera",
    "8003030_Monster_XP_Elite02_Ability01_Part01",
    "8003030_Monster_XP_Elite02_Ability01_Part02"
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
      "ability": "Monster_XP_Elite02_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}