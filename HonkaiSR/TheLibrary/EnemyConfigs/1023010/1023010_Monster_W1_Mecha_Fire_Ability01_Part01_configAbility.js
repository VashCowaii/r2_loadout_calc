const configAbility = {
  "fileName": "1023010_Monster_W1_Mecha_Fire_Ability01_Part01",
  "childAbilityList": [
    "1023010_Monster_W1_Mecha_Fire_Ability01_Camera",
    "1023010_Monster_W1_Mecha_Fire_Ability01_Part01",
    "1023010_Monster_W1_Mecha_Fire_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
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
      "ability": "Monster_W1_Mecha_Fire_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}