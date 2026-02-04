const configAbility = {
  "fileName": "Luka_Luka_Ability11_Part01",
  "childAbilityList": [
    "Luka_Luka_Ability11_Part01",
    "Luka_Luka_Ability11_Part02",
    "Luka_Luka_Ability11_End_Camera",
    "Luka_Luka_Ability11_Camera",
    "Luka_Luka_Ability11_Loop_Camera",
    "Luka_Luka_Ability11_Loop2_Camera"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Basic ATK",
  "energy": 20,
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
      "ability": "Luka_Ability11_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}