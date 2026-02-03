const configAbility = {
  "fileName": "8012140_Monster_AML_Boss_Part1_Ability02_Part01",
  "childAbilityList": [
    "8012140_Monster_AML_Boss_Part1_Ability02_Part01",
    "8012140_Monster_AML_Boss_Part1_Ability02_Part02",
    "8012140_Monster_AML_Boss_Part1_Ability02_Camera"
  ],
  "skillTrigger": "Skill02",
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
      "ability": "Monster_AML_Boss_Part1_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}