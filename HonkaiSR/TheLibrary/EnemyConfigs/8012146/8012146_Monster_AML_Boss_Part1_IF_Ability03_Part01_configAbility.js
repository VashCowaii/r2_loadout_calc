const configAbility = {
  "fileName": "8012146_Monster_AML_Boss_Part1_IF_Ability03_Part01",
  "childAbilityList": [
    "8012146_Monster_AML_Boss_Part1_IF_Ability03_Part01",
    "8012146_Monster_AML_Boss_Part1_IF_Ability03_Part02",
    "8012146_Monster_AML_Boss_Part1_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_AML_Boss_Part1_IF_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}