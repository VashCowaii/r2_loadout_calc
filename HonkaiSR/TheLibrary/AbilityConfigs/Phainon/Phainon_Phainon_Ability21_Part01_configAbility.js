const configAbility = {
  "fileName": "Phainon_Phainon_Ability21_Part01",
  "childAbilityList": [
    "Phainon_Phainon_Ability21_Part01",
    "Phainon_Phainon_Ability21_Part02",
    "Phainon_Phainon_Ability21_Camera",
    "Phainon_Phainon_Ability21_Insert_Part01",
    "Phainon_Phainon_Ability21_Insert_Part02",
    "Phainon_Phainon_Ability21_Insert_Camera"
  ],
  "skillTrigger": "Skill21",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": [
    10,
    5,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Phainon_Ability21_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}