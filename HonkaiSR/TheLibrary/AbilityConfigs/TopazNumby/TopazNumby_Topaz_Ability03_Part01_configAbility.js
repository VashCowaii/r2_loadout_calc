const configAbility = {
  "fileName": "TopazNumby_Topaz_Ability03_Part01",
  "childAbilityList": [
    "TopazNumby_Topaz_Ability03_Camera",
    "TopazNumby_Topaz_Ability03_EnterReady",
    "TopazNumby_Topaz_Ability03_Part01",
    "TopazNumby_Topaz_Ability03_Part02",
    "TopazNumby_Klara_Ability03_EnterReady",
    "TopazNumby_Klara_Ability03_Part01"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
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
      "ability": "Topaz_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}