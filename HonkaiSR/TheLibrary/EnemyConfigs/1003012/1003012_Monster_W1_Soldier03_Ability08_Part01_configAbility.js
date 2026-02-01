const configAbility = {
  "fileName": "1003012_Monster_W1_Soldier03_Ability08_Part01",
  "childAbilityList": [
    "1003012_Monster_W1_Soldier03_Ability08_Camera",
    "1003012_Monster_W1_Soldier03_Ability08_Part01",
    "1003012_Monster_W1_Soldier03_Ability08_Part02"
  ],
  "skillTrigger": "Skill08",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W1_Soldier03_Ability08_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}