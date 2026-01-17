const configAbility = {
  "fileName": "DrRatio_Dr_Ratio_Ability01_Part01",
  "childAbilityList": [
    "DrRatio_Dr_Ratio_Ability01_Camera",
    "DrRatio_Dr_Ratio_Ability01_Part01",
    "DrRatio_Dr_Ratio_Ability01_Part02"
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
      "ability": "Dr_Ratio_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}