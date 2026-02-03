const configAbility = {
  "fileName": "8012143_Monster_AML_Boss_Part1_Ability01_Part01",
  "childAbilityList": [
    "8012143_Monster_AML_Boss_Part1_Ability01_Part01",
    "8012143_Monster_AML_Boss_Part1_Ability01_Part02",
    "8012143_Monster_AML_Boss_Part1_Ability01_Camera"
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
      "ability": "Monster_AML_Boss_Part1_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}