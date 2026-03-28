const configAbility = {
  "fileName": "4014021_Monster_W4_Hearse_IF_Ability04_Part01",
  "childAbilityList": [
    "4014021_Monster_W4_Hearse_Ability04_Camera",
    "4014021_Monster_W4_Hearse_IF_Ability04_Part01",
    "4014021_Monster_W4_Hearse_IF_Ability04_Part02"
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
      "ability": "Monster_W4_Hearse_IF_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{All Team Members}}"
  },
  "references": []
}