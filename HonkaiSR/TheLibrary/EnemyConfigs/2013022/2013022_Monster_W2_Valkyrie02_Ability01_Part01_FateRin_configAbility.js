const configAbility = {
  "fileName": "2013022_Monster_W2_Valkyrie02_Ability01_Part01_FateRin",
  "childAbilityList": [
    "2013022_Monster_W2_Valkyrie02_Ability01_Part01_FateRin",
    "2013022_Monster_W2_Valkyrie02_Ability01_Part02_FateRin",
    "2013022_Monster_W2_Valkyrie02_Ability01_Camera"
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
      "ability": "Monster_W2_Valkyrie02_Ability01_Part02_FateRin",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}