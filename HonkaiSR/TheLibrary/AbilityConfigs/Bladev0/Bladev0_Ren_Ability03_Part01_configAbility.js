const configAbility = {
  "fileName": "Bladev0_Ren_Ability03_Part01",
  "childAbilityList": [
    "Bladev0_Ren_Ability03_Camera",
    "Bladev0_Ren_Ability03_EnterReady",
    "Bladev0_Ren_Ability03_Part01",
    "Bladev0_Ren_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    20,
    0,
    20
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Ren_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}