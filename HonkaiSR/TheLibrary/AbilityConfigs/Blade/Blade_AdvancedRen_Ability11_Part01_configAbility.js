const configAbility = {
  "fileName": "Blade_AdvancedRen_Ability11_Part01",
  "childAbilityList": [
    "Blade_AdvancedRen_Ability11_Part01",
    "Blade_AdvancedRen_Ability11_Part02",
    "Blade_Ren_Ability11_Camera"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Basic ATK",
  "energy": 30,
  "toughnessList": [
    20,
    0,
    10
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "AdvancedRen_Ability11_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}