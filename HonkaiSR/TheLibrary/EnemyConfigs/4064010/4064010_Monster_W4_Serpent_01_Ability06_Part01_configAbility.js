const configAbility = {
  "fileName": "4064010_Monster_W4_Serpent_01_Ability06_Part01",
  "childAbilityList": [
    "4064010_Monster_W4_Serpent_01_Ability06_Camera",
    "4064010_Monster_W4_Serpent_01_Ability06_Part01",
    "4064010_Monster_W4_Serpent_01_Ability06_Part02"
  ],
  "skillTrigger": "Skill06",
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
      "ability": "Monster_W4_Serpent_01_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    }
  ],
  "references": []
}