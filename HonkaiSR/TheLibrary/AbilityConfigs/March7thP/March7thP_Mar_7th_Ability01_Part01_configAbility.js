const configAbility = {
  "fileName": "March7thP_Mar_7th_Ability01_Part01",
  "childAbilityList": [
    "March7thP_Mar_7th_Ability01_Part01",
    "March7thP_Mar_7th_Ability01_Part02",
    "March7thP_Mar_7th_Ability01_Camera"
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
      "ability": "Mar_7th_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}