const configAbility = {
  "fileName": "5014014_Monster_W5_Vtuber_Ability04_Part01",
  "childAbilityList": [
    "5014014_Monster_W5_Vtuber_Ability04_Part01",
    "5014014_Monster_W5_Vtuber_Ability04_Part02",
    "5014014_Monster_W5_Vtuber_Ability04_Camera"
  ],
  "skillTrigger": "Skill04",
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
      "ability": "Monster_W5_Vtuber_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Ally Target",
    "targetIsVariable": true
  },
  "references": []
}