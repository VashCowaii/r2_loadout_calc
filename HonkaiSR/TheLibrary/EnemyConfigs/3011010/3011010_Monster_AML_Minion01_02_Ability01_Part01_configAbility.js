const configAbility = {
  "fileName": "3011010_Monster_AML_Minion01_02_Ability01_Part01",
  "childAbilityList": [
    "3011010_Monster_AML_Minion01_02_Ability01_Camera",
    "3011010_Monster_AML_Minion01_02_Ability01_Part01",
    "3011010_Monster_AML_Minion01_02_Ability01_Part02"
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
      "ability": "Monster_AML_Minion01_02_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}