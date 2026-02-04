const configAbility = {
  "fileName": "8001020_WMonster_Element_Slime_01_Ice_Ability01_Part01",
  "childAbilityList": [
    "8001020_WMonster_Element_Slime_01_Ice_Ability01_Part01",
    "8001020_WMonster_Element_Slime_01_Ice_Ability01_Part02"
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
      "ability": "WMonster_Element_Slime_01_Ice_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}