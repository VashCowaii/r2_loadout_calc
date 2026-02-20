const configAbility = {
  "fileName": "2035012_Monster_W2_Feixiao_IF_AbilityP01_Part01",
  "childAbilityList": [
    "2035012_Monster_W2_Feixiao_AbilityP01_Camera",
    "2035012_Monster_W2_Feixiao_IF_AbilityP01_Part01",
    "2035012_Monster_W2_Feixiao_IF_AbilityP01_Part02"
  ],
  "skillTrigger": "SkillP01",
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
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W2_Feixiao_IF_AbilityP01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "references": []
}