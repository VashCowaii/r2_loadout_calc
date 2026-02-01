const configAbility = {
  "fileName": "3024013_Monster_W2_Argenti_Ability09_IF_Part01",
  "childAbilityList": [
    "3024013_Monster_W2_Argenti_Ability09_IF_Part01",
    "3024013_Monster_W2_Argenti_Ability09_IF_Part02",
    "3024013_Monster_W2_Argenti_Ability09_IF_Camera",
    "3024013_Monster_W2_Argenti_Ability09_IF_Insert"
  ],
  "skillTrigger": "Skill09",
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
      "ability": "Monster_W2_Argenti_Ability09_IF_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase0"
    }
  ],
  "references": []
}