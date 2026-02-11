const configAbility = {
  "fileName": "8013012_Monster_AML_Elite01_Ability01_Part01",
  "childAbilityList": [
    "8013012_Monster_AML_Elite01_Ability01_Camera",
    "8013012_Monster_AML_Elite01_Ability01_Part01",
    "8013012_Monster_AML_Elite01_Ability01_Part02"
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
      "ability": "Monster_AML_Elite01_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}