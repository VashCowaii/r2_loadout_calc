const configAbility = {
  "fileName": "8003041_Monster_XP_Elite02_01_Ability06_Part01",
  "childAbilityList": [
    "8003041_Monster_XP_Elite02_01_Ability06_Camera",
    "8003041_Monster_XP_Elite02_01_Ability06_Part01",
    "8003041_Monster_XP_Elite02_01_Ability06_Part02"
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
      "ability": "Monster_XP_Elite02_01_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}