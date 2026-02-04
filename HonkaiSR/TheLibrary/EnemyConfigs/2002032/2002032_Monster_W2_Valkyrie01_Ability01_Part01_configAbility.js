const configAbility = {
  "fileName": "2002032_Monster_W2_Valkyrie01_Ability01_Part01",
  "childAbilityList": [
    "2002032_Monster_W2_Valkyrie01_Ability01_Part01",
    "2002032_Monster_W2_Valkyrie01_Ability01_Part02",
    "2002032_Monster_W2_Valkyrie01_Ability01_Camera"
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
      "ability": "Monster_W2_Valkyrie01_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}