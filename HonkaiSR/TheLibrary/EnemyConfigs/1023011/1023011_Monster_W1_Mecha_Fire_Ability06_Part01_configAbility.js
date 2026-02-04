const configAbility = {
  "fileName": "1023011_Monster_W1_Mecha_Fire_Ability06_Part01",
  "childAbilityList": [
    "1023011_Monster_W1_Mecha_Fire_Ability06_Camera",
    "1023011_Monster_W1_Mecha_Fire_Ability06_Part01",
    "1023011_Monster_W1_Mecha_Fire_Ability06_Part02"
  ],
  "skillTrigger": "Skill06",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W1_Mecha_Fire_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}