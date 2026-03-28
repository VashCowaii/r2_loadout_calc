const configAbility = {
  "fileName": "4014018_Monster_W4_Nikadory_Ability12_Part01",
  "childAbilityList": [
    "4014018_Monster_W4_Nikadory_Ability12_Camera",
    "4014018_Monster_W4_Nikadory_Ability12_Part01",
    "4014018_Monster_W4_Nikadory_Ability12_Part02"
  ],
  "skillTrigger": "Skill12",
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
      "ability": "Monster_W4_Nikadory_Ability12_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}