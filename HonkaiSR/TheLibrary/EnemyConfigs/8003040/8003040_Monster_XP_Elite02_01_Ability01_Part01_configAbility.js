const configAbility = {
  "fileName": "8003040_Monster_XP_Elite02_01_Ability01_Part01",
  "childAbilityList": [
    "8003040_Monster_XP_Elite02_01_Ability01_Camera",
    "8003040_Monster_XP_Elite02_01_Ability01_Part01",
    "8003040_Monster_XP_Elite02_01_Ability01_Part02",
    "8003040_Monster_XP_Elite02_01_AbilityP01_Camera",
    "8003040_Monster_XP_Elite02_01_AbilityP01_Part01",
    "8003040_Monster_XP_Elite02_01_AbilityP01_Part02",
    "8003040_Monster_XP_Elite02_01_AbilityP02_Camera",
    "8003040_Monster_XP_Elite02_01_AbilityP02_Part01"
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
      "ability": "Monster_XP_Elite02_01_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}