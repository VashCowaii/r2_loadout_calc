const configAbility = {
  "fileName": "Bladev0_Ren_Ability02_Part01",
  "childAbilityList": [
    "Bladev0_Ren_Ability02_Camera",
    "Bladev0_Ren_Ability02_Part01",
    "Bladev0_Ren_Ability02_Part02",
    "Bladev0_Ren_Bonus",
    "Bladev0_Ren_Bonus_Camera"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Ren_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}