const configAbility = {
  "fileName": "8003052_Monster_AML_Elite01_01_Ability03_Part01",
  "childAbilityList": [
    "8003052_Monster_AML_Elite01_01_Ability03_Camera",
    "8003052_Monster_AML_Elite01_01_Ability03_Part01",
    "8003052_Monster_AML_Elite01_01_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_AML_Elite01_01_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}