const configAbility = {
  "fileName": "8011020_Monster_AML_Minion01_01_Ability01_Part01",
  "childAbilityList": [
    "8011020_Monster_AML_Minion01_01_Ability01_Part01",
    "8011020_Monster_AML_Minion01_01_Ability01_Part02",
    "8011020_Monster_AML_Minion01_01_Ability01_Camera"
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
      "ability": "Monster_AML_Minion01_01_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}