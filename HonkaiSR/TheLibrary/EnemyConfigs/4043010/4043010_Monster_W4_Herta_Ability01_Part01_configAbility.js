const configAbility = {
  "fileName": "4043010_Monster_W4_Herta_Ability01_Part01",
  "childAbilityList": [
    "4043010_Monster_W4_Herta_Ability01_Part01",
    "4043010_Monster_W4_Herta_Ability01_Part02",
    "4043010_Monster_W4_Herta_Ability01_Part01_Insert",
    "4043010_Monster_W4_Herta_Ability01_Part02_Insert",
    "4043010_Monster_W4_Herta_Ability01_Camera"
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
      "ability": "Monster_W4_Herta_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}