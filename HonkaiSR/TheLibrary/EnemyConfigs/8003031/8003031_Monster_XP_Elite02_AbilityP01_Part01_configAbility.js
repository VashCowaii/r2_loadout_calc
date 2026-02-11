const configAbility = {
  "fileName": "8003031_Monster_XP_Elite02_AbilityP01_Part01",
  "childAbilityList": [
    "8003031_Monster_XP_Elite02_AbilityP01_Camera",
    "8003031_Monster_XP_Elite02_AbilityP01_Part01",
    "8003031_Monster_XP_Elite02_AbilityP01_Part02"
  ],
  "skillTrigger": "Skill07",
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
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_XP_Elite02_AbilityP01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}