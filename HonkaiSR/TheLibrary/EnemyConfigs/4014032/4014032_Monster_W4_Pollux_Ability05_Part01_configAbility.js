const configAbility = {
  "fileName": "4014032_Monster_W4_Pollux_Ability05_Part01",
  "childAbilityList": [
    "4014032_Monster_W4_Pollux_Ability05_Part01",
    "4014032_Monster_W4_Pollux_Ability05_Part02",
    "4014032_Monster_W4_Pollux_Ability05_Camera"
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
      "ability": "Monster_W4_Pollux_Ability05_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}