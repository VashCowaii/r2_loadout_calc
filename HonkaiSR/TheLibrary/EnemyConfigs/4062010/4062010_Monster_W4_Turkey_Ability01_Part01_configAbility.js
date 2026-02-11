const configAbility = {
  "fileName": "4062010_Monster_W4_Turkey_Ability01_Part01",
  "childAbilityList": [
    "4062010_Monster_W4_Turkey_Ability01_Part01",
    "4062010_Monster_W4_Turkey_Ability01_Part02",
    "4062010_Monster_W4_Turkey_Ability01_Camera",
    "4062010_Monster_W4_Turkey_Ability01_Part01_Assist_00",
    "4062010_Monster_W4_Turkey_Ability01_Part01_Assist_01"
  ],
  "skillTrigger": "Skill01",
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
      "ability": "Monster_W4_Turkey_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}