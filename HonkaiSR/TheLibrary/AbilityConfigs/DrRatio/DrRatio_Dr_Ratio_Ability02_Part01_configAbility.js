const configAbility = {
  "fileName": "DrRatio_Dr_Ratio_Ability02_Part01",
  "childAbilityList": [
    "DrRatio_Dr_Ratio_Ability02_Camera",
    "DrRatio_Dr_Ratio_Ability02_Part01",
    "DrRatio_Dr_Ratio_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    20,
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
      "ability": "Dr_Ratio_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}