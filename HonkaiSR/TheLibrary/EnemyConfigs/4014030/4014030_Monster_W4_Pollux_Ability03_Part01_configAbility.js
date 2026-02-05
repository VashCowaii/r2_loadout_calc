const configAbility = {
  "fileName": "4014030_Monster_W4_Pollux_Ability03_Part01",
  "childAbilityList": [
    "4014030_Monster_W4_Pollux_Ability03_Part01",
    "4014030_Monster_W4_Pollux_Ability03_Part02",
    "4014030_Monster_W4_Pollux_Ability03_Camera"
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
      "ability": "Monster_W4_Pollux_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}