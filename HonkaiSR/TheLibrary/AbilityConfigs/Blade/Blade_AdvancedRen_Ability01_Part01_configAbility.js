const configAbility = {
  "fileName": "Blade_AdvancedRen_Ability01_Part01",
  "childAbilityList": [
    "Blade_Ren_Ability01_Camera",
    "Blade_AdvancedRen_Ability01_Part01",
    "Blade_AdvancedRen_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": 20,
  "toughnessList": [
    10,
    0,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "AdvancedRen_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}