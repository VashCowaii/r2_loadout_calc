const configAbility = {
  "fileName": "5012100_Monster_W5_Magical_Ability01_Part01",
  "childAbilityList": [
    "5012100_Monster_W5_Magical_Ability01_Camera",
    "5012100_Monster_W5_Magical_Ability01_Part01",
    "5012100_Monster_W5_Magical_Ability01_Part02"
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
      "ability": "Monster_W5_Magical_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Animation Event",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "state": "Skill01",
      "passed": [
        {
          "name": "Animation Task"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}