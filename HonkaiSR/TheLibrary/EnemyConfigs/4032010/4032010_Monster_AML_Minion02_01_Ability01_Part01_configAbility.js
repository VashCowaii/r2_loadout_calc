const configAbility = {
  "fileName": "4032010_Monster_AML_Minion02_01_Ability01_Part01",
  "childAbilityList": [
    "4032010_Monster_AML_Minion02_01_Ability01_Camera",
    "4032010_Monster_AML_Minion02_01_Ability01_Part01",
    "4032010_Monster_AML_Minion02_01_Ability01_Part02"
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
      "ability": "Monster_AML_Minion02_01_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "subTarget": "Blast Targets"
  },
  "references": []
}