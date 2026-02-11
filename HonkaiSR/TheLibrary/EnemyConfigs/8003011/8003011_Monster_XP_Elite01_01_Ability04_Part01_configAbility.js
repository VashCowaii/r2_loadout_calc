const configAbility = {
  "fileName": "8003011_Monster_XP_Elite01_01_Ability04_Part01",
  "childAbilityList": [
    "8003011_Monster_XP_Elite01_01_Ability04_Camera",
    "8003011_Monster_XP_Elite01_01_Ability04_Part01",
    "8003011_Monster_XP_Elite01_01_Ability04_Part02"
  ],
  "skillTrigger": "Skill04",
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
      "ability": "Monster_XP_Elite01_01_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}